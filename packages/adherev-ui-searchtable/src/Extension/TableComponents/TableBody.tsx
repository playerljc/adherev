import { TableBodyComponentProps } from '../../types';
import RowDragSortBody from '../DragSort/RowDragSort/DragSortBody';

/**
 * TableRow
 * @description 表格tbody组件
 */
export default {
  inject: ['getContext'],
  mixins: [RowDragSortBody],
  computed: {
    // 获取tbody的props参数
    props(): TableBodyComponentProps {
      return this.getContext?.()?.context?.onBody?.();
    },
  },
  render(h) {
    // 所有的reducer都去装饰tbody，最终返回装饰后的tbody
    const tbodyVNode = <tr>{this.$slots.default}</tr>;

    const context = this.getContext?.()?.context;

    return context?.getTableBodyComponentReducers()?.reduce?.(
      (pre, hookName) => {
        // 调用混入对象的use方法
        pre.value = this[hookName](h, pre.value);

        return pre;
      },
      {
        value: tbodyVNode,
      },
    ).value as any;
  },
};
