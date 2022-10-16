import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll-probe';
import { PropType, VNode } from 'vue';
import { Fragment } from 'vue-fragment';

import StickupLayout from '@baifendian/adherev-ui-stickuplayout';
import Util from '@baifendian/adherev-util';

import { IColumnConfig, IMasterItem, ITableConfig } from './types';

const selectorPrefix = 'adherev-ui-cascadecompared';

const defaultCellWidth = 120;

/**
 * initTouch
 */
function initTouch() {
  function isPassive() {
    let supportsPassiveOption = false;
    try {
      // @ts-ignore
      addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
          get() {
            supportsPassiveOption = true;
          },
        }),
      );
    } catch (e) {}

    return supportsPassiveOption;
  }

  document.addEventListener(
    'touchmove',
    (e) => {
      e.preventDefault();
    },
    isPassive()
      ? {
          capture: false,
          passive: false,
        }
      : false,
  );
}

initTouch();

const CascadeCompared: any = {
  name: 'adv-cascadecompared',
  props: {
    className: {
      type: String,
      default: '',
    },
    indicatorClassName: {
      type: String,
      default: '',
    },
    indicatorStyle: {
      type: String,
      default: '',
    },
    indicatorFixedWrapClassName: {
      type: String,
      default: '',
    },
    indicatorFixedWrapStyle: {
      type: String,
      default: '',
    },
    indicatorAutoWrapClassName: {
      type: String,
      default: '',
    },
    indicatorAutoWrapStyle: {
      type: String,
      default: '',
    },
    masterClassName: {
      type: String,
      default: '',
    },
    masterStyle: {
      type: String,
      default: '',
    },
    masterInnerClassName: {
      type: String,
      default: '',
    },
    masterInnerStyle: {
      type: String,
      default: '',
    },
    masterStickFixedClassName: {
      type: String,
      default: '',
    },
    masterStickFixedStyle: {
      type: String,
      default: '',
    },
    masterStickInnerClassName: {
      type: String,
      default: '',
    },
    masterStickInnerStyle: {
      type: String,
      default: '',
    },
    indicator: {
      type: Object as PropType<ITableConfig>,
      default: () => ({
        columns: [],
        dataSource: [],
      }),
    },
    master: {
      type: Array as PropType<IMasterItem[]>,
      default: () => [],
      validator(val) {
        return Array.isArray(val);
      },
    },
    defaultCellWidth: {
      type: [Number, String],
      default: defaultCellWidth,
    },
  },
  emits: ['stickChange'],
  scopedSlots: ['masterGroupTitle', 'cell'],
  data() {
    return {
      $scrolls: [],
    };
  },
  computed: {
    getIndicatorClassName() {
      const { indicatorClassName = '' } = this;

      return classNames(`${selectorPrefix}-indicator`, indicatorClassName || '');
    },
    getFixedWrapClassName() {
      return (className) => classNames(`${selectorPrefix}-fixedWrap`, className || '');
    },
    getFixedWrapStyle() {
      return (style, width) => `${style};width:${width || defaultCellWidth}px`;
    },
    getCellClassName() {
      return (column) => classNames(`${selectorPrefix}-cell`, column.className || '');
    },
    getAutoWrapClassName() {
      return (className) => classNames(`${selectorPrefix}-autoWrap`, className || '');
    },
    getAutoInnerClassName() {
      return (className) => classNames(`${selectorPrefix}-autoInner`, className || '');
    },
    getMasterClassName() {
      const { masterClassName = '' } = this;

      return classNames(`${selectorPrefix}-master`, masterClassName || '');
    },
    getMasterInnerClassName() {
      const { masterInnerClassName = '' } = this;

      return classNames(`${selectorPrefix}-master-inner`, masterInnerClassName || '');
    },
    getFixedClassName() {
      const { masterStickFixedClassName = '' } = this;

      return classNames(masterStickFixedClassName || '');
    },
    getInnerClassName() {
      const { masterStickInnerClassName = '' } = this;

      return classNames(masterStickInnerClassName || '');
    },
  },
  methods: {
    initScroll() {
      const {
        $refs: { el },
        $data,
      } = this;

      const wrapEls = el.querySelectorAll(`.${selectorPrefix}-autoWrap`);

      for (let i = 0; i < $data.$scrolls.length; i++) {
        $data.$scrolls[i].destroy();
      }

      $data.$scrolls = [];

      for (let i = 0; i < wrapEls.length; i++) {
        const scroll = new IScroll(wrapEls[i], {
          probeType: 3,
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false,
        });

        $data.$scrolls.push(scroll);

        scroll.on('scroll', () => {
          for (let j = 0; j < $data.$scrolls.length; j++) {
            if ($data.$scrolls[j] !== scroll) {
              $data.$scrolls[j].scrollTo(scroll.x, scroll.y);
            }
          }
        });
      }
    },
    getFixedColumnConfig(columns: IColumnConfig[]): IColumnConfig | null {
      const config = columns.find((t) => t.isFixed);

      if (config) return config;

      return columns.length ? columns[0] : null;
    },
    renderCell(
      h,
      config: IColumnConfig,
      dataSource: any,
      groupIndex: number,
      rowIndex: number,
      columnIndex: number,
    ): VNode {
      // if (config.render) {
      //   // @ts-ignore
      //   return config.render(h, dataSource[config.dataIndex], dataSource);
      // }
      if (this.$scopedSlots.cell) {
        return this.$scopedSlots.cell({ config, dataSource, groupIndex, rowIndex, columnIndex });
      }

      return dataSource[config.dataIndex];
    },
    /**
     * renderMasterGroupTitle
     * @description 渲染每一行的master
     * @param h
     * @param config
     * @param groupIndex
     */
    renderMasterGroupTitle(h, config: IMasterItem, groupIndex: number): VNode {
      /*return Util.isObject(title) ? (
        <div slot="title">{h(title)}</div>
      ) : Util.isFunction(title) ? (
        <div slot="title">{title(h)}</div>
      ) : (
        <span slot="title">{title}</span>
      );*/

      const { title } = config;

      if (title && Util.isString(title)) {
        return <div slot="title">{title}</div>;
      }

      if (this.$scopedSlots.masterGroupTitle) {
        return <div slot="title">{this.$scopedSlots.masterGroupTitle({ config, groupIndex })}</div>;
      }

      return <div slot="title">{title}</div>;
    },
    /**
     * renderMasterGroupContent
     * @param h
     * @param masterItem
     * @param groupIndex
     */
    renderMasterGroupContent(h, masterItem: IMasterItem, groupIndex: number): VNode {
      const {
        dataSource = [],
        columns = [],
        fixedWrapClassName = '',
        fixedWrapStyle = '',
        autoWrapClassName = '',
        autoWrapStyle = '',
        autoInnerClassName = '',
        autoInnerStyle = '',
      } = masterItem;

      const {
        getFixedColumnConfig,
        getFixedWrapClassName,
        getFixedWrapStyle,
        getCellClassName,
        getAutoWrapClassName,
        getAutoInnerClassName,
        renderCell,
      } = this;

      const fixedColumnConfig = getFixedColumnConfig(columns);

      return (
        // @ts-ignore
        <Fragment>
          <div
            class={getFixedWrapClassName(fixedWrapClassName)}
            style={getFixedWrapStyle(fixedWrapStyle, fixedColumnConfig?.width)}
          >
            {dataSource.map((record, rowIndex) => (
              <div key={rowIndex} class={`${selectorPrefix}-item`}>
                <div class={getCellClassName(fixedColumnConfig)} style={fixedColumnConfig.style}>
                  {renderCell(h, fixedColumnConfig, record, groupIndex, rowIndex, -1)}
                </div>
              </div>
            ))}
          </div>

          <div class={getAutoWrapClassName(autoWrapClassName)} style={autoWrapStyle}>
            <div class={getAutoInnerClassName(autoInnerClassName)} style={autoInnerStyle}>
              {dataSource.map((record, rowIndex) => (
                <div key={rowIndex} class={`${selectorPrefix}-item`}>
                  {columns
                    .filter((column) => column !== fixedColumnConfig)
                    .map((column, columnIndex) => (
                      <div
                        key={column.dataIndex}
                        class={getCellClassName(column)}
                        style={getFixedWrapStyle(column.style, column?.width)}
                      >
                        {renderCell(h, column, record, groupIndex, rowIndex, columnIndex)}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      );
    },
    /**
     * renderMasterGroup
     * @param h
     * @param config
     * @param groupIndex
     */
    renderMasterGroup(h, config: IMasterItem, groupIndex): VNode {
      const { className = '', style = '' } = config;

      const { renderMasterGroupTitle, renderMasterGroupContent } = this;

      return (
        <StickupLayout.Item key={groupIndex} class={className || ''} style={style}>
          {renderMasterGroupTitle(h, config, groupIndex)}
          {renderMasterGroupContent(h, config, groupIndex)}
        </StickupLayout.Item>
      );
    },
    renderIndicator(h): VNode {
      const {
        indicatorAutoWrapClassName = '',
        indicatorFixedWrapClassName = '',
        indicatorFixedWrapStyle = '',
        indicatorStyle = '',
        indicatorAutoWrapStyle = '',
        indicator: { columns = [], dataSource = {} },
        getFixedColumnConfig,
        getIndicatorClassName,
        getFixedWrapClassName,
        getFixedWrapStyle,
        getCellClassName,
        getAutoWrapClassName,
        renderCell,
      } = this;

      const fixedColumnConfig = getFixedColumnConfig(columns);

      return (
        <div class={getIndicatorClassName} style={indicatorStyle}>
          <div
            class={getFixedWrapClassName(indicatorFixedWrapClassName)}
            style={getFixedWrapStyle(indicatorFixedWrapStyle, fixedColumnConfig?.width)}
          >
            <div class={`${selectorPrefix}-item`}>
              <div class={getCellClassName(fixedColumnConfig)} style={fixedColumnConfig.style}>
                {renderCell(h, fixedColumnConfig, dataSource, -1, -1, -1)}
              </div>
            </div>
          </div>
          <div
            class={getAutoWrapClassName(indicatorAutoWrapClassName)}
            style={indicatorAutoWrapStyle}
          >
            <div class={`${selectorPrefix}-item`}>
              {columns
                .filter((column) => column !== fixedColumnConfig)
                .map((column, columnIndex) => (
                  <div
                    key={column.dataIndex}
                    class={getCellClassName(column)}
                    style={getFixedWrapStyle(column.style, column.width)}
                  >
                    {renderCell(h, column, dataSource, -1, -1, columnIndex)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    },
    renderMaster(h): VNode {
      const {
        masterStyle = '',
        masterInnerStyle = '',
        masterStickFixedStyle = '',
        masterStickInnerStyle = '',
        master = [],
        getMasterClassName,
        getMasterInnerClassName,
        getFixedClassName,
        getInnerClassName,
        renderMasterGroup,
      } = this;

      return (
        <div class={getMasterClassName} style={masterStyle}>
          <StickupLayout
            ref="stickup"
            class={getMasterInnerClassName}
            style={masterInnerStyle}
            fixedClassName={getFixedClassName}
            fixedStyle={masterStickFixedStyle}
            innerClassName={getInnerClassName}
            innerStyle={masterStickInnerStyle}
            onChange={() => this.$emit('stickChange')}
          >
            {master.map((config, index) => renderMasterGroup(h, config, index))}
          </StickupLayout>
        </div>
      );
    },
    /**
     * scrollToByIndex
     * @param {number} index
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByIndex(index: number, duration = 300) {
      const {
        $refs: { stickup },
      } = this;

      stickup.scrollToByIndex(index, duration);
    },
    /**
     * scrollToByHeaderEl
     * @param {HtmlElement} headerEl
     * @param {number} duration
     * @return {boolean}
     */
    scrollToByHeaderEl(headerEl: HTMLElement, duration = 300) {
      const {
        $refs: { stickup },
      } = this;

      stickup.scrollToByHeaderEl(headerEl, duration);
    },
    /**
     * scrollToByColumn
     * @param {number} columnIndex
     */
    scrollToByColumn(columnIndex: number) {
      const {
        $data: { $scrolls },
      } = this;

      const scroll = $scrolls[0];

      const el = scroll.wrapper.querySelector(
        `.${selectorPrefix}-item .${selectorPrefix}-cell:nth-of-type(${columnIndex})`,
      );

      scroll.scrollToElement(el);
    },
  },
  mounted() {
    const {
      $refs: { stickup },
    } = this;

    stickup.refresh();

    this.initScroll();
  },
  updated() {
    const {
      $refs: { stickup },
    } = this;

    stickup.refresh();

    this.initScroll();
  },
  render(h): VNode {
    return (
      <div class={selectorPrefix} ref="el">
        {this.renderIndicator(h)}
        {this.renderMaster(h)}
      </div>
    );
  },
};

export default CascadeCompared;
