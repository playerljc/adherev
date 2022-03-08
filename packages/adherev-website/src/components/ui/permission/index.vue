<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Permission">
      <p>权限的组件</p>
      <ul>
        <li>- 设置所有权限</li>
        <li>- 传入权限(支持多个)</li>
        <li>- 可以自定义无权限的 UI</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-card>
          <template #actions class="ant-card-actions">
            <a-button type="primary" @click="onSetAllPermission">设置所有权限</a-button>
            <a-button @click="onSetCurPermission">设置当前权限</a-button>
          </template>

          <adv-permission :permissions="curPermission" :all-permission="allPermission">
            <Button>有权限才能看到这个按钮</Button>
            <template #noMatch>
              <a-empty />
            </template>
          </adv-permission>
        </a-card>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import { Button } from 'ant-design-vue';
import { Permission, MessageDialog } from '@baifendian/adherev';

const { setPermission, getPermission } = Permission;

// 所有权限是1
setPermission(['1']);

export default {
  data() {
    return {
      // 所有权限是[1]
      allPermission: getPermission(),
      // 当前权限是[2]
      curPermission: ['2'],
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
          <a-card>
            <template slot="actions" class="ant-card-actions">
              <a-button type="primary" @click="onSetAllPermission">设置所有权限</a-button>
              <a-button @click="onSetCurPermission">设置当前权限</a-button>
            </template>

            <adv-permission :permissions="curPermission" :allPermission="allPermission">
              <Button>有权限才能看到这个按钮</Button>
              <template v-slot:noMatch>
                <a-empty />
              </template>
            </adv-permission>
          </a-card>
        </template>
        <script>
          import { Permission, MessageDialog } from '@baifendian/adherev';

          const { setPermission, getPermission } = Permission;

          // 所有权限是1
          setPermission(['1']);

          export default {
            data() {
              return {
                // 所有权限是[1]
                allPermission: getPermission(),
                // 当前权限是[2]
                curPermission: ['2'],
              }
            },
            methods: {
              /**
               * onSetAllPermission 设置所有的权限
               * @return {{permission}}
               */
              onSetAllPermission() {
                const { el, vm } = MessageDialog.Modal({
                  config: {
                    title: '设置所有权限',
                    width: 200,
                    footer: (h) => [
                      <Button
                        type="primary"
                        onClick={() => {
                          const val = vm.$refs.formRef.allPermission.trim();
                          if (val) {
                            this.allPermission = val.split(',');
                          }
                          MessageDialog.close(el);
                        }}
                      >
                        确定
                      </Button>,
                    ],
                  },
                  children: {
                    template: \`
                      <div>
                        <input :autoFocus="true" v-model="allPermission" />
                      </div>
                    \`,
                    data() {
                      return {
                        allPermission: getPermission(),
                      };
                    },
                  },
                });
              },
              /**
               * onSetCurPermission - 设置当前权限
               * @return {{permission: string}}
               */
              onSetCurPermission() {
                const curPermission = this.curPermission;

                const { el, vm } = MessageDialog.Modal({
                  config: {
                    title: '设置当前权限',
                    width: 200,
                    footer: (h) => [
                      <Button
                        type="primary"
                        onClick={() => {
                          const val = vm.$refs.formRef.curPermission.trim();
                          if (val) {
                            this.curPermission = val.split(',');
                          }
                          MessageDialog.close(el);
                        }}
                      >
                        确定
                      </Button>,
                    ],
                  },
                  children: {
                    template: \`
                      <div>
                        <input :autoFocus="true" v-model="curPermission" />
                      </div>
                    \`,
                    data() {
                      return {
                        curPermission: curPermission.join(','),
                      };
                    },
                  },
                });
              },
            },
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: 'setPermission',
          data: [
            {
              name: 'setPermission',
              desc: '设置所有的权限',
              modifier: 'static',
              params: [
                {
                  name: 'permission',
                  desc: '所有的权限',
                  type: 'Array<String>',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'getPermission',
          data: [
            {
              name: 'getPermission',
              desc: '获取所有的权限',
              modifier: 'static',
              params: [],
              returnType: 'Array<String>',
              returnDesc: '返回所有权限的数组',
            },
          ],
        },
        {
          border: true,
          title: 'checkPermission',
          data: [
            {
              name: 'checkPermission',
              desc: '监测是否有指定的权限',
              modifier: 'static',
              params: [
                {
                  name: 'allPermission',
                  desc: '所有的权限',
                  type: 'Array<String>',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'currentPermissions',
                  desc: '监测的权限',
                  type: 'Array<String>',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'boolean',
              returnDesc: '是否存在指定的权限',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'Permission',
          data: [
            {
              params: 'allPermission',
              desc: '所有的权限',
              type: 'Array<String>',
              defaultVal: 'undefined',
            },
            {
              params: 'permissions',
              desc: '校验的权限',
              type: 'Array<String>',
              defaultVal: '',
            },
            {
              params: 'children',
              desc: '有权限时显示的内容',
              type: 'VNode | null',
              defaultVal: '',
            },
            {
              params: 'noMatch',
              desc: '没有权限时显示的内容',
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
    /**
     * onSetAllPermission 设置所有的权限
     * @return {{permission}}
     */
    onSetAllPermission() {
      const { el, vm, rootRef } = MessageDialog.Modal({
        config: {
          title: '设置所有权限',
          width: 200,
          footer: () => [
            <Button
              type="primary"
              onClick={() => {
                const val = rootRef.value.allPermission.toString().trim(); // vm.$refs.formRef.allPermission.trim();

                if (val) {
                  this.allPermission = val.split(',');
                }
                MessageDialog.close(el);
              }}
            >
              确定
            </Button>,
          ],
        },
        children: {
          template: `
            <div>
              <input :autoFocus="true" v-model="allPermission" />
            </div>
          `,
          data() {
            return {
              allPermission: getPermission(),
            };
          },
        },
      });
    },
    /**
     * onSetCurPermission - 设置当前权限
     * @return {{permission: string}}
     */
    onSetCurPermission() {
      const { curPermission } = this;

      const { el, vm, rootRef } = MessageDialog.Modal({
        config: {
          title: '设置当前权限',
          width: 200,
          footer: () => [
            <Button
              type="primary"
              onClick={() => {
                const val = rootRef.value.curPermission.trim(); // vm.$refs.formRef.curPermission.trim();
                if (val) {
                  this.curPermission = val.split(',');
                }
                MessageDialog.close(el);
              }}
            >
              确定
            </Button>,
          ],
        },
        children: {
          template: `
            <div>
              <input :autoFocus="true" v-model="curPermission" />
            </div>
          `,
          data() {
            return {
              curPermission: curPermission.join(','),
            };
          },
        },
      });
    },
  },
};
</script>
