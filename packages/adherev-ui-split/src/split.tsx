const selectorPrefix = 'adherev-ui-split';

/**
 * Split
 */
const Split = {
  name: 'adv-split',
  props: {
    direction: {
      type: String,
      require: true,
      default: 'vertical',
      validator: function (value) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1;
      },
    },
    size: {
      type: [String, Number],
      default: 20,
    },
    className: {
      type: String,
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
          width: '1px',
          height: '100%',
          margin: `0 ${size}px`,
        };
      }

      return {
        width: '100%',
        height: '1px',
        margin: `${size}px 0`,
      };
    },
  },
  render(h) {
    // @ts-ignore
    const { className } = this;

    // @ts-ignore
    return <div class={`${selectorPrefix} ${className}`} style={this.getStyle()} />;
  },
};

/**
 * SplitGroup
 */
export const SplitGroup = {
  name: 'adv-split-group',
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
      require: false,
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
          JSXS.push(<Split {...props} key={i} />);
        }

        // @ts-ignore
        JSXS.push($slots.default[i]);
      }
    }

    // @ts-ignore
    return <div class={`${selectorPrefix}-group ${direction}`}>{JSXS}</div>;
  },
};

export default Split;
