import classNames from 'classnames';
import { VNode, defineComponent, toRaw } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import type {
  DataItem,
  GroupRenderDetail,
  RenderDetail,
  RenderGridSearchForm,
  RenderHorizontal,
  RenderVertical,
  RowCountRef,
  TableGridLayoutProps,
} from './types';
import { tableGridLayoutProps } from './types';

const selectorPrefix = 'adherev-ui-tablegridlayout';

/**
 * renderHorizontal
 * @description 渲染横向布局
 * @return {
 *   element: JSX.Element[];
     detail: GroupRenderDetail;
 * }
 */
const renderHorizontal: RenderHorizontal = (slots, params) => {
  const {
    data: { columnCount: _columnCount, data: _data },
    rowCountRef,
  } = params;

  /**
   * createRow
   * @description 创建一行
   */
  function createRow() {
    const startIndex = _index;

    // 一行的所有列
    const tdJSXChildren: VNode[] = [];

    // 一行的列数计数
    let columnsCount = 0;

    while (_index < flatData.length) {
      const item = flatData[_index];

      if (columnsCount !== columnCount) {
        if (
          item &&
          item.props &&
          'colspan' in item.props &&
          ['number', 'string'].includes(typeof item.props.colspan)
        ) {
          columnsCount += parseInt(`${item.props.colspan}`);
        } else {
          columnsCount = columnsCount + 1;
        }

        tdJSXChildren.push(item);
        _index++;
      } else {
        break;
      }
    }

    // 一行
    if (columnsCount < columnCount) {
      Array.from({ length: columnCount - columnsCount })
        .fill(0)
        .forEach(() => {
          tdJSXChildren.push(<td class={`${selectorPrefix}-table-noborder`} />);
        });
    }

    const rowJSX = (
      <tr
        class={classNames(
          `${selectorPrefix}-table-row`,
          (rowCountRef as RowCountRef).current % 2 === 0 ? 'odd' : 'even',
        )}
      >
        {tdJSXChildren}
      </tr>
    );
    (rowCountRef as RowCountRef).current++;

    rowJSXChildren.push(rowJSX);

    const endIndex = _index - 1;

    detail.push({
      startIndex: startIndex / 2,
      endIndex: (endIndex - 1) / 2,
    });

    if (_index < flatData.length) {
      createRow();
    }

    // 0 1 2 3 4 5 6 7
    // 第一行 0 1 2 3 4 5 | 0 1 2
    // 第二行 6 7 8 9 10 11 | 3 4 5
  }

  const detail: GroupRenderDetail = [];

  // 一行多少列
  const columnCount = (_columnCount as number) * 2;

  // 拉平的数据
  const flatData: VNode[] = [];

  (_data || []).forEach((t) => {
    let label = slots[t.label]?.();
    let value = slots[t.value]?.();

    label = Array.isArray(label) && !!label.length ? label[0] : label;
    value = Array.isArray(value) && !!value.length ? value[0] : value;

    if ('require' in t && !!t.require && label) {
      if (!label.props) {
        label.props = {};
      }

      label.props.class = classNames(
        `${selectorPrefix}-table-row-label`,
        'require',
        label?.props?.class || '',
      );
    }

    flatData.push(label);
    flatData.push(value);
  });

  // 迭代的索引
  let _index = 0;

  const rowJSXChildren: VNode[] = [];

  createRow();

  return {
    element: rowJSXChildren,
    detail,
  };
};

/**
 * renderVertical
 * @description 渲染纵向布局
 * @return VNode[]
 * @param slots
 * @param data
 * @param rowCountRef
 */
const renderVertical: RenderVertical = (slots, data, rowCountRef) => {
  const { columnCount: _columnCount, data: _data } = data;

  /**
   * createRow
   * @description 创建一行
   */
  function createRow() {
    // 一行的所有列
    const tdLabelJSXS: VNode[] = [];
    const tdValueJSXS: VNode[] = [];

    // 一行的列数计数
    let columnsCount = 0;

    // 0 1 2
    // 3 4 5

    const startIndex = _index;

    while (_index < (_data || []).length) {
      const item = (_data || [])[_index];
      let label = typeof item.label === 'string' ? slots[item.label]?.() : item.label;
      let value = slots[item.value]?.();

      label = Array.isArray(label) && !!label.length ? label[0] : label;
      value = Array.isArray(value) && !!value.length ? value[0] : value;

      if (columnsCount !== columnCount) {
        if (
          value &&
          'props' in value &&
          value.props &&
          'colspan' in value.props &&
          ['number', 'string'].includes(typeof value.props.colspan)
        ) {
          columnsCount += parseInt(`${value.props.colspan}`);
        } else {
          columnsCount = columnsCount + 1;
        }

        tdLabelJSXS.push(label);
        tdValueJSXS.push(value);
        _index++;
      } else {
        break;
      }
    }

    // 一行
    if (columnsCount < columnCount) {
      const fillCount = columnCount - columnsCount;
      Array.from({ length: fillCount })
        .fill(0)
        .forEach(() => {
          tdLabelJSXS.push(<td class={`${selectorPrefix}-table-noborder`} />);
          tdValueJSXS.push(<td class={`${selectorPrefix}-table-noborder`} />);
        });
    }

    const labelRowJSX = (
      <tr class={classNames(`${selectorPrefix}-table-row`, 'even')}>{tdLabelJSXS}</tr>
    );
    const valueRowJSX = (
      <tr class={classNames(`${selectorPrefix}-table-row`, 'odd')}>{tdValueJSXS}</tr>
    );

    rowJSXChildren.push(labelRowJSX, valueRowJSX);
    rowCountRef.current += 2;

    const endIndex = _index - 1;

    detail.push({
      startIndex,
      endIndex,
    });

    if (_index < (_data || []).length) {
      createRow();
    }
  }

  const detail: GroupRenderDetail = [];

  // 一行多少列
  const columnCount = _columnCount as number;

  (_data || []).forEach((t) => {
    let label = slots[t.label]?.();

    label = Array.isArray(label) && !!label.length ? label[0] : label;

    if ('require' in t && !!t.require && label) {
      if (!label.props) {
        label.props = {};
      }

      label.props.class = classNames(
        `${selectorPrefix}-table-row-label`,
        'require',
        label?.props?.class || '',
      );

      t.label = label;
    }
  });

  let _index = 0;

  const rowJSXChildren: VNode[] = [];

  createRow();

  return {
    element: rowJSXChildren,
    detail,
  };
};

/**
 * renderGridSearchForm
 * @description 渲染一个Table
 * @return {VNode}
 */
const renderGridSearchForm: RenderGridSearchForm = (slots, params): VNode => {
  const {
    data: {
      className,
      style,
      width: _width,
      colgroup: _colgroup,
      defaultLabelWidth: _defaultLabelWidth = 120,
    },
    layout,
    density: _density,
    parity: _parity = false,
    rowCountRef,
  } = params;

  const densityClass = new Map([
    ['default', 'densitydefault'],
    ['middle', 'densitymiddle'],
    ['small', 'densitysmall'],
  ]);

  const colgroupJSX: VNode[] = [];

  for (let i = 0; i < (_colgroup || []).length; i++) {
    const width = (_colgroup || [])[i];

    colgroupJSX.push(
      // @ts-ignore
      <ConditionalRender key={i} conditional={width !== 'auto'}>
        {{
          default: () => <col width={width || _defaultLabelWidth} />,
          noMatch: () => <col />,
        }}
      </ConditionalRender>,
    );
  }

  return (
    <table
      class={classNames(
        `${selectorPrefix}-table`,
        densityClass.get(_density || 'default'),
        _parity ? 'parity' : '',
        className || '',
      )}
      style={{ width: _width ? _width : '100%', ...(style || {}) }}
    >
      <colgroup>{colgroupJSX}</colgroup>
      {/*@ts-ignore*/}
      <ConditionalRender conditional={layout === 'horizontal'}>
        {{
          default: () => renderHorizontal(slots, params).element,
          noMatch: () => renderVertical(slots, params.data, rowCountRef).element,
        }}
      </ConditionalRender>
    </table>
  );
};

const TableGridLayout = defineComponent({
  name: 'adv-tablegridlayout',
  props: tableGridLayoutProps,
  setup(props, { slots }) {
    const { data, ..._props } = toRaw(props);

    return () => (
      <div class={classNames(selectorPrefix, props.className || '')} style={props.style || {}}>
        {renderGridSearchFormGroup(slots, data, _props)}
      </div>
    );
  },
});

/**
 * Label
 * @description 左侧Label
 * @param props
 * @param slots
 * @constructor
 */
const Label = defineComponent({
  name: 'adv-tablegridlayout-label',
  setup(props, { slots }) {
    return () => (
      <td class={classNames(`${selectorPrefix}-table-row-label`)}>{slots.default?.()}</td>
    );
  },
});

/**
 * Value
 * @description 右侧Value
 * @param props
 * @param slots
 * @constructor
 */
const Value = defineComponent({
  name: 'adv-tablegridlayout-value',
  setup(props, { slots }) {
    return () => (
      <td class={classNames(`${selectorPrefix}-table-row-value`)}>{slots.default?.()}</td>
    );
  },
});

/**
 * renderGridSearchFormGroup
 * @description - 渲染TableGridLayout
 * @param slots
 * @param data
 * @param props
 * @return {VNode}
 */
const renderGridSearchFormGroup = (
  slots: any,
  data?: DataItem[],
  props?: Omit<TableGridLayoutProps, 'data'>,
) => {
  const rowCountRef = { current: 0 };

  const {
    bordered = false,
    innerClassName,
    innerStyle,
    ...renderGridSearchFormProps
  } = props || {};

  return (
    <div
      class={classNames(
        bordered ? `${selectorPrefix}-border` : null,
        `${selectorPrefix}-inner-wrap`,
        innerClassName || '',
      )}
      style={innerStyle || {}}
    >
      {(data || []).map((g, index) => (
        // @ts-ignore
        <ConditionalRender key={g.name || index} conditional={index !== 0}>
          {{
            default: () => (
              <div>
                {renderGridSearchForm(slots, {
                  data: g,
                  rowCountRef,
                  ...renderGridSearchFormProps,
                })}
              </div>
            ),
            noMatch: () =>
              renderGridSearchForm(slots, {
                data: g,
                rowCountRef,
                ...renderGridSearchFormProps,
              }),
          }}
        </ConditionalRender>
      ))}
    </div>
  );
};

/**
 * getRenderDetail
 * @description 获取渲染细节
 * @param slots
 * @param data - 组数据
 * @param props - 配置
 * @return RenderDetail
 */
const getRenderDetail = (
  slots: any,
  data: DataItem[],
  props: Omit<TableGridLayoutProps, 'data'>,
): RenderDetail => {
  const {
    bordered = false,
    innerClassName,
    innerStyle,
    ...renderGridSearchFormProps
  } = props || {};

  const result: RenderDetail = { rowCount: 0, layout: props.layout, detail: [] };

  data.forEach((g) => {
    const rowCountRef = { current: 0 };

    const params = {
      data: g,
      rowCountRef,
      ...renderGridSearchFormProps,
    };

    let detail: GroupRenderDetail = [];

    if (props.layout === 'horizontal') {
      detail = renderHorizontal(slots, params).detail;
    } else {
      detail = renderVertical(slots, params.data, rowCountRef).detail;
    }

    result.rowCount += rowCountRef.current;

    result.detail.push({
      name: g.name!,
      rowCount: props.layout === 'horizontal' ? rowCountRef.current : rowCountRef.current / 2,
      detail,
    });
  });

  return result;
};

export { TableGridLayout, renderGridSearchFormGroup, getRenderDetail, Label, Value };
