import { VNode, defineComponent, nextTick, provide, ref, watch } from 'vue';
import { string } from 'vue-types';

const selectorPrefix = 'adherev-ui-playground-simple-tabs';

export const tabProps = {
  defaultActiveKey: string().def(''),
};

export default defineComponent({
  name: 'adv-playground-simple-tabs',
  props: tabProps,
  emits: ['change'],
  setup(props, { slots, emit }) {
    const activeKey = ref<string>(props.defaultActiveKey);

    const getActiveKey = () => activeKey.value;

    const renderHead = (): VNode[] => {
      if (!slots.default) return [];

      if (Array.isArray(slots?.default?.())) {
        if (slots?.default?.().length) {
          if (Array.isArray(slots?.default?.()[0].children)) {
            return ((slots.default() as VNode[])[0].children as VNode[]).map((vNode: VNode) =>
              renderHeadItem(vNode),
            );
          }
        }
      }

      return [];
    };

    const renderHeadItem = (node: VNode): JSX.Element => {
      const { index, title } = node.props as { title: string; index: string };

      return (
        <li
          key={index}
          class={activeKey.value === index ? 'active' : ''}
          onClick={() => {
            activeKey.value = index;

            nextTick(function () {
              emit('change', index);
            });
          }}
        >
          {title}
        </li>
      );
    };

    watch(
      () => props.defaultActiveKey,
      (newValue) => (activeKey.value = newValue),
    );

    provide('getActiveKey', getActiveKey);

    return () => (
      <div class={selectorPrefix}>
        <ul class={`${selectorPrefix}-head`}>{renderHead()}</ul>
        <div class={`${selectorPrefix}-body`}>{slots?.default?.()}</div>
      </div>
    );
  },
});
