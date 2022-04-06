import { createHOC } from 'vue-hoc';
import { PlayGround } from '@baifendian/adherev';
import { withInstall } from '@/_util';
const options = {
    name: 'playground-tab',
};
export default withInstall(createHOC(PlayGround.PlayGroundTab, options, null));
//# sourceMappingURL=index.js.map