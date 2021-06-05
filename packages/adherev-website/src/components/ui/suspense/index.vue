<template>
  <div class="Page">
    <h1>Suspense</h1>
    <p>
      数据加载单元(如第一次是骷髅骨架，其他是loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是loading
    </p>
    <p>
      此组件是一个父类，使用的时候需要写一个子类，人后重写fetchData、renderInner和showLoading三个方法，所以只能使用class的方式，不能使用hooks
    </p>

    <h2>属性</h2>
    <props
      :data="[
        {
          params: 'reset',
          desc: '是否重置',
          type: 'boolean',
          defaultVal: 'false',
        },
        {
          params: 'firstLoading',
          desc: '自定义firstLoading',
          type: 'React.ReactElement | null',
          defaultVal: 'null',
        },
      ]"
    />

    <h2>重写的方法</h2>
    <function-props
      :data="[
        {
          name: 'fetchData',
          desc: '加载数据',
          modifier: 'public',
          params: [],
          returnType: 'void',
          returnDesc: '',
        },
        {
          name: 'renderInner',
          desc: '渲染的UI',
          modifier: 'public',
          params: [],
          returnType: 'React.ReactElement',
          returnDesc: '',
        },
        {
          name: 'showLoading',
          desc: '是否显示遮罩',
          modifier: 'public',
          params: [],
          returnType: 'boolean',
          returnDesc: '',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground-mulit :config="code1">
      <a-button type="primary" @click="onCode1F1">重置</a-button>
      <suspense-table :reset="reset" />
    </playground-mulit>

    <h2>自定义firstLoading的UI</h2>
    <playground :codeText="code2">
      <a-button type="primary" @click="onCode2F1">重置</a-button>
      <suspense-table :reset="reser1">
        <template v-slot:firstLoading>
          <div style="position: relative">
            <adv-spin :spinning="true" />
          </div>
        </template>
      </suspense-table>
    </playground>
  </div>
</template>
<script>
import Table from './table';

export default {
  data() {
    return {
      code1:[
        {
          title:`table.tsx`,
          codeText:`
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
                renderInner(
                  // @ts-ignore
                  h,
                ) {
                  // 使用JSX实现
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
                      name: "人" + (index + 1),
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
                      `,
          lang: 'javascript'
        },
        {
          title:`index.vue`,
          codeText:`
            <template>
              <h2>基本使用</h2>
                <a-button type="primary" @click="onCode1F1">重置</a-button>
                <suspense-table :reset="reset" />
            </template>
            <script>
              export default {
                data() {
                  return {
                    reset: false,
                  }
                },
                methods: {
                  onCode1F1() {
                    this.reset = true;
                  },
                }
              }
            <\/script>
          `,
          lang: 'vue',
        }
      ],
      code2:`
        <template>
          <h2>自定义firstLoading的UI</h2>
            <a-button type="primary" @click="onCode2F1">重置</a-button>
            <suspense-table :reset="reser1">
              <template v-slot:firstLoading>
                <div style="position: relative">
                  <adv-spin :spinning="true" />
                </div>
              </template>
            </suspense-table>
        </template>
        <script>
          export default {
            data() {
              return {
                reser1: false,
              }
            },
            methods: {
              onCode2F1() {
                this.reser1 = true;
              },
            },
          }
        <\/script>
      `,
      reset: false,
      reser1: false,
    };
  },
  components: {
    'suspense-table': Table,
  },
  methods: {
    onCode1F1() {
      this.reset = true;
    },
    onCode2F1() {
      this.reser1 = true;
    },
  },
};
</script>
