// 所有的权限
let permissions = [];

/**
 * setPermission - 设置拥有的所有权限
 * @param {Array<String>} permission
 */
export const setPermission = (permission) => {
  permissions = permission;
};

/**
 * getPermission - 获取拥有的所有权限
 * @return
 */
export const getPermission = () => JSON.parse(JSON.stringify(permissions));

/**
 * checkPermission - 判断是否有权限方法
 * @param {Array<String>} allPermission
 * @param {String | Array<String>} currentPermissions 当前组件或者页面对应得权限key
 * @return boolean
 */
export const checkPermission = (allPermission = getPermission(), currentPermissions) => {
  allPermission = allPermission || getPermission();

  // 所有的权限
  if (!allPermission || !Array.isArray(allPermission) || !currentPermissions) {
    return true;
  }

  if (Array.isArray(currentPermissions)) {
    return currentPermissions.every(
      (curPermissions) => allPermission.indexOf(curPermissions) !== -1,
    );
  }

  return allPermission.indexOf(currentPermissions) !== -1;
};

export const Permission = {
  name: 'adv-permission',
  props: {
    allPermission: {
      type: Array,
      require: true,
      default: [],
    },
    permissions: {
      type: [String, Number],
      require: true,
    },
  },
  render(h) {
    // @ts-ignore
    const { allPermission = getPermission(), permissions, $slots } = this;

    return checkPermission(allPermission, permissions)
      ? $slots.default
      : $slots.noMatch
      ? $slots.noMatch
      : null;
  },
};
