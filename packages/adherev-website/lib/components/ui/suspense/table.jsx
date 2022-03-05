import { Table } from 'ant-design-vue';
import { Suspense } from '@baifendian/adherev';
/**
 * table - 使用渲染函数 + JSX实现
 */
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
        reset(newVal) {
            if (newVal) {
                this.pagination = {
                    current: 1,
                    pageSize: 2,
                };
                this.fetchData();
            }
        },
    },
    methods: {
        handleTableChange(pagination) {
            this.pagination = pagination;
            this.fetchData();
        },
        renderInner(h) {
            // 使用JSX实现
            return (<div style="position: relative;">
          <Table columns={this.columns} data-source={this.dataSource} loading={this.showLoading()} pagination={this.pagination} onChange={this.handleTableChange}/>
        </div>);
        },
        showLoading() {
            return this.loading;
        },
        fetchData() {
            const list = [];
            list.length = 10;
            list.fill(0);
            this.loading = true;
            setTimeout(() => {
                this.dataSource = list.map((t, index) => ({
                    id: index + 1,
                    name: `人${index + 1}`,
                    sex: '男',
                    age: 66,
                    height: 180,
                    width: 180,
                }));
                setTimeout(() => {
                    this.loading = false;
                }, 200);
            }, 2000);
        },
    },
};
