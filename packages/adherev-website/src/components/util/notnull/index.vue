<template>
  <div class="Page">
    <h1>一个永远都不为空的操作</h1>
    <p>一般都挂载到接口的返回值上，以免有空值对后续操作带来不便或者使界面挂掉</p>

    <function-props
      :border="true"
      :title="'方法'"
      :data="[
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
      ]"
    />

    <h2>对一个null值进行监控</h2>
    <playground :code-text="code1">
      <a-button type="primary" @click="onCode1F1">监控并访问</a-button>
    </playground>

    <h2>对一个Array值进行监控</h2>
    <playground :code-text="code2">
      <a-button type="primary" @click="onCode2F1">监控并访问</a-button>
    </playground>
  </div>
</template>
<script>
import { NotNull } from '@baifendian/adherev';

export default {
  data() {
    return {
      code1: `
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
      code2: `
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
    };
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
