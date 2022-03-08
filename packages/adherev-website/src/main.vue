<template>
  <a-config-provider :locale="locale">
    <keep-alive>
      <router-view />
    </keep-alive>
  </a-config-provider>
</template>

<script>
import { Resource, Util } from '@baifendian/adherev';
// 获取当前语言
const lang = Util.getLang?.();

export default {
  data() {
    return {
      locale: Resource.Dict.value.LocalsAntd.value[lang],
    };
  },
};
</script>
