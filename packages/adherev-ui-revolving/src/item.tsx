import classNames from 'classnames';

const selectorPrefix = 'adherev-ui-revolving-item';

const Item: any = {
  name: 'adv-revolving-item',
  computed: {
    getClassName() {
      return classNames(selectorPrefix, 'swiper-slide');
    },
  },
  render(h) {
    return <div class={this.getClassName}>{this.$slots.default}</div>;
  },
};

export default Item;
