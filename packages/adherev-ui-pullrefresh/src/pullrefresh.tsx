// @ts-ignore
import classNames from 'classnames';
// @ts-ignore
import moment from 'moment';
// @ts-ignore
import Intl from '@baifendian/adherev-util-intl';
// @ts-ignore
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
      _maskEl: null,
      _el: null,
      _iconEl: null,
      _scrollEl: null,
      _triggerInnerEl: null,
      _pullHeight: 200,
      _refreshHeight: 0,
      _startPageY: null,
      _isDownPull: false,
      _isTop: true,
    };
  },
  computed: {
    getClassName() {
      // @ts-ignore
      const { className } = this;

      // @ts-ignore
      return classNames(selectorPrefix, ...className.split(' '));
    },
    getScrollClassName() {
      // @ts-ignore
      const { scrollClassName } = this;

      // @ts-ignore
      return classNames(`${selectorPrefix}-scroll`, ...scrollClassName.split(' '));
    },
  },
  methods: {
    renderIcon(h) {
      // @ts-ignore
      const { $slots } = this;

      return $slots.icon ? (
        // @ts-ignore
        <div class={`${selectorPrefix}-trigger-icon`}>
          {/*@ts-ignore*/}
          <div
            class={`${selectorPrefix}-trigger-icon-inner`}
            // @ts-ignore
            ref="iconElRef"
          >
            {/* @ts-ignore */}
            {$slots.icon}
          </div>
        </div>
      ) : (
        // @ts-ignore
        <div class={`${selectorPrefix}-trigger-icon`}>
          {/* @ts-ignore */}
          <img
            class={`${selectorPrefix}-trigger-icon-inner`}
            src={defaultImg}
            alt=""
            // @ts-ignore
            ref="iconElRef"
          />
        </div>
      );
    },
    renderLabel(h) {
      // @ts-ignore
      const { $slots, isCan } = this;

      return (
        // @ts-ignore
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
      // @ts-ignore
      const { isShowUpdateTime, updateTimeFormat, preUpdateTime } = this;

      return isShowUpdateTime ? (
        // @ts-ignore
        <p class={`${selectorPrefix}-trigger-update`}>
          {Intl.tv('更新时间')}：{/*@ts-ignore*/}
          <span class={`${selectorPrefix}-trigger-update-label`}>
            {moment(preUpdateTime).format(updateTimeFormat)}
          </span>
        </p>
      ) : null;
    },
    renderLoadingAnimation(h) {
      // @ts-ignore
      const { $slots, loadingAnimation } = this;
      return loadingAnimation ? (
        // @ts-ignore*
        <div
          class={classNames(
            `${selectorPrefix}-trigger-refresh`,
            ...(loadingAnimation || '').split(' '),
          )}
          // @ts-ignore
          ref="refreshElRef"
        >
          {/*@ts-ignore*/}
          <div></div>
          {/*@ts-ignore*/}
          <div></div>
          {/*@ts-ignore*/}
          <div></div>
          {/*@ts-ignore*/}
          <div></div>
          {/*@ts-ignore*/}
          <div></div>
        </div>
      ) : (
        // @ts-ignore*
        <div
          class={`${selectorPrefix}-trigger-refresh`}
          // @ts-ignore
          ref="refreshElRef"
        >
          {$slots.loadingAnimation}
        </div>
      );
    },
    renderMask() {
      // @ts-ignore
      const { $data } = this;

      $data._maskEl = document.querySelector(`.${selectorPrefix}-mask`);

      if (!$data._maskEl) {
        $data._maskEl = document.createElement('div');
        $data._maskEl.className = `${selectorPrefix}-mask`;
        document.body.appendChild($data._maskEl);
      }
    },
    /**
     * getPullHeight
     * @private
     * @return number
     */
    getPullHeight() {
      // @ts-ignore
      const { $data, pullHeight } = this;

      if (pullHeight <= 0) {
        return 200;
      } else {
        // @ts-ignore
        if (pullHeight > $data._scrollEl.clientHeight) {
          // @ts-ignore
          return $data._scrollEl.clientHeight;
        } else {
          return pullHeight;
        }
      }
    },
    addEvents() {
      const {
        // @ts-ignore
        $data: { _scrollEl },
      } = this;

      // @ts-ignore
      _scrollEl.addEventListener('touchstart', this.onTouchStart);
      // @ts-ignore
      _scrollEl.addEventListener('mousedown', this.onTouchStart);
      // @ts-ignore
      _scrollEl.addEventListener('scroll', this.onScroll);
    },
    removeEvents() {
      const {
        // @ts-ignore
        $data: { _scrollEl },
      } = this;

      // @ts-ignore
      _scrollEl.removeEventListener('mousemove', this.onTouchMove);
      // @ts-ignore
      _scrollEl.removeEventListener('mouseup', this.onTouchEnd);
      // @ts-ignore
      _scrollEl.removeEventListener('touchmove', this.onTouchMove);
      // @ts-ignore
      _scrollEl.removeEventListener('touchend', this.onTouchEnd);
    },
    onTouchStart(e) {
      // @ts-ignore
      const { $data } = this;

      this.trigger('pull-start');

      $data._startPageY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      const { _scrollEl } = $data;

      // @ts-ignore
      _scrollEl.addEventListener('touchmove', this.onTouchMove);
      // @ts-ignore
      _scrollEl.addEventListener('mousemove', this.onTouchMove);
      // @ts-ignore
      _scrollEl.addEventListener('touchend', this.onTouchEnd);
      // @ts-ignore
      _scrollEl.addEventListener('mouseup', this.onTouchEnd);
    },
    onTouchMove(e) {
      // @ts-ignore
      const { $data } = this;
      const { _scrollEl, _el, _startPageY, _refreshHeight, _iconEl, _pullHeight } = $data;

      // @ts-ignore
      _scrollEl.style.overflow = 'hidden';

      const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      // @ts-ignore
      const difference = targetY - _startPageY;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        e.preventDefault();

        $data._isDownPull = true;

        // 正常拉
        if (distance < $data._pullHeight) {
          this.translateY(_scrollEl, `${distance}px`, 0);

          this.translateY(_el, `calc(-100% + ${distance}px)`, 0);

          // 具备刷新条件
          if (distance >= _refreshHeight + 80) {
            console.log('3.具备刷新条件');
            this.rotateIcon(_iconEl, 0, 150);

            // @ts-ignore
            this.isCan = true;

            this.trigger('pull-can-refresh');
          }
          // 不具备刷新条件
          else {
            this.rotateIcon(_iconEl, 180, 150);

            // @ts-ignore
            this.isCan = false;
          }

          // @ts-ignore
          _el.style.display = 'flex';
        }
        // 越界了
        else {
          this.translateY(_scrollEl, `${_pullHeight}px`, 0);

          this.translateY(_el, `calc(-100% + ${_pullHeight}px)`, 0);

          this.rotateIcon(_iconEl, 0, 150);

          console.log('4.拉动到了底部');

          // @ts-ignore
          this.isCan = true;

          this.trigger('pull-bottom');
        }
      }
      // 中线上
      else if ($data._isDownPull) {
        e.preventDefault();

        this.translateY(_scrollEl, '0px', 0);

        this.translateY(_el, 'calc(-100% + 0px)', 0);

        this.rotateIcon(_iconEl, 180, 0);
      }
      // 其他
      else {
        this.clear();
      }
    },
    onTouchEnd(e) {
      const {
        // @ts-ignore
        $data: { _startPageY, _pullHeight, _refreshHeight },
      } = this;

      const targetY = e.changedTouches ? e.changedTouches[0].pageY : e.pageY;

      // @ts-ignore
      const difference = targetY - _startPageY;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        // 正常拉
        if (distance < _pullHeight) {
          if (distance >= _refreshHeight + 80) {
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
      // @ts-ignore
      const { $data } = this;
      const { _scrollEl } = $data;

      if (e.target.scrollTop === 0) {
        $data._isTop = true;

        // @ts-ignore
        _scrollEl.addEventListener('touchstart', this.onTouchStart);

        // @ts-ignore
        _scrollEl.addEventListener('mousedown', this.onTouchStart);
      } else if ($data._isTop) {
        $data._isTop = false;

        // @ts-ignore
        self.scrollEl.removeEventListener('touchstart', this.onTouchStart);

        // @ts-ignore
        self.scrollEl.removeEventListener('mousedown', this.onTouchStart);
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
      // @ts-ignore
      this.$emit(action, params);
    },
    clear() {
      this.removeEvents();

      // @ts-ignore
      const { $data } = this;

      $data._isDownPull = false;

      $data._isTop = true;

      // @ts-ignore
      $data._el.style.display = 'flex';

      // @ts-ignore
      this.$refs.refreshElRef.style.display = 'none';

      // @ts-ignore
      $data._triggerInnerEl?.style.display = 'flex';

      this.rotateIcon($data._iconEl, 180, 0);

      // @ts-ignore
      $data._scrollEl.style.overflowY = 'auto';

      // @ts-ignore
      $data._maskEl.style.display = 'none';
    },
    refresh() {
      const self = this;

      function onTransitionEnd() {
        // @ts-ignore
        _triggerInnerEl.style.display = 'none';

        // @ts-ignore
        self.$refs.refreshElRef.style.display = 'block';

        self.trigger('pull-refresh', self);

        // @ts-ignore
        _scrollEl.removeEventListener('transitionend', onTransitionEnd);

        // @ts-ignore
        self.preUpdateTime = moment().valueOf();
      }

      const {
        // @ts-ignore
        $data: { _maskEl, _scrollEl, _el, _iconEl, _refreshHeight, _triggerInnerEl },
      } = this;
      // @ts-ignore
      _maskEl.style.display = 'block';

      this.removeEvents();

      // @ts-ignore
      _scrollEl.addEventListener('transitionend', onTransitionEnd);

      this.translateY(_scrollEl, `${_refreshHeight}px`, 500);

      this.translateY(_el, `calc(-100% + ${_refreshHeight}px)`, 500);

      this.rotateIcon(_iconEl, 180, 300);
    },
    reset() {
      const {
        // @ts-ignore
        $data: { _scrollEl, _triggerInnerEl, _el },
      } = this;

      function onTransitionEnd() {
        // @ts-ignore
        _scrollEl.removeEventListener('transitionend', onTransitionEnd);

        // @ts-ignore
        _triggerInnerEl?.style.display = 'flex';
      }

      this.clear();

      // @ts-ignore
      _scrollEl.addEventListener('transitionend', onTransitionEnd);

      this.translateY(_scrollEl, '0px', 200);

      this.translateY(_el, 'calc(-100% + 0px)', 200);
    },
    resetUpdateTime(updateTime: number): Promise<null> {
      return new Promise((resolve) => {
        // @ts-ignore
        this.preUpdateTime = updateTime || moment().valueOf();
        resolve();
      });
    },
    /**
     * getUpdateTime
     * @return number
     */
    getUpdateTime(): number {
      // @ts-ignore
      return this.preUpdateTime;
    },
  },
  created() {
    // @ts-ignore
    this.renderMask();
  },
  mounted() {
    // @ts-ignore
    const { $data, $refs } = this;
    $data._el = $refs.elRef;
    $data._iconEl = $refs.iconElRef;
    $data._scrollEl = $refs.scrollElRef;
    $data._triggerInnerEl = $refs.triggerInnerElRef;

    // @ts-ignore
    $data._pullHeight = this.getPullHeight();
    $data._refreshHeight = $data._el.clientHeight;

    // @ts-ignore
    this.addEvents();
  },
  render(h) {
    // @ts-ignore
    const { $slots } = this;

    return (
      // @ts-ignore
      <div class={this.getClassName}>
        {/*@ts-ignore*/}
        <div class={this.getScrollClassName} ref="scrollElRef">
          {$slots.default}
        </div>

        {/*@ts-ignore*/}
        <div class={`${selectorPrefix}-trigger`} ref="elRef">
          {/*@ts-ignore*/}
          <div
            class={`${selectorPrefix}-trigger-inner`}
            // @ts-ignore
            ref="triggerInnerElRef"
          >
            {/*@ts-ignore*/}
            {this.renderIcon(h)}
            {/*@ts-ignore*/}
            {this.renderLabel(h)}
            {/*@ts-ignore*/}
            {this.renderUpdateTime(h)}
          </div>
          {/*@ts-ignore*/}
          {this.renderLoadingAnimation(h)}
        </div>
      </div>
    );
  },
};
