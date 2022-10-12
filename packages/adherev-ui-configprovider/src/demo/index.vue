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
        <div>
          <p>{{ $tv('姓名') }}</p>
          <p>{{ $tv('性别') }}</p>
          <p>{{ $tv('出生年月') }}</p>
          <p>{{ $tv('详细地址') }}</p>
        </div>
      </template>
    </adv-configprovider>
  </div>
</template>

<script>
import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';

const locales = {
  en_US,
  zh_CN,
  pt_PT,
};

export default {
  data() {
    return {
      lang: 'zh_CN',
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
  methods: {
    change(e) {
      this.lang = e.target.value;
    },
  },
};
</script>
