import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'FunctionProps',
};

export default withInstall(createHOC(PlayGround.FunctionProps, options, null));
