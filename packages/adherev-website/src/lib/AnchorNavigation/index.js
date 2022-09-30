import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import Util from '@baifendian/adherev-util';

const options = {
  name: 'anchor-navigation',
};

export default withInstall(Util._util.HOC(PlayGround.AnchorNavigation, options));
