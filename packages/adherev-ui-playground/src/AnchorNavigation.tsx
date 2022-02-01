import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Util from '@baifendian/adherev-util';

export const AnchorNavigationPropTypes = {
  defaultActiveAnchor: {
    type: String,
    default: '',
  },
  anchors: {
    type: Array,
    default: () => [],
  },
  anchorPosition: {
    type: Object,
    default: () => ({
      top: 77,
      width: 120,
    }),
  },
  scrollEl: {
    type: HTMLElement,
    default: () => null,
  },
};

const selectPrefix = 'adherev-ui-playground-anchor-navigation';

export default {
  name: 'adv-playground-anchor-navigation',
  props: {
    ...AnchorNavigationPropTypes,
  },
  data() {
    return {
      activeAnchor: this.defaultActiveAnchor,
      $anchorDimensionIndex: [],
    };
  },
  watch: {
    defaultActiveAnchor(activeAnchor) {
      this.activeAnchor = activeAnchor;
    },
    scrollEl(scrollEl, oldVal) {
      if (oldVal) {
        (oldVal as HTMLElement).removeEventListener('scroll', this.onWrapScroll);
      }

      if (!scrollEl) return;

      this.createAnchorDimensionIndex();

      (scrollEl as HTMLElement).addEventListener('scroll', this.onWrapScroll);
    },
  },
  mounted() {
    if (typeof window === 'undefined') return;

    window.addEventListener('hashchange', this.onHashChange);

    const { scrollEl } = this;

    if (scrollEl) {
      this.createAnchorDimensionIndex();

      (scrollEl as HTMLElement).addEventListener('scroll', this.onWrapScroll);
    }
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('hashchange', this.onHashChange);

    const { scrollEl } = this;

    if (!scrollEl) return;
    (scrollEl as HTMLElement).removeEventListener('scroll', this.onWrapScroll);
  },
  methods: {
    /**
     * onHashChange
     */
    onHashChange() {
      this.activeAnchor = window.location.hash.substring(1);
    },
    /**
     * onWrapScroll
     */
    onWrapScroll() {
      const {
        scrollEl,
        $refs: { anchorRef },
      } = this;

      if (!scrollEl) return;

      const scrollTop = (scrollEl as HTMLElement).scrollTop;

      const anchor = this.findAnchorByScrollVal(scrollTop);

      if (anchor) {
        this.activeAnchor = anchor.anchor;
      }

      if (scrollTop === 0) {
        (anchorRef as HTMLElement).classList.remove(`${selectPrefix}-affix`);
      } else {
        (anchorRef as HTMLElement).classList.add(`${selectPrefix}-affix`);
        (anchorRef as HTMLElement).style.top = `${this.anchorPosition.top}px`;
      }
    },
    /**
     * createAnchorDimensionIndex
     */
    createAnchorDimensionIndex(): void {
      const { scrollEl, $data } = this;

      if (!scrollEl) return;

      const container = scrollEl as HTMLElement;

      $data.$anchorDimensionIndex = [];

      this.anchors.forEach(({ anchor }, index) => {
        const el = document.getElementById(anchor) as HTMLElement;

        if (!el) return;

        const top = Util.getTopUntil({ el, untilEl: container });

        const entry = {
          anchor,
          range: {
            top,
            bottom: undefined,
          },
        };

        $data.$anchorDimensionIndex.push(entry);

        if (index !== 0) {
          $data.$anchorDimensionIndex[index - 1].range.bottom = top;
        }

        if (index === $data.$anchorDimensionIndex.length - 1) {
          entry.range.bottom = top + el.offsetHeight;
        }
      });
    },

    /**
     * findAnchorByScrollVal
     * @param scrollVal
     */
    findAnchorByScrollVal(scrollVal: number) {
      const { $data } = this;

      return $data.$anchorDimensionIndex.find(
        (anchorIndexItem) =>
          scrollVal >= anchorIndexItem.range.top && scrollVal <= anchorIndexItem.range.bottom,
      );
    },
  },
  render(h) {
    return (
      <div class={selectPrefix}>
        <div class={`${selectPrefix}-auto`}>
          <div class={`${selectPrefix}-inner`}>{this.$slots.default}</div>
        </div>

        <ConditionalRender conditional={!!this.anchors.length}>
          <div class={`${selectPrefix}-fixed`} style={{ width: `${this.anchorPosition.width}px` }}>
            <ul class={`${selectPrefix}-anchor`} ref="anchorRef">
              {this.anchors.map((anchor) => (
                <li
                  class={anchor.anchor === this.activeAnchor ? `${selectPrefix}-active` : ''}
                  title={anchor.name}
                >
                  <a href={`#${anchor.anchor}`}>{anchor.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </ConditionalRender>
      </div>
    );
  },
};
