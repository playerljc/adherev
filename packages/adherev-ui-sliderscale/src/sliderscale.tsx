import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-sliderscale';

export default {
  name: 'adv-sliderscale',
  props: {
    className: {
      type: String,
      default: '',
    },
    min: {
      type: [Number, String],
      default: 0,
    },
    max: {
      type: [Number, String],
      default: 100,
    },
    step: {
      type: [Number, String],
      default: 1,
    },
    value: {
      type: [Number, String],
      default: 0,
    },
    interval: {
      type: [Number, String],
      default: 5,
    },
  },
  data() {
    return {
      $preValue: null,
    };
  },
  methods: {
    touchEvent(e) {
      const {
        $refs,
        $data: { $preValue },
      } = this;

      const { value } = e.target;

      $refs?.rangeEl?.value = value;

      if ($preValue !== value) {
        this.$data.$preValue = value;

        this.$emit('change', value);
      }
    },
    renderScale(h) {
      const { min, max, interval } = this;

      const itResult = [];

      for (let i = min; i < max; i++) {
        if (max - 1 === min) {
          break;
        }

        let itemJSX = null;

        if ((i + 1) % interval === 0) {
          itemJSX = (
            <div key={i} class={`${selectorPrefix}-scale-item ${selectorPrefix}-scale-item-point`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
            </div>
          );
        } else if (i === min) {
          itemJSX = (
            <div key={i} class={`${selectorPrefix}-scale-item`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{min}</span>
            </div>
          );
        } else if ((i + 1) % interval !== 0 && i === max - 1) {
          itemJSX = (
            <div key={i} class={`${selectorPrefix}-scale-item`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{i + 1}</span>
            </div>
          );
        } else {
          itemJSX = <div key={i} class={`${selectorPrefix}-scale-item`} />;
        }

        // @ts-ignore
        itResult.push(itemJSX);
      }

      const result = [];

      if (min === max) {
        result.push(
          <div key={0} class={`${selectorPrefix}-scale-item`}>
            <span class={`${selectorPrefix}-scale-item-value`}>0</span>
            <span class={`${selectorPrefix}-scale-item-value`} style="right: 0; left: auto;">
              ${max}
            </span>
          </div>,
        );
      } else {
        if (max - 1 === min) {
          result.push(
            <div key={min} class={`${selectorPrefix}-scale-item`}>
              <span class={`${selectorPrefix}-scale-item-value`}>{min}</span>
              <span class={`${selectorPrefix}-scale-item-value`} style="right: 0; left: auto;">
                {max}
              </span>
            </div>,
          );
        }
      }

      return result.concat(itResult);
    },
    onMousemove(e) {
      this.touchEvent(e);
    },
    onTouchmove(e) {
      this.touchEvent(e);
    },
  },
  mounted() {
    this.$refs.rangeEl?.value = this.value;
  },
  watch: {
    value(newVal) {
      this.$refs.rangeEl?.value = newVal;
    },
  },
  render(h) {
    const { className, min, max, step } = this;

    return (
      <div class={classNames(selectorPrefix, className.split(' '))} ref="el">
        <div class={`${selectorPrefix}-scale`}>{this.renderScale(h)}</div>

        <input
          ref="rangeEl"
          class={`${selectorPrefix}-range`}
          type="range"
          min={min}
          max={max}
          step={step}
          onMousemove={this.onMousemove}
          onTouchMove={this.onTouchmove}
        />
      </div>
    );
  },
};
