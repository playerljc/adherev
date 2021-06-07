// @ts-ignore
import FlexLayout from '@baifendian/adherev-ui-flexlayout';

const { selectorPrefix: flexlayoutSelectorPrefix } = FlexLayout;

// @ts-ignore
import classNames from 'classnames';

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
  let str = percent.replace('%', '');

  // @ts-ignore
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
      _fixedEl: null,
      _autoEl: null,
      _containerEl: null,
      _isEnter: false,
      _isOut: false,
      _isDown: false,
      _isMove: false,
      _startVal: 0,
      _changeVal: 0,
      _changeBaseVal: 0,
      _fixedValue: 0,
      _maxDimension: 0,
      _situation: new Map([
        [`${flexlayoutSelectorPrefix}-fixed_${flexlayoutSelectorPrefix}-auto`, true],
        [`${flexlayoutSelectorPrefix}-auto_${flexlayoutSelectorPrefix}-fixed`, true],
      ]),
    };
  },
  mounted() {
    // @ts-ignore
    if (this.checked()) {
      // @ts-ignore
      const { $data } = this;

      // @ts-ignore
      $data._fixedEl = this.getFixedEl();

      // @ts-ignore
      $data._autoEl = this.getAutoEl();

      // @ts-ignore
      $data._containerEl = this.$refs.ref.parentElement;

      $data._containerEl?.classList.add(`${selectorPrefix}-noSelect`);

      // @ts-ignore
      this.initEvents();
    }
  },
  created() {},
  updated() {
    // @ts-ignore
    if (this.checked()) {
      // @ts-ignore
      const { $data } = this;

      $data._isEnter = false;
      $data._isOut = false;
      $data._isDown = false;
      $data._isMove = false;

      $data._startVal = 0;
      $data._changeVal = 0;
      $data._changeBaseVal = 0;
      $data._fixedValue = 0;
      $data._maxDimension = 0;

      // @ts-ignore
      $data._fixedEl = this.getFixedEl();

      // @ts-ignore
      $data._.autoEl = this.getAutoEl();

      // @ts-ignore
      this.initEvents();
    }
  },
  inject: ['getDirection'],
  methods: {
    checked(): boolean {
      // @ts-ignore
      const { $refs, $data } = this;

      // @ts-ignore
      const { previousElementSibling, nextElementSibling } = $refs.ref;

      const keys = Array.from($data._situation.keys());

      return keys.some((key) => {
        // @ts-ignore
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
        // @ts-ignore
        $data: { _fixedEl, _autoEl, _containerEl },
      } = this;

      const {
        // @ts-ignore
        $refs: { ref: _splitEl },
      } = this;

      // @ts-ignore
      _splitEl.removeEventListener('mouseenter', this.onMouseenter);
      // @ts-ignore
      _splitEl.addEventListener('mouseenter', this.onMouseenter);

      // @ts-ignore
      _splitEl.removeEventListener('mousedown', this.onMousedown);
      // @ts-ignore
      _splitEl.addEventListener('mousedown', this.onMousedown);

      // @ts-ignore
      _fixedEl.removeEventListener('mousemove', this.onMousemove);
      // @ts-ignore
      _splitEl.removeEventListener('mousemove', this.onMousemove);
      // @ts-ignore
      _autoEl.removeEventListener('mousemove', this.onMousemove);

      // @ts-ignore
      _fixedEl.addEventListener('mousemove', this.onMousemove);
      // @ts-ignore
      _splitEl.addEventListener('mousemove', this.onMousemove);
      // @ts-ignore
      _autoEl.addEventListener('mousemove', this.onMousemove);

      // @ts-ignore
      _fixedEl.removeEventListener('mouseout', this.onMouseout);
      // @ts-ignore
      _splitEl.removeEventListener('mouseout', this.onMouseout);
      // @ts-ignore
      _autoEl.removeEventListener('mouseout', this.onMouseout);

      // @ts-ignore
      _fixedEl.addEventListener('mouseout', this.onMouseout);
      // @ts-ignore
      _splitEl.addEventListener('mouseout', this.onMouseout);
      // @ts-ignore
      _autoEl.addEventListener('mouseout', this.onMouseout);

      // @ts-ignore
      _fixedEl.removeEventListener('mouseup', this.onMouseup);
      // @ts-ignore
      _splitEl.removeEventListener('mouseup', this.onMouseup);
      // @ts-ignore
      _autoEl.removeEventListener('mouseup', this.onMouseup);

      // @ts-ignore
      _fixedEl.addEventListener('mouseup', this.onMouseup);
      // @ts-ignore
      _splitEl.addEventListener('mouseup', this.onMouseup);
      // @ts-ignore
      _autoEl.addEventListener('mouseup', this.onMouseup);

      // @ts-ignore
      _containerEl.removeEventListener('mouseleave', this.onMouseleave);
      // @ts-ignore
      _containerEl.addEventListener('mouseleave', this.onMouseleave);
    },
    getFixedEl(): HTMLElement {
      // @ts-ignore
      const { previousElementSibling, nextElementSibling } = this.$refs.ref;

      return previousElementSibling.classList.contains(`${flexlayoutSelectorPrefix}-fixed`)
        ? previousElementSibling
        : nextElementSibling;
    },
    getAutoEl(): HTMLElement {
      // @ts-ignore
      const { previousElementSibling, nextElementSibling } = this.$refs.ref;

      return previousElementSibling.classList.contains(`${flexlayoutSelectorPrefix}-auto`)
        ? previousElementSibling
        : nextElementSibling;
    },
    /**
     * getFixedElPosition
     */
    getFixedElPosition(): 'prev' | 'next' {
      // @ts-ignore
      const { previousElementSibling } = this.$refs.ref;

      return previousElementSibling.classList.contains(`${flexlayoutSelectorPrefix}-fixed`)
        ? 'prev'
        : 'next';
    },
    /**
     * getMaxDimension
     */
    getMaxDimension(): number {
      // @ts-ignore
      const { $data } = this;

      if ($data._maxDimension) {
        return $data._maxDimension;
      }

      const fixedEl = this.getFixedEl();

      const autoEl = this.getAutoEl();

      // @ts-ignore
      const { offset } = this.getProps();

      // @ts-ignore
      $data._maxDimension = fixedEl[offset] + autoEl[offset];

      return $data._maxDimension;
    },
    /**
     * getResizeClass
     */
    getResizeClass(): 'rowResize' | 'colResize' {
      // @ts-ignore
      const { getDirection } = this;

      return getDirection() === 'vertical' ? 'rowResize' : 'colResize';
    },
    /**
     * getProps
     */
    getProps() {
      // @ts-ignore
      const { getDirection } = this;

      // @ts-ignore
      return directionProp[getDirection()];
    },
    /**
     * getMaxSize
     */
    getMaxSize(): number {
      // @ts-ignore
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
      // @ts-ignore
      const { minSize } = this;

      let resultVal = 0;

      const maxDimension = this.getMaxDimension();

      const { offset } = this.getProps();

      // @ts-ignore
      const elSize = this.$refs.ref[offset];

      if (typeof minSize === 'string') {
        resultVal = maxDimension * toPoint(minSize);
      } else if (typeof minSize === 'number') {
        resultVal = minSize;
      }

      return resultVal < elSize ? elSize : resultVal;
    },
    onMouseenter(e) {
      console.log('mouseenter');

      const {
        // @ts-ignore
        $data,
        // @ts-ignore
        $refs: { ref: splitEl },
        // @ts-ignore
      } = this;

      // @ts-ignore
      splitEl.classList.add(`${selectorPrefix}-${this.getResizeClass()}`);

      $data._isOut = false;

      $data._isEnter = true;

      // @ts-ignore
      this.$emit('canDrag', e);
    },

    onMousedown(e) {
      console.log('mousedown');

      const {
        // @ts-ignore
        $refs: { ref: splitEl },
        // @ts-ignore
        $data,
        // @ts-ignore
      } = this;

      const { _fixedEl, _isEnter } = $data;

      // @ts-ignore
      splitEl.classList.remove(`${selectorPrefix}-${this.getResizeClass()}`);

      if (_isEnter) {
        $data._isDown = true;

        // @ts-ignore
        $data._startVal = e[this.getProps().page];

        // @ts-ignore
        $data._fixedValue = _fixedEl[this.getProps().offset];

        // @ts-ignore
        this.$emit('dragStarted', e);
      }
    },

    onMouseup() {
      console.log('mouseup');

      const {
        // @ts-ignore
        $data,
        // @ts-ignore
        $refs: { ref: splitEl },
        // @ts-ignore
      } = this;

      // @ts-ignore
      splitEl.classList.add(`${selectorPrefix}-${this.getResizeClass()}`);

      if ($data._isDown) {
        $data._isDown = false;

        $data._isMove = false;

        $data._isEnter = !$data._isOut;

        $data._startVal = 0;

        $data._changeBaseVal += $data._changeVal;
      }
    },

    onMouseleave(e) {
      console.log('onMouseleave');

      // @ts-ignore
      const { $data } = this;

      if ($data._isDown) {
        $data._isDown = false;

        $data._sMove = false;

        $data._isEnter = false;

        $data._startVal = 0;

        $data._changeBaseVal += $data._changeVal;

        // @ts-ignore
        this.$emit('dragFinished', e);
      }
    },

    onMousemove(e) {
      // e.stopPropagation();

      // @ts-ignore
      const { $data } = this;

      if ($data._isEnter && $data._isDown) {
        $data._isMove = true;

        // @ts-ignore
        let end = e[this.getProps().page];

        $data._changeVal = end - $data._startVal;

        // @ts-ignore
        const position = this.getFixedElPosition();

        const computedValue =
          position === 'prev'
            ? $data._fixedValue + $data._changeVal
            : $data._fixedValue - $data._changeVal;

        let targetValue;

        // @ts-ignore
        const maxSize = this.getMaxSize();

        // @ts-ignore
        const minSize = this.getMinSize();

        // @ts-ignore
        if (computedValue >= maxSize || computedValue <= minSize) {
          // @ts-ignore
          if (computedValue >= maxSize) {
            targetValue = maxSize;
          } else {
            // @ts-ignore
            if (computedValue <= minSize) {
              targetValue = minSize;
            }
          }
        } else {
          targetValue = computedValue;
        }

        // @ts-ignore
        $data._fixedEl.style[this.getProps().dimension] = `${targetValue}px`;

        // @ts-ignore
        this.$emit('change', e);
      }
    },

    onMouseout(e) {
      console.log('onMouseout');
      // @ts-ignore
      const { $data } = this;

      $data._isOut = true;

      if (!$data._isDown) {
        // split.style.cursor = 'default';
        $data._isEnter = false;

        // @ts-ignore
        this.$emit('change', e);
      }
    },
  },
  render(h) {
    // @ts-ignore
    const { className, getDirection } = this;

    return (
      // @ts-ignore
      <div
        ref="ref"
        class={classNames(
          selectorPrefix,
          `${selectorPrefix}-${getDirection()}`,
          className.split(' '),
        )}
      />
    );
  },
};
