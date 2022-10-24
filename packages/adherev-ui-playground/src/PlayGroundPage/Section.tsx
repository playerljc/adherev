import { ExtractPropTypes, VNode, defineComponent } from 'vue';
import { object, oneOfType, string } from 'vue-types';

const selectPrefix = 'adherev-ui-playground-page-section';

export const sectionProps = {
  title: oneOfType([string(), object<VNode>()]),
  extra: object<VNode>(),
};

export type SectionProps = Partial<ExtractPropTypes<typeof sectionProps>>;

export default defineComponent({
  name: 'adv-playground-page-section',
  props: sectionProps,
  setup(props, { slots }) {
    return () => (
      <div class={selectPrefix}>
        <div class={`${selectPrefix}-header`}>
          <div class={`${selectPrefix}-header-title`}>{props.title}</div>
          <div class={`${selectPrefix}-header-extra`}>{props.extra}</div>
        </div>
        <div class={`${selectPrefix}-body`}>{slots?.default?.()}</div>
      </div>
    );
  },
});
