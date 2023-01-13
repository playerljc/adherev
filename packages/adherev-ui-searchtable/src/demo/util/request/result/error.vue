<script>
import Intl from '@baifendian/adherev-util-intl';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    targetTitle() {
      return this.title || '500';
    },
    targetSubTitle() {
      return this.subTitle || Intl.tv('抱歉，出了一些问题');
    },
  },
  methods: {
    refresh() {
      typeof window !== 'undefined' && window.location.reload();
    },
  },
};
</script>

<template>
  <a-result status="500" :title="targetTitle" :sub-title="targetSubTitle">
    <template #extra>
      <slot>
        <a-button type="primary" @click="refresh"> {{ $tv('刷新') }}} </a-button>
      </slot>
    </template>
  </a-result>
</template>
