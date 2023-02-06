import classNames from 'classnames';
import moment from 'moment';
import { VNode, computed, defineComponent, onMounted, ref } from 'vue';
import { bool, number, object, string } from 'vue-types';

import Intl from '@baifendian/adherev-util-intl';
import Resource from '@baifendian/adherev-util-resource';

const selectorPrefix = 'adherev-ui-pullrefresh';
const defaultImg =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHN0eWxlPSJ3aWR0aDozMDhweDtoZWlnaHQ6MzA4cHg7IiB2ZXJzaW9uPSIxLjEiIGlkPSLlm77lvaIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAyNHB4IiBoZWlnaHQ9IjEwMjRweCIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAyNCAxMDI0IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCiAgPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMCIgZmlsbD0iI2VjZjBmMSIgZD0iTTc5Ny43NjQ0MiAzMjYuNTU4NDFjLTguODg0MTk5LTE1LjU2MzMyNy0yNTIuODgwMS0yODYuODE5MDE5LTI2OC4zNzk1MTItMzEzLjU2NzQ4OS0xMC4xMzA1NDQtMTcuNDQ4ODIzLTM0LjI1ODQ5NS0xNy4xOTMxNjItNDQuMzg5MDM4IDBDNDczLjY1MDkzOSAzMi4yNjEzMjQgMjMwLjk5NzI1NSAzMDQuNjM1NTMgMjE4LjM3NDAyMyAzMjcuNDIxMjY0Yy05LjIzNTczMiAxNi41NTQwMTEgMC45NTg3MjcgMzguMzgxMDE5IDIxLjk1NDgzNyAzOC4zODEwMTlsMTE5LjkwNDczMSAwIDAgMjU2LjQ5MTMwMyAwIDM2Ljc4MzE0MSAyOTEuODM2MzU0IDAgMC0yOTMuMzA2NDAyIDEyMy41Nzk4NDkgMEM3OTQuNjk2NDk1IDM2NS43NzAzMjUgODA4Ljk0OTU2MiAzNDYuMTE2NDMxIDc5Ny43NjQ0MiAzMjYuNTU4NDF6IiAvPg0KPHBhdGggY2xhc3M9InN2Z3BhdGgiIGRhdGEtaW5kZXg9InBhdGhfMSIgZmlsbD0iI2VjZjBmMSIgZD0iTTM2MC4yMDE2MzMgNjg5LjY5MjA2MWwyOTIuMzE1NzE4IDAgMCA5MC45MTkyMzItMjkyLjMxNTcxOCAwIDAtOTAuOTE5MjMyWiIgLz4NCjxwYXRoIGNsYXNzPSJzdmdwYXRoIiBkYXRhLWluZGV4PSJwYXRoXzIiIGZpbGw9IiNlY2YwZjEiIGQ9Ik0zNjAuMjAxNjMzIDg0MC45MTUxOTFsMjkyLjMxNTcxOCAwIDAgNjAuNTkxNTE2LTI5Mi4zMTU3MTggMCAwLTYwLjU5MTUxNloiIC8+DQo8cGF0aCBjbGFzcz0ic3ZncGF0aCIgZGF0YS1pbmRleD0icGF0aF8zIiBmaWxsPSIjZWNmMGYxIiBkPSJNMzYwLjIwMTYzMyA5OTIuMzkzOTgybDI5MC40MzAyMjIgMCAwIDMwLjI5NTc1OC0yOTAuNDMwMjIyIDAgMC0zMC4yOTU3NThaIiAvPg0KDQo8L3N2Zz4NCg==';

export const pullRefreshProps = {
  scrollClassName: string().def(''),
  pullHeight: number().def(200),
  isShowUpdateTime: bool().def(true),
  updateTime: number().def(moment().valueOf()),
  updateTimeFormat: string().def(Resource.Dict.value.ResourceMomentFormat18.value()),
  loadingAnimation: string().def('la-ball-circus la-dark'),
  renderIcon: object<VNode>(),
  renderCanLabel: object<VNode>(),
  renderLabel: object<VNode>(),
  renderLoadingAnimation: object<VNode>(),
};

export default defineComponent({
  name: 'adv-pullrefresh',
  props: pullRefreshProps,
  slots: ['icon', 'canLabel', 'label', 'loadingAnimation'],
  emits: ['pull-start', 'pull-can-refresh', 'pull-bottom', 'pull-rebound', 'pull-refresh'],
  setup(props, { slots, emit, expose }) {
    const iconElRef = ref<HTMLImageElement>();

    const refreshElRef = ref<HTMLDivElement>();

    const scrollElRef = ref<HTMLDivElement>();

    const triggerInnerElRef = ref<HTMLDivElement>();

    const elRef = ref<HTMLElement>();

    const preUpdateTime = ref<number>(new Date().getTime());

    let isCan = false;

    let isTop = true;

    let maskEl: HTMLDivElement | null = null;

    let scrollEl: HTMLElement | null = null;

    let startPageY = 0;

    let isDownPull = false;

    let pullHeight = 200;

    let el: HTMLElement | null = null;

    let refreshHeight = 0;

    let iconEl: HTMLElement | null = null;

    let triggerInnerEl: HTMLElement | null = null;

    const getScrollClassName = computed(() =>
      classNames(`${selectorPrefix}-scroll`, props.scrollClassName || ''),
    );

    const renderIcon = (): JSX.Element => {
      if (slots.icon) {
        return (
          <div class={`${selectorPrefix}-trigger-icon`}>
            <div class={`${selectorPrefix}-trigger-icon-inner`} ref={iconElRef}>
              {slots?.icon?.()}
            </div>
          </div>
        );
      }

      if (props.renderIcon) {
        return (
          <div class={`${selectorPrefix}-trigger-icon`}>
            <div class={`${selectorPrefix}-trigger-icon-inner`} ref={iconElRef}>
              {props.renderIcon}
            </div>
          </div>
        );
      }

      return (
        <div class={`${selectorPrefix}-trigger-icon`}>
          <img
            class={`${selectorPrefix}-trigger-icon-inner`}
            src={defaultImg}
            alt=""
            ref={iconElRef}
          />
        </div>
      );
    };

    const renderLabel = (): JSX.Element => (
      <p class={`${selectorPrefix}-trigger-label`}>
        {isCan
          ? slots?.canLabel?.() || props.renderCanLabel || <span>{Intl.tv('松开刷新')}</span>
          : slots?.label?.() || props.renderLabel || <span>{Intl.tv('下拉刷新')}</span>}
      </p>
    );

    const renderUpdateTime = (): JSX.Element | null => {
      return props.isShowUpdateTime ? (
        <p class={`${selectorPrefix}-trigger-update`}>
          {Intl.tv('更新时间')}：
          <span class={`${selectorPrefix}-trigger-update-label`}>
            {moment(preUpdateTime.value).format(props.updateTimeFormat)}
          </span>
        </p>
      ) : null;
    };

    const renderLoadingAnimation = (): JSX.Element => {
      if (props.loadingAnimation) {
        return (
          <div
            class={classNames(`${selectorPrefix}-trigger-refresh`, props.loadingAnimation || '')}
            ref={refreshElRef}
          >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        );
      }

      return (
        <div class={`${selectorPrefix}-trigger-refresh`} ref={refreshElRef}>
          {slots?.loadingAnimation?.() || props.renderLoadingAnimation}
        </div>
      );
    };

    const renderMask = () => {
      maskEl = document.querySelector(`.${selectorPrefix}-mask`);

      if (!maskEl) {
        maskEl = document.createElement('div');
        maskEl.className = `${selectorPrefix}-mask`;
        document.body.appendChild(maskEl);
      }
    };

    const getPullHeight = () => {
      if (props.pullHeight <= 0) {
        return 200;
      }

      if (props.pullHeight > (scrollEl as HTMLElement)?.clientHeight) {
        return scrollEl?.clientHeight;
      }

      return props.pullHeight;
    };

    const addEvents = () => {
      scrollEl?.addEventListener('touchstart', onTouchStart);

      scrollEl?.addEventListener('mousedown', onTouchStart);

      // @ts-ignore
      scrollEl?.addEventListener('scroll', onScroll);
    };

    const removeEvents = () => {
      scrollEl?.removeEventListener('mousemove', onTouchMove);

      scrollEl?.removeEventListener('mouseup', onTouchEnd);

      scrollEl?.removeEventListener('touchmove', onTouchMove);

      scrollEl?.removeEventListener('touchend', onTouchEnd);
    };

    const onTouchStart = (e: TouchEvent | MouseEvent) => {
      trigger('pull-start');

      startPageY = (e as TouchEvent).changedTouches
        ? (e as TouchEvent).changedTouches[0].pageY
        : (e as MouseEvent).pageY;

      scrollEl?.addEventListener('touchmove', onTouchMove);

      scrollEl?.addEventListener('mousemove', onTouchMove);

      scrollEl?.addEventListener('touchend', onTouchEnd);

      scrollEl?.addEventListener('mouseup', onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent | MouseEvent) => {
      if (!scrollEl) return;

      scrollEl.style.overflow = 'hidden';

      const targetY = (e as TouchEvent).changedTouches
        ? (e as TouchEvent).changedTouches[0].pageY
        : (e as MouseEvent).pageY;

      const difference = targetY - startPageY;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        e.preventDefault();

        isDownPull = true;

        // 正常拉
        if (distance < pullHeight) {
          translateY(scrollEl, `${distance}px`, 0);

          translateY(el as HTMLElement, `calc(-100% + ${distance}px)`, 0);

          // 具备刷新条件
          if (distance >= refreshHeight + 80) {
            // console.log('3.具备刷新条件');
            rotateIcon(iconEl as HTMLElement, 0, 150);

            isCan = true;

            trigger('pull-can-refresh');
          }
          // 不具备刷新条件
          else {
            rotateIcon(iconEl as HTMLElement, 180, 150);

            isCan = false;
          }

          (el as HTMLElement).style.display = 'flex';
        }
        // 越界了
        else {
          translateY(scrollEl, `${pullHeight}px`, 0);

          translateY(el as HTMLElement, `calc(-100% + ${pullHeight}px)`, 0);

          rotateIcon(iconEl as HTMLElement, 0, 150);

          // console.log('4.拉动到了底部');

          isCan = true;

          trigger('pull-bottom');
        }
      }
      // 中线上
      else if (isDownPull) {
        e.preventDefault();

        translateY(scrollEl, '0px', 0);

        translateY(el as HTMLElement, 'calc(-100% + 0px)', 0);

        rotateIcon(iconEl as HTMLElement, 180, 0);
      }
      // 其他
      else {
        clear();
      }
    };

    const onTouchEnd = (e: TouchEvent | MouseEvent) => {
      const targetY = (e as TouchEvent).changedTouches
        ? (e as TouchEvent).changedTouches[0].pageY
        : (e as MouseEvent).pageY;

      const difference = targetY - startPageY;

      const distance = Math.abs(difference);

      // 中线下
      if (difference > 0) {
        // 正常拉
        if (distance < pullHeight) {
          if (distance >= refreshHeight + 80) {
            refresh();
          } else {
            // console.log('2.没有具备刷新条件弹回');
            // self.events.trigger('pullRebound');
            trigger('pull-rebound');
            reset();
          }
        }
        // 越界了
        else {
          refresh();
        }
      }
      // 中线上
      else {
        clear();
      }
    };

    const translateY = (el: HTMLElement, y: string, duration = 0) => {
      el.style.transition = el.style.webkitTransition = `transform ${duration}ms ease`;
      el.style.transform = el.style.webkitTransform = `translate3d(0,${y},0)`;
    };

    const onScroll = (e?: { target: { scrollTop: number } }) => {
      if (e?.target.scrollTop === 0) {
        isTop = true;

        scrollEl?.addEventListener('touchstart', onTouchStart);

        scrollEl?.addEventListener('mousedown', onTouchStart);
      } else if (isTop) {
        isTop = false;

        scrollEl?.removeEventListener('touchstart', onTouchStart);

        scrollEl?.removeEventListener('mousedown', onTouchStart);
      }
    };

    const rotateIcon = (el: HTMLElement, distance: number, duration = 0) => {
      const deg = distance;
      el.style.transition = el.style.webkitTransition = `transform ${duration}ms linear`;
      el.style.transform = el.style.webkitTransform = `rotate(${deg}deg)`;
    };

    const trigger = (action: any, params?: any): void => {
      emit(action, params);
    };

    const clear = () => {
      removeEvents();

      isDownPull = false;

      isTop = true;

      (el as HTMLElement).style.display = 'flex';

      (refreshElRef.value as HTMLElement).style.display = 'none';

      (triggerInnerEl as HTMLElement).style.display = 'flex';

      rotateIcon(iconEl as HTMLElement, 180, 0);

      (scrollEl as HTMLElement).style.overflowY = 'auto';

      (maskEl as HTMLElement).style.display = 'none';
    };

    const refresh = () => {
      function onTransitionEnd() {
        (triggerInnerEl as HTMLElement).style.display = 'none';

        (refreshElRef.value as HTMLElement).style.display = 'block';

        trigger('pull-refresh', reset);

        scrollEl?.removeEventListener('transitionend', onTransitionEnd);

        preUpdateTime.value = moment().valueOf();
      }

      (maskEl as HTMLElement).style.display = 'block';

      removeEvents();

      scrollEl?.addEventListener('transitionend', onTransitionEnd);

      translateY(scrollEl as HTMLElement, `${refreshHeight}px`, 500);

      translateY(el as HTMLElement, `calc(-100% + ${refreshHeight}px)`, 500);

      rotateIcon(iconEl as HTMLElement, 180, 300);
    };

    const reset = () => {
      function onTransitionEnd() {
        scrollEl?.removeEventListener('transitionend', onTransitionEnd);

        (triggerInnerEl as HTMLElement).style.display = 'flex';
      }

      clear();

      scrollEl?.addEventListener('transitionend', onTransitionEnd);

      translateY(scrollEl as HTMLElement, '0px', 200);

      translateY(el as HTMLElement, 'calc(-100% + 0px)', 200);
    };

    const resetUpdateTime = (updateTime: number): Promise<null> => {
      return new Promise((resolve) => {
        preUpdateTime.value = updateTime || moment().valueOf();
        resolve(null);
      });
    };

    const getUpdateTime = (): number => {
      return preUpdateTime.value as number;
    };

    onMounted(() => {
      el = elRef.value as HTMLElement;
      iconEl = iconElRef.value as HTMLElement;
      scrollEl = scrollElRef.value as HTMLElement;
      triggerInnerEl = triggerInnerElRef.value as HTMLElement;

      pullHeight = getPullHeight() as number;
      refreshHeight = (el as HTMLElement).clientHeight;

      addEvents();
    });

    expose({
      resetUpdateTime,
      getUpdateTime,
      refresh,
    });

    renderMask();

    return () => (
      <div class={selectorPrefix}>
        <div class={getScrollClassName.value} ref={scrollElRef}>
          {slots?.default?.()}
        </div>

        <div class={`${selectorPrefix}-trigger`} ref={elRef}>
          <div class={`${selectorPrefix}-trigger-inner`} ref={triggerInnerElRef}>
            {renderIcon()}
            {renderLabel()}
            {renderUpdateTime()}
          </div>
          {renderLoadingAnimation()}
        </div>
      </div>
    );
  },
});
