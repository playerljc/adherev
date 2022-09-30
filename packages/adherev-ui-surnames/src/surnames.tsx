import classNames from 'classnames';
import { computed, defineComponent, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue';
import { array, string } from 'vue-types';

import Util from '@baifendian/adherev-util';

const selectorPrefix = 'adherev-ui-surnames';

const DURATION = 100;

enum positionType {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

type IndexMapItemType = {
  name: string;
  top: number;
  bottom: number;
  left: number;
  right: number;
  offsetTop: number;
  offsetLeft: number;
  width: number;
  height: number;
};

const surnamesProps = {
  position: string<positionType>().def(positionType.right),
  indexes: array<{ index: string }>().def([]),
  dataSource: array<{ index: string; data: object[] }>().def([]),
};

export default defineComponent({
  name: 'adv-surnames',
  props: surnamesProps,
  slots: ['index', 'title', 'content'],
  emits: ['scroll', 'before-scroll'],
  setup(props, { slots, emit, expose }) {
    const root = ref<HTMLElement>();
    const highlightedEl = ref<HTMLElement>();
    const contentEl = ref<HTMLElement>();
    const indexEl = ref<HTMLElement>();
    const indexInnerEl = ref<HTMLElement>();

    let key = false;
    let isMouseClicked = false;
    let isMouseMoved = false;
    let startY = -1;
    let startX = -1;
    let curIndexName = '';
    let indexPositionMap: IndexMapItemType[] = [];
    let maskEl: HTMLElement | null = null;

    const getClassName = computed(() =>
      classNames(selectorPrefix, `${selectorPrefix}-config-position-${props.position}`),
    );

    const onClick = (e: any) => {
      e.preventDefault();

      e.stopPropagation();

      clickDetail(e);
    };

    const onTouchmove = (e: any) => {
      e.preventDefault();

      const y = e.changedTouches[0].pageY;

      const x = e.changedTouches[0].pageX;

      const target = e.target;

      const indexItemEl = Util.getTopDom?.(target, `${selectorPrefix}-index-item`);

      curIndexName = indexItemEl?.dataset.name as string;

      moveDetail(x, y);
    };

    const onTouchend = () => {
      (highlightedEl.value as HTMLElement).style.display = 'none';
      (highlightedEl.value as HTMLElement).innerText = '';
      (highlightedEl.value as HTMLElement).style.transform = 'translate3d(0,0,0)';
    };

    const onMousedown = (e: any) => {
      e.preventDefault();

      startY = e.pageY;

      startX = e.pageX;

      const target = e.target;

      const indexItemEl = Util.getTopDom?.(target, `${selectorPrefix}-index-item`);

      // console.log('按下获取索引名称', indexItemEl.dataset.name);

      curIndexName = indexItemEl?.dataset.name as string;

      isMouseClicked = true;
    };

    const onMousemove = (e: any) => {
      if (!isMouseClicked) return false;

      isMouseMoved = true;

      e.preventDefault();

      const y = e.pageY;

      const x = e.pageX;

      moveDetail(x, y);
    };

    const onMouseleave = () => {
      isMouseClicked = false;
      isMouseMoved = false;

      (highlightedEl.value as HTMLElement).style.display = 'none';
      (highlightedEl.value as HTMLElement).innerText = '';
      (highlightedEl.value as HTMLElement).style.transform = 'translate3d(0,0,0)';
    };

    const onMouseup = (e: any) => {
      if (isMouseMoved) {
        isMouseClicked = false;
        isMouseMoved = false;

        (highlightedEl.value as HTMLElement).style.display = 'none';
        (highlightedEl.value as HTMLElement).innerText = '';
        (highlightedEl.value as HTMLElement).style.transform = 'translate3d(0,0,0)';

        return false;
      }

      e.preventDefault();

      clickDetail(e);
    };

    const onResize = () => update();

    const clickDetail = (e: any) => {
      const target = e.target;

      e.preventDefault();

      if (key) {
        return false;
      }

      key = true;

      (maskEl as HTMLElement).style.display = 'block';

      const targetEl = Util.getTopDom?.(target, `${selectorPrefix}-index-item`);

      scrollToAnimation(targetEl?.dataset?.name);
    };

    const moveDetail = (x: number, y: number) => {
      const index = findIndex(x, y);

      if (index) {
        (highlightedEl.value as HTMLElement).innerText = index.name;
        (highlightedEl.value as HTMLElement).style.display = 'block';

        const direction = getDirection();

        if (direction === 'vertical') {
          const translateY = index.offsetTop + Math.floor(index.height / 2);
          (highlightedEl.value as HTMLElement).style.transform = `translate3d(0,${translateY}px,0)`;
        } else {
          const translateX = index.offsetLeft + index.width;
          (highlightedEl.value as HTMLElement).style.transform = `translate3d(${translateX}px,0,0)`;
        }

        scrollTo(index.name);
      }
    };

    const initEvent = () => {
      if (Util.isTouch?.()) {
        indexInnerEl.value?.addEventListener('click', onClick);

        // 索引touchmove和mousemove
        indexInnerEl.value?.addEventListener('touchmove', onTouchmove);

        indexInnerEl.value?.addEventListener('touchend', onTouchend);
      } else {
        indexInnerEl.value?.addEventListener('mousedown', onMousedown);

        indexInnerEl.value?.addEventListener('mousemove', onMousemove);

        indexInnerEl.value?.addEventListener('mouseleave', onMouseleave);

        indexInnerEl.value?.addEventListener('mouseup', onMouseup);

        window.addEventListener('resize', onResize);
      }
    };

    const adapterDimension = () => {
      const direction = getDirection();

      if (direction === 'vertical') {
        (root.value as HTMLElement).style.height = `${
          (indexInnerEl.value?.offsetHeight as number) + 50
        }px`;
        (root.value as HTMLElement).style.width = '100%';
      } else {
        (root.value as HTMLElement).style.height = '100%';
      }
    };

    const createIndexPosition = () => {
      const indexItemEls = indexInnerEl.value?.querySelectorAll(
        `.${selectorPrefix}-index-item`,
      ) as NodeListOf<HTMLElement>;

      indexPositionMap = [];

      // 计算每一项距离视口的top和bottom
      for (let i = 0; i < indexItemEls.length; i++) {
        const indexItemEl = indexItemEls[i];
        const indexName = indexItemEl.dataset.name as string;

        const rect = indexItemEl.getBoundingClientRect();

        indexPositionMap.push({
          name: indexName,
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          offsetTop: indexItemEl.offsetTop,
          offsetLeft: indexItemEl.offsetLeft,
          width: indexItemEl.offsetWidth,
          height: indexItemEl.offsetHeight,
        });
      }
    };

    const createMask = () => {
      const el = document.createElement('div');

      el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

      maskEl = el.firstElementChild as HTMLElement;

      document.body.appendChild(maskEl);
    };

    const scrollToAnimation = (name: string | undefined, duration = 100) => {
      const targetEl = contentEl.value?.querySelector(
        `.${selectorPrefix}-group-title[data-name='${name}']`,
      ) as HTMLElement;

      let scrollVal = contentEl.value?.scrollTop as number;

      const targetTop = targetEl.offsetTop;

      // @ts-ignore
      const { updateInterval } = screen;

      const step =
        (root.value?.scrollHeight as number) /
        ((DURATION | duration) / (updateInterval || 16.7) +
          ((DURATION | duration) % (updateInterval || 16.7) !== 0 ? 1 : 0));

      /**
       * scrollAnimation
       */
      function scrollAnimation() {
        if ((contentEl.value?.scrollTop as number) < targetTop) {
          if (scrollVal + step > targetTop) {
            scrollVal = targetTop;
          } else {
            scrollVal += step;
          }
        } else if (scrollVal - step < targetTop) {
          scrollVal = targetTop;
        } else {
          scrollVal -= step;
        }

        (contentEl.value as HTMLElement).scrollTop = scrollVal;

        if ((contentEl.value?.scrollTop as number) < targetTop) {
          if (scrollVal >= targetTop) {
            clear();
          } else {
            window.requestAnimationFrame(scrollAnimation);
          }
        } else if (scrollVal <= targetTop) {
          clear();
        } else {
          window.requestAnimationFrame(scrollAnimation);
        }

        function clear() {
          key = false;
          isMouseClicked = false;
          (maskEl as HTMLElement).style.display = 'none';

          emit('scroll', name);
        }
      }

      emit('before-scroll', name);

      window.requestAnimationFrame(scrollAnimation);
    };

    const scrollTo = (name: string) => {
      (contentEl.value as HTMLElement).scrollTop = (
        contentEl?.value?.querySelector(
          `.${selectorPrefix}-group-title[data-name='${name}']`,
        ) as HTMLElement
      ).offsetTop;

      emit('scroll', name);
    };

    const getDirection = () =>
      props.position === 'left' || props.position === 'right' ? 'vertical' : 'horizontal';

    const findIndex = (x: number, y: number) => {
      const direction = getDirection();

      const val = direction === 'vertical' ? y - startY : x - startX;
      const curIndex = indexPositionMap.find((t) => t.name === curIndexName);

      // console.log('获取增量', val);
      // console.log('移动获取当前索引信息', curIndex);

      let low = 0;
      let high = indexPositionMap.length - 1;
      let middle;
      let target;

      while (
        low <= high &&
        low <= indexPositionMap.length - 1 &&
        high <= indexPositionMap.length - 1
      ) {
        middle = (high + low) >> 1;
        const targetVal = indexPositionMap[middle];

        let t1;
        let t2;
        let t3;
        let t4;
        if (direction === 'vertical') {
          t1 = (curIndex?.top as number) + val;
          t2 = (curIndex?.bottom as number) + val;
          t3 = targetVal.top;
          t4 = targetVal.bottom;
        } else {
          t1 = (curIndex?.left as number) + val;
          t2 = (curIndex?.right as number) + val;
          t3 = targetVal.left;
          t4 = targetVal.right;
        }

        if (t1 >= t3 && t1 <= t4) {
          target = targetVal;
          break;
        } else if (t1 < t3) {
          high = middle - 1;
        } else {
          low = middle + 1;
        }
      }

      if (target) {
        return target;
      } else {
        return null;
      }
    };

    const update = () => {
      adapterDimension();
      createIndexPosition();
    };

    const renderIndex = (): JSX.Element[] =>
      props.indexes.map((index) => {
        return (
          <a key={index.index} class={`${selectorPrefix}-index-item`} data-name={index.index}>
            {slots.index ? slots?.index?.(index) : index.index}
          </a>
        );
      });

    const renderContent = () => {
      return props.dataSource.map((record) => {
        return (
          <div key={record.index} class={`${selectorPrefix}-group`}>
            <a class={`${selectorPrefix}-group-title`} data-name={record.index}>
              {slots.title ? slots?.title?.(record) : record.index}
            </a>
            <div class={`${selectorPrefix}-group-inner`}>
              {slots.content ? slots?.content?.(record) : null}
            </div>
          </div>
        );
      });
    };

    onMounted(() => {
      initEvent();
      createMask();
      adapterDimension();
      createIndexPosition();
    });

    onUpdated(() => {
      adapterDimension();
      createIndexPosition();
    });

    onBeforeUnmount(() => {
      if (maskEl) {
        (maskEl as HTMLElement)?.parentElement?.removeChild(maskEl);
      }
    });

    expose({
      scrollToAnimation,
      scrollTo,
    });

    return () => (
      <div class={getClassName.value} ref={root}>
        <div class={`${selectorPrefix}-highlighted`} ref={highlightedEl} />

        <div class={`${selectorPrefix}-content`} ref={contentEl}>
          {renderContent()}
        </div>

        <div class={`${selectorPrefix}-index`} ref={indexEl}>
          <div class={`${selectorPrefix}-index-inner`} ref={indexInnerEl}>
            {renderIndex()}
          </div>
        </div>
      </div>
    );
  },
});
