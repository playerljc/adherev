<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Domain">
      <h2>Domain的浏览器端实现</h2>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <fragment>
          <a-button type="primary" @click="onCode1F1">运行</a-button>
          <div class="Console" ref="console1Ref"></div>
        </fragment>
      </template>

      <template #p2>
        <fragment>
          <a-button type="primary" @click="onCode2F1">运行</a-button>
          <div class="Console" ref="console2Ref"></div>
        </fragment>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import { Domain } from '@baifendian/adherev';

export default {
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本操作(run方法)',
          cardProps: {
            description: {
              title: '基本操作(run方法)',
              info: '基本操作(run方法)',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <a-button @click="onCode1F1">运行</a-button>
          <div class="Console" ref="console1Ref"></div>
        </template>

        <script>
          import { Domain } from '@baifendian/adherev';

          export default {
            methods: {
              onCode1F1() {
                const d = Domain.create();

                d.on('error', (e) => {
                  const content = this.$refs.console1Ref.innerHTML;
                  this.$refs.console1Ref.innerHTML = \`\${content}\${content ? '</br>' : ''}\${e.toString()}\`;
                  this.$refs.console1Ref.scrollTop =
                    this.$refs.console1Ref.scrollHeight - this.$refs.console1Ref.offsetHeight;
                });

                d.run(() => {
                  noexists();
                });
              }
            }
          }
        <\/script>

        <style scoped>
          .Console {
            height: 200px;
            margin-top: 20px;
            overflow-y: auto;
            color: red;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
        </style>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '基本操作(bind方法)',
          cardProps: {
            description: {
              title: '基本操作(bind方法)',
              info: '基本操作(bind方法)',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <a-button @click="onCode2F1">运行</a-button>
          <div class="Console" ref="console2Ref"></div>
        </template>

        <script>
          import { Domain } from '@baifendian/adherev';

          export default {
            methods: {
              onCode2F1() {
                const d = Domain.create();

                d.on('error', (e) => {
                  const content = this.$refs.console2Ref.innerHTML;
                  this.$refs.console2Ref.innerHTML = \`\${content}\${content ? '</br>' : ''}\${e.toString()}\`;
                  this.$refs.console2Ref.scrollTop =
                    this.$refs.console2Ref.scrollHeight - this.$refs.console2Ref.offsetHeight;
                });

                function run() {
                  return new Promise(
                    d.bind((resolve) => {
                      noexists();
                      resolve();
                    }),
                  );
                }

                run();
              }
            }
          }
        <\/script>

        <style scoped>
          .Console {
            height: 200px;
            margin-top: 20px;
            overflow-y: auto;
            color: red;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
        </style>
      `,
          childrenSlot: 'p2',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: 'Domain',
          data: [
            {
              name: 'createDomain',
              desc: '创建Domain对象',
              modifier: 'public',
              params: [],
              returnType: 'IDomain',
              returnDesc: '',
            },
            {
              name: 'create',
              desc: '创建Domain对象',
              modifier: 'public',
              params: [],
              returnType: 'IDomain',
              returnDesc: '',
            },
          ],
        },
        {
          border: true,
          title: 'IDomain',
          data: [
            {
              name: 'add',
              desc: 'add',
              modifier: 'public',
              params: [
                {
                  name: 'emitter',
                  desc: '',
                  type: 'EventEmitter',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'bind',
              desc: 'bind',
              modifier: 'public',
              params: [
                {
                  name: 'fn',
                  desc: '',
                  type: 'Function',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Function',
              returnDesc: '',
            },
            {
              name: 'dispose',
              desc: 'dispose',
              modifier: 'public',
              params: [],
              returnType: 'IDomain',
              returnDesc: '',
            },
            {
              name: 'enter',
              desc: 'enter',
              modifier: 'public',
              params: [],
              returnType: 'IDomain',
              returnDesc: '',
            },
            {
              name: 'exit',
              desc: 'exit',
              modifier: 'public',
              params: [],
              returnType: 'IDomain',
              returnDesc: '',
            },
            {
              name: 'intercept',
              desc: 'intercept',
              modifier: 'public',
              params: [
                {
                  name: 'fn',
                  desc: '',
                  type: 'Function',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'Function',
              returnDesc: '',
            },
            {
              name: 'remove',
              desc: 'remove',
              modifier: 'public',
              params: [
                {
                  name: 'emitter',
                  desc: '',
                  type: 'EventEmitter',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'run',
              desc: 'run',
              modifier: 'public',
              params: [
                {
                  name: 'fn',
                  desc: '',
                  type: 'Function',
                  defaultVal: '',
                  required: '',
                },
              ],
              returnType: 'IDomain',
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
      const d = Domain.create();

      d.on('error', (e) => {
        const content = this.$refs.console1Ref.innerHTML;
        this.$refs.console1Ref.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;
        this.$refs.console1Ref.scrollTop =
          this.$refs.console1Ref.scrollHeight - this.$refs.console1Ref.offsetHeight;
      });

      d.run(() => {
        noexists();
      });
    },
    onCode2F1() {
      const d = Domain.create();

      d.on('error', (e) => {
        const content = this.$refs.console2Ref.innerHTML;
        this.$refs.console2Ref.innerHTML = `${content}${content ? `</br>` : ''}${e.toString()}`;
        this.$refs.console2Ref.scrollTop =
          this.$refs.console2Ref.scrollHeight - this.$refs.console2Ref.offsetHeight;
      });

      function run() {
        return new Promise(
          d.bind((resolve) => {
            noexists();
            resolve();
          }),
        );
      }

      run();
    },
  },
};
</script>

<style scoped>
.Console {
  height: 200px;
  margin-top: 20px;
  overflow-y: auto;
  color: red;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
