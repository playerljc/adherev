import { Button } from 'ant-design-vue';
import { VNode } from 'vue';
import { Fragment } from 'vue-fragment';

import HistoryBack from '@baifendian/adherev-ui-historyback';
import Intl from '@baifendian/adherev-util-intl';

import ToolBarLayout from './toolBarLayout';

const BackLayout: any = {
  name: 'adv-flexlayout-back',
  props: {
    topClassName: {
      type: String,
      default: '',
    },
    topStyle: {
      type: String,
      default: '',
    },
    bottomClassName: {
      type: String,
      default: '',
    },
    bottomStyle: {
      type: String,
      default: '',
    },
    mainClassName: {
      type: String,
      default: '',
    },
    mainStyle: {
      type: String,
      default: '',
    },
    mainAutoWrapClassName: {
      type: String,
      default: '',
    },
    mainAutoStyle: {
      type: String,
      default: '',
    },
    mainWrapClassName: {
      type: String,
      default: '',
    },
    mainWrapStyle: {
      type: String,
      default: '',
    },
    topProps: {
      type: Object,
      default: () => ({}),
    },
    bottomProps: {
      type: Object,
      default: () => ({}),
    },
    mainProps: {
      type: Object,
      default: () => ({}),
    },
    mainAutoWrapProps: {
      type: Object,
      default: () => ({}),
    },
    topToolBarSlotNames: {
      type: Array,
      default: () => [],
    },
    backPath: {
      type: String,
      default: '/',
    },
    enforceBackPath: {
      type: String,
      default: '',
    },
    isShowBack: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    otherProps() {
      const { isShowBack, backPath, enforceBackPath, ...others } = this;

      const props = {};

      for (const p in this.$props) {
        if (p in others) {
          props[p] = others[p];
        }
      }

      return props;
    },
  },
  methods: {
    renderToolBarItems(h) {
      const items = (this.topToolBarSlotNames || []).map((slotName) => (
        // @ts-ignore
        <Fragment slot={slotName}>{this.$slots[slotName]}</Fragment>
      ));

      if (this.isShowBack) {
        items.push(
          <Button
            // @ts-ignore
            slot="back"
            onClick={() => {
              if (this.enforceBackPath) {
                this.$router.replace(this.enforceBackPath);
              } else {
                HistoryBack(this.$router, this.backPath);
              }
            }}
          >
            {this.$slots.backTitle || Intl.v('返回')}
          </Button>,
        );
      }

      return items;
    },
  },
  render(h): VNode {
    return (
      <ToolBarLayout {...{ props: this.otherProps }}>
        {this.$slots.default}
        {this.renderToolBarItems(h)}
      </ToolBarLayout>
    );
  },
};

export default BackLayout;
