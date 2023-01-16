<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="AntdvFormItem">
      <p>Antdv的FormItem进阶</p>
      <ul>
        <li>对antdv一些表单组件进行normalize处理</li>
        <li>从Dict(adherev-util-dict)自动生成FormItem</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="Normalize" :config="normalizeCodeBoxPanelConfig">
<!--      <template #p1>
        <adv-space-group direction="vertical">
          <dl>
            <dt>
              <p>Select</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-select style="width: 200px">
                <a-select-option value="男">男</a-select-option>
                <a-select-option value="女">女</a-select-option>
              </adv-antdvformitemnormalize-select>
            </dd>
          </dl>

          <dl>
            <dt>
              <p>MultipleSelect</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-multipleselect style="width: 200px">
                <a-select-option value="男">男</a-select-option>
                <a-select-option value="女">女</a-select-option>
              </adv-antdvformitemnormalize-multipleselect>
            </dd>
          </dl>

          <dl>
            <dt>
              <p>TreeSelect</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-treeselect
                style="width: 200px"
                :treeData="[
                  {
                    value: 'parent 1',
                    title: 'parent 1',
                    children: [
                      {
                        value: 'parent 1-0',
                        title: 'parent 1-0',
                        children: [
                          {
                            value: 'leaf1',
                            title: 'leaf1',
                          },
                          {
                            value: 'leaf2',
                            title: 'leaf2',
                          },
                        ],
                      },
                      {
                        value: 'parent 1-1',
                        title: 'parent 1-1',
                        children: [
                          {
                            value: 'leaf3',
                            title: 'leaf3',
                          },
                        ],
                      },
                    ],
                  },
                ]"
              />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>autocomplete</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-autocomplete
                placeholder="try to type `b`"
                style="width: 200px"
                :dataSource="[
                  {
                    text: 'Burns Bay Road',
                    value: 'Burns Bay Road',
                  },
                  {
                    value: 'Downing Street',
                    value: 'Downing Street',
                  },
                  {
                    value: 'Wall Street',
                    value: 'Wall Street',
                  },
                ]"
              />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>datepicker</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-datepicker style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>rangepicker</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-rangepicker style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>timepicker</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-timepicker style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>cascader</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-cascader
                placeholder="please select"
                style="width: 200px"
                :options="[
                  {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                      {
                        value: 'hangzhou',
                        label: 'Hangzhou',
                        children: [
                          {
                            value: 'xihu',
                            label: 'West Lake',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    value: 'jiangsu',
                    label: 'Jiangsu',
                    children: [
                      {
                        value: 'nanjing',
                        label: 'Nanjing',
                        children: [
                          {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                          },
                        ],
                      },
                    ],
                  },
                ]"
                @change="(val) => console.log(val)"
              />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>upload</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-upload
                name="file"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                :headers="{
                  authorization: 'authorization-text',
                }"
                @change="
                  function (info) {
                    if (info.file.status !== 'uploading') {
                      console.log(info.file, info.fileList);
                    }
                    if (info.file.status === 'done') {
                      $message.success(`${info.file.name} file uploaded successfully`);
                    } else if (info.file.status === 'error') {
                      $message.error(`${info.file.name} file upload failed.`);
                    }
                  }
                "
              >
                <a-button icon="upload">click to upload</a-button>
              </adv-antdvformitemnormalize-upload>
            </dd>
          </dl>

          <dl>
            <dt>
              <p>modal</p>
            </dt>
            <dd>
              <div>
                <a-button
                  type="primary"
                  @click="
                    function () {
                      isModalOpen = true;
                    }
                  "
                >
                  open modal
                </a-button>
                <adv-antdvformitemnormalize-modal
                  title="basic modal"
                  :visible="isModalOpen"
                  @ok="closeModal"
                  @cancel="closeModal"
                >
                  <p>some contents...</p>
                  <p>some contents...</p>
                  <p>some contents...</p>
                </adv-antdvformitemnormalize-modal>
              </div>
            </dd>
          </dl>

          <dl>
            <dt>
              <p>inputnumberdecimal1</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-inputnumberdecimal1 style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>inputnumberdecimal2</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-inputnumberdecimal2 style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>inputnumberinteger</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-inputnumberinteger style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>input</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-input style="width: 200px" />
            </dd>
          </dl>

          <dl>
            <dt>
              <p>textarea</p>
            </dt>
            <dd>
              <adv-antdvformitemnormalize-textarea style="width: 200px" />
            </dd>
          </dl>
        </adv-space-group>
      </template>-->

      <template #p2>
        <div style="height: 500px">
          <adv-flexlayout-scroll :scroll-y="true">
            <adv-space-group direction="vertical">
              <dl>
                <dt>
                  <p>select</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-select style="width: 200px">
                    <a-select-option
                      v-for="(item, index) in Array.from({ length: 150 }).fill(1)"
                      :key="index + 1"
                      :value="index + 1"
                    >
                      {{ index + 1 }}
                    </a-select-option>
                  </adv-antdvformitemnormalize-select>
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>multipleselect</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-multipleselect style="width: 200px">
                    <a-select-option
                      v-for="(item, index) in Array.from({ length: 150 }).fill(1)"
                      :key="index + 1"
                      :value="index + 1"
                    >
                      {{ index + 1 }}
                    </a-select-option>
                  </adv-antdvformitemnormalize-multipleselect>
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>treeselect</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-treeselect
                    style="width: 200px"
                    :treeData="[
                      {
                        value: 'parent 1',
                        title: 'parent 1',
                        children: [
                          {
                            value: 'parent 1-0',
                            title: 'parent 1-0',
                            children: [
                              {
                                value: 'leaf1',
                                title: 'leaf1',
                              },
                              {
                                value: 'leaf2',
                                title: 'leaf2',
                              },
                            ],
                          },
                          {
                            value: 'parent 1-1',
                            title: 'parent 1-1',
                            children: [
                              {
                                value: 'leaf3',
                                title: 'leaf3',
                              },
                            ],
                          },
                        ],
                      },
                    ]"
                  />
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>autocomplete</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-autocomplete
                    style="width: 200px"
                    placeholder="try to type `b`"
                    :dataSource="[
                      {
                        text: 'Burns Bay Road',
                        value: 'Burns Bay Road',
                      },
                      {
                        text: 'Downing Street',
                        value: 'Downing Street',
                      },
                      {
                        text: 'Wall Street',
                        value: 'Wall Street',
                      },
                    ]"
                  />
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>datepicker</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-datepicker style="width: 200px" />
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>rangepicker</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-rangepicker style="width: 200px" />
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>timepicker</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-timepicker style="width: 200px" />
                </dd>
              </dl>

              <dl>
                <dt>
                  <p>cascader</p>
                </dt>
                <dd>
                  <adv-antdvformitemnormalize-cascader
                    placeholder="please select"
                    style="width: 200px"
                    :options="[
                      {
                        value: 'zhejiang',
                        label: 'Zhejiang',
                        children: [
                          {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                            children: [
                              {
                                value: 'xihu',
                                label: 'West Lake',
                              },
                            ],
                          },
                        ],
                      },
                      {
                        value: 'jiangsu',
                        label: 'Jiangsu',
                        children: [
                          {
                            value: 'nanjing',
                            label: 'Nanjing',
                            children: [
                              {
                                value: 'zhonghuamen',
                                label: 'Zhong Hua Men',
                              },
                            ],
                          },
                        ],
                      },
                    ]"
                  />
                </dd>
              </dl>
            </adv-space-group>
          </adv-flexlayout-scroll>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
      scrollEl: null,
      isModalOpen: false,
      normalizeCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'Normalize可以查询合清除的控件',
          type: 'PlayGroundMulit',
          cardProps: {
            description: {
              title: '带有查询合清除的控件',
              info: '默认都可以进行查询合清除',
            },
          },
          defaultConfig: [
            {
              type: 'CodePanel',
              title: 'index.vue',
              codeText: ``,
            },
            {
              type: 'CodePanel',
              title: 'index.vue',
              codeText: ``,
            },
          ],
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '配合ScrollLayout使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '使用ScrollLayout做容器',
              info: '自动设置组件的getPopupContainer，浮层跟随滚动',
            },
          },
          codeText: ``,
          childrenSlot: 'p2',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>
