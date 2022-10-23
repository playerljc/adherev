<template>
  <div>
    <div><adv-datedisplay-2 :value="Date.now()" /></div>
    <div><adv-datedisplay-4 :value="Date.now()" /></div>
    <div><adv-datedisplay-6 :value="Date.now()" /></div>
    <div><adv-datedisplay-7 :value="Date.now()" /></div>
    <div><adv-datedisplay-8 :value="Date.now()" /></div>
    <div><adv-datedisplay-10 :value="Date.now()" /></div>
    <div><adv-datedisplay-13 :value="Date.now()" /></div>
    <div><adv-datedisplay-15 :value="Date.now()" /></div>
    <div><adv-datedisplay-16 :value="Date.now()" /></div>
    <div><adv-datedisplay-18 :value="Date.now()" /></div>
    <div><adv-datedisplay-fromnow :value="Date.now()" /></div>
    <div><adv-datedisplay-tonow :value="Date.now()" /></div>

    <div><adv-datedisplay-6 :value="Date.now()" :split1="'/'" /></div>
    <div><adv-datedisplay-7 :value="Date.now()" :split1="'/'" /></div>
    <div><adv-datedisplay-8 :value="Date.now()" :split1="'/'" /></div>
    <div><adv-datedisplay-10 :value="Date.now()" :split1="'/'" /></div>
    <div><adv-datedisplay-13 :value="Date.now()" :split1="'/'" :split2="'-'" /></div>
    <div><adv-datedisplay-15 :value="Date.now()" :split1="'/'" :split2="'-'" /></div>
    <div><adv-datedisplay-16 :value="Date.now()" :split1="'/'" :split2="'-'" /></div>
    <div><adv-datedisplay-18 :value="Date.now()" :split1="'/'" :split2="'-'" /></div>

    <div><adv-datedisplay-LT :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-LTS :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-L :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-LL :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-LLL :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-LLLL :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-l :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-ll :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-lll :value="Date.now()" :locale="'zh-cn'" /></div>
    <div><adv-datedisplay-llll :value="Date.now()" :locale="'zh-cn'" /></div>

    <div><adv-datedisplay :value="Date.now()" :locale="'zh-cn'" :format="'L LT'" /></div>
    <div>
      <adv-datedisplay
        :value="Date.now()"
        :locale="'zh-cn'"
        :format="'[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: Array.from({ length: 30 }),
    };
  },
};
</script>
