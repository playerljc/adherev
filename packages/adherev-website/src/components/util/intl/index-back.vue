<template>
  <div class="Page">
    <h1>vue-i18n的国际化组件</h1>
    <ul>
      <li>- 支持vue-i18n所有的方法</li>
      <li>- 支持按中文获取国际化词条</li>
      <li>- 支持自动生成词条的key</li>
    </ul>

    <adv-space />

    <function-props
      :border="true"
      :title="'方法'"
      :data="[
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
      ]"
    />

    <adv-space />

    <function-props
      :border="true"
      :title="'Vue实例方法'"
      :data="[
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
      ]"
    />

    <h2>基本使用</h2>
    <playground :code-text="code" lang="javascript" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      code: `
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
    };
  },
};
</script>
