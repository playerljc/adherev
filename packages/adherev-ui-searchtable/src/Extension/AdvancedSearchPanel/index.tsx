import { Button, ConfigProvider } from 'ant-design-vue';
import classNames from 'classnames';
import { Teleport, defineComponent } from 'vue';

import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import FlexLayout from '@baifendian/adherev-ui-flexlayout';
import SlideLayout from '@baifendian/adherev-ui-slidelayout';
import Space from '@baifendian/adherev-ui-space';
import TableGridLayout from '@baifendian/adherev-ui-tablegridlayout';
import Intl from '@baifendian/adherev-util-intl';

const { VerticalFlexLayout, ScrollLayout } = FlexLayout;
const { renderGridSearchFormGroup } = TableGridLayout;
const selectorPrefix = 'adherev-ui-searchtable-advancedsearchpanel';

export default defineComponent({
  name: '',
  props: {
    groupData: {
      type: Array,
      default: () => [],
    },
    tableGridLayoutConfig: {
      type: Object,
      default: () => ({
        layout: 'horizontal',
        bordered: false,
      }),
    },
    remainingGroupData: {
      type: Array,
      default: () => [],
    },
    advancedSearchConfig: {
      type: Object,
      default: () => ({
        // 显示少行 'auto' | number
        // auto - 为自动
        // number - 指定行数 超出行会在高级筛选中显示
        rowCount: 'auto',
        // 剩余的条件的显示方式 'all' | 'remaining'
        // all - 全部显示
        // remaining - 显示剩余
        showStrategy: 'all',
        // 高级搜索
        advancedSearch: {
          // 外围样式
          className: '',
          // 外围style
          style: {},
          // 宽度
          width: '30%',
          // 是否有遮罩
          mask: true,
          // 层级
          zIndex: 19999,
          // 过度时间
          time: 300,
          // 方向
          direction: 'right',
          // 默认不展开
          collapse: false,
          onBeforeShow: () => {},
          onBeforeClose: () => {},
          onAfterShow: () => {},
          onAfterClose: () => {},
          getPopupContainer: () => document.body,
        },
      }),
    },
    searchFn: {
      type: Function,
    },
    resetFn: {
      type: Function,
    },
    collapseFn: {
      type: Function,
    },
  },
  inject: ['configProvider'],
  slots: ['titleLabel', 'collapse'],
  data() {
    return {
      collapse: this.advancedSearchConfig.advancedSearch.collapse,
    };
  },
  watch: {
    'advancedSearchConfig.advancedSearch.collapse': function (collapse) {
      this.collapse = collapse;
    },
  },
  render(h) {
    const {
      advancedSearch: {
        getPopupContainer,
        onBeforeShow,
        onBeforeClose,
        onAfterShow,
        onAfterClose,
        ...overlayProps
      },
    } = this.advancedSearchConfig;

    return (
      <Teleport to={getPopupContainer?.() || document.body}>
        <ConfigProvider {...{ props: this.configProvider }}>
          <SlideLayout.Overlay
            {...{
              props: overlayProps,
              'before-show': () => onBeforeShow(),
              'before-close': () => onBeforeClose(),
              'after-show': () => onAfterShow(),
              'after-close': () => onAfterClose(),
            }}
            defaultCollapse={this.collapse}
            class={classNames(selectorPrefix, overlayProps.className || '')}
          >
            <VerticalFlexLayout class={`${selectorPrefix}-inner`}>
              {{
                renderTop: () => (
                  <header class={`${selectorPrefix}-header`}>
                    <div class={`${selectorPrefix}-title`}>
                      <ConditionalRender conditional={!this.$slots.titleLabel}>
                        {{
                          default: () => (
                            <Space.Group direction="horizontal" size={2}>
                              <Icon type="filter" />
                              <strong>{Intl.tv('高级搜索')}</strong>
                            </Space.Group>
                          ),
                          noMatch: () => <div>{this.$slots.titleLabel}</div>,
                        }}
                      </ConditionalRender>
                    </div>

                    <div
                      class={`${selectorPrefix}-collapse`}
                      onClick={() => {
                        this.collapse = !this.collapse;
                      }}
                    >
                      <ConditionalRender conditional={!this.$slots.collapse}>
                        {{
                          default: () => (
                            <ConditionalRender conditional={this.collapse}>
                              {{
                                default: () => (
                                  <Space.Group direction="horizontal" size={2}>
                                    <Icon type="left-circle" />
                                    <strong>{Intl.tv('收起')}</strong>
                                  </Space.Group>
                                ),
                                noMatch: () => (
                                  <div>
                                    <Space.Group direction="horizontal" size={2}>
                                      <Icon type="right-circle" />
                                      <strong>{Intl.tv('展开')}</strong>
                                    </Space.Group>
                                  </div>
                                ),
                              }}
                            </ConditionalRender>
                          ),
                          noMatch: () => this.$slots?.collapse?.(),
                        }}
                      </ConditionalRender>
                    </div>
                  </header>
                ),
                renderMain: () => (
                  <div class={`${selectorPrefix}-main`}>
                    <div class={`${selectorPrefix}-scroll`}>
                      <ScrollLayout scrollY>
                        {renderGridSearchFormGroup(
                          this.$createElement,
                          this,
                          this.advancedSearchConfig.showStrategy === 'all'
                            ? this.groupData
                            : this.remainingGroupData,
                          this.tableGridLayoutConfig,
                        )}
                      </ScrollLayout>
                    </div>

                    <footer class={`${selectorPrefix}-footer`}>
                      <div class={`${selectorPrefix}-item`}>
                        <Button
                          type="primary"
                          icon="search"
                          onClick={() => {
                            this.searchFn().then(() => {
                              this.collapse = false;
                            });
                          }}
                        >
                          {Intl.tv('确定')}
                        </Button>
                      </div>

                      <div class={`${selectorPrefix}-item`}>
                        <Button
                          icon="reload"
                          onClick={() => {
                            this.resetFn().then(() => {
                              this.collapse = false;
                            });
                          }}
                        >
                          {Intl.tv('重置')}
                        </Button>
                      </div>
                    </footer>
                  </div>
                ),
              }}
            </VerticalFlexLayout>
          </SlideLayout.Overlay>
        </ConfigProvider>
      </Teleport>
    );
  },
});
