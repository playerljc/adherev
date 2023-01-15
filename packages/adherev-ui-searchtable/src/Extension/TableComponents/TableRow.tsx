// export default {
//   render(h) {
//     // console.log('row', this.$parent.$parent.$vnode.data.props);
//
//     console.log('row1', this.$parent);
//     console.log('row2', this.$parent.$parent);
//     console.log('root', this.$root);
//
//     return <tr>{this.$slots.default}</tr>;
//   },
// };
import { TableRowComponentProps } from '../../types';
import RowDragSortRow from '../DragSort/RowDragSort/DragSortRow';
import EditableRow from '../EditableCell/EditableRow';
import EditableTableRow from '../EditableCell/EditableTableRow';

/**
 * TableRow
 * @description 表格行(tr)组件
 */
export default {
  inject: ['getContext'],
  // 混入EditableRow,EditableTableRow,RowDragSortRow
  mixins: [EditableRow, EditableTableRow, RowDragSortRow],
  computed: {
    props(): TableRowComponentProps {
      return this.getContext?.()?.context?.onRow?.(this.$parent.rowKey);
    },
  },
  render(h) {
    // 所有的reducer都去装饰tr，最终返回装饰后的tr
    const trVNode = <tr>{this.$slots.default}</tr>;

    const context = this.getContext?.()?.context;

    return context?.getTableRowComponentReducers()?.reduce?.(
      (pre, hookName) => {
        // 调用混入对象的use方法
        pre.value = this[hookName](h, pre.value);

        return pre;
      },
      {
        value: trVNode,
      },
    ).value as any;
  },
};
