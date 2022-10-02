import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import CodePanel from './CodePanel';
import SimpleTabs from './SimpleTabs';
import TabPanel from './SimpleTabs/TabPanel';

const selectPrefix = 'adherev-ui-playground-code-tab-panel';

export const CodeTabPanelDefaultProps = {
  active: {
    type: String,
    default: '',
  },
  config: {
    type: Array,
    default: () => [],
  },
};

const CodeTabPanel: any = {
  name: 'adv-playground-code-tab-panel',
  props: { ...CodeTabPanelDefaultProps },
  render(h) {
    const { active, config } = this;

    return (
      <div class={selectPrefix}>
        <SimpleTabs
          defaultActiveKey={active}
          onChange={(key) => {
            this.$emit('change', key);
          }}
        >
          {config.map(({ key, title, codeText, ...codePanelConfig }) => {
            return (
              <TabPanel title={title} key={key} index={key}>
                <ConditionalRender conditional={active === key}>
                  <CodePanel {...{ props: codePanelConfig }}>{codeText}</CodePanel>
                </ConditionalRender>
              </TabPanel>
            );
          })}
        </SimpleTabs>
      </div>
    );
  },
};

export default CodeTabPanel;
