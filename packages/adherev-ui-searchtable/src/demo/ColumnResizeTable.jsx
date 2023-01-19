import Table from './table';

export default {
  mixins: [Table],
  methods: {
    getColumns() {
      return [
        {
          title: '姓名',
          // dataIndex: 'name',
          key: 'group',
          // align: 'center',
          // width: 200,
          // $resizable: true,
          children: [
            {
              title: '姓名1',
              dataIndex: 'name',
              key: 'name',
              align: 'center',
              width: 100,
              $resizable: true,
            },
            {
              title: '姓名2',
              dataIndex: 'width',
              key: 'width',
              align: 'center',
              width: 100,
              $resizable: true,
            }
          ]
        },
        {
          title: '性别',
          dataIndex: 'sex',
          key: 'sex',
          align: 'center',
          width: 200,
          scopedSlots: { customRender: 'sex' },
        },
        {
          title: '籍贯',
          dataIndex: 'homeTown',
          key: 'homeTown',
          align: 'center',
          width: 200,
        },
        {
          title: '出生年月',
          dataIndex: 'birthday',
          key: 'birthday',
          align: 'center',
          sorter: true,
          width: 200,
          sortOrder: this.sortOrder('birthday'),
          scopedSlots: { customRender: 'birthday' },
        },
        {
          title: '所在部门',
          dataIndex: 'deptName',
          key: 'deptName',
          align: 'center',
          width: 200,
        },
        {
          title: '身高',
          dataIndex: 'height',
          key: 'height',
          align: 'center',
          sorter: true,
          sortOrder: this.sortOrder('height'),
          width: 300,
        },
        // {
        //   title: '体重',
        //   dataIndex: 'width',
        //   key: 'width',
        //   align: 'center',
        //   sorter: true,
        //   sortOrder: this.sortOrder('width'),
        //   width: 300,
        // },
      ];
    },
  },
};
