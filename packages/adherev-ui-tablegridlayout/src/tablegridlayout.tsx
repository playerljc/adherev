import classNames from 'classnames';
import { CreateElement, PropType, VNode } from 'vue';
import { Fragment } from 'vue-fragment';
import { createHOC } from 'vue-hoc';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import {
  DataItem,
  GroupRenderDetail,
  RenderDetail,
  RenderGridSearchForm,
  RenderHorizontal,
  RenderVertical,
  RowCountRef,
  TableGridLayoutProps,
} from './types';

const selectorPrefix = 'adherev-ui-tablegridlayout';

/**
 * renderHorizontal
 * @description 渲染横向布局
 * @return {
 *   element: JSX.Element[];
     detail: GroupRenderDetail;
 * }
 */
const renderHorizontal: RenderHorizontal = (h: CreateElement, params) => {
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
          item.data &&
          item.data.props &&
          'colSpan' in item.data.props &&
          typeof item.data.props.colSpan === 'number'
        ) {
          columnsCount += item!.data!.props.colSpan;
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
    let label = t.label;

    if ('require' in t && !!t.require) {
      label = createHOC(label, null, {
        class(classnames) {
          return classNames(`${selectorPrefix}-table-row-label`, 'require', classnames || '');
        },
      });
    }

    flatData.push(label);
    flatData.push(t.value);
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
 * @param h
 * @param data
 * @param rowCountRef
 */
const renderVertical: RenderVertical = (h: CreateElement, data, rowCountRef) => {
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

      if (columnsCount !== columnCount) {
        if ('colSpan' in item.value.props && typeof item.value.props.colSpan === 'number') {
          columnsCount += item.value.props.colSpan;
        } else {
          columnsCount = columnsCount + 1;
        }

        tdLabelJSXS.push(item.label);
        tdValueJSXS.push(item.value);
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
    let label = t.label;

    if ('require' in t && !!t.require) {
      t.label = createHOC(label, null, {
        class(classnames) {
          return classNames(`${selectorPrefix}-table-row-label`, 'require', classnames);
        },
      });
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
const renderGridSearchForm: RenderGridSearchForm = (h, params) => {
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
      <ConditionalRender key={i} conditional={width !== 'auto'}>
        <col width={width || _defaultLabelWidth} />
        <col slot="noMatch" />
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
      style={`width:${_width + 'px' ? _width + 'px' : '100%'}${';' + style || ''}`}
    >
      <colgroup>{colgroupJSX}</colgroup>
      <ConditionalRender conditional={layout === 'horizontal'}>
        {renderHorizontal(h, params).element}
        {/*@ts-ignore*/}
        <Fragment slot="noMatch">{renderVertical(h, params.data, rowCountRef).element}</Fragment>
      </ConditionalRender>
    </table>
  );
};

const renderGridSearchFormGroup = (
  h: CreateElement,
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
      style={innerStyle || ''}
    >
      {(data || []).map((g, index) => (
        <ConditionalRender key={g.name || index} conditional={index !== 0}>
          <div>
            {renderGridSearchForm(h, {
              data: g,
              rowCountRef,
              ...renderGridSearchFormProps,
            })}
          </div>
          {/*@ts-ignore*/}
          <Fragment slot="noMatch">
            {renderGridSearchForm(h, {
              data: g,
              rowCountRef,
              ...renderGridSearchFormProps,
            })}
          </Fragment>
        </ConditionalRender>
      ))}
    </div>
  );
};

/**
 * getRenderDetail
 * @description 获取渲染细节
 * @param h
 * @param data - 组数据
 * @param props - 配置
 * @return RenderDetail
 */
const getRenderDetail = (
  h: CreateElement,
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
      detail = renderHorizontal(h, params).detail;
    } else {
      detail = renderVertical(h, params.data, rowCountRef).detail;
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

/**
 * Label
 * @description 左侧Label
 * @param props
 * @constructor
 */
const Label: any = {
  name: 'adv-tablegridlayout-label',
  render(h) {
    return <td class={classNames(`${selectorPrefix}-table-row-label`)}>{this.$slots.default}</td>;
  },
};

/**
 * Value
 * @description 右侧Value
 * @param props
 * @constructor
 */
const Value: any = {
  name: 'adv-tablegridlayout-value',
  render(h) {
    return <td class={classNames(`${selectorPrefix}-table-row-value`)}>{this.$slots.default}</td>;
  },
};

const TableGridLayout: any = {
  name: 'adv-tablegridlayout',
  props: {
    bordered: {
      type: Boolean,
      default: false,
    },
    innerClassName: {
      type: String,
      default: '',
    },
    innerStyle: {
      type: String,
      default: '',
    },
    layout: {
      type: String,
      default: 'horizontal',
    },
    density: {
      type: String,
      default: 'default',
    },
    parity: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array as PropType<DataItem[]>,
      default: () => [],
    },
  },
  computed: {
    otherProps() {
      const props = {};

      for (const p in this.$props) {
        if (p !== 'data') {
          props[p] = this[p];
        }
      }

      return props;
    },
  },
  render(h) {
    const { data } = this;

    return (
      <div class={classNames(selectorPrefix)}>
        {renderGridSearchFormGroup(h, data, this.otherProps)}
      </div>
    );
  },
};

export { TableGridLayout, renderGridSearchFormGroup, getRenderDetail, Label, Value };
