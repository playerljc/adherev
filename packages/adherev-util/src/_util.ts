import { ComponentOptions, defineComponent, h, ref } from 'vue';

import { DefineComponent } from '@vue/runtime-core';

/**
 * ExtendFunction
 */
interface ExtendFunction<P> extends ComponentOptions<any> {
  className?: string | string[];
}

/**
 * withInstall
 * @param comp
 */
export const withInstall = (comp: any) => {
  comp.install = function (app: any) {
    app.component(comp.displayName || comp.name, comp);
  };

  return comp;
};

/**
 * withVue
 * @description - 将属性p混入到Vue实例中，在Vue实例的表达式中可以使用this.$adv[p]来进行访问
 * @param app
 * @param p
 * @param val
 */
export const withVue = (app: any, p: string, val: any) => {
  app.config.globalProperties.$adv = app.config.globalProperties.$adv || {};
  app.config.globalProperties.$adv[p] = val;
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
 * HOC
 * @param Component
 * @param optionsOverwrite
 * @param renderOptions
 */
export function HOC(
  Component: DefineComponent,
  optionsOverwrite: any,
  renderOptions: {
    props: (props: any) => any;
    attrs: (attrs: any) => any;
    slots: (slots: any) => any;
  },
) {
  return defineComponent({
    props: { ...(Component.props || {}), ...(optionsOverwrite.props || {}) },
    emits: [...(Component.emits ? (Component.emits as []) : [])],
    slots: [...(Component.slots ? (Component.slots as []) : [])],
    expose: [...(Component.expose ? (Component.slots as []) : [])],
    setup(props, { slots, attrs, expose }) {
      const comRef = ref();

      if (Component.expose) {
        const exposeObj = {};
        Component.expose.forEach((methodName) => {
          exposeObj[methodName] = (params) => comRef.value?.[methodName]?.(params);
        });
        expose(exposeObj);
      }

      return () =>
        h(
          Component,
          {
            ...(renderOptions?.props?.(props) || props || {}),
            ...(renderOptions?.attrs?.(attrs) || attrs || {}),
            ref: comRef,
          },
          {
            ...(renderOptions?.slots?.(slots) || slots || {}),
          },
        );
    },
  });
}
