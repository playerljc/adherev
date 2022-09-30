import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Card from './Card';
import CodePanel, { CodePanelPropTypes } from './CodePanel';
import PlayGroundMixins, { PlaygroundMixinsProps } from './PlayGroundMixins';

export const PlayGroundPropTypes = {
  ...PlaygroundMixinsProps,
  ...CodePanelPropTypes,
  codeText: {
    type: String,
    default: '',
  },
};

export default {
  name: 'adv-playground',
  mixins: [PlayGroundMixins],
  props: {
    ...PlayGroundPropTypes,
  },
  methods: {
    getClipboardText() {
      return Promise.resolve(this.codeText);
    },
    renderCodeView(h) {
      const { expand, lang, codeText } = this;

      return (
        <ConditionalRender.Show conditional={expand}>
          {/*@ts-ignore**/}
          <Card>
            {/*@ts-ignore***/}
            <CodePanel lang={lang}>{codeText}</CodePanel>
          </Card>
        </ConditionalRender.Show>
      );
    },
  },
};
