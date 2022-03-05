import { createHOC } from 'vue-hoc';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';
const options = {
    name: 'Props',
};
export default withInstall(createHOC(PlayGround.Props, options, null));
