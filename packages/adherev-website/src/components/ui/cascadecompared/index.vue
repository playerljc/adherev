<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref" class="CascadeCompared">
    <adv-playground-page-section title="CascadeCompared">
      <p>级联比较</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
          <adv-cascadecompared :indicator="indicator" :master="master">
            <template v-slot:masterGroupTitle="props">
              <h2
                style="
                  padding: 15px 0 15px 15px;
                  margin: 0;
                  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                "
              >
                header{{ props.groupIndex + 1 }}
              </h2>
            </template>

            <template v-slot:cell="props">
              <h4>厂家指导价{{ props.columnIndex + 1 }}</h4>
            </template>
          </adv-cascadecompared>
        </div>
      </template>

      <template #p2>
        <fragment>
          <a-button type="primary" @click="onCode2Click">插入</a-button>

          <adv-space />

          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared ref="ref1" :indicator="indicator" :master="data1">
              <template v-slot:masterGroupTitle="props">
                <h2
                  style="
                    padding: 15px 0 15px 15px;
                    margin: 0;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                  "
                >
                  header{{ props.groupIndex + 1 }}
                </h2>
              </template>

              <template v-slot:cell="props">
                <h4>厂家指导价{{ props.columnIndex + 1 }}</h4>
              </template>
            </adv-cascadecompared>
          </div>
        </fragment>
      </template>

      <template #p3>
        <fragment>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.ref2.scrollToByIndex(9, 0)"
              >滚动到底部(无动画)</a-button
            >
            <a-button @click="$refs.ref2.scrollToByIndex(9)">滚动到底部(有动画)</a-button>
            <a-button @click="$refs.ref2.scrollToByIndex(0)">回到顶部</a-button>
          </adv-space-group>

          <adv-space />

          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared ref="ref2" :indicator="indicator" :master="master">
              <template v-slot:masterGroupTitle="props">
                <h2
                  style="
                    padding: 15px 0 15px 15px;
                    margin: 0;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                  "
                >
                  header{{ props.groupIndex + 1 }}
                </h2>
              </template>

              <template v-slot:cell="props">
                <h4>厂家指导价{{ props.columnIndex + 1 }}</h4>
              </template>
            </adv-cascadecompared>
          </div>
        </fragment>
      </template>

      <template #p4>
        <fragment>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.ref3.scrollToByColumn(1)">滚动到第一列</a-button>
            <a-button @click="$refs.ref3.scrollToByColumn(9)">滚动到最后一列(有动画)</a-button>
          </adv-space-group>

          <adv-space />

          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared ref="ref3" :indicator="indicator" :master="master">
              <template v-slot:masterGroupTitle="props">
                <h2
                  style="
                    padding: 15px 0 15px 15px;
                    margin: 0;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                  "
                >
                  header{{ props.groupIndex + 1 }}
                </h2>
              </template>

              <template v-slot:cell="props">
                <h4>厂家指导价{{ props.columnIndex + 1 }}</h4>
              </template>
            </adv-cascadecompared>
          </div>
        </fragment>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
const columns = [];
columns.length = 10;
columns.fill(0);

const data = [];
data.length = 10;
data.fill(0);

function getMaster() {
  return data.map((t, i) => ({
    columns: columns.map((c, j) => ({
      dataIndex: `columns${j + 1}`,
      isFixed: j === 0,
      width: 120,
      // render: (h) => <h4>{`厂家指导价${j + 1}`}</h4>,
    })),
    dataSource: [
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
      {
        columns1: 1,
        columns2: 2,
        columns3: 3,
        columns4: 4,
        columns5: 5,
        columns6: 6,
        columns7: 7,
        columns8: 8,
        columns9: 9,
        columns10: 10,
      },
    ],
  }));
}

export default {
  computed: {
    indicator() {
      return {
        columns: columns.map((t, i) => ({
          dataIndex: `columns${i + 1}`,
          isFixed: i === 0,
          width: 120,
          render: (h) => <h2>{`指标${i + 1}`}</h2>,
        })),
        dataSource: {
          columns1: 1,
          columns2: 2,
          columns3: 3,
          columns4: 4,
          columns5: 5,
          columns6: 6,
          columns7: 7,
          columns8: 8,
          columns9: 9,
          columns10: 10,
        },
      };
    },
    master() {
      return getMaster();
    },
  },
  data() {
    return {
      data1: getMaster(),
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本的级联操作',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>基本使用</h2>
          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared :indicator="indicator" :master="master" />
          </div>
        </template>

        <script>
          const columns = [];
          columns.length = 10;
          columns.fill(0);

          const data = [];
          data.length = 10;
          data.fill(0);

          function getMaster() {
            return data.map((t, i) => ({
              columns: columns.map((c, j) => ({
                dataIndex: \`column\${j + 1}\`,
                isFixed: j === 0,
                width: 120,
                render: (h) => <h4>{\`厂家指导价\${j + 1}\`}</h4>,
              })),
              dataSource: [
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
              ],
            }));
          }

          export default {
            computed: {
              indicator() {
                return {
                  columns: columns.map((t, i) => ({
                    dataIndex: \`column\${i + 1}\`,
                    isFixed: i === 0,
                    width: 120,
                    render: (h) => <h2>{\`指标\${i + 1}\`}</h2>,
                  })),
                  dataSource: {
                    columns1: 1,
                    columns2: 2,
                    columns3: 3,
                    columns4: 4,
                    columns5: 5,
                    columns6: 6,
                    columns7: 7,
                    columns8: 8,
                    columns9: 9,
                    columns10: 10,
                  },
                };
              },
              master() {
                return getMaster();
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '在底部插入',
          cardProps: {
            description: {
              title: '在底部插入',
              info: '在底部插入行',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>在底部插入</h2>
          <a-button type="primary" @click="onCode2Click">插入</a-button>

          <adv-space />

          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared ref="ref1" :indicator="indicator" :master="data1" />
          </div>
        </template>
        <script>
          const columns = [];
          columns.length = 10;
          columns.fill(0);

          const data = [];
          data.length = 10;
          data.fill(0);

          function getMaster() {
            return data.map((t, i) => ({
              columns: columns.map((c, j) => ({
                dataIndex: \`column\${j + 1}\`,
                isFixed: j === 0,
                width: 120,
                render: (h) => <h4>{\`厂家指导价\${j + 1}\`}</h4>,
              })),
              dataSource: [
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
              ],
            }));
          }

          export default {
            data() {
              return {
                data1: getMaster(),
              };
            },
            watch: {
              data1(val, oldValue) {
                this.$refs.ref1.scrollToByIndex(oldValue.length - 1);
              },
            },
            computed: {
              indicator() {
                return {
                  columns: columns.map((t, i) => ({
                    dataIndex: \`column\${i + 1}\`,
                    isFixed: i === 0,
                    width: 120,
                    render: (h) => <h2>{\`指标\${i + 1}\`}</h2>,
                  })),
                  dataSource: {
                    columns1: 1,
                    columns2: 2,
                    columns3: 3,
                    columns4: 4,
                    columns5: 5,
                    columns6: 6,
                    columns7: 7,
                    columns8: 8,
                    columns9: 9,
                    columns10: 10,
                  },
                };
              },
            },
            methods: {
              onCode2Click() {
                const length = this.data1.length;

                this.data1 = [
                  ...this.data1,
                  {
                    columns: columns.map((c, j) => ({
                      dataIndex: \`column\${j + 1}\`,
                      isFixed: j === 0,
                      width: 120,
                      render: (h) => <h4>{\`厂家指导价\${j + 1}\`}</h4>,
                    })),
                    dataSource: [
                      {
                        columns1: 1,
                        columns2: 2,
                        columns3: 3,
                        columns4: 4,
                        columns5: 5,
                        columns6: 6,
                        columns7: 7,
                        columns8: 8,
                        columns9: 9,
                        columns10: 10,
                      },
                      {
                        columns1: 1,
                        columns2: 2,
                        columns3: 3,
                        columns4: 4,
                        columns5: 5,
                        columns6: 6,
                        columns7: 7,
                        columns8: 8,
                        columns9: 9,
                        columns10: 10,
                      },
                      {
                        columns1: 1,
                        columns2: 2,
                        columns3: 3,
                        columns4: 4,
                        columns5: 5,
                        columns6: 6,
                        columns7: 7,
                        columns8: 8,
                        columns9: 9,
                        columns10: 10,
                      },
                    ],
                  },
                ];
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '通过索引滚动',
          cardProps: {
            description: {
              title: '通过索引滚动',
              info: '通过索引滚动到顶部',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>通过索引滚动</h2>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.ref2.scrollToByIndex(9, 0)">滚动到底部(无动画)</a-button>
            <a-button @click="$refs.ref2.scrollToByIndex(9)">滚动到底部(有动画)</a-button>
            <a-button @click="$refs.ref2.scrollToByIndex(0)">回到顶部</a-button>
          </adv-space-group>

          <adv-space />

          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared ref="ref2" :indicator="indicator" :master="master" />
          </div>
        </template>
        <script>
          const columns = [];
          columns.length = 10;
          columns.fill(0);

          const data = [];
          data.length = 10;
          data.fill(0);

          function getMaster() {
            return data.map((t, i) => ({
              columns: columns.map((c, j) => ({
                dataIndex: \`column\${j + 1}\`,
                isFixed: j === 0,
                width: 120,
                render: (h) => <h4>{\`厂家指导价\${j + 1}\`}</h4>,
              })),
              dataSource: [
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
                {
                  columns1: 1,
                  columns2: 2,
                  columns3: 3,
                  columns4: 4,
                  columns5: 5,
                  columns6: 6,
                  columns7: 7,
                  columns8: 8,
                  columns9: 9,
                  columns10: 10,
                },
              ],
            }));
          }

          export default {
            computed: {
              indicator() {
                return {
                  columns: columns.map((t, i) => ({
                    dataIndex: \`column\${i + 1}\`,
                    isFixed: i === 0,
                    width: 120,
                    render: (h) => <h2>{\`指标\${i + 1}\`}</h2>,
                  })),
                  dataSource: {
                    columns1: 1,
                    columns2: 2,
                    columns3: 3,
                    columns4: 4,
                    columns5: 5,
                    columns6: 6,
                    columns7: 7,
                    columns8: 8,
                    columns9: 9,
                    columns10: 10,
                  },
                };
              },
              master() {
                return getMaster();
              },
            }
          }
        <\/script>
      `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '滚动到指定列',
          cardProps: {
            description: {
              title: '滚动到指定列',
              info: '滚动到指定列',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>滚动到指定列</h2>
          <adv-space-group direction="horizontal">
            <a-button type="primary" @click="$refs.ref3.scrollToByColumn(1)">滚动到第一列</a-button>
            <a-button @click="$refs.ref3.scrollToByColumn(9)">滚动到最后一列(有动画)</a-button>
          </adv-space-group>

          <adv-space />

          <div style="width: 320px; height: 548px; border: 1px solid rgba(0, 0, 0, 0.1)">
            <adv-cascadecompared ref="ref3" :indicator="indicator" :master="master" />
          </div>
        </template>
        <script>
          export default {
            const columns = [];
            columns.length = 10;
            columns.fill(0);

            const data = [];
            data.length = 10;
            data.fill(0);

            function getMaster() {
              return data.map((t, i) => ({
                columns: columns.map((c, j) => ({
                  dataIndex: \`column\${j + 1}\`,
                  isFixed: j === 0,
                  width: 120,
                  render: (h) => <h4>{\`厂家指导价\${j + 1}\`}</h4>,
                })),
                dataSource: [
                  {
                    columns1: 1,
                    columns2: 2,
                    columns3: 3,
                    columns4: 4,
                    columns5: 5,
                    columns6: 6,
                    columns7: 7,
                    columns8: 8,
                    columns9: 9,
                    columns10: 10,
                  },
                  {
                    columns1: 1,
                    columns2: 2,
                    columns3: 3,
                    columns4: 4,
                    columns5: 5,
                    columns6: 6,
                    columns7: 7,
                    columns8: 8,
                    columns9: 9,
                    columns10: 10,
                  },
                  {
                    columns1: 1,
                    columns2: 2,
                    columns3: 3,
                    columns4: 4,
                    columns5: 5,
                    columns6: 6,
                    columns7: 7,
                    columns8: 8,
                    columns9: 9,
                    columns10: 10,
                  },
                ],
              }));
            }

            export default {
              computed: {
                indicator() {
                  return {
                    columns: columns.map((t, i) => ({
                      dataIndex: \`column\${i + 1}\`,
                      isFixed: i === 0,
                      width: 120,
                      render: (h) => <h2>{\`指标\${i + 1}\`}</h2>,
                    })),
                    dataSource: {
                      columns1: 1,
                      columns2: 2,
                      columns3: 3,
                      columns4: 4,
                      columns5: 5,
                      columns6: 6,
                      columns7: 7,
                      columns8: 8,
                      columns9: 9,
                      columns10: 10,
                    },
                  };
                },
                master() {
                  return getMaster();
                },
              }
            }
          }
        <\/script>
      `,
          childrenSlot: 'p4',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'scrollToByIndex',
              desc: '滚动到指定所引出',
              modifier: 'public',
              params: [
                {
                  name: 'index',
                  desc: '滚动到的索引',
                  type: 'number',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'duration',
                  desc: '滚动的时间',
                  type: 'number',
                  defaultVal: '600',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'scrollToByHeaderEl',
              desc: '滚动到指定el',
              modifier: 'public',
              params: [
                {
                  name: 'headerEl',
                  desc: '指定的el',
                  type: 'HtmlElement',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'duration',
                  desc: '滚动的时间',
                  type: 'number',
                  defaultVal: '300',
                  required: '',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'scrollToByColumn',
              desc: '滚动到指定列',
              modifier: 'public',
              params: [
                {
                  name: 'columnIndex',
                  desc: '列的索引从1开始',
                  type: 'number',
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
          title: 'CascadeCompared',
          data: [
            {
              params: 'indicatorClassName',
              desc: 'indicator附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'indicatorStyle',
              desc: 'indicator的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'indicatorFixedWrapClassName',
              desc: 'indicatorFixedWrap样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'indicatorFixedWrapStyle',
              desc: 'indicatorFixedWrap附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'indicatorAutoWrapClassName',
              desc: 'indicatorAutoWrap样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'indicatorAutoWrapStyle',
              desc: 'indicatorAutoWrap附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'masterClassName',
              desc: 'masterWrap样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'masterStyle',
              desc: 'master附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'masterInnerClassName',
              desc: 'masterInner样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'masterInnerStyle',
              desc: 'masterInner附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'masterStickFixedClassName',
              desc: 'masterStickFixed样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'masterStickFixedStyle',
              desc: 'masterStickFixed附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'masterStickInnerClassName',
              desc: 'masterStickInner样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'masterStickInnerStyle',
              desc: 'masterStickInner附加的样式',
              type: 'String',
              defaultVal: '',
            },
            {
              params: 'indicator',
              desc: '指示器数据',
              type: 'IIndicatorTableConfig',
              defaultVal: '',
            },
            {
              params: 'master',
              desc: '主数据',
              type: 'Array<IMasterItem>',
              defaultVal: '',
            },
            {
              params: 'onStickChange',
              desc: '滚动改变钩子',
              type: 'Function',
              defaultVal: '',
            },
            {
              params: 'defaultCellWidth',
              desc: '缺省的列宽度',
              type: 'number | string',
              defaultVal: '120',
            },
          ],
        },
        {
          border: true,
          title: 'IIndicatorTableConfig',
          data: [
            {
              params: 'columns',
              desc: '列配置',
              type: 'Array<IColumnConfig>',
              defaultVal: '[]',
            },
            {
              params: 'dataSource',
              desc: '数据',
              type: 'Object',
              defaultVal: '{}',
            },
          ],
        },
        {
          border: true,
          title: 'IColumnConfig',
          data: [
            {
              params: 'dataIndex',
              desc: '数据索引',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'isFixed',
              desc: '是否是固定列',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'width',
              desc: '列的宽度',
              type: 'number | string',
              defaultVal: '120',
            },
            {
              params: 'render',
              desc: '渲染列的方法',
              type: 'Function',
              defaultVal: '120',
            },
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '',
            },
          ],
        },
        {
          border: true,
          title: 'IMasterItem',
          data: [
            {
              params: 'columns',
              desc: '列配置',
              type: 'Array<IColumnConfig>',
              defaultVal: '[]',
            },
            {
              params: 'dataSource',
              desc: '数据',
              type: 'Array<Object>',
              defaultVal: '[]',
            },
            {
              params: 'title',
              desc: 'header',
              type: 'string | Object | Function',
              defaultVal: '',
            },
            {
              params: 'className',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'style',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '{}',
            },
            {
              params: 'fixedWrapClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'fixedWrapStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '{}',
            },
            {
              params: 'autoWrapClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'autoWrapStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '{}',
            },
            {
              params: 'autoInnerClassName',
              desc: '附加的样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'autoInnerStyle',
              desc: '附加的样式',
              type: 'String',
              defaultVal: '{}',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    onCode2Click() {
      const length = this.data1.length;

      this.data1 = [
        ...this.data1,
        {
          columns: columns.map((c, j) => ({
            dataIndex: `columns${j + 1}`,
            isFixed: j === 0,
            width: 120,
            // render: (h) => <h4>{`厂家指导价${j + 1}`}</h4>,
          })),
          dataSource: [
            {
              columns1: 1,
              columns2: 2,
              columns3: 3,
              columns4: 4,
              columns5: 5,
              columns6: 6,
              columns7: 7,
              columns8: 8,
              columns9: 9,
              columns10: 10,
            },
            {
              columns1: 1,
              columns2: 2,
              columns3: 3,
              columns4: 4,
              columns5: 5,
              columns6: 6,
              columns7: 7,
              columns8: 8,
              columns9: 9,
              columns10: 10,
            },
            {
              columns1: 1,
              columns2: 2,
              columns3: 3,
              columns4: 4,
              columns5: 5,
              columns6: 6,
              columns7: 7,
              columns8: 8,
              columns9: 9,
              columns10: 10,
            },
          ],
        },
      ];

      this.$nextTick(function () {
        this.$refs.ref1.scrollToByIndex(this.data1.length - 1);
      });
    },
  },
};
</script>

<style lang="less" module src="./index.less" />
