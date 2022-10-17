import classNames from 'classnames';
import { computed, defineComponent, inject } from 'vue';
import { string } from 'vue-types';

const selectorPrefix = 'adherev-ui-jdcategorytab';

const props = {
  id: string().def(''),
};

export default defineComponent({
  name: 'adv-jdcategorytab-item',
  props,
  setup(props, { slots }) {
    const activeKey = inject('activeKey');

    const getClassName = computed(() =>
      classNames(
        `${selectorPrefix}-tab-item`,
        (activeKey as any).value == props.id ? 'active' : null,
      ),
    );

    return () => <li class={getClassName.value}>{slots.default ? slots.default() : null}</li>;
  },
});
