import classNames from 'classnames';
import { defineComponent, inject } from 'vue';
import { string } from 'vue-types';

const selectorPrefix = 'adherev-ui-playground-simple-tabs-panel';

export const tabPanelProps = {
  title: string().def(''),
  index: string().def(''),
};

export default defineComponent({
  name: 'adv-playground-simple-tabs-tab-panel',
  props: tabPanelProps,
  setup(props, { slots }) {
    return () => {
      const activeKey = (inject('getActiveKey') as () => string)();

      return (
        <div
          // @ts-ignore
          class={classNames(selectorPrefix, activeKey === props.index ? `active` : '')}
        >
          {slots?.default?.()}
        </div>
      );
    };
  },
});
