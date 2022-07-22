<template>
  <div class="Page">
    <h1>Domain</h1>
    <h2>Domain的浏览器端实现</h2>

    <function-props
      :border="true"
      :title="'Domain'"
      :data="[
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
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'IDomain'"
      :data="[
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
      ]"
    />

    <h2>基本操作(run方法)</h2>
    <playground :code-text="code1">
      <a-button @click="onCode1F1">运行</a-button>
      <div class="Console" ref="console1Ref"></div>
    </playground>

    <h2>基本操作(bind方法)</h2>
    <playground :code-text="code2">
      <a-button @click="onCode2F1">运行</a-button>
      <div class="Console" ref="console2Ref"></div>
    </playground>
  </div>
</template>

<script>
import { Domain } from '@baifendian/adherev';

export default {
  computed: {
    code1() {
      return `
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
      `;
    },
    code2() {
      return `
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
      `;
    },
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
