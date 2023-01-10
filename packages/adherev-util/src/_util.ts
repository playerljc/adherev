import merge from 'lodash.merge';
import mergeWidth from 'lodash.mergewith';
import type { CreateElement } from 'vue';
import { ComponentOptions } from 'vue/types/options';

import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

const { memoized } = WatchMemoized;

/**
 * ExtendFunction
 */
interface ExtendFunction<P> extends ComponentOptions<any> {
  className?: string | string[];
}

/**
 * withInstall
 * @description Vue组件的插件方法
 * @param comp
 * @return comp
 */
export const withInstall = (comp) => {
  comp.install = function (Vue) {
    Vue.component(comp.displayName || comp.name, comp);
  };

  return comp;
};

/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param Vue
 * @param p
 * @param val
 */
export const withVue = (Vue, p: string, val: any) => {
  Vue.prototype.$adv = Vue.prototype.$adv || {};
  Vue.prototype.$adv[p] = val;
};

/**
 * extend
 * @description - 实现Vue的继承使得可以实现调用父类的方法
 * 例如 类名A有一个renderInner方法，则父类的方法是$renderInnerA
 * @param options
 * @return Omit<ExtendFunction<any>, 'className'>
 */
export const extend = (options: ExtendFunction<any>): Omit<ExtendFunction<any>, 'className'> => {
  const { className, ...vueOptions } = options;

  if (!vueOptions) return {};

  const { methods } = vueOptions;

  if (!methods || !className) return vueOptions;

  const methodKeys = Object.keys(methods).filter((methodKey) =>
    ['$', '_'].every((prefix) => !methodKey.startsWith(prefix)),
  );

  const classNames = !Array.isArray(className) ? [className] : className;

  for (let i = 0; i < methodKeys.length; i++) {
    const methodKey = methodKeys[i];

    for (let j = 0; j < classNames.length; j++) {
      const superMethodKey = `$${methodKey}${classNames[j]}`;

      vueOptions.methods![superMethodKey] = vueOptions.methods![methodKey];

      vueOptions.methods![methodKey] = function (...params) {
        return this[superMethodKey].apply(this, params || []);
      };
    }
  }

  return vueOptions;
};

/**
 * Fragment
 */
export const Fragment = {
  render(h) {
    return this?.$slots?.default;
  },
};

/**
 * HOCFunctional
 * @description 函数组件实现HOC
 * @param options
 * @param data
 * @param name
 * @constructor
 */
export const HOCFunctional = (options: object, data: Function, name: string) => {
  return {
    functional: true,
    name,
    render(h, context) {
      return h(options, merge(data ? data(h, context) : {}, context.data), context.children);
    },
  };
};

/**
 * HOC
 * @description 非函数组件实现HOC
 * @description HOC是对已有组件的一个扩展，扩展的原则就是render函数中还是用已有组件进行渲染，只是对已有组件的属性和传值进行了扩展而已
 * @param component - 组件配置
 * @param options - 重写的配置项
 * @param dataOptions - 数据对象
 * @param children
 * @constructor
 */
export const HOC = (
  component: {
    [props: string]: any;
  },
  options: Function | object | null,
  dataOptions: {
    renderWith: (h: CreateElement, baseRenderOptions?: any) => any;
    options?: { deep: boolean };
  },
  children?: Function,
) => {
  const methods = {};

  for (const methodName in component.methods || {}) {
    methods[methodName] = function (params) {
      return this.$refs.wrapRef[methodName](params);
    };
  }

  const baseOptions = {
    props: component.props,
    methods,
  };

  const Options =
    options instanceof Function ? options(baseOptions) : merge(baseOptions, options || {});

  return {
    render(h) {
      const slots = children
        ? children.call(this, h)
        : Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), []);

      const baseDataOptions = {
        props: this.$props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: { ...(this.$scopedSlots || {}) },
      };

      const dataOptionsFun =
        ('options' in (dataOptions || {}) && (dataOptions || {}).options?.deep) ||
        !('options' in (dataOptions || {}))
          ? mergeWidth
          : Object.assign;

      const argv = [
        baseDataOptions,
        dataOptions?.renderWith?.call?.(this, h, { ...baseDataOptions }),
      ];

      if (dataOptionsFun === mergeWidth) {
        argv.push((objValue, srcValue) => {
          if (Array.isArray(objValue)) return srcValue;
        });
      }

      const DataOptions = dataOptionsFun.apply(window, argv);

      // console.log(
      //   'HOC',
      //   component.name,
      //   baseDataOptions,
      //   dataOptions?.renderWith?.call?.(this, h, { ...baseDataOptions }),
      // )

      return h(
        component,
        {
          ...DataOptions,
          ref: 'wrapRef',
        },
        slots,
      );
    },
    ...Options,
  };
};

/**
 * getComponentPropsOption
 * @description 获取组件的Props定义
 * @param Component
 * @returns {{}}
 */
export const getComponentPropsOption = memoized.createMemoFun((Component) => ({
  ...(Component.mixins || []).reduce(
    (props, com) => ({
      ...(com.props || {}),
      ...props,
    }),
    Component.props,
  ),
}));

export const isVNode = (element) => {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  ); // remove text node
};
