import { CSSProperties, VNode, computed, defineComponent } from 'vue';
import { number, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-space';

enum directionType {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export const spaceProps = {
  direction: string().def(directionType.vertical),
  size: number().def(20),
};

/**
 * Space
 */
const Space = defineComponent({
  name: 'adv-space',
  props: spaceProps,
  setup(props, {}) {
    const getStyle = computed(() => {
      if (props.direction === directionType.horizontal) {
        return {
          display: 'inline-block',
          height: '100%',
          margin: `0 ${props.size}px`,
        };
      }

      return {
        width: '100%',
        height: '0.1px',
        margin: `${props.size}px 0`,
      };
    });

    return () => <div class={selectorPrefix} style={getStyle.value} />;
  },
});

export const spaceGroupProps = {
  direction: string().def(directionType.vertical),
  size: number().def(20),
  className: string().def(''),
  style: object<CSSProperties>().def({}),
};

/**
 * SpaceGroup
 */
export const SpaceGroup = defineComponent({
  name: 'adv-space-group',
  props: spaceGroupProps,
  setup(props, { slots }) {
    return () => {
      const nodes: VNode[] = [];

      if (slots.default) {
        const children = slots.default?.();

        if (!children || !Array.isArray(children) || !children.length) return;

        const childrenFlat: VNode[] = [];

        for (const child of children) {
          if (child.type.toString() === 'Symbol(Fragment)') {
            if ('children' in child && Array.isArray(child.children)) {
              children.push(...((child.children || []) as []));
            }
          } else {
            childrenFlat.push(child);
          }
        }

        for (let i = 0; i < childrenFlat.length; i++) {
          if (i !== 0) {
            const spaceProps = {
              key: i,
              direction: props.direction,
              size: props.size,
              class: props.className,
              style: props.style,
            };

            nodes.push(<Space {...spaceProps} />);
          }

          nodes.push(childrenFlat[i]);
        }
      }

      return <div class={`${selectorPrefix}-group ${props.direction}`}>{nodes}</div>;
    };
  },
});

export default Space;
