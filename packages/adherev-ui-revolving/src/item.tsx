import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-revolving-item';

export default {
  name: 'adv-revolving-item',
  props: {
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    getClassName() {
      const { className } = this;

      return classNames(
        selectorPrefix,
        'swiper-slide',

        className.split(' '),
      );
    },
  },
  render(h) {
    return <div class={this.getClassName}>{this.$slots.default}</div>;
  },
};
