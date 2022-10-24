<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="ImportantConfirm">
      <p>重要操作确认提示(使用的是antd的Modal)</p>
      <p>重要操作确认提示，确认后在执行操作</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-importantconfirm :success="onSuccess">
          <a>删除</a>
        </adv-importantconfirm>
      </template>

      <template #p2>
        <a @click="onDelete">删除</a>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import { ImportantConfirm } from '@baifendian/adherev';

export default {
  displayName: 'importantconfirm',
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
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Confirm.open',
          cardProps: {
            description: {
              title: 'Confirm.open',
              info: 'Confirm.open',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p2',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
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
                  name: 'title',
                  desc: '标题',
                  type: 'string',
                  defaultVal: '',
                  required: 'false',
                },
                {
                  name: 'text',
                  desc: '文本',
                  type: 'string',
                  defaultVal: '',
                  required: 'false',
                },
                {
                  name: 'icon',
                  desc: '图标',
                  type: 'string',
                  defaultVal: '',
                  required: 'false',
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
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
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
              name: 'title',
              desc: '标题',
              type: 'string',
              defaultVal: '',
            },
            {
              name: 'text',
              desc: '文本',
              type: 'string',
              defaultVal: '',
            },
            {
              name: 'icon',
              desc: '图标',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'children',
              desc: '子组件',
              type: 'VNode',
              defaultVal: 'null',
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
