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
import { TableRowComponentHookFunctionParameter, TableRowComponentProps } from '../../types';
import useRowDragSortRow from '../DragSort/RowDragSort/DragSortRow';
import useEditableRow from '../EditableCell/EditableRow';
import useEditableTableRow from '../EditableCell/EditableTableRow';

/**
 * TableRow
 * @description 表格行组件
 */
export default {
  inject: ['getContext'],
  data() {
    return {
      $map: new Map<string, (params: TableRowComponentHookFunctionParameter) => any>([
        ['useEditableRow', useEditableRow],
        ['useEditableTableRow', useEditableTableRow],
        ['useRowDragSortRow', useRowDragSortRow],
      ]),
    };
  },
  computed: {
    props(): TableRowComponentProps {
      return this.getContext?.()?.context?.onRow?.(this.$parent.rowKey);
    },
  },
  render(h) {
    // 所有的reducer都去装饰tr，最终返回装饰后的tr
    const trREL = <tr>{this.$slots.default}</tr>;

    return this.getContext?.()
      ?.context?.getTableRowComponentReducers()
      ?.reduce?.(
        (pre, hookName) => {
          pre.value = this.$data.$map.get(hookName)?.({
            h,
            context: this.getContext(),
            value: pre.value,
            ...this.props,
          });

          return pre;
        },
        {
          value: trREL,
        },
      ).value as any;
  },
};
