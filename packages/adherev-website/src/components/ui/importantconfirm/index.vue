<template>
  <div class="Page">
    <h1>ImportantConfirm</h1>
    <p>重要操作确认提示(使用的是antd的Modal)</p>
    <p>重要操作确认提示，确认后在执行操作</p>

    <h2>属性</h2>
    <props
      :data="[
        {
          params: 'zIndex',
          desc: '显示的层级',
          type: 'number',
          defaultVal: '19999',
        },
        {
          params: 'className',
          desc: '附加的样式',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'success',
          desc: '确认后的回调，此方法需要返回Promise对象',
          type: 'Function',
          defaultVal: '() => {}',
        },
        {
          params: 'children',
          desc: '子组件',
          type: 'React.ReactElement',
          defaultVal: 'null',
        },
      ]"
    />

    <h2>方法</h2>
    <function-props
      :data="[
        {
          name: 'open',
          desc: '打开确认对话框',
          modifier: 'static',
          params: [
            {
              name: 'success',
              desc: '成功的回调，此方法需要返回Promise对象',
              type: 'Function',
              defaultVal: '() => {}',
              required: 'true',
            },
            {
              name: 'zIndex',
              desc: '显示层级',
              type: 'number',
              defaultVal: '19999',
              required: 'false',
            },
          ],
          returnType: 'void',
          returnDesc: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <adv-importantconfirm :success="onSuccess">
        <a>删除</a>
      </adv-importantconfirm>
    </playground>

    <h2>ImportantConfirm.open</h2>
    <playground :codeText="code2">
      <a @click="onDelete">删除</a>
    </playground>
  </div>
</template>
<script>
import { ImportantConfirm } from '@baifendian/adherev';

export default {
  data() {
    return {
      code1: `
        <template>
          <adv-importantconfirm :success="onSuccess">
            <a>删除</a>
          </adv-importantconfirm>
        </template>
        <script>
          export default {
            methods:{
              onSuccess() {
                return new Promise((resolve) => {
                  alert('onSuccess');

                  resolve();
                });
              },
            }
          }
        <\/script>
      `,
      code2: `
        <template>
          <a @click="onDelete">删除</a>
        </template>
        <script>
          import { ImportantConfirm } from '@baifendian/adherev';

          export default {
            methods:{
              onDelete() {
                ImportantConfirm.open(() => {
                  return new Promise((resolve) => {
                    alert('onDelete');

                    resolve();
                  });
                });
              },
            }
          }
        <\/script>
      `,
    };
  },
  methods: {
    onSuccess() {
      return new Promise((resolve) => {
        alert('onSuccess');

        resolve();
      });
    },
    onDelete() {
      ImportantConfirm.open(() => {
        return new Promise((resolve) => {
          alert('onDelete');

          resolve();
        });
      });
    },
  },
};
</script>
