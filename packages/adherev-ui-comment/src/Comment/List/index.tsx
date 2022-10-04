import { Skeleton } from 'ant-design-vue';
import { VNode } from 'vue';

import BackTopAnimation from '@baifendian/adherev-ui-backtopanimation';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';
import Teleport from '@baifendian/adherev-ui-teleport';

import { selectorPrefix } from '../index';

const List: any = {
  name: `${selectorPrefix}-list`,
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    hasMore: {
      type: Boolean,
      default: false,
    },
    scrollLoadProps: {
      type: Object,
      default: () => ({}),
    },
    getScrollWrapContainer: {
      type: Function,
      default: () => null,
    },
  },
  slots: ['renderFirstLoading', 'default'],
  emits: ['load-more'],
  data() {
    return {
      $isFirst: true,
      $isFirstLoading: true,
    };
  },
  methods: {
    $renderDispatch(h) {
      const loading = this.isLoading;

      const {
        $data: { $isFirst, $isFirstLoading },
      } = this;

      if ($isFirst && !$isFirstLoading && loading) {
        this.$data.$isFirstLoading = true;
      }

      if ($isFirst && $isFirstLoading && !loading) {
        this.$isFirst = false;
        this.$isFirstLoading = false;
      }

      if ($isFirst) {
        return this.$renderFirstLoading(h);
      }

      return this.$renderNormal(h);
    },
    $renderFirstLoading(h) {
      if (this.$slots.renderFirstLoading) {
        return this.$slots.renderFirstLoading;
      }

      const result: VNode[] = [];

      for (let i = 0; i < 7; i++) {
        // @ts-ignore
        result.push(<Skeleton key={i + 1} loading avatar />);
      }

      return <div class={`${selectorPrefix}-first-loading-wrap`}>{result}</div>;
    },
    $renderNormal(h) {
      const defaultScrollLoadProps = {
        getScrollContainer: () => this.getScrollWrapContainer?.()?.firstElementChild,
        scrollBottom: () => this.$emit('load-more'),
      };

      return (
        <ConditionalRender conditional={this.hasMore}>
          <div class={`${selectorPrefix}-normal-wrap`}>
            <ScrollLoad
              {...{
                props: {
                  ...defaultScrollLoadProps,
                  ...(this.scrollLoadProps || {}),
                  distance: this.scrollLoadProps?.distance || 50,
                },
              }}
            >
              {this.$slots.default}
            </ScrollLoad>

            <ConditionalRender
              conditional={!!(this.getScrollWrapContainer ? this.getScrollWrapContainer() : null)}
            >
              <Teleport to={this.getScrollWrapContainer?.()}>
                <BackTopAnimation
                  target={(callback) =>
                    callback(this.getScrollWrapContainer?.()?.firstElementChild)
                  }
                  trigger={(next) => next()}
                />
              </Teleport>

              <BackTopAnimation
                slot="noMatch"
                target={(callback) =>
                  callback(this.$refs.wrapRef?.querySelector?.('.adherev-ui-scrollload'))
                }
                trigger={(next) => next()}
              />
            </ConditionalRender>
          </div>
        </ConditionalRender>
      );
    },
  },
  render(h) {
    return (
      <div class={selectorPrefix} ref="wrapRef">
        {this.$renderDispatch(h)}
      </div>
    );
  },
};

export default List;
