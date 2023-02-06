import classNames from 'classnames';
import { defineComponent, inject, onMounted, onUpdated, ref } from 'vue';
import { number, oneOfType, string } from 'vue-types';

import FlexLayout from '@baifendian/adherev-ui-flexlayout';

const { selectorPrefix: flexlayoutSelectorPrefix } = FlexLayout;

const selectorPrefix = 'adherev-ui-splitlayout';

const directionProp = {
  horizontal: {
    page: 'pageX',
    dimension: 'width',
    offset: 'offsetWidth',
  },
  vertical: {
    page: 'pageY',
    dimension: 'height',
    offset: 'offsetHeight',
  },
};

/**
 * toPoint - 百分数转化为小数
 * @param percent
 */
function toPoint(percent: string) {
  const str = percent.replace('%', '');

  return Number.parseInt(str) / 100;
}

export const splitLayoutProps = {
  maxSize: oneOfType([string(), number()]).def('100%'),
  minSize: oneOfType([string(), number()]).def(10),
};

export default defineComponent({
  name: 'adv-splitlayout',
  emits: ['canDrag', 'dragStarted', 'dragFinished', 'change'],
  props: splitLayoutProps,
  setup(props, { emit }) {
    const root = ref<HTMLDivElement>();

    const direction = inject('direction');

    let fixedEl: HTMLElement | null = null;
    let autoEl: HTMLElement | null = null;
    let containerEl: HTMLElement | null = null;
    let isEnter: boolean = false;
    let isOut: boolean = false;
    let isDown: boolean = false;
    let isMove: boolean = false;
    let startVal: number = 0;
    let changeVal: number = 0;
    let changeBaseVal: number = 0;
    let fixedValue: number = 0;
    let maxDimension: number = 0;
    const situation = new Map<string, boolean>([
      [`${flexlayoutSelectorPrefix}-fixed_${flexlayoutSelectorPrefix}-auto`, true],
      [`${flexlayoutSelectorPrefix}-auto_${flexlayoutSelectorPrefix}-fixed`, true],
    ]);

    const initEvents = () => {
      root.value?.removeEventListener('mouseenter', onMouseenter);
      root.value?.removeEventListener('mousedown', onMousedown);
      root.value?.removeEventListener('mouseout', onMouseout);
      root.value?.removeEventListener('mousemove', onMousemove);
      root.value?.removeEventListener('mouseup', onMouseup);
      fixedEl?.removeEventListener('mousemove', onMousemove);
      fixedEl?.removeEventListener('mouseout', onMouseout);
      fixedEl?.removeEventListener('mouseup', onMouseup);
      autoEl?.removeEventListener('mouseout', onMouseout);
      autoEl?.removeEventListener('mousemove', onMousemove);
      autoEl?.removeEventListener('mouseup', onMouseup);
      containerEl?.removeEventListener('mouseleave', onMouseleave);

      root.value?.addEventListener('mouseenter', onMouseenter);
      root.value?.addEventListener('mousedown', onMousedown);
      root.value?.addEventListener('mousemove', onMousemove);
      root.value?.addEventListener('mouseout', onMouseout);
      root.value?.addEventListener('mouseup', onMouseup);
      fixedEl?.addEventListener('mousemove', onMousemove);
      fixedEl?.addEventListener('mouseout', onMouseout);
      fixedEl?.addEventListener('mouseup', onMouseup);
      autoEl?.addEventListener('mousemove', onMousemove);
      autoEl?.addEventListener('mouseout', onMouseout);
      autoEl?.addEventListener('mouseup', onMouseup);
      containerEl?.addEventListener('mouseleave', onMouseleave);
    };

    const checked = (): boolean => {
      const { previousElementSibling, nextElementSibling } = root.value as HTMLElement;

      const keys = Array.from(situation.keys());

      return keys.some((key: string) => {
        const arr = key.split('_');
        const prevKey = arr[0];
        const nextKey = arr[1];

        return (
          previousElementSibling?.classList.contains(prevKey) &&
          nextElementSibling?.classList.contains(nextKey)
        );
      });
    };

    const getFixedEl = (): HTMLElement => {
      const { previousElementSibling, nextElementSibling } = root.value as HTMLElement;

      return previousElementSibling?.classList?.contains?.(`${flexlayoutSelectorPrefix}-fixed`)
        ? (previousElementSibling as HTMLElement)
        : (nextElementSibling as HTMLElement);
    };

    const getAutoEl = (): HTMLElement => {
      const { previousElementSibling, nextElementSibling } = root.value as HTMLElement;

      return previousElementSibling?.classList?.contains?.(`${flexlayoutSelectorPrefix}-auto`)
        ? (previousElementSibling as HTMLElement)
        : (nextElementSibling as HTMLElement);
    };

    /**
     * getFixedElPosition
     */
    const getFixedElPosition = (): 'prev' | 'next' => {
      const { previousElementSibling } = root.value as HTMLElement;

      return previousElementSibling?.classList?.contains?.(`${flexlayoutSelectorPrefix}-fixed`)
        ? 'prev'
        : 'next';
    };

    /**
     * getMaxDimension
     */
    const getMaxDimension = (): number => {
      if (maxDimension) {
        return maxDimension;
      }

      const fixedEl = getFixedEl();

      const autoEl = getAutoEl();

      const { offset } = getProps();

      maxDimension = fixedEl[offset] + autoEl[offset];

      return maxDimension;
    };

    /**
     * getResizeClass
     */
    const getResizeClass = (): 'rowResize' | 'colResize' => {
      return direction === 'vertical' ? 'rowResize' : 'colResize';
    };

    /**
     * getProps
     */
    const getProps = () => directionProp[direction as string];

    /**
     * getMaxSize
     */
    const getMaxSize = (): number => {
      let resultVal = 0;

      const maxDimension = getMaxDimension();

      if (typeof props.maxSize === 'string') {
        resultVal = maxDimension * toPoint(props.maxSize);
      } else if (typeof props.maxSize === 'number') {
        resultVal = props.maxSize;
      }

      return resultVal > maxDimension ? maxDimension : resultVal;
    };

    /**
     * getMinSize
     */
    const getMinSize = (): number => {
      let resultVal = 0;

      const maxDimension = getMaxDimension();

      const { offset } = getProps();

      const elSize = (root.value as HTMLElement)[offset];

      if (typeof props.minSize === 'string') {
        resultVal = maxDimension * toPoint(props.minSize);
      } else if (typeof props.minSize === 'number') {
        resultVal = props.minSize;
      }

      return resultVal < elSize ? elSize : resultVal;
    };

    const onMouseenter = (e) => {
      root.value?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

      isOut = false;

      isEnter = true;

      emit('canDrag', e);
    };

    const onMousedown = (e) => {
      root.value?.classList.remove(`${selectorPrefix}-${getResizeClass()}`);

      if (isEnter) {
        isDown = true;

        startVal = e[getProps?.().page];

        fixedValue = fixedEl?.[getProps?.().offset];

        emit('dragStarted', e);
      }
    };

    const onMouseup = (e) => {
      root.value?.classList.add(`${selectorPrefix}-${getResizeClass()}`);

      if (isDown) {
        isDown = false;

        isMove = false;

        isEnter = !isOut;

        startVal = 0;

        changeBaseVal += changeVal;

        emit('dragFinished', e);
      }
    };

    const onMouseleave = (e) => {
      if (isDown) {
        isDown = false;

        isMove = false;

        isEnter = false;

        startVal = 0;

        changeBaseVal += changeVal;

        emit('dragFinished', e);
      }
    };

    const onMousemove = (e) => {
      if (isEnter && isDown) {
        isMove = true;

        const end = e[getProps().page];

        // console.log('end', end);

        changeVal = end - startVal;

        // console.log('startVal', startVal);

        // console.log('changeVal', changeVal);

        const position = getFixedElPosition();

        // console.log('position', position);

        const computedValue = position === 'prev' ? fixedValue + changeVal : fixedValue - changeVal;

        // console.log('computedValue', computedValue);

        let targetValue;

        const maxSize = getMaxSize();

        const minSize = getMinSize();

        // console.log('maxSize', maxSize);

        // console.log('minSize', minSize);

        if (computedValue >= maxSize || computedValue <= minSize) {
          if (computedValue >= maxSize) {
            targetValue = maxSize;
          } else {
            if (computedValue <= minSize) {
              targetValue = minSize;
            }
          }
        } else {
          targetValue = computedValue;
        }

        // console.log('targetValue', targetValue);

        (fixedEl as HTMLElement).style[getProps().dimension] = `${targetValue}px`;

        emit('change', e);
      }
    };

    const onMouseout = (e) => {
      isOut = true;

      if (!isDown) {
        isEnter = false;

        emit('change', e);
      }
    };

    onMounted(() => {
      if (checked()) {
        fixedEl = getFixedEl();

        autoEl = getAutoEl();

        containerEl = root?.value?.parentElement as HTMLElement;

        containerEl?.classList.add(`${selectorPrefix}-noSelect`);

        initEvents();
      }
    });

    onUpdated(() => {
      if (checked()) {
        isEnter = false;
        isOut = false;
        isDown = false;
        isMove = false;

        startVal = 0;
        changeVal = 0;
        changeBaseVal = 0;
        fixedValue = 0;
        maxDimension = 0;

        fixedEl = getFixedEl();

        autoEl = getAutoEl();

        initEvents();
      }
    });

    return () => {
      return (
        <div
          // @ts-ignore
          ref={root}
          class={classNames(selectorPrefix, `${selectorPrefix}-${direction}`)}
        />
      );
    };
  },
});
