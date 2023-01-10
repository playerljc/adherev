<script>
import { Intl } from '@baifendian/adherev'

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
      return this.title || 'warning'
    },
    targetSubTitle() {
      return this.subTitle || Intl.tv('请求超时')
    },
  },
  methods: {
    refresh() {
      typeof window !== 'undefined' && window.location.reload()
    },
  },
}
</script>

<template>
  <a-result status="warning" :title="targetTitle" :sub-title="targetSubTitle">
    <template #extra>
      <slot>
        <a-button type="primary" @click="refresh">
          {{ $tv('刷新') }}}
        </a-button>
      </slot>
    </template>
  </a-result>
</template>
