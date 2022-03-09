# 简介
&ensp;&ensp;这个工程中包含很多个npm包(整体也是一个npm包)，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有UI相关、工具相关、GIS相关,使用的是Vue技术，有的可能是对ant-design-vue(还有其他第三方的库)的二次封装

# ✨ 特性
- 支持vue(3.x)
- 支持ant-design-vue(3.x)
- 支持国际化
- 支持修改主题
- 支持动态引入(babel-plugin-import)
- 每一个子包都可以单独安装
- 使用typescript编写

# 🖥 兼容环境
- 现代浏览器，不支持IE
- 每一个子包对IE的兼容性都不一样需要具体看

# 分支要求
- develop是不支持IE的分支
  - 使用 vue3.x
  - ant-design-vue使用1.x
  - tsconfig的target可以给出es6
  - 不支持ie的版本号应该
  - vx.x.x
- feature是支持IE的分支
  - 使用 vue3.x
  - ant-design-vue使用1.x
  - tsconfig的target只能给出es5
  - vx.x.x-polyfill

# 📦 安装
```javascript
npm install @baifendian/adherev --save
```

```javascript
yarn add @baifendian/adherev
```

# 线上地址(临时)
[http://49.232.163.126:8084/](http://49.232.163.126:8084/)
