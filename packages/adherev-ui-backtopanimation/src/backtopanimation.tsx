// @ts-ignore
import classNames from 'classnames';

// @ts-ignore
import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-backtopanimation';

export default {
  name: 'adv-backtopanimation',
  props: {
    className: {
      type: String,
      default: '',
    },
    zIndex: {
      type: [String, Number],
      default: Resource.Dict.value.ResourceNormalMaxZIndex.value,
    },
    duration: {
      type: Number,
      default: 300,
    },
    onTarget: {
      type: Function,
      default: () => window,
    },
    onTrigger: {
      type: Function,
    },
    onScrollTop: {
      type: Function,
    },
  },
  data() {
    return {
      _maskEl: null,
      _scrollEl: null,
      _key: false,
    };
  },
  mounted() {
    // @ts-ignore
    this.initScrollEvent();

    // @ts-ignore
    this.renderMask();
  },
  beforeDestroy() {
    // @ts-ignore
    const { $data } = this;

    if ($data._maskEl) {
      // @ts-ignore
      $data._maskEl.parentElement.removeChild($data._maskEl);
    }
  },
  methods: {
    trigger() {
      // @ts-ignore
      if (this.$data._key) return;

      const self = this;

      // @ts-ignore
      this.$emit('trigger', () => {
        // @ts-ignore
        const { $data, duration } = self;

        $data._key = true;

        // @ts-ignore
        $data._maskEl.style.display = 'block';

        // @ts-ignore
        const srcTop = $data._scrollEl.scrollTop;
        let scrollVal = srcTop;
        const targetTop = 0;

        // 一次滚动的步进
        const step =
          // @ts-ignore
          $data._scrollEl.scrollHeight /
          // @ts-ignore
          (duration / (screen.updateInterval || 16.7) +
            // @ts-ignore
            (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

        /**
         * 动画的滚动
         */
        function scrollAnimation() {
          if (srcTop < targetTop) {
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

          // @ts-ignore
          $data._scrollEl.scrollTop = scrollVal;

          // @ts-ignore
          self.$emit('scrollTop', scrollVal);

          if (srcTop < targetTop) {
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
            // @ts-ignore
            $data._maskEl.style.display = 'none';

            $data._key = false;
          }
        }

        window.requestAnimationFrame(scrollAnimation);
      });
    },
    initScrollEvent() {
      const self = this;

      // @ts-ignore
      this.$emit('target', (target) => {
        // @ts-ignore
        const { $data, $refs } = self;

        $data._scrollEl = target;

        // @ts-ignore
        $data._scrollEl.addEventListener(
          'scroll',
          () => {
            // @ts-ignore
            if ($data._scrollEl.scrollTop !== 0) {
              window.requestAnimationFrame(() => {
                // @ts-ignore
                $refs.ref.style.display = 'block';
              });
            } else {
              window.requestAnimationFrame(() => {
                // @ts-ignore
                $refs.ref.style.display = 'none';
              });
            }
          },
          false,
        );
      });
    },
    renderMask() {
      // @ts-ignore
      const { $data } = this;

      // @ts-ignore
      $data._maskEl = document.body.querySelector(`.${selectorPrefix}-mask`);

      if (!$data._maskEl) {
        $data._maskEl = document.createElement('div');
        $data._maskEl.className = `${selectorPrefix}-mask`;
        document.body.appendChild($data._maskEl);
      }
    },
  },
  render(h) {
    // @ts-ignore
    const { className } = this;

    return (
      // @ts-ignore
      <div
        class={classNames(
          selectorPrefix,
          // @ts-ignore
          className.split(' '),
        )}
        ref="ref"
        onClick={() => {
          // @ts-ignore
          this.trigger();
        }}
      />
    );
  },
};
