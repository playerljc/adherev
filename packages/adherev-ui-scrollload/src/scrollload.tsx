import classNames from 'classnames';
import { VNode } from 'vue';

import Intl from '@baifendian/adherev-util-intl';

const selectorPrefix = 'adherev-ui-scrollload';

export const EMPTY = 'empty';
export const ERROR = 'error';
export const NORMAL = 'normal';

const ScrollLoad: any = {
  name: 'adv-scrollload',
  props: {
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
    getScrollContainer: {
      type: Function,
      default: () => null,
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
  beforeDestroy() {
    this.removeEvents();
  },
  computed: {
    scrollContainer() {
      return this.getScrollContainer ? this.getScrollContainer() || this.$refs.el : this.$refs.el;
    },
    wrapStyle() {
      return `${this.style};overflow-y: ${
        this.getScrollContainer() === this.$refs.el ? 'auto' : 'initial'
      }`;
    },
  },
  methods: {
    initEvents() {
      const { $refs } = this;

      this.scrollContainer.addEventListener('scroll', this.onScroll);

      $refs.emptyEl.addEventListener('click', this.onEmptyClick);

      $refs.errorEl.addEventListener('click', this.onErrorClick);
    },
    removeEvents() {
      const { $refs } = this;

      this.scrollContainer.removeEventListener('scroll', this.onScroll);

      $refs.emptyEl.removeEventListener('click', this.onEmptyClick);

      $refs.errorEl.removeEventListener('click', this.onErrorClick);
    },
    onScroll() {
      const {
        $refs: { loadEl, errorEl, emptyEl },
        $data,
        distance,
      } = this;

      const el = this.scrollContainer;

      const bottomHeight = el.scrollHeight - el.offsetHeight;

      const scrollTop = el.scrollTop;

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
    renderLoading(h): VNode {
      const { $slots, loadClassName } = this;

      if ($slots.loading) {
        return (
          <div
            class={classNames(
              `${selectorPrefix}-load`,

              loadClassName.split(/\s+/),
            )}
            ref="loadEl"
          >
            {$slots.loading}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-load`, 'standard', loadClassName.split(/\s+/))}
          ref="loadEl"
        >
          {Intl.tv('数据加载中')}
        </div>
      );
    },
    renderEmpty(h): VNode {
      const { $slots, emptyClassName } = this;

      if ($slots.empty) {
        return (
          <div
            class={classNames(`${selectorPrefix}-empty`, emptyClassName.split(/\s+/))}
            ref="emptyEl"
          >
            {$slots.empty}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-empty`, emptyClassName.split(/\s+/))}
          ref="emptyEl"
        >
          ~{Intl.tv('没有更多')}
        </div>
      );
    },
    renderError(h): VNode {
      const { $slots, errorClassName } = this;

      if ($slots.error) {
        return (
          <div
            class={classNames(`${selectorPrefix}-error`, errorClassName.split(/\s+/))}
            ref="errorEl"
          >
            {$slots.error}
          </div>
        );
      }

      return (
        <div
          class={classNames(`${selectorPrefix}-error`, errorClassName.split(/\s+/))}
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
  render(h): VNode {
    const { $slots } = this;

    return (
      <div class={selectorPrefix} style={this.wrapStyle} ref="el">
        {$slots.default}
        {this.renderLoading(h)}
        {this.renderEmpty(h)}
        {this.renderError(h)}
      </div>
    );
  },
};

export default ScrollLoad;
