<template functional>
  <a-sub-menu :title="props.router.name" :key="props.router.path">
    <template v-for="r in props.router.children">
      <sub-menu
        v-if="
          r.children &&
          r.children.length &&
          r.children.filter((t) => t.hide).length !== r.children.length
        "
        :router="r"
        :$style="props.$style"
        :key="r.path"
      />

      <a-menu-item v-else :key="r.path">
        <router-link :to="r.path">
          <a-tooltip :title="r.name" placement="right">
            <img v-if="!!r.icon" :class="props.$style.MenuIcon" :src="r.icon" alt="" />
            <span :class="props.$style.MenuIconText">{{ r.name }}</span>
          </a-tooltip>
        </router-link>
      </a-menu-item>
    </template>
  </a-sub-menu>
</template>
