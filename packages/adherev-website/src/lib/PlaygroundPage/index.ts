import { withInstall } from '@/_util';
import { PlayGround } from '@baifendian/adherev';
import { createHOC } from 'vue-hoc';

const options = {
  name: 'playground-page',
};

export const Section = withInstall(
  createHOC(
    PlayGround.PlayGroundPage.Section,
    {
      name: 'section',
    },
    null,
  ),
);

export const CodeBoxSection = withInstall(
  createHOC(
    PlayGround.PlayGroundPage.CodeBoxSection,
    {
      name: 'code-box-section',
    },
    null,
  ),
);

export const PropsSection = withInstall(
  createHOC(
    PlayGround.PlayGroundPage.PropsSection,
    {
      name: 'props-section',
    },
    null,
  ),
);

export const FunctionPropsSection = withInstall(
  createHOC(
    PlayGround.PlayGroundPage.FunctionPropsSection,
    {
      name: 'function-props-section',
    },
    null,
  ),
);

export default withInstall(createHOC(PlayGround.PlayGroundPage, options, null));
