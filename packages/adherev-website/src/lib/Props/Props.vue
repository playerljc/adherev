<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" size="small" rowKey="params">
  </a-table>
</template>
<script>
export default {
  name: 'props',
  props: {
    data: {
      type: Array,
      require: true,
      default: [],
    },
  },
  computed: {
    columns() {
      return [
        {
          title: '参数',
          key: 'params',
          dataIndex: 'params',
        },
        {
          title: '描述',
          key: 'desc',
          dataIndex: 'desc',
        },
        {
          title: '类型',
          key: 'type',
          dataIndex: 'type',
        },
        {
          title: '默认值',
          key: 'defaultVal',
          dataIndex: 'defaultVal',
        },
      ];
    },
  },
};
</script>
