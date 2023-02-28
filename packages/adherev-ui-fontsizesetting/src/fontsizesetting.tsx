import { Slider } from 'ant-design-vue';
import { defineComponent, nextTick, ref, watch } from 'vue';
import { number } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

const selectorPrefix = 'adherev-ui-fontsizesetting';

export const fontSizeSettingProps = {
  min: number(),
  max: number(),
  step: number(),
  defaultValue: number().def(14),
};

export default defineComponent({
  name: 'adv-fontsizesetting',
  emits: ['change'],
  props: fontSizeSettingProps,
  setup(props, { emit }) {
    const value = ref<number>(props.defaultValue);

    const onChange = (v: any) => {
      value.value = v;

      nextTick(function () {
        emit('change', v);
      });
    };

    watch(
      () => props.defaultValue,
      (newValue) => {
        value.value = newValue;
      },
    );

    return () => (
      <div class={selectorPrefix} ref="el">
        <div class={`${selectorPrefix}-rangewrap`}>
          <div class={`${selectorPrefix}-separatedtool`}>
            <div class={`${selectorPrefix}-separated`}>
              <span>{Intl.tv('小')}</span>
            </div>
            <div class={`${selectorPrefix}-separated`}>
              <span>{Intl.tv('中')}</span>
            </div>
            <div class={`${selectorPrefix}-separated`}>
              <span>{Intl.tv('大')}</span>
            </div>
            <div class={`${selectorPrefix}-separated`}>
              <span>{Intl.tv('特大')}</span>
            </div>
          </div>

          <Slider
            min={props.min}
            max={props.max}
            step={props.step}
            value={value.value}
            onChange={onChange}
          />
        </div>
      </div>
    );
  },
});
