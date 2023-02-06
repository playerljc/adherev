import { ExtractPropTypes, defineComponent } from 'vue';
import { string } from 'vue-types';

import hljsVuePlugin from '@highlightjs/vue-plugin';

export const codePanelProps = {
  lang: string().def('vue'),
  codeText: string().def(''),
};

export default defineComponent({
  name: 'adv-playground-code-panel',
  props: codePanelProps,
  setup(props, { slots }) {
    return () => {
      const VueHighlightJS = hljsVuePlugin.component;

      return <VueHighlightJS language={props.lang} code={props.codeText} />;
    };
  },
});
