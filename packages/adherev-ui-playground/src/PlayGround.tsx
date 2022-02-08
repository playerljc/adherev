import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Card from './Card';
import PlayGroundMixins, { PlaygroundMixinsProps } from './PlayGroundMixins';
import CodePanel, { CodePanelPropTypes } from './CodePanel';

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
          <Card>
            <CodePanel lang={lang}>{codeText}</CodePanel>
          </Card>
        </ConditionalRender.Show>
      );
    },
  },
};
