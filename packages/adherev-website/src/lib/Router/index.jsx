import { defineAsyncComponent, resolveComponent, h } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { Skeleton } from 'ant-design-vue';

import RouterConfig from '@/config/router.config';

import BasicLayout from '../BasicLayout';
import Util from '../BasicLayout/Util';

/**
 * WrapperComponent
 * @return {*}
 * @constructor
 */
function WrapperComponent() {
  return {
    name: 'WrapperComponent',
    render: () => h(resolveComponent('router-view')),
  };
}

/**
 * getBasicLayoutRoutes
 * @param routes
 * @param authorized
 */
function getBasicLayoutRoutes(routes, authorized) {
  return (routes || []).filter((r) => {
    if ('hide' in r && r.hide) return false;

    if (!r.redirect) {
      if (r.authority && r.authority.length) {
        const isAuthority = Util.isAuthority(r.authority, authorized);

        if (isAuthority) {
          r.children = getBasicLayoutRoutes(r.children, authorized);
        }

        return isAuthority;
      }

      r.children = getBasicLayoutRoutes(r.children, authorized);

      return true;
    }

    return false;
  });
}

/**
 * renderRoute
 * @param router
 * @param parentRoutes
 * @param route
 * @param authorized
 */
function renderRoute({ router, parentRoutes, route, authorized }) {
  const { children = [], ...others } = route;

  const cloneRoute = Object.assign(others, {
    children: [],
  });

  if ('redirect' in cloneRoute) {
    cloneRoute.path = '';
  }

  router.push(cloneRoute);

  if (!cloneRoute.component) {
    if (!('redirect' in cloneRoute)) {
      // 没有component是SubMenu
      cloneRoute.component = WrapperComponent();
    } else {
      // 如果是redirect
      const firstAuthorityRoute = (parentRoutes || [])
        .filter((r) => r.authority)
        .find((r) => r.authority.some((a) => authorized.includes(a)));
      if (firstAuthorityRoute) {
        cloneRoute.redirect = firstAuthorityRoute.path;
      }
    }
  } else if (cloneRoute.component === BasicLayout) {
    // 菜单布局
    cloneRoute.component = {
      render() {
        const routes = getBasicLayoutRoutes(children, authorized);
        return <BasicLayout defaultRoutes={routes} name={cloneRoute.name} />;
      },
    };
  }

  if (children && children.length) {
    renderRouterLoop(cloneRoute.children, children, authorized);
  }
}

/**
 * RouterLoop
 * @param router
 * @param children
 * @param authorized - 所有权限
 */
function renderRouterLoop(router, children = [], authorized) {
  for (let i = 0; i < children.length; i++) {
    const route = children[i];

    renderRoute({
      router,
      parentRoutes: children,
      route,
      authorized,
    });
  }
}

/**
 * renderChildren - 处理这个节点是一个SubMenu有自己的组件，但是它下面的子路由不显示，但面包屑上还要显示SubMenu中的Name
 * @param path
 * @param Component
 * @return {function(...[*]=)}
 */
export function renderChildren({ path, Component }) {
  return {
    render() {
      if (window.location.pathname === path) {
        return h(Component);
      }

      return this.$slots.default();
    },
  };
}

/*** lazy - 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param {Object} AsyncView 需要加载的组件，如 import('@/components/home/Home.vue')
 * @return {Object} 返回一个promise对象
 **/
export function lazy(AsyncView) {
  return defineAsyncComponent({
    // 工厂函数
    loader: () => AsyncView,
    // 加载异步组件时要使用的组件
    loadingComponent: {
      render() {
        const result = [];

        for (let i = 0; i < 15; i++) {
          result.push(<Skeleton key={i + 1} loading active avatar />);
        }

        return <div>{result}</div>;
      },
    },
    // 加载失败时要使用的组件
    // errorComponent: ErrorComponent,
    // 在显示 loadingComponent 之前的延迟 | 默认值：200（单位 ms）
    delay: 200,
    // 如果提供了 timeout ，并且加载组件的时间超过了设定值，将显示错误组件
    // 默认值：Infinity（即永不超时，单位 ms）
    timeout: 3000,
    // 定义组件是否可挂起 | 默认值：true
    suspensible: false,
    /**
     *
     * @param {*} error 错误信息对象
     * @param {*} retry 一个函数，用于指示当 promise 加载器 reject 时，加载器是否应该重试
     * @param {*} fail  一个函数，指示加载程序结束退出
     * @param {*} attempts 允许的最大重试次数
     */
    onError(error, retry, fail, attempts) {
      if (error.message.match(/fetch/) && attempts <= 3) {
        // 请求发生错误时重试，最多可尝试 3 次
        retry();
      } else {
        // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
        // 必须调用其中一个才能继续错误处理。
        fail();
      }
    },
  });
}

/**
 * Router - Router的创建
 * @return {Promise<*>}
 */
export default async () => {
  // 路由配置
  const config = RouterConfig();

  const authorized = [];

  const router = [];

  // 根据路由配置生成实际的路由
  renderRouterLoop(router, config, authorized);

  return createRouter({
    history: createWebHistory(),
    routes: router,
  });
};
