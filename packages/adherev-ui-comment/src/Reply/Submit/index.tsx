import { Button, Input, Popover } from 'ant-design-vue';
import { defineComponent, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { object, string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';
import ar from '@emoji-mart/data/i18n/ar.json';
import de from '@emoji-mart/data/i18n/de.json';
import en from '@emoji-mart/data/i18n/en.json';
import es from '@emoji-mart/data/i18n/es.json';
import fa from '@emoji-mart/data/i18n/fa.json';
import fr from '@emoji-mart/data/i18n/fr.json';
import it from '@emoji-mart/data/i18n/it.json';
import ja from '@emoji-mart/data/i18n/ja.json';
import nl from '@emoji-mart/data/i18n/nl.json';
import pl from '@emoji-mart/data/i18n/pl.json';
import pt from '@emoji-mart/data/i18n/pt.json';
import ru from '@emoji-mart/data/i18n/ru.json';
import uk from '@emoji-mart/data/i18n/uk.json';
import zh from '@emoji-mart/data/i18n/zh.json';

import Emoji from '../../Components/Emoji';
import EmojiIcon from './emoji';

const { TextArea } = Input;

export const LOCAL_MAP = new Map<string, any>([
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

export const submitProps = {
  local: string().def('zh'),
  emojiPickerProps: object().def({}),
};

export default defineComponent({
  name: `adv-comment-reply`,
  emits: ['result', 'cancel'],
  props: submitProps,
  setup(props, { emit }) {
    const textAreaRef = ref<HTMLElement>();
    const emojiWrapRef = ref<HTMLDivElement>();
    const value = ref('');
    const emojiIconWrapVisible = ref(false);

    const onEmojiSelect = ({ native }) => {
      // 获取textarea的dom
      const textareaEl = (textAreaRef.value as HTMLDivElement).querySelector('textarea');

      // 光标开始索引
      const { selectionStart } = textareaEl!;

      // (0) 1 (1) 2 (2) 3 (3)
      value.value = `${value.value.substring(0, selectionStart)}${native}${value.value.substring(
        selectionStart,
      )}`;

      nextTick(function () {
        textareaEl!.focus();
        textareaEl!.setSelectionRange(
          selectionStart + native.length,
          selectionStart + native.length,
        );
      });
    };

    const onDocBodyClick = (e) => {
      const target = e.target;

      const textareaEl = textAreaRef.value;

      if (![textareaEl!.querySelector('textarea')].includes(target)) {
        emojiIconWrapVisible.value = false;
      }
    };

    const onEmojiWrapClick = (e) => {
      e.stopPropagation();
    };

    onMounted(() => {
      document.body.addEventListener('click', onDocBodyClick);
      emojiWrapRef.value!.addEventListener?.('click', onEmojiWrapClick);
    });

    onBeforeUnmount(() => {
      document.body.removeEventListener('click', onDocBodyClick);
      emojiWrapRef.value!.removeEventListener?.('click', onEmojiWrapClick);
    });

    return () => (
      <div class={`${selectorPrefix}`}>
        <div class={`${selectorPrefix}-textarea-wrap`} ref={textAreaRef}>
          <TextArea
            class={`${selectorPrefix}-textarea`}
            placeholder={Intl.tv('请输入回复内容')}
            // @ts-ignore
            autoFocus={true}
            value={value.value}
            onChange={(e) => {
              value.value = e.target.value as string;
            }}
            maxLength={100}
          />
        </div>

        <div ref={emojiWrapRef} class={`${selectorPrefix}-toolbar-emoji-wrap`} />

        <div class={`${selectorPrefix}-toolbar`}>
          <Popover
            placement="bottomLeft"
            // @ts-ignore
            getPopupContainer={() => emojiWrapRef.value}
            content={
              <Emoji
                // set="native"
                i18n={LOCAL_MAP.get(props.local || 'zh')}
                onEmojiSelect={onEmojiSelect}
                {...(props.emojiPickerProps || {})}
              />
            }
            visible={emojiIconWrapVisible.value}
          >
            <div
              // @ts-ignore
              onClick={(e) => {
                e.stopPropagation();
                emojiIconWrapVisible.value = !emojiIconWrapVisible.value;
              }}
            >
              <EmojiIcon class={`${selectorPrefix}-toolbar-item-emoji`} />
            </div>
          </Popover>

          <div class={`${selectorPrefix}-toolbar-inner`}>
            <Button
              type="primary"
              class={`${selectorPrefix}-toolbar-item`}
              disabled={!value}
              onClick={() => emit('result', value.value.trim())}
            >
              {Intl.tv('添加')}
            </Button>

            <Button class={`${selectorPrefix}-toolbar-item`} onClick={() => emit('cancel')}>
              {Intl.tv('取消')}
            </Button>
          </div>
        </div>
      </div>
    );
  },
});
