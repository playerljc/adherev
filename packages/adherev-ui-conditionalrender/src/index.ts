import { App, Plugin, VNode } from 'vue';

import Util from '@baifendian/adherev-util';

import ConditionalRender from './conditionalrender';
import ConditionalRenderShow from './show';
import ConditionalRenderVisibility from './visibility';
import ConditionalRenderWrap from './wrap';

const {
  _util: { withVue },
} = Util;

ConditionalRender.Show = ConditionalRenderShow;
ConditionalRender.Visibility = ConditionalRenderVisibility;
ConditionalRender.Wrap = ConditionalRenderWrap;
/**
 * conditionalRender
 * @description - 使用方法的ConditionalRender
 * @param conditional
 * @param match
 * @param noMatch
 */
ConditionalRender.conditionalRender = function ({
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
ConditionalRender.conditionalArr = function (arr: any[]): any[] {
  return arr.filter((t) => {
    if ('props' in t && 'conditional' in t.props) {
      if (!t.props.conditional) {
        return t.props.noMatch && t.props.noMatch?.() !== null;
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
ConditionalRender.conditionalNotEmptyArr = function (arr: any[]): any[] {
  return arr.filter((t) => !(t === null || t === undefined));
};

ConditionalRender.install = (app: App) => {
  app.component(ConditionalRender.name, ConditionalRender);
  app.component(ConditionalRenderShow.name, ConditionalRenderShow);
  app.component(ConditionalRenderVisibility.name, ConditionalRenderVisibility);
  app.component(ConditionalRenderWrap.name, ConditionalRenderWrap);

  withVue(app, 'ConditionalRender', ConditionalRender);
};

export default ConditionalRender as typeof ConditionalRender &
  Plugin & {
    readonly Show: typeof ConditionalRenderShow;
    readonly Visibility: typeof ConditionalRenderVisibility;
    readonly Wrap: typeof ConditionalRenderWrap;
    readonly conditionalRender: typeof ConditionalRender.conditionalRender;
    readonly conditionalArr: typeof ConditionalRender.conditionalArr;
    readonly conditionalNotEmptyArr: typeof ConditionalRender.conditionalNotEmptyArr;
  };
