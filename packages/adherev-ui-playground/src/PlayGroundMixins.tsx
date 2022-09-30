import classNames from 'classnames';
import copy from 'copy-to-clipboard';

import Intl from '@baifendian/adherev-util-intl';

import Card from './Card';
import Message from './Message';
import Constant from './constant';

const selectPrefix = 'adherev-ui-playground';

export const PlaygroundMixinsProps = {
  cardProps: {
    type: Object,
    default: () => null,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  defaultExpand: {
    type: Boolean,
    default: false,
  },
};

export default {
  props: PlaygroundMixinsProps,
  data() {
    return {
      expand: this.defaultExpand,
    };
  },
  computed: {
    expandIcon() {
      const { expand } = this;
      return expand ? Constant.DownSquareOutlined : Constant.UpSquareOutlined;
    },
    expandAlt() {
      const { expand } = this;
      return expand ? Intl.v('收起') : Intl.v('展开');
    },
  },
  watch: {
    defaultExpand(expand) {
      this.expand = expand;
    },
  },
  methods: {
    copy(e) {
      this.getClipboardText(e).then((text) => {
        copy(text);
        // @ts-ignore
        Message.success(Intl.v('复制成功'));
      });
    },
  },
  render(h) {
    const { $slots, cardProps, isActive } = this;

    return (
      <div class={classNames(selectPrefix, isActive ? `${selectPrefix}-active` : '')}>
        {/*@ts-ignore*/}
        <Card actions={['copy', 'expand']} {...{ props: cardProps || {} }}>
          <img
            class={`${selectPrefix}-action-btn`}
            src={Constant.CopyOutlined}
            slot="copy"
            alt={Intl.v('复制')}
            onClick={(e) => {
              this.copy(e);
            }}
          />

          <img
            class={`${selectPrefix}-action-btn`}
            src={this.expandIcon}
            slot="expand"
            alt={this.expandAlt}
            onClick={() => {
              this.expand = !this.expand;
            }}
          />

          {$slots.default}
        </Card>

        {this.renderCodeView(h)}
      </div>
    );
  },
};
