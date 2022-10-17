import { PlayGround } from '@baifendian/adherev';
import Util from '@baifendian/adherev-util';

import { withInstall } from '@/_util';

const options = {
  name: 'code-tab-panel',
};

export default withInstall(Util._util.HOC(PlayGround.CodeTabPanel, options));
