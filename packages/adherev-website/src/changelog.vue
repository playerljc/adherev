<template>
  <ScrollFooterPanel>
    <div v-html="changeLog" :class="$style.Wrap" />
  </ScrollFooterPanel>
</template>

<script>
import marked from 'marked';

import ScrollFooterPanel from '@/lib/ScrollFooterPanel';

import changeLog from '../../adherev/changelog/CHANGELOG.md';

export default {
  displayName: 'changelog',
  components: {
    ScrollFooterPanel,
  },
  computed: {
    changeLog() {
      return marked(changeLog, { sanitize: true });
    },
  },
};
</script>

<style lang="less" module>
.Wrap {
  width: 100%;
  padding: 20px;
  > ul {
    padding-left: 20px;
    list-style-type: disc;
    > li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      > ul {
        padding-left: 20px;
        list-style-type: circle;
        > li {
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
}
</style>
