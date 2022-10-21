<template>
  <div>
    <adv-tablegridlayout
      :density="'default'"
      :layout="'vertical'"
      :parity="true"
      :bordered="true"
      :data="data"
    >
      <template v-slot:UserNameLabel>
        <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
      </template>
      <template v-slot:UserNameValue>
        <adv-tablegridlayout-value>Zhou Maomao</adv-tablegridlayout-value>
      </template>

      <template v-slot:TelephoneLabel>
        <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
      </template>
      <template v-slot:TelephoneValue>
        <adv-tablegridlayout-value>1810000000</adv-tablegridlayout-value>
      </template>

      <template v-slot:LiveLabel>
        <adv-tablegridlayout-label>Live：</adv-tablegridlayout-label>
      </template>
      <template v-slot:LiveValue>
        <adv-tablegridlayout-value>Hangzhou, Zhejiang</adv-tablegridlayout-value>
      </template>

      <template v-slot:RemarkLabel>
        <adv-tablegridlayout-label>Remark：</adv-tablegridlayout-label>
      </template>
      <template v-slot:RemarkValue>
        <adv-tablegridlayout-value>Remark</adv-tablegridlayout-value>
      </template>

      <template v-slot:AddressLabel>
        <adv-tablegridlayout-label colspan="2" valign="top">Address：</adv-tablegridlayout-label>
      </template>
      <template v-slot:AddressValue>
        <adv-tablegridlayout-value colspan="2"
          >No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China</adv-tablegridlayout-value
        >
      </template>
    </adv-tablegridlayout>

    <!--    <div>
      <a-button type="primary" @click="onSubmit">获取</a-button>
    </div>

    <a-form :form="form" @submit="onSubmit">
      &lt;!&ndash;      <a-form-item>
        <a-button type="primary" @click="handleSubmit"> Check </a-button>
      </a-form-item>&ndash;&gt;

      &lt;!&ndash;      <a-form-item>
        <a-button type="primary" html-type="submit"> Submit </a-button>
      </a-form-item>&ndash;&gt;

      &lt;!&ndash;      <a-card style="width: 300px">
        <a slot="extra" href="#">more</a>
        <p>card content</p>
        <p>card content</p>
        <p>card content</p>

        <template v-slot:title>
          <adv-tablegridlayout-value>
            <a-form-item>
              <a-input
                v-decorator="['username', { rules: [{ required: true, message: '请输入姓名' }] }]"
                placeholder="username"
              />
            </a-form-item>
          </adv-tablegridlayout-value>
        </template>
      </a-card>&ndash;&gt;

      <adv-tablegridlayout :inner-style="'padding: 0 0 20px 0'" :data="data">
        <template v-slot:default v-if="true"></template>

        <template v-slot:UserNameLabel>
          <adv-tablegridlayout-label>UserName：</adv-tablegridlayout-label>
        </template>
        <template v-slot:UserNameValue>
          <adv-tablegridlayout-value>
            <a-form-item>
              <a-input
                v-decorator="['username', { rules: [{ required: true, message: '请输入姓名' }] }]"
                placeholder="username"
              />
            </a-form-item>
          </adv-tablegridlayout-value>
        </template>

        <template v-slot:TelephoneLabel>
          <adv-tablegridlayout-label>Telephone：</adv-tablegridlayout-label>
        </template>
        <template v-slot:TelephoneValue>
          <adv-tablegridlayout-value>
            <a-form-item>
              <a-input
                v-decorator="['Telephone', { rules: [{ required: false, message: '请输入姓名' }] }]"
                placeholder="Telephone"
              />
            </a-form-item>
          </adv-tablegridlayout-value>
        </template>

        <template v-slot:SexLabel>
          <adv-tablegridlayout-label>Sex：</adv-tablegridlayout-label>
        </template>
        <template v-slot:SexValue>
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

        <template v-slot:BirthdayLabel>
          <adv-tablegridlayout-label>Birthday：</adv-tablegridlayout-label>
        </template>
        <template v-slot:BirthdayValue>
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

        <template v-slot:AddressLabel>
          <adv-tablegridlayout-label valign="top">Address：</adv-tablegridlayout-label>
        </template>
        <template v-slot:AddressValue>
          <adv-tablegridlayout-value colspan="7">
            <a-form-item>
              <a-textarea
                v-decorator="['Address', { rules: [{ required: true, message: '请输入地址' }] }]"
                placeholder="Address"
              />
            </a-form-item>
          </adv-tablegridlayout-value>
        </template>
      </adv-tablegridlayout>
    </a-form>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: 'g1',
          width: '100%',
          columnCount: 4,
          colgroup: [135, 'auto', 130, 'auto', 90, 150, , 'auto'],
          data: [
            {
              key: 'UserName',
              require: true,
              label: 'UserNameLabel',
              value: 'UserNameValue',
            },
            {
              key: 'Telephone',
              label: 'TelephoneLabel',
              value: 'TelephoneValue',
            },
            // {
            //   key: 'Sex',
            //   label: 'SexLabel',
            //   value: 'SexValue',
            // },
            // {
            //   key: 'Birthday',
            //   label: 'BirthdayLabel',
            //   value: 'BirthdayValue',
            // },
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
        // {
        //   name: 'g2',
        //   width: '100%',
        //   columnCount: 2,
        //   colgroup: [120, 'auto', 150, 'auto'],
        //   data: [
        //     {
        //       key: 'UserName',
        //       label: 'UserNameLabel',
        //       value: 'UserNameValue',
        //     },
        //     {
        //       key: 'Telephone',
        //       label: 'TelephoneLabel',
        //       value: 'TelephoneValue',
        //     },
        //     {
        //       key: 'Live',
        //       label: 'LiveLabel',
        //       value: 'LiveValue',
        //     },
        //     {
        //       key: 'Remark',
        //       label: 'RemarkLabel',
        //       value: 'RemarkValue',
        //     },
        //   ],
        // }
      ],
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
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
  },
};
</script>
