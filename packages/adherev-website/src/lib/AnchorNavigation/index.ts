import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'anchor-navigation',
};

export default withInstall(createHOC(PlayGround.AnchorNavigation, options, null));
