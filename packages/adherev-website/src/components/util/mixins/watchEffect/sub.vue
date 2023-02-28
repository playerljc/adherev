<template>
  <div>
    <div><button @click="value3 = value3 + 1">addValue3</button></div>
    <div>{{ value1 }}</div>
    <div>{{ value2 }}</div>
  </div>
</template>

<script>
import { Mixins } from '@baifendian/adherev';

export default {
  props: ['value1', 'value2'],
  mixins: [Mixins.watchEffect],
  data() {
    return {
      value3: '',
    };
  },
  watchEffect({ attr, newVal, oldVal }) {
    console.log('value3', this.value3);
    console.log(attr, newVal, oldVal);
  },
  //   watch:{
  //     value1:function(){
  //         console.log('value1Change');
  //     },
  //     value2: function() {
  //         console.log('value2Change');
  //     },
  //     '*/*': {
  //         handler: function (val, oldVal) {
  //             console.log('aaaaaaaaaaaaaaaaa')
  //          },
  //         deep: true
  //     }
  //   },
};
</script>
