import { VNode } from 'vue';
import ConditionalRender from './conditionalrender';
import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';
import ConditionalRenderWrap from './wrap';
import Util from '@baifendian/adherev-util';

import { IComponent } from './types';

const {
  _util: { withInstall, withVue },
} = Util;

const Component: IComponent = withInstall(ConditionalRender);

withInstall(ConditionalRenderShow);
withInstall(ConditionalRenderVisibility);
withInstall(ConditionalRenderWrap);

Component.isUse = () => true;
Component.use = (Vue: any) => {
  Vue.use(Component);
  Vue.use(ConditionalRenderShow);
  Vue.use(ConditionalRenderVisibility);
  Vue.use(ConditionalRenderWrap);

  withVue(Vue, 'ConditionalRender', ConditionalRender);
  withVue(Vue, 'ConditionalRenderShow', ConditionalRenderShow);
  withVue(Vue, 'ConditionalRenderVisibility', ConditionalRenderVisibility);
  withVue(Vue, 'ConditionalRenderWrap', ConditionalRenderWrap);
};
Component.Show = ConditionalRenderShow;
Component.Visibility = ConditionalRenderVisibility;
Component.Wrap = ConditionalRenderWrap;

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
 * @description - 含有PermissionConditional的React.Element的数组
 * @param arr
 * @return Array
 */
Component.conditionalArr = function (arr: any[]): any[] {
  return arr.filter((t) => {
    if ('props' in t && 'conditional' in t.props) {
      if (!t.props.conditional) {
        if (t.props.noMatch && t.props.noMatch?.() !== null) return true;
        return false;
      }
    }

    return true;
  });
};

export default Component;
