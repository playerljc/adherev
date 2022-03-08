import { computed, CSSProperties, defineComponent } from 'vue';
import { number, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-space';

enum directionType {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

const spaceProps = {
  direction: string<directionType>().def(directionType.vertical),
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

    return () => (
      <div
        // @ts-ignore
        class={selectorPrefix}
        style={getStyle.value}
      />
    );
  },
});

const spaceGroupProps = {
  direction: string<directionType>().def(directionType.vertical),
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
      const JSXS: JSX.Element[] = [];

      if (slots.default) {
        const children = slots.default();

        for (let i = 0; i < children.length; i++) {
          if (i !== 0) {
            const spaceProps = {
              key: i,
              direction: props.direction,
              size: props.size,
              class: props.className,
              style: props.style,
            };

            // @ts-ignore
            JSXS.push(<Space {...spaceProps} />);
          }

          JSXS.push(children[i]);
        }
      }

      return (
        <div
          // @ts-ignore
          class={`${selectorPrefix}-group ${props.direction}`}
        >
          {JSXS}
        </div>
      );
    };
  },
});

export default Space;
