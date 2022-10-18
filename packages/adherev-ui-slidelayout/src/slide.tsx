import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { bool, number, oneOfType, string } from 'vue-types';

import { createMask } from './slidelayout';

export enum direction {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}

export const slideProps = {
  width: oneOfType([string(), number()]).def('80%'),
  height: oneOfType([string(), number()]).def('40%'),
  mask: bool().def(true),
  zIndex: number().def(9999),
  time: number().def(300),
  direction: string<direction>().def(direction.left),
  defaultCollapse: bool().def(false),
};

export default function useSlide(props: any, { emit }: any) {
  const collapse = ref<boolean>(props.defaultCollapse);

  const el = ref<HTMLElement>();

  let positionConfig = {};

  let maskEl: HTMLElement | null = null;

  const setPositionConfig = (callback: ({ el, maskEl }: any) => object) => {
    positionConfig = callback({ el, maskEl });

    return Promise.resolve();
  };

  const getDuration = (time: undefined | null | string | number) =>
    time !== undefined && time !== null ? time : props.time;

  const getElRef = () => el;

  const initial = () => {
    const $el = el.value as HTMLElement;

    if (props.direction === 'left' || props.direction === 'right') {
      // 赋值宽度
      $el.style.height = '100%';
      props.width
        ? ($el.style.width = props.width)
        : ($el.style.width = `${($el.parentElement as HTMLElement).offsetWidth * 0.9}px`);
    } else {
      // 赋值高度
      $el.style.width = '100%';
      props.height
        ? ($el.style.height = props.height)
        : ($el.style.height = `${($el.parentElement as HTMLElement).offsetHeight * 0.3}px`);
    }

    // 赋值默认位置
    positionConfig['init'][props.direction]();

    if (collapse.value) {
      positionConfig['show'][props.direction](0);
    }
  };

  const show = () => {
    emit('before-show');

    collapse.value = true;

    positionConfig['show'][props.direction]();
  };

  const close = () => {
    emit('before-close');

    collapse.value = false;

    positionConfig['close'][props.direction]();
  };

  watch(
    () => props.defaultCollapse,
    (newVal, oldVal) => {
      if (newVal !== oldVal) {
        collapse.value = newVal;

        if (collapse.value) {
          positionConfig['show'][props.direction]();
        } else {
          positionConfig['close'][props.direction]();
        }
      }
    },
  );

  onMounted(() => {
    if (props.mask) {
      maskEl = createMask(props.zIndex, () => close());

      el.value?.parentElement?.insertBefore(maskEl as HTMLElement, el.value);
    }
  });

  onBeforeUnmount(() => {
    if (maskEl) {
      (maskEl as HTMLElement)?.parentElement?.removeChild(maskEl);
    }
  });

  return {
    setPositionConfig,
    getDuration,
    getElRef,
    initial,
  };
}
