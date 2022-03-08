import Util from '@baifendian/adherev-util';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';

const options = {
  name: 'Props',
};

export default withInstall(Util._util.HOC(PlayGround.Props, options));
