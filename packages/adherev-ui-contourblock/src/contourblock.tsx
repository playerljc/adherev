import { VNode } from 'vue';

const selectorPrefix = 'adherev-ui-contourblock';

const ContourBlock: any = {
  name: 'adv-contourblock',
  render(h): VNode {
    return (
      <div>
        <div class={`${selectorPrefix}`}>
          <div class={`${selectorPrefix}-inner`}>{this.$slots.default}</div>
        </div>
      </div>
    );
  },
};

export default ContourBlock;
