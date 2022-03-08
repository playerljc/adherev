import Intl from '@baifendian/adherev-util-intl';
import classNames from 'classnames';
import { CSSProperties, defineComponent, onMounted, ref } from 'vue';
import { number, object, string } from 'vue-types';

const selectorPrefix = 'adherev-ui-scrollload';

export const EMPTY = 'empty';
export const ERROR = 'error';
export const NORMAL = 'normal';

const scrollLoadProps = {
  loadClassName: string().def(''),
  loadStyle: object<CSSProperties>().def({}),
  emptyClassName: string().def(''),
  emptyStyle: object<CSSProperties>().def({}),
  errorClassName: string().def(''),
  errorStyle: object<CSSProperties>().def({}),
  distance: number().def(50),
};

export default defineComponent({
  name: 'adv-scrollload',
  props: scrollLoadProps,
  emits: ['scroll-bottom', 'empty-click', 'error-click'],
  setup(props, { emit, slots, expose }) {
    const el = ref<HTMLElement>();
    const emptyEl = ref<HTMLElement>();
    const errorEl = ref<HTMLElement>();
    const loadEl = ref<HTMLElement>();

    let lock = false;

    onMounted(() => initEvents());

    const initEvents = () => {
      el?.value?.addEventListener('scroll', onScroll);

      emptyEl?.value?.addEventListener('click', onEmptyClick);

      errorEl?.value?.addEventListener('click', onErrorClick);
    };

    const onScroll = () => {
      const $el = el.value as HTMLElement;
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
        emit('scroll-bottom', (status: string) => {
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

    const onEmptyClick = () => {
      emit('empty-click');
    };

    const onErrorClick = () => {
      emit('error-click');
    };

    const renderLoading = (): JSX.Element => {
      if (slots.loading) {
        return (
          <div
            class={classNames(`${selectorPrefix}-load`, (props.loadClassName || '').split(/\s+/))}
            style={props.loadStyle}
            // @ts-ignore
            ref={loadEl}
          >
            {slots?.loading?.()}
          </div>
        );
      }

      return (
        <div
          class={classNames(
            `${selectorPrefix}-load`,
            'standard',
            (props.loadClassName || '').split(/\s+/),
          )}
          style={props.loadStyle}
          // @ts-ignore
          ref={loadEl}
        >
          {Intl.tv('数据加载中')}
        </div>
      );
    };

    const renderEmpty = (): JSX.Element => {
      if (slots.empty) {
        return (
          <div
            class={classNames(`${selectorPrefix}-empty`, (props.emptyClassName || '').split(/\s+/))}
            style={props.emptyStyle}
            // @ts-ignore
            ref={emptyEl}
          >
            {slots?.empty?.()}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-empty`, (props.emptyClassName || '').split(/\s+/))}
          style={props.emptyStyle}
          // @ts-ignore
          ref={emptyEl}
        >
          ~{Intl.tv('没有更多')}
        </div>
      );
    };

    const renderError = (): JSX.Element => {
      if (slots.error) {
        return (
          <div
            class={classNames(`${selectorPrefix}-error`, (props.errorClassName || '').split(/\s+/))}
            style={props.errorStyle}
            // @ts-ignore
            ref={errorEl}
          >
            {slots?.error?.()}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-error`, (props.errorClassName || '').split(/\s+/))}
          style={props.errorStyle}
          // @ts-ignore
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

    return () => (
      <div
        class={selectorPrefix}
        // @ts-ignore
        ref={el}
      >
        {slots?.default?.()}
        {renderLoading()}
        {renderEmpty()}
        {renderError()}
      </div>
    );
  },
});
