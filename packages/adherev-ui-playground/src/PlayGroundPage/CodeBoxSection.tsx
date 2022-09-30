import { createHOC } from 'vue-hoc';

import CodeBoxPanel from '../CodeBoxPanel';

const options = {
  name: 'adv-playground-page-code-box-section',
};

export default createHOC(CodeBoxPanel, options, null);
