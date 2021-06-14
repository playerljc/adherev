// @ts-ignore
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
      // @ts-ignore
      const { className } = this;

      return classNames(
        selectorPrefix,
        'swiper-slide',
        // @ts-ignore
        className.split(' '),
      );
    },
  },
  render(h) {
    return (
      // @ts-ignore*
      <div class={this.getClassName}>{this.$slots.default}</div>
    );
  },
};
