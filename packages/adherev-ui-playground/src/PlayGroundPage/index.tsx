import Space from '@baifendian/adherev-ui-space';

import AnchorNavigation, { AnchorNavigationPropTypes } from '../AnchorNavigation';

const selectPrefix = 'adherev-ui-playground-page';

export const PlayGroundPagePropTypes = {
  ...AnchorNavigationPropTypes,
};

const PlayGroundPage: any = {
  name: 'adv-playground-page',
  props: { ...PlayGroundPagePropTypes },
  computed: {
    getAnchors() {
      const anchors = this.$slots.default
        .filter((c) =>
          ['CodeBoxSection', 'adv-playground-page-code-box-section'].some(
            (t) => c.tag.indexOf(t) !== -1,
          ),
        )
        .map((c) =>
          c?.componentOptions?.propsData?.config?.map((t) => ({
            name: t.name,
            anchor: t.id,
          })),
        )
        ?.flat();

      return anchors;
    },
  },
  render(h) {
    return (
      <div class={selectPrefix}>
        <AnchorNavigation
          anchors={this.getAnchors}
          defaultActiveAnchor={this.defaultActiveAnchor}
          anchorPosition={this.anchorPosition}
          scrollEl={this.scrollEl}
        >
          <Space.Group direction="vertical">{this.$slots.default}</Space.Group>
        </AnchorNavigation>
      </div>
    );
  },
};

export default PlayGroundPage;
