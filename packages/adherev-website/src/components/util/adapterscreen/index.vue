<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="AdapterScreen">
      <p>对屏幕的缩放进行适配的操作</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button type="primary" @click="onControlFull">控制整体页面的缩放</a-button>
      </template>

      <template #p2>
        <div ref="ref">
          <a-button type="primary" @click="onControlElement">控制表格元素的缩放</a-button>
          <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ text, record, column }">
              <template v-if="column.key === 'name'">
                <a>{{ text }}</a>
              </template>

              <template v-else-if="column.key === 'customTitle'">
                <span><a-icon type="smile-o" /> Name</span>
              </template>

              <template v-else-if="column.key === 'tags'">
                <span>
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </template>

              <template v-else-if="column.key === 'action'">
                <span>
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical" />
                  <a>Delete</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
                </span>
              </template>
            </template>
          </a-table>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import { AdapterScreen } from '@baifendian/adherev';

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
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
  },
  {
    title: 'Action',
    key: 'action',
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
      data,
      columns,
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          type: 'PlayGround',
          codeText: `
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
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '传递不同的元素',
          cardProps: {
            description: {
              title: '传递不同的元素',
              info: '传递不同的元素',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>传递不同的元素</h2>
          <div ref="ref">
          <a-button type="primary" @click="onControlElement">控制表格元素的缩放</a-button>
          <a-table :columns="columns" :data-source="data">
            <template #bodyCell="{ text, record, column }">
              <template v-if="column.key === 'name'">
                <a>{{ text }}</a>
              </template>

              <template v-else-if="column.key === 'customTitle'">
                <span><a-icon type="smile-o" /> Name</span>
              </template>

              <template v-else-if="column.key === 'tags'">
                <span>
                  <a-tag
                    v-for="tag in tags"
                    :key="tag"
                    :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
                  >
                    {{ tag.toUpperCase() }}
                  </a-tag>
                </span>
              </template>

              <template v-else-if="column.key === 'action'">
                <span>
                  <a>Invite 一 {{ record.name }}</a>
                  <a-divider type="vertical" />
                  <a>Delete</a>
                  <a-divider type="vertical" />
                  <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
                </span>
              </template>
            </template>
          </a-table>
        </div>
        </template>
        <script>
        import { AdapterScreen } from '@baifendian/adherev';

        const columns = [
          {
            dataIndex: 'name',
            key: 'name',
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
          },
          {
            title: 'Action',
            key: 'action',
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
          childrenSlot: 'p2',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
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
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
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
