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
          route.children &&
          route.children.length &&
          route.children.filter((t) => t.hide).length !== route.children.length
        ) {
          defaultOpenKeys.push({
            path: route.path,
            name: route.name,
          });
          this.loopRoutes({ defaultOpenKeys, defaultSelectedKeys, routes: route.children });
        } else {
          if (pathname === route.path) {
            // 如果是hide，找到第一个不是hide的route
            if ('hide' in route && route.hide) {
              const firstIncludeRoute = routes
                .filter((t) => !('redirect' in t))
                .find((r) => (!('hide' in r) || !r.hide) && pathname.indexOf(r.path) !== -1);

              if (firstIncludeRoute) {
                defaultSelectedKeys.push({
                  path: firstIncludeRoute.path,
                  name: firstIncludeRoute.name,
                });
              }
            } else {
              defaultSelectedKeys.push({
                path: route.path,
                name: route.name,
              });
            }
          }
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

      if (item.children) {
        entry = this.fillKey(key, item.children);
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
  isAuthority(authoritys, allAuthority) {
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
    return (
      r.children &&
      r.children.length &&
      r.children.filter((t) => t.hide).length !== r.children.length
    );
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

      if (item.children) {
        this.getPathBySelectKey({ path, routes: item.children, selectKey });
      }
    }
  },
};
