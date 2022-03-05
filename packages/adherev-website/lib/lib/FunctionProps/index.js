import { createHOC } from 'vue-hoc';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';
const options = {
    name: 'FunctionProps',
};
export default withInstall(createHOC(PlayGround.FunctionProps, options, null));
