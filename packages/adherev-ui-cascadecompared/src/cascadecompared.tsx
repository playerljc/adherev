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

const props = {
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
  props,
  slots: ['title'],
  emits: ['stick-change'],
  setup: function (props, { emit, expose }) {
    const el = ref<HTMLDivElement | null>(null);

    const stickup = ref<any>(null);

    let scrolls: any[] = [];

    const getIndicatorClassName = computed(() =>
      classNames(`${selectorPrefix}-indicator`, (props.indicatorClassName || '').split(/\s+/)),
    );

    const getFixedWrapClassName = computed(
      () => (className: string) =>
        classNames(`${selectorPrefix}-fixedWrap`, (className || '').split(/\s+/)),
    );

    const getFixedWrapStyle = computed(() => (style: CSSProperties, width: number | string) => ({
      ...style,
      width: `${width || defaultCellWidth}px`,
    }));

    const getCellClassName = computed(
      () => (column: IColumnConfig | null) =>
        classNames(`${selectorPrefix}-cell`, (column?.className || '').split(/\s+/)),
    );

    const getAutoWrapClassName = computed(
      () => (className: string) =>
        classNames(`${selectorPrefix}-autoWrap`, (className || '').split(/\s+/)),
    );

    const getAutoInnerClassName = computed(
      () => (className: string) =>
        classNames(`${selectorPrefix}-autoInner`, (className || '').split(/\s+/)),
    );

    const getMasterClassName = computed(() =>
      classNames(`${selectorPrefix}-master`, (props.masterClassName || '').split(/\s+/)),
    );

    const getMasterInnerClassName = computed(() =>
      classNames(`${selectorPrefix}-master-inner`, (props.masterInnerClassName || '').split(/\s+/)),
    );

    const getFixedClassName = computed(() =>
      classNames((props.masterStickFixedClassName || '').split(/\s+/)),
    );

    const getInnerClassName = computed(() =>
      classNames((props.masterStickInnerClassName || '').split(/\s+/)),
    );

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

    const getFixedColumnConfig = (columns: Array<IColumnConfig>): IColumnConfig | null => {
      const config = columns.find((t) => t.isFixed);

      if (config) return config;

      return columns.length ? columns[0] : null;
    };

    const renderCell = (config: IColumnConfig, dataSource: any): (object | JSX.Element)[] => {
      if (config.render) {
        return config.render(dataSource[config.dataIndex], dataSource);
      }

      return dataSource[config.dataIndex];
    };

    const renderMasterGroupTitle = (title: object | Function): JSX.Element => {
      return Util.isObject?.(title) ? (
        <div>{h(title as object)}</div>
      ) : Util.isFunction?.(title) ? (
        <div>{(title as Function)()}</div>
      ) : (
        <span>{title}</span>
      );
    };

    const renderMasterGroupContent = (masterItem: IMasterItem): JSX.Element => {
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
            // @ts-ignore
            class={getFixedWrapClassName.value(fixedWrapClassName)}
            style={getFixedWrapStyle.value(
              fixedWrapStyle,
              fixedColumnConfig ? fixedColumnConfig?.width : 0,
            )}
          >
            {dataSource.map((record, index) => (
              <div
                key={index}
                // @ts-ignore
                class={`${selectorPrefix}-item`}
              >
                <div
                  // @ts-ignore
                  class={getCellClassName.value(fixedColumnConfig)}
                  style={fixedColumnConfig?.style}
                >
                  {renderCell(fixedColumnConfig as IColumnConfig, record)}
                </div>
              </div>
            ))}
          </div>
          <div
            // @ts-ignore
            class={getAutoWrapClassName.value(autoWrapClassName)}
            style={autoWrapStyle}
          >
            <div
              // @ts-ignore
              class={getAutoInnerClassName.value(autoInnerClassName)}
              style={autoInnerStyle}
            >
              {dataSource.map((record, index) => (
                <div
                  key={index}
                  // @ts-ignore
                  class={`${selectorPrefix}-item`}
                >
                  {columns
                    .filter((column) => column !== fixedColumnConfig)
                    .map((column) => (
                      <div
                        key={column.dataIndex}
                        // @ts-ignore
                        class={getCellClassName.value(column)}
                        style={getFixedWrapStyle.value(column.style, column?.width)}
                      >
                        {renderCell(column, record)}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
        </>
      );
    };

    const renderMasterGroup = (config: IMasterItem, index: string | number): JSX.Element => {
      const { title, className = '', style = '' } = config;

      return (
        <StickupLayout.Item
          key={index}
          class={classNames((className || '').split(/\s+/))}
          style={style}
        >
          {{
            default: () => renderMasterGroupContent(config),
            title: () => renderMasterGroupTitle(title),
          }}
        </StickupLayout.Item>
      );
    };

    const renderIndicator = (): JSX.Element => {
      const fixedColumnConfig = getFixedColumnConfig(props.indicator.columns);

      return (
        <div
          // @ts-ignore
          class={getIndicatorClassName.value}
          style={props.indicatorStyle}
        >
          <div
            // @ts-ignore
            class={getFixedWrapClassName.value(props.indicatorFixedWrapClassName)}
            style={getFixedWrapStyle.value(
              props.indicatorFixedWrapStyle,
              fixedColumnConfig ? fixedColumnConfig?.width : 0,
            )}
          >
            <div
              // @ts-ignore
              class={`${selectorPrefix}-item`}
            >
              <div
                // @ts-ignore
                class={getCellClassName.value(fixedColumnConfig)}
                style={fixedColumnConfig?.style}
              >
                {renderCell(fixedColumnConfig as IColumnConfig, props.indicator.dataSource)}
              </div>
            </div>
          </div>
          <div
            // @ts-ignore
            class={getAutoWrapClassName.value(props.indicatorAutoWrapClassName)}
            style={props.indicatorAutoWrapStyle}
          >
            <div
              // @ts-ignore
              class={`${selectorPrefix}-item`}
            >
              {props.indicator.columns
                .filter((column) => column !== fixedColumnConfig)
                .map((column) => (
                  <div
                    key={column.dataIndex}
                    // @ts-ignore
                    class={getCellClassName.value(column)}
                    style={getFixedWrapStyle.value(column.style, column.width)}
                  >
                    {renderCell(column, props.indicator.dataSource)}
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
    };

    const renderMaster = () => {
      return (
        // @ts-ignore
        <div class={getMasterClassName.value} style={props.masterStyle}>
          {/*@ts-ignore*/}
          <StickupLayout
            ref={stickup}
            class={getMasterInnerClassName.value}
            style={props.masterInnerStyle}
            fixedClassName={getFixedClassName.value}
            fixedStyle={props.masterStickFixedStyle}
            innerClassName={getInnerClassName.value}
            innerStyle={props.masterStickInnerStyle}
            onChange={() => {
              emit('stick-change');
            }}
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
      // @ts-ignore
      <div class={selectorPrefix} ref={el}>
        {renderIndicator()}
        {renderMaster()}
      </div>
    );
  },
});
