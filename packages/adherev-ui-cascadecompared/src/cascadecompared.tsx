import classNames from 'classnames';
import IScroll from 'iscroll/build/iscroll-probe';
import { CSSProperties, computed, defineComponent, h, onMounted, onUpdated, ref } from 'vue';
import { array, number, object, oneOfType, string } from 'vue-types';

import StickupLayout from '@baifendian/adherev-ui-stickuplayout';
import Util from '@baifendian/adherev-util';

import { IColumnConfig, IIndicatorTableConfig, IMasterItem } from './types';

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

export const cascadeComparedProps = {
  className: string().def(''),
  indicatorClassName: string().def(''),
  indicatorStyle: object<CSSProperties>().def({}),
  indicatorFixedWrapClassName: string().def(''),
  indicatorFixedWrapStyle: object<CSSProperties>().def({}),
  indicatorAutoWrapClassName: string().def(''),
  indicatorAutoWrapStyle: object<CSSProperties>().def({}),
  masterClassName: string().def(''),
  masterStyle: object<CSSProperties>().def({}),
  masterInnerClassName: string().def(''),
  masterInnerStyle: object<CSSProperties>().def({}),
  masterStickFixedClassName: string().def(''),
  masterStickFixedStyle: object<CSSProperties>().def({}),
  masterStickInnerClassName: string().def(''),
  masterStickInnerStyle: object<CSSProperties>().def({}),
  indicator: object<IIndicatorTableConfig>().def(() => ({
    columns: [],
    dataSource: [],
  })),
  master: array<IMasterItem>().def(() => []),
  defaultCellWidth: oneOfType([number(), string()]).def(defaultCellWidth),
};

export default defineComponent({
  name: 'adv-cascadecompared',
  props: cascadeComparedProps,
  slots: ['masterGroupTitle', 'cell'],
  emits: ['stickChange'],
  setup: function (props, { emit, expose, slots }) {
    const el = ref<HTMLDivElement | null>(null);

    const stickup = ref<any>(null);

    let scrolls: any[] = [];

    const getIndicatorClassName = computed(() =>
      classNames(`${selectorPrefix}-indicator`, props.indicatorClassName || ''),
    );

    const getFixedWrapClassName = computed(
      () => (className: string) => classNames(`${selectorPrefix}-fixedWrap`, className || ''),
    );

    const getFixedWrapStyle = computed(() => (style: CSSProperties, width: number | string) => ({
      ...style,
      width: `${width || defaultCellWidth}px`,
    }));

    const getCellClassName = computed(
      () => (column: IColumnConfig | null) =>
        classNames(`${selectorPrefix}-cell`, column?.className || ''),
    );

    const getAutoWrapClassName = computed(
      () => (className: string) => classNames(`${selectorPrefix}-autoWrap`, className || ''),
    );

    const getAutoInnerClassName = computed(
      () => (className: string) => classNames(`${selectorPrefix}-autoInner`, className || ''),
    );

    const getMasterClassName = computed(() =>
      classNames(`${selectorPrefix}-master`, props.masterClassName || ''),
    );

    const getMasterInnerClassName = computed(() =>
      classNames(`${selectorPrefix}-master-inner`, props.masterInnerClassName || ''),
    );

    const getFixedClassName = computed(() => classNames(props.masterStickFixedClassName || ''));

    const getInnerClassName = computed(() => classNames(props.masterStickInnerClassName || ''));

    const initScroll = () => {
      const wrapEls = (el.value as HTMLDivElement).querySelectorAll(`.${selectorPrefix}-autoWrap`);

      for (let i = 0; i < scrolls.length; i++) {
        scrolls[i].destroy();
      }

      scrolls = [];

      for (let i = 0; i < wrapEls.length; i++) {
        const scroll = new IScroll(wrapEls[i], {
          probeType: 3,
          eventPassthrough: true,
          scrollX: true,
          scrollY: false,
          preventDefault: false,
        });

        scrolls.push(scroll);

        scroll.on('scroll', () => {
          for (let j = 0; j < scrolls.length; j++) {
            if (scrolls[j] !== scroll) {
              scrolls[j].scrollTo(scroll.x, scroll.y);
            }
          }
        });
      }
    };

    const getFixedColumnConfig = (columns: IColumnConfig[]): IColumnConfig | null => {
      const config = columns.find((t) => t.isFixed);

      if (config) return config;

      return columns.length ? columns[0] : null;
    };

    const renderCell = (
      config: IColumnConfig,
      dataSource: any,
      groupIndex: string | number,
      rowIndex: number,
      columnIndex: number,
    ): (object | JSX.Element)[] => {
      // if (config.render) {
      //   return config.render(dataSource[config.dataIndex], dataSource);
      // }

      if (slots.cell) {
        return slots.cell({ config, dataSource, groupIndex, rowIndex, columnIndex });
      }

      return dataSource[config.dataIndex];
    };

    const renderMasterGroupTitle = (config: IMasterItem, groupIndex: string | number): any => {
      // return Util.isObject?.(title) ? (
      //   <div>{h(title as object)}</div>
      // ) : Util.isFunction?.(title) ? (
      //   <div>{(title as Function)()}</div>
      // ) : (
      //   <span>{title}</span>
      // );

      const { title } = config;

      if (title && Util?.isString?.(title)) {
        return title;
      }

      if (slots.masterGroupTitle) {
        return slots.masterGroupTitle({ config, groupIndex });
      }

      return title;
    };

    const renderMasterGroupContent = (
      masterItem: IMasterItem,
      groupIndex: string | number,
    ): JSX.Element => {
      const {
        dataSource = [],
        columns = [],
        fixedWrapClassName = '',
        fixedWrapStyle = {},
        autoWrapClassName = '',
        autoWrapStyle = {},
        autoInnerClassName = '',
        autoInnerStyle = {},
      } = masterItem;

      const fixedColumnConfig = getFixedColumnConfig(columns);

      return (
        <>
          <div
            class={getFixedWrapClassName.value(fixedWrapClassName)}
            style={getFixedWrapStyle.value(
              fixedWrapStyle,
              fixedColumnConfig ? fixedColumnConfig?.width : 0,
            )}
          >
            {dataSource.map((record, rowIndex) => (
              <div key={rowIndex} class={`${selectorPrefix}-item`}>
                <div
                  class={getCellClassName.value(fixedColumnConfig)}
                  style={fixedColumnConfig?.style}
                >
                  {renderCell(fixedColumnConfig as IColumnConfig, record, groupIndex, rowIndex, -1)}
                </div>
              </div>
            ))}
          </div>

          <div class={getAutoWrapClassName.value(autoWrapClassName)} style={autoWrapStyle}>
            <div class={getAutoInnerClassName.value(autoInnerClassName)} style={autoInnerStyle}>
              {dataSource.map((record, rowIndex) => (
                <div key={rowIndex} class={`${selectorPrefix}-item`}>
                  {columns
                    .filter((column) => column !== fixedColumnConfig)
                    .map((column, columnIndex) => (
                      <div
                        key={column.dataIndex}
                        class={getCellClassName.value(column)}
                        style={getFixedWrapStyle.value(column.style, column?.width)}
                      >
                        {renderCell(column, record, groupIndex, rowIndex, columnIndex)}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </>
      );
    };

    const renderMasterGroup = (config: IMasterItem, groupIndex: string | number): JSX.Element => {
      const { className = '', style = '' } = config;

      return (
        <StickupLayout.Item key={groupIndex} class={classNames(className || '')} style={style}>
          {{
            default: () => renderMasterGroupContent(config, groupIndex),
            title: () => renderMasterGroupTitle(config, groupIndex),
          }}
        </StickupLayout.Item>
      );
    };

    const renderIndicator = (): JSX.Element => {
      const fixedColumnConfig = getFixedColumnConfig(props.indicator.columns);

      return (
        <div class={getIndicatorClassName.value} style={props.indicatorStyle}>
          <div
            class={getFixedWrapClassName.value(props.indicatorFixedWrapClassName)}
            style={getFixedWrapStyle.value(
              props.indicatorFixedWrapStyle,
              fixedColumnConfig ? fixedColumnConfig?.width : 0,
            )}
          >
            <div class={`${selectorPrefix}-item`}>
              <div
                class={getCellClassName.value(fixedColumnConfig)}
                style={fixedColumnConfig?.style}
              >
                {renderCell(
                  fixedColumnConfig as IColumnConfig,
                  props.indicator.dataSource,
                  -1,
                  -1,
                  -1,
                )}
              </div>
            </div>
          </div>

          <div
            class={getAutoWrapClassName.value(props.indicatorAutoWrapClassName)}
            style={props.indicatorAutoWrapStyle}
          >
            <div class={`${selectorPrefix}-item`}>
              {props.indicator.columns
                .filter((column) => column !== fixedColumnConfig)
                .map((column, columnIndex) => (
                  <div
                    key={column.dataIndex}
                    class={getCellClassName.value(column)}
                    style={getFixedWrapStyle.value(column.style, column.width)}
                  >
                    {renderCell(column, props.indicator.dataSource, -1, -1, columnIndex)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    };

    const renderMaster = () => {
      return (
        <div class={getMasterClassName.value} style={props.masterStyle}>
          <StickupLayout
            ref={stickup}
            class={getMasterInnerClassName.value}
            style={props.masterInnerStyle}
            fixedClassName={getFixedClassName.value}
            fixedStyle={props.masterStickFixedStyle}
            innerClassName={getInnerClassName.value}
            innerStyle={props.masterStickInnerStyle}
            // @ts-ignore
            onChange={() => emit('stickChange')}
          >
            {props.master.map((config, index) => renderMasterGroup(config, index))}
          </StickupLayout>
        </div>
      );
    };

    /**
     * scrollToByIndex
     * @param {number} index
     * @param {number} duration
     * @return {boolean}
     */
    const scrollToByIndex = (index: number, duration = 300) => {
      stickup.value.scrollToByIndex(index, duration);
    };

    /**
     * scrollToByHeaderEl
     * @param {HtmlElement} headerEl
     * @param {number} duration
     * @return {boolean}
     */
    const scrollToByHeaderEl = (headerEl: HTMLElement, duration = 300) => {
      stickup.value.scrollToByHeaderEl(headerEl, duration);
    };

    /**
     * scrollToByColumn
     * @param {number} columnIndex
     */
    const scrollToByColumn = (columnIndex: number) => {
      const scroll = scrolls[0];

      const el = scroll.wrapper.querySelector(
        `.${selectorPrefix}-item .${selectorPrefix}-cell:nth-of-type(${columnIndex})`,
      );

      scroll.scrollToElement(el);
    };

    onMounted(() => {
      stickup.value.refresh();
      initScroll();
    });

    onUpdated(() => {
      stickup.value.refresh();
      initScroll();
    });

    expose({
      scrollToByIndex,
      scrollToByColumn,
      scrollToByHeaderEl,
    });

    return () => (
      <div class={selectorPrefix} ref={el}>
        {renderIndicator()}
        {renderMaster()}
      </div>
    );
  },
});
