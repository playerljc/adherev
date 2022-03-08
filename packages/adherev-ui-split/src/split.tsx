import { computed, CSSProperties, defineComponent } from 'vue';
import { number, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-split';

enum directionType {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

const splitProps = {
  direction: string<directionType>().def(directionType.vertical),
  size: number().def(20),
};

/**
 * Split
 */
const Split = defineComponent({
  name: 'adv-split',
  props: splitProps,
  setup(props) {
    const getStyle = computed(() => {
      if (props.direction === directionType.horizontal) {
        return {
          display: 'inline-block',
          width: '1px',
          height: '100%',
          margin: `0 ${props.size}px`,
        };
      }

      return {
        width: '100%',
        height: '1px',
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

const splitGroupProps = {
  direction: string<directionType>().def(directionType.vertical),
  size: number().def(20),
  className: string().def(''),
  style: object<CSSProperties>().def({}),
};

/**
 * SplitGroup
 */
export const SplitGroup = defineComponent({
  name: 'adv-split-group',
  props: splitGroupProps,
  setup(props, { slots }) {
    return () => {
      const JSXS: JSX.Element[] = [];

      if (slots.default) {
        const children = slots.default();

        for (let i = 0; i < children.length; i++) {
          if (i !== 0) {
            const _props = {
              key: i,
              direction: props.direction,
              size: props.size,
              class: props.className,
              style: props.style,
            };

            // @ts-ignore
            JSXS.push(<Split {..._props} />);
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

export default Split;
