import { defineComponent,VNode } from 'vue';

import Split from '@baifendian/adherev-ui-split';

const selectorPrefix = `adherev-ui-searchtable-optionswrap`;

export default defineComponent({
  name: selectorPrefix,
  render() {
    const _children = this?.$slots?.default?.();

    const children: any = [];

    let result;

    function loop(_arr) {
      for(let i = 0 ; i < _arr.length; i++) {
        if(typeof _arr[i].type === 'symbol' && _arr[i].children) {
          loop(_arr[i].children);
        } else {
          children.push(_arr[i]);
        }
      }
    }

    loop(_children);

    if (children.length <= 1) {
      result = children;
    } else {
      const filter = children.filter((t) => {
        if (typeof t.type !== 'string' && t?.type?.name?.indexOf?.('adv-conditionalrender') !== -1) {
          if (t?.props?.conditional) return true;

          return !!t?.children?.find?.((c) => c?.scopeId === 'noMatch');
        }

        return true;
      });

      if (filter.length <= 1) {
        result = children;
      } else {
        for (let i = 0; i <= filter.length - 2; i++) {
          const index = children.findIndex((t) => t === filter[i]);
          children.splice(index + 1, 0, <Split direction="horizontal" />);
        }

        result = children;
      }
    }

    return <div class={selectorPrefix}>{result}</div>;
  },
});
