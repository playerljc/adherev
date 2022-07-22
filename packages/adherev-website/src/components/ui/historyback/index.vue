<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="历史记录返回操作">
      <p>如果历史栈中没有记录则返回主页，或者可以自定义 - 如果可以返回则进行返回</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig" />

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
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
          defaultExpand: true,
          type: 'PlayGround',
          codeText: `
        <template>
          <a-button type="primary" @click="onBack">回退</a-button>
        </template>
        <script>
          import { HistoryBack } from '@baifendianv/adhere';

          export default {
            methods:{
              onBack() {
                HistoryBack(this.$router, '/');
              }
            }
          }
        <\/script>
      `,
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: '默认导出方法',
              desc: '处理返回的操作',
              modifier: 'public',
              params: [
                {
                  name: 'history',
                  desc: '路由的history对象',
                  type: 'History',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'routePath',
                  desc: 'length为0的时候跳转的路径',
                  type: 'string',
                  defaultVal: '/',
                  required: 'false',
                },
              ],
              returnType: 'void',
              returnDesc: '',
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
