import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'playground',
};

export default withInstall(createHOC(PlayGround, options, null));
