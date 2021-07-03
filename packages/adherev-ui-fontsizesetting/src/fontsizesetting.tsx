import classNames from 'classnames';
import { Slider } from 'ant-design-vue';

const selectorPrefix = 'adherev-ui-fontsizesetting';

export default {
  name: 'adv-fontsizesetting',
  props: {
    className: {
      type: String,
      default: '',
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    step: {
      type: Number,
    },
    defaultValue: {
      type: Number,
      default: 14,
    },
  },
  data() {
    return {
      value: this.defaultValue,
    };
  },
  watch: {
    defaultValue(value) {
      this.value = value;
    }
  },
  computed: {
    getClassName() {
      const { className } = this;

      return classNames(selectorPrefix, className.split(' '));
    },
  },
  methods: {
    onChange(v) {
      this.value = v;

      this.$nextTick(function () {
        this.$emit('change', v);
      });
    },
  },
  render(h) {
    return (
      <div class={this.getClassName} ref="el">
        <div class={`${selectorPrefix}-rangeWrap`}>
          <div class={`${selectorPrefix}-separatedtool`}>
            <div class={`${selectorPrefix}-separated`}>
              <span>{this.$tv('小')}</span>
            </div>
            <div class={`${selectorPrefix}-separated`}>
              <span>{this.$tv('中')}</span>
            </div>
            <div class={`${selectorPrefix}-separated`}>
              <span>{this.$tv('大')}</span>
            </div>
            <div class={`${selectorPrefix}-separated`}>
              <span>{this.$tv('特大')}</span>
            </div>
          </div>
          <Slider
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  },
};
