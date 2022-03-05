import { createHOC } from 'vue-hoc';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';
const options = {
    name: 'playground',
};
export default withInstall(createHOC(PlayGround, options, null));
