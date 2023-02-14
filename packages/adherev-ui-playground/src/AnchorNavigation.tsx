import { ExtractPropTypes, defineComponent, onBeforeMount, onMounted, ref, watch } from 'vue';
import { array, object, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import Util from '@baifendian/adherev-util';

const selectPrefix = 'adherev-ui-playground-anchor-navigation';

export const anchorNavigationProps = {
  defaultActiveAnchor: string().def(''),
  anchors: array<{ anchor: string; name: string }>().def([]),
  anchorPosition: object<{
    top: number;
    width: number;
  }>().def({
    top: 77,
    width: 120,
  }),
  scrollEl: object<HTMLElement>(),
};

type anchorDimensionIndexItemType = {
  anchor: string;
  range: {
    top?: number;
    bottom?: number;
  };
};

export default defineComponent({
  name: 'adv-playground-anchor-navigation',
  props: anchorNavigationProps,
  setup(props, { slots }) {
    const activeAnchor = ref<string>(props.defaultActiveAnchor);

    const anchorRef = ref<HTMLDivElement>();

    let anchorDimensionIndex: anchorDimensionIndexItemType[] = [];

    const onHashChange = () => {
      activeAnchor.value = window.location.hash.substring(1);
    };

    const onWrapScroll = () => {
      if (!props.scrollEl) return;

      const scrollTop = props.scrollEl.scrollTop;

      const anchor = findAnchorByScrollVal(scrollTop);

      if (anchor) {
        activeAnchor.value = anchor.anchor;
      }

      if (!anchorRef.value) return;

      if (scrollTop === 0) {
        anchorRef?.value?.classList?.remove?.(`${selectPrefix}-affix`);
      } else {
        anchorRef?.value?.classList?.add?.(`${selectPrefix}-affix`);
        (anchorRef.value as HTMLDivElement).style.top = `${props.anchorPosition.top}px`;
      }
    };

    const createAnchorDimensionIndex = () => {
      if (!props.scrollEl) return;

      const container = props.scrollEl as HTMLElement;

      anchorDimensionIndex = [];

      props.anchors.forEach(({ anchor }, index) => {
        const el = document.getElementById(anchor);

        if (!el) return;

        const top = Util.getTopUntil?.({ el, untilEl: container }) as number;

        let bottom;
        const entry = {
          anchor,
          range: {
            top,
            bottom,
          },
        };

        anchorDimensionIndex.push(entry);

        if (index !== 0) {
          anchorDimensionIndex[index - 1].range.bottom = top;
        }

        if (index === anchorDimensionIndex.length - 1) {
          (entry.range as any).bottom = top + el.offsetHeight;
        }
      });
    };

    const findAnchorByScrollVal = (scrollVal: number) => {
      return anchorDimensionIndex.find(
        (anchorIndexItem: anchorDimensionIndexItemType) =>
          // @ts-ignore
          scrollVal >= anchorIndexItem.range.top && scrollVal <= anchorIndexItem.range.bottom,
      );
    };

    watch(
      () => props.defaultActiveAnchor,
      (newVal) => (activeAnchor.value = newVal),
    );

    watch(
      () => props.scrollEl,
      (scrollEl, oldVal) => {
        oldVal?.removeEventListener?.('scroll', onWrapScroll);

        if (!scrollEl) return;

        createAnchorDimensionIndex();

        scrollEl?.addEventListener?.('scroll', onWrapScroll);
      },
    );

    onMounted(() => {
      if (typeof window === 'undefined') return;

      window.addEventListener('hashchange', onHashChange);

      if (props.scrollEl) {
        createAnchorDimensionIndex();

        props.scrollEl.addEventListener('scroll', onWrapScroll);
      }
    });

    onBeforeMount(() => {
      window.removeEventListener('hashchange', onHashChange);

      if (!props.scrollEl) return;
      props.scrollEl.removeEventListener('scroll', onWrapScroll);
    });

    return () => (
      <div class={selectPrefix}>
        <div class={`${selectPrefix}-auto`}>
          <div class={`${selectPrefix}-inner`}>{slots?.default?.()}</div>
        </div>

        <ConditionalRender conditional={!!props.anchors.length}>
          <div class={`${selectPrefix}-fixed`} style={{ width: `${props.anchorPosition.width}px` }}>
            <ul class={`${selectPrefix}-anchor`} ref={anchorRef}>
              {props.anchors.map((anchor) => (
                <li
                  class={anchor.anchor === activeAnchor.value ? `${selectPrefix}-active` : ''}
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
});
