import omit from 'omit.js';
import { ExtractPropTypes, defineComponent, ref, watch } from 'vue';
import { array } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import ContextMenu from '@baifendian/adherev-ui-contextmenu';

import Card from './Card';
import CodePanel, { CodePanelProps } from './CodePanel';
import CodeTabPanel, { CodeTabPanelProps } from './CodeTabPanel';
import PlayGroundBase, { playGroundBaseProps } from './PlayGroundBase';

const selectPrefix = 'adherev-ui-playground-mulit';

enum codeType {
  CodePanel = 'CodePanel',
  CodeTabPanel = 'CodeTabPanel',
}

type ConfigItem = (CodePanelProps | CodeTabPanelProps) & {
  type: codeType;
  title: string;
};

const playGroundMulitProps = {
  ...playGroundBaseProps,
  defaultConfig: array<ConfigItem>().def([]),
};

export type PlayGroundMulitProps = Partial<ExtractPropTypes<typeof playGroundMulitProps>>;

export default defineComponent({
  name: 'adv-playground-mulit',
  props: playGroundMulitProps,
  setup(props, { slots }) {
    const others = omit(playGroundBaseProps, ['getClipboardText', 'defaultExpand']);

    const expand = ref<boolean>(props.defaultExpand);

    const config = ref<ConfigItem[]>(props.defaultConfig);

    const configMap = new Map<
      codeType,
      {
        render(config: Pick<ConfigItem, never>, index?: number): JSX.Element;
        getCodeText(config: any): string;
      }
    >([
      [
        codeType.CodePanel,
        {
          render: (config): JSX.Element => (
            // @ts-ignore
            <CodePanel {...config} />
          ),
          getCodeText: (config) => config.codeText,
        },
      ],
      [
        codeType.CodeTabPanel,
        {
          render: (_config, index: number) => (
            // @ts-ignore
            <CodeTabPanel
              {..._config}
              onChange={(key: any) => {
                // @ts-ignore
                config.value[index].active = key;
              }}
            />
          ),
          getCodeText: (config) =>
            config.config.find((c: { key: any }) => c.key === config.active)?.codeText,
        },
      ],
    ]);

    const renderCodePanelView = (config: ConfigItem, index: number): JSX.Element => {
      return (
        <div
          key={`${index}`}
          // @ts-ignore
          class={`${selectPrefix}-codeviewwrap`}
        >
          <div
            // @ts-ignore
            class={`${selectPrefix}-codeviewwrap-title`}
          >
            {config.title}
          </div>
          <div
            // @ts-ignore
            class={`${selectPrefix}-codeviewwrap-inner`}
          >
            {configMap
              .get(config.type || codeType.CodePanel)
              ?.render(omit(config, ['title', 'type']), index)}
          </div>
        </div>
      );
    };

    const getClipboardText = (e: { clientX: any; clientY: any }): Promise<string> => {
      return new Promise((resolve) => {
        ContextMenu.open(
          config.value.map((c, index) => ({
            name: c.title,
            id: `${index}`,
            separation: false,
            attribute: {
              config: c,
            },
            children: [],
          })),
          // @ts-ignore
          {
            width: 200,
            x: e.clientX,
            y: e.clientY,
            maskClosable: true,
            handler: (id: any, attribute: any) => {
              resolve(
                configMap
                  ?.get(attribute.config.type || codeType.CodePanel)
                  ?.getCodeText(attribute.config) as string,
              );
            },
          },
        );
      });
    };

    const onExpand = (_expand: boolean) => {
      expand.value = !_expand;
    };

    watch(
      () => props.defaultExpand,
      (newValue) => {
        expand.value = newValue;
      },
    );

    watch(
      () => props.defaultConfig,
      (newValue) => {
        config.value = newValue;
      },
    );

    return () => {
      const _playGroundBaseProps = {};
      for (const p in others) {
        _playGroundBaseProps[p] = props[p];
      }

      return (
        // @ts-ignore
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
                {/*@ts-ignore*/}
                <Card>{(config.value || []).map((c, index) => renderCodePanelView(c, index))}</Card>
              </ConditionalRender.Show>
            ),
          }}
        </PlayGroundBase>
      );
    };
  },
});
