import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-stickuplayout';

export default {
  name: 'adv-stickuplayout',
  props: {
    fixedClassName: {
      type: String,
      default: '',
    },
    fixedStyle: {
      type: Object,
      default: () => ({}),
    },
    innerClassName: {
      type: String,
      default: '',
    },
    innerStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      $key: false,
      $maskEl: null,
      $index: [],
      $headerEls: null,
      $preScrollObj: null,
    };
  },
  mounted() {
    this.initial();
  },
  updated() {
    this.initial();
  },
  beforeDestroy() {
    const {
      $data: { $maskEl },
    } = this;
    if ($maskEl) {
      $maskEl.parentElement.removeChild($maskEl);
    }
  },
  methods: {
    initial() {
      const { $refs, $data } = this;
      $data.$key = false;
      $data.$index = [];
      $data.$headerEls = $refs.el.querySelectorAll(`.${selectorPrefix}-item-header`);

      this.createIndex();

      this.position();

      $refs.innerEl.removeEventListener('scroll', this.onScroll);
      $refs.innerEl.addEventListener('scroll', this.onScroll);
    },
    createIndex() {
      const { $refs, $data } = this;

      let pre = 0;

      $data.$index = [];

      $data.$preScrollObj = null;

      for (let i = 0, len = $data.$headerEls.length; i < len; i++) {
        const header = $data.$headerEls[i];

        let rangeStart = pre;

        let rangeEnd;

        if (i !== len - 1) {
          rangeEnd = $data.$headerEls[i + 1].offsetTop - header.offsetHeight;
        } else {
          rangeEnd = $refs.innerEl.scrollHeight;
        }

        $data.$index.push({
          start: rangeStart,
          end: rangeEnd,
          dom: header,
          index: i,
        });
        pre = rangeEnd;

        if (pre > $refs.innerEl.scrollHeight - $refs.innerEl.offsetHeight) {
          break;
        }
      }
    },
    position() {
      const { $refs, $data } = this;

      const val = $refs.innerEl.scrollTop;

      let low = 0,
        high = $data.$index.length - 1,
        middle,
        target;
      while (low <= high && low <= $data.$index.length - 1 && high <= $data.$index.length - 1) {
        middle = (high + low) >> 1;
        const targetVal = $data.$index[middle];
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
        if ($data.$preScrollObj && $data.$preScrollObj.index === target.index) {
          return false;
        } else {
          $data.$preScrollObj = target;
          // @ts-ignore
          $refs.fixedEl.innerHTML = target.dom.outerHTML;

          this.$emit('change', target.index);
        }
      }
    },
    onScroll() {
      this.position();
    },
    scrollAnimationTo(targetTop = 0, duration = 300) {
      const { $refs, $data } = this;

      if ($data.$key) return;

      this.initMask();

      $data.$key = true;

      $data.$maskEl.style.display = 'block';

      let srcTop = $refs.innerEl.scrollTop,
        scrollVal = srcTop,
        /**
         * 一次滚动的步进
         * @type {number}
         */
        setp =
          $refs.innerEl.scrollHeight /
          // @ts-ignore
          (duration / (screen.updateInterval || 16.7) +
            // @ts-ignore
            (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

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

        $refs.innerEl.scrollTop = scrollVal;

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
          $data.$key = false;
          $data.$maskEl.style.display = 'none';
        }
      }

      /** *
       * 滚动core
       */
      window.requestAnimationFrame(scrollAnimation);
    },
    scrollTo(item, duration = 300) {
      const {
        $refs,
        $data: { $headerEls },
      } = this;

      const targetTop = item.start + $headerEls[item.index].offsetHeight;
      if (duration === 0) {
        $refs.innerEl.scrollTop = targetTop;
      } else {
        this.scrollAnimationTo(targetTop, duration);
      }
    },
    initMask() {
      if (!this.$data.$maskEl) {
        this.$data.$maskEl = document.createElement('div');

        this.$data.$maskEl.className = `${selectorPrefix}-mask`;

        window.document.body.appendChild(this.$data.$maskEl);
      }
    },
    refresh() {
      this.initial();
    },
    /**
     * scrollToByIndex
     * @param {number} index
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByIndex(index, duration = 300) {
      const {
        $data: { $index },
      } = this;

      let i = 0,
        item;
      for (; i < $index.length; i++) {
        if ($index[i].index === index) {
          item = $index[i];
          break;
        }
      }
      if (!item) return false;

      this.scrollTo(item, duration);
    },
    /**
     * scrollToByHeaderEl
     * @param {HtmlElement} headerEl
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByHeaderEl(headerEl, duration = 300) {
      const {
        $data: { $index },
      } = this;

      let i = 0,
        item,
        index = -1;
      for (; i < $index.length; i++) {
        if ($index[i].dom === headerEl) {
          item = $index[i];
          index = i;
          break;
        }
      }
      if (!item) return false;

      this.scrollTo(item, duration);
    },
  },
  render(h) {
    const { $slots, fixedClassName, fixedStyle, innerClassName, innerStyle } = this;

    return (
      <div class={selectorPrefix} ref="el">
        <div
          class={classNames(`${selectorPrefix}-fixed`, fixedClassName.split(/\s+/))}
          style={fixedStyle}
          ref="fixedEl"
        />
        <div
          class={classNames(`${selectorPrefix}-inner`, innerClassName.split(/\s+/))}
          style={innerStyle}
          ref="innerEl"
        >
          {$slots.default}
        </div>
      </div>
    );
  },
};
