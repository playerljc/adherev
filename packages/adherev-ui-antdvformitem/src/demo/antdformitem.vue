<template>
  <div style="height: 100px;">
    <adv-flexlayout-scroll :scroll-y="true">
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

      <adv-antdvformitemnormalize-input style="width: 500px" />
    </adv-flexlayout-scroll>

    <adv-antdvformitemnormalize-select style="width: 200px" :options="[
      {
        label: 'Jack',
        value: 1
      },
      {
        label: 'nike',
        value: 2
      }
    ]" />

    <adv-antdvformitemnormalize-textarea style="width: 100px" />

  </div>
</template>
