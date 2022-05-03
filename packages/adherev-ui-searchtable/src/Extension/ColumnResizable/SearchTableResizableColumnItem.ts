/**
 * handleResize
 * @description 表头列拖动的时候
 * @param context
 * @param column
 * @param columnsWidth
 * @param x
 * @param y
 * @param width
 * @param height
 * @protected
 */
function handleResize({ context, key, columnsWidth }, { x, y, width, height }) {
  columnsWidth.set(key, { x, y, width, height });

  context.$forceUpdate();
}

// @ts-ignore
export default ({
  columnsWidth,
  context,
  index,
  column,
}: {
  columnsWidth: Map<string, { x: number; y: number; width: number; height: number }>;
  context: any;
  index: number;
  column: any;
}) => {
  // 如果设置了列可拖动
  const colEls = context?.$refs.tableWrapRef?.querySelectorAll?.(
    '.ant-table-body > table > colgroup > col',
  );

  let spanCount = 0;

  if (context.getRowSelection()) {
    spanCount = spanCount + 1;
  }

  if (context.isShowNumber()) {
    spanCount = spanCount + 1;
  }

  let computedWidth =
    colEls && colEls.length > spanCount ? colEls?.[spanCount + index]?.style?.width : null;

  if (computedWidth) {
    computedWidth = parseInt(computedWidth);
  }

  const columnSizeItem = columnsWidth.get(column.key as string);

  const width = columnSizeItem ? columnSizeItem.width : column.width ? column.width : computedWidth;

  return {
    ...column,
    width,
    // 加入onHeaderCell
    onHeaderCell: (_column, { x, y, width, height }) => {
      handleResize({ context, key: _column.key, columnsWidth }, { x, y, width, height });
    },
  };
};
