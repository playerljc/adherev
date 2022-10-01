import { VNode } from 'vue';

import Util from '@baifendian/adherev-util';

import ConditionalRender from './conditionalrender';
import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';

const {
  _util: { withInstall, withVue },
} = Util;

const Component = withInstall(ConditionalRender);
withInstall(ConditionalRenderShow);
withInstall(ConditionalRenderVisibility);

Component.isUse = () => true;
Component.use = (Vue) => {
  Vue.use(Component);
  Vue.use(ConditionalRenderShow);
  Vue.use(ConditionalRenderVisibility);

  withVue(Vue, 'ConditionalRender', ConditionalRender);
  withVue(Vue, 'ConditionalRenderShow', ConditionalRenderShow);
  withVue(Vue, 'ConditionalRenderVisibility', ConditionalRenderVisibility);
};
Component.Show = ConditionalRenderShow;
Component.Visibility = ConditionalRenderVisibility;

/**
 * conditionalRender
 * @description - 使用方法的ConditionalRender
 * @param conditional
 * @param match
 * @param noMatch
 */
Component.conditionalRender = function ({
  conditional,
  match,
  noMatch,
}: {
  conditional: boolean;
  match: VNode;
  noMatch: VNode | null;
}): VNode | null {
  return conditional ? match : noMatch || null;
};

/**
 * conditionalArr
 * @description - 含有PermissionConditional的VNode的数组
 * @param arr
 * @return Array
 */
Component.conditionalArr = function (arr: any[]): any[] {
  return arr.filter((t) => {
    if (t.data.props && 'conditional' in t.data.props) {
      if (!t.data.props.conditional) {
        if (t.data.props.noMatch && t.data.props.noMatch?.() !== null) return true;
        return false;
      }
    }

    return true;
  });
};

/**
 * conditionalNotEmptyArr
 * @deprecated 去除null和undefined值
 * @param arr
 */
Component.conditionalNotEmptyArr = function (arr: any[]): any[] {
  return arr.filter((t) => !(t === null || t === undefined));
};

export default Component;
