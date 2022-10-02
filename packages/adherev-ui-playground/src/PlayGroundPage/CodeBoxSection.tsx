import { createHOC } from 'vue-hoc';

import CodeBoxPanel from '../CodeBoxPanel';

const options = {
  name: 'adv-playground-page-code-box-section',
};

const CodeBoxSection: any = createHOC(CodeBoxPanel, options, null);

export default CodeBoxSection;
