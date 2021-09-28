<!--
<template>
  <a-table :columns="columns" :data-source="data" :pagination="false" size="small">
    <a-table
      v-if="val.length !== 0"
      slot="params"
      slot-scope="val, record"
      size="small"
      :pagination="false"
      :columns="paramsColumns"
      :data-source="val"
      rowKey="id"
    >
    </a-table>
  </a-table>
</template>
<script>
export default {
  name: 'function-props',
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
          title: '函数名称',
          key: 'name',
          dataIndex: 'name',
        },
        {
          title: '函数描述',
          key: 'desc',
          dataIndex: 'desc',
        },
        {
          title: '函数修饰符',
          key: 'modifier',
          dataIndex: 'modifier',
        },
        {
          title: '参数',
          key: 'params',
          dataIndex: 'params',
          scopedSlots: { customRender: 'params' },
        },
        {
          title: '返回值类型',
          key: 'returnType',
          dataIndex: 'returnType',
        },
        {
          title: '返回值说明',
          key: 'returnDesc',
          dataIndex: 'returnDesc',
        },
      ];
    },
    paramsColumns() {
      return [
        {
          title: '参数名称',
          key: 'name',
          dataIndex: 'name',
        },
        {
          title: '参数说明',
          key: 'desc',
          dataIndex: 'desc',
        },
        {
          title: '参数类型',
          key: 'type',
          dataIndex: 'type',
        },
        {
          title: '默认值',
          key: 'defaultVal',
          dataIndex: 'defaultVal',
        },
        {
          title: '是否必填',
          key: 'required',
          dataIndex: 'required',
        },
      ];
    },
  },
};
</script>
-->
<template>
  <adv-playground-functionprops :data="data" />
</template>
<script>
export default {
  name: 'function-props',
  props: {
    data: {
      type: Array,
      require: true,
      default: [],
    },
  },
};
</script>
