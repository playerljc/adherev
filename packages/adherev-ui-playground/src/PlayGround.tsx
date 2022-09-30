import omit from 'omit.js';
import { ExtractPropTypes, defineComponent, ref, watch } from 'vue';
import { string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import Card from './Card';
import CodePanel, { codePanelProps } from './CodePanel';
import PlayGroundBase, { playGroundBaseProps } from './PlayGroundBase';

const playGroundProps = {
  ...codePanelProps,
  ...playGroundBaseProps,
  codeText: string().def(''),
};

export type PlayGroundProps = Partial<ExtractPropTypes<typeof playGroundProps>>;

export default defineComponent({
  name: 'adv-playground',
  props: playGroundProps,
  setup(props, { slots }) {
    const others = omit(playGroundBaseProps, ['getClipboardText', 'defaultExpand']);

    const expand = ref<boolean>(props.defaultExpand);

    const getClipboardText = (): Promise<string> => Promise.resolve(props.codeText);

    const onExpand = (_expand: boolean) => {
      expand.value = !_expand;
    };

    watch(
      () => props.defaultExpand,
      (newValue) => (expand.value = newValue),
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
                  <CodePanel lang={props.lang} codeText={props.codeText} />
                </Card>
              </ConditionalRender.Show>
            ),
          }}
        </PlayGroundBase>
      );
    };
  },
});
