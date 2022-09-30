import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'code-tab-panel',
};

export default withInstall(createHOC(PlayGround.CodeTabPanel, options, null));
