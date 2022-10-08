import { Picker } from 'emoji-mart-vue';
import { createHOC } from 'vue-hoc';

/**
 * Emoji
 * @param props
 * @constructor
 * @classdesc 表情
 */
const Emoji: any = createHOC(
  Picker,
  {
    name: `adv-comment-comment-emoji`,
  },
  null,
);

export default Emoji;
