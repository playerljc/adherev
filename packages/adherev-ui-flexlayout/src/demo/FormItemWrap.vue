<template>
  <div>
    <a-select style="width: 200px" :getPopupContainer="() => getEl()">
      <a-select-option v-for="(item, index) in data" :key="index + 1" value="index + 1">
        {{ index + 1 }}
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
export default {
  inject: ['getEl'],
  data() {
    return {
      data: Array.from({ length: 10 }).fill(1),
    };
  },
};
</script>
