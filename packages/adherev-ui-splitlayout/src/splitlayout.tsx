import classNames from 'classnames';
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

  return str / 100;
}

export default {
  name: 'adv-splitlayout',
  props: {
    className: {
      type: String,
      default: '',
    },
    maxSize: {
      type: [String, Number],
      default: '100%',
    },
    minSize: {
      type: [String, Number],
      default: 10,
    },
    canDrag: {
      type: Function,
    },
    dragStarted: {
      type: Function,
    },
    dragFinished: {
      type: Function,
    },
    out: {
      type: Function,
    },
    change: {
      type: Function,
    },
  },
  data() {
    return {
      $fixedEl: null,
      $autoEl: null,
      $containerEl: null,
      $isEnter: false,
      $isOut: false,
      $isDown: false,
      $isMove: false,
      $startVal: 0,
      $changeVal: 0,
      $changeBaseVal: 0,
      $fixedValue: 0,
      $maxDimension: 0,
      $situation: new Map([
        [`${flexlayoutSelectorPrefix}-fixed_${flexlayoutSelectorPrefix}-auto`, true],
        [`${flexlayoutSelectorPrefix}-auto_${flexlayoutSelectorPrefix}-fixed`, true],
      ]),
    };
  },
  mounted() {
    if (this.checked()) {
      const { $data } = this;

      $data.$fixedEl = this.getFixedEl();

      $data.$autoEl = this.getAutoEl();

      $data.$containerEl = this.$refs.ref.parentElement;

      $data.$containerEl?.classList.add(`${selectorPrefix}-noSelect`);

      this.initEvents();
    }
  },
  created() {},
  updated() {
    if (this.checked()) {
      const { $data } = this;

      $data.$isEnter = false;
      $data.$isOut = false;
      $data.$isDown = false;
      $data.$isMove = false;

      $data.$startVal = 0;
      $data.$changeVal = 0;
      $data.$changeBaseVal = 0;
      $data.$fixedValue = 0;
      $data.$maxDimension = 0;

      $data.$fixedEl = this.getFixedEl();

      $data.$autoEl = this.getAutoEl();

      this.initEvents();
    }
  },
  inject: ['getDirection'],
  methods: {
    checked(): boolean {
      const { $refs, $data } = this;

      const { previousElementSibling, nextElementSibling } = $refs.ref;

      const keys = Array.from($data.$situation.keys());

      return keys.some((key) => {
        const arr = key.split('_');
        const prevKey = arr[0];
        const nextKey = arr[1];

        return (
          previousElementSibling.classList.contains(prevKey) &&
          nextElementSibling.classList.contains(nextKey)
        );
      });
    },
    initEvents(): void {
      const {
        $data: { $fixedEl, $autoEl, $containerEl },
      } = this;

      const {
        $refs: { ref: _splitEl },
      } = this;

      _splitEl.removeEventListener('mouseenter', this.onMouseenter);
      _splitEl.removeEventListener('mousedown', this.onMousedown);
      _splitEl.removeEventListener('mouseout', this.onMouseout);
      _splitEl.removeEventListener('mousemove', this.onMousemove);
      _splitEl.removeEventListener('mouseup', this.onMouseup);
      $fixedEl.removeEventListener('mousemove', this.onMousemove);
      $fixedEl.removeEventListener('mouseout', this.onMouseout);
      $fixedEl.removeEventListener('mouseup', this.onMouseup);
      $autoEl.removeEventListener('mouseout', this.onMouseout);
      $autoEl.removeEventListener('mousemove', this.onMousemove);
      $autoEl.removeEventListener('mouseup', this.onMouseup);
      $containerEl.removeEventListener('mouseleave', this.onMouseleave);

      _splitEl.addEventListener('mouseenter', this.onMouseenter);
      _splitEl.addEventListener('mousedown', this.onMousedown);
      _splitEl.addEventListener('mousemove', this.onMousemove);
      _splitEl.addEventListener('mouseout', this.onMouseout);
      _splitEl.addEventListener('mouseup', this.onMouseup);
      $fixedEl.addEventListener('mousemove', this.onMousemove);
      $fixedEl.addEventListener('mouseout', this.onMouseout);
      $fixedEl.addEventListener('mouseup', this.onMouseup);
      $autoEl.addEventListener('mousemove', this.onMousemove);
      $autoEl.addEventListener('mouseout', this.onMouseout);
      $autoEl.addEventListener('mouseup', this.onMouseup);
      $containerEl.addEventListener('mouseleave', this.onMouseleave);
    },
    getFixedEl(): HTMLElement {
      const { previousElementSibling, nextElementSibling } = this.$refs.ref;

      return previousElementSibling.classList.contains(`${flexlayoutSelectorPrefix}-fixed`)
        ? previousElementSibling
        : nextElementSibling;
    },
    getAutoEl(): HTMLElement {
      const { previousElementSibling, nextElementSibling } = this.$refs.ref;

      return previousElementSibling.classList.contains(`${flexlayoutSelectorPrefix}-auto`)
        ? previousElementSibling
        : nextElementSibling;
    },
    /**
     * getFixedElPosition
     */
    getFixedElPosition(): 'prev' | 'next' {
      const { previousElementSibling } = this.$refs.ref;

      return previousElementSibling.classList.contains(`${flexlayoutSelectorPrefix}-fixed`)
        ? 'prev'
        : 'next';
    },
    /**
     * getMaxDimension
     */
    getMaxDimension(): number {
      const { $data } = this;

      if ($data.$maxDimension) {
        return $data.$maxDimension;
      }

      const fixedEl = this.getFixedEl();

      const autoEl = this.getAutoEl();

      const { offset } = this.getProps();

      $data.$maxDimension = fixedEl[offset] + autoEl[offset];

      return $data.$maxDimension;
    },
    /**
     * getResizeClass
     */
    getResizeClass(): 'rowResize' | 'colResize' {
      const { getDirection } = this;

      return getDirection() === 'vertical' ? 'rowResize' : 'colResize';
    },
    /**
     * getProps
     */
    getProps() {
      const { getDirection } = this;

      return directionProp[getDirection()];
    },
    /**
     * getMaxSize
     */
    getMaxSize(): number {
      const { maxSize } = this;

      let resultVal = 0;

      const maxDimension = this.getMaxDimension();

      if (typeof maxSize === 'string') {
        resultVal = maxDimension * toPoint(maxSize);
      } else if (typeof maxSize === 'number') {
        resultVal = maxSize;
      }

      return resultVal > maxDimension ? maxDimension : resultVal;
    },
    /**
     * getMinSize
     */
    getMinSize(): number {
      const { minSize } = this;

      let resultVal = 0;

      const maxDimension = this.getMaxDimension();

      const { offset } = this.getProps();

      const elSize = this.$refs.ref[offset];

      if (typeof minSize === 'string') {
        resultVal = maxDimension * toPoint(minSize);
      } else if (typeof minSize === 'number') {
        resultVal = minSize;
      }

      return resultVal < elSize ? elSize : resultVal;
    },
    onMouseenter(e) {
      // console.log('mouseenter');

      const {
        $data,

        $refs: { ref: splitEl },
      } = this;

      splitEl.classList.add(`${selectorPrefix}-${this.getResizeClass()}`);

      $data.$isOut = false;

      $data.$isEnter = true;

      this.$emit('canDrag', e);
    },
    onMousedown(e) {
      // console.log('mousedown');

      const {
        $refs: { ref: splitEl },

        $data,
      } = this;

      const { $fixedEl, $isEnter } = $data;

      splitEl.classList.remove(`${selectorPrefix}-${this.getResizeClass()}`);

      if ($isEnter) {
        $data.$isDown = true;

        $data.$startVal = e[this.getProps().page];

        $data.$fixedValue = $fixedEl[this.getProps().offset];

        this.$emit('dragStarted', e);
      }
    },
    onMouseup(e) {
      // console.log('mouseup');

      const {
        $data,

        $refs: { ref: splitEl },
      } = this;

      splitEl.classList.add(`${selectorPrefix}-${this.getResizeClass()}`);

      if ($data.$isDown) {
        $data.$isDown = false;

        $data.$isMove = false;

        $data.$isEnter = !$data.$isOut;

        $data.$startVal = 0;

        $data.$changeBaseVal += $data.$changeVal;

        this.$emit('dragFinished', e);
      }
    },
    onMouseleave(e) {
      // console.log('onMouseleave');

      const { $data } = this;

      if ($data.$isDown) {
        $data.$isDown = false;

        $data._sMove = false;

        $data.$isEnter = false;

        $data.$startVal = 0;

        $data.$changeBaseVal += $data.$changeVal;

        this.$emit('dragFinished', e);
      }
    },
    onMousemove(e) {
      // e.stopPropagation();

      const { $data } = this;

      if ($data.$isEnter && $data.$isDown) {
        $data.$isMove = true;

        const end = e[this.getProps().page];

        $data.$changeVal = end - $data.$startVal;

        const position = this.getFixedElPosition();

        const computedValue =
          position === 'prev'
            ? $data.$fixedValue + $data.$changeVal
            : $data.$fixedValue - $data.$changeVal;

        let targetValue;

        const maxSize = this.getMaxSize();

        const minSize = this.getMinSize();

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

        $data.$fixedEl.style[this.getProps().dimension] = `${targetValue}px`;

        this.$emit('change', e);
      }
    },
    onMouseout(e) {
      // console.log('onMouseout');

      const { $data } = this;

      $data.$isOut = true;

      if (!$data.$isDown) {
        // split.style.cursor = 'default';
        $data.$isEnter = false;

        this.$emit('change', e);
      }
    },
  },
  render(h) {
    const { className, getDirection } = this;

    return (
      <div
        ref="ref"
        class={classNames(
          selectorPrefix,
          `${selectorPrefix}-${getDirection()}`,
          className.split(/\s+/),
        )}
      />
    );
  },
};
