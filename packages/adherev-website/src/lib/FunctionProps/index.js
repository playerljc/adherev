import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import Util from '@baifendian/adherev-util';

const options = {
  name: 'FunctionProps',
};

export default withInstall(Util._util.HOC(PlayGround.FunctionProps, options));
