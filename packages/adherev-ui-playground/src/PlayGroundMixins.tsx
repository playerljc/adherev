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

const PlayGroundMixins: any = {
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
      return expand ? Intl.tv('收起') : Intl.tv('展开');
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
        Message.success(Intl.tv('复制成功'));
      });
    },
  },
  render(h) {
    const { $slots, cardProps, isActive } = this;

    return (
      <div class={classNames(selectPrefix, isActive ? `${selectPrefix}-active` : '')}>
        <Card actions={['copy', 'expand']} {...{ props: cardProps || {} }}>
          <img
            class={`${selectPrefix}-action-btn`}
            src={Constant.CopyOutlined}
            slot="copy"
            alt={Intl.tv('复制')}
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

export default PlayGroundMixins;
