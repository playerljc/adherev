import moment from 'moment';
import { Input, Select, InputNumber, DatePicker } from 'ant-design-vue';
import { SearchTable, Resource, Ajax } from '@baifendian/adherev';

// @ts-ignore
const request = new Ajax('');

const { Option } = Select;
const { RangePicker } = DatePicker;

export default {
  mixins: [SearchTable],
  data() {
    return {
      name: '',
      sex: '',
      startTime: null,
      endTime: null,
      deptCode: '',
      homeTown: '',
      width: '',
      height: '',
      // @ts-ignore
      [this.getOrderFieldProp()]: 'height',
      // @ts-ignore
      [this.getOrderProp()]: 'descend',
      // selectedRowKeys
      selectedRowKeys: [],
      // dataSource
      dataSource: {
        total: 0,
        list: [],
      },
      // loading
      loading: false,

      // 查询参数
      searchParams: {
        name: '',
        sex: '',
        startTime: null,
        endTime: null,
        deptCode: '',
        homeTown: '',
        width: '',
        height: '',
      },
    };
  },
  methods: {
    isShowNumber() {
      return true;
    },
    getNumberGeneratorRule() {
      return SearchTable.NUMBER_GENERATOR_RULE_CONTINUITY;
    },
    getTableNumberColumnWidth() {
      return 80;
    },
    getRowKey() {
      return 'id';
    },
    getData() {
      // @ts-ignore
      return this.dataSource.list;
    },
    getColumns() {
      return [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          align: 'center',
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          scopedSlots: { customRender: 'sex' },
        },
        {
          title: '籍贯',
          dataIndex: 'homeTown',
          key: 'homeTown',
          align: 'center',
        },
        {
          title: '出生年月',
          dataIndex: 'birthday',
          key: 'birthday',
          align: 'center',
          sorter: true,
          // @ts-ignore
          sortOrder: this.sortOrder('birthday'),
          scopedSlots: { customRender: 'birthday' },
        },
        {
          title: '所在部门',
          dataIndex: 'deptName',
          key: 'deptName',
          align: 'center',
        },
        {
          title: '身高',
          dataIndex: 'height',
          key: 'height',
          align: 'center',
          sorter: true,
          // @ts-ignore
          sortOrder: this.sortOrder('height'),
        },
        {
          title: '体重',
          dataIndex: 'width',
          key: 'width',
          align: 'center',
          sorter: true,
          // @ts-ignore
          sortOrder: this.sortOrder('width'),
        },
      ];
    },
    getScopedSlots(
      // @ts-ignore
      h,
    ) {
      return {
        sex: (text) => {
          return Resource.Dict.value.ResourceNormalSexMap.value.get(text).label;
        },
        birthday: (text) => {
          return text ? moment(text).format(Resource.Dict.value.ResourceMomentFormat10.value) : '';
        },
      };
    },
    getRowSelection() {
      return {
        // @ts-ignore
        selectedRowKeys: this.selectedRowKeys,
        onChange: (selectedRowKeys) => {
          // @ts-ignore
          this.selectedRowKeys = selectedRowKeys;
        },
      };
    },
    renderSearchForm(
      // @ts-ignore
      h,
    ) {
      // @ts-ignore
      return (
        <SearchTable.SearchForm>
          <SearchTable.SearchFormRow>
            <SearchTable.SearchFormLabel style="width: 100px;">姓名：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Input
                // @ts-ignore
                style="width: 270px"
                placeholder="姓名"
                // @ts-ignore
                value={this.name}
                onChange={(e) => {
                  // @ts-ignore
                  this.name = e.target.value.trim();
                }}
              />
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>性别：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Select
                // @ts-ignore
                style="width: 270px"
                // @ts-ignore
                value={this.sex}
                onChange={(v) => {
                  // @ts-ignore
                  this.sex = v;
                }}
              >
                {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                  // @ts-ignore
                  <Option key={t.value} value={t.value}>
                    {t.label}
                  </Option>
                ))}
              </Select>
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>出生年月：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <RangePicker
                // @ts-ignore
                style="width: 270px"
                // @ts-ignore
                value={[this.startTime, this.endTime]}
                onChange={(moments) => {
                  // @ts-ignore
                  this.startTime = moments.length ? moments[0] : null;
                  // @ts-ignore
                  this.endTime = moments.length ? moments[1] : null;
                }}
                getCalendarContainer={(el) => el.parentElement}
              />
            </SearchTable.SearchFormValue>
          </SearchTable.SearchFormRow>

          <SearchTable.SearchFormRow>
            <SearchTable.SearchFormLabel>籍贯：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Input
                // @ts-ignore
                style="width: 270px"
                placeholder="籍贯"
                // @ts-ignore
                value={this.homeTown}
                onChange={(e) => {
                  // @ts-ignore
                  this.homeTown = e.target.value.trim();
                }}
              />
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>身高：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <InputNumber
                // @ts-ignore
                style="width: 270px"
                placeholder="身高"
                // @ts-ignore
                value={this.height}
                onChange={(v) => {
                  // @ts-ignore
                  this.height = v;
                }}
              />
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>体重：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <InputNumber
                // @ts-ignore
                style="width: 270px"
                placeholder="体重"
                // @ts-ignore
                value={this.width}
                onChange={(v) => {
                  // @ts-ignore
                  this.width = v;
                }}
              />
            </SearchTable.SearchFormValue>
          </SearchTable.SearchFormRow>

          <SearchTable.SearchFormRow>
            <SearchTable.SearchFormLabel>所在部门：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Select
                // @ts-ignore
                style="width: 270px"
                // @ts-ignore
                value={this.deptCode}
                onChange={(v) => {
                  // @ts-ignore
                  this.deptCode = v;
                }}
                getPopupContainer={(el) => el.parentElement}
              >
                {/*@ts-ignore*/}
                <Option value="">全部</Option>
                {/*@ts-ignore*/}
                <Option value="0">产品部</Option>
                {/*@ts-ignore*/}
                <Option value="1">开发部</Option>
                {/*@ts-ignore*/}
                <Option value="2">工程部</Option>
              </Select>
            </SearchTable.SearchFormValue>
          </SearchTable.SearchFormRow>
        </SearchTable.SearchForm>
      );
    },
    getTotal() {
      // @ts-ignore
      return this.dataSource.total;
    },
    getOrderFieldProp() {
      return 'orderField';
    },
    getOrderProp() {
      return 'order';
    },
    clear() {
      return new Promise((resolve) => {
        // @ts-ignore
        this.name = '';
        // @ts-ignore
        this.sex = '';
        // @ts-ignore
        this.startTime = null;
        // @ts-ignore
        this.endTime = null;
        // @ts-ignore
        this.deptCode = '';
        // @ts-ignore
        this.homeTown = '';
        // @ts-ignore
        this.width = '';
        // @ts-ignore
        this.height = '';
        this[this.getOrderFieldProp()] = 'height';
        this[this.getOrderProp()] = 'descend';
        // selectedRowKeys
        // @ts-ignore
        this.selectedRowKeys = [];

        // 查询参数
        // @ts-ignore
        this.searchParams = {
          name: '',
          sex: '',
          startTime: null,
          endTime: null,
          deptCode: '',
          homeTown: '',
          width: '',
          height: '',
        };

        resolve();
      });
    },
    renderSearchFooterItems() {
      return null;
    },
    showLoading() {
      // @ts-ignore
      return this.loading;
    },
    onSubTableChange(
      // @ts-ignore
      pagination,
      // @ts-ignore
      filters,
      // @ts-ignore
      sorter,
    ) {},
    fetchData() {
      // @ts-ignore
      const { page, limit } = this;

      // @ts-ignore
      const { startTime, endTime, ...others } = this.searchParams;

      const order = this[this.getOrderProp()];

      const searParams = {
        page,
        limit,
        ...others,
        [this.getOrderProp()]: order === 'descend' ? 'desc' : 'asc',
        [this.getOrderFieldProp()]: this[this.getOrderFieldProp()],
        startTime: startTime
          ? startTime.format(Resource.Dict.value.ResourceMomentFormatFull.value)
          : null,
        endTime: endTime
          ? endTime.format(Resource.Dict.value.ResourceMomentFormatFull.value)
          : null,
      };

      console.log(searParams);

      // @ts-ignore
      this.loading = true;

      request
        .get(
          // @ts-ignore
          {
            mock: true,
            path: require('./mock.js').default,
          },
        )
        .then((result) => {
          // @ts-ignore
          this.dataSource = {
            // @ts-ignore
            total: result.total,
            // @ts-ignore
            list: result.list,
          };

          // @ts-ignore
          this.loading = false;
        });
    },
    onSearch() {
      // @ts-ignore
      const { name, sex, startTime, endTime, deptCode, homeTown, width, height } = this;

      // @ts-ignore
      this.searchParams = {
        name,
        sex,
        startTime,
        endTime,
        deptCode,
        homeTown,
        width,
        height,
        [this.getOrderFieldProp()]: this[this.getOrderFieldProp()],
        [this.getOrderProp()]: this[this.getOrderProp()],
      };

      this.fetchData();
    },
  },
};
