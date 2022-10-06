import classNames from 'classnames';
import { CreateElement, PropType, VNode } from 'vue';
import { Fragment } from 'vue-fragment';

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
const renderHorizontal: RenderHorizontal = (h: CreateElement, context, params) => {
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
          item.data &&
          item.data.attrs &&
          'colspan' in item.data.attrs &&
          ['number', 'string'].includes(typeof item.data.attrs.colspan)
        ) {
          columnsCount += parseInt(`${item.data.attrs.colspan}`);
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
    let label = context.$slots[t.label];
    let value = context.$slots[t.value];

    label = Array.isArray(label) && !!label.length ? label[0] : label;
    value = Array.isArray(value) && !!value.length ? value[0] : value;

    if ('require' in t && !!t.require && label) {
      // label = createHOC(label, null, {
      //   // class(classnames) {
      //   //   return classNames(`${selectorPrefix}-table-row-label`, 'require', classnames || '');
      //   // },
      //   class: classNames(`${selectorPrefix}-table-row-label`, 'require', label?.data?.class || ''),
      // });
      label.data.class = classNames(
        `${selectorPrefix}-table-row-label`,
        'require',
        label?.data?.class || '',
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
    // @ts-ignore
    element: <Fragment>{rowJSXChildren}</Fragment>,
    detail,
  };
};

/**
 * renderVertical
 * @description 渲染纵向布局
 * @return VNode[]
 * @param h
 * @param context
 * @param data
 * @param rowCountRef
 */
const renderVertical: RenderVertical = (h: CreateElement, context, data, rowCountRef) => {
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
      let label = typeof item.label === 'string' ? context.$slots[item.label] : item.label;
      let value = context.$slots[item.value];

      label = Array.isArray(label) && !!label.length ? label[0] : label;
      value = Array.isArray(value) && !!value.length ? value[0] : value;

      if (columnsCount !== columnCount) {
        if (
          'colspan' in (value?.data?.attrs || {}) &&
          ['number', 'string'].includes(typeof value?.data?.attrs?.colspan)
        ) {
          columnsCount += parseInt(`${value?.data?.attrs?.colspan}`);
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
    let label = context.$slots[t.label];

    label = Array.isArray(label) && !!label.length ? label[0] : label;

    if ('require' in t && !!t.require && label) {
      // t.label = createHOC(label, null, {
      //   // class(classnames) {
      //   //   return classNames(`${selectorPrefix}-table-row-label`, 'require', classnames);
      //   // },
      //   class: classNames(`${selectorPrefix}-table-row-label`, 'require', label?.data?.class || ''),
      // });
      label.data.class = classNames(
        `${selectorPrefix}-table-row-label`,
        'require',
        label?.data?.class || '',
      );
    }
  });

  let _index = 0;

  const rowJSXChildren: VNode[] = [];

  createRow();

  return {
    // @ts-ignore
    element: <Fragment>{rowJSXChildren}</Fragment>,
    detail,
  };
};

// const renderHorizontal1 = (h) => {
//   return (
//     <Fragment>
//       <div key="1">11111111111</div>,<div key="2">11111111111</div>,<div key="3">11111111111</div>,
//     </Fragment>
//   );
// };

/**
 * renderGridSearchForm
 * @description 渲染一个Table
 * @return {VNode}
 */
const renderGridSearchForm: RenderGridSearchForm = (h, context, params) => {
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
        {renderHorizontal(h, context, params).element}

        {/*@ts-ignore*/}
        <Fragment slot="noMatch">
          {renderVertical(h, context, params.data, rowCountRef).element}
        </Fragment>
      </ConditionalRender>
    </table>
  );
};

const renderGridSearchFormGroup = (
  h: CreateElement,
  context: { $slots: any },
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
            {renderGridSearchForm(h, context, {
              data: g,
              rowCountRef,
              ...renderGridSearchFormProps,
            })}
          </div>

          {/*@ts-ignore*/}
          <Fragment slot="noMatch">
            {renderGridSearchForm(h, context, {
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
 * @param context
 * @param data - 组数据
 * @param props - 配置
 * @return RenderDetail
 */
const getRenderDetail = (
  h: CreateElement,
  context: { $slots: any },
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
      detail = renderHorizontal(h, context, params).detail;
    } else {
      detail = renderVertical(h, context, params.data, rowCountRef).detail;
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
        {renderGridSearchFormGroup(h, { $slots: this.$slots }, data, this.otherProps)}
      </div>
    );
  },
};

export { TableGridLayout, renderGridSearchFormGroup, getRenderDetail, Label, Value };
