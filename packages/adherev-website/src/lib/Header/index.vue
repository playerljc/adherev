<template>
  <div :class="$style.Wrap">
    <div :class="$style.Fixed">
      <a :href="origin">
        <h1 style="margin: 0">adherev(v{{ version }})</h1>
      </a>
    </div>

    <div :class="$style.Auto">
      <div :class="$style.Inner">
        <SearchBar />

        <a-menu
          mode="horizontal"
          :class="$style.Menu"
          :selected-keys="menuSelectKeys"
          @click="onMenuChange($event)"
        >
          <a-menu-item v-for="item in MenuItemsConfig" :key="item.key">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </div>

    <div :class="$style.Fixed">
      <a :href="repositoryUrl">
        <svg id="tanuki-logo" width="36" height="36">
          <path
            id="tanuki-right-ear"
            class="tanuki-shape"
            fill="#e24329"
            d="M2 14l9.38 9v-9l-4-12.28c-.205-.632-1.176-.632-1.38 0z"
          />
          <path
            id="tanuki-left-ear"
            class="tanuki-shape"
            fill="#e24329"
            d="M34 14l-9.38 9v-9l4-12.28c.205-.632 1.176-.632 1.38 0z"
          />
          <path id="tanuki-nose" class="tanuki-shape" fill="#e24329" d="M18,34.38 3,14 33,14 Z" />
          <path
            id="tanuki-right-eye"
            class="tanuki-shape"
            fill="#fc6d26"
            d="M18,34.38 11.38,14 2,14 6,25Z"
          />
          <path
            id="tanuki-left-eye"
            class="tanuki-shape"
            fill="#fc6d26"
            d="M18,34.38 24.62,14 34,14 30,25Z"
          />
          <path
            id="tanuki-right-cheek"
            class="tanuki-shape"
            fill="#fca326"
            d="M2 14L.1 20.16c-.18.565 0 1.2.5 1.56l17.42 12.66z"
          />
          <path
            id="tanuki-left-cheek"
            class="tanuki-shape"
            fill="#fca326"
            d="M34 14l1.9 6.16c.18.565 0 1.2-.5 1.56L18 34.38z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import packageJSON from '../../../../../package.json';
import lernaJSON from '../../../../../lerna.json';
import SearchBar from '../SearchBar';

const MenuItemsConfig = [
  {
    name: '简介',
    key: '/adherev/introduction',
  },
  {
    name: '组件',
    key: '/adherev/component',
  },
  {
    name: 'Gallery',
    key: '/adherev/gallery',
  },
  {
    name: '更新日志',
    key: '/adherev/changelog',
  },
];

function getDefaultMenuSelectKey(pathname = window.location.pathname) {
  const findMenuItemConfig = MenuItemsConfig.find(
    (menuItemConfig) => pathname.indexOf(menuItemConfig.key) !== -1,
  );

  return findMenuItemConfig ? findMenuItemConfig.key : '/adherev/introduction';
}

export default {
  components: {
    SearchBar,
  },
  data() {
    return {
      menuSelectKeys: [getDefaultMenuSelectKey()],
    };
  },
  computed: {
    origin() {
      return window.location.origin;
    },
    MenuItemsConfig() {
      return MenuItemsConfig;
    },
    version() {
      return lernaJSON.version;
    },
    repositoryUrl() {
      return packageJSON.repository.url;
    },
  },
  watch: {
    $route(to) {
      const { path } = to;
      this.menuSelectKeys = [getDefaultMenuSelectKey(path)];
    },
  },
  methods: {
    onMenuChange(e) {
      const { key, keyPath } = e;

      this.menuSelectKeys = keyPath;

      this.$router.replace(key);
    },
  },
};
</script>

<style lang="less" module src="./index.less" />
