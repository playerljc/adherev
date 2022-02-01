import { createHOC } from 'vue-hoc';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';

const options = {
  name: 'code-panel',
};

export default withInstall(createHOC(PlayGround.CodePanel, options, null));
