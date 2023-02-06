import { PropType } from 'vue';

import { ColumnTypeExt } from '../../types';
import RowDragSortCell from '../DragSort/RowDragSort/DragSortCell';
import EditableCell from '../EditableCell/EditableCell';
import EditableTableCell from '../EditableCell/EditableTableCell';

/**
 * TableCell
 * @description 表格单元格(td)组件
 */
export default {
  props: {
    rowIndex: {
      type: Number,
    },
    record: {
      type: Object as PropType<{
        [propName: string]: any;
      }>,
    },
    column: {
      type: Object as PropType<ColumnTypeExt>,
    },
    columns: {
      type: Array as PropType<ColumnTypeExt[]>,
    },
  },
  inject: ['getContext'],
  // 混入EditableCell, EditableTableCell, RowDragSortCell
  mixins: [EditableCell, EditableTableCell, RowDragSortCell],
  render(h) {
    // 所有的reducer都去装饰tr，最终返回装饰后的tr
    const tdVNode = <td>{this.$slots.default}</td>;

    const context = this.getContext?.()?.context;

    return context?.getTableCellComponentReducers()?.reduce?.(
      (pre, hookName) => {
        // 调用指定混入的use方法
        pre.value = this[hookName](h, pre.value);

        return pre;
      },
      {
        value: tdVNode,
      },
    ).value as any;
  },
};
