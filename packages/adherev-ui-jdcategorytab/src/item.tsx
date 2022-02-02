import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-jdcategorytab';

export default {
  name: 'adv-jdcategorytab-item',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    getClassName() {
      const { id, getActiveKey } = this;

      const activeKey = getActiveKey();

      return classNames(`${selectorPrefix}-tab-item`, activeKey === id ? 'active' : null);
    },
  },
  inject: ['getActiveKey'],
  render(h) {
    const { $slots, getClassName } = this;

    return <li class={getClassName}>{$slots.default}</li>;
  },
};
