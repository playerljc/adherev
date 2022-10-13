<template>
  <adv-playground-page :scrollEl="scrollEl" class="Surnames" ref="ref">
    <adv-playground-page-section title="Surnames">
      <p>姓名面板</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="display: flex">
          <adv-space-group direction="horizontal">
            <div style="width: 300px">
              <adv-surnames
                style="border: 1px solid #ccc"
                :indexes="code1Indexes"
                :dataSource="code1DataSource"
              >
                <template v-slot:title="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:index="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:content="props">
                  <ul>
                    <li v-for="(t, index) in 10" :key="index + 1">
                      {{ props.index }}{{ index + 1 }}
                    </li>
                  </ul>
                </template>
              </adv-surnames>
            </div>

            <div style="width: 300px">
              <adv-surnames
                style="border: 1px solid #ccc"
                position="left"
                :indexes="code1Indexes"
                :dataSource="code1DataSource"
              >
                <template v-slot:title="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:index="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:content="props">
                  <ul>
                    <li v-for="(t, index) in 10" :key="index + 1">
                      {{ props.index }}{{ index + 1 }}
                    </li>
                  </ul>
                </template>
              </adv-surnames>
            </div>
          </adv-space-group>
        </div>
      </template>

      <template #p2>
        <div style="display: flex">
          <adv-space-group direction="horizontal">
            <div style="height: 516px">
              <adv-surnames
                position="top"
                style="border: 1px solid #ccc"
                :indexes="code1Indexes"
                :dataSource="code1DataSource"
              >
                <template v-slot:title="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:index="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:content="props">
                  <ul>
                    <li v-for="(t, index) in 10" :key="index + 1">
                      {{ props.index }}{{ index + 1 }}
                    </li>
                  </ul>
                </template>
              </adv-surnames>
            </div>

            <div style="height: 516px">
              <adv-surnames
                position="bottom"
                style="border: 1px solid #ccc"
                :indexes="code1Indexes"
                :dataSource="code1DataSource"
              >
                <template v-slot:title="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:index="props">
                  <span>{{ props.index }}</span>
                </template>
                <template v-slot:content="props">
                  <ul>
                    <li v-for="(t, index) in 10" :key="index + 1">
                      {{ props.index }}{{ index + 1 }}
                    </li>
                  </ul>
                </template>
              </adv-surnames>
            </div>
          </adv-space-group>
        </div>
      </template>

      <template #p3>
        <fragment>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.ref1.scrollToAnimation('Z')"
              >滚动到底部</a-button
            >
            <a-button @click="$refs.ref1.scrollToAnimation('A')">滚动到顶部</a-button>
          </adv-space-group>

          <adv-space />

          <div style="width: 300px">
            <adv-surnames
              ref="ref1"
              style="border: 1px solid #ccc"
              :indexes="code1Indexes"
              :dataSource="code1DataSource"
            >
              <template v-slot:title="props">
                <span>{{ props.index }}</span>
              </template>
              <template v-slot:index="props">
                <span>{{ props.index }}</span>
              </template>
              <template v-slot:content="props">
                <ul>
                  <li v-for="(t, index) in 10" :key="index + 1">
                    {{ props.index }}{{ index + 1 }}
                  </li>
                </ul>
              </template>
            </adv-surnames>
          </div>
        </fragment>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
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
          <div style="display: flex">
            <adv-space-group direction="horizontal">
              <div style="width: 300px">
                <adv-surnames
                  style="border: 1px solid #ccc"
                  :indexes="code1Indexes"
                  :dataSource="code1DataSource"
                >
                  <template v-slot:title="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:index="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:content="props">
                    <ul>
                      <li v-for="(t, index) in 10" :key="index + 1">
                        {{ props.index }}{{ index + 1 }}
                      </li>
                    </ul>
                  </template>
                </adv-surnames>
              </div>

              <div style="width: 300px">
                <adv-surnames
                  style="border: 1px solid #ccc"
                  position="left"
                  :indexes="code1Indexes"
                  :dataSource="code1DataSource"
                >
                  <template v-slot:title="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:index="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:content="props">
                    <ul>
                      <li v-for="(t, index) in 10" :key="index + 1">
                        {{ props.index }}{{ index + 1 }}
                      </li>
                    </ul>
                  </template>
                </adv-surnames>
              </div>
            </adv-space-group>
          </div>
        </template>

        <script>
          export default {
            computed: {
              code1Indexes() {
                const startCharCode = 'A'.charCodeAt();
                const endCharCode = 'Z'.charCodeAt();

                const indexes = [];

                const count = [];
                count.length = 10;
                count.fill(1);

                for (let i = startCharCode; i <= endCharCode; i++) {
                  indexes.push({
                    index: String.fromCharCode(i),
                  });
                }

                return indexes;
              },
              code1DataSource() {
                const startCharCode = 'A'.charCodeAt();
                const endCharCode = 'Z'.charCodeAt();

                const dataSource = [];

                for (let i = startCharCode; i <= endCharCode; i++) {
                  dataSource.push({
                    index: String.fromCharCode(i),
                    data: [],
                  });
                }

                return dataSource;
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '上下结构',
          cardProps: {
            description: {
              title: '上下结构',
              info: '上下结构',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>上下结构</h2>
          <div style="display: flex">
            <adv-space-group direction="horizontal">
              <div style="height: 516px">
                <adv-surnames
                  position="top"
                  style="border: 1px solid #ccc"
                  :indexes="code1Indexes"
                  :dataSource="code1DataSource"
                >
                  <template v-slot:title="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:index="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:content="props">
                    <ul>
                      <li v-for="(t, index) in 10" :key="index + 1">
                        {{ props.index }}{{ index + 1 }}
                      </li>
                    </ul>
                  </template>
                </adv-surnames>
              </div>

              <div style="height: 516px">
                <adv-surnames
                  position="bottom"
                  style="border: 1px solid #ccc"
                  :indexes="code1Indexes"
                  :dataSource="code1DataSource"
                >
                  <template v-slot:title="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:index="props">
                    <span>{{ props.index }}</span>
                  </template>
                  <template v-slot:content="props">
                    <ul>
                      <li v-for="(t, index) in 10" :key="index + 1">
                        {{ props.index }}{{ index + 1 }}
                      </li>
                    </ul>
                  </template>
                </adv-surnames>
              </div>
            </adv-space-group>
          </div>
        </template>

        <script>
          export default {
            computed: {
              code1Indexes() {
                const startCharCode = 'A'.charCodeAt();
                const endCharCode = 'Z'.charCodeAt();

                const indexes = [];

                const count = [];
                count.length = 10;
                count.fill(1);

                for (let i = startCharCode; i <= endCharCode; i++) {
                  indexes.push({
                    index: String.fromCharCode(i),
                  });
                }

                return indexes;
              },
              code1DataSource() {
                const startCharCode = 'A'.charCodeAt();
                const endCharCode = 'Z'.charCodeAt();

                const dataSource = [];

                for (let i = startCharCode; i <= endCharCode; i++) {
                  dataSource.push({
                    index: String.fromCharCode(i),
                    data: [],
                  });
                }

                return dataSource;
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '使用api',
          cardProps: {
            description: {
              title: '使用api',
              info: '使用api',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>使用api</h2>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.ref1.scrollToAnimation('Z')">滚动到底部</a-button>
            <a-button @click="$refs.ref1.scrollToAnimation('A')">滚动到顶部</a-button>
          </adv-space-group>

          <adv-space />

          <div style="width: 300px">
            <adv-surnames
              ref="ref1"
              style="border: 1px solid #ccc"
              :indexes="code1Indexes"
              :dataSource="code1DataSource"
            >
              <template v-slot:title="props">
                <span>{{ props.index }}</span>
              </template>
              <template v-slot:index="props">
                <span>{{ props.index }}</span>
              </template>
              <template v-slot:content="props">
                <ul>
                  <li v-for="(t, index) in 10" :key="index + 1">{{ props.index }}{{ index + 1 }}</li>
                </ul>
              </template>
            </adv-surnames>
          </div>
        </template>

        <script>
          export default {
            computed: {
              code1Indexes() {
                const startCharCode = 'A'.charCodeAt();
                const endCharCode = 'Z'.charCodeAt();

                const indexes = [];

                const count = [];
                count.length = 10;
                count.fill(1);

                for (let i = startCharCode; i <= endCharCode; i++) {
                  indexes.push({
                    index: String.fromCharCode(i),
                  });
                }

                return indexes;
              },
              code1DataSource() {
                const startCharCode = 'A'.charCodeAt();
                const endCharCode = 'Z'.charCodeAt();

                const dataSource = [];

                for (let i = startCharCode; i <= endCharCode; i++) {
                  dataSource.push({
                    index: String.fromCharCode(i),
                    data: [],
                  });
                }

                return dataSource;
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p3',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'scrollToAnimation',
              desc: '动画的滚动到指定所引处',
              modifier: 'public',
              params: [
                {
                  name: 'name',
                  desc: '索引名称',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'duration',
                  desc: '动画的完成时间',
                  type: 'number',
                  defaultVal: '100',
                  required: 'false',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'scrollTo',
              desc: '滚动到指定所引处',
              modifier: 'public',
              params: [
                {
                  name: 'name',
                  desc: '索引名称',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: 'Surnames',
          data: [
            {
              params: 'position',
              desc: '显示的位置 top, right, bottom, left',
              type: 'string',
              defaultVal: 'right',
            },
            {
              params: 'indexes',
              desc: '索引的信息',
              type: 'Array',
              defaultVal: '[]',
            },
            {
              params: 'dataSource',
              desc: '数据',
              type: 'Array',
              defaultVal: '[]',
            },
            {
              params: 'onBeforeScroll',
              desc: '滚动之前的钩子',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'onScroll',
              desc: '滚动',
              type: 'Function',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'indexes',
          data: [
            {
              params: 'index',
              desc: '索引值',
              type: 'string',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'dataSource',
          data: [
            {
              params: 'index',
              desc: '索引值',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'data',
              desc: '数据',
              type: 'Array<Object>',
              defaultVal: '',
            },
          ],
        },
      ],
    };
  },
  computed: {
    code1Indexes() {
      const startCharCode = 'A'.charCodeAt();
      const endCharCode = 'Z'.charCodeAt();

      const indexes = [];

      const count = [];
      count.length = 10;
      count.fill(1);

      for (let i = startCharCode; i <= endCharCode; i++) {
        indexes.push({
          index: String.fromCharCode(i),
        });
      }

      return indexes;
    },
    code1DataSource() {
      const startCharCode = 'A'.charCodeAt();
      const endCharCode = 'Z'.charCodeAt();

      const dataSource = [];

      for (let i = startCharCode; i <= endCharCode; i++) {
        dataSource.push({
          index: String.fromCharCode(i),
          data: [],
        });
      }

      return dataSource;
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>

<style lang="less" src="./index.less" />
