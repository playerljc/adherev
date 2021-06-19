import moment from 'moment';
import { Input, Select, InputNumber, DatePicker } from 'ant-design-vue';
import { SearchTable, Resource, Ajax } from '@baifendian/adherev';

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

      [this.getOrderFieldProp()]: 'height',

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

          sortOrder: this.sortOrder('height'),
        },
        {
          title: '体重',
          dataIndex: 'width',
          key: 'width',
          align: 'center',
          sorter: true,

          sortOrder: this.sortOrder('width'),
        },
      ];
    },
    getScopedSlots(h) {
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
        selectedRowKeys: this.selectedRowKeys,
        onChange: (selectedRowKeys) => {
          this.selectedRowKeys = selectedRowKeys;
        },
      };
    },
    renderSearchForm(h) {
      return (
        <SearchTable.SearchForm>
          <SearchTable.SearchFormRow>
            <SearchTable.SearchFormLabel style="width: 100px;">姓名：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Input
                style="width: 270px"
                placeholder="姓名"
                value={this.name}
                onChange={(e) => {
                  this.name = e.target.value.trim();
                }}
              />
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>性别：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Select
                style="width: 270px"
                value={this.sex}
                onChange={(v) => {
                  this.sex = v;
                }}
              >
                {Resource.Dict.value.ResourceNormalSex.value.map((t) => (
                  <Option key={t.value} value={t.value}>
                    {t.label}
                  </Option>
                ))}
              </Select>
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>出生年月：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <RangePicker
                style="width: 270px"
                value={[this.startTime, this.endTime]}
                onChange={(moments) => {
                  this.startTime = moments.length ? moments[0] : null;

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
                style="width: 270px"
                placeholder="籍贯"
                value={this.homeTown}
                onChange={(e) => {
                  this.homeTown = e.target.value.trim();
                }}
              />
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>身高：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <InputNumber
                style="width: 270px"
                placeholder="身高"
                value={this.height}
                onChange={(v) => {
                  this.height = v;
                }}
              />
            </SearchTable.SearchFormValue>

            <SearchTable.SearchFormLabel>体重：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <InputNumber
                style="width: 270px"
                placeholder="体重"
                value={this.width}
                onChange={(v) => {
                  this.width = v;
                }}
              />
            </SearchTable.SearchFormValue>
          </SearchTable.SearchFormRow>

          <SearchTable.SearchFormRow>
            <SearchTable.SearchFormLabel>所在部门：</SearchTable.SearchFormLabel>
            <SearchTable.SearchFormValue>
              <Select
                style="width: 270px"
                value={this.deptCode}
                onChange={(v) => {
                  this.deptCode = v;
                }}
                getPopupContainer={(el) => el.parentElement}
              >
                <Option value="">全部</Option>

                <Option value="0">产品部</Option>

                <Option value="1">开发部</Option>

                <Option value="2">工程部</Option>
              </Select>
            </SearchTable.SearchFormValue>
          </SearchTable.SearchFormRow>
        </SearchTable.SearchForm>
      );
    },
    getTotal() {
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
        this.name = '';

        this.sex = '';

        this.startTime = null;

        this.endTime = null;

        this.deptCode = '';

        this.homeTown = '';

        this.width = '';

        this.height = '';
        this[this.getOrderFieldProp()] = 'height';
        this[this.getOrderProp()] = 'descend';
        // selectedRowKeys

        this.selectedRowKeys = [];

        // 查询参数

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
      return this.loading;
    },
    onSubTableChange(
      pagination,

      filters,

      sorter,
    ) {},
    fetchData() {
      const { page, limit } = this;

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

      this.loading = true;

      request
        .get({
          mock: true,
          path: require('./mock.js').default,
        })
        .then((result) => {
          this.dataSource = {
            total: result.total,

            list: result.list,
          };

          this.loading = false;
        });
    },
    onSearch() {
      const { name, sex, startTime, endTime, deptCode, homeTown, width, height } = this;

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
