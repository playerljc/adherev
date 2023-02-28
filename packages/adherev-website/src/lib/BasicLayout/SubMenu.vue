<template>
  <a-sub-menu :title="router.name" :key="router.path">
    <template v-for="r in router.children">
      <sub-menu
        v-if="
          r.children &&
          r.children.length &&
          r.children.filter((t) => t.hide).length !== r.children.length
        "
        :router="r"
        :$style="styles"
        :key="r.path"
      />

      <a-menu-item v-else :key="r.path">
        <router-link :to="r.path">
          <a-tooltip :title="r.name" placement="right">
            <img v-if="!!r.icon" :class="styles.MenuIcon" :src="r.icon" alt="" />
            <span :class="styles.MenuIconText">{{ r.name }}</span>
          </a-tooltip>
        </router-link>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>

<script>
export default {
  props: {
    router: {
      type: Object,
      default: () => ({}),
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
