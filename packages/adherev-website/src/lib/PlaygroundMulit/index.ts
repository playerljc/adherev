import { createHOC } from 'vue-hoc';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';

const options = {
  name: 'playground-mulit',
};

export default withInstall(createHOC(PlayGround.PlayGroundMulit, options, null));
