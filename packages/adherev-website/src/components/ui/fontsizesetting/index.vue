<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="FontSizeSetting">
      <p>字体设置</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-fontsizesetting :min="12" :max="40" :step="1" @change="onChange" />

        <adv-space />

        <p :style="getFontSize">我是一个粉刷匠</p>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 12,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          type: 'PlayGround',
          codeText: `<template><p>666</p></template>`,
          childrenSlot: 'p1',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'className',
              desc: '附加的样式',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'min',
              desc: '最小值',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'max',
              desc: '最大值',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'step',
              desc: '步进',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'onChange',
              desc: '数值改变',
              type: 'Function',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    getFontSize() {
      return `font-size:${this.fontSize}px;`;
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    onChange(size) {
      this.fontSize = size;
    },
  },
};
</script>
