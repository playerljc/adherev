<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Spin">
      <p>无侵入的loading</p>
      <p>放入含有position:relative的元素中则遮罩这个元素，否则遮罩body</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div>
          <div style="position: relative; width: 200px; height: 200px; word-break: break-all">
            In the process of internal desktop applications development, many different design specs
            and implementations would be involved, which might cause designers and developers
            difficulties and duplication and reduce the efficiency of development.
            <adv-spin text="处理中..." :spinning="show" />
          </div>
          <div>
            <a-button type="primary" @click="show = true"> 显示 </a-button>
            <a-button @click="show = false"> 取消 </a-button>
          </div>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  displayName: 'space',
  data() {
    return {
      show: false,
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
          codeText: `
        <template>
          <div>
            <div style="position: relative; width: 200px; height: 200px; word-break: break-all">
              In the process of internal desktop applications development, many different design specs
              and implementations would be involved, which might cause designers and developers
              difficulties and duplication and reduce the efficiency of development.
              <adv-spin text="处理中..." :spinning="show" />
            </div>
            <div>
              <a-button type="primary" @click="show = true"> 显示 </a-button>
              <a-button @click="show = false"> 取消 </a-button>
            </div>
          </div>
        </template>
        <script>
        export default {
          data() {
            return {
              show: false,
            }
          }
        }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              params: 'spinning',
              desc: '是否显示这招',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'text',
              desc: '显示的文本',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'zIndex',
              desc: '遮罩的层级',
              type: 'number',
              defaultVal: '19999',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
