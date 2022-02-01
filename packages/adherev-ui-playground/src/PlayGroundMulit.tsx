import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import ContextMenu from '@baifendian/adherev-ui-contextmenu';

import Card from './Card';

import PlayGroundMixins, { PlaygroundMixinsProps } from './PlayGroundMixins';
import CodePanel from './CodePanel';
import CodeTabPanel from './CodeTabPanel';

const selectPrefix = 'adherev-ui-playground-mulit';

export const PlayGroundMulitPropTypes = {
  ...PlaygroundMixinsProps,
  defaultConfig: {
    type: Array,
    default: () => [],
  },
};

export default {
  name: 'adv-playground-mulit',
  mixins: [PlayGroundMixins],
  props: {
    ...PlayGroundMulitPropTypes,
  },
  data() {
    return {
      $configMap: new Map<
        string,
        {
          render: (h: any, config: any, index: number) => Object;
          getCodeText: (config: any) => string;
        }
      >([
        [
          'CodePanel',
          {
            render: (h, { type, codeText, title, ...config }) => (
              <CodePanel {...{ props: config }}>{codeText}</CodePanel>
            ),
            getCodeText: (config) => config.codeText,
          },
        ],
        [
          'CodeTabPanel',
          {
            render: (h, { type, ...props }, index: number) => {
              return (
                <CodeTabPanel
                  {...{ props }}
                  onChange={(key) => {
                    const config = [...this.config];

                    config[index].active = key;

                    this.config = config;
                  }}
                />
              );
            },
            getCodeText: (item) => item.config.find((c) => c.key === item.active)?.codeText,
          },
        ],
      ]),
      config: this.defaultConfig,
    };
  },
  watch: {
    defaultConfig(defaultConfig) {
      this.config = defaultConfig;
    },
  },
  methods: {
    getClipboardText(e) {
      const { config, $data } = this;

      return new Promise((resolve) => {
        ContextMenu.open(
          config.map((c, index) => ({
            name: c.title,
            id: `${index}`,
            separation: false,
            attribute: {
              config: c,
            },
            children: [],
          })),
          {
            width: 200,
            x: e.clientX,
            y: e.clientY,
            maskClosable: true,
            handler: (id, attribute) => {
              // @ts-ignore
              resolve(
                $data.$configMap
                  .get(attribute.config.type || 'CodePanel')
                  ?.getCodeText(attribute.config),
              );
            },
          },
        );
      });
    },
    renderCodePanelView(h, c, index) {
      const { $data } = this;

      return (
        <div key={`${index}`} class={`${selectPrefix}-codeviewwrap`}>
          <div class={`${selectPrefix}-codeviewwrap-title`}>{c.title}</div>
          <div class={`${selectPrefix}-codeviewwrap-inner`}>
            {$data.$configMap.get(c.type || 'CodePanel').render(h, c, index)}
          </div>
        </div>
      );
    },
    renderCodeView(h) {
      const { expand, config } = this;

      return (
        <ConditionalRender.Show conditional={expand}>
          <Card>{(config || []).map((c, index) => this.renderCodePanelView(h, c, index))}</Card>
        </ConditionalRender.Show>
      );
    },
  },
};
