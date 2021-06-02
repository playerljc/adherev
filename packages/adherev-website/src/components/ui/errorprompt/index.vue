<template>
  <div class="Page">
    <h1>ErrorPrompt</h1>
    <p>错误的提示(就是为了全局统一)</p>

    <h2>方法</h2>
    <function-props
      :data="[
        {
          name: 'ErrorPrompt',
          desc: '错误的提示',
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
    <playground :codeText="code">
      <a-button type="primary" @click="onCode1F1">显示警告提示</a-button>
    </playground>
  </div>
</template>
<script>
import { ErrorPrompt } from '@baifendian/adherev';

export default {
  data() {
    return {
      code: `
        <template>
          <h2>基本使用</h2>
          <a-button type="primary" @click="onCode1F1">显示警告提示</a-button>
        </template>
        <script>
          import { ErrorPrompt } from '@baifendian/adherev';

          export default {
             methods: {
               onCode1F1() {
                 ErrorPrompt('操作失败');
               }
             }
          }
        <\/script>
      `,
    }
  },
  methods: {
    onCode1F1() {
      ErrorPrompt('操作失败');
    },
  },
};
</script>
