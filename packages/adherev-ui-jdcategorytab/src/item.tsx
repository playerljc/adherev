import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-jdcategorytab';

export default {
  name: 'adv-jdcategorytab-item',
  props: {
    className: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
  },
  computed: {
    getClassName() {
      const { className, id, getActiveKey } = this;

      const activeKey = getActiveKey();

      return classNames(
        `${selectorPrefix}-tab-item`,
        activeKey === id ? 'active' : null,
        className.split(' '),
      );
    },
  },
  inject: ['getActiveKey'],
  render(h) {
    const { $slots, getClassName } = this;

    return <li class={getClassName}>{$slots.default}</li>;
  },
};
