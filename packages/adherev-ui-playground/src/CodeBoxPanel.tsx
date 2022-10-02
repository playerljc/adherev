import { Fragment } from 'vue-fragment';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';

import PlayGround from './PlayGround';
import PlayGroundMulit from './PlayGroundMulit';
import PlayGroundTab from './PlayGroundTab';
import Constant from './constant';

const selectPrefix = 'adherev-ui-playground-code-box';

export const CodeBoxPanelPropTypes = {
  title: {
    type: [String, Object],
    default: '',
  },
  extra: {
    type: Object,
    default: () => null,
  },
  isShowExpandAllBtn: {
    type: Boolean,
    default: true,
  },
  columnCount: {
    type: Number,
    default: 1,
  },
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  config: {
    type: Array,
    default: () => [],
  },
};

const CodeBoxPanel: any = {
  name: 'adv-playground-code-box-panel',
  props: {
    ...CodeBoxPanelPropTypes,
  },
  data() {
    return {
      activeAnchor: '',
      expandAll: this.defaultExpandAll,
      $expandLock: false,
    };
  },
  computed: {
    column() {
      const { columnCount } = this;

      const column: any[] = [];
      if (columnCount != null) {
        column.length = columnCount;
      }
      column.fill(undefined);
      return column;
    },
    renderMap() {
      return new Map<string, Function>([
        ['PlayGroundMulit', this.renderPlayGroundMulit],
        ['PlayGround', this.renderPlayGround],
        ['PlayGroundTab', this.renderPlayGroundTab],
      ]);
    },
  },
  mounted() {
    if (typeof window === 'undefined') return;

    window.addEventListener('hashchange', this.onHashChange);
  },
  beforeDestroy() {
    if (typeof window === 'undefined') return;

    window.removeEventListener('hashchange', this.onHashChange);
  },
  watch: {
    expandAll() {
      this.$data.$expandLock = false;
    },
    defaultExpandAll(expandAll) {
      this.expandAll = expandAll;
    },
  },
  methods: {
    onHashChange() {
      this.activeAnchor = window.location.hash.substring(1);
    },
    renderPlayGround(h, columnIndex: number, index: number) {
      const { $scopedSlots, config, activeAnchor, expandAll } = this;

      const { type, childrenSlot, wrapSlot, id, ...playGroundProps } = config[index];

      const children = (
        // @ts-ignore
        <PlayGround
          {...{ props: playGroundProps, attrs: { id } }}
          isActive={activeAnchor === id}
          defaultExpand={expandAll}
        >
          <ConditionalRender conditional={!!$scopedSlots[childrenSlot]}>
            {$scopedSlots[childrenSlot]?.({
              columnIndex,
              index,
              config,
            })}
          </ConditionalRender>
        </PlayGround>
      );

      return (
        <ConditionalRender conditional={!!$scopedSlots[wrapSlot]}>
          {$scopedSlots[wrapSlot]?.({ columnIndex, index, config, children })}
          {/*@ts-ignore*/}
          <Fragment slot="noMatch">{children}</Fragment>
        </ConditionalRender>
      );
    },
    renderPlayGroundTab(h, columnIndex: number, index: number) {
      const { $scopedSlots, config, activeAnchor, expandAll } = this;

      const { type, childrenSlot, wrapSlot, id, ...playGroundTabProps } = config[index];

      const children = (
        // @ts-ignore
        <PlayGroundTab
          {...{ props: playGroundTabProps, attrs: { id } }}
          isActive={activeAnchor === id}
          defaultExpand={expandAll}
        >
          <ConditionalRender conditional={!!$scopedSlots[childrenSlot]}>
            {$scopedSlots[childrenSlot]?.({
              columnIndex,
              index,
              config,
            })}
          </ConditionalRender>
        </PlayGroundTab>
      );

      return (
        <ConditionalRender conditional={!!$scopedSlots[wrapSlot]}>
          {$scopedSlots[wrapSlot]?.({ columnIndex, index, config, children })}
          {/*@ts-ignore*/}
          <Fragment slot="noMatch">{children}</Fragment>
        </ConditionalRender>
      );
    },
    renderPlayGroundMulit(h, columnIndex: number, index: number) {
      const { $scopedSlots, config, activeAnchor, expandAll } = this;

      const { type, childrenSlot, wrapSlot, id, ...playGroundProps } = config[index];

      const children = (
        // @ts-ignore
        <PlayGroundMulit
          {...{ props: playGroundProps, attrs: { id } }}
          isActive={activeAnchor === id}
          defaultExpand={expandAll}
        >
          <ConditionalRender conditional={!!$scopedSlots[childrenSlot]}>
            {$scopedSlots[childrenSlot]?.({
              columnIndex,
              index,
              config,
            })}
          </ConditionalRender>
        </PlayGroundMulit>
      );

      return (
        <ConditionalRender conditional={!!$scopedSlots[wrapSlot]}>
          {$scopedSlots[wrapSlot]?.({ columnIndex, index, config, children })}
          {/*@ts-ignore*/}
          <Fragment slot="noMatch">{children}</Fragment>
        </ConditionalRender>
      );
    },
  },
  render(h) {
    const {
      title,
      isShowExpandAllBtn,
      extra,
      expandAll,
      config,
      columnCount,
      column,
      renderMap,
      $data: { $expandLock },
    } = this;

    return (
      <div class={selectPrefix}>
        <div class={`${selectPrefix}-header`}>
          <ConditionalRender conditional={!!title}>
            <div class={`${selectPrefix}-header-title`}>{title}</div>
          </ConditionalRender>

          <div class={`${selectPrefix}-header-extra`}>
            <ConditionalRender conditional={isShowExpandAllBtn}>
              <ConditionalRender conditional={expandAll}>
                <img
                  class={`${selectPrefix}-expand-code`}
                  src={Constant.CloseCodeAll}
                  alt=""
                  onClick={() => {
                    if ($expandLock) return;
                    this.$data.$expandLock = true;
                    this.expandAll = false;
                  }}
                />

                <img
                  slot="noMatch"
                  class={`${selectPrefix}-expand-code`}
                  src={Constant.ExpandCodeAll}
                  alt=""
                  onClick={() => {
                    if ($expandLock) return;
                    this.$data.$expandLock = true;
                    this.expandAll = true;
                  }}
                />
              </ConditionalRender>
            </ConditionalRender>
            <ConditionalRender conditional={!!extra}>{extra}</ConditionalRender>
          </div>
        </div>

        <div class={`${selectPrefix}-main`}>
          {column.map((item, columnIndex) => (
            <div class={`${selectPrefix}-column`}>
              {config.map((item, index) => {
                if (index % columnCount === columnIndex) {
                  return (
                    <div class={`${selectPrefix}-item`} key={item.id}>
                      {renderMap.get(item.type)(h, columnIndex, index)}
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
};

export default CodeBoxPanel;
