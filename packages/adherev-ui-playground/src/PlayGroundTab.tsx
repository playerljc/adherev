import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Card from './Card';
import CodeTabPanel, { CodeTabPanelDefaultProps } from './CodeTabPanel';
import PlayGroundMixins, { PlaygroundMixinsProps } from './PlayGroundMixins';

// const selectPrefix = 'adherev-ui-playground-tab';

export const PlayGroundTabPropTypes = {
  ...PlaygroundMixinsProps,
  ...CodeTabPanelDefaultProps,
};

export default {
  name: 'adv-playground-tab',
  mixins: [PlayGroundMixins],
  props: {
    ...PlayGroundTabPropTypes,
  },
  data() {
    return {
      activeKey: this.active,
    };
  },
  watch: {
    activeKey(activeKey) {
      this.activeKey = activeKey;
    },
  },
  methods: {
    getClipboardText() {
      const { config, activeKey } = this;

      return Promise.resolve(config.find((c) => c.key === activeKey)?.codeText);
    },
    renderCodeView(h) {
      const { expand, config } = this;

      return (
        <ConditionalRender.Show conditional={expand}>
          {/*@ts-ignore*/}
          <Card>
            {/*@ts-ignore*/}
            <CodeTabPanel
              config={config}
              active={this.activeKey}
              onChange={(key) => {
                this.activeKey = key;
              }}
            />
          </Card>
        </ConditionalRender.Show>
      );
    },
  },
};
