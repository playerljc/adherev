import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'code-box-panel',
};

export default withInstall(createHOC(PlayGround.CodeBoxPanel, options, null));
