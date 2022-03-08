import { defineComponent } from 'vue';
import { array } from 'vue-types';

// 所有的权限
let permissions: any[] = [];

/**
 * setPermission - 设置拥有的所有权限
 * @param {Array<String>} permission
 */
export const setPermission = (permission: any[]) => {
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
export const checkPermission = (
  allPermission = getPermission(),
  currentPermissions: any[] | undefined,
) => {
  allPermission = allPermission || getPermission();

  // 所有的权限
  if (!allPermission || !Array.isArray(allPermission) || !currentPermissions) {
    return true;
  }

  if (Array.isArray(currentPermissions)) {
    return currentPermissions.every(curPermissions => allPermission.indexOf(curPermissions) !== -1);
  }

  return allPermission.indexOf(currentPermissions) !== -1;
};

export const Permission = defineComponent({
  name: 'adv-permission',
  props: {
    allPermission: array<string>().def([]),
    permissions: array<string | string[]>(),
  },
  setup(props, { slots }) {
    return () =>
      checkPermission(props.allPermission, props.permissions)
        ? slots.default
          ? slots.default()
          : null
        : slots.noMatch
        ? slots?.noMatch()
        : null;
  },
});
