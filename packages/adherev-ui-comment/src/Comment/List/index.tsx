import BackTopAnimation from '@baifendian/adherev-ui-backtopanimation';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';
import Teleport from '@baifendian/adherev-ui-teleport';

const selectorPrefix = 'adherev-ui-comment-inner-list';

const List: any = {
  name: `adv-comment-list`,
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

      if (this.$data.$isFirst && !this.$data.$isFirstLoading && loading) {
        this.$data.$isFirstLoading = true;
      }

      if (this.$data.$isFirst && this.$data.$isFirstLoading && !loading) {
        this.$data.$isFirst = false;
        this.$data.$isFirstLoading = false;
      }

      if (this.$data.$isFirst) {
        return this.$renderFirstLoading(h);
      }

      return this.$renderNormal(h);
    },
    $renderFirstLoading(h) {
      return (
        <div class={`${selectorPrefix}-first-loading-wrap`}>{this.$slots.renderFirstLoading}</div>
      );
    },
    $renderNormal(h) {
      const defaultScrollLoadProps = {
        getScrollContainer: () => this.getScrollWrapContainer?.()?.firstElementChild,
      };

      return (
        <ConditionalRender conditional={this.hasMore}>
          <div class={`${selectorPrefix}-normal-wrap`}>
            <ScrollLoad
              onScrollBottom={(callback) => this.$emit('loadMore', callback)}
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
                  onTarget={(callback) =>
                    callback(this.getScrollWrapContainer?.()?.firstElementChild)
                  }
                  onTrigger={(next) => next()}
                />
              </Teleport>

              <BackTopAnimation
                slot="noMatch"
                onTarget={(callback) =>
                  callback(this.$refs.wrapRef?.querySelector?.('.adherev-ui-scrollload'))
                }
                onTrigger={(next) => next()}
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
