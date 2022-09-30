import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'playground-mulit',
};

export default withInstall(createHOC(PlayGround.PlayGroundMulit, options, null));
