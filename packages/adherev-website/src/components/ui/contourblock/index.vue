<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="ContourBlock">
      <p>宽度和高度相等的元素</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="width: 200px; height: 300px">
          <adv-contourblock style="border: 1px solid #ccc" />
        </div>
      </template>

      <template #p2>
        <div style="display: flex; flex-wrap: wrap">
          <adv-contourblock
            v-for="(item, index) in Array.from({ length: 30 })"
            :key="index"
            style="width: 25%"
          >
            <img src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="" />
          </adv-contourblock>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  displayName: 'contourblock',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          codeText: `
        <template>
          <div style="width: 200px; height: 300px">
            <adv-contourblock style="border: 1px solid #ccc" />
          </div>
        </template>

        <script>
          export default {
             data() {
               return {

               }
             },
             methods: {

             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '画廊',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '画廊',
              info: '画廊',
            },
          },
          codeText: `
        <template>
          <div style="display: flex; flex-wrap: wrap">
            <adv-contourblock
              v-for="(item, index) in Array.from({ length: 30 })"
              :key="index"
              style="width: 25%"
            >
              <img src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF" alt="" />
            </adv-contourblock>
          </div>
        </template>

        <script>
          export default {
             data() {
               return {

               }
             },
             methods: {

             }
          }
        <\/script>
          `,
          childrenSlot: 'p2',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [],
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
