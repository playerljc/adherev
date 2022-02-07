<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="vue-i18n的国际化组件">
      <ul>
        <li>- 支持vue-i18n所有的方法</li>
        <li>- 支持按中文获取国际化词条</li>
        <li>- 支持自动生成词条的key</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig" />

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本使用',
          lang: 'javascript',
          defaultExpand: true,
          cardProps: {
            description: {
              title: '基本使用',
              info: '基本使用',
            },
          },
          type: 'PlayGround',
          codeText: `
        import Vue from 'vue';
        import {Intl} from '@baifendian/adherev';

        Intl.use(Vue);

        new Vue({
          el: '#container',
          i18n: Intl({
            Ii8nOptions:{
            locale: 'zh_CN',
              messages:{
                zh_CN: require('./zh_CN.js').default,
                pt_PT: require('./pt_PT.js').default,
                en_US: require('./en_US.js').default
              }
            },
            prefix: 'local',
          }),
        });


        // zh_CN.js文件
        export default [
          'XXX系统',
        ];

        // pt_PT.js文件
        export default [
          'XXX系统',
        ];

        // en_US.js文件
        export default [
          'XXX系统',
        ];
      `,
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'tv',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'Path',
                  desc: '词条中的key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: '...values',
                  desc: '其他参数',
                  type: 'object',
                  defaultVal: 'string',
                  required: '国际化后的值',
                },
              ],
              returnType: 'string',
              returnDesc: '国际化后的值',
            },
            {
              name: 'tcv',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'Path',
                  desc: '词条中的key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: '...values',
                  desc: '其他参数',
                  type: 'object',
                  defaultVal: 'string',
                  required: '国际化后的值',
                },
              ],
              returnType: 'string',
              returnDesc: '国际化后的值',
            },
            {
              name: 'tev',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'Path',
                  desc: '词条中的key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: '...values',
                  desc: '其他参数',
                  type: 'object',
                  defaultVal: 'string',
                  required: '国际化后的值',
                },
              ],
              returnType: 'string',
              returnDesc: '国际化后的值',
            },
          ],
        },
        {
          border: true,
          title: 'Vue实例方法',
          data: [
            {
              name: '$tv',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'Path',
                  desc: '词条中的key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: '...values',
                  desc: '其他参数',
                  type: 'object',
                  defaultVal: 'string',
                  required: '国际化后的值',
                },
              ],
              returnType: 'string',
              returnDesc: '国际化后的值',
            },
            {
              name: '$tcv',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'Path',
                  desc: '词条中的key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: '...values',
                  desc: '其他参数',
                  type: 'object',
                  defaultVal: 'string',
                  required: '国际化后的值',
                },
              ],
              returnType: 'string',
              returnDesc: '国际化后的值',
            },
            {
              name: '$tev',
              desc: '',
              modifier: 'public',
              params: [
                {
                  name: 'Path',
                  desc: '词条中的key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: '...values',
                  desc: '其他参数',
                  type: 'object',
                  defaultVal: 'string',
                  required: '国际化后的值',
                },
              ],
              returnType: 'string',
              returnDesc: '国际化后的值',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {},
};
</script>
