import classNames from 'classnames';

import { selectorPrefix } from '../../SearchTable';
import { ColumnTypeExt, columnHeaderAlign } from '../../types';

const columnAlignMap = new Map<string | null, string>([
  [columnHeaderAlign.center, columnHeaderAlign.center],
  [columnHeaderAlign.left, columnHeaderAlign.left],
  [columnHeaderAlign.right, columnHeaderAlign.right],
  ['', ''],
  [null, ''],
]);

/**
 * findColumnByKey
 * @param columns
 * @param key
 * @return column | null
 */
function findColumnByKey(columns: ColumnTypeExt[], key): any {
  function loop(children) {
    let res;

    for (let i = 0; i < children.length; i++) {
      if (children[i].key === key) {
        res = children[i];
        break;
      } else {
        if (
          'children' in children[i] &&
          Array.isArray(children[i].children) &&
          children[i].children.length
        ) {
          res = loop(children[i].children);
          if (res) {
            break;
          }
        }
      }
    }

    return res;
  }

  return loop(columns);
}

export default (columns) =>
  function (h, props, children) {
    const { key, ...restProps } = props;

    const col = findColumnByKey(columns, key);

    if (!col || !col.width || !col.$resizable) {
      return h(
        'th',
        {
          ...restProps,
          class: classNames(`${selectorPrefix}-resize-table-th`, columnAlignMap.get(col?.align)),
        },
        children,
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

    return h(
      'th',
      {
        ...restProps,
        class: classNames(`${selectorPrefix}-resize-table-th`, columnAlignMap.get(col?.align)),
      },
      [...children, drag],
    );
  };
