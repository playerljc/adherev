<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="SuccessPrompt">
      <p>成功的提示(就是为了全局统一)</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button type="primary" @click="onCode1F1">显示成功提示</a-button>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import { SuccessPrompt } from '@baifendian/adherev';

export default {
  displayName: 'successprompt',
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
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>基本使用</h2>
          <a-button type="primary" @click="onCode1F1">显示成功提示</a-button>
        </template>
        <script>
          import { SuccessPrompt } from '@baifendian/adherev';

          export default {
             methods: {
               onCode1F1() {
                 SuccessPrompt('操作成功');
               }
             }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'SuccessPrompt',
              desc: '成功的提示',
              modifier: 'global',
              params: [
                {
                  name: 'text',
                  desc: '提示的文本',
                  type: 'string | VNode | (h) => VNode',
                  defaultVal: '',
                  required: 'true',
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
  methods: {
    onCode1F1() {
      SuccessPrompt.openSuccessMessage('操作成功');
    },
  },
};
</script>
