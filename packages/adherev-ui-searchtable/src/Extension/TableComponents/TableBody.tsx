import { VNode, defineComponent, inject } from 'vue';

import useDragSortRowBody from '../DragSort/RowDragSort/DragSortBody';

/**
 * TableRow
 * @description 表格tbody组件
 */
export default defineComponent({
  setup(props, { slots, attrs }) {
    const getContext = inject<any>('getContext');

    const context = getContext?.()?.context;

    const dragSortRowBody = useDragSortRowBody(attrs);

    const map = new Map<string, (tbodyVNode: VNode) => any>([
      ['useDragSortRowBody', dragSortRowBody],
    ]);

    return () => {
      const tbodyVNode = <tbody>{slots?.default?.()}</tbody>;

      return context?.getTableBodyComponentReducers()?.reduce?.(
        (pre, hookName) => {
          // 调用混入对象的use方法
          pre.value = map.get(hookName)?.(pre.value);

          return pre;
        },
        {
          value: tbodyVNode,
        },
      ).value as any
    }
  },
});
