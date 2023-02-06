import omit from 'omit.js';
import { ExtractPropTypes, defineComponent, ref, watch } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Card from './Card';
import CodeTabPanel, { codeTabPanelProps } from './CodeTabPanel';
import PlayGroundBase, { playGroundBaseProps } from './PlayGroundBase';

export const playGroundTabProps = {
  ...playGroundBaseProps,
  ...codeTabPanelProps,
};

export default defineComponent({
  name: 'adv-playground-tab',
  props: playGroundTabProps,
  setup(props, { slots }) {
    const others = omit(playGroundBaseProps, ['getClipboardText', 'defaultExpand']);

    const expand = ref<boolean>(props.defaultExpand);

    const activeKey = ref<string>(props.active);

    const getClipboardText = (): Promise<string> => {
      return Promise.resolve(
        props.config.find((c) => c.key === activeKey.value)?.codeText as string,
      );
    };

    const onExpand = (_expand: boolean) => {
      expand.value = !_expand;
    };

    watch(
      () => props.defaultExpand,
      (newValue) => (expand.value = newValue),
    );

    watch(
      () => props.active,
      (newValue) => (activeKey.value = newValue),
    );

    return () => {
      const _playGroundBaseProps = {};
      for (const p in others) {
        _playGroundBaseProps[p] = props[p];
      }

      return (
        <PlayGroundBase
          {..._playGroundBaseProps}
          defaultExpand={expand.value}
          getClipboardText={getClipboardText}
          onExpand={onExpand}
        >
          {{
            default: () => slots?.default?.(),
            codeView: () => (
              <ConditionalRender.Show conditional={expand.value}>
                <Card>
                  <CodeTabPanel
                    config={props.config}
                    active={activeKey.value}
                    onChange={(key: string) => {
                      activeKey.value = key;
                    }}
                  />
                </Card>
              </ConditionalRender.Show>
            ),
          }}
        </PlayGroundBase>
      );
    };
  },
});
