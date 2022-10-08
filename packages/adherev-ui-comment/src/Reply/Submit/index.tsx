import { Button, Input, Popover } from 'ant-design-vue';
import { Picker } from 'emoji-mart-vue';

import Intl from '@baifendian/adherev-util-intl';
// @ts-ignore
import data from '@emoji-mart/data';
// @ts-ignore
import ar from '@emoji-mart/data/i18n/ar.json';
// @ts-ignore
import de from '@emoji-mart/data/i18n/de.json';
// @ts-ignore
import en from '@emoji-mart/data/i18n/en.json';
// @ts-ignore
import es from '@emoji-mart/data/i18n/es.json';
// @ts-ignore
import fa from '@emoji-mart/data/i18n/fa.json';
// @ts-ignore
import fr from '@emoji-mart/data/i18n/fr.json';
// @ts-ignore
import it from '@emoji-mart/data/i18n/it.json';
// @ts-ignore
import ja from '@emoji-mart/data/i18n/ja.json';
// @ts-ignore
import nl from '@emoji-mart/data/i18n/nl.json';
// @ts-ignore
import pl from '@emoji-mart/data/i18n/pl.json';
// @ts-ignore
import pt from '@emoji-mart/data/i18n/pt.json';
// @ts-ignore
import ru from '@emoji-mart/data/i18n/ru.json';
// @ts-ignore
import uk from '@emoji-mart/data/i18n/uk.json';
// @ts-ignore
import zh from '@emoji-mart/data/i18n/zh.json';

import EmojiIcon from './emoji';

const { TextArea } = Input;

const LOCAL_MAP = new Map<string, any>([
  ['ar', ar],
  ['de', de],
  ['en', en],
  ['es', es],
  ['fa', fa],
  ['fr', fr],
  ['it', it],
  ['ja', ja],
  ['nl', nl],
  ['pl', pl],
  ['pt', pt],
  ['ru', ru],
  ['uk', uk],
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
    onEmojiSelect({ native }) {
      // 获取textarea的dom
      const textareaEl = this.$refs.textAreaRef.querySelector('textarea') as HTMLTextAreaElement;

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
            showCount
            maxLength={100}
          />
        </div>

        <div ref="emojiWrapRef" class={`${selectorPrefix}-emoji-wrap`} />

        <div class={`${selectorPrefix}-toolbar`}>
          <Popover
            // @ts-ignore
            placement="bottomLeft"
            getPopupContainer={() => this.$refs.emojiWrapRef}
            content={
              <Picker
                data={data}
                i18n={LOCAL_MAP.get(this.local || 'zh')}
                onSelect={this.onEmojiSelect}
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

            <Button
              // @ts-ignore
              class={`${selectorPrefix}-toolbar-item`}
              onClick={() => this.$emit('cancel')}
            >
              {Intl.v('取消')}
            </Button>
          </div>
        </div>
      </div>
    );
  },
};

export default Reply;
