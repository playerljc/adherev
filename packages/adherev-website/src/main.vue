<template>
  <a-config-provider :locale="locale">
    <adv-configprovider :intl="intl">
      <template #default>
        <router-view />
      </template>
    </adv-configprovider>
  </a-config-provider>
</template>

<script>
import { Resource, Util } from '@baifendian/adherev';

import en_US from './locales/en_US';
import pt_PT from './locales/pt_PT';
import zh_CN from './locales/zh_CN';

// 获取当前语言
const lang = Util.getLang?.();

export default {
  computed: {
    intl() {
      return {
        lang,
        locales: {
          en_US,
          zh_CN,
          pt_PT,
        },
      };
    },
  },
  data() {
    return {
      locale: Resource.Dict.value.LocalsAntd.value[lang],
    };
  },
};
</script>
