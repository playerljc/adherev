<script>
import { Resource, Util } from '@baifendian/adherev';

import en_US from '@/locales/en_US';
import pt_PT from '@/locales/pt_PT';
import zh_CN from '@/locales/zh_CN';

// 获取当前语言
const lang = Util.getLang();

export default {
  data() {
    return {
      locale: Resource.Dict.value.LocalsAntd.value[lang],
      hasIntlInit: false,
    };
  },
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
  methods: {
    onIntlInit() {
      import('@/config/adherev.intl.component.register.config.js').then(() => {
        this.hasIntlInit = true;
      });
    },
  },
};
</script>

<template>
  <a-config-provider :locale="locale">
    <adv-configprovider :intl="intl" @intlInit="onIntlInit">
      <template v-slot:default>
        <div id="app">
          <template v-if="hasIntlInit">
            <keep-alive>
              <router-view />
            </keep-alive>
          </template>

          <template v-else>
            <a-skeleton
              v-for="t in Array.from({ length: 5 })"
              :loading="true"
              :active="true"
              :avatar="true"
              :paragraph="{ rows: 4 }"
            />
          </template>
        </div>
      </template>
    </adv-configprovider>
  </a-config-provider>
</template>
