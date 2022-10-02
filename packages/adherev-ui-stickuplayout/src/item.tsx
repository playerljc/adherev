const selectorPrefix = 'adherev-ui-stickuplayout-item';

const Item: any = {
  name: 'adv-stickuplayout-item',
  render(h) {
    const { $slots } = this;

    return (
      <div class={selectorPrefix}>
        <div class={`${selectorPrefix}-header`}>{$slots.title}</div>
        <div class={`${selectorPrefix}-content`}>{$slots.default}</div>
      </div>
    );
  },
};

export default Item;
