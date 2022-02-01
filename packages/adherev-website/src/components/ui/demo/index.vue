<template>
  <div class="PageDemo" ref="ref" style="padding: 20px">
    <adv-playground-anchor-navigation
      :defaultActiveAnchor="activeAnchor"
      :anchors="anchors"
      :scrollEl="scrollEl"
    >
      <div>
        <!--<h1>CodePanel</h1>
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
        </adv-playground-mulit>-->

        <h1>CodeBoxPanel</h1>
        <adv-playground-code-box-panel title="代码演示" :config="codeBoxPanelConfig">
          <template #cell1>
            <a-button type="primary">显示警告提示</a-button>
          </template>
        </adv-playground-code-box-panel>
      </div>
    </adv-playground-anchor-navigation>
  </div>
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
          type: 'PlayGround',
          codeText: `<template><p>666</p></template>`,
          childrenSlot: 'cell1',
        },
        {
          id: 'p2',
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
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.parentElement?.parentElement;
  },
  methods: {
    onChange(key) {
      console.log('11111111111111');
      // this.activeKey = key;
    },
  },
};
</script>
