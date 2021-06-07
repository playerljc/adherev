<template>
  <div class="Page">
    <h1>AdapterScreen</h1>
    <p>对屏幕的缩放进行适配的操作</p>

    <h2>方法</h2>
    <function-props
      :data="[
        {
          name: 'AdapterScreen',
          desc: '对一个元素进行缩放的管理',
          modifier: 'static',
          params: [
            {
              name: 'el',
              desc: '控制缩放的元素',
              type: 'HtmlElement',
              defaultVal: 'window.document.body',
              required: '',
            },
          ],
          returnType: 'Function',
          returnDesc: '注销事件的方法',
        },
      ]"
    />

    <h2>基本使用</h2>
    <playground :codeText="code1">
      <a-button type="primary" @click="onControlFull">控制整体页面的缩放</a-button>
    </playground>

    <h2>传递不同的元素</h2>
    <playground :codeText="code2">
      <div ref="ref">
        <a-button type="primary" @click="onControlElement">控制表格元素的缩放</a-button>
        <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
          <span slot="tags" slot-scope="tags">
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
          </span>
        </a-table>
      </div>
    </playground>
  </div>
</template>
<script>
import { AdapterScreen } from '@baifendian/adherev';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' },
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default {
  data() {
    return {
      code1: `
        <template>
          <h2>基本使用</h2>
          <a-button type="primary" @click="onControlFull">控制整体页面的缩放</a-button>
        </template>
        <script>
        import { AdapterScreen } from '@baifendian/adherev';

        export default {
          methods: {
            onControlFull() {
              const handler = AdapterScreen();
            },
          }
        }
        <\/script>
      `,
      code2: `
        <template>
          <h2>传递不同的元素</h2>
          <div ref="ref">
              <a-button type="primary" @click="onControlElement">控制表格元素的缩放</a-button>
              <a-table :columns="columns" :data-source="data">
                <a slot="name" slot-scope="text">{{ text }}</a>
                <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                <span slot="tags" slot-scope="tags">
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
                <span slot="action" slot-scope="text, record">
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical" />
                  <a>Delete</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
                </span>
              </a-table>
          </div>
        </template>
        <script>
        import { AdapterScreen } from '@baifendian/adherev';

        const columns = [
          {
            dataIndex: 'name',
            key: 'name',
            slots: { title: 'customTitle' },
            scopedSlots: { customRender: 'name' },
          },
          {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          },
          {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            scopedSlots: { customRender: 'tags' },
          },
          {
            title: 'Action',
            key: 'action',
            scopedSlots: { customRender: 'action' },
          },
        ];

        const data = [
          {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          },
        ];

        export default {
          methods: {
            onControlElement() {
              const handler = AdapterScreen(this.$refs.ref);
            },
          }
        }
        <\/script>
      `,
      data,
      columns,

    }
  },
  methods: {
    onControlFull() {
      const handler = AdapterScreen();
    },
    onControlElement() {
      const handler = AdapterScreen(this.$refs.ref);
    },
  },
};
</script>
