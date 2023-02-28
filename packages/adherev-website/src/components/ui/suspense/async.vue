<template>
  <adv-suspense-async ref="ref" :fetchAsyncData="fetchData" :isEmpty="isEmpty">
    <adv-space-group direction="horizontal">
      <a-button type="primary" @click="onReset">重置</a-button>
      <a-button type="primary" @click="onLoad">加载数据</a-button>
    </adv-space-group>

    <a-table :columns="columns" :dataSource="data" :pagination="false" />
  </adv-suspense-async>
</template>

<script>
import faker from 'faker';

export default {
  data() {
    return {
      data: [],
    };
  },
  computed: {
    columns() {
      return [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: '性别',
          key: 'sex',
          dataIndex: 'sex',
        },
        {
          title: '年龄',
          key: 'age',
          dataIndex: 'age',
        },
        {
          title: '身高',
          key: 'height',
          dataIndex: 'height',
        },
        {
          title: '体重',
          key: 'width',
          dataIndex: 'width',
        },
      ];
    },
  },
  methods: {
    fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          const list = [];
          list.length = 10;
          list.fill(0);

          this.data = list.map((t, index) => ({
            id: index + 1,
            name: faker.internet.userName(),
            sex: index % 2 === 0 ? '男' : '女',
            age: faker.random.number(),
            height: faker.random.number(),
            width: faker.random.number(),
          }));

          this.$nextTick(function () {
            resolve();
          });
        }, 1000 * 5);
      });
    },
    isEmpty() {
      return this.data.length === 0;
    },
    onReset() {
      this.$refs.ref.resetAsync().then(() => this.fetchData());
    },
    onLoad() {
      this.$refs.ref.fetchData();
    },
  },
};
</script>
