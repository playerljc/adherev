<template>
  <a-sub-menu title="title">
    <a-tooltip slot="title" :title="router.name" placement="right">
      <img v-if="!!router.icon" :class="$style.MenuIcon" :src="router.icon" alt="" />
      <span :class="$style.MenuIconText">{{ router.name }}</span>
    </a-tooltip>

    <template v-for="r in routers">
      <sub-menu v-if="isSubMenu(r)" :router="r" :authorized="authorized" />
      <a-menu-item v-else :key="r.path">
        <router-link :to="r.path">
          <a-tooltip :title="r.name" placement="right">
            <img v-if="!!r.icon" :class="$style.MenuIcon" :src="r.icon" alt="" />
            <span :class="$style.MenuIconText">{{ r.name }}</span>
          </a-tooltip>
        </router-link>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
<script>
import Util from './Util';

export default {
  props: {
    router: {
      type: Object,
      require: true,
    },
    authorized: {
      type: Array,
      require: true,
      default: [],
    },
  },
  computed: {
    routers() {
      const {
        router: { routes },
      } = this;

      return routes.filter((r) => {
        if ('hide' in r && r.hide) return false;

        if (!r.redirect) {
          if (r.authority && r.authority.length) {
            return Util.isAuthority(r.authority, this.authorized);
          }
          return true;
        }
        return false;
      });
    },
  },
  methods: {
    /**
     * isSubMenu
     * @param r
     * @return {boolean}
     */
    isSubMenu(r) {
      return Util.isSubMenu(r);
    },
  },
};
</script>
<style lang="less" module src="./index.less"></style>

