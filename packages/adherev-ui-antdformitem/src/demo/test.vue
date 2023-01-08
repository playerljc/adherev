<script>
export default {
  components: {},

  data() {
    return {
      val: '',
      vals: [],
      test: 'large',
    };
  },
  methods: {
    onChange(e) {
      this.val = typeof e === 'object' ? e.target.value : e;
    },
    onChangeValues(vals) {
      debugger;
      this.vals = vals;
    },
  },
};
</script>

<template>
  <div style="padding: 50px">
    <!--
    <fieldset>
      <legend>
        <h1>Radio</h1>
      </legend>

      <div>
        <dl>
          <dt>
            <h3>Radio横向</h3>
          </dt>
          <dd>
            <SystemTestRadioHorizontalFormItem :value="val" @change="onChange" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Radio纵向</h3>
          </dt>
          <dd>
            <SystemTestRadioVerticalFormItem :value="val" @change="onChange" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Radio的Button</h3>
          </dt>
          <dd>
            <SystemTestRadioButtonFormItem button-style="solid" :value="val" @change="onChange" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Radio的Select</h3>
          </dt>
          <dd>
            <SystemTestRadioSelectFormItem style="width: 200px" :value="val" @change="onChange" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Radio的自定义</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        <h1>Checkbox</h1>
      </legend>
      <div>
        <dl>
          <dt>
            <h3>Checkbox横向</h3>
          </dt>
          <dd>
            <SystemTestCheckBoxHorizontalFormItem :value="vals" @change="onChangeValues" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Checkbox纵向</h3>
          </dt>
          <dd>
            <SystemTestCheckBoxVerticalFormItem :value="vals" @change="onChangeValues" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Checkbox横向全选</h3>
          </dt>
          <dd>
            <SystemTestCheckBoxCheckAllVerticalFormItem :value="vals" @change="onChangeValues" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Checkbox纵向全选</h3>
          </dt>
          <dd>
            <SystemTestCheckBoxCheckAllHorizontalFormItem :value="vals" @change="onChangeValues" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Checkbox的Select</h3>
          </dt>
          <dd>
            <SystemTestCheckBoxSelectFormItem
              style="width: 200px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Checkbox的CheckAllSelect</h3>
          </dt>
          <dd>
            <SystemTestCheckBoxCheckAllSelectFormItem
              style="width: 200px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>自定义CheckBox</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        <h1>Select</h1>
      </legend>
      <div>
        <dl>
          <dt>
            <h3>Select单选</h3>
          </dt>
          <dd>
            <SystemTestSelectFormItem style="width: 200px" :value="val" @change="onChange" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Select多选</h3>
          </dt>
          <dd>
            <SystemTestSelectMulitFormItem
              style="width: 300px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>Select全选</h3>
          </dt>
          <dd>
            <SystemTestSelectCheckAllMulitFormItem
              style="width: 300px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>AutoComplete的单选</h3>
          </dt>
          <dd>
            <SystemTestAutoCompleteSelectFormItem
              style="width: 200px"
              :value="val"
              @change="onChange"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>AutoComplete的多选</h3>
          </dt>
          <dd>
            <SystemTestAutoCompleteSelectMulitFormItem
              style="width: 200px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>AutoComplete的全选</h3>
          </dt>
          <dd>
            <SystemTestAutoCompleteSelectCheckAllMulitFormItem
              style="width: 200px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        <h1>TreeSelect</h1>
      </legend>
      <div>
        <dl>
          <dt>
            <h3>TreeSelect单选(能选任意节点)</h3>
          </dt>
          <dd>
            <SystemTestTreeFormItem
              style="width: 200px"
              :value="val"
              :show-search="false"
              @change="onChange"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>TreeSelect单选(只能选叶子节点)</h3>
          </dt>
          <dd>
            <SystemTestTreeLeafFormItem style="width: 200px" :value="val" @change="onChange" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>TreeSelect多选(能选任意节点)</h3>
          </dt>
          <dd>
            <SystemTestTreeMulitFormItem
              style="width: 200px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>TreeSelect多选(只能选叶子节点)</h3>
          </dt>
          <dd>
            <SystemTestTreeLeafMulitFormItem
              style="width: 200px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        <h1>Transfer</h1>
      </legend>

      <div>
        <dl>
          <dt>
            <h3>基本</h3>
          </dt>
          <dd>
            <SystemTestTransferFormItem :value="vals" @change="onChangeValues" />
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>SelectFormItem</h3>
          </dt>
          <dd>
            <SystemTestTransferSelectFormItem
              style="width: 300px"
              :value="vals"
              @change="onChangeValues"
            />
          </dd>
        </dl>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        <h1>Table</h1>
      </legend>
      <div>
        <dl>
          <dt>
            <h3>普通不带分页</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>普通单选Select</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>普通多选Select</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>分页的动态数据</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>分页的动态数据Select单选</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>分页的动态数据Select多选</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>
      </div>
    </fieldset>

    <fieldset>
      <legend>
        <h1>List</h1>
      </legend>

      <div>
        <dl>
          <dt>
            <h3>普通不带分页</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>普通单选Select</h3>
          </dt>

          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>普通多选Select</h3>
          </dt>

          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>分页的动态数据</h3>
          </dt>

          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>分页的动态数据Select单选</h3>
          </dt>

          <dd>
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
          </dd>
        </dl>

        <dl>
          <dt>
            <h3>分页的动态数据Select多选</h3>
          </dt>
          <dd>
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
          </dd>
        </dl>
      </div>
    </fieldset>-->

    <fieldset>
      <legend>
        <h1>Cascader</h1>
      </legend>

      <div>
        <dl>
          <dt>
            <h3>普通不带分页</h3>
          </dt>
          <dd><SystemTestCascaderFormItem :value="vals" @change="onChangeValues" /></dd>
        </dl>

        <dl>
          <dt>
            <h3>普通单选Select</h3>
          </dt>

          <dd>
            <SystemTestCascaderLeafFormItem :value="vals" @change="onChangeValues" />
          </dd>
        </dl>
      </div>
    </fieldset>
  </div>
</template>
