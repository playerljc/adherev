import { defineComponent } from 'vue';
import { bool, number, string } from 'vue-types';

import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-spin';

export const spinProps = {
  spinning: bool().def(false),
  text: string().def(''),
  zIndex: number().def(Resource.Dict.value.ResourceNormalMaxZIndex.value),
};

export default defineComponent({
  name: 'adv-spin',
  props: spinProps,
  setup(props) {
    return () =>
      props.spinning ? (
        <div class={selectorPrefix} style={{ zIndex: props.zIndex }}>
          <span class={`${selectorPrefix}-dot`}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>

          <div class={`${selectorPrefix}-text`}>{props.text}</div>
        </div>
      ) : null;
  },
});
