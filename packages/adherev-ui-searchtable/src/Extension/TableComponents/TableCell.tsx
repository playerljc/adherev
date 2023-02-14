import { VNode, defineComponent, inject } from 'vue';
import { array, number, object } from 'vue-types';

import { ColumnTypeExt } from '@/types';

import { useRowDragSortCell } from '../DragSort/RowDragSort/DragSortCell';
import { useEditableCell } from '../EditableCell/EditableCell';
import { useEditableTableCell } from '../EditableCell/EditableTableCell';

/**
 * TableCell
 * @description 表格单元格(td)组件
 */
export default defineComponent({
  props: {
    // 行的索引
    rowIndex: number(),
    // 行的数据
    record: object().def({}),
    // 列的配置
    column: object<ColumnTypeExt>().def({}),
    // 所有列的配置
    columns: array<ColumnTypeExt>().def([]),
  },
  setup(props, _context) {
    const { slots } = _context;

    const getContext = inject<any>('getContext');
    const context = getContext?.()?.context;

    const editableCell = useEditableCell(props, _context);
    const editableTableCell = useEditableTableCell(props, _context);
    const rowDragSortCell = useRowDragSortCell(props, _context);

    const map = new Map<string, (tbodyVNode: VNode) => any>([
      ['useEditableCell', editableCell],
      ['useEditableTableCell', editableTableCell],
      ['useRowDragSortCell', rowDragSortCell],
    ]);

    return () => {
      // 所有的reducer都去装饰tr，最终返回装饰后的tr
      const tdVNode = <td>{slots?.default?.()}</td>;

      return context?.getTableCellComponentReducers()?.reduce?.(
        (pre, hookName) => {
          // 调用混入对象的use方法
          pre.value = map.get(hookName)?.(pre.value);

          return pre;
        },
        {
          value: tdVNode,
        },
      ).value as any;
    }

  },
});
