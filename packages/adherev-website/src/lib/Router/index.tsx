import { Skeleton } from 'ant-design-vue';
import VueRouter from 'vue-router';

// @ts-ignore
import RouterConfig from '@/config/router.config';

// @ts-ignore
import BasicLayout from '../BasicLayout/BasicLayout';

// @ts-ignore
import styles from './index.less';
import Vue from 'vue';

Vue.use(VueRouter);

/**
 * WrapperComponent
 * @return {*}
 * @constructor
 */
function WrapperComponent() {
  return {
    render(h) {
      // @ts-ignore
      return this.$slots.default;
    },
  };
}

/**
 * renderRoute
 * @param router
 * @param parentRoutes
 * @param route
 * @param authorized
 */
function renderRoute({ router, parentRoutes, route, authorized }) {
  const { routes = [], ...others } = route;

  const cloneRoute = Object.assign(others, {
    routes: [],
  });

  router.push(cloneRoute);

  if (!cloneRoute.component) {
    if (!('redirect' in cloneRoute)) {
      // 没有component是SubMenu
      cloneRoute.component = WrapperComponent;
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
        return <BasicLayout routes={routes} name={cloneRoute.name} />;
      },
    };
  } else {
    const Component = cloneRoute.component;

    cloneRoute.component = () => ({
      // 需要加载的组件 (应该是一个 `Promise` 对象)
      component: Component,
      // 异步组件加载时使用的组件
      loading: {
        render(h) {
          // @ts-ignore
          return <Skeleton avatar paragraph={{ rows: 4 }} />;
        },
      },
    });
  }

  if (routes && routes.length) {
    renderRouterLoop(cloneRoute.routes, routes, authorized);
  }
}

/**
 * RouterLoop
 * @param router
 * @param routes
 * @param authorized - 所有权限
 */
function renderRouterLoop(router, routes = [], authorized) {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];

    renderRoute({
      router,
      parentRoutes: routes,
      route,
      authorized,
    });
  }
}

/**
 * Router - Router的创建
 * @return {Promise<*>}
 */
export default () => {
  // 路由配置
  const config = RouterConfig();

  // eslint-disable-next-line no-redeclare
  const authorized = [];

  const router = [];

  // 根据路由配置生成实际的路由
  renderRouterLoop(router, config, authorized);

  return new VueRouter({
    mode: 'history',
    routes: router,
  });
};

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

      // @ts-ignore
      return this.$slots.default;
    },
  };
}
