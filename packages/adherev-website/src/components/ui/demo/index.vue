<template>
  <!--<div class="PageDemo" ref="ref" style="padding: 20px">
    <adv-playground-anchor-navigation
      :defaultActiveAnchor="activeAnchor"
      :anchors="anchors"
      :scrollEl="scrollEl"
    >
      <div>
        &lt;!&ndash;<h1>CodePanel</h1>
        <adv-playground-code-panel id="p1">
          {{ code1 }}
        </adv-playground-code-panel>

        <h1>CodeTabPanel</h1>
        <adv-playground-code-tab-panel
          id="p2"
          :active="activeKey"
          :config="config"
          @change="onChange($event)"
        />

        <h1>PlayGround</h1>
        <adv-playground id="p3" :code-text="code1">
          <a-button type="primary">显示警告提示</a-button>
        </adv-playground>

        <h1>PlayGroundTab</h1>
        <adv-playground-tab id="p4" :active="activeTabKey" :config="config">
          <a-button type="primary">显示警告提示</a-button>
        </adv-playground-tab>

        <h1>PlayGroundMulit</h1>
        <adv-playground-mulit id="p5" :defaultConfig="defaultConfig">
          <a-button type="primary">显示警告提示</a-button>
        </adv-playground-mulit>&ndash;&gt;

        <h1>CodeBoxPanel</h1>
        <adv-playground-code-box-panel title="代码演示" :config="codeBoxPanelConfig">
          <template #cell1>
            <a-button type="primary">显示警告提示</a-button>
          </template>
        </adv-playground-code-box-panel>
      </div>
    </adv-playground-anchor-navigation>
  </div>-->
  <adv-playground-page
    :defaultActiveAnchor="activeAnchor"
    :anchors="anchors"
    :scrollEl="scrollEl"
    ref="ref"
  >
    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #cell1>
        <a-button type="primary">显示警告提示</a-button>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
const anchor = [];
anchor.length = 3;
anchor.fill(0);

export default {
  data() {
    return {
      scrollEl: null,
      code1: `
          <template><p>666</p></template>
        `,
      activeKey: 'javascript',
      activeTabKey: 'javascript',
      config: [
        {
          title: 'javascript',
          key: 'javascript',
          codeText: `<template><p>666</p></template>`,
        },
        {
          title: 'typescript',
          key: 'typescript',
          codeText: `<template><p>777</p></template>`,
        },
      ],
      defaultConfig: [
        {
          type: 'CodePanel',
          title: 'a.js',
          codeText: '<template><p>666</p></template>',
        },
        {
          type: 'CodeTabPanel',
          title: 'b.js',
          active: 'javascript',
          config: [
            {
              title: 'javascript',
              key: 'javascript',
              codeText: `<template><p>666</p></template>`,
            },
            {
              title: 'typescript',
              key: 'typescript',
              codeText: `<template><p>777</p></template>`,
            },
            {
              title: 'c++',
              key: 'c++',
              codeText: `<template><p>888</p></template>`,
            },
          ],
        },
        {
          type: 'CodePanel',
          title: 'a.js',
          codeText: '<template><p>999</p></template>',
        },
      ],
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'p1',
          type: 'PlayGround',
          codeText: `<template><p>666</p></template>`,
          childrenSlot: 'cell1',
        },
        {
          id: 'p2',
          name: 'p2',
          type: 'PlayGroundTab',
          active: 'javascript',
          config: [
            {
              title: 'javascript',
              key: 'javascript',
              codeText: `<template><p>666</p></template>`,
            },
            {
              title: 'typescript',
              key: 'typescript',
              codeText: `<template><p>777</p></template>`,
            },
          ],
          childrenSlot: 'cell1',
        },
        {
          id: 'p3',
          name: 'p3',
          type: 'PlayGroundMulit',
          defaultExpand: true,
          defaultConfig: [
            {
              type: 'CodePanel',
              title: 'a.js',
              codeText: '<template><p>666</p></template>',
            },
            {
              type: 'CodeTabPanel',
              title: 'b.js',
              active: 'javascript',
              config: [
                {
                  title: 'javascript',
                  key: 'javascript',
                  codeText: `<template><p>666</p></template>`,
                },
                {
                  title: 'typescript',
                  key: 'typescript',
                  codeText: `<template><p>777</p></template>`,
                },
                {
                  title: 'c++',
                  key: 'c++',
                  codeText: `<template><p>888</p></template>`,
                },
              ],
            },
            {
              type: 'CodePanel',
              title: 'a.js',
              codeText: '<template><p>999</p></template>',
            },
          ],
          childrenSlot: 'cell1',
        },
      ],
      activeAnchor: 'p1',
      anchors: anchor.map((t, index) => ({
        anchor: `p${index + 1}`,
        name: `p${index + 1}`,
      })),
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'putStringByLocal',
              desc: '本地持久化一对键值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'value',
                  desc: 'value',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStringByLocal',
              desc: '本地取出值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'putObjectByLocal',
              desc: '本地持久化一对键值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'object',
                  desc: 'object',
                  type: 'Object',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getObjectByLocal',
              desc: '本地取出值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'removeByLocal',
              desc: '本地删除一个键值',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'putStringBySession',
              desc: '会话持久化一对键值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'value',
                  desc: 'value',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStringBySession',
              desc: '会话取出值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'String',
              returnDesc: '',
            },
            {
              name: 'putObjectBySession',
              desc: '会话持久化一对键值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'object',
                  desc: 'object',
                  type: 'Object',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getObjectBySession',
              desc: '会话取出值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'removeBySession',
              desc: '会话删除一个键值',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'putStringByLocal',
              desc: '本地持久化一对键值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'value',
                  desc: 'value',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStringByLocal',
              desc: '本地取出值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'putObjectByLocal',
              desc: '本地持久化一对键值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'object',
                  desc: 'object',
                  type: 'Object',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getObjectByLocal',
              desc: '本地取出值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'removeByLocal',
              desc: '本地删除一个键值',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'putStringBySession',
              desc: '会话持久化一对键值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'value',
                  desc: 'value',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStringBySession',
              desc: '会话取出值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'String',
              returnDesc: '',
            },
            {
              name: 'putObjectBySession',
              desc: '会话持久化一对键值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'object',
                  desc: 'object',
                  type: 'Object',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getObjectBySession',
              desc: '会话取出值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'removeBySession',
              desc: '会话删除一个键值',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'zIndex',
              desc: '层级',
              type: 'boolean',
              defaultVal: '',
            },
            {
              params: 'duration',
              desc: '动画持续的事件',
              type: 'number',
              defaultVal: '300',
            },
            {
              params: 'target',
              desc: '获取滚动的目标元素',
              type: '() => HtmlElement | Window',
              defaultVal: '',
            },
            {
              params: 'onTrigger',
              desc: '点击事件',
              type: '() => void',
              defaultVal: '',
            },
            {
              params: 'onScrollTop',
              desc: '滚动',
              type: '(value: number) => void',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: '方法',
          data: [
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'zIndex',
              desc: '层级',
              type: 'boolean',
              defaultVal: '',
            },
            {
              params: 'duration',
              desc: '动画持续的事件',
              type: 'number',
              defaultVal: '300',
            },
            {
              params: 'target',
              desc: '获取滚动的目标元素',
              type: '() => HtmlElement | Window',
              defaultVal: '',
            },
            {
              params: 'onTrigger',
              desc: '点击事件',
              type: '() => void',
              defaultVal: '',
            },
            {
              params: 'onScrollTop',
              desc: '滚动',
              type: '(value: number) => void',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    console.log('this?.$refs?.ref?.$el', this?.$refs?.ref?.$el);
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
    // this.scrollEl = this?.$refs?.ref?.parentElement?.parentElement;
  },
  methods: {
    onChange(key) {
      console.log('11111111111111');
      // this.activeKey = key;
    },
  },
};
</script>
