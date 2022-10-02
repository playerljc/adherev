import Vue from 'vue';

export const CodePanelPropTypes = {
  lang: {
    type: String,
    default: 'vue',
  },
};

const CodePanel: any = {
  name: 'adv-playground-code-panel',
  props: {
    ...CodePanelPropTypes,
  },
  render(h) {
    const { lang, $slots } = this;
    const VueHighlightJS = Vue.component('highlight-code');

    // @ts-ignore
    return <VueHighlightJS lang={lang}>{$slots.default}</VueHighlightJS>;
  },
};

export default CodePanel;
