<template>
  <div class="Page">
    <h1>Mixins-混入</h1>
    <p>提供一些全局和局部的混入功能</p>

    <h2>updatedEx</h2>
    <p>提供pre参数的updated的hook</p>
    <p>updated生命周期函数没有提供data和props的pre参数</p>

    <playground-mulit :defaultConfig="code1">
      <Person @display="onDisplay" />
      <div v-html="display" :class="$style.console" ref="ref1" />
    </playground-mulit>
  </div>
</template>

<script>
import Person from './person';

export default {
  components: { Person },
  data() {
    return {
      display: '',
    };
  },
  computed: {
    code1() {
      return [
        {
          type: 'CodePanel',
          title: 'index.vue',
          codeText: `
            <template>
              <Person @display="onDisplay" />
              <div v-html="display" :class="$style.console" ref="ref1" />
            </template>

            <script>
              import Person from './person';

              export default {
                components: { Person },
                data() {
                  return {
                    display: '',
                  };
                },
                methods: {
                  onDisplay({ pre, cur }) {
                    this.display = \`\${this.display}</br>pre:\${JSON.stringify(pre)}</br>cur:\${JSON.stringify(cur,)}\`;

                    this.$nextTick(function () {
                      this.$refs.ref1.scrollTop = this.$refs.ref1.scrollHeight - this.$refs.ref1.offsetHeight;
                    });
                  },
                },
              }
            <\/script>
					`,
        },
        {
          type: 'CodePanel',
          title: 'person.vue',
          codeText: `
          	<template>
              <div @click="onClick" :class="$style.Wrap">
                <div>点击改变数据</div>
                <div>{{ name }}</div>
                <div>{{ sex }}</div>
              </div>
            </template>

            <script>
            import { Mixins } from '@baifendian/adherev';

            const { updatedEx } = Mixins;

            let index = 0;

            export default {
              mixins: [updatedEx],
              data() {
                return {
                  name: 'lzq',
                  sex: '男',
                };
              },
              updatedEx(pre) {
                // 参数为pre
                console.log('pre', pre);
                const { $preProps, ...other } = this.$data;
                console.log('current', other);
                this.$emit('display', { pre, cur: other });
              },
              methods: {
                onClick() {
                  index++;
                  this.name = \`lzq\${index}\`;
                  this.sex = \`sex\${index}\`;
                },
              },
            };
            <\/script>

            <style lang="less" module>
              .Wrap {
                &:hover {
                  cursor: pointer;
                }
              }
            </style>
`,
        },
      ];
    },
  },
  methods: {
    onDisplay({ pre, cur }) {
      this.display = `${this.display}</br>pre:${JSON.stringify(pre)}</br>cur:${JSON.stringify(
        cur,
      )}`;
      this.$nextTick(function () {
        this.$refs.ref1.scrollTop = this.$refs.ref1.scrollHeight - this.$refs.ref1.offsetHeight;
      });
    },
  },
};
</script>

<style lang="less" module>
.console {
  height: 200px;
  margin-top: 10px;
  padding: 0 10px 10px 10px;
  overflow-y: auto;
  color: red;
  border: 1px solid #ccc;
}
</style>
