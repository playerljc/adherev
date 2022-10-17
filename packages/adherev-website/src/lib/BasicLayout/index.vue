<template>
  <div :class="$style.BasicLayout">
    <div :class="menuClassName">
      <a-menu
        :class="$style.Menu"
        :selected-keys="defaultSelectedKeys.map((t) => t.path)"
        :open-keys="defaultOpenKeys.map((t) => t.path)"
        mode="inline"
        theme="dark"
        @openChange="openChange"
        @select="onSelect"
      >
        <template v-for="r in routes">
          <sub-menu v-if="isSubMenu(r)" :key="r.path" :router="r" :styles="$style" />

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
          <a-breadcrumb-item v-for="t in breadcrumbPaths" :key="t.path">
            <router-link :key="t.path" :to="t.path">{{ t.name }}</router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
      </div>

      <div>
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>

      <div :class="$style.FooterWrap">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames';

import Footer from '@/lib/Footer';

import SubMenu from './SubMenu';
import Util from './Util';

export default {
  components: {
    'sub-menu': SubMenu,
    Footer,
  },
  props: {
    defaultRoutes: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      authorized: [],
      isMenuCollapse: false,
      pathname: window.location.pathname,
      selectedKeys: [],
      openKeys: [],
      routes: Util.sortRouters(this.defaultRoutes),
    };
  },
  watch: {
    '$route.path'(pathname) {
      const { defaultSelectedKeys, defaultOpenKeys } = this.getDefaultKeys(pathname);

      if (
        JSON.stringify(defaultSelectedKeys) !== JSON.stringify(this.selectedKeys) ||
        JSON.stringify(defaultOpenKeys) !== JSON.stringify(this.openKeys)
      ) {
        this.selectedKeys = defaultSelectedKeys;
        this.openKeys = defaultOpenKeys;
        this.pathname = pathname;
      }
    },
    defaultRoutes(newVal, oldVal) {
      if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
        this.routes = Util.sortRouters(newVal);
      }
    },
  },
  computed: {
    defaultSelectedKeys() {
      return this.getKeys().selectedKeys;
    },
    defaultOpenKeys() {
      return this.getKeys().openKeys;
    },
    breadcrumbPaths() {
      const { routes } = this;

      const path = [];
      Util.getPathBySelectKey({
        path,
        routes,
        selectKey: this.pathname,
      });

      return path.filter((t) => !t.redirect);
    },
    menuClassName() {
      const { isMenuCollapse, $style } = this;
      return classNames($style.Fixed, $style.Sider, isMenuCollapse ? $style.Collapse : '');
    },
  },
  methods: {
    /**
     * getDefault
     * @return {{defaultOpenKeys: Array, defaultSelectedKeys: Array}}
     */
    getKeys(pathname = window.location.pathname) {
      const { defaultSelectedKeys, defaultOpenKeys } = this.getDefaultKeys(pathname);

      return {
        selectedKeys: this.selectedKeys.length ? this.selectedKeys : defaultSelectedKeys,
        openKeys: this.openKeys.length ? this.openKeys : defaultOpenKeys,
      };
    },
    getDefaultKeys(pathname = window.location.pathname) {
      const { defaultRoutes: routes = [] } = this;
      const defaultSelectedKeys = [];
      const defaultOpenKeys = [];

      Util.loopRoutes({
        defaultOpenKeys,
        defaultSelectedKeys,
        routes: routes.filter((t) => !t.redirect),
        pathname,
      });

      return {
        defaultSelectedKeys,
        defaultOpenKeys,
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
};
</script>

<style lang="less" module>
.BasicLayout {
  display: flex;
  width: 100%;
  height: 100%;

  > .Auto {
    flex-direction: column;

    > .Fixed {
      padding: 20px;
    }

    //> .Auto {
    //  //min-height: 0;
    //  overflow-y: auto;
    //  background: @common-block-background-color;
    //}
  }

  .Fixed {
    flex-shrink: 0;
    width: 300px;
    .Menu {
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }

  .Auto {
    position: relative;
    display: flex;
    flex-grow: 1;
    min-width: 0;
    overflow-y: auto;
  }
}

.MenuIcon {
  margin-right: 15px;
}

.MenuIconText {
  vertical-align: middle;
}

.Sider {
  transition: all 0.2s;
}

.Collapse {
  width: 51px;
  overflow-x: hidden;
}

.BreadcrumbWrap {
  width: 100%;
  padding: 10px 20px;
}
</style>
