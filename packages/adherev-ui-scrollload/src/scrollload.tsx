import classNames from 'classnames';

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
      $lock: false,
    };
  },
  mounted() {
    this.initEvents();
  },
  methods: {
    initEvents() {
      const { $refs } = this;

      $refs.el.addEventListener('scroll', this.onScroll);

      $refs.emptyEl.addEventListener('click', this.onEmptyClick);

      $refs.errorEl.addEventListener('click', this.onErrorClick);
    },
    onScroll() {
      const {
        $refs: { el, loadEl, errorEl, emptyEl },

        $data,

        distance,
      } = this;

      const bottomHeight = el.scrollHeight - el.offsetHeight;

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
        if ($data.$lock) return;

        $data.$lock = true;

        // 先显示loading

        loadEl.style.display = 'flex';

        /**
         * 完成
         * @param {string} status [empty(没有数据) | error(有错误) | normal(正常)]
         */

        this.$emit('scroll-bottom', (status) => {
          loadEl.style.display = 'none';

          if (status === EMPTY) {
            emptyEl.style.display = 'block';
          } else if (status === ERROR) {
            errorEl.style.display = 'block';
          }

          $data.$lock = false;
        });
      }
    },
    onEmptyClick() {
      this.$emit('empty-click');
    },
    onErrorClick() {
      this.$emit('error-click');
    },
    renderLoading(h) {
      const { $slots, loadClassName } = this;

      if ($slots.loading) {
        return (
          <div
            className={classNames(
              `${selectorPrefix}-load`,

              loadClassName.split(' '),
            )}
            ref="loadEl"
          >
            {$slots.loading}
          </div>
        );
      }

      return (
        <div
          class={classNames(
            `${selectorPrefix}-load`,
            'standard',

            loadClassName.split(' '),
          )}
          ref="loadEl"
        >
          {Intl.tv('数据加载中')}
        </div>
      );
    },
    renderEmpty(h) {
      const { $slots, emptyClassName } = this;

      if ($slots.empty) {
        return (
          <div
            class={classNames(
              `${selectorPrefix}-empty`,

              emptyClassName.split(' '),
            )}
            ref="emptyEl"
          >
            {$slots.empty}
          </div>
        );
      }

      return (
        <div
          class={classNames(
            `${selectorPrefix}-empty`,

            emptyClassName.split(' '),
          )}
          ref="emptyEl"
        >
          ~{Intl.tv('没有更多')}
        </div>
      );
    },
    renderError(h) {
      const { $slots, errorClassName } = this;

      if ($slots.error) {
        return (
          <div
            class={classNames(
              `${selectorPrefix}-error`,

              errorClassName.split(' '),
            )}
            ref="errorEl"
          >
            {$slots.error}
          </div>
        );
      }

      return (
        <div
          class={classNames(
            `${selectorPrefix}-error`,

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
        $refs: { loadEl, errorEl, emptyEl },
      } = this;

      loadEl.style.display = 'none';
      errorEl.style.display = 'none';
      emptyEl.style.display = 'none';
    },
  },
  render(h) {
    const { $slots, className } = this;

    return (
      <div
        class={classNames(
          selectorPrefix,

          className.split(' '),
        )}
        ref="el"
      >
        {$slots.default}

        {this.renderLoading(h)}

        {this.renderEmpty(h)}

        {this.renderError(h)}
      </div>
    );
  },
};
