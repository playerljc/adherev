import {
  ExtractPropTypes,
  VNode,
  computed,
  defineComponent,
  onBeforeMount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { array, bool, number, object, oneOfType, string } from 'vue-types';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import PlayGround, { PlayGroundProps } from './PlayGround';
import PlayGroundMulit, { PlayGroundMulitProps } from './PlayGroundMulit';
import PlayGroundTab, { PlayGroundTabProps } from './PlayGroundTab';
import Constant from './constant';

const selectPrefix = 'adherev-ui-playground-code-box';

type ConfigItemCommonType = { type: string; childrenSlot: string; wrapSlot: string };

type ConfigItemType =
  | (PlayGroundProps & ConfigItemCommonType & { id: string })
  | (PlayGroundMulitProps & ConfigItemCommonType & { id: string })
  | (PlayGroundTabProps & ConfigItemCommonType & { id: string });

const codeBoxPanelProps = {
  title: oneOfType([string(), object<VNode>()]),
  extra: object<VNode>(),
  isShowExpandAllBtn: bool().def(true),
  columnCount: number().def(1),
  defaultExpandAll: bool().def(false),
  config: array<ConfigItemType>().def([]),
};

export type CodeBoxPanelProps = Partial<ExtractPropTypes<typeof codeBoxPanelProps>>;

export default defineComponent({
  name: 'adv-playground-code-box-panel',
  props: codeBoxPanelProps,
  setup(props, { slots }) {
    const activeAnchor = ref<string>('');

    const expandAll = ref<boolean>(props.defaultExpandAll);

    let expandLock: boolean = false;

    const column = computed(() => {
      const column: number[] = [];
      if (props.columnCount != null) {
        column.length = props.columnCount;
      }
      column.fill(0);
      return column;
    });

    const onHashChange = () => {
      activeAnchor.value = window.location.hash.substring(1);
    };

    const renderPlayGround = (columnIndex: number, index: number): JSX.Element => {
      const { type, childrenSlot, wrapSlot, id, ...playGroundProps } = props.config[index];

      const children = (
        // @ts-ignore
        <PlayGround
          {...playGroundProps}
          id={id}
          isActive={activeAnchor.value === id}
          defaultExpand={expandAll.value}
        >
          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!slots[childrenSlot]}>
            {slots[childrenSlot]?.({
              columnIndex,
              index,
              config: props.config,
            })}
          </ConditionalRender>
        </PlayGround>
      );

      return (
        // @ts-ignore
        <ConditionalRender conditional={!!slots[wrapSlot]}>
          {{
            default: () =>
              slots[wrapSlot]?.({ columnIndex, index, config: props.config, children }),
            noMatch: () => children,
          }}
        </ConditionalRender>
      );
    };

    const renderPlayGroundTab = (columnIndex: number, index: number): JSX.Element => {
      const { type, childrenSlot, wrapSlot, id, ...playGroundTabProps } = props.config[index];

      const children = (
        // @ts-ignore
        <PlayGroundTab
          {...playGroundTabProps}
          id={id}
          isActive={activeAnchor.value === id}
          defaultExpand={expandAll.value}
        >
          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!slots[childrenSlot]}>
            {slots[childrenSlot]?.({
              columnIndex,
              index,
              config: props.config,
            })}
          </ConditionalRender>
        </PlayGroundTab>
      );

      return (
        // @ts-ignore
        <ConditionalRender conditional={!!slots[wrapSlot]}>
          {{
            default: () =>
              slots[wrapSlot]?.({ columnIndex, index, config: props.config, children }),
            noMatch: () => children,
          }}
        </ConditionalRender>
      );
    };

    const renderPlayGroundMulit = (columnIndex: number, index: number): JSX.Element => {
      const { type, childrenSlot, wrapSlot, id, ...playGroundProps } = props.config[index];

      const children = (
        // @ts-ignore
        <PlayGroundMulit
          {...playGroundProps}
          id={id}
          isActive={activeAnchor.value === id}
          defaultExpand={expandAll.value}
        >
          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!slots[childrenSlot]}>
            {slots[childrenSlot]?.({
              columnIndex,
              index,
              config: props.config,
            })}
          </ConditionalRender>
        </PlayGroundMulit>
      );

      return (
        // @ts-ignore
        <ConditionalRender conditional={!!slots[wrapSlot]}>
          {{
            default: () =>
              slots[wrapSlot]?.({ columnIndex, index, config: props.config, children }),
            noMatch: () => children,
          }}
        </ConditionalRender>
      );
    };

    const renderMap = new Map<string, Function>([
      ['PlayGround', renderPlayGround],
      ['PlayGroundMulit', renderPlayGroundMulit],
      ['PlayGroundTab', renderPlayGroundTab],
    ]);

    watch(expandAll, () => {
      expandLock = false;
    });

    watch(
      () => props.defaultExpandAll,
      (newValue) => (expandAll.value = newValue),
    );

    onMounted(() => {
      if (typeof window === 'undefined') return;

      window.addEventListener('hashchange', onHashChange);
    });

    onBeforeMount(() => {
      if (typeof window === 'undefined') return;

      window.removeEventListener('hashchange', onHashChange);
    });

    return () => (
      <div
        // @ts-ignore
        class={selectPrefix}
      >
        <div
          // @ts-ignore
          class={`${selectPrefix}-header`}
        >
          {/*@ts-ignore*/}
          <ConditionalRender conditional={!!props.title}>
            <div
              // @ts-ignore
              class={`${selectPrefix}-header-title`}
            >
              {props.title}
            </div>
          </ConditionalRender>

          <div
            // @ts-ignore
            class={`${selectPrefix}-header-extra`}
          >
            {/*@ts-ignore*/}
            <ConditionalRender conditional={props.isShowExpandAllBtn}>
              {/*@ts-ignore**/}
              <ConditionalRender conditional={expandAll.value}>
                {{
                  default: () => (
                    <img
                      // @ts-ignore
                      class={`${selectPrefix}-expand-code`}
                      src={Constant.CloseCodeAll}
                      alt=""
                      onClick={() => {
                        if (expandLock) return;
                        expandLock = true;
                        expandAll.value = false;
                      }}
                    />
                  ),
                  noMatch: () => (
                    <img
                      // @ts-ignore
                      class={`${selectPrefix}-expand-code`}
                      src={Constant.ExpandCodeAll}
                      alt=""
                      onClick={() => {
                        if (expandLock) return;
                        expandLock = true;
                        expandAll.value = true;
                      }}
                    />
                  ),
                }}
              </ConditionalRender>
            </ConditionalRender>

            {/*@ts-ignore*/}
            <ConditionalRender conditional={!!props.extra}>{props.extra}</ConditionalRender>
          </div>
        </div>

        <div
          // @ts-ignore
          class={`${selectPrefix}-main`}
        >
          {column.value.map((_: any, columnIndex: number) => (
            <div
              // @ts-ignore
              class={`${selectPrefix}-column`}
            >
              {props.config.map((item, index) => {
                if (index % props.columnCount === columnIndex) {
                  return (
                    <div
                      // @ts-ignore
                      class={`${selectPrefix}-item`}
                      key={item.id}
                    >
                      {renderMap?.get(item.type)?.(columnIndex, index)}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  },
});
