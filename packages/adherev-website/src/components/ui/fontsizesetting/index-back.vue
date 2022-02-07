<template>
  <div class="Page">
    <h1>FontSizeSetting</h1>
    <p>字体设置</p>

    <props
      :border="true"
      :title="'属性'"
      :data="[
        {
          params: 'className',
          desc: '附加的样式',
          type: 'string',
          defaultVal: '',
        },
        {
          params: 'min',
          desc: '最小值',
          type: 'number',
          defaultVal: '',
        },
        {
          params: 'max',
          desc: '最大值',
          type: 'number',
          defaultVal: '',
        },
        {
          params: 'step',
          desc: '步进',
          type: 'number',
          defaultVal: '',
        },
        {
          params: 'onChange',
          desc: '数值改变',
          type: 'Function',
          defaultVal: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <adv-fontsizesetting :min="12" :max="40" :step="1" @change="onChange" />

      <adv-space />

      <p :style="getFontSize">我是一个粉刷匠</p>
    </playground>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 12,
    };
  },
  computed: {
    getFontSize() {
      return `font-size:${this.fontSize}px;`;
    },
    code1() {
      return `
        <template>
          <h2>基本使用</h2>
          <adv-fontsizesetting :min="12" :max="40" :step="1" @change="onChange" />

          <adv-space />

          <p :style="getFontSize">我是一个粉刷匠</p>
        </template>

        <script>
          export default {
            data() {
              return {
                fontSize: 12,
              };
            },
            computed:{
              getFontSize() {
                return \`font-size:${this.fontSize}px;\`;
              }
            },
            methods: {
              onChange(size) {
                this.fontSize = size;
              }
            }
          }
        <\/script>
      `;
    },
  },
  methods: {
    onChange(size) {
      this.fontSize = size;
    },
  },
};
</script>
