<template>
  <div :class="$style.Wrap">
    <article class="ant-typography">
      <h2 class="ant-typography">概述</h2>
      <div class="ant-typography">
        <span class="ant-typography">
          这个工程中包含很多个 npm 包，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有 UI
          相关、功能相关、GIS 相关,使用的是 Vue 技术，有的可能是对
          ant-design-vue(还有其他第三方的库)的二次封装
        </span>
      </div>
      <h2 class="ant-typography">兼容</h2>
      <div class="ant-typography">
        <ul>
          <li>- 支持vue2.x</li>
          <li>- 支持ant-design-vue</li>
          <li>- 支持国际化</li>
          <li>- 支持修改主题</li>
          <li>- 支持动态引入(babel-plugin-import)</li>
        </ul>
      </div>
      <h2 class="ant-typography">安装</h2>
      <div class="ant-typography"><code>npm i @baifendian/adherev --save</code></div>
      <h2 class="ant-typography">动态引入</h2>
    </article>

    <article class="ant-typography" style="margin-bottom: 20px">
      <div class="ant-typography">
        需要在webpack构建中加入如下配置,如果进行了动态引入，则不就需要要单独引入
        <code>@baifendian/adherev/lib/index.less</code>和<code>ant-design-vue/dist/antd.less</code>
        <br />
        如果没有进行动态引入则需要单独引入<code>@baifendian/adherev/lib/index.less</code>和
        <code>ant-design-vue/dist/antd.less</code>
      </div>
    </article>

    <playground :code-text="code1" :default-expand="true" lang="javascript" />
  </div>
</template>

<script>
import Playground from '@/lib/Playground/Playground';

export default {
  components: { Playground },
  data() {
    return {
      code1: `
        [
          'import',
          {
            libraryName: '@baifendian/adherev',
            transformToDefaultImport: true,
            style: true,
          },
          'adherev',
        ],
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            style: true,
          },
          'ant-design-vue',
        ],
      `,
    };
  },
};
</script>

<style lang="less" module>
.Wrap {
  padding: 20px;
}
</style>
