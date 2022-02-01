import Vue from 'vue';

export default {
  name: 'adv-playground-code-panel',
  props: {
    lang: {
      type: String,
      default: 'vue',
    },
  },
  render(h) {
    const { lang, $slots } = this;
    const VueHighlightJS = Vue.component('highlight-code');

    return <VueHighlightJS lang={lang}>{$slots.default}</VueHighlightJS>;
  },
};
