import classNames from 'classnames';
import { CSSProperties, defineComponent, onBeforeMount, onMounted, onUpdated, ref } from 'vue';
import { object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-stickuplayout';

const stickupLayoutProps = {
  fixedClassName: string().def(''),
  fixedStyle: object<CSSProperties>().def({}),
  innerClassName: string().def(''),
  innerStyle: object<CSSProperties>().def({}),
};

type IndexItemType = {
  start: number;
  end: number;
  dom: HTMLElement;
  index: number;
};

export default defineComponent({
  name: 'adv-stickuplayout',
  props: stickupLayoutProps,
  setup(props, { slots, emit, expose }) {
    const root = ref<HTMLElement>();
    const fixedEl = ref<HTMLElement>();
    const innerEl = ref<HTMLElement>();

    let key = false;
    let maskEl: HTMLElement | null = null;
    let index: IndexItemType[] = [];
    let headerEls: NodeListOf<HTMLElement>;
    let preScrollObj: IndexItemType | null = null;

    const initial = () => {
      key = false;
      index = [];
      headerEls = root.value?.querySelectorAll(
        `.${selectorPrefix}-item-header`,
      ) as NodeListOf<HTMLElement>;

      createIndex();

      position();

      innerEl.value?.removeEventListener('scroll', onScroll);
      innerEl.value?.addEventListener('scroll', onScroll);
    };

    const createIndex = () => {
      let pre = 0;

      index = [];

      preScrollObj = null;

      for (let i = 0, len = headerEls.length; i < len; i++) {
        const header = headerEls[i];

        let rangeStart = pre;

        let rangeEnd: number;

        if (i !== len - 1) {
          rangeEnd = headerEls[i + 1].offsetTop - header.offsetHeight;
        } else {
          rangeEnd = innerEl.value?.scrollHeight as number;
        }

        index.push({
          start: rangeStart,
          end: rangeEnd,
          dom: header,
          index: i,
        });
        pre = rangeEnd;

        if (
          pre >
          (innerEl.value?.scrollHeight as number) - (innerEl.value?.offsetHeight as number)
        ) {
          break;
        }
      }
    };

    const position = () => {
      const val = innerEl.value?.scrollTop as number;

      let low = 0,
        high = index.length - 1,
        middle,
        target;
      while (low <= high && low <= index.length - 1 && high <= index.length - 1) {
        middle = (high + low) >> 1;
        const targetVal = index[middle];
        if (val >= targetVal.start && val < targetVal.end) {
          target = targetVal;
          break;
        } else if (val < targetVal.start) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }

      if (target) {
        if (preScrollObj && preScrollObj.index === target.index) {
          return false;
        } else {
          preScrollObj = target;
          (fixedEl.value as HTMLElement).innerHTML = target.dom.outerHTML;

          emit('change', target.index);
        }
      }
    };

    const onScroll = () => position();

    const scrollAnimationTo = (targetTop = 0, duration = 300) => {
      if (key) return;

      initMask();

      key = true;

      (maskEl as HTMLElement).style.display = 'block';

      let srcTop = innerEl.value?.scrollTop as number;

      let scrollVal = srcTop;

      /**
       * 一次滚动的步进
       * @type {number}
       */
      let setp =
        (innerEl.value?.scrollHeight as number) /
        // @ts-ignore
        (duration / ((window.screen?.updateInterval as number) || 16.7) +
          // @ts-ignore
          (duration % ((window.screen?.updateInterval as number) || 16.7) !== 0 ? 1 : 0));

      /** *
       * 动画的滚动
       */
      function scrollAnimation() {
        if (srcTop < targetTop) {
          if (scrollVal + setp > targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal += setp;
          }
        } else if (scrollVal - setp < targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal -= setp;
        }

        (innerEl.value as HTMLElement).scrollTop = scrollVal;

        if (srcTop < targetTop) {
          if (scrollVal >= targetTop) {
            clear();
          } else {
            if (typeof window !== 'undefined') window.requestAnimationFrame(scrollAnimation);
          }
        } else if (scrollVal <= targetTop) {
          clear();
        } else {
          if (typeof window !== 'undefined') window.requestAnimationFrame(scrollAnimation);
        }

        function clear() {
          key = false;
          (maskEl as HTMLElement).style.display = 'none';
        }
      }

      /** *
       * 滚动core
       */
      window.requestAnimationFrame(scrollAnimation);
    };

    const scrollTo = (item: IndexItemType, duration = 300) => {
      const targetTop = item.start + headerEls[item.index].offsetHeight;
      if (duration === 0) {
        (innerEl.value as HTMLElement).scrollTop = targetTop;
      } else {
        scrollAnimationTo(targetTop, duration);
      }
    };

    const initMask = () => {
      if (!maskEl) {
        maskEl = document.createElement('div');

        maskEl.className = `${selectorPrefix}-mask`;

        window.document.body.appendChild(maskEl);
      }
    };

    const refresh = () => initial();

    /**
     * scrollToByIndex
     * @param {number} _index
     * @param {number} duration
     * @return {boolean}
     */
    const scrollToByIndex = (_index: number, duration = 300) => {
      let i = 0,
        item;
      for (; i < index.length; i++) {
        if (index[i].index === _index) {
          item = index[i];
          break;
        }
      }
      if (!item) return false;

      scrollTo(item, duration);
    };

    /**
     * scrollToByHeaderEl
     * @param {HtmlElement} headerEl
     * @param {number} duration
     * @return {boolean}
     */
    const scrollToByHeaderEl = (headerEl: HTMLElement, duration = 300) => {
      let i = 0,
        item,
        _index = -1;
      for (; i < index.length; i++) {
        if (index[i].dom === headerEl) {
          item = index[i];
          _index = i;
          break;
        }
      }
      if (!item) return false;

      scrollTo(item, duration);
    };

    expose({
      refresh,
      scrollToByIndex,
      scrollToByHeaderEl,
    });

    onMounted(() => {
      initial();
    });

    onUpdated(() => {
      initial();
    });

    onBeforeMount(() => {
      if (maskEl) {
        maskEl?.parentElement?.removeChild?.(maskEl);
      }
    });

    return () => (
      <div
        class={selectorPrefix}
        // @ts-ignore
        ref={root}
      >
        <div
          class={classNames(`${selectorPrefix}-fixed`, props.fixedClassName.split(/\s+/))}
          style={props.fixedStyle}
          // @ts-ignore
          ref={fixedEl}
        />
        <div
          class={classNames(`${selectorPrefix}-inner`, props.innerClassName.split(/\s+/))}
          style={props.innerStyle}
          // @ts-ignore
          ref={innerEl}
        >
          {slots?.default?.()}
        </div>
      </div>
    );
  },
});
