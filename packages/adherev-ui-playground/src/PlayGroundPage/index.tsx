import Space from '@baifendian/adherev-ui-space';
import AnchorNavigation from '../AnchorNavigation';

const selectPrefix = 'adhere-ui-playground-page';

export const PlayGroundPagePropTypes = {
  anchorPosition: {
    type: Object,
    default: () => ({
      top: 77,
      width: 120,
    }),
  },
};

export default {
  name: 'adv-playground-page',
  props: { ...PlayGroundPagePropTypes },
  render(h) {
    return (
      <div class={selectPrefix}>
        <AnchorNavigation anchors={this.getAnchors()} anchorPosition={this.anchorPosition}>
          <Space.Group direction="vertical">{this.$slots.default}</Space.Group>
        </AnchorNavigation>
      </div>
    );
  },
  methods: {
    getAnchors() {
      return this.$slots.default
        .filter((c) => ['CodeBoxSection', 'adv-playground-page-code-box-section'].includes(c.tag))
        .map((c) =>
          c?.data?.props?.config?.map((t) => ({
            name: t.name,
            anchor: t.id,
          })),
        )
        ?.flat();
    },
  },
};
