import { ComponentOptions } from 'vue/types/options';

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

  console.log('methodKeys', methodKeys);
  console.log('classNames', classNames);

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

  console.log('');

  return vueOptions;
};

/**
 * Fragment
 */
export const Fragment = {
  render(h) {
    // @ts-ignore
    return this?.$slots?.default;
  },
};
