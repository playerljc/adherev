import { VNode, defineComponent, inject } from 'vue';
import { number, object } from 'vue-types';

import { ColumnTypeExt } from '../../types';
import useRowDragSortRow from '../DragSort/RowDragSort/DragSortRow';
import useEditableRow from '../EditableCell/EditableRow';
import useEditableTableRow from '../EditableCell/EditableTableRow';

export default defineComponent({
  props: {
    record: object().def({}),
    rowIndex: number(),
    column: object<ColumnTypeExt>().def({}),
  },
  setup(props, { slots }) {
    const getContext = inject<any>('getContext');
    const context = getContext?.()?.context;

    const rowDragSortRow = useRowDragSortRow(props);
    const editableRow = useEditableRow(props);
    const editableTableRow = useEditableTableRow(props);

    const map = new Map<string, (tbodyVNode: VNode) => any>([
      ['useRowDragSortRow', rowDragSortRow],
      ['useEditableRow', editableRow],
      ['useEditableTableRow', editableTableRow],
    ]);

    return () => {
      // 所有的reducer都去装饰tr，最终返回装饰后的tr
      const trVNode = <tr>{slots?.default?.()}</tr>;

      return context?.getTableRowComponentReducers()?.reduce?.(
        (pre, hookName) => {
          // 调用混入对象的use方法
          pre.value = map.get(hookName)?.(pre.value);

          return pre;
        },
        {
          value: trVNode,
        },
      ).value as any;
    };
  },
});
