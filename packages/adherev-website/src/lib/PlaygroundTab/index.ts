import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'playground-tab',
};

export default withInstall(createHOC(PlayGround.PlayGroundTab, options, null));
