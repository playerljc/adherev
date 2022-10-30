<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="ConfigProvider">
      <p>全局配置</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <div>
          <a-radio-group
            :value="lang"
            :options="[
              { label: '中文', value: 'zh_CN' },
              { label: '英文', value: 'en_US' },
              { label: '葡语', value: 'pt_PT' },
            ]"
            @change="change"
          />

          <adv-configprovider :intl="intl" @propsChange="onPropsChange">
            <template v-slot:default>
              <adv-tablegridlayout :data="data">
                <template v-slot:default v-if="true"></template>

                <template v-slot:UserNameLabel>
                  <adv-tablegridlayout-label>{{ $tv('姓名') }}：</adv-tablegridlayout-label>
                </template>

                <template v-slot:UserNameValue>
                  <adv-tablegridlayout-value> 张三 </adv-tablegridlayout-value>
                </template>

                <template v-slot:SexLabel>
                  <adv-tablegridlayout-label>{{ $tv('性别') }}：</adv-tablegridlayout-label>
                </template>
                <template v-slot:SexValue>
                  <adv-tablegridlayout-value> 男 </adv-tablegridlayout-value>
                </template>

                <template v-slot:BirthdayLabel>
                  <adv-tablegridlayout-label>{{ $tv('出生年月') }}：</adv-tablegridlayout-label>
                </template>
                <template v-slot:BirthdayValue>
                  <adv-tablegridlayout-value> 2020-10-09 </adv-tablegridlayout-value>
                </template>

                <template v-slot:AddressLabel>
                  <adv-tablegridlayout-label>{{ $tv('详细地址') }}：</adv-tablegridlayout-label>
                </template>
                <template v-slot:AddressValue>
                  <adv-tablegridlayout-value>
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </adv-tablegridlayout-value>
                </template>
              </adv-tablegridlayout>
            </template>
          </adv-configprovider>
        </div>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
import en_US from '@/locales/en_US';
import pt_PT from '@/locales/pt_PT';
import zh_CN from '@/locales/zh_CN';

const locales = {
  en_US,
  zh_CN,
  pt_PT,
};

export default {
  data() {
    return {
      data: [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [, 'auto', , 'auto', , 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Sex',
              label: 'SexLabel',
              value: 'SexValue',
            },
            {
              key: 'Birthday',
              label: 'BirthdayLabel',
              value: 'BirthdayValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ],
      lang: 'zh_CN',
      scrollEl: null,
      codeBoxPanelConfig: [
        {
          id: 'p1',
          name: '列表中使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '列表中使用',
              info: '可以动画的回到列表的顶端',
            },
          },
          codeText: `
        <template>
          <div>
            <a-radio-group
              :value="lang"
              :options="[
                { label: '中文', value: 'zh_CN' },
                { label: '英文', value: 'en_US' },
                { label: '葡语', value: 'pt_PT' },
              ]"
              @change="change"
            />

            <adv-configprovider :intl="intl">
              <template v-slot:default>
                <adv-tablegridlayout :data="data">
                  <template v-slot:default v-if="true"></template>

                  <template v-slot:UserNameLabel>
                    <adv-tablegridlayout-label>{{ $tv('姓名') }}：</adv-tablegridlayout-label>
                  </template>

                  <template v-slot:UserNameValue>
                    <adv-tablegridlayout-value> 张三 </adv-tablegridlayout-value>
                  </template>

                  <template v-slot:SexLabel>
                    <adv-tablegridlayout-label>{{ $tv('性别') }}：</adv-tablegridlayout-label>
                  </template>
                  <template v-slot:SexValue>
                    <adv-tablegridlayout-value> 男 </adv-tablegridlayout-value>
                  </template>

                  <template v-slot:BirthdayLabel>
                    <adv-tablegridlayout-label>{{ $tv('出生年月') }}：</adv-tablegridlayout-label>
                  </template>
                  <template v-slot:BirthdayValue>
                    <adv-tablegridlayout-value> 2020-10-09 </adv-tablegridlayout-value>
                  </template>

                  <template v-slot:AddressLabel>
                    <adv-tablegridlayout-label>{{ $tv('详细地址') }}：</adv-tablegridlayout-label>
                  </template>
                  <template v-slot:AddressValue>
                    <adv-tablegridlayout-value>
                      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                    </adv-tablegridlayout-value>
                  </template>
                </adv-tablegridlayout>
              </template>
            </adv-configprovider>
          </div>
        </template>

        <script>
          import en_US from '@/locales/en_US';
          import pt_PT from '@/locales/pt_PT';
          import zh_CN from '@/locales/zh_CN';

          const locales = {
            en_US,
            zh_CN,
            pt_PT,
          };

          export default {
             data() {
               return {
               }
             },
             computed: {
              intl() {
                return {
                  lang: this.lang,
                  locales,
                };
              },
            },
            methods: {
              change(e) {
                this.lang = e.target.value;
              },
            }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'intl',
              desc: '国际化',
              type: `
                  {
                    lang: 'en_US' | 'zh_CN' | 'pt_PT';
                    locales: object;
                    prefix: string;
                  }
                `,
              defaultVal: `{
                  lang: 'zh_CN',
                  locales: {},
                  prefix: 'local',
                }`,
            },
            {
              params: 'intlInit',
              desc: '国际化初始化完事件',
              type: `Function`,
              defaultVal: ``,
            },
            {
              params: 'propsChange',
              desc: '属性变化事件',
              type: `Function`,
              defaultVal: ``,
            },
          ],
        },
      ],
    };
  },
  computed: {
    intl() {
      return {
        lang: this.lang,
        locales,
      };
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {
    change(e) {
      this.lang = e.target.value;
    },
    onPropsChange() {
      console.log('onPropsChange');
    },
  },
};
</script>
