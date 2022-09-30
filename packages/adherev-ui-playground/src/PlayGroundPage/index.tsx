import { VNode, computed, defineComponent } from 'vue';

import { Util } from '@baifendian/adherev';
import Space from '@baifendian/adherev-ui-space';

import AnchorNavigation, { anchorNavigationProps } from '../AnchorNavigation';

const selectPrefix = 'adherev-ui-playground-page';

const playGroundPageProps = {
  ...anchorNavigationProps,
};

export default defineComponent({
  name: 'adv-playground-page',
  props: playGroundPageProps,
  setup(props, { slots }) {
    const getAnchors = computed(() => {
      return slots
        .default?.()
        .filter((c: VNode) => {
          return ['CodeBoxSection', 'adv-playground-page-code-box-section'].some(
            (t) => {
              if (c.type) {
                if (Util.isObject?.(c.type) && (c.type as any).name) {
                  return (c.type as any).name === t;
                }

                return false;
              }

              return false;
            }, //(Util.isObject?.(c.type) ? (c.type as any).name : c.type).indexOf(t) !== -1,
          );
        })
        .map((c) =>
          c?.props?.config?.map?.((t: { name: any; id: any }) => ({
            name: t.name,
            anchor: t.id,
          })),
        )
        ?.flat();
    });

    return () => (
      <div class={selectPrefix}>
        <AnchorNavigation
          anchors={getAnchors.value}
          defaultActiveAnchor={props.defaultActiveAnchor}
          anchorPosition={props.anchorPosition}
          scrollEl={props.scrollEl}
        >
          <Space.Group direction="vertical">{slots?.default?.()}</Space.Group>
        </AnchorNavigation>
      </div>
    );
  },
});
