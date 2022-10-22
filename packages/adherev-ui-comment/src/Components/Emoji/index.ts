import { Picker } from 'emoji-mart-vue-fast';

import Util from '@baifendian/adherev-util';

/**
 * Emoji
 * @param props
 * @constructor
 * @classdesc 表情
 */

export default Util._util.HOC(
  Picker,
  {
    name: `adv-comment-comment-emoji`,
  },
  {},
);
