import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'code-panel',
};

export default withInstall(createHOC(PlayGround.CodePanel, options, null));
