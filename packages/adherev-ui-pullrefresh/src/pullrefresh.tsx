import classNames from 'classnames';
import moment from 'moment';
import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-pullrefresh';
const defaultImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==';

export default {
  name: 'adv-pullrefresh',
  props: {
    className: {
      type: String,
      default: '',
    },
    scrollClassName: {
      type: String,
      default: '',
    },
    pullHeight: {
      type: Number,
      default: 200,
    },
    isShowUpdateTime: {
      type: Boolean,
      default: true,
    },
    updateTime: {
      type: Number,
      default: moment().valueOf(),
    },
    updateTimeFormat: {
      type: String,
      default: Resource.Dict.value.ResourceMomentFormatFull.value,
    },
    loadingAnimation: {
      type: String,
      default: 'la-ball-circus la-dark',
    },
  },
  data() {
    return {
      isCan: false,
      $maskEl: null,
      $el: null,
      $iconEl: null,
      $scrollEl: null,
      $triggerInnerEl: null,
      $pullHeight: 200,
      $refreshHeight: 0,
      $startPageY: null,
      $isDownPull: false,
      $isTop: true,
    };
  },
  computed: {
    getClassName() {
      const { className } = this;

      return classNames(selectorPrefix, ...className.split(/\s+/));
    },
    getScrollClassName() {
      const { scrollClassName } = this;

      return classNames(`${selectorPrefix}-scroll`, ...scrollClassName.split(/\s+/));
    },
  },
  methods: {
    renderIcon(h) {
      const { $slots } = this;

      return $slots.icon ? (
        <div class={`${selectorPrefix}-trigger-icon`}>
          <div class={`${selectorPrefix}-trigger-icon-inner`} ref="iconElRef">
            {/* @ts-ignore */}
            {$slots.icon}
          </div>
        </div>
      ) : (
        <div class={`${selectorPrefix}-trigger-icon`}>
          {/* @ts-ignore */}
          <img
            class={`${selectorPrefix}-trigger-icon-inner`}
            src={defaultImg}
            alt=""
            ref="iconElRef"
          />
        </div>
      );
    },
    renderLabel(h) {
      const { $slots, isCan } = this;

      return (
        <p class={`${selectorPrefix}-trigger-label`}>
          {isCan
            ? $slots.canLabel || h({ template: `<span>${Intl.tv('松开刷新')}</span>` })
            : $slots.label ||
              h({
                template: `<span>${Intl.tv('下拉刷新')}</span>`,
              })}
        </p>
      );
    },
    renderUpdateTime(h) {
      const { isShowUpdateTime, updateTimeFormat, preUpdateTime } = this;

      return isShowUpdateTime ? (
        <p class={`${selectorPrefix}-trigger-update`}>
          {Intl.tv('更新时间')}：
          <span class={`${selectorPrefix}-trigger-update-label`}>
            {moment(preUpdateTime).format(updateTimeFormat)}
          </span>
        </p>
      ) : null;
    },
    renderLoadingAnimation(h) {
      const { $slots, loadingAnimation } = this;
      return loadingAnimation ? (
        <div
          class={classNames(
            `${selectorPrefix}-trigger-refresh`,
            ...(loadingAnimation || '').split(/\s+/),
          )}
          ref="refreshElRef"
        >
          <div></div>

          <div></div>

          <div></div>

          <div></div>

          <div></div>
        </div>
      ) : (
        <div class={`${selectorPrefix}-trigger-refresh`} ref="refreshElRef">
          {$slots.loadingAnimation}
        </div>
      );
    },
    renderMask() {
      const { $data } = this;

      $data.$maskEl = document.querySelector(`.${selectorPrefix}-mask`);

      if (!$data.$maskEl) {
        $data.$maskEl = document.createElement('div');
        $data.$maskEl.className = `${selectorPrefix}-mask`;
        document.body.appendChild($data.$maskEl);
      }
    },
    /**
     * getPullHeight
     * @private
     * @return number
     */
    getPullHeight() {
      const { $data, pullHeight } = this;

      if (pullHeight <= 0) {
        return 200;
      } else {
        if (pullHeight > $data.$scrollEl.clientHeight) {
          return $data.$scrollEl.clientHeight;
        } else {
          return pullHeight;
        }
      }
    },
    addEvents() {
      const {
        $data: { $scrollEl },
      } = this;

      $scrollEl.addEventListener('touchstart', this.onTouchStart);

      $scrollEl.addEventListener('mousedown', this.onTouchStart);

      $scrollEl.addEventListener('scroll', this.onScroll);
    },
    removeEvents() {
      const {
        $data: { $scrollEl },
      } = this;

      $scrollEl.removeEventListener('mousemove', this.onTouchMove);

      $scrollEl.removeEventListener('mouseup', this.onTouchEnd);

      $scrollEl.removeEventListener('touchmove', this.onTouchMove);

      $scrollEl.removeEventListener('touchend', this.onTouchEnd);
    },
    onTouchStart(e) {
      const { $data } = this;

      this.trigger('pull-start');

      $data.$startPageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      const { $scrollEl } = $data;

      $scrollEl.addEventListener('touchmove', this.onTouchMove);

      $scrollEl.addEventListener('mousemove', this.onTouchMove);

      $scrollEl.addEventListener('touchend', this.onTouchEnd);

      $scrollEl.addEventListener('mouseup', this.onTouchEnd);
    },
    onTouchMove(e) {
      const { $data } = this;
      const { $scrollEl, $el, $startPageY, $refreshHeight, $iconEl, $pullHeight } = $data;

      $scrollEl.style.overflow = 'hidden';

      const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      const difference = targetY - $startPageY;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        e.preventDefault();

        $data.$isDownPull = true;

        // 正常拉
        if (distance < $data.$pullHeight) {
          this.translateY($scrollEl, `${distance}px`, 0);

          this.translateY($el, `calc(-100% + ${distance}px)`, 0);

          // 具备刷新条件
          if (distance >= $refreshHeight + 80) {
            console.log('3.具备刷新条件');
            this.rotateIcon($iconEl, 0, 150);

            this.isCan = true;

            this.trigger('pull-can-refresh');
          }
          // 不具备刷新条件
          else {
            this.rotateIcon($iconEl, 180, 150);

            this.isCan = false;
          }

          $el.style.display = 'flex';
        }
        // 越界了
        else {
          this.translateY($scrollEl, `${$pullHeight}px`, 0);

          this.translateY($el, `calc(-100% + ${$pullHeight}px)`, 0);

          this.rotateIcon($iconEl, 0, 150);

          console.log('4.拉动到了底部');

          this.isCan = true;

          this.trigger('pull-bottom');
        }
      }
      // 中线上
      else if ($data.$isDownPull) {
        e.preventDefault();

        this.translateY($scrollEl, '0px', 0);

        this.translateY($el, 'calc(-100% + 0px)', 0);

        this.rotateIcon($iconEl, 180, 0);
      }
      // 其他
      else {
        this.clear();
      }
    },
    onTouchEnd(e) {
      const {
        $data: { $startPageY, $pullHeight, $refreshHeight },
      } = this;

      const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      const difference = targetY - $startPageY;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        // 正常拉
        if (distance < $pullHeight) {
          if (distance >= $refreshHeight + 80) {
            this.refresh();
          } else {
            console.log('2.没有具备刷新条件弹回');
            // self.events.trigger('pullRebound');
            this.trigger('pull-rebound');
            this.reset();
          }
        }
        // 越界了
        else {
          this.refresh();
        }
      }
      // 中线上
      else {
        this.clear();
      }
    },
    onScroll(e) {
      const { $data } = this;
      const { $scrollEl } = $data;

      if (e.target.scrollTop === 0) {
        $data.$isTop = true;

        $scrollEl.addEventListener('touchstart', this.onTouchStart);

        $scrollEl.addEventListener('mousedown', this.onTouchStart);
      } else if ($data.$isTop) {
        $data.$isTop = false;

        $scrollEl.removeEventListener('touchstart', this.onTouchStart);

        $scrollEl.removeEventListener('mousedown', this.onTouchStart);
      }
    },
    translateY(el, y: string, duration = 0) {
      el.style.transition = el.style.webkitTransition = `transform ${duration}ms ease`;
      el.style.transform = el.style.webkitTransform = `translate3d(0,${y},0)`;
    },
    rotateIcon(el, distance, duration = 0) {
      const deg = distance;
      el.style.transition = el.style.webkitTransition = `transform ${duration}ms linear`;
      el.style.transform = el.style.webkitTransform = `rotate(${deg}deg)`;
    },
    trigger(action, params?: any): void {
      this.$emit(action, params);
    },
    clear() {
      this.removeEvents();

      const { $data } = this;

      $data.$isDownPull = false;

      $data.$isTop = true;

      $data.$el.style.display = 'flex';

      this.$refs.refreshElRef.style.display = 'none';

      $data.$triggerInnerEl?.style.display = 'flex';

      this.rotateIcon($data.$iconEl, 180, 0);

      $data.$scrollEl.style.overflowY = 'auto';

      $data.$maskEl.style.display = 'none';
    },
    refresh() {
      const self = this;

      function onTransitionEnd() {
        $triggerInnerEl.style.display = 'none';

        self.$refs.refreshElRef.style.display = 'block';

        self.trigger('pull-refresh', self);

        $scrollEl.removeEventListener('transitionend', onTransitionEnd);

        self.preUpdateTime = moment().valueOf();
      }

      const {
        $data: { $maskEl, $scrollEl, $el, $iconEl, $refreshHeight, $triggerInnerEl },
      } = this;

      $maskEl.style.display = 'block';

      this.removeEvents();

      $scrollEl.addEventListener('transitionend', onTransitionEnd);

      this.translateY($scrollEl, `${$refreshHeight}px`, 500);

      this.translateY($el, `calc(-100% + ${$refreshHeight}px)`, 500);

      this.rotateIcon($iconEl, 180, 300);
    },
    reset() {
      const {
        $data: { $scrollEl, $triggerInnerEl, $el },
      } = this;

      function onTransitionEnd() {
        $scrollEl.removeEventListener('transitionend', onTransitionEnd);

        $triggerInnerEl?.style.display = 'flex';
      }

      this.clear();

      $scrollEl.addEventListener('transitionend', onTransitionEnd);

      this.translateY($scrollEl, '0px', 200);

      this.translateY($el, 'calc(-100% + 0px)', 200);
    },
    resetUpdateTime(updateTime: number): Promise<null> {
      return new Promise((resolve) => {
        this.preUpdateTime = updateTime || moment().valueOf();
        resolve();
      });
    },
    /**
     * getUpdateTime
     * @return number
     */
    getUpdateTime(): number {
      return this.preUpdateTime;
    },
  },
  created() {
    this.renderMask();
  },
  mounted() {
    const { $data, $refs } = this;
    $data.$el = $refs.elRef;
    $data.$iconEl = $refs.iconElRef;
    $data.$scrollEl = $refs.scrollElRef;
    $data.$triggerInnerEl = $refs.triggerInnerElRef;

    $data.$pullHeight = this.getPullHeight();
    $data.$refreshHeight = $data.$el.clientHeight;

    this.addEvents();
  },
  render(h) {
    const { $slots } = this;

    return (
      <div class={this.getClassName}>
        <div class={this.getScrollClassName} ref="scrollElRef">
          {$slots.default}
        </div>

        <div class={`${selectorPrefix}-trigger`} ref="elRef">
          <div class={`${selectorPrefix}-trigger-inner`} ref="triggerInnerElRef">
            {this.renderIcon(h)}

            {this.renderLabel(h)}

            {this.renderUpdateTime(h)}
          </div>

          {this.renderLoadingAnimation(h)}
        </div>
      </div>
    );
  },
};
