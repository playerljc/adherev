<template>
  <ScrollFooterPanel>
    <div :class="$style.Wrap">
      <article class="ant-typography">
        <h2 class="ant-typography">概述</h2>
        <div class="ant-typography">
          <span class="ant-typography">
            这个工程中包含很多个npm包(整体也是一个npm包)，这些包都是在平时工作中沉淀出来的一些可以高度复用的组件，有UI相关、工具相关、GIS相关,使用的是Vue技术，有的可能是对ant-design-vue(还有其他第三方的库)的二次封装
          </span>
        </div>
        <h2 class="ant-typography">特性</h2>
        <div class="ant-typography">
          <ul>
            <li>- 支持vue(3.x)</li>
            <li>- 支持ant-design-vue(3.x)</li>
            <li>- 支持国际化</li>
            <li>- 支持修改主题</li>
            <li>- 支持动态引入(babel-plugin-import)</li>
            <li>- 每一个子包都可以单独安装</li>
            <li>- 使用typescript编写</li>
          </ul>
        </div>
        <h2 class="ant-typography">兼容环境</h2>
        <div class="ant-typography">
          <ul>
            <li>- 现代浏览器，不支持IE</li>
            <li>- 每一个子包对IE的兼容性都不一样需要具体看</li>
          </ul>
        </div>
        <h2 class="ant-typography">安装</h2>
        <div class="ant-typography"><code>npm i @baifendian/adherev@next --save</code></div>
        <div class="ant-typography"><code>yarn add @baifendian/adherev@next</code></div>
      </article>

      <article class="ant-typography" style="margin: 20px 0">
        <h2 class="ant-typography">动态引入</h2>
        <div class="ant-typography">
          需要在webpack构建中加入如下配置,如果进行了动态引入，则就不需要单独引入
          <code>@baifendian/adherev/lib/index.less</code>和<code
            >ant-design-vue/dist/antd.less</code
          >
          <br />
          如果没有进行动态引入则需要单独引入<code>@baifendian/adherev/lib/index.less</code>和
          <code>ant-design-vue/dist/antd.less</code>
        </div>
      </article>
      <adv-playground :code-text="code1" :default-expand="true" lang="javascript" />

      <!--<article class="ant-typography" style="margin: 20px 0">
        <h2>国际化说明</h2>
        <div class="ant-typography">
          因为有些组件依赖于@baifendian/adhere中的组件，此组件中国际化使用的是adhere-util-intl，而ahderev使用的是adherev-util-intl组件，<br />
          所以需要在webpack中加入alias的配置使其指向adherev-util-intl国际化组件
        </div>
      </article>
      <playground :code-text="code2" :default-expand="true" lang="javascript" />-->

      <article class="ant-typography" style="margin: 20px 0">
        <h2>UMD使用</h2>
        <div class="ant-typography">
          <p>
            umd需要2处理，第一处是HTML模板中需要进行一些必要库umd的外部引入，第二处是需要在webpack中加入一些externals的设置
          </p>
          <p style="color: red">
            注意：使用umd的时候不能使用babel-plugin-import插件，webpack的alias中不能进行vue的设置
          </p>
        </div>
      </article>
      <adv-playground-mulit :defaultConfig="code3" :default-expand="true" lang="javascript" />
    </div>
  </ScrollFooterPanel>
</template>

<script>
import ScrollFooterPanel from '@/lib/ScrollFooterPanel';

export default {
  displayName: 'introduction',
  components: {
    ScrollFooterPanel,
  },
  data() {
    return {
      code1: `
        [
          'import',
          {
            libraryName: '@baifendian/adhere',
            transformToDefaultImport: true,
            libraryDirectory: 'es',
            style: true,
          },
          'adhere',
        ],
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
      // code2: `
      //   /*  加入['@baifendian/adhere-util-intl'] = adherev-util-intl包的路径  */
      //   webpackConfig.resolve.alias['@baifendian/adhere-util-intl'] = path.join(
      //   __dirname,
      //   'node_modules/'@baifendian/adherev/node_modules/@baifendian/adherev-util-intl',
      // )
      // `,
      code3: [
        {
          type: 'CodePanel',
          title: '模板HTML文件',
          codeText: `
  <link href="https://cdn.jsdelivr.net/npm/ant-design-vue@1.7.6/dist/antd.min.css" rel="stylesheet">
  <link href="/assets/umd/adherev.min.css" rel="stylesheet">
  <script src="https://momentjs.com/downloads/moment-with-locales.min.js" crossorigin><\/script>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/ant-design-vue@1.7.6/dist/antd-with-locales.min.js"><\/script>
  <script src="https://cdn.jsdelivr.net/npm/@form-create/ant-design-vue@2.5.7/dist/form-create.min.js"><\/script>
  <script src="/assets/umd/adherev.bundle.js"><\/script>
          `,
          lang: 'html',
        },
        {
          type: 'CodePanel',
          title: 'webpack配置',
          codeText: `
  webpackConfig.externals = {
    '@baifendian/adherev': 'adherev',
    'ant-design-vue': 'antd',
    vue: 'Vue',
    moment: 'moment',
    '@form-create/ant-design-vue': 'formCreate',
  };
          `,
          lang: 'javascript',
        },
      ],
    };
  },
};
</script>

<style lang="less" module>
.Wrap {
  padding: 20px;
}
</style>
