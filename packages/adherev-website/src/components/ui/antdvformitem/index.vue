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
      <template #p1>
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
                @change="uploadChange"
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
                    () => {
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
      </template>

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

    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - Radio(字典中以Radio或DynamicRadio结尾)"
      :config="radioCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestRadioHorizontalFormItem :value="val" @change="onChange" />
      </template>

      <template #p2>
        <SystemTestRadioVerticalFormItem :value="val" @change="onChange" />
      </template>

      <template #p3>
        <SystemTestRadioButtonFormItem button-style="solid" :value="val" @change="onChange" />
      </template>

      <template #p4>
        <SystemTestRadioSelectFormItem style="width: 200px" :value="val" @change="onChange" />
      </template>

      <template #p5>
        <SystemTestRadioCustomFormItem
          option-type="button"
          button-style="solid"
          :value="val"
          @change="onChange"
        >
          <template #option="item">
            <a-space :size="8">
              <a-radio
                :key="item.data.value"
                :value="item.data.value"
                :disabled="item.data.disabled"
              >
                {{ item.data.label }}
              </a-radio>
            </a-space>
          </template>
        </SystemTestRadioCustomFormItem>
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - Checkbox(字典中以Checkbox或DynamicCheckbox结尾)"
      :config="checkboxCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestCheckBoxHorizontalFormItem :value="vals" @change="onChangeValues" />
      </template>

      <template #p2>
        <SystemTestCheckBoxVerticalFormItem :value="vals" @change="onChangeValues" />
      </template>

      <template #p3>
        <SystemTestCheckBoxCheckAllVerticalFormItem :value="vals" @change="onChangeValues" />
      </template>

      <template #p4>
        <SystemTestCheckBoxCheckAllHorizontalFormItem :value="vals" @change="onChangeValues" />
      </template>

      <template #p5>
        <SystemTestCheckBoxSelectFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>

      <template #p6>
        <SystemTestCheckBoxCheckAllSelectFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>

      <template #p7>
        <SystemTestCheckBoxCustomFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        >
          <template #option="item">
            <a-space :size="8">
              <a-checkbox :key="item.data.value" :value="item.data.value">
                {{ item.data.label }}
              </a-checkbox>
            </a-space>
          </template>
        </SystemTestCheckBoxCustomFormItem>
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - Select"
      :config="selectCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestSelectFormItem style="width: 200px" :value="val" @change="onChange" />
      </template>
      <template #p2>
        <SystemTestSelectMulitFormItem
          style="width: 300px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
      <template #p3>
        <SystemTestSelectCheckAllMulitFormItem
          style="width: 300px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
      <template #p4>
        <SystemTestAutoCompleteSelectFormItem
          style="width: 200px"
          :value="val"
          @change="onChange"
        />
      </template>
      <template #p5>
        <SystemTestAutoCompleteSelectMulitFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
      <template #p6>
        <SystemTestAutoCompleteSelectCheckAllMulitFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - TreeSelect"
      :config="treeSelectCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestTreeFormItem
          style="width: 200px"
          :value="val"
          :show-search="false"
          @change="onChange"
        />
      </template>

      <template #p2>
        <SystemTestTreeLeafFormItem style="width: 200px" :value="val" @change="onChange" />
      </template>

      <template #p3>
        <SystemTestTreeMulitFormItem style="width: 200px" :value="vals" @change="onChangeValues" />
      </template>

      <template #p4>
        <SystemTestTreeLeafMulitFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - Transfer"
      :config="transferCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestTransferFormItem :value="vals" @change="onChangeValues" />
      </template>

      <template #p2>
        <SystemTestTransferSelectFormItem
          style="width: 300px"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - Table"
      :config="tableCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestTableFormItem
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
        />
      </template>

      <template #p2>
        <SystemTestTableSelectFormItem
          style="width: 1024px"
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
          :value="val"
          @change="onChange"
        />
      </template>

      <template #p3>
        <SystemTestTableMulitSelectFormItem
          style="width: 1024px"
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
          :value="vals"
          @change="onChangeValues"
        />
      </template>

      <template #p4>
        <SystemTestTablePaginationFormItem
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
        />
      </template>

      <template #p5>
        <SystemTestTablePaginationSelectFormItem
          style="width: 1024px"
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
          :value="val"
          @change="onChange"
        />
      </template>

      <template #p6>
        <SystemTestTablePaginationMulitSelectFormItem
          style="width: 1024px"
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
          :value="vals"
          @change="onChangeValues"
        />
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - Cascader"
      :config="cascaderCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestCascaderFormItem :value="vals" @change="onChangeValues" />
      </template>

      <template #p2>
        <SystemTestCascaderLeafFormItem :value="vals" @change="onChangeValues" />
      </template>
    </adv-playground-page-code-box-section>
    <adv-playground-page-code-box-section
      title="FormItemGeneratorToDict - List"
      :config="listCodeBoxPanelConfig"
    >
      <template #p1>
        <SystemTestListFormItem>
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-list-item-meta :description="item.address">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>

                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </SystemTestListFormItem>
      </template>

      <template #p2>
        <SystemTestListSelectFormItem style="width: 1024px" :value="val" @change="onChange">
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-list-item-meta :description="item.address">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>

                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </SystemTestListSelectFormItem>
      </template>

      <template #p3>
        <SystemTestListMulitSelectFormItem
          style="width: 1024px"
          :value="vals"
          @change="onChangeValues"
        >
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-list-item-meta :description="item.address">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>

                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </SystemTestListMulitSelectFormItem>
      </template>

      <template #p4>
        <SystemTestListPaginationFormItem>
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-list-item-meta :description="item.address">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>

                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </SystemTestListPaginationFormItem>
      </template>

      <template #p5>
        <SystemTestListPaginationSelectFormItem
          style="width: 1024px"
          :value="val"
          @change="onChange"
        >
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-list-item-meta :description="item.address">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>

                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </SystemTestListPaginationSelectFormItem>
      </template>

      <template #p6>
        <SystemTestListPaginationMulitSelectFormItem
          style="width: 1024px"
          :value="vals"
          @change="onChangeValues"
        >
          <template #renderItem="{ item, index }">
            <a-list-item>
              <a-list-item-meta :description="item.address">
                <template #title>
                  <a href="https://www.antdv.com/">{{ item.name }}</a>
                </template>

                <template #avatar>
                  <a-avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </template>
        </SystemTestListPaginationMulitSelectFormItem>
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
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '带有查询合清除的控件',
              info: '默认都可以进行查询合清除',
            },
          },
          codeText: `
      <template>
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
                placeholder="try to type \`b\`"
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
                   (info) => {
                    if (info.file.status !== 'uploading') {
                      console.log(info.file, info.fileList);
                    }
                    if (info.file.status === 'done') {
                      $message.success(\`\${info.file.name} file uploaded successfully\`);
                    } else if (info.file.status === 'error') {
                      $message.error(\`\${info.file.name} file upload failed.\`);
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
                    () => {
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
      </template>
              `,
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
          codeText: `
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
                placeholder="try to type \`b\`"
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
              `,
          childrenSlot: 'p2',
        },
      ],
      radioCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'Radio横向',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Radio横向',
              info: 'Radio横向',
            },
          },
          codeText: `
     <template>
        <SystemTestRadioHorizontalFormItem :value="val" @change="onChange" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Radio纵向',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Radio纵向',
              info: 'Radio纵向',
            },
          },
          codeText: `
     <template>
        <SystemTestRadioVerticalFormItem :value="val" @change="onChange" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'Radio的Button',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Radio的Button',
              info: 'Radio的Button',
            },
          },
          codeText: `
     <template>
        <SystemTestRadioButtonFormItem button-style="solid" :value="val" @change="onChange" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'Radio的Select',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Radio的Select',
              info: 'Radio的Select',
            },
          },
          codeText: `
     <template>
        <SystemTestRadioSelectFormItem style="width: 200px" :value="val" @change="onChange" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: 'Radio的自定义',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Radio的自定义',
              info: 'Radio的自定义',
            },
          },
          codeText: `
     <template>
        <SystemTestRadioCustomFormItem
            option-type="button"
            button-style="solid"
            :value="val"
            @change="onChange"
          >
            <template #option="item">
              <a-space :size="8">
                <a-radio
                  :key="item.data.value"
                  :value="item.data.value"
                  :disabled="item.data.disabled"
                >
                  {{ item.data.label }}
                </a-radio>
              </a-space>
            </template>
          </SystemTestRadioCustomFormItem>
     <template />

     <script>
      export default {
         data() {
            return {
               val: '',
            }
         },
         methods: {
          onChange(e) {
            this.val = typeof e === 'object' ? e.target.value : e;
          },
          onChangeValues(vals) {
            this.vals = vals;
          },
        },
      }
    <\/script>
              `,
          childrenSlot: 'p5',
        },
      ],
      checkboxCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'Checkbox横向',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Checkbox横向',
              info: 'Checkbox横向',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxHorizontalFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Checkbox纵向',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Checkbox纵向',
              info: 'Checkbox纵向',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxVerticalFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'Checkbox横向全选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Checkbox横向全选',
              info: 'Checkbox横向全选',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxCheckAllVerticalFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'Checkbox纵向全选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Checkbox纵向全选',
              info: 'Checkbox纵向全选',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxCheckAllHorizontalFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: 'Checkbox的Select',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Checkbox的Select',
              info: 'Checkbox的Select',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxSelectFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: 'Checkbox的CheckAllSelect',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Checkbox的CheckAllSelect',
              info: 'Checkbox的CheckAllSelect',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxCheckAllSelectFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p6',
        },
        {
          id: 'p7',
          name: '自定义CheckBox',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '自定义CheckBox',
              info: '自定义CheckBox',
            },
          },
          codeText: `
     <template>
        <SystemTestCheckBoxCustomFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        >
          <template #option="item">
            <a-space :size="8">
              <a-checkbox :key="item.data.value" :value="item.data.value">
                {{ item.data.label }}
              </a-checkbox>
            </a-space>
          </template>
        </SystemTestCheckBoxCustomFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p7',
        },
      ],
      selectCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'Select单选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Select单选',
              info: 'Select单选',
            },
          },
          codeText: `
     <template>
        <SystemTestSelectFormItem style="width: 200px" :value="val" @change="onChange" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Select多选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Select多选',
              info: 'Select多选',
            },
          },
          codeText: `
     <template>
        <SystemTestSelectMulitFormItem
            style="width: 300px"
            :value="vals"
            @change="onChangeValues"
          />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'Select全选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Select全选',
              info: 'Select全选',
            },
          },
          codeText: `
     <template>
        <SystemTestSelectCheckAllMulitFormItem
            style="width: 300px"
            :value="vals"
            @change="onChangeValues"
          />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'AutoComplete的单选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'AutoComplete的单选',
              info: 'AutoComplete的单选',
            },
          },
          codeText: `
     <template>
        <SystemTestAutoCompleteSelectFormItem
          style="width: 200px"
          :value="val"
          @change="onChange"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: 'AutoComplete的多选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'AutoComplete的多选',
              info: 'AutoComplete的多选',
            },
          },
          codeText: `
     <template>
        <SystemTestAutoCompleteSelectMulitFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: 'AutoComplete的全选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'AutoComplete的全选',
              info: 'AutoComplete的全选',
            },
          },
          codeText: `
     <template>
        <SystemTestAutoCompleteSelectCheckAllMulitFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p6',
        },
      ],
      treeSelectCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'TreeSelect单选(能选任意节点)',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'TreeSelect单选(能选任意节点)',
              info: 'TreeSelect单选(能选任意节点)',
            },
          },
          codeText: `
     <template>
        <SystemTestTreeFormItem
          style="width: 200px"
          :value="val"
          :show-search="false"
          @change="onChange"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'TreeSelect单选(只能选叶子节点)',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'TreeSelect单选(只能选叶子节点)',
              info: 'TreeSelect单选(只能选叶子节点)',
            },
          },
          codeText: `
     <template>
        <SystemTestTreeLeafFormItem style="width: 200px" :value="val" @change="onChange" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: 'TreeSelect多选(能选任意节点)',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'TreeSelect多选(能选任意节点)',
              info: 'TreeSelect多选(能选任意节点)',
            },
          },
          codeText: `
     <template>
        <SystemTestTreeMulitFormItem style="width: 200px" :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: 'TreeSelect多选(只能选叶子节点)',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'TreeSelect多选(只能选叶子节点)',
              info: 'TreeSelect多选(只能选叶子节点)',
            },
          },
          codeText: `
     <template>
        <SystemTestTreeLeafMulitFormItem
          style="width: 200px"
          :value="vals"
          @change="onChangeValues"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p4',
        },
      ],
      transferCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '基本',
              info: '基本',
            },
          },
          codeText: `
     <template>
        <SystemTestTransferFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'SelectFormItem',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'SelectFormItem',
              info: 'SelectFormItem',
            },
          },
          codeText: `
     <template>
        <SystemTestTransferSelectFormItem
          style="width: 300px"
          :value="vals"
          @change="onChangeValues"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
      ],
      tableCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: '普通不带分页',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '普通不带分页',
              info: '普通不带分页',
            },
          },
          codeText: `
     <template>
        <SystemTestTableFormItem
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '普通单选Select',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '普通单选Select',
              info: '普通单选Select',
            },
          },
          codeText: `
     <template>
        <SystemTestTableSelectFormItem
          style="width: 1024px"
          :table-props="{
            columns: [
              {
                key: 'name',
                dataIndex: 'name',
                title: '姓名',
              },
              {
                key: 'sex',
                dataIndex: 'sex',
                title: '性别',
              },
              {
                key: 'birthDay',
                dataIndex: 'birthDay',
                title: '生日',
              },
              {
                key: 'deptName',
                dataIndex: 'deptName',
                title: '部门',
              },
              {
                key: 'address',
                dataIndex: 'address',
                title: '地址',
              },
            ],
          }"
          :value="val"
          @change="onChange"
        />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '普通多选Select',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '普通多选Select',
              info: '普通多选Select',
            },
          },
          codeText: `
     <template>
        <SystemTestTableMulitSelectFormItem
            style="width: 1024px"
            :table-props="{
              columns: [
                {
                  key: 'name',
                  dataIndex: 'name',
                  title: '姓名',
                },
                {
                  key: 'sex',
                  dataIndex: 'sex',
                  title: '性别',
                },
                {
                  key: 'birthDay',
                  dataIndex: 'birthDay',
                  title: '生日',
                },
                {
                  key: 'deptName',
                  dataIndex: 'deptName',
                  title: '部门',
                },
                {
                  key: 'address',
                  dataIndex: 'address',
                  title: '地址',
                },
              ],
            }"
            :value="vals"
            @change="onChangeValues"
          />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '分页的动态数据',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分页的动态数据',
              info: '分页的动态数据',
            },
          },
          codeText: `
     <template>
        <SystemTestTablePaginationFormItem
            :table-props="{
              columns: [
                {
                  key: 'name',
                  dataIndex: 'name',
                  title: '姓名',
                },
                {
                  key: 'sex',
                  dataIndex: 'sex',
                  title: '性别',
                },
                {
                  key: 'birthDay',
                  dataIndex: 'birthDay',
                  title: '生日',
                },
                {
                  key: 'deptName',
                  dataIndex: 'deptName',
                  title: '部门',
                },
                {
                  key: 'address',
                  dataIndex: 'address',
                  title: '地址',
                },
              ],
            }"
          />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: '分页的动态数据Select单选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分页的动态数据Select单选',
              info: '分页的动态数据Select单选',
            },
          },
          codeText: `
     <template>
        <SystemTestTablePaginationSelectFormItem
            style="width: 1024px"
            :table-props="{
              columns: [
                {
                  key: 'name',
                  dataIndex: 'name',
                  title: '姓名',
                },
                {
                  key: 'sex',
                  dataIndex: 'sex',
                  title: '性别',
                },
                {
                  key: 'birthDay',
                  dataIndex: 'birthDay',
                  title: '生日',
                },
                {
                  key: 'deptName',
                  dataIndex: 'deptName',
                  title: '部门',
                },
                {
                  key: 'address',
                  dataIndex: 'address',
                  title: '地址',
                },
              ],
            }"
            :value="val"
            @change="onChange"
          />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: '分页的动态数据Select多选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分页的动态数据Select多选',
              info: '分页的动态数据Select多选',
            },
          },
          codeText: `
     <template>
        <SystemTestTablePaginationMulitSelectFormItem
            style="width: 1024px"
            :table-props="{
              columns: [
                {
                  key: 'name',
                  dataIndex: 'name',
                  title: '姓名',
                },
                {
                  key: 'sex',
                  dataIndex: 'sex',
                  title: '性别',
                },
                {
                  key: 'birthDay',
                  dataIndex: 'birthDay',
                  title: '生日',
                },
                {
                  key: 'deptName',
                  dataIndex: 'deptName',
                  title: '部门',
                },
                {
                  key: 'address',
                  dataIndex: 'address',
                  title: '地址',
                },
              ],
            }"
            :value="vals"
            @change="onChangeValues"
          />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p6',
        },
      ],
      cascaderCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: 'Cascader(能选任意节点)',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Cascader(能选任意节点)',
              info: 'Cascader(能选任意节点)',
            },
          },
          codeText: `
     <template>
        <SystemTestCascaderFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: 'Cascader(只能选叶子节点)',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: 'Cascader(只能选叶子节点)',
              info: 'Cascader(只能选叶子节点)',
            },
          },
          codeText: `
     <template>
        <SystemTestCascaderLeafFormItem :value="vals" @change="onChangeValues" />
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
      ],
      listCodeBoxPanelConfig: [
        {
          id: 'p1',
          name: '普通不带分页',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '普通不带分页',
              info: '普通不带分页',
            },
          },
          codeText: `
     <template>
        <SystemTestListFormItem>
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.address">
                <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </SystemTestListFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '普通单选Select',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '普通单选Select',
              info: '普通单选Select',
            },
          },
          codeText: `
     <template>
        <SystemTestListSelectFormItem style="width: 1024px" :value="val" @change="onChange">
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.address">
                <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </SystemTestListSelectFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p2',
        },
        {
          id: 'p3',
          name: '普通多选Select',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '普通多选Select',
              info: '普通多选Select',
            },
          },
          codeText: `
     <template>
        <SystemTestListMulitSelectFormItem
            style="width: 1024px"
            :value="vals"
            @change="onChangeValues"
          >
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.address">
                <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </SystemTestListMulitSelectFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p3',
        },
        {
          id: 'p4',
          name: '分页的动态数据',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分页的动态数据',
              info: '分页的动态数据',
            },
          },
          codeText: `
     <template>
        <SystemTestListPaginationFormItem>
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.address">
                <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </SystemTestListPaginationFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p4',
        },
        {
          id: 'p5',
          name: '分页的动态数据Select单选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分页的动态数据Select单选',
              info: '分页的动态数据Select单选',
            },
          },
          codeText: `
     <template>
       <SystemTestListPaginationSelectFormItem
            style="width: 1024px"
            :value="val"
            @change="onChange"
          >
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.address">
                <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </SystemTestListPaginationSelectFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p5',
        },
        {
          id: 'p6',
          name: '分页的动态数据Select多选',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '分页的动态数据Select多选',
              info: '分页的动态数据Select多选',
            },
          },
          codeText: `
     <template>
        <SystemTestListPaginationMulitSelectFormItem
            style="width: 1024px"
            :value="vals"
            @change="onChangeValues"
          >
            <a-list-item slot="renderItem" slot-scope="item, index">
              <a-list-item-meta :description="item.address">
                <a slot="title" href="https://www.antdv.com/">{{ item.name }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </SystemTestListPaginationMulitSelectFormItem>
     </template>

     <script>
        export default {
           data() {
              return {
                 val: '',
              }
           },
           methods: {
            onChange(e) {
              this.val = typeof e === 'object' ? e.target.value : e;
            },
            onChangeValues(vals) {
              this.vals = vals;
            },
          },
        }
      <\/script>
              `,
          childrenSlot: 'p6',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [],
        },
      ],
      val: '',
      vals: [],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {
    uploadChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        $message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        $message.error(`${info.file.name} file upload failed.`);
      }
    },
    closeModal() {
      this.isModalOpen = false;
    },
    onChange(e) {
      this.val = typeof e === 'object' ? e.target.value : e;
    },
    onChangeValues(vals) {
      this.vals = vals;
    },
  },
};
</script>
