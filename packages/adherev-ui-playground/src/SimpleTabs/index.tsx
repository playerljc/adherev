const selectorPrefix = 'adherev-ui-playground-simple-tabs';

const SimpleTabs: any = {
  name: 'adv-playground-simple-tabs',
  props: {
    defaultActiveKey: {
      type: String,
      default: '',
    },
  },
  emits: ['change'],
  data() {
    return {
      activeKey: this.defaultActiveKey,
    };
  },
  watch: {
    defaultActiveKey(activeKey) {
      this.activeKey = activeKey;
    },
  },
  provide() {
    return {
      getActiveKey: this.getActiveKey,
    };
  },
  methods: {
    getActiveKey() {
      return this.activeKey;
    },
    renderHead(h) {
      const { $slots } = this;

      return $slots.default.map((t) => this.renderHeadItem(h, t));
    },
    renderHeadItem(h, vNode) {
      const {
        componentOptions: {
          propsData: { index, title },
        },
      } = vNode;

      const { activeKey } = this;

      return (
        <li
          key={index}
          class={activeKey === index ? 'active' : ''}
          onClick={() => {
            this.activeKey = index;

            this.$nextTick(function () {
              this.$emit('change', index);
            });
          }}
        >
          {title}
        </li>
      );
    },
  },
  render(h) {
    return (
      <div class={selectorPrefix}>
        <ul class={`${selectorPrefix}-head`}>{this.renderHead(h)}</ul>
        <div class={`${selectorPrefix}-body`}>{this.$slots.default}</div>
      </div>
    );
  },
};

export default SimpleTabs;
