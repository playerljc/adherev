import { Slider } from 'ant-design-vue';
import { VNode } from 'vue';

const selectorPrefix = 'adherev-ui-fontsizesetting';

const FontSizeSetting: any = {
  name: 'adv-fontsizesetting',
  props: {
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
  emits: ['change'],
  data() {
    return {
      value: this.defaultValue,
    };
  },
  watch: {
    defaultValue(value) {
      this.value = value;
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
  render(h): VNode {
    return (
      <div class={selectorPrefix} ref="el">
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
            // @ts-ignore
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

export default FontSizeSetting;
