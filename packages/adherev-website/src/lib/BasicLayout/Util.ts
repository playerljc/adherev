import pathToRegexp from 'path-to-regexp';

export default {
  /**
   * loopRoutes
   * @param defaultOpenKeys
   * @param defaultSelectedKeys
   * @param routes
   */
  loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes }) {
    const { pathname } = window.location;
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      if (pathname.indexOf(route.path) !== -1) {
        if (
          route.routes &&
          route.routes.length &&
          route.routes.filter((t) => t.hide).length !== route.routes.length
        ) {
          defaultOpenKeys.push({
            path: route.path,
            name: route.name,
          });
          this.loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes: route.routes });
        } else {
          defaultSelectedKeys.push({
            path: route.path,
            name: route.name,
          });
        }
      }
    }
  },

  /**
   * fillKey
   * @param key
   * @param routes
   * @return {{path: *, name: *}}
   */
  fillKey(key, routes) {
    let entry;
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];
      if (item.path === key) {
        entry = {
          name: item.name,
          path: item.path,
        };
        break;
      }

      if (item.routes) {
        entry = this.fillKey(key, item.routes);
        if (entry) break;
      }
    }

    return entry;
  },

  /**
   * isAuthority
   * @param authoritys
   * @param allAuthority
   * @return {boolean}
   */
  isAuthority(authoritys = [], allAuthority = []) {
    let flag = true;
    for (let i = 0; i < authoritys.length; i++) {
      if (allAuthority.indexOf(authoritys[i]) === -1) {
        flag = false;
        break;
      }
    }
    return flag;
  },
  /**
   * isSubMenu
   * @param r
   */
  isSubMenu(r) {
    return r.routes && r.routes.length && r.routes.filter((t) => t.hide).length !== r.routes.length;
  },
  /**
   * getPathBySelectKey
   * @param path
   * @param routes
   * @param selectKey
   */
  getPathBySelectKey({ path, routes, selectKey }) {
    for (let i = 0; i < routes.length; i++) {
      const item = routes[i];

      // eslint-disable-next-line no-continue
      if ('redirect' in item) continue;

      const keys = [];

      // 通过路由中定义的path生成正则表达式
      const reg = pathToRegexp(item.path, keys, {
        sensitive: false, // When true the route will be case sensitive. (default: false)
        strict: false, // When false the trailing slash is optional. (default: false)
        end: false, // When false the path will match at the beginning. (default: true)
        delimiter: '/', // Set the default delimiter for repeat parameters. (default: '/')
      });

      if (reg.test(selectKey)) {
        path.push(item);
      }

      if (item.routes) {
        this.getPathBySelectKey({ path, routes: item.routes, selectKey });
      }
    }
  },
};
