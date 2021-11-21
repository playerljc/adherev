<template>
  <adv-playground-functionprops
    :data="data"
    :headerClassName="headerClassName"
    :headerStyle="headerStyle"
    :bodyClassName="bodyClassName"
    :bodyStyle="bodyStyle"
    :title="title"
    :extra="extra"
    :defaultCollapse="defaultCollapse"
    :border="border"
    :scrollY="scrollY"
    :fixedHeaderScrollBody="fixedHeaderScrollBody"
  />
</template>
<script>
export default {
  name: 'FunctionProps',
  props: {
    headerClassName: {
      type: String,
      default: '',
    },
    headerStyle: {
      type: String,
      default: '',
    },
    bodyClassName: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: String,
      default: '',
    },
    title: {
      type: [String, Object],
      default: '',
    },
    extra: {
      type: Object,
      default: () => null,
    },
    defaultCollapse: {
      type: Boolean,
      default: () => false,
    },
    border: {
      type: Boolean,
      default: () => false,
    },
    scrollY: {
      type: Boolean,
      default: () => false,
    },
    fixedHeaderScrollBody: {
      type: Boolean,
      default: () => false,
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
