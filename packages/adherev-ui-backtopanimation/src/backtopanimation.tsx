import { VNode } from 'vue';

import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-backtopanimation';

const BackTopAnimation: any = {
  name: 'adv-backtopanimation',
  props: {
    zIndex: {
      type: [String, Number],
      default: Resource.Dict.value.ResourceNormalMaxZIndex.value,
    },
    duration: {
      type: Number,
      default: 300,
    },
  },
  emits: ['target', 'trigger', 'scrollTop'],
  data() {
    return {
      $maskEl: null,
      $scrollEl: null,
      $key: false,
    };
  },
  mounted() {
    this.initScrollEvent();

    this.renderMask();
  },
  beforeDestroy() {
    const { $data } = this;

    if ($data.$maskEl) {
      try {
        $data.$maskEl.parentElement.removeChild($data.$maskEl);
      } catch (e) {}
    }
  },
  methods: {
    trigger() {
      if (this.$data.$key) return;

      const self = this;

      this.$emit('trigger', () => {
        const { $data, duration } = self;

        $data.$key = true;

        $data.$maskEl.style.display = 'block';

        let scrollVal = $data.$scrollEl.scrollTop;
        const targetTop = 0;

        // 一次滚动的步进
        const step =
          $data.$scrollEl.scrollHeight /
          //@ts-ignore
          (duration / (screen.updateInterval || 16.7) +
            //@ts-ignore
            (duration % (screen.updateInterval || 16.7) !== 0 ? 1 : 0));

        /**
         * 动画的滚动
         */
        function scrollAnimation() {
          if ($data.$scrollEl.scrollTop < targetTop) {
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

          $data.$scrollEl.scrollTop = scrollVal;

          self.$emit('scrollTop', scrollVal);

          if ($data.$scrollEl.scrollTop < targetTop) {
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
            $data.$maskEl.style.display = 'none';

            $data.$key = false;
          }
        }

        window.requestAnimationFrame(scrollAnimation);
      });
    },
    initScrollEvent() {
      const self = this;

      this.$emit('target', (target) => {
        const { $data, $refs } = self;

        $data.$scrollEl = target;

        $data.$scrollEl.addEventListener(
          'scroll',
          () => {
            if ($data.$scrollEl.scrollTop !== 0) {
              window.requestAnimationFrame(() => {
                $refs.ref.style.display = 'block';
              });
            } else {
              window.requestAnimationFrame(() => {
                $refs.ref.style.display = 'none';
              });
            }
          },
          false,
        );
      });
    },
    renderMask() {
      const { $data } = this;

      $data.$maskEl = document.body.querySelector(`.${selectorPrefix}-mask`);

      if (!$data.$maskEl) {
        $data.$maskEl = document.createElement('div');
        $data.$maskEl.className = `${selectorPrefix}-mask`;
        document.body.appendChild($data.$maskEl);
      }
    },
  },
  render(h): VNode {
    return (
      <div
        class={selectorPrefix}
        ref="ref"
        onClick={() => {
          this.trigger();
        }}
      />
    );
  },
};

export default BackTopAnimation;
