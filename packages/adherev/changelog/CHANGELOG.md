# 1.0.4

***

2021-11-6

* **adherev-ui-searchtable**
  - getFetchListPropNameToFirstUpper自动生成
  - column支持权限设置(authorized)
  - 加入renderTableHeader渲染(表格头上方，查询条件下方)
  - 加入renderTableFooter渲染(表格下方,分页上方)
  - searchtableimplement.tsx加入getSearchParams方法获取所有查询参数
  - 加入fixedTableSpaceBetween配置项(两端固定(表格的头始终在上方，分页始终在下方)
  - 修改无数据时样式的错乱
  - 修改loading时的样式错乱
* **adherev-ui-suspense**
  - 加入super的render方法

# 1.0.3

***

2021-10-30

* **adherev-ui-css**
  - normalize-antd.less修改
* **adherev-ui-messagedialog**
  - BUG的修改
* **adherev-ui-searchtable**
  - 修改searchtableimplement.tsx的fetchData方法的传值BUG
  - 样式大写修改为小写
  - 加入getDataKey和getTotalKey方法
  - 把max-width的限制去掉
  - 关闭和展开查询条件加入默认状态和是否显示
  - 加入表格体fit和滚动
  - 加入表格固定列头，表格体滚动
  - 加入searchtableimplement.tsx的默认实现
* **adherev-util-browsersniff**
  - 加入@baifendian/adherev-util-browsersniff
* **adherev-util-validator**
  - 加入@baifendian/adherev-util-validator

# 1.0.2

***

2021-10-17

* **adherev-ui-historyback**
  - 加入火狐下不支持document.referrer
* **adherev-ui-searchtable**
  - 加入自定义序号列的渲染
  - 搜索栏加入展开和关闭功能
  - 加入Table的缺省传递props功能
* **adherev-util**
  - 加入url库
* **adherev-util-communication-ajax**
  - BUG的修改
* **adherev-util-intl**
  - 修改系统词条和用户词条的冲突
  - 加入新词条

# 1.0.1

***

2021-9-29

* **adherev-ui-bmap**
  - 加入@baifendian/adherev-ui-bmap
* **adherev-ui-css**
  - 加入switch.less
* **adherev-ui-flexlayout**
  - fixed和auto加入了getEl方法
* **adherev-ui-olmap**
  - 加入windLayer(风场)
* **adherev-ui-playground**
  - 加入@baifendian/adherev-ui-playground组件
* **adherev-ui-polygonselection**
  - 加入@baifendian/adhere-ui-polygonselection
* **adherev-ui-splitlayout**
  - onMouseup事件加入dragFinished事件触发
  - 加入FlexLayout的use
* **adherev-ui-surnames**
  - isTouch修改为从Util中调用
* **adherev-util**
  - math修改
  - 加入clientDetection客户端监测代码
* **adherev-util-domain**
  - 加入@baifendian/adherev-util-domain
* **adherev-util-intl**
  - 加入兼容@baifendian/adhere-util-intl的v方法
  - 加入新的国际化词条

# 1.0.0

***

2020-12-22

* 加入代码
