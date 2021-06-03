const selectorPrefix = 'adherev-ui-space';

/**
 * Space
 */
const Space = {
  name: 'adv-space',
  props: {
    direction: {
      type: String,
      require: true,
      default: 'vertical',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      },
    },
    size: {
      type: [Number, String],
      require: true,
      default: 20,
    },
    className: {
      type: String,
      require: false,
      default: '',
    },
  },
  methods: {
    getStyle() {
      // @ts-ignore
      const { direction, size } = this;

      if (direction === 'horizontal') {
        return {
          display: 'inline-block',
          height: '100%',
          margin: `0 ${size}px`,
        };
      }

      return {
        width: '100%',
        margin: `${size}px 0`,
      };
    },
  },
  render(h) {
    // @ts-ignore
    const { className } = this;

    return (
      // @ts-ignore
      <div className={`${selectorPrefix} ${className}`} style={this.getStyle()} />
    );
  },
};

/**
 * SpaceGroup
 */
export const SpaceGroup = {
  name: 'adv-space-group',
  props: {
    direction: {
      type: String,
      require: true,
      default: 'vertical',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      },
    },
    size: {
      type: [Number, String],
      require: true,
      default: 20,
    },
    className: {
      type: String,
      require: false,
      default: '',
    },
  },
  render(h) {
    // @ts-ignore
    const { $slots, direction, size, className } = this;

    console.log(`adv-space-group`, $slots, direction, size, className);

    const JSXS = [];

    if ($slots.default) {
      for (let i = 0; i < $slots.default.length; i++) {
        if (i !== 0) {
          const props = {
            props: {
              ...{
                direction,
                size,
                className,
              },
            },
          };

          // @ts-ignore
          JSXS.push(<Space {...props} key={i} />);
        }

        // @ts-ignore
        JSXS.push($slots.default[i]);
      }

      console.log('adv-space-group-vnodes', JSXS);
    }

    // @ts-ignore
    return <div class={`${selectorPrefix}-group ${direction}`}>{JSXS}</div>;
  },
};

export default Space;
