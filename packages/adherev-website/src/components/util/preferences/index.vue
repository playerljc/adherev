<template>
  <adv-playground-page :scrollEl="scrollEl" ref="ref">
    <adv-playground-page-section title="Preferences">
      <h1>sessionStore和localStore进行的封装</h1>
      <ul>
        <li>- 支持字符串的写入和拿出</li>
        <li>- 支持对象的写入和拿出</li>
      </ul>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <a-button type="primary" @click="onTrigger">放入和拿出</a-button>
        <p id="PreferencesConsole" />
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />
  </adv-playground-page>
</template>

<script>
import { Preferences } from '@baifendian/adherev';

export default {
  displayName: 'preferences',
  data() {
    return {
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '基本的使用',
          cardProps: {
            description: {
              title: '基本的使用',
              info: '基本的使用',
            },
          },
          type: 'PlayGround',
          codeText: `
        <template>
          <h2>基本的使用</h2>
          <a-button type="primary" @click="onTrigger">放入和拿出</a-button>
          <p id="PreferencesConsole" />
        </template>
        <script>
         import { Preferences } from '@baifendian/adherev';

         export default {
            methods: {
              onTrigger() {
                Preferences.putStringByLocal('a', 'a');
                Preferences.putObjectByLocal('b', { a: 1, b: 2 });

                Preferences.putStringBySession('a', 'a');
                Preferences.putObjectBySession('b', { a: 1, b: 2 });

                const el = document.getElementById('PreferencesConsole');

                el.innerHTML = \`
                        ${Preferences.getStringByLocal('a')}</br>
                        ${JSON.stringify(Preferences.getObjectByLocal('b'))}</br>
                        ${Preferences.getStringBySession('a')}</br>
                        ${JSON.stringify(Preferences.getObjectBySession('b'))}</br>
                      \`;
                        }
                      }
         }
        <\/script>
      `,
          childrenSlot: 'p1',
        },
      ],
      apiConfig: [
        {
          border: true,
          title: '方法',
          data: [
            {
              name: 'putStringByLocal',
              desc: '本地持久化一对键值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'value',
                  desc: 'value',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStringByLocal',
              desc: '本地取出值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'string',
              returnDesc: '',
            },
            {
              name: 'putObjectByLocal',
              desc: '本地持久化一对键值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'object',
                  desc: 'object',
                  type: 'Object',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getObjectByLocal',
              desc: '本地取出值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'removeByLocal',
              desc: '本地删除一个键值',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'putStringBySession',
              desc: '会话持久化一对键值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'value',
                  desc: 'value',
                  type: 'string',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'void',
              returnDesc: '',
            },
            {
              name: 'getStringBySession',
              desc: '会话取出值(值为String)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'String',
              returnDesc: '',
            },
            {
              name: 'putObjectBySession',
              desc: '会话持久化一对键值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
                {
                  name: 'object',
                  desc: 'object',
                  type: 'Object',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
            {
              name: 'getObjectBySession',
              desc: '会话取出值(值为对象)',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: 'Object',
              returnDesc: '',
            },
            {
              name: 'removeBySession',
              desc: '会话删除一个键值',
              modifier: 'public',
              params: [
                {
                  name: 'key',
                  desc: 'key',
                  type: 'String',
                  defaultVal: '',
                  required: 'true',
                },
              ],
              returnType: '',
              returnDesc: '',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.scrollEl = this?.$refs?.ref?.$el?.parentElement?.parentElement;
  },
  methods: {
    onTrigger() {
      Preferences.putStringByLocal('a', 'a');
      Preferences.putObjectByLocal('b', { a: 1, b: 2 });

      Preferences.putStringBySession('a', 'a');
      Preferences.putObjectBySession('b', { a: 1, b: 2 });

      const el = document.getElementById('PreferencesConsole');

      el.innerHTML = `
              ${Preferences.getStringByLocal('a')}</br>
              ${JSON.stringify(Preferences.getObjectByLocal('b'))}</br>
              ${Preferences.getStringBySession('a')}</br>
              ${JSON.stringify(Preferences.getObjectBySession('b'))}</br>
            `;
    },
  },
};
</script>
