<template>
  <div>
    <button @click="onForceUpdate">强制刷新</button>
  </div>
  <div>当前时间：{{ new Date().getTime() }}</div>
</template>

<script lang="ts">
import { Hooks, Mixins } from '@baifendian/adherev';

const { forceUpdate } = Mixins;

const { useForceUpdate } = Hooks;

export default {
  mixins: [forceUpdate],
  setup() {
    const $forceUpdate = useForceUpdate();

    const onForceUpdate = () => $forceUpdate();

    return {
      onForceUpdate,
    };
  },
};
</script>
