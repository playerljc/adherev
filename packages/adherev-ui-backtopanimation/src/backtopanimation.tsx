import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
import { integer, number, oneOfType, string } from 'vue-types';

import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-backtopanimation';

export const backTopAnimationProps = {
  className: string().def(''),
  zIndex: oneOfType([string(), number()]).def(Resource.Dict.value.ResourceNormalMaxZIndex.value),
  duration: integer().def(300),
};

export default defineComponent({
  name: 'adv-backtopanimation',
  props: backTopAnimationProps,
  emits: ['trigger', 'scrollTop', 'target'],
  setup(props, { emit }) {
    const root = ref<HTMLDivElement>();

    let scrollEl: HTMLElement | null = null;
    let maskEl: HTMLElement | null = null;
    let key: boolean = false;

    onMounted(() => {
      renderMask();
      initScrollEvent();
    });

    onBeforeUnmount(() => {
      if (maskEl) {
        try {
          maskEl?.parentElement?.removeChild(maskEl);
        } catch (e) {}
      }
    });

    const initScrollEvent = () => {
      emit('target', (target: HTMLElement | null) => {
        scrollEl = target;

        if (!maskEl || !scrollEl) return;

        scrollEl.addEventListener(
          'scroll',
          () => {
            if (!maskEl || !scrollEl || !root.value) return;

            if (scrollEl.scrollTop !== 0) {
              root.value && (root.value.style.display = 'block');
            } else {
              root.value && (root.value.style.display = 'none');
            }
          },
          false,
        );
      });
    };

    const renderMask = () => {
      maskEl = document.body.querySelector(`.${selectorPrefix}-mask`);

      if (!maskEl) {
        maskEl = document.createElement('div');
        maskEl.className = `${selectorPrefix}-mask`;
        document.body.appendChild(maskEl);
      }
    };

    const trigger = () => {
      if (key) return;

      emit('trigger', () => {
        if (!maskEl || !scrollEl) return;

        key = true;

        maskEl.style.display = 'block';

        let scrollVal = scrollEl.scrollTop;

        const targetTop = 0;

        // 一次滚动的步进
        const step =
          scrollEl.scrollHeight /
          (props.duration / ((screen as any).updateInterval || 16.7) +
            (props.duration % ((screen as any).updateInterval || 16.7) !== 0 ? 1 : 0));

        /**
         * 动画的滚动
         */
        function scrollAnimation() {
          if (!maskEl || !scrollEl) return;

          if (scrollEl && scrollEl.scrollTop < targetTop) {
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

          if (scrollEl) {
            scrollEl.scrollTop = scrollVal;
          }

          emit('scrollTop', scrollVal);

          if (scrollEl.scrollTop < targetTop) {
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
            if (!maskEl || !scrollEl) return;

            maskEl.style.display = 'none';

            key = false;
          }
        }

        window.requestAnimationFrame(scrollAnimation);
      });
    };

    return () => (
      <div
        ref={root}
        class={selectorPrefix}
        // @ts-ignore
        onClick={() => {
          trigger();
        }}
      />
    );
  },
});
