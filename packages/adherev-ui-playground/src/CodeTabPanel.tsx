import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import SimpleTabs from './SimpleTabs';
import TabPanel from './SimpleTabs/TabPanel';
import CodePanel from './CodePanel';

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

export default {
  name: 'adv-playground-code-tab-panel',
  props: { ...CodeTabPanelDefaultProps },
  render(h) {
    const { active, config } = this;

    return (
      <div class={selectPrefix}>
        {/*@ts-ignore*/}
        <SimpleTabs
          defaultActiveKey={active}
          onChange={(key) => {
            // this.active = key;

            this.$emit('change', key);
          }}
        >
          {config.map(({ key, title, codeText, ...codePanelConfig }) => {
            return (
              // @ts-ignore
              <TabPanel title={title} key={key} index={key}>
                <ConditionalRender conditional={active === key}>
                  {/*@ts-ignore*/}
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
