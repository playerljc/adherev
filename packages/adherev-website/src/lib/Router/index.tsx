// @ts-ignore
import RouterConfig from '@/config/router.config';
import { Skeleton } from 'ant-design-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
// @ts-ignore
import BasicLayout from '../BasicLayout';
import Util from '../BasicLayout/Util';

Vue.use(VueRouter);

/**
 * WrapperComponent
 * @return {*}
 * @constructor
 */
function WrapperComponent() {
  return {
    name: 'WrapperComponent',
    render: (h) => h('router-view'),
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
      render(h) {
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
    render(h) {
      if (window.location.pathname === path) {
        return h(Component);
      }

      return this.$slots.default;
    },
  };
}

/**
 * lazy - 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param {Object} AsyncView 需要加载的组件，如 import('@/components/home/Home.vue')
 * @return {Object} 返回一个promise对象
 */
export function lazy(AsyncView) {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: {
      render(h) {
        const result = [];

        for (let i = 0; i < 15; i++) {
          // @ts-ignore
          result.push(<Skeleton key={i + 1} loading active avatar />);
        }

        // @ts-ignore
        return <div>{result}</div>;
      },
    },
    // 加载失败时使用的组件
    // error: require('@/components/public/RouteError.vue').default,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 10000,
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
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

  // eslint-disable-next-line no-redeclare
  const authorized = [];

  const router = [];

  // 根据路由配置生成实际的路由
  // @ts-ignore
  renderRouterLoop(router, config, authorized);

  return new VueRouter({
    mode: 'history',
    routes: router,
  });
};
