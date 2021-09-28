import Vue from 'vue';
import copy from 'copy-to-clipboard';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Intl from '@baifendian/adherev-util-intl';

import Card from './Card';
import Message from './Message';
import Constant from './constant';

const selectPrefix = 'adherev-ui-playground';

export default {
  name: 'adv-playground',
  props: {
    defaultExpand: {
      type: Boolean,
      default: false,
    },
    codeText: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'vue',
    },
  },
  data() {
    return {
      expand: this.defaultExpand,
    };
  },
  components: {
    Card,
  },
  methods: {
    copy() {
      copy(this.codeText);
      Message.success(Intl.tv('复制成功'));
    },
    onCollapse(expand) {
      this.expand = expand;
    },
  },
  render(h) {
    const VueHighlightJS = Vue.component('highlight-code');

    const { expand, codeText, lang, $slots } = this;

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
          <Card>
            <VueHighlightJS lang={lang}>{codeText}</VueHighlightJS>
          </Card>
        </ConditionalRender>
      </div>
    );
  },
};
