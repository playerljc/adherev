import Util from '@baifendian/adherev-util';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';

const options = {
  name: 'code-panel',
};

export default withInstall(Util._util.HOC(PlayGround.CodePanel, options));
