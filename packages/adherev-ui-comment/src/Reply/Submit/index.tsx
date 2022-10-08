import { Button, Input, Popover } from 'ant-design-vue';

import Intl from '@baifendian/adherev-util-intl';

import Emoji from '../../Components/Emoji';
import en from '../../Components/Emoji/locales/en';
import zh from '../../Components/Emoji/locales/zh';
import EmojiIcon from './emoji';

const { TextArea } = Input;

const LOCAL_MAP = new Map<string, any>([
  ['en', en],
  ['zh', zh],
]);

const selectorPrefix = 'adherev-ui-comment-reply';

const Reply: any = {
  name: `adv-comment-reply`,
  props: {
    local: {
      type: String,
      default: 'zh',
    },
    emojiPickerProps: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['result', 'cancel'],
  data() {
    return {
      value: '',
      emojiIconWrapVisible: false,
    };
  },
  methods: {
    $onEmojiSelect({ native }) {
      // 获取textarea的dom
      const textareaEl = this.$refs.textAreaRef.querySelector('textarea');

      // 光标开始索引
      const { selectionStart } = textareaEl;

      // (0) 1 (1) 2 (2) 3 (3)
      this.value = `${this.value.substring(0, selectionStart)}${native}${this.value.substring(
        selectionStart,
      )}`;

      this.$nextTick(function () {
        textareaEl.focus();
        textareaEl.setSelectionRange(
          selectionStart + native.length,
          selectionStart + native.length,
        );
      });
    },
    $onDocBodyClick(e) {
      const target = e.target;

      const textareaEl = this.$refs.textAreaRef;

      if (![textareaEl.querySelector('textarea')].includes(target)) {
        this.emojiIconWrapVisible = false;
      }
    },
    $onEmojiWrapClick(e) {
      e.stopPropagation();
    },
  },
  mounted() {
    document.body.addEventListener('click', this.$onDocBodyClick);
    this.$refs.emojiWrapRef.addEventListener?.('click', this.$onEmojiWrapClick);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', this.$onDocBodyClick);
    this.$refs.emojiWrapRef.removeEventListener?.('click', this.$onEmojiWrapClick);
  },
  render(h) {
    return (
      <div class={`${selectorPrefix}`}>
        <div class={`${selectorPrefix}-textarea-wrap`} ref="textAreaRef">
          <TextArea
            // @ts-ignore
            class={`${selectorPrefix}-textarea`}
            placeholder={Intl.v('请输入回复内容')}
            autoFocus={true}
            value={this.value}
            onChange={(e) => {
              this.value = e.target.value;
            }}
            maxLength={100}
          />
        </div>

        <div ref="emojiWrapRef" class={`${selectorPrefix}-toolbar-emoji-wrap`} />

        <div class={`${selectorPrefix}-toolbar`}>
          <Popover
            // @ts-ignore
            placement="bottomLeft"
            getPopupContainer={() => this.$refs.emojiWrapRef}
            content={
              <Emoji
                set="emojione"
                i18n={LOCAL_MAP.get(this.local || 'zh')}
                onSelect={this.$onEmojiSelect}
                {...{ props: this.emojiPickerProps || {} }}
              />
            }
            visible={this.emojiIconWrapVisible}
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                this.emojiIconWrapVisible = !this.emojiIconWrapVisible;
              }}
            >
              <EmojiIcon class={`${selectorPrefix}-toolbar-item-emoji`} />
            </div>
          </Popover>

          <div class={`${selectorPrefix}-toolbar-inner`}>
            <Button
              // @ts-ignore
              type="primary"
              class={`${selectorPrefix}-toolbar-item`}
              disabled={!this.value}
              onClick={() => this.$emit('result', this.value.trim())}
            >
              {Intl.v('添加')}
            </Button>

            {/*@ts-ignore*/}
            <Button class={`${selectorPrefix}-toolbar-item`} onClick={() => this.$emit('cancel')}>
              {Intl.v('取消')}
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export default Reply;
