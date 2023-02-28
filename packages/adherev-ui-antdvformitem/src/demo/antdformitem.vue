<template>
  <div style="height: 100px; overflow-y: auto">
    <!--    <adv-flexlayout-scroll :scroll-y="true">
      <div>
        <adv-antdvformitemnormalize-datepicker />
      </div>

      <div>
        <adv-antdvformitemnormalize-datepicker />
      </div>

      <div>
        <adv-antdvformitemnormalize-datepicker />
      </div>

      <div>
        <adv-antdvformitemnormalize-datepicker />
      </div>

      <div>
        <adv-antdvformitemnormalize-datepicker />
      </div>

      <div>
        <adv-antdvformitemnormalize-datepicker />
      </div>
    </adv-flexlayout-scroll>-->

    <!--    <adv-antdvformitemnormalize-select style="width: 200px">
      <a-select-option value="jack"> Jack </a-select-option>
      <a-select-option value="nike"> nike </a-select-option>
    </adv-antdvformitemnormalize-select>-->

    <!--    <adv-antdvformitemnormalize-input style="width: 100px" />

    <adv-antdvformitemnormalize-textarea style="width: 100px" />-->

    <adv-antdvformitemnormalize-submitbutton
      type="primary"
      style="width: 200px"
      @click="onSubmitBtnClick"
      >提交</adv-antdvformitemnormalize-submitbutton
    >
  </div>
</template>

<script>
export default {
  methods: {
    onSubmitBtnClick(e) {
      return new Promise((resolve) => setTimeout(resolve, 3000));
    },
  },
};
</script>
