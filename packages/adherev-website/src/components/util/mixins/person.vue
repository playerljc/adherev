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
      this.name = `lzq${index}`;
      this.sex = `sex${index}`;
    },
  },
};
</script>

<style lang="less" module>
.Wrap {
  &:hover {
    cursor: pointer;
  }
}
</style>
