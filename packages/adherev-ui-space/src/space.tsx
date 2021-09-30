const selectorPrefix = 'adherev-ui-space';

/**
 * Space
 */
const Space = {
  name: 'adv-space',
  props: {
    direction: {
      type: String,
      required: true,
      default: 'vertical',
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      },
    },
    size: {
      type: [Number, String],
      required: true,
      default: 20,
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
  methods: {
    getStyle() {
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
    const { className } = this;

    return <div className={`${selectorPrefix} ${className}`} style={this.getStyle()} />;
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
      required: true,
      default: 'vertical',
      validator(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      },
    },
    size: {
      type: [Number, String],
      required: true,
      default: 20,
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
  },
  render(h) {
    const { $slots, direction, size, className } = this;

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

          JSXS.push(<Space {...props} key={i} />);
        }

        JSXS.push($slots.default[i]);
      }
    }

    return <div class={`${selectorPrefix}-group ${direction}`}>{JSXS}</div>;
  },
};

export default Space;
