# 概述

&ensp;&ensp;这个工程中包含很多个 npm 包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有 UI 相关、功能相关、GIS 相关,使用的是 React 技术，有的可能是对 ant-design(还有其他第三方的库)的二次封装

# 兼容要求

- 支持 vue2.x
- 支持 ant-design-vue
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)
- 支持 ie10 以上

# 分支要求

- develop 是不支持 IE 的分支
  - 使用 vue2.x
  - ant-design-vue 使用 1.x
  - tsconfig 的 target 可以给出 es6
  - 不支持 ie 的版本号应该
  - vx.x.x
- feature 是支持 IE 的分支
  - 使用 vue2.x
  - ant-design-vue 使用 1.x
  - tsconfig 的 target 只能给出 es5
  - vx.x.x-polyfill

# 线上地址(临时)

[http://www.hongyf.cn:8081/](http://www.hongyf.cn:8081/)

# 组件列表

# 移植

- [@baifendian/adherev-util-drag](#@baifendian/adherev-util-drag)
- [@baifendian/adherev-util-droppable](#@baifendian/adherev-util-droppable)
- [@baifendian/adherev-util-resizeable](#@baifendian/adherev-util-resizeable)
- [@baifendian/adherev-util-selectable](#@baifendian/adherev-util-selectable)

# 自创

# 分配

- [@baifendian/adherev-ui-imageviwer](#@baifendian/adherev-ui-imageviwer)
- [@baifendian/adherev-ui-form](#@baifendian/adherev-ui-form)
- [@baifendian/adherev-ui-echarts](#@baifendian/adherev-ui-echarts)
- [@baifendian/adherev-ui-g6](#@baifendian/adherev-ui-g6)
- [@baifendian/adherev-util-regex](#@baifendian/adherev-util-regex)
- [@baifendian/adherev-util-clientdetection](#@baifendian/adherev-util-clientdetection)

# 分配待定

- [@baifendian/adherev-ui-adaptivelayout](#baifendian/adherev-ui-adaptivelayout)
- [@baifendian/adherev-ui-table](#@baifendian/adherev-ui-table)
- [@baidendian/adherev-ui-kvinfo](#@baidendian/adherev-ui-kvinfo)
- [@baifendian/adherev-util-moment](#@baifendian/adherev-util-moment)
- [@baifendian/adherev-ui-datepicker](#@baifendian/adherev-ui-datepicker)
- [@baifendian/adherev-ui-tooltip](#@baifendian/adherev-ui-tooltip)
- [@baifendian/adherev-ui-icon](#@baifendian/adherev-ui-icon)
- [@baifendian/adherev-util-communication-sse](#@baifendian/adherev-util-communication-sse)
- [@baifendian/adherev-util-communication-websocket](#@baifendian/adherev-util-communication-websocket)
- [@baifendian/adherev-util-communication-postmessage](#@baifendian/adherev-util-communication-postmessage)
- [@baifendian/adherev-ui-imgclip](#@baifendian/adherev-ui-imgclip)
- [@baifendian/adherev-ui-media](#@baifendian/adherev-ui-media)
- [@baifendian/adherev-system-lint](#@baifendian/adherev-system-lint)

# 完成

- [@baifendian/adherev-ui-globalindicator](#@baifendian/adherev-ui-globalindicator) - ok
- [@baifendian/adherev-ui-historyback](#@baifendian/adherev-ui-historyback) - ok
- [@baifendian/adherev-ui-permission](#@baifendian/adherev-ui-permission) - ok
- [@baifendian/adherev-ui-prompt-successprompt](#@baifendian/adherev-ui-prompt-successprompt) - ok
- [@baifendian/adherev-ui-prompt-errorprompt](#@baifendian/adherev-ui-prompt-errorprompt) - ok
- [@baifendian/adherev-ui-prompt-warnprompt](#@baifendian/adherev-ui-prompt-warnprompt) - ok
- [@baifendian/adherev-ui-space](#baifendian/adherev-ui-space) - ok
- [@baifendian/adherev-ui-split](#baifendian/adherev-ui-split) - ok
- [@baifendian/adherev-ui-spin](#baifendian/adherev-ui-spin) - ok
- [@baifendian/adherev-ui-conditionalrender](#baifendian/adherev-ui-conditionalrender) - ok
- [@baifendian/adherev-ui-imagelazy](#baifendian/adherev-ui-imagelazy) - ok
- [@baifendian/adherev-ui-messagedialog](#@baifendian/adherev-ui-messagedialog) - ok
- [@baifendian/adherev-ui-confirm-delconfirm](#@baifendian/adherev-ui-confirm-delconfirm) - ok
- [@baifendian/adherev-ui-confirm-importantconfirm](#@baifendian/adherev-ui-confirm-importantconfirm) - ok
- [@baifendian/adherev-ui-css](#@baifendian/adherev-ui-css) - ok
- [@baifendian/adherev-ui-suspense](#@baifendian/adherev-ui-suspense) - ok
- [@baifendian/adherev-ui-tableheadsearch](#@baifendian/adherev-ui-tableheadsearch) - ok
- [@baifendian/adherev-ui-hooks](#@baifendian/adherev-ui-hooks) - ok
- [@baifendian/adherev-ui-olmap](#@baifendian/adherev-ui-olmap) - ok
- [@baifendian/adherev-ui-flexlayout](#@baifendian/adherev-ui-flexlayout) - ok
- [@baifendian/adherev-ui-splitlayout](#@baifendian/adherev-ui-splitlayout) - ok
- [@baifendian/adherev-ui-stickuplayout](#@baifendian/adherev-ui-stickuplayout) - ok
- [@baifendian/adherev-ui-surnames](#@baifendian/adherev-ui-surnames) - ok
- [@baifendian/adherev-ui-sliderscale](#@baifendian/adherev-ui-sliderscale) - ok
- [@baifendian/adherev-ui-revolving](#@baifendian/adherev-ui-revolving) - ok
- [@baifendian/adherev-ui-scrollload](#@baifendian/adherev-ui-scrollload) - ok
- [@baifendian/adherev-ui-jdcategorytab](#@baifendian/adherev-ui-jdcategorytab) - ok
- [@baifendian/adherev-ui-cascadecompared](#@baifendian/adherev-ui-cascadecompared) - ok
- [@baifendian/adherev-ui-slidelayout](#@baifendian/adherev-ui-slidelayout) - ok
- [@baifendian/adherev-ui-contextmenu](#@baifendian/adherev-ui-contextmenu) - ok
- [@baifendian/adherev-ui-fontsizesetting](#@baifendian/adherev-ui-fontsizesetting) - ok
- [@baifendian/adherev-ui-searchtable](#@baifendian/adherev-ui-searchtable) - ok
- [@baifendian/adherev-ui-formitemcreator](#@baifendian/adherev-ui-formitemcreator) - ok
- [@baifendian/adherev-ui-tablelist](#@baifendian/adherev-ui-tablelist) - ok
- [@baifendian/adherev-ui-popup](#@baifendian/adherev-ui-popup) - ok
- [@baifendian/adherev-ui-backtopanimation](#@baifendian/adherev-ui-backtopanimation) - ok
- [@baifendian/adherev-ui-pullrefresh](#@baifendian/adherev-ui-pullrefresh) - ok
- [@baifendian/adherev-ui-notification](#@baifendian/adherev-ui-notification) - ok
- [@baifendian/adherev-ui-swipeout](#@baifendian/adherev-ui-swipeout) - ok
  
- [@baifendian/adherev-util-memoized](#baifendian/adherev-util-watchmemoized)- ok
- [@baifendian/adherev-util-communication-ajax](#@baifendian/adherev-util-communication-ajax) - ok
- [@baidendian/adherev-util-adapterscreen](#@baidendian/adherev-util-adapterscreen) - ok
- [@baifendian/adherev-util-decorators](#@baifendian/adherev-util-decorators) - ok
- [@baifendian/adherev-util-dict](#@baifendian/adherev-util-dict) - ok
- [@baifendian/adherev-util-emitter](#@baifendian/adherev-util-emitter) - ok
- [@baifendian/adherev-util-intl](#@baifendian/adherev-util-intl) - ok
- [@baifendian/adherev-util-notnull](#@baifendian/adherev-util-notnull) - ok
- [@baifendian/adherev-util-preferences](#@baifendian/adherev-ui-preferences) - ok
- [@baifendian/adherev-util-resource](#@baifendian/adherev-util-resource) - ok
- [@baifendian/adherev-util](#@baifendian/adherev-util) - ok

## @baifendian/adherev-system-lint

eslint 相关，我们定义的规范中看哪些能做成 eslint 的规则

## @baifendian/adherev-util-communication-ajax

Ajax 通信

- 对不同的 methods 进行封装
- 封装公共前缀
- 支持 mock 数据
- 支持超时处理(cancal 掉)
- 支持 loading 操作
- 支持系统管理 404、402 等的截获操作，可以有默认操作，也可以自动以操作
- 支持提示信息的国际化
- 支持自定义和提供缺省功能的返回值数据属性的定义(如：code、data 和 message)
- 提供相应的 all 操作

## @baifendian/adherev-util-communication-sse

服务器端推送

- 支持服务器端的推送
- 支持浏览器能力监测(如果浏览器不支持给出有好的提示，或者降级处理)
- 支持结构化数据

## @baifendian/adherev-util-communication-websocket

websocket

- 支持纯文本传输
- 支持结构化数据传输
- 支持链接、断开和心跳等常规操作

## @baifendian/adherev-util-communication-postmessage

跨文档消息传递

## @baifendian/adherev-ui-decorators

装饰器

- ReactErrorBoundaries(React 边界处理，防止白屏操作)
  - class 组件使用@方式使用
  - 函数组件使用高阶函数方式使用
  - 可以自定义错误的 UI
- 其他的装饰器还没想好

## @baifendian/adherev-ui-confirm-delconfirm

删除确认提示

- 删除的时候弹出提示，确认后在执行操作

## @baifendian/adherev-ui-confirm-importantconfirm

重要操作确认提示

- 进行重要操作的时候弹出，确认后在执行操作

## @baifendian/adherev-util-dict

字典

## @baifendian/adherev-util-emitter

观察者模式

- 发布
- 订阅
- 解除订阅

## @baifendian/adherev-ui-globalindicator

全局的遮罩

- 可以遮罩任意元素
- 遮罩是无侵入的
- 可以自定义 loading 文本和透明度
- 可以取消

## @baifendian/adherev-ui-historyback

历史记录返回操作

- 如果历史栈中没有记录则返回主页，或者可以自定义
- 如果可以返回则进行返回

## @baifendian/adherev-ui-hooks

常用的 hooks 功能，可以整合阿里的[ahooks](https://ahooks.js.org/zh-CN)

- use-first
- use-previous

## @baifendian/adherev-util-intl

基于 react-intl-universal 的国际化组件

- 支持 react-intl-universal 所有的方法
- 支持按中文获取国际化词条
- 支持自动生成词条的 key

## @baifendian/adherev-ui-messagedialog

对 ant-design 的<Model>进行封装

- 支持使用 open 方式打开
- 支持 Modal 原始方法
- 支持预定义 Alert、Confirm
- 不与变量进行绑定，开箱即用的功能

## @baifendian/adherev-util-notnull

一个永远都不为空的操作

- 包裹对象后在使用对象的链式调用永远都不会 null

## @baifendian/adherev-ui-olmap

对 openlayers 的封装

- 包括常用的形状绘制
- 支持 React 相关的组件
- 还一些常用方法

## @baifendian/adherev-ui-permission

权限的组件

- 设置所有权限
- 传入权限(支持多个)
- 可以自定义无权限的 UI

## @baifendian/adherev-ui-preferences

对 sessionStore 和 localStore 进行的封装

- 支持字符串的写入和拿出
- 支持对象的写入和拿出

## @baifendian/adherev-ui-prompt-successprompt

成功的提示(就是为了全局统一)

## @baifendian/adherev-ui-prompt-errorprompt

错误的提示(就是为了全局统一)

## @baifendian/adherev-ui-prompt-warnprompt

警告的提示(就是为了全局统一)

## @baifendian/adherev-ui-table

基于 antd-design 的 Table 进行的封装

- 序号自动生成(全局和本页)
- 提示信息

## @baifendian/adherev-ui-tableheadsearch

基于 antd-design 的 Table 的列头筛选

## @baifendian/adherev-ui-searchtable

一种查询表格的通用模式(如果 UI 没有明确给出查询表格的 UI，就可以用这个默认模式)

- 提供渲染查询的 UI
- 暴露最小集的事件让子类进行重写

## @baifendian/adherev-ui-suspense

数据加载单元(如第一次是骷髅骨架，其他是 loading)，有数据加载的单元，第一次是骷髅骨架(或其他)mount，更新是 loading

## @baifendian/adherev-util-clientdetection

客户端监测，一般都是浏览器的能力监测和浏览器嗅探

## @baifendian/adherev-util-regex

实用的正则校验

## @baifendian/adherev-util-errorcatch

统一的错误机制处理(关键位置的异常捕获，可以进行异常的封装)

- 不能让无属性，未定义这种错误在前段出现，关键代码的错误校验
- 可以使用注解的方式

## @baifendian/adherev-ui-tooltip

目的在于统一可以自由的进行切换

## @baifendian/adherev-ui-form

- 表单配置（通过 JSON 形式配置常用的表单功能）
- 表单封装（4.0 之前和 4.0 两个版本）
- 能完美和表单结合的动态表单，让其成为单一的表单项
- 表单的 rule

## @baifendian/adherev-ui-icon

图标组件

## @baifendian/adherev-util-moment

对 moment 的封装

## @baifendian/adherev-ui-imgclip

图像剪裁组件

## @baifendian/adherev-util-resource

常用资源管理

- 常用字典，如男女，是否等

## @baifendian/adherev-ui-echarts

echarts 常用图表的封装

## @baifendian/adherev-util

所有库的公共方法

- 如对象操作等最公用的东西，类似于 lodash 库中的内容或 qs 的内容

## @baidendian/adherev-util-adapterscreen

对屏幕的缩放进行适配的操作

## @baidendian/adherev-ui-kvinfo

基于 key/value 形式的详情显示

## @baifendian/adherev-ui-datepicker

基于 ant-design 的 DatePicker 控件进行指定情况的封装

- 如只能选择到什么时间范围
- 提供当天、上一周、上一月，全年等 UI

## @baifendian/adherev-ui-media

媒体播放

- http 的 vlc 的播放
- rtmp 的播放

## @baifendian/adherev-ui-imageviwer

图片浏览器，点击图片后的方法效果，图片方法操作，还支持下载等

## @baifendian/adherev-ui-adaptivelayout

一个自适应高度和宽度的布局

## @baifendian/adherev-ui-css

提供很多公共的样式

- 普通样式的重置
- ant-design 样式的重置
- 分辨率的控制
- 常用的样式做成函数和混入

## @baifendian/adherev-ui-space

无侵入性的上下留白和左右留白

## @baifendian/adherev-ui-split

无侵入性的竖线和横线分割

## @baifendian/adherev-ui-spin

无侵入的 loading

## @baifendian/adherev-ui-conditionalrender

条件渲染

## @baifendian/adherev-ui-imagelazy

图片懒加载

## @baifendian/adherev-ui-flexlayout

实现 flex 布局的组件

## @baifendian/adherev-ui-splitlayout

实现分割窗体的布局，可以拉动调整大小

## @baifendian/adherev-ui-slidelayout

实现抽屉布局

## @baifendian/adherev-ui-stickuplayout

滚动固定头额布局

## @baifendian/adherev-ui-sliderscale

刻度盘

## @baifendian/adherev-ui-cascadecompared

级联比较

## @baifendian/adherev-ui-fontsizesetting

字体设置

## @baifendian/adherev-ui-jdcategorytab

京东的面板

## @baifendian/adherev-ui-scrollload

滚动加载

## @baifendian/adherev-ui-revolving

走马灯

## @baifendian/adherev-ui-surnames

姓名面板

## baifendian/adherev-util-watchmemoized

对值的监控

- 支持 all - 每一个依赖项都改变了才执行回调
- 支持 race - 只要有一个依赖项改变了就执行回调缓存
- 支持函数调用的 memoized 在函数对象中使用符号来存储一些信息
- 支持表达式求职的 memoized 依赖项列表和函数

## @baifendian/adherev-ui-contextmenu

上下文菜单，可以移动后显示子菜单那种

## @baifendian/adherev-util-drag

功能

- 拖拽移动一个元素
- 正常拖拽
- clone 的拖拽
- 拖拽中地图的显示
- 辅助线
- 触发的事件

## @baifendian/adherev-util-droppable

功能:

- 从哪拖到哪,怎么放置(谁能拖，谁能放，怎么放)

- 画布都有哪些扩展，移动到 target 的时候是有限制的，不能拖出无限滚动，放的时候是自由放置拖动到 target 里的元素可以自由移动

测试:

log:

- 在 el 范围内拖动，而不是全局拖动
- 加入如果 source 和 target 为包含关系，则不能放入

- 无限拖动，画布跟着滚动 (在父容器里拖动的时候，拖动到目标容器(ct-drag-target)的时候)
- 只想移动，根本不想放入(在 el 范围内自由的移动)
- Axure 是鼠标不能出 target 的范围，不管是从左拽进来，还是在 target 自由移动，都是这样的现在可以实现，但是不是自动的需要鼠标移动才能更新滚动条的位置

## @baifendian/adherev-util-selectable

功能:

- 在一个区域内进行选取，区域内带有 ct-selectable-item 样式的元素会参与计算
- 圈选中获取选中和非选中的元素，选取结束获取选取的元素

## @baifendian/adherev-util-resizeable

功能:

- 上、下、左、右、左上、左下、右上、右下 8 个方向的 resizeable
- 一组中多个元素 resizeable
- 多组都可以 resizeable
- 无线扩展

## @baifendian/adherev-ui-g6
antv-g6的封装
