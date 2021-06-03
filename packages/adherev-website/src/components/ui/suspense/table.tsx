import { Table } from 'ant-design-vue';
import { Suspense } from '@baifendian/adherev';

export default {
  mixins: [Suspense],
  data() {
    return {
      loading: false,
      dataSource: [],
      pagination: {
        current: 1,
        pageSize: 2,
      },
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
  watch: {
    reset: function (newVal) {
      if (newVal) {
        // @ts-ignore
        this.pagination = {
          current: 1,
          pageSize: 2,
        };

        // @ts-ignore
        this.fetchData();
      }
    },
  },
  methods: {
    handleTableChange(pagination) {
      // @ts-ignore
      this.pagination = pagination;
      this.fetchData();
    },
    renderInner(h) {
      return (
        <div style="position: relative;">
          <Table
            // @ts-ignore
            columns={this.columns}
            // @ts-ignore
            data-source={this.dataSource}
            loading={this.showLoading()}
            // @ts-ignore
            pagination={this.pagination}
            onChange={this.handleTableChange}
          />
        </div>
      );
    },
    showLoading() {
      // @ts-ignore
      return this.loading;
    },
    fetchData() {
      const list = [];
      list.length = 10;
      list.fill(0);

      // @ts-ignore
      this.loading = true;

      setTimeout(() => {
        // @ts-ignore
        this.dataSource = list.map((t, index) => ({
          id: index + 1,
          name: `人${index + 1}`,
          sex: '男',
          age: 66,
          height: 180,
          width: 180,
        }));

        setTimeout(() => {
          // @ts-ignore
          this.loading = false;
        }, 200);
      }, 2000);
    },
  },
};
