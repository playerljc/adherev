<template>
  <div class="Page">
    <h1>SuccessPrompt</h1>
    <p>成功的提示(就是为了全局统一)</p>

    <h2>方法</h2>
    <function-props
      :data="[
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
      ]"
    />

    <h2>基本使用</h2>
    <playground :code-text="code">
      <a-button type="primary" @click="onCode1F1">显示成功提示</a-button>
    </playground>
  </div>
</template>
<script>
import { SuccessPrompt } from '@baifendian/adherev';

export default {
  data() {
    return {
      code: `
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
    };
  },
  methods: {
    onCode1F1() {
      SuccessPrompt('操作成功');
    },
  },
};
</script>
