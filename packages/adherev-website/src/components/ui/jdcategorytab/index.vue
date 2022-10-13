<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="JdCategoryTab">
      <p>京东的面板</p>
      <p>本组件基于iscroll开发</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="width: 600px; height: 600px; border: 1px solid rgba(0, 0, 0, 0.1)">
          <adv-jdcategorytab :menuData="menuData" :default-active-key="'1'">
            <adv-jdcategorytab-item
              v-for="(t, index) in data"
              :key="String(index + 1)"
              :id="String(index + 1)"
            >
              <adv-conditionalrender :conditional="index % 2 === 0">
                <template v-slot:noMatch>
                  <a-table
                    style="padding: 20px"
                    :columns="columns"
                    :data-source="tableData"
                    :pagination="false"
                  >
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
                </template>

                <a-list item-layout="horizontal" :data-source="listData" style="padding: 20px">
                  <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    >
                      <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </adv-conditionalrender>
            </adv-jdcategorytab-item>
          </adv-jdcategorytab>
        </div>
      </template>

      <template #p2>
        <div style="width: 600px; height: 600px; border: 1px solid rgba(0, 0, 0, 0.1)">
          <adv-jdcategorytab
            :menuData="menuData"
            :default-active-key="activeKey"
            @change="onChange1"
          >
            <adv-jdcategorytab-item :id="activeKey">
              <adv-conditionalrender :conditional="parseInt(activeKey) % 2 === 0">
                <template v-slot:noMatch>
                  <a-table
                    style="padding: 20px"
                    :columns="columns"
                    :data-source="tableData"
                    :pagination="false"
                  >
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
                </template>

                <a-list item-layout="horizontal" :data-source="listData" style="padding: 20px">
                  <a-list-item slot="renderItem" slot-scope="item, index">
                    <a-list-item-meta
                      description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    >
                      <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                      <a-avatar
                        slot="avatar"
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                      />
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </adv-conditionalrender>
            </adv-jdcategorytab-item>
          </adv-jdcategorytab>
        </div>
      </template>

      <template #p3>
        <fragment>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.jdRef.scrollTo('1')">置顶</a-button>
            <a-button @click="$refs.jdRef.scrollTo(`${data.length}`)">置底</a-button>
          </adv-space-group>

          <adv-space />

          <div
            style="
              position: relative;
              width: 600px;
              height: 600px;
              border: 1px solid rgba(0, 0, 0, 0.1);
            "
          >
            <adv-spin :spinning="loading" />

            <adv-jdcategorytab
              ref="jdRef"
              :menuData="menuData"
              :default-active-key="activeKey1"
              :onBeforeChange="onBeforeChange"
              @change="onChange2"
            >
              <adv-jdcategorytab-item
                v-for="(t, index) in data"
                :key="String(index + 1)"
                :id="String(index + 1)"
              >
                <adv-conditionalrender :conditional="index % 2 === 0">
                  <template v-slot:noMatch>
                    <a-table
                      style="padding: 20px"
                      :columns="columns"
                      :data-source="tableData"
                      :pagination="false"
                    >
                      <a slot="name" slot-scope="text">{{ text }}</a>
                      <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                      <span slot="tags" slot-scope="tags">
                        <a-tag
                          v-for="tag in tags"
                          :key="tag"
                          :color="
                            tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
                          "
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
                  </template>

                  <a-list item-layout="horizontal" :data-source="listData" style="padding: 20px">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                      <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      >
                        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                        <a-avatar
                          slot="avatar"
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                      </a-list-item-meta>
                    </a-list-item>
                  </a-list>
                </adv-conditionalrender>
              </adv-jdcategorytab-item>
            </adv-jdcategorytab>
          </div>
        </fragment>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
const data = [];
data.length = 100;
data.fill(0);

export default {
  data() {
    return {
      data,
      activeKey: '1',
      activeKey1: '1',
      loading: false,
      onBeforeChange: () => {
        this.loading = true;
        return true;
      },
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
          <div style="width: 600px; height: 600px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-jdcategorytab :menuData="menuData" :default-active-key="'1'">
              <adv-jdcategorytab-item
                v-for="(t, index) in data"
                :key="String(index + 1)"
                :id="String(index + 1)"
              >
                <adv-conditionalrender :conditional="index % 2 === 0">
                  <template v-slot:noMatch>
                    <a-table
                      style="padding: 20px"
                      :columns="columns"
                      :data-source="tableData"
                      :pagination="false"
                    >
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
                  </template>

                  <a-list item-layout="horizontal" :data-source="listData" style="padding: 20px">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                      <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      >
                        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                        <a-avatar
                          slot="avatar"
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                      </a-list-item-meta>
                    </a-list-item>
                  </a-list>
                </adv-conditionalrender>
              </adv-jdcategorytab-item>
            </adv-jdcategorytab>
          </div>
        </template>

        <script>
          const data = [];
          data.length = 100;
          data.fill(0);

          export default {
            data() {
              return {
                data,
                activeKey: '1',
                activeKey1: '1',
                loading: false,
                onBeforeChange: () => {
                  this.loading = true;
                  return true;
                },
              }
            },
            computed: {
              columns() {
                return [
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
              },
              tableData() {
                return [
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
              },
              listData() {
                return [
                  {
                    title: 'Ant Design Title 1',
                  },
                  {
                    title: 'Ant Design Title 2',
                  },
                  {
                    title: 'Ant Design Title 3',
                  },
                  {
                    title: 'Ant Design Title 4',
                  },
                ];
              },
              menuData() {
                return this.data.map((t, index) => ({
                  key: \`\${index + 1}\`,
                  name: \`菜单\${index + 1}\`,
                }));
              },
            },
            methods: {
              onChange1(k) {
                this.activeKey = k;
              },
              onChange2(k) {
                this.activeKey1 = k;
                this.loading = false;
              },
            },
          }
        <\/script>
`,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'tab同一时刻只有一个Tab',
          cardProps: {
            description: {
              title: 'tab同一时刻只有一个Tab',
              info: 'tab同一时刻只有一个Tab',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <div style="width: 600px; height: 600px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-jdcategorytab
              :menuData="menuData"
              :default-active-key="activeKey"
              @change="onChange1"
            >
              <adv-jdcategorytab-item :id="activeKey">
                <adv-conditionalrender :conditional="parseInt(activeKey) % 2 === 0">
                  <template v-slot:noMatch>
                    <a-table
                      style="padding: 20px"
                      :columns="columns"
                      :data-source="tableData"
                      :pagination="false"
                    >
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
                  </template>

                  <a-list item-layout="horizontal" :data-source="listData" style="padding: 20px">
                    <a-list-item slot="renderItem" slot-scope="item, index">
                      <a-list-item-meta
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      >
                        <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                        <a-avatar
                          slot="avatar"
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                      </a-list-item-meta>
                    </a-list-item>
                  </a-list>
                </adv-conditionalrender>
              </adv-jdcategorytab-item>
            </adv-jdcategorytab>
          </div>
        </template>

        <script>
          const data = [];
          data.length = 100;
          data.fill(0);

          export default {
            data() {
              return {
                data,
                activeKey: '1',
                activeKey1: '1',
                loading: false,
                onBeforeChange: () => {
                  this.loading = true;
                  return true;
                },
              }
            },
            computed: {
              columns() {
                return [
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
              },
              tableData() {
                return [
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
              },
              listData() {
                return [
                  {
                    title: 'Ant Design Title 1',
                  },
                  {
                    title: 'Ant Design Title 2',
                  },
                  {
                    title: 'Ant Design Title 3',
                  },
                  {
                    title: 'Ant Design Title 4',
                  },
                ];
              },
              menuData() {
                return this.data.map((t, index) => ({
                  key: \`\${index + 1}\`,
                  name: \`菜单\${index + 1}\`,
                }));
              },
            },
            methods: {
              onChange1(k) {
                this.activeKey = k;
              },
              onChange2(k) {
                this.activeKey1 = k;
                this.loading = false;
              },
            },
          }
        <\/script>`,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '置顶或置底',
          cardProps: {
            description: {
              title: '置顶或置底',
              info: '置顶或置底',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <fragment>
            <adv-space-group direction="horizontal">
              <a-button type="primary" @click="$refs.ref.scrollTo('1')">置顶</a-button>
              <a-button @click="$refs.ref.scrollTo(\`${data.length}\`)">置底</a-button>
            </adv-space-group>

            <adv-space />

            <div
              style="
                position: relative;
                width: 600px;
                height: 600px;
                border: 1px solid rgba(0, 0, 0, 0.1);
              "
            >
              <adv-spin :spinning="loading" />

              <adv-jdcategorytab
                ref="ref"
                :menuData="menuData"
                :default-active-key="activeKey1"
                :onBeforeChange="onBeforeChange"
                @change="onChange2"
              >
                <adv-jdcategorytab-item
                  v-for="(t, index) in data"
                  :key="String(index + 1)"
                  :id="String(index + 1)"
                >
                  <adv-conditionalrender :conditional="index % 2 === 0">
                    <template v-slot:noMatch>
                      <a-table
                        style="padding: 20px"
                        :columns="columns"
                        :data-source="tableData"
                        :pagination="false"
                      >
                        <a slot="name" slot-scope="text">{{ text }}</a>
                        <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
                        <span slot="tags" slot-scope="tags">
                          <a-tag
                            v-for="tag in tags"
                            :key="tag"
                            :color="
                              tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
                            "
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
                    </template>

                    <a-list item-layout="horizontal" :data-source="listData" style="padding: 20px">
                      <a-list-item slot="renderItem" slot-scope="item, index">
                        <a-list-item-meta
                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        >
                          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                          <a-avatar
                            slot="avatar"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                          />
                        </a-list-item-meta>
                      </a-list-item>
                    </a-list>
                  </adv-conditionalrender>
                </adv-jdcategorytab-item>
              </adv-jdcategorytab>
            </div>
          </fragment>
        </template>

        <script>
          const data = [];
          data.length = 100;
          data.fill(0);

          export default {
            data() {
              return {
                data,
                activeKey: '1',
                activeKey1: '1',
                loading: false,
                onBeforeChange: () => {
                  this.loading = true;
                  return true;
                },
              }
            },
            computed: {
              columns() {
                return [
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
              },
              tableData() {
                return [
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
              },
              listData() {
                return [
                  {
                    title: 'Ant Design Title 1',
                  },
                  {
                    title: 'Ant Design Title 2',
                  },
                  {
                    title: 'Ant Design Title 3',
                  },
                  {
                    title: 'Ant Design Title 4',
                  },
                ];
              },
              menuData() {
                return this.data.map((t, index) => ({
                  key: \`\${index + 1}\`,
                  name: \`菜单\${index + 1}\`,
                }));
              },
            },
            methods: {
              onChange1(k) {
                this.activeKey = k;
              },
              onChange2(k) {
                this.activeKey1 = k;
                this.loading = false;
              },
            },
          }
        <\/script>`,
          childrenSlot: 'p3',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'scrollTo',
              desc: '滚动到指定key',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: '唯一标志',
                  type: 'string',
                  defaultVal: '',
                  required: '',
                },
                {
                  name: 'time',
                  desc: '滚动时间',
                  type: 'number',
                  defaultVal: '250',
                  required: '',
                },
                {
                  name: 'easing',
                  desc: 'IScroll的easing',
                  type: 'string',
                  defaultVal: 'IScroll.utils.ease',
                  required: '',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'JdCategoryTab',
          data: [
            {
              params: 'menuClassName',
              desc: 'menu附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'menuStyle',
              desc: 'menu附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'menuInnerClassName',
              desc: 'menuInner附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'menuInnerStyle',
              desc: 'menuInner附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'tabClassName',
              desc: 'tab附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'tabStyle',
              desc: 'tab附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'menuItemClassName',
              desc: 'menuItem附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'menuItemStyle',
              desc: 'menuItem附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'menuData',
              desc: '菜单数据',
              type: 'Object{key,name}',
              defaultVal: '{}',
            },
            {
              params: 'activeKey',
              desc: '当前激活项',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'menuItem',
              desc: '自定义渲染菜单',
              type: 'slot',
              defaultVal: '',
            },
            {
              params: 'onBeforeChange',
              desc: '激活之前的钩子',
              type: 'Function',
              defaultVal: '执行改变返回true，否则返回false',
            },
            {
              params: 'change',
              desc: '菜单激活想发生改变',
              type: 'Function',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'JdCategoryTab.Item',
          data: [
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'key',
              desc: '唯一标志',
              type: 'string',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    columns() {
      return [
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
    },
    tableData() {
      return [
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
    },
    listData() {
      return [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ];
    },
    menuData() {
      return this.data.map((t, index) => ({
        key: `${index + 1}`,
        name: `菜单${index + 1}`,
      }));
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    onChange1(k) {
      this.activeKey = k;
    },
    onChange2(k) {
      this.activeKey1 = k;
      this.loading = false;
    },
  },
};
</script>
