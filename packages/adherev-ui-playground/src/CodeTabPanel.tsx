import { ExtractPropTypes, VNode, defineComponent, ref, watch } from 'vue';
import { array, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import CodePanel from './CodePanel';
import SimpleTabs from './SimpleTabs';
import TabPanel from './SimpleTabs/TabPanel';

const selectPrefix = 'adherev-ui-playground-code-tab-panel';

export interface ICodeTabPanelItemProps {
  key: string;
  title: string | VNode;
  codeText: string;
  lang: string;
}

export const codeTabPanelProps = {
  active: string().def(''),
  config: array<ICodeTabPanelItemProps>().def([]),
};

export default defineComponent({
  name: 'adv-playground-code-tab-panel',
  emits: ['change'],
  props: codeTabPanelProps,
  setup(props, { emit }) {
    const active = ref<string>(props.active);

    watch(
      () => props.active,
      (newValue) => (active.value = newValue),
    );

    return () => (
      <div class={selectPrefix}>
        {/*@ts-ignore*/}
        <SimpleTabs
          defaultActiveKey={active.value}
          onChange={(key: string) => {
            active.value = key;
            emit('change', key);
          }}
        >
          {props.config.map(({ key, title, ...codePanelConfig }) => (
            // @ts-ignore
            <TabPanel title={title} key={key} index={key}>
              {/*@ts-ignore*/}
              <ConditionalRender conditional={active.value === key}>
                <CodePanel {...codePanelConfig} />
              </ConditionalRender>
            </TabPanel>
          ))}
        </SimpleTabs>
      </div>
    );
  },
});
