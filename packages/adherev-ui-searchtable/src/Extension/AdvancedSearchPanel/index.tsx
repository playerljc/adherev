import { Button, ConfigProvider } from 'ant-design-vue';
import classNames from 'classnames';
import { Teleport, defineComponent } from 'vue';
import { array, func, object } from 'vue-types';

import {
  FilterOutlined,
  LeftCircleOutlined,
  ReloadOutlined,
  RightCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons-vue';
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
    groupData: array().def([]),
    tableGridLayoutConfig: object().def({
      layout: 'horizontal',
      bordered: false,
    }),
    remainingGroupData: array().def([]),
    advancedSearchConfig: object().def({
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
        // className: '',
        // 外围style
        // style: {},
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
    searchFn: func(),
    resetFn: func(),
    collapseFn: func(),
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
  render() {
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
        <ConfigProvider {...this.configProvider}>
          <SlideLayout.Overlay
            {...overlayProps}
            onBeforeShow={onBeforeShow}
            onBeforeClose={onBeforeClose}
            onAfterShow={onAfterShow}
            onAfterClose={onAfterClose}
            defaultCollapse={this.collapse}
            class={classNames(selectorPrefix, overlayProps.className || '')}
          >
            <VerticalFlexLayout class={`${selectorPrefix}-inner`}>
              {{
                renderTop: () => (
                  <header class={`${selectorPrefix}-header`}>
                    <div class={`${selectorPrefix}-title`}>
                      <ConditionalRender conditional={!this?.$slots?.titleLabel?.()}>
                        {{
                          default: () => (
                            <Space.Group direction="horizontal" size={2}>
                              <FilterOutlined />
                              <strong>{Intl.tv('高级搜索')}</strong>
                            </Space.Group>
                          ),
                          noMatch: () => <div>{this?.$slots?.titleLabel?.()}</div>,
                        }}
                      </ConditionalRender>
                    </div>

                    <div
                      class={`${selectorPrefix}-collapse`}
                      onClick={() => {
                        this.collapse = !this.collapse;
                      }}
                    >
                      <ConditionalRender conditional={!this?.$slots?.collapse?.()}>
                        {{
                          default: () => (
                            <ConditionalRender conditional={this.collapse}>
                              {{
                                default: () => (
                                  <Space.Group direction="horizontal" size={2}>
                                    <LeftCircleOutlined />
                                    <strong>{Intl.tv('收起')}</strong>
                                  </Space.Group>
                                ),
                                noMatch: () => (
                                  <div>
                                    <Space.Group direction="horizontal" size={2}>
                                      <RightCircleOutlined />
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
                        {
                          // @ts-ignore
                          renderGridSearchFormGroup(
                            this.$slots,
                            this.advancedSearchConfig.showStrategy === 'all'
                              ? this.groupData
                              : this.remainingGroupData,
                            this.tableGridLayoutConfig,
                          )
                        }
                      </ScrollLayout>
                    </div>

                    <footer class={`${selectorPrefix}-footer`}>
                      <div class={`${selectorPrefix}-item`}>
                        <Button
                          type="primary"
                          onClick={() => {
                            this.searchFn().then(() => {
                              this.collapse = false;
                            });
                          }}
                        >
                          {{
                            default: () => Intl.tv('确定'),
                            icon: () => <SearchOutlined />,
                          }}
                        </Button>
                      </div>

                      <div class={`${selectorPrefix}-item`}>
                        <Button
                          onClick={() => {
                            this.resetFn().then(() => {
                              this.collapse = false;
                            });
                          }}
                        >
                          {{
                            default: () => Intl.tv('重置'),
                            icon: () => <ReloadOutlined />,
                          }}
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
