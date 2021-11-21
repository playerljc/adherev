import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll-probe';
import { Fragment } from 'vue-fragment';
import StickupLayout from '@baifendian/adherev-ui-stickuplayout';
import Util from '@baifendian/adherev-util';

import { IColumnConfig, IMasterItem, TableConfig, MasterItem } from './types';

const selectorPrefix = 'adherev-ui-cascadecompared';

const defaultCellWidth = 120;

/**
 * initTouch
 */
function initTouch() {
  function isPassive() {
    let supportsPassiveOption = false;
    try {
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

export default {
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
      type: TableConfig,
      default: () => ({
        columns: [],
        dataSource: [],
      }),
    },
    master: {
      type: Array,
      default: () => [],
      validator(val) {
        if (!Array.isArray(val)) return false;

        return val.every((t) => t instanceof MasterItem);
      },
    },
    defaultCellWidth: {
      type: [Number, String],
      default: defaultCellWidth,
    },
  },
  data() {
    return {
      $scrolls: [],
    };
  },
  computed: {
    getClassName() {
      const { className = '' } = this;

      return classNames(selectorPrefix, (className || '').split(' '));
    },
    getIndicatorClassName() {
      const { indicatorClassName = '' } = this;

      return classNames(`${selectorPrefix}-indicator`, (indicatorClassName || '').split(' '));
    },
    getFixedWrapClassName() {
      return (className) => classNames(`${selectorPrefix}-fixedWrap`, (className || '').split(' '));
    },
    getFixedWrapStyle() {
      return (style, width) => `${style};width:${width || defaultCellWidth}px`;
    },
    getCellClassName() {
      return (column) => classNames(`${selectorPrefix}-cell`, (column.className || '').split(' '));
    },
    getAutoWrapClassName() {
      return (className) => classNames(`${selectorPrefix}-autoWrap`, (className || '').split(' '));
    },
    getAutoInnerClassName() {
      return (className) => classNames(`${selectorPrefix}-autoInner`, (className || '').split(' '));
    },
    getMasterClassName() {
      const { masterClassName = '' } = this;

      return classNames(`${selectorPrefix}-master`, (masterClassName || '').split(' '));
    },
    getMasterInnerClassName() {
      const { masterInnerClassName = '' } = this;

      return classNames(`${selectorPrefix}-master-inner`, (masterInnerClassName || '').split(' '));
    },
    getFixedClassName() {
      const { masterStickFixedClassName = '' } = this;

      return classNames((masterStickFixedClassName || '').split(' '));
    },
    getInnerClassName() {
      const { masterStickInnerClassName = '' } = this;

      return classNames((masterStickInnerClassName || '').split(' '));
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
    getFixedColumnConfig(columns: Array<IColumnConfig>): IColumnConfig | null {
      const config = columns.find((t) => t.isFixed);

      if (config) return config;

      return columns.length ? columns[0] : null;
    },
    renderCell(h, config: IColumnConfig, dataSource: object) {
      if (config.render) {
        return config.render(h, dataSource[config.dataIndex], dataSource);
      }

      return dataSource[config.dataIndex];
    },
    renderMasterGroupTitle(h, title) {
      return Util.isObject(title) ? (
        <div slot="title">{h(title)}</div>
      ) : Util.isFunction(title) ? (
        <div slot="title">{title(h)}</div>
      ) : (
        <span slot="title">{title}</span>
      );
    },
    renderMasterGroupContent(h, masterItem: IMasterItem) {
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
        <Fragment>
          <div
            class={getFixedWrapClassName(fixedWrapClassName)}
            style={getFixedWrapStyle(fixedWrapStyle, fixedColumnConfig?.width)}
          >
            {dataSource.map((record, index) => (
              <div key={index} class={`${selectorPrefix}-item`}>
                <div class={getCellClassName(fixedColumnConfig)} style={fixedColumnConfig.style}>
                  {renderCell(h, fixedColumnConfig, record)}
                </div>
              </div>
            ))}
          </div>
          <div class={getAutoWrapClassName(autoWrapClassName)} style={autoWrapStyle}>
            <div class={getAutoInnerClassName(autoInnerClassName)} style={autoInnerStyle}>
              {dataSource.map((record, index) => (
                <div key={index} class={`${selectorPrefix}-item`}>
                  {columns
                    .filter((column) => column !== fixedColumnConfig)
                    .map((column) => (
                      <div
                        key={column.dataIndex}
                        class={getCellClassName(column)}
                        style={getFixedWrapStyle(column.style, column?.width)}
                      >
                        {renderCell(h, column, record)}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      );
    },
    renderMasterGroup(h, config: IMasterItem, index) {
      const { title = null, className = '', style = '' } = config;

      const { renderMasterGroupTitle, renderMasterGroupContent } = this;

      return (
        <StickupLayout.Item
          key={index}
          class={classNames((className || '').split(' '))}
          style={style}
        >
          {renderMasterGroupTitle(h, title)}
          {renderMasterGroupContent(h, config)}
        </StickupLayout.Item>
      );
    },
    renderIndicator(h) {
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
                {renderCell(h, fixedColumnConfig, dataSource)}
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
                .map((column) => (
                  <div
                    key={column.dataIndex}
                    class={getCellClassName(column)}
                    style={getFixedWrapStyle(column.style, column.width)}
                  >
                    {renderCell(h, column, dataSource)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    },
    renderMaster(h) {
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
            onChange={() => {
              this.$emit('stick-change');
            }}
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
  render(h) {
    return (
      <div class={this.getClassName} ref="el">
        {this.renderIndicator(h)}
        {this.renderMaster(h)}
      </div>
    );
  },
};
