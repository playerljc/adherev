import classNames from 'classnames';
import { h } from 'vue';

import { selectorPrefix } from '../../searchtable';
import { columnHeaderAlign } from '../../types';
import vueDraggableResizable from './drag/VueDraggableResizable';

const columnAlignMap = new Map<string | null, string>([
  [columnHeaderAlign.center, columnHeaderAlign.center],
  [columnHeaderAlign.left, columnHeaderAlign.left],
  [columnHeaderAlign.right, columnHeaderAlign.right],
  ['', ''],
  [null, ''],
]);

export default (columns) => (props, children) => {
  const col = columns[props.colStart - 1];

  if (!col || col.key === '_number' || !col.width || !col.resize) {
    return (
      <th
        {...props}
        class={classNames(`${selectorPrefix}-resize-table-th`, columnAlignMap.get(col?.align))}
      >
        <span class="ant-table-header-column">{children.slots.default()}</span>
      </th>
    );
  }

  const dragProps = {
    key: col.dataIndex || col.key,
    class: `${selectorPrefix}-table-draggable-handle`,
    w: 10,
    x: 0,
    z: 1,
    axis: 'x',
    draggable: true,
    resizable: false,
    onDrag: (x) => {
      // console.log('onDragging', x, col);
      col.onHeaderCell(col, { x, width: Math.max(11, col.width + x) });
    },
    onclick: (e) => e.stopPropagation(),
  };

  // @ts-ignore
  const drag = h(vueDraggableResizable, { ...dragProps });

  return h(
    'th',
    {
      ...props,
      class: classNames(`${selectorPrefix}-resize-table-th`, columnAlignMap.get(col?.align)),
    },
    [h('span', { class: 'ant-table-header-column' }, children.slots.default()), drag],
  );
};
