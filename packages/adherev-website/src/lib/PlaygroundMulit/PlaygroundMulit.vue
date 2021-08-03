<template>
  <div :class="selectPrefix">
    <a-card>
      <template slot="actions" class="ant-card-actions">
        <div @click="onCopy">
          <a-icon type="copy" />
        </div>
        <div @click="onExpand">
          <a-icon type="up-square" v-if="expand" />
          <a-icon type="down-square" v-else />
        </div>
      </template>
      <slot></slot>
    </a-card>
    <a-card v-if="expand">
      <div v-for="c in config" :class="`${selectPrefix}-codeviewwrap`">
        <div :class="`${selectPrefix}-codeviewwrap-title`">{{ c.title }}</div>
        <div :class="`${selectPrefix}-codeviewwrap-inner`">
          <highlight-code :lang="c.lang || 'vue'">
            {{ c.codeText }}
          </highlight-code>
        </div>
      </div>
    </a-card>
  </div>
</template>
<script>
import { message } from 'ant-design-vue'
import copy from 'copy-to-clipboard';

export default {
  name: 'playground-mulit',
  props: {
    defaultExpand: {
      type: Boolean,
      default: false,
    },
    config: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      expand: this.defaultExpand,
    };
  },
  computed: {
    selectPrefix() {
      return 'adherev-website-playground-mulit';
    },
  },
  methods: {
    onCopy() {
      const { config } = this;
      copy(config.map((c) => c.codeText).join('\r\n'));
      message.success('复制成功');
    },
    onExpand() {
      this.expand = !this.expand;
    },
  },
};
</script>
<style>
.adherev-website-playground-mulit > .ant-card > .ant-card-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.adherev-website-playground-mulit > .ant-card > .ant-card-actions > li {
  float: none;
  width: auto !important;
}

.adherev-website-playground-mulit-codeviewwrap {
  margin-bottom: 20px;
}

.adherev-website-playground-mulit-codeviewwrap
  > .adherev-website-playground-mulit-codeviewwrap-title {
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
}
</style>
