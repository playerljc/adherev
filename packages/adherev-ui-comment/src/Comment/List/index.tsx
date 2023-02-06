import { Teleport, VNode, defineComponent, ref } from 'vue';
import { bool, func, object } from 'vue-types';

import BackTopAnimation from '@baifendian/adherev-ui-backtopanimation';
import ConditionalRender from '@baifendian/adherev-ui-conditionalrender';
import ScrollLoad from '@baifendian/adherev-ui-scrollload';
import { ScrollLoadProps } from '@baifendian/adherev-ui-scrollload/es/types';

const selectorPrefix = 'adherev-ui-comment-inner-list';

export const listProps = {
  isLoading: bool().def(false),
  hasMore: bool().def(false),
  scrollLoadProps: object<ScrollLoadProps>().def({}),
  getScrollWrapContainer: func<() => HTMLElement | null>(),
  renderFirstLoading: object<VNode>(),
};

export default defineComponent({
  name: `adv-comment-list`,
  props: listProps,
  slots: ['renderFirstLoading', 'default'],
  emits: ['loadMore'],
  setup(props, { slots, emit }) {
    const wrapRef = ref<HTMLDivElement>();
    let isFirst = true;
    let isFirstLoading = true;

    const renderDispatch = () => {
      const loading = props.isLoading;

      if (isFirst && !isFirstLoading && loading) {
        isFirstLoading = true;
      }

      if (isFirst && isFirstLoading && !loading) {
        isFirst = false;
        isFirstLoading = false;
      }

      if (isFirst) {
        return renderFirstLoading();
      }

      return renderNormal();
    };

    const renderFirstLoading = () => (
      <div class={`${selectorPrefix}-first-loading-wrap`}>
        {slots.renderFirstLoading ? slots.renderFirstLoading?.() : props.renderFirstLoading}
      </div>
    );

    const renderNormal = () => {
      const defaultScrollLoadProps = {
        getScrollContainer: () => props.getScrollWrapContainer?.()?.firstElementChild,
      };

      return (
        // @ts-ignore
        <ConditionalRender conditional={props.hasMore}>
          {{
            default: () => (
              <div class={`${selectorPrefix}-normal-wrap`}>
                {/*@ts-ignore*/}
                <ScrollLoad
                  onScrollBottom={(callback) => {
                    console.log('onScrollBottom');
                    emit('loadMore', callback);
                  }}
                  {...{
                    ...defaultScrollLoadProps,
                    ...(props.scrollLoadProps || {}),
                    distance: props.scrollLoadProps?.distance || 50,
                  }}
                >
                  {slots.default?.()}
                </ScrollLoad>

                {/*@ts-ignore*/}
                <ConditionalRender
                  conditional={
                    !!(props.getScrollWrapContainer ? props.getScrollWrapContainer() : null)
                  }
                >
                  {{
                    default: () => (
                      <Teleport to={props.getScrollWrapContainer?.()}>
                        {/*@ts-ignore*/}
                        <BackTopAnimation
                          onTarget={(callback) =>
                            callback(props.getScrollWrapContainer?.()?.firstElementChild)
                          }
                          onTrigger={(next) => next()}
                        />
                      </Teleport>
                    ),
                    noMatch: () => (
                      // @ts-ignore
                      <BackTopAnimation
                        onTarget={(callback) =>
                          callback(wrapRef.value?.querySelector?.('.adherev-ui-scrollload'))
                        }
                        onTrigger={(next) => next()}
                      />
                    ),
                  }}
                </ConditionalRender>
              </div>
            ),
          }}
        </ConditionalRender>
      );
    };

    return () => (
      <div class={selectorPrefix} ref={wrapRef}>
        {renderDispatch()}
      </div>
    );
  },
});
