import { selectorPrefix } from '../../searchtable';

export default (columns) => (h, props, children) => {
  const { key, ...restProps } = props;

  const col = columns.find((col) => {
    const k = col.dataIndex || col.key;
    return k === key;
  });

  if (!col || !col.width || !col.resizable) {
    return (
      <th {...restProps} class={`${selectorPrefix}-resize-table-th`}>
        {children}
      </th>
    );
  }

  const dragProps = {
    key: col.dataIndex || col.key,
    class: `${selectorPrefix}-table-draggable-handle`,
    attrs: {
      w: 10,
      x: 0,
      z: 1,
      axis: 'x',
      draggable: true,
      resizable: false,
    },
    on: {
      dragging: (x) => {
        col.onHeaderCell(col, { x, width: Math.max(11, col.width + x) });
      },
    },
  };
  const drag = h('vue-draggable-resizable', { ...dragProps });
  return h('th', { ...restProps, class: `${selectorPrefix}-resize-table-th` }, [...children, drag]);
};
