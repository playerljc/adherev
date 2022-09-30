import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import Util from '@baifendian/adherev-util';

const options = {
  name: 'playground-page',
};

export const Section = withInstall(
  Util._util.HOC(PlayGround.PlayGroundPage.Section, {
    name: 'section',
  }),
);

export const CodeBoxSection = withInstall(
  Util._util.HOC(PlayGround.PlayGroundPage.CodeBoxSection, {
    name: 'code-box-section',
  }),
);

export const PropsSection = withInstall(
  Util._util.HOC(PlayGround.PlayGroundPage.PropsSection, {
    name: 'props-section',
  }),
);

export const FunctionPropsSection = withInstall(
  Util._util.HOC(PlayGround.PlayGroundPage.FunctionPropsSection, {
    name: 'function-props-section',
  }),
);

export default withInstall(Util._util.HOC(PlayGround.PlayGroundPage, options));
