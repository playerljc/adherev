<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Mixins-混入">
      <p>提供一些全局和局部的混入功能</p>
      <ul>
        <li>
          <h2>updatedEx</h2>
          <p>提供pre参数的updated的hook</p>
          <p>updated生命周期函数没有提供data和props的pre参数</p>
        </li>
        <li>
          <h2>watchEffect</h2>
          <p>任意props或dada发生改变后触发</p>
        </li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <fragment>
          <Person @display="onDisplay" />
          <div v-html="display" :class="$style.console" ref="ref1" />
        </fragment>
      </template>

      <template #p2>
        <WatchEffect />
      </template>
    </adv-playground-page-code-box-section>
  </adv-playground-page>
</template>

<script>
import Person from './person';
import WatchEffect from './watchEffect';

export default {
  components: { Person, WatchEffect },
  data() {
    return {
      display: '',
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'updatedEx',
          cardProps: {
            description: {
              title: 'updatedEx',
              info: 'updatedEx',
            },
          },
          type: 'PlayGroundTab',
          active: 'index.vue',
          config: [
            {
              title: 'index.vue',
              key: 'index.vue',
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
              title: 'person.vue',
              key: 'person.vue',
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
          ],
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'watchEffect',
          cardProps: {
            description: {
              title: 'watchEffect',
              info: 'watchEffect',
            },
          },
          type: 'PlayGroundTab',
          active: 'index.vue',
          config: [
            {
              title: 'index.vue',
              key: 'index.vue',
              codeText: `
  <template>
    <div>
      <div><button @click="value1 = value1 + 1">addValue1</button></div>
      <div><button @click="value2 = value2 + 1">addValue2</button></div>
      <Sub :value1="value1" :value2="value2" />
    </div>
  </template>

  <script>
  import Sub from './sub';

  export default {
    data() {
      return {
        value1: 0,
        value2: 0,
      };
    },
    components: {
      Sub: Sub,
    },
  };
  <\/script>
`,
            },
            {
              title: 'sub.vue',
              key: 'sub.vue',
              codeText: `
  <template>
    <div>
      <div><button @click="value3 = value3 + 1">addValue3</button></div>
      <div>{{ value1 }}</div>
      <div>{{ value2 }}</div>
    </div>
  </template>

  <script>
  import { Mixins } from '@baifendian/adherev';

  export default {
    props: ['value1', 'value2'],
    mixins: [Mixins.watchEffect],
    data() {
      return {
        value3: '',
      };
    },
    watchEffect({ attr, newVal, oldVal }) {
      console.log('value3', this.value3);
      console.log(attr, newVal, oldVal);
    },
  };
  <\/script>
`,
            },
          ],
          childrenSlot: 'p2',
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
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
