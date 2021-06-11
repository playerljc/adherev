// @ts-ignore
import classNames from 'classnames';
// @ts-ignore
import Intl from '@baifendian/adherev-util-intl';

const selectorPrefix = 'adherev-ui-scrollload';

export const EMPTY = 'empty';
export const ERROR = 'error';
export const NORMAL = 'normal';

export default {
  name: 'adv-scrollload',
  props: {
    className: {
      type: String,
      default: '',
    },
    loadClassName: {
      type: String,
      default: '',
    },
    emptyClassName: {
      type: String,
      default: '',
    },
    errorClassName: {
      type: String,
      default: '',
    },
    distance: {
      type: Number,
      default: 50,
    },
    // onScrollBottom: {
    //   type: Function,
    // },
    // onEmptyClick: {
    //   type: Function,
    // },
    // onErrorClick: {
    //   type: Function,
    // },
  },
  data() {
    return {
      _lock: false,
    };
  },
  mounted() {
    // @ts-ignore
    this.initEvents();
  },
  methods: {
    initEvents() {
      // @ts-ignore
      const { $refs } = this;

      // @ts-ignore
      $refs.el.addEventListener('scroll', this.onScroll);
      // @ts-ignore
      $refs.emptyEl.addEventListener('click', this.onEmptyClick);
      // @ts-ignore
      $refs.errorEl.addEventListener('click', this.onErrorClick);
    },
    onScroll() {
      const {
        // @ts-ignore
        $refs: { el, loadEl, errorEl, emptyEl },
        // @ts-ignore
        $data,
        // @ts-ignore
        distance,
      } = this;

      // @ts-ignore
      const bottomHeight = el.scrollHeight - el.offsetHeight;
      // @ts-ignore
      const scrollTop = el.scrollTop;

      console.log(
        '11111111111111',
        scrollTop,
        bottomHeight,
        distance,
        Math.abs(scrollTop - bottomHeight) <= distance,
      );
      /**
       * 条件完全相等或误差值在1之间
       */
      if (Math.abs(scrollTop - bottomHeight) <= distance) {
        console.log('222222222222222222', $data._lock);
        if ($data._lock) return;

        $data._lock = true;

        // 先显示loading
        // @ts-ignore
        loadEl.style.display = 'flex';

        /**
         * 完成
         * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
         */
        // @ts-ignore
        this.$emit('scroll-bottom', (status) => {
          // @ts-ignore
          loadEl.style.display = 'none';

          if (status === EMPTY) {
            // @ts-ignore
            emptyEl.style.display = 'block';
          } else if (status === ERROR) {
            // @ts-ignore
            errorEl.style.display = 'block';
          }

          $data._lock = false;
        });
      }
    },
    onEmptyClick() {
      // @ts-ignore
      this.$emit('empty-click');
    },
    onErrorClick() {
      // @ts-ignore
      this.$emit('error-click');
    },
    renderLoading(h) {
      // @ts-ignore
      const { $slots, loadClassName } = this;

      if ($slots.loading) {
        return (
          // @ts-ignore
          <div
            className={classNames(
              `${selectorPrefix}-load`,
              // @ts-ignore
              loadClassName.split(' '),
            )}
            ref="loadEl"
          >
            {$slots.loading}
          </div>
        );
      }

      return (
        // @ts-ignore
        <div
          class={classNames(
            `${selectorPrefix}-load`,
            'standard',
            // @ts-ignore
            loadClassName.split(' '),
          )}
          ref="loadEl"
        >
          {Intl.tv('数据加载中')}
        </div>
      );
    },
    renderEmpty(h) {
      // @ts-ignore
      const { $slots, emptyClassName } = this;

      if ($slots.empty) {
        return (
          // @ts-ignore
          <div
            class={classNames(
              `${selectorPrefix}-empty`,
              // @ts-ignore
              emptyClassName.split(' '),
            )}
            ref="emptyEl"
          >
            {$slots.empty}
          </div>
        );
      }

      return (
        // @ts-ignore
        <div
          class={classNames(
            `${selectorPrefix}-empty`,
            // @ts-ignore
            emptyClassName.split(' '),
          )}
          ref="emptyEl"
        >
          ~{Intl.tv('没有更多')}
        </div>
      );
    },
    renderError(h) {
      // @ts-ignore
      const { $slots, errorClassName } = this;

      if ($slots.error) {
        return (
          // @ts-ignore
          <div
            class={classNames(
              `${selectorPrefix}-error`,
              // @ts-ignore
              errorClassName.split(' '),
            )}
            ref="errorEl"
          >
            {$slots.error}
          </div>
        );
      }

      return (
        // @ts-ignore
        <div
          class={classNames(
            `${selectorPrefix}-error`,
            // @ts-ignore
            errorClassName.split(' '),
          )}
          ref="errorEl"
        >
          {Intl.tv('出现错误')}
        </div>
      );
    },
    /**
     * hideAll
     */
    hideAll() {
      const {
        // @ts-ignore
        $refs: { loadEl, errorEl, emptyEl },
      } = this;

      loadEl.style.display = 'none';
      errorEl.style.display = 'none';
      emptyEl.style.display = 'none';
    },
  },
  render(h) {
    // @ts-ignore
    const { $slots, className } = this;

    return (
      // @ts-ignore
      <div
        class={classNames(
          selectorPrefix,
          // @ts-ignore
          className.split(' '),
        )}
        ref="el"
      >
        {$slots.default}
        {/*@ts-ignore*/}
        {this.renderLoading(h)}
        {/*@ts-ignore*/}
        {this.renderEmpty(h)}
        {/*@ts-ignore*/}
        {this.renderError(h)}
      </div>
    );
  },
};
