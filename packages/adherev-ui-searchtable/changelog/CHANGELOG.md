# 1.0.12

***

2023-01-23

* routeListen修改
* FormItemGeneratorToDict引用的修改
* ProTableFactory的scopedSlots修改
* 去掉SearchForm及其附属组件使用TableGridLayout实现

# 1.0.11

***

2022-10-11

* table样式修改
* 加入onSearchPanelCollapseBefore和onSearchPanelCollapseAfter钩子
* searchfooteritem加入key
* onTableChange的BUG修改
* 加入renderSearchFormBefore和renderSearchFormAfter方法
* onClear加入Promise
* 加入getLimit方法
* 重置的修改
* SearchForm的children位置修改
* ColumnSetting修改
* 去掉SearchFrom组件，改用TableGridLayout
* 加入extend可以调用父类方法

# 1.0.10

***

2022-04-25

* 加入列拖动功能
* 加入列设置功能
* 加入表格密度设置功能
* 序号列命名修改

# 1.0.9

***

2022-04-05

* renderTableNumberColumn修改
* 跨页选取的支持

# 1.0.6

***

2021-11-13

* updatedEx的修改
* 分页没有时候的处理

# 1.0.5

***

2021-11-08

* 表格体横向滚动，头并没有一起跟着滚动
* updateExt的修改

# 1.0.4

***

2021-10-28

* getFetchListPropNameToFirstUpper自动生成
* column支持权限设置(authorized)
* 加入renderTableHeader渲染(表格头上方，查询条件下方)
* 加入renderTableFooter渲染(表格下方,分页上方)
* searchtableimplement.tsx加入getSearchParams方法获取所有查询参数
* 加入fixedTableSpaceBetween配置项(两端固定(表格的头始终在上方，分页始终在下方)
* 修改无数据时样式的错乱
* 修改loading时的样式错乱

# 1.0.3

***

2021-10-29

* 修改searchtableimplement.tsx的fetchData方法的传值BUG
* 样式大写修改为小写
* 加入getDataKey和getTotalKey方法
* 把max-width的限制去掉
* 关闭和展开查询条件加入默认状态和是否显示
* 加入表格体fit和滚动
* 加入表格固定列头，表格体滚动
* 加入searchtableimplement.tsx的默认实现

# 1.0.2

***

2021-10-12

* 加入自定义序号列的渲染
* 搜索栏加入展开和关闭功能
* 加入Table的缺省传递props功能

# 1.0.0

***

2020-12-22

* 加入代码
