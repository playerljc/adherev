<template>
  <div :class="$style.BasicLayout">
    <div :class="menuClassName">
      <a-menu
        :class="$style.Menu"
        :selectedKeys="defaultSelectedKeys.map((t) => t.path)"
        :openKeys="defaultOpenKeys.map((t) => t.path)"
        mode="inline"
        theme="dark"
        @openChange="openChange"
        @select="onSelect"
      >
        <template v-for="r in routers">
          <sub-menu v-if="isSubMenu(r)" :router="r" :authorized="authorized" />
          <a-menu-item v-else :key="r.path">
            <router-link :to="r.path">
              <a-tooltip :title="r.name" placement="right">
                <img v-if="!!r.icon" alt="" :class="$style.MenuIcon" :src="r.icon" />
                <span :class="$style.MenuIconText">{{ r.name }}</span>
              </a-tooltip>
            </router-link>
          </a-menu-item>
        </template>
      </a-menu>
    </div>
    <div :class="$style.Auto">
      <div :class="$style.BreadcrumbWrap">
        <a-breadcrumb separator="/">
          <a-breadcrumb-item>{{ name }}</a-breadcrumb-item>
          <a-breadcrumb-item v-for="(t, index) in breadcrumbPaths">
            <router-link v-if="index !== breadcrumbPaths.length - 1" :to="t.path"
              >{{ t.name }}}</router-link
            >
            <template>{{ t.name }}</template>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div :class="$style.Auto">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames';
import SubMenu from './SubMenu';
import Util from './Util';

export default {
  props: {
    routes: {
      type: Array,
      require: true,
      default: [],
    },
    name: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      authorized: [],
      isMenuCollapse: false,

      selectedKeys: [],
      openKeys: [],
    };
  },
  computed: {
    defaultSelectedKeys() {
      return this.getDefault().defaultSelectedKeys;
    },
    defaultOpenKeys() {
      return this.getDefault().defaultOpenKeys;
    },
    routers() {
      const { routes } = this;

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
    menuClassName() {
      const { isMenuCollapse, $style } = this;
      return classNames($style.Fixed, $style.Sider, isMenuCollapse ? $style.Collapse : '');
    },
    breadcrumbPaths() {
      const { routes } = this;

      const selectKey = window.location.pathname;

      const path = [];
      Util.getPathBySelectKey({
        path,
        routes,
        selectKey,
      });

      return path.filter((t) => !t.redirect);
    },
  },
  methods: {
    /**
     * getDefault
     * @return {{defaultOpenKeys: Array, defaultSelectedKeys: Array}}
     */
    getDefault() {
      const { routes = [], openKeys, selectedKeys } = this;
      const defaultSelectedKeys = [];
      const defaultOpenKeys = [];

      Util.loopRoutes({
        defaultOpenKeys,
        defaultSelectedKeys,
        routes: routes.filter((t) => !t.redirect),
      });

      return {
        defaultSelectedKeys: selectedKeys.length ? selectedKeys : defaultSelectedKeys,
        defaultOpenKeys: openKeys.length ? openKeys : defaultOpenKeys,
      };
    },
    /**
     * openChange
     * @param openKeys
     */
    openChange(openKeys) {
      const { routes = [] } = this;
      this.openKeys = openKeys.map((key) => Util.fillKey(key, routes));
    },
    /**
     * onSelect
     * @param selectedKeys
     */
    onSelect({ selectedKeys }) {
      const { routes = [] } = this;
      this.selectedKeys = selectedKeys.map((key) => Util.fillKey(key, routes));
    },
    /**
     * isSubMenu
     * @param r
     * @return {boolean}
     */
    isSubMenu(r) {
      return Util.isSubMenu(r);
    },
  },
  components: {
    'sub-menu': SubMenu,
  },
};
</script>

<style lang="less" module src="./index.less"></style>
