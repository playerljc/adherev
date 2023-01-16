<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="BackTopAnimation">
      <p></p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1> </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
      data,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '列表中使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '列表中使用',
              info: '可以动画的回到列表的顶端',
            },
          },
          codeText: `
          `,
          childrenSlot: 'p1',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
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
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
