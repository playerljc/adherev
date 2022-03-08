import classNames from 'classnames';
import { defineComponent, watch } from 'vue';
import useSlide, { slideProps } from './slide';
import { slider } from './slidelayout';

const selectorPrefix = 'adherev-ui-slidelayout-overlay';

const overlayProps = {
  ...slideProps,
};

export default defineComponent({
  name: 'adv-slidelayout-overlay',
  props: overlayProps,
  emits: ['after-show', 'after-close'],
  setup(props, context) {
    const { slots, emit } = context;

    const { setPositionConfig, getDuration, getElRef } = useSlide(props, context);

    setPositionConfig(({ el, maskEl }) => ({
      init: {
        left: () => {
          slider(el.value, '-100%', '0', '0', '0');
        },
        right: () => {
          slider(el.value, `${el.value?.parentElement?.offsetWidth}px`, '0', '0', '0');
        },
        top: () => {
          slider(el.value, '0', '-100%', '0', '0');
        },
        bottom: () => {
          slider(el.value, '0', `${el.value?.parentElement?.offsetHeight}px`, '0', '0');
        },
      },
      show: {
        left: (time: string | number | null | undefined) => {
          slider(el.value, '0', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-show');
          });

          if (maskEl) maskEl.style.display = 'block';
        },
        right: (time: string | number | null | undefined) => {
          slider(
            el.value,
            `${el.value?.parentElement?.offsetWidth - el.value?.offsetWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-show');
            },
          );

          if (maskEl) maskEl.style.display = 'block';
        },
        top: (time: string | number | null | undefined) => {
          slider(el.value, '0', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-show');
          });

          if (maskEl) maskEl.style.display = 'block';
        },
        bottom: (time: string | number | null | undefined) => {
          slider(
            el.value,
            '0',
            `${el.value?.parentElement?.offsetHeight - el.value.offsetHeight}px`,
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-show');
            },
          );

          if (maskEl) maskEl.style.display = 'block';
        },
      },
      close: {
        left: (time: string | number | null | undefined) => {
          slider(el.value, '-100%', '0', '0', `${getDuration(time)}ms`, () => {
            emit('after-close');
          });

          if (maskEl) maskEl.style.display = 'none';
        },
        right: (time: string | number | null | undefined) => {
          slider(
            el.value,
            `${el.value?.parentElement?.offsetWidth}px`,
            '0',
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-close');
            },
          );

          if (maskEl) maskEl.style.display = 'none';
        },
        top: (time: string | number | null | undefined) => {
          slider(
            el.value,
            '0',
            `-${el.value?.parentElement?.offsetHeight}px`,
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-close');
            },
          );

          if (maskEl) maskEl.style.display = 'none';
        },
        bottom: (time: string | number | null | undefined) => {
          slider(
            el.value,
            '0',
            `${el.value?.parentElement?.offsetHeight}px`,
            '0',
            `${getDuration(time)}ms`,
            () => {
              emit('after-close');
            },
          );

          if (maskEl) maskEl.style.display = 'none';
        },
      },
    }));

    watch(
      () => props.zIndex,
      (val) => {
        (getElRef().value as HTMLElement).style.zIndex = `${val}`;
      },
    );

    return () => (
      <div
        class={classNames(selectorPrefix, props.direction)}
        // @ts-ignore
        ref={getElRef()}
      >
        {slots?.default?.()}
      </div>
    );
  },
});
