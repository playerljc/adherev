import classNames from 'classnames';
import {
  CSSProperties,
  VNode,
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue';
import { func, number, object, string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';

const selectorPrefix = 'adherev-ui-scrollload';

export const EMPTY = 'empty';
export const ERROR = 'error';
export const NORMAL = 'normal';

export const scrollLoadProps = {
  loadClassName: string().def(''),
  loadStyle: object<CSSProperties>().def({}),
  emptyClassName: string().def(''),
  emptyStyle: object<CSSProperties>().def({}),
  errorClassName: string().def(''),
  errorStyle: object<CSSProperties>().def({}),
  distance: number().def(50),
  getScrollContainer: func<() => HTMLElement | null>(),
  renderLoading: object<VNode>(),
  renderEmpty: object<VNode>(),
  renderError: object<VNode>(),
};

export default defineComponent({
  name: 'adv-scrollload',
  props: scrollLoadProps,
  slots: ['loading', 'empty', 'error'],
  emits: ['scrollBottom', 'emptyClick', 'errorClick'],
  setup(props, { emit, slots, expose }) {
    const el = ref<HTMLElement>();
    const emptyEl = ref<HTMLElement>();
    const errorEl = ref<HTMLElement>();
    const loadEl = ref<HTMLElement>();

    let lock = false;

    const scrollContainer = computed(() =>
      props.getScrollContainer ? props.getScrollContainer() || el.value : el.value,
    );

    const wrapStyle = computed(
      () => `overflow-y: ${props?.getScrollContainer?.() === el.value ? 'auto' : 'initial'}`,
    );

    const initEvents = () => {
      scrollContainer?.value?.addEventListener('scroll', onScroll);

      emptyEl?.value?.addEventListener('click', onEmptyClick);

      errorEl?.value?.addEventListener('click', onErrorClick);
    };

    const removeEvents = () => {
      scrollContainer?.value?.removeEventListener('scroll', onScroll);

      emptyEl?.value?.removeEventListener('click', onEmptyClick);

      errorEl?.value?.removeEventListener('click', onErrorClick);
    };

    const onScroll = () => {
      const $el = scrollContainer.value as HTMLElement;
      const $loadEl = loadEl.value as HTMLElement;
      const $emptyEl = emptyEl.value as HTMLElement;
      const $errorEl = errorEl.value as HTMLElement;

      const bottomHeight = $el.scrollHeight - $el.offsetHeight;

      const scrollTop = $el.scrollTop;

      /**
       * 条件完全相等或误差值在1之间
       */
      if (Math.abs(scrollTop - bottomHeight) <= props.distance) {
        if (lock) return;

        lock = true;

        // 先显示loading
        $loadEl.style.display = 'flex';

        /**
         * 完成
         * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
         */
        emit('scrollBottom', (status: string) => {
          $loadEl.style.display = 'none';

          if (status === EMPTY) {
            $emptyEl.style.display = 'block';
          } else if (status === ERROR) {
            $errorEl.style.display = 'block';
          }

          lock = false;
        });
      }
    };

    const onEmptyClick = () => emit('emptyClick');

    const onErrorClick = () => emit('errorClick');

    const renderLoading = (): JSX.Element => {
      if (slots.loading || props.renderLoading) {
        return (
          <div
            class={classNames(`${selectorPrefix}-load`, props.loadClassName || '')}
            style={props.loadStyle}
            ref={loadEl}
          >
            {slots?.loading?.() || props.renderLoading}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-load`, 'standard', props.loadClassName || '')}
          style={props.loadStyle}
          ref={loadEl}
        >
          {Intl.tv('数据加载中')}
        </div>
      );
    };

    const renderEmpty = (): JSX.Element => {
      if (slots.empty || props.renderEmpty) {
        return (
          <div
            class={classNames(`${selectorPrefix}-empty`, props.emptyClassName || '')}
            style={props.emptyStyle}
            ref={emptyEl}
          >
            {slots?.empty?.() || props.renderEmpty}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-empty`, props.emptyClassName || '')}
          style={props.emptyStyle}
          ref={emptyEl}
        >
          ~{Intl.tv('没有更多')}
        </div>
      );
    };

    const renderError = (): JSX.Element => {
      if (slots.error || props.renderError) {
        return (
          <div
            class={classNames(`${selectorPrefix}-error`, props.errorClassName || '')}
            style={props.errorStyle}
            ref={errorEl}
          >
            {slots?.error?.() || props.renderError}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-error`, props.errorClassName || '')}
          style={props.errorStyle}
          ref={errorEl}
        >
          {Intl.tv('出现错误')}
        </div>
      );
    };

    const hideAll = () => {
      const $loadEl = loadEl.value as HTMLElement;
      const $emptyEl = emptyEl.value as HTMLElement;
      const $errorEl = errorEl.value as HTMLElement;

      $loadEl.style.display = 'none';
      $errorEl.style.display = 'none';
      $emptyEl.style.display = 'none';
    };

    expose({
      hideAll,
    });

    onBeforeUnmount(() => removeEvents());

    onMounted(() => initEvents());

    return () => (
      <div class={selectorPrefix} style={wrapStyle.value} ref={el}>
        {slots?.default?.()}
        {renderLoading()}
        {renderEmpty()}
        {renderError()}
      </div>
    );
  },
});
