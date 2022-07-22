<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="NotNull">
      <h1>一个永远都不为空的操作</h1>
      <p>一般都挂载到接口的返回值上，以免有空值对后续操作带来不便或者使界面挂掉</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button type="primary" @click="onCode1F1">监控并访问</a-button>
      </template>

      <template #p2>
        <a-button type="primary" @click="onCode2F1">监控并访问</a-button>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
  import { NotNull } from '@baifendian/adherev';

export default {
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '对一个null值进行监控',
          cardProps: {
            description: {
              title: '对一个null值进行监控',
              info: '对一个null值进行监控',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>对一个null值进行监控</h2>
          <a-button type="primary" @click="onCode1F1">监控并访问</a-button>
        </template>
        <script>
          import { NotNull } from '@baifendian/adherev';

          export default {
            methods: {
              onCode1F1() {
                const obj = NotNull(null);
                obj.a = {
                  b: {
                    c: {},
                  },
                };
                console.log(obj);
                console.log(obj.a);
                console.log(obj.a.b);
                console.log(obj.a.b.c);
                console.log(obj.a.b.c.d.e);
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '对一个Array值进行监控',
          cardProps: {
            description: {
              title: '对一个Array值进行监控',
              info: '对一个Array值进行监控',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>对一个Array值进行监控</h2>
          <a-button type="primary" @click="onCode2F1">监控并访问</a-button>
        </template>
        <script>
          import { NotNull } from '@baifendian/adherev';

          export default {
            methods: {
              onCode2F1() {
                const arr = NotNull([]);
                console.log(arr[5].a.b.c);

                arr[5] = {
                  a: {
                    b: {
                      c: {},
                    },
                  },
                };

                console.log(arr[5]);
                console.log(arr.length);
              }
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
              name: 'notnull',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'target',
                  desc: '被监控的对象',
                  type: 'Object | Array',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object | Array',
              returnDesc: '返回被监控的对象',
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
      const obj = NotNull(null);
      obj.a = {
        b: {
          c: {},
        },
      };
      console.log(obj);
      console.log(obj.a);
      console.log(obj.a.b);
      console.log(obj.a.b.c);
      console.log(obj.a.b.c.d.e);
    },
    onCode2F1() {
      const arr = NotNull([]);
      console.log(arr[5].a.b.c);

      arr[5] = {
        a: {
          b: {
            c: {},
          },
        },
      };

      console.log(arr[5]);
      console.log(arr.length);
    },
  },
};
</script>
