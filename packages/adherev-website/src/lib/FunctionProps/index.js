import Util from '@baifendian/adherev-util';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';

const options = {
  name: 'FunctionProps',
};

export default withInstall(Util._util.HOC(PlayGround.FunctionProps, options));
