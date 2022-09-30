import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'Props',
};

export default withInstall(createHOC(PlayGround.Props, options, null));
