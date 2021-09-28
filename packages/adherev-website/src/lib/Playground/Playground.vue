<!--
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
      <highlight-code :lang="lang">
        {{ codeText }}
      </highlight-code>
    </a-card>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';
import copy from 'copy-to-clipboard';

export default {
  name: 'playground',
  props: {
    defaultExpand: {
      type: Boolean,
      default: false,
    },
    codeText: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'vue',
    },
  },
  data() {
    return {
      expand: this.defaultExpand,
    };
  },
  computed: {
    selectPrefix() {
      return 'adherev-website-playground';
    },
  },
  methods: {
    onCopy() {
      copy(this.codeText);
      message.success('复制成功');
    },
    onExpand() {
      this.expand = !this.expand;
    },
  },
};
</script>
<style>
.adherev-website-playground > .ant-card > .ant-card-actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.adherev-website-playground > .ant-card > .ant-card-actions > li {
  float: none;
  width: auto !important;
}
</style>
-->

<template>
  <adv-playground :defaultExpand="defaultExpand" :codeText="codeText" :lang="lang">
    <slot></slot>
  </adv-playground>
</template>
<script>
export default {
  name: 'playground',
  props: {
    defaultExpand: {
      type: Boolean,
      default: false,
    },
    codeText: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'vue',
    },
  },
};
</script>
