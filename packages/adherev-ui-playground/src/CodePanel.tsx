import Vue from 'vue';

export const CodePanelPropTypes = {
  lang: {
    type: String,
    default: 'vue',
  },
};

export default {
  name: 'adv-playground-code-panel',
  props: {
    ...CodePanelPropTypes,
  },
  render(h) {
    const { lang, $slots } = this;
    const VueHighlightJS = Vue.component('highlight-code');

    return <VueHighlightJS lang={lang}>{$slots.default}</VueHighlightJS>;
  },
};
