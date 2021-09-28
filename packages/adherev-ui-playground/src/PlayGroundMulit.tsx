import Vue from 'vue';
import copy from 'copy-to-clipboard';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Intl from '@baifendian/adherev-util-intl';

import Card from './Card';
import Message from './Message';
import Constant from './constant';

const selectPrefix = 'adherev-ui-playground-mulit';

export default {
  name: 'adv-playground-mulit',
  components: {
    Card,
  },
  props: {
    defaultExpand: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      expand: this.defaultExpand,
    };
  },
  methods: {
    renderCodeView(h, c, index) {
      const VueHighlightJS = Vue.component('highlight-code');

      return (
        <div key={`${index}`} class={`${selectPrefix}-codeviewwrap`}>
          <div class={`${selectPrefix}-codeviewwrap-title`}>{c.title}</div>
          <div class={`${selectPrefix}-codeviewwrap-inner`}>
            <VueHighlightJS lang={c.lang}>{c.codeText}</VueHighlightJS>
          </div>
        </div>
      );
    },
    copy() {
      copy(this.codeText);
      Message.success(Intl.tv('复制成功'));
    },
    onCollapse(expand) {
      this.expand = expand;
    },
  },
  render(h) {
    const { expand, config, $slots } = this;

    return (
      <div class={selectPrefix}>
        <Card actions={['copy', 'expand']}>
          <img
            class={`${selectPrefix}-action-btn`}
            src={Constant.CopyOutlined}
            slot="copy"
            alt="复制"
            onClick={() => {
              this.copy();
            }}
          />
          {expand ? (
            <img
              class={`${selectPrefix}-action-btn`}
              src={Constant.DownSquareOutlined}
              slot="expand"
              alt="收起"
              onClick={() => {
                this.onCollapse(false);
              }}
            />
          ) : (
            <img
              class={`${selectPrefix}-action-btn`}
              src={Constant.UpSquareOutlined}
              slot="expand"
              alt="展开"
              onClick={() => {
                this.onCollapse(true);
              }}
            />
          )}
          {$slots.default}
        </Card>
        <ConditionalRender conditional={expand}>
          <Card>{(config || []).map((c, index) => this.renderCodeView(h, c, index))}</Card>
        </ConditionalRender>
      </div>
    );
  },
};
