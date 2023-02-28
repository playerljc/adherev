import { TableImplementSearchAndvPaginParamsMemo } from '../../ProSearchTable';

let historyStack = [];

/**
 * clearSearAndPaginParamsByPathname
 * @description 清除查询条件根据pathname
 * @param pathname
 */
function clearSearAndPaginParamsByPathname(pathname) {
  const findIndex = TableImplementSearchAndvPaginParamsMemo.findIndexByPath(pathname);
  if (findIndex !== -1) TableImplementSearchAndvPaginParamsMemo.deleteByIndex(findIndex);
}

function deal(pathname) {
  const findIndex = historyStack.lastIndexOf(pathname);

  // 没找到
  if (findIndex === -1) {
    // 清除查询条件
    clearSearAndPaginParamsByPathname(pathname);
    historyStack.push(pathname);
  }
  // 找到了
  else {
    const pathArr = historyStack.slice(findIndex + 1);

    // 1 2 1
    // 之间只有一个页面的路径
    if (pathArr.length === 1) {
      // pathArr[0] /system/task/list/view
      // pathname   /system/task/list/ 当前

      if (!pathArr[0].startsWith(pathname)) {
        // 清除查询条件
        clearSearAndPaginParamsByPathname(pathname);
      }
    } else {
      // 清除查询条件
      clearSearAndPaginParamsByPathname(pathname);
    }

    // 都需要清空路径
    historyStack = historyStack.slice(0, findIndex);
    historyStack.push(pathname);
  }
}

const popstate = (context) => {
  deal(window.location.pathname);

  context.on(routeListen);
};

let popstateHandler;

function routeListen({ location, action, context }) {
  const { pathname } = location;

  context.remove(routeListen);

  if (popstateHandler) {
    window.removeEventListener('popstate', popstateHandler);
  }

  popstateHandler = popstate.bind(this, context);
  window.addEventListener('popstate', popstateHandler);

  deal(pathname);
}

export default routeListen;
