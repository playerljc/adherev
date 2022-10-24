<template>
  <adv-playground-page :scrollEl="scrollEl" ref="wrapRef">
    <adv-playground-page-section title="TableGridLayout">
      <p>表格布局</p>
    </adv-playground-page-section>

    <adv-playground-page-code-box-section title="代码演示" :config="codeBoxPanelConfig">
      <template #p1>
        <adv-tablegridlayout :data="data1">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p2>
        <adv-tablegridlayout :data="data2">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p3>
        <adv-tablegridlayout :data="data3">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p4>
        <adv-tablegridlayout :bordered="true" :data="data4">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value colspan="3">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p5>
        <adv-tablegridlayout :bordered="true" :data="data5">
          <template #default v-if="true"></template>

          <template #UserName1Label>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserName1Value>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #Telephone1Label>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #Telephone1Value>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #Live1Label>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #Live1Value>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #Remark1Label>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #Remark1Value>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #Address1Label>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #Address1Value>
            <adv-tablegridlayout-value colspan="3">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,China
            </adv-tablegridlayout-value>
          </template>

          <template #UserName2Label>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserName2Value>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #Telephone2Label>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #Telephone2Value>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #Live2Label>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #Live2Value>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #Remark2Label>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #Remark2Value>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p6>
        <adv-tablegridlayout :bordered="true" :parity="true" :data="data6">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value colspan="3">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
      </template>

      <template #p7>
        <adv-space-group>
          <div>
            <a-radio
              @change="onDensityChange"
              :value="density"
              :options="[
                { label: 'default', value: 'default' },
                { label: 'middle', value: 'middle' },
                { label: 'small', value: 'small' },
              ]"
            >
            </a-radio>
          </div>

          <adv-tablegridlayout :bordered="true" :parity="true" :density="density" :data="data7">
            <template #default v-if="true"></template>

            <template #UserNameLabel>
              <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
            </template>
            <template #UserNameValue>
              <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
            </template>

            <template #TelephoneLabel>
              <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
            </template>
            <template #TelephoneValue>
              <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
            </template>

            <template #LiveLabel>
              <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
            </template>
            <template #LiveValue>
              <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
            </template>

            <template #RemarkLabel>
              <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
            </template>
            <template #RemarkValue>
              <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
            </template>

            <template #AddressLabel>
              <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
            </template>
            <template #AddressValue>
              <adv-tablegridlayout-value colspan="3">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </adv-tablegridlayout-value>
            </template>
          </adv-tablegridlayout>
        </adv-space-group>
      </template>

      <template #p8>
        <adv-space-group>
          <a-radio
            @change="onLayoutChange"
            :value="layout"
            :options="[
              { label: 'horizontal', value: 'horizontal' },
              { label: 'vertical', value: 'vertical' },
            ]"
          >
          </a-radio>

          <adv-conditionalrender :conditional="layout === 'vertical'">
            <template #default>
              <adv-tablegridlayout
                :bordered="true"
                :parity="true"
                :layout="'vertical'"
                :data="data8_1"
              >
                <template #default v-if="true"></template>

                <template #UserNameLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >UserName：</adv-tablegridlayout-label
                  >
                </template>
                <template #UserNameValue>
                  <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
                </template>

                <template #TelephoneLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >Telephone：</adv-tablegridlayout-label
                  >
                </template>
                <template #TelephoneValue>
                  <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
                </template>

                <template #LiveLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >Live：</adv-tablegridlayout-label
                  >
                </template>
                <template #LiveValue>
                  <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
                </template>

                <template #RemarkLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >Remark：</adv-tablegridlayout-label
                  >
                </template>
                <template #RemarkValue>
                  <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
                </template>

                <template #AddressLabel>
                  <adv-tablegridlayout-label style="text-align: left" colspan="2"
                    >Address：</adv-tablegridlayout-label
                  >
                </template>
                <template #AddressValue>
                  <adv-tablegridlayout-value colspan="2">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </adv-tablegridlayout-value>
                </template>
              </adv-tablegridlayout>
            </template>

            <template #noMatch>
              <adv-tablegridlayout :bordered="true" :parity="true" :data="data8_2">
                <template #default v-if="true"></template>

                <template #UserNameLabel>
                  <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
                </template>
                <template #UserNameValue>
                  <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
                </template>

                <template #TelephoneLabel>
                  <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
                </template>
                <template #TelephoneValue>
                  <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
                </template>

                <template #LiveLabel>
                  <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
                </template>
                <template #LiveValue>
                  <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
                </template>

                <template #RemarkLabel>
                  <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
                </template>
                <template #RemarkValue>
                  <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
                </template>

                <template #AddressLabel>
                  <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
                </template>
                <template #AddressValue>
                  <adv-tablegridlayout-value colspan="3">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </adv-tablegridlayout-value>
                </template>
              </adv-tablegridlayout>
            </template>
          </adv-conditionalrender>
        </adv-space-group>
      </template>

      <template #p9>
        <adv-space-group>
          <div>
            <a-button type="primary" @click="0">提交</a-button>
          </div>

          <a-form :form="form">
            <adv-tablegridlayout :inner-style="'padding: 0 0 20px 0'" :data="data9">
              <template #default v-if="true"></template>

              <template #UserNameLabel>
                <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
              </template>
              <template #UserNameValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-input
                      v-decorator="[
                        'username',
                        { rules: [{ required: true, message: '请输入姓名' }] },
                      ]"
                      placeholder="username"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #TelephoneLabel>
                <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
              </template>
              <template #TelephoneValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-input
                      v-decorator="[
                        'Telephone',
                        { rules: [{ required: false, message: '请输入姓名' }] },
                      ]"
                      placeholder="Telephone"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #SexLabel>
                <adv-tablegridlayout-label>Sex：</adv-tablegridlayout-label>
              </template>
              <template #SexValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-radio-group
                      :options="[
                        { label: '男', value: 1 },
                        { label: '女', value: 0 },
                      ]"
                      v-decorator="['sex', { rules: [{ required: true, message: '请选择' }] }]"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #BirthdayLabel>
                <adv-tablegridlayout-label>Birthday：</adv-tablegridlayout-label>
              </template>
              <template #BirthdayValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-date-picker
                      v-decorator="[
                        'Birthday',
                        { rules: [{ required: true, message: '请选择出生年月' }] },
                      ]"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #AddressLabel>
                <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
              </template>
              <template #AddressValue>
                <adv-tablegridlayout-value colspan="7">
                  <a-form-item>
                    <a-textarea
                      v-decorator="[
                        'Address',
                        { rules: [{ required: true, message: '请输入地址' }] },
                      ]"
                      placeholder="Address"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>
            </adv-tablegridlayout>
          </a-form>
        </adv-space-group>
      </template>
    </adv-playground-page-code-box-section>

    <adv-playground-page-function-props-section title="API" :config="apiConfig" />

    <adv-playground-page-props-section title="Props" :config="propsConfig" />
  </adv-playground-page>
</template>

<script>
export default {
  displayName: 'tablegridlayout',
  data() {
    return {
      density: 'default',
      layout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
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
          <adv-tablegridlayout :data="data1">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value>
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
        </template>

        <script>
          export default {
             computed: {
                data1() {
                  return [
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
                          key: 'Telephone',
                          label: 'TelephoneLabel',
                          value: 'TelephoneValue',
                        },
                        {
                          key: 'Live',
                          label: 'LiveLabel',
                          value: 'LiveValue',
                        },
                        {
                          key: 'Remark',
                          label: 'RemarkLabel',
                          value: 'RemarkValue',
                        },
                        {
                          key: 'Address',
                          label: 'AddressLabel',
                          value: 'AddressValue',
                        },
                      ],
                    },
                  ];
                },
             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p2',
          name: '设置缺省Label宽度',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '设置缺省Label宽度',
              info: '可以设置缺省Label的宽度，默认是120px',
            },
          },
          codeText: `
        <template>
          <adv-tablegridlayout :data="data2">
              <template #default v-if="true"></template>

              <template #UserNameLabel>
                <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
              </template>
              <template #UserNameValue>
                <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
              </template>

              <template #TelephoneLabel>
                <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
              </template>
              <template #TelephoneValue>
                <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
              </template>

              <template #LiveLabel>
                <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
              </template>
              <template #LiveValue>
                <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
              </template>

              <template #RemarkLabel>
                <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
              </template>
              <template #RemarkValue>
                <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
              </template>

              <template #AddressLabel>
                <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
              </template>
              <template #AddressValue>
                <adv-tablegridlayout-value>
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </adv-tablegridlayout-value>
              </template>
            </adv-tablegridlayout>
        </template>

        <script>
          export default {
            computed: {
              data2() {
                return [
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 3,
                    defaultLabelWidth: 150,
                    colgroup: [, 'auto', , 'auto', , 'auto'],
                    data: [
                      {
                        key: 'UserName',
                        label: 'UserNameLabel',
                        value: 'UserNameValue',
                      },
                      {
                        key: 'Telephone',
                        label: 'TelephoneLabel',
                        value: 'TelephoneValue',
                      },
                      {
                        key: 'Live',
                        label: 'LiveLabel',
                        value: 'LiveValue',
                      },
                      {
                        key: 'Remark',
                        label: 'RemarkLabel',
                        value: 'RemarkValue',
                      },
                      {
                        key: 'Address',
                        label: 'AddressLabel',
                        value: 'AddressValue',
                      },
                    ],
                  },
                ];
              },
            }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p3',
          name: '设置每一列Label的宽度',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '设置每一列Label的宽度',
              info: '可以对每一列的Label宽度进行自定义',
            },
          },
          codeText: `
        <template>
          <adv-tablegridlayout :data="data3">
              <template #default v-if="true"></template>

              <template #UserNameLabel>
                <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
              </template>
              <template #UserNameValue>
                <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
              </template>

              <template #TelephoneLabel>
                <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
              </template>
              <template #TelephoneValue>
                <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
              </template>

              <template #LiveLabel>
                <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
              </template>
              <template #LiveValue>
                <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
              </template>

              <template #RemarkLabel>
                <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
              </template>
              <template #RemarkValue>
                <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
              </template>

              <template #AddressLabel>
                <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
              </template>
              <template #AddressValue>
                <adv-tablegridlayout-value>
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </adv-tablegridlayout-value>
              </template>
            </adv-tablegridlayout>
        </template>

        <script>
          export default {
            computed: {
              data3() {
                return [
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 3,
                    colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                    data: [
                      {
                        key: 'UserName',
                        label: 'UserNameLabel',
                        value: 'UserNameValue',
                      },
                      {
                        key: 'Telephone',
                        label: 'TelephoneLabel',
                        value: 'TelephoneValue',
                      },
                      {
                        key: 'Live',
                        label: 'LiveLabel',
                        value: 'LiveValue',
                      },
                      {
                        key: 'Remark',
                        label: 'RemarkLabel',
                        value: 'RemarkValue',
                      },
                      {
                        key: 'Address',
                        label: 'AddressLabel',
                        value: 'AddressValue',
                      },
                    ],
                  },
                ];
              },
            }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p4',
          name: '边框',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '边框',
              info: '带有边框',
            },
          },
          codeText: `
        <template>
            <adv-tablegridlayout :bordered="true" :data="data4">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value colspan="3">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
        </template>

        <script>
          export default {
            computed: {
              data4() {
                return [
                  {
                    name: 'g1',
                    width: '100%',
                    columnCount: 3,
                    colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                    data: [
                      {
                        key: 'UserName',
                        label: 'UserNameLabel',
                        value: 'UserNameValue',
                      },
                      {
                        key: 'Telephone',
                        label: 'TelephoneLabel',
                        value: 'TelephoneValue',
                      },
                      {
                        key: 'Live',
                        label: 'LiveLabel',
                        value: 'LiveValue',
                      },
                      {
                        key: 'Remark',
                        label: 'RemarkLabel',
                        value: 'RemarkValue',
                      },
                      {
                        key: 'Address',
                        label: 'AddressLabel',
                        value: 'AddressValue',
                      },
                    ],
                  },
                ];
              },
            }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p5',
          name: '多组',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '多组',
              info: '一个组是一个Table，一般适用于每一组是不同列数',
            },
          },
          codeText: `
        <template>
            <adv-tablegridlayout :bordered="true" :data="data5">
          <template #default v-if="true"></template>

          <template #UserName1Label>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserName1Value>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #Telephone1Label>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #Telephone1Value>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #Live1Label>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #Live1Value>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #Remark1Label>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #Remark1Value>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #Address1Label>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #Address1Value>
            <adv-tablegridlayout-value colspan="3">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang,China
            </adv-tablegridlayout-value>
          </template>

          <template #UserName2Label>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserName2Value>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #Telephone2Label>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #Telephone2Value>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #Live2Label>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #Live2Value>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #Remark2Label>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #Remark2Value>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
        </template>

        <script>
          export default {
             computed: {
                data5() {
                  return [
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserName1Label',
                          value: 'UserName1Value',
                        },
                        {
                          key: 'Telephone',
                          label: 'Telephone1Label',
                          value: 'Telephone1Value',
                        },
                        {
                          key: 'Live',
                          label: 'Live1Label',
                          value: 'Live1Value',
                        },
                        {
                          key: 'Remark',
                          label: 'Remark1Label',
                          value: 'Remark1Value',
                        },
                        {
                          key: 'Address',
                          label: 'Address1Label',
                          value: 'Address1Value',
                        },
                      ],
                    },
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 2,
                      colgroup: [120, 'auto', 150, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserName2Label',
                          value: 'UserName2Value',
                        },
                        {
                          key: 'Telephone',
                          label: 'Telephone2Label',
                          value: 'Telephone2Value',
                        },
                        {
                          key: 'Live',
                          label: 'Live2Label',
                          value: 'Live2Value',
                        },
                        {
                          key: 'Remark',
                          label: 'Remark2Label',
                          value: 'Remark2Value',
                        },
                      ],
                    },
                  ];
                },
             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p6',
          name: '基偶不同色',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '基偶不同色',
              info: '基偶不同色',
            },
          },
          codeText: `
        <template>
            <adv-tablegridlayout :bordered="true" :parity="true" :data="data6">
          <template #default v-if="true"></template>

          <template #UserNameLabel>
            <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
          </template>
          <template #UserNameValue>
            <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
          </template>

          <template #TelephoneLabel>
            <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
          </template>
          <template #TelephoneValue>
            <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
          </template>

          <template #LiveLabel>
            <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
          </template>
          <template #LiveValue>
            <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
          </template>

          <template #RemarkLabel>
            <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
          </template>
          <template #RemarkValue>
            <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
          </template>

          <template #AddressLabel>
            <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
          </template>
          <template #AddressValue>
            <adv-tablegridlayout-value colspan="3">
              No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </adv-tablegridlayout-value>
          </template>
        </adv-tablegridlayout>
        </template>

        <script>
          export default {
             computed:{
                data6() {
                  return [
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserNameLabel',
                          value: 'UserNameValue',
                        },
                        {
                          key: 'Telephone',
                          label: 'TelephoneLabel',
                          value: 'TelephoneValue',
                        },
                        {
                          key: 'Live',
                          label: 'LiveLabel',
                          value: 'LiveValue',
                        },
                        {
                          key: 'Remark',
                          label: 'RemarkLabel',
                          value: 'RemarkValue',
                        },
                        {
                          key: 'Address',
                          label: 'AddressLabel',
                          value: 'AddressValue',
                        },
                      ],
                    },
                  ];
                },
             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p7',
          name: '密度',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '密度',
              info: '三种不同的密度',
            },
          },
          codeText: `
        <template>
          <adv-space-group>
          <div>
            <a-radio
              @change="onDensityChange"
              :value="density"
              :options="[
                { label: 'default', value: 'default' },
                { label: 'middle', value: 'middle' },
                { label: 'small', value: 'small' },
              ]"
            >
            </a-radio>
          </div>

          <adv-tablegridlayout :bordered="true" :parity="true" :density="density" :data="data7">
            <template #default v-if="true"></template>

            <template #UserNameLabel>
              <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
            </template>
            <template #UserNameValue>
              <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
            </template>

            <template #TelephoneLabel>
              <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
            </template>
            <template #TelephoneValue>
              <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
            </template>

            <template #LiveLabel>
              <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
            </template>
            <template #LiveValue>
              <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
            </template>

            <template #RemarkLabel>
              <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
            </template>
            <template #RemarkValue>
              <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
            </template>

            <template #AddressLabel>
              <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
            </template>
            <template #AddressValue>
              <adv-tablegridlayout-value colspan="3">
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
              </adv-tablegridlayout-value>
            </template>
          </adv-tablegridlayout>
        </adv-space-group>
        </template>

        <script>
          export default {
             data(){
                return {
                  density: 'default',
                }
             },
             computed:{
                data7() {
                  return [
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserNameLabel',
                          value: 'UserNameValue',
                        },
                        {
                          key: 'Telephone',
                          label: 'TelephoneLabel',
                          value: 'TelephoneValue',
                        },
                        {
                          key: 'Live',
                          label: 'LiveLabel',
                          value: 'LiveValue',
                        },
                        {
                          key: 'Remark',
                          label: 'RemarkLabel',
                          value: 'RemarkValue',
                        },
                        {
                          key: 'Address',
                          label: 'AddressLabel',
                          value: 'AddressValue',
                        },
                      ],
                    },
                  ];
                },
             },
             methods: {
                onDensityChange(e) {
                  this.density = e.target.value;
                },
             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p8',
          name: '布局',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '布局',
              info: '两种不同布局',
            },
          },
          codeText: `
        <template>
          <adv-space-group>
          <a-radio
            @change="onLayoutChange"
            :value="layout"
            :options="[
              { label: 'horizontal', value: 'horizontal' },
              { label: 'vertical', value: 'vertical' },
            ]"
          >
          </a-radio>

          <adv-conditionalrender :conditional="layout === 'vertical'">
            <template #default>
              <adv-tablegridlayout
                :bordered="true"
                :parity="true"
                :layout="'vertical'"
                :data="data8_1"
              >
                <template #default v-if="true"></template>

                <template #UserNameLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >UserName：</adv-tablegridlayout-label
                  >
                </template>
                <template #UserNameValue>
                  <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
                </template>

                <template #TelephoneLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >Telephone：</adv-tablegridlayout-label
                  >
                </template>
                <template #TelephoneValue>
                  <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
                </template>

                <template #LiveLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >Live：</adv-tablegridlayout-label
                  >
                </template>
                <template #LiveValue>
                  <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
                </template>

                <template #RemarkLabel>
                  <adv-tablegridlayout-label style="text-align: left"
                    >Remark：</adv-tablegridlayout-label
                  >
                </template>
                <template #RemarkValue>
                  <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
                </template>

                <template #AddressLabel>
                  <adv-tablegridlayout-label style="text-align: left" colspan="2"
                    >Address：</adv-tablegridlayout-label
                  >
                </template>
                <template #AddressValue>
                  <adv-tablegridlayout-value colspan="2">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </adv-tablegridlayout-value>
                </template>
              </adv-tablegridlayout>
            </template>

            <template #noMatch>
              <adv-tablegridlayout :bordered="true" :parity="true" :data="data8_2">
                <template #default v-if="true"></template>

                <template #UserNameLabel>
                  <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
                </template>
                <template #UserNameValue>
                  <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
                </template>

                <template #TelephoneLabel>
                  <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
                </template>
                <template #TelephoneValue>
                  <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
                </template>

                <template #LiveLabel>
                  <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
                </template>
                <template #LiveValue>
                  <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
                </template>

                <template #RemarkLabel>
                  <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
                </template>
                <template #RemarkValue>
                  <adv-tablegridlayout-value>empty</adv-tablegridlayout-value>
                </template>

                <template #AddressLabel>
                  <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
                </template>
                <template #AddressValue>
                  <adv-tablegridlayout-value colspan="3">
                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                  </adv-tablegridlayout-value>
                </template>
              </adv-tablegridlayout>
            </template>
          </adv-conditionalrender>
        </adv-space-group>
        </template>

        <script>
          export default {
             data() {
               return {
                 layout: 'horizontal',
               }
             },
             computed:{
                data8_1() {
                  return [
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserNameLabel',
                          value: 'UserNameValue',
                        },
                        {
                          key: 'Telephone',
                          label: 'TelephoneLabel',
                          value: 'TelephoneValue',
                        },
                        {
                          key: 'Live',
                          label: 'LiveLabel',
                          value: 'LiveValue',
                        },
                        {
                          key: 'Remark',
                          label: 'RemarkLabel',
                          value: 'RemarkValue',
                        },
                        {
                          key: 'Address',
                          label: 'AddressLabel',
                          value: 'AddressValue',
                        },
                      ],
                    },
                  ];
                },
                data8_2() {
                  return [
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 3,
                      colgroup: ['auto', 'auto', 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserNameLabel',
                          value: 'UserNameValue',
                        },
                        {
                          key: 'Telephone',
                          label: 'TelephoneLabel',
                          value: 'TelephoneValue',
                        },
                        {
                          key: 'Live',
                          label: 'LiveLabel',
                          value: 'LiveValue',
                        },
                        {
                          key: 'Remark',
                          label: 'RemarkLabel',
                          value: 'RemarkValue',
                        },
                        {
                          key: 'Address',
                          label: 'AddressLabel',
                          value: 'AddressValue',
                        },
                      ],
                    },
                  ];
                },
             },
             methods: {
                onLayoutChange(e) {
                  this.layout = e.target.value;
                },
             }
          }
        <\/script>
          `,
          childrenSlot: 'p1',
        },
        {
          id: 'p9',
          name: '配合antd的Form使用',
          type: 'PlayGround',
          cardProps: {
            description: {
              title: '配合antd的Form使用',
              info: '配合antd的Form使用',
            },
          },
          codeText: `
        <template>
          <adv-space-group>
          <div>
            <a-button type="primary" @click="0">提交</a-button>
          </div>

          <a-form :form="form">
            <adv-tablegridlayout :inner-style="'padding: 0 0 20px 0'" :data="data9">
              <template #default v-if="true"></template>

              <template #UserNameLabel>
                <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
              </template>
              <template #UserNameValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-input
                      v-decorator="[
                        'username',
                        { rules: [{ required: true, message: '请输入姓名' }] },
                      ]"
                      placeholder="username"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #TelephoneLabel>
                <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
              </template>
              <template #TelephoneValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-input
                      v-decorator="[
                        'Telephone',
                        { rules: [{ required: false, message: '请输入姓名' }] },
                      ]"
                      placeholder="Telephone"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #SexLabel>
                <adv-tablegridlayout-label>Sex：</adv-tablegridlayout-label>
              </template>
              <template #SexValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-radio-group
                      :options="[
                        { label: '男', value: 1 },
                        { label: '女', value: 0 },
                      ]"
                      v-decorator="['sex', { rules: [{ required: true, message: '请选择' }] }]"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #BirthdayLabel>
                <adv-tablegridlayout-label>Birthday：</adv-tablegridlayout-label>
              </template>
              <template #BirthdayValue>
                <adv-tablegridlayout-value>
                  <a-form-item>
                    <a-date-picker
                      v-decorator="[
                        'Birthday',
                        { rules: [{ required: true, message: '请选择出生年月' }] },
                      ]"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>

              <template #AddressLabel>
                <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
              </template>
              <template #AddressValue>
                <adv-tablegridlayout-value colspan="7">
                  <a-form-item>
                    <a-textarea
                      v-decorator="[
                        'Address',
                        { rules: [{ required: true, message: '请输入地址' }] },
                      ]"
                      placeholder="Address"
                    />
                  </a-form-item>
                </adv-tablegridlayout-value>
              </template>
            </adv-tablegridlayout>
          </a-form>
        </adv-space-group>
        </template>

        <script>
          export default {
             data(){
               return {
                 form: this.$form.createForm(this, { name: 'coordinated' }),
               }
             },
             computed:{
                data9() {
                  return [
                    {
                      name: 'g1',
                      width: '100%',
                      columnCount: 4,
                      colgroup: [135, 'auto', 130, 'auto', 90, 150, , 'auto'],
                      data: [
                        {
                          key: 'UserName',
                          label: 'UserNameLabel',
                          value: 'UserNameValue',
                        },
                        {
                          key: 'Telephone',
                          label: 'TelephoneLabel',
                          value: 'TelephoneValue',
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
                  ];
                },
             },
             methods: {
                onSubmit(e) {
                  e.preventDefault();

                  this.form.validateFields((err, values) => {
                    if (!err) {
                      console.log('Received values of form: ', values);
                    }
                  });
                },
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
          title: 'TableGridLayout',
          data: [
            {
              name: 'renderGridSearchFormGroup',
              desc: '渲染TableGrodLayout',
              modifier: 'static',
              params: [
                {
                  name: 'data',
                  desc: '分组数据',
                  type: 'IDataItem[]',
                  defaultVal: '[]',
                  required: '',
                },
                {
                  name: 'props',
                  desc: 'TableGridLayout配置信息',
                  type: `
                      Pick<
                        ITableGridLayoutProps,
                        Exclude<keyof ITableGridLayoutProps, 'className' | 'style' | 'data'>
                      >
                    `,
                  defaultVal: '{}',
                  required: '',
                },
              ],
              returnType: 'React.Element',
              returnDesc: '',
            },
            {
              name: 'getRenderDetail',
              desc: '获取渲染细节',
              modifier: 'static',
              params: [
                {
                  name: 'data',
                  desc: '分组数据',
                  type: 'IDataItem[]',
                  defaultVal: '[]',
                  required: '',
                },
                {
                  name: 'props',
                  desc: 'TableGridLayout配置信息',
                  type: `
                      Pick<
                        ITableGridLayoutProps,
                        Exclude<keyof ITableGridLayoutProps, 'className' | 'style' | 'data'>
                      >
                    `,
                  defaultVal: '{}',
                  required: '',
                },
              ],
              returnType: (
                <pre>
                  {`
  {
    // 总行数
    rowCount: number;
    // 渲染时候的布局
    layout: 'horizontal' | 'vertical';
    // 细节
    detail: Array<{
      // 组名称
      name: string;
      // 总行数
      rowCount: number;
      // 细节
      detail: GroupRenderDetail;
    }>;
  }
                      `}
                </pre>
              ),
              returnDesc: '',
            },
          ],
        },
      ],
      propsConfig: [
        {
          border: true,
          title: '属性',
          data: [
            {
              params: 'innerClassName',
              desc: 'table样式表',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'innerStyle',
              desc: 'table样式表',
              type: 'React.CSSProperties',
              defaultVal: '',
            },
            {
              params: 'bordered',
              desc: '是否有边框',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'layout',
              desc: '布局',
              type: 'horizontal | vertical',
              defaultVal: 'horizontal',
            },
            {
              params: 'density',
              desc: '密度',
              type: 'default | middle | small',
              defaultVal: 'default',
            },
            {
              params: 'parity',
              desc: '是否是奇偶数不同色',
              type: 'boolean',
              defaultVal: 'false',
            },
            {
              params: 'data',
              desc: '数据配置，一个数据表示一个表格',
              type: 'IDataItem[]',
              defaultVal: '[]',
            },
          ],
        },
        {
          border: true,
          title: 'IDataItem',
          data: [
            {
              params: 'name',
              desc: 'group的名字',
              type: 'string',
              defaultVal: '',
            },
            {
              params: 'width',
              desc: 'group的宽度',
              type: 'string | number',
              defaultVal: '100%',
            },
            {
              params: 'defaultLabelWidth',
              desc: '缺省的列宽度',
              type: 'number',
              defaultVal: '120',
            },
            {
              params: 'padding',
              desc: '列的padding',
              type: 'string',
              defaultVal: '0',
            },
            {
              params: 'colgroup',
              desc: '列宽度的设置',
              type: "(number | 'auto' | undefined)[]",
              defaultVal: '[]',
            },
            {
              params: 'columnCount',
              desc: '列数',
              type: 'number',
              defaultVal: '',
            },
            {
              params: 'data',
              desc: '数据',
              type: `
                  Array<{
                    key: string;
                    label: string;
                    value: string;
                  }>
                `,
              defaultVal: '[]',
            },
          ],
        },
      ],
    };
  },
  computed: {
    data1() {
      return [
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
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data2() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          defaultLabelWidth: 150,
          colgroup: [, 'auto', , 'auto', , 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data3() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data4() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data5() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserName1Label',
              value: 'UserName1Value',
            },
            {
              key: 'Telephone',
              label: 'Telephone1Label',
              value: 'Telephone1Value',
            },
            {
              key: 'Live',
              label: 'Live1Label',
              value: 'Live1Value',
            },
            {
              key: 'Remark',
              label: 'Remark1Label',
              value: 'Remark1Value',
            },
            {
              key: 'Address',
              label: 'Address1Label',
              value: 'Address1Value',
            },
          ],
        },
        {
          name: 'g1',
          width: '100%',
          columnCount: 2,
          colgroup: [120, 'auto', 150, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserName2Label',
              value: 'UserName2Value',
            },
            {
              key: 'Telephone',
              label: 'Telephone2Label',
              value: 'Telephone2Value',
            },
            {
              key: 'Live',
              label: 'Live2Label',
              value: 'Live2Value',
            },
            {
              key: 'Remark',
              label: 'Remark2Label',
              value: 'Remark2Value',
            },
          ],
        },
      ];
    },
    data6() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data7() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data8_1() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: [120, 'auto', 150, 'auto', 170, 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data8_2() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 3,
          colgroup: ['auto', 'auto', 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            {
              key: 'Live',
              label: 'LiveLabel',
              value: 'LiveValue',
            },
            {
              key: 'Remark',
              label: 'RemarkLabel',
              value: 'RemarkValue',
            },
            {
              key: 'Address',
              label: 'AddressLabel',
              value: 'AddressValue',
            },
          ],
        },
      ];
    },
    data9() {
      return [
        {
          name: 'g1',
          width: '100%',
          columnCount: 4,
          colgroup: [135, 'auto', 130, 'auto', 90, 150, , 'auto'],
          data: [
            {
              key: 'UserName',
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
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
      ];
    },
  },
  mounted() {
    this.scrollEl = this?.$refs?.wrapRef?.$el?.parentElement?.parentElement;
  },
  methods: {
    onDensityChange(e) {
      this.density = e.target.value;
    },
    onLayoutChange(e) {
      this.layout = e.target.value;
    },
    onSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>
