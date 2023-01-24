import classNames from 'classnames';
import merge from 'lodash.merge';
import mergeWidth from 'lodash.mergewith';
import type { CreateElement } from 'vue';
import { ComponentOptions } from 'vue/types/options';
import { ComponentOptionsWithProps } from 'vue/types/v3-component-options';

import WatchMemoized from '@baifendian/adherev-util-watchmemoized';

/**
 * ExtendFunction
 */
interface ExtendFunction<P> extends ComponentOptions<any> {
  className?: string | string[];
}

const { memoized } = WatchMemoized;

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
    // @ts-ignore
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
      // @ts-ignore
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

/**
 * filterEmpty
 * @param children
 */
export function filterEmpty(children = []) {
  return children.filter((c) => !isEmptyElement(c));
}

/**
 * isEmptyElement
 * @param c
 */
export function isEmptyElement(c) {
  return !(c.tag || (c.text && c.text.trim() !== ''));
}

/**
 * camelize
 * @param str
 */
export const camelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
};

/**
 * parseStyleText
 * @param cssText
 * @param camel
 */
export const parseStyleText = (cssText = '', camel) => {
  const res = {};
  const listDelimiter = /;(?![^(]*\))/g;
  const propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      const tmp = item.split(propertyDelimiter);
      if (tmp.length > 1) {
        const k = camel ? camelize(tmp[0].trim()) : tmp[0].trim();
        res[k] = tmp[1].trim();
      }
    }
  });
  return res;
};

/**
 * isVNode
 * @description 是否是VNode
 * @param element
 * @return boolean
 */
export const isVNode = (element) => {
  return (
    element &&
    typeof element === 'object' &&
    'componentOptions' in element &&
    'context' in element &&
    element.tag !== undefined
  ); // remove text node
};

/**
 * cloneVNode
 * @description cloneVNode
 * @param vnode
 * @param deep
 */
export function cloneVNode(vnode, deep) {
  const componentOptions = vnode.componentOptions;
  const data = vnode.data;

  let listeners = {};
  if (componentOptions && componentOptions.listeners) {
    listeners = { ...componentOptions.listeners };
  }

  let on = {};
  if (data && data.on) {
    on = { ...data.on };
  }

  const cloned = new vnode.constructor(
    vnode.tag,
    data ? { ...data, on } : data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    componentOptions ? { ...componentOptions, listeners } : componentOptions,
    vnode.asyncFactory,
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  if (deep) {
    if (vnode.children) {
      cloned.children = cloneVNodes(vnode.children, true);
    }
    if (componentOptions && componentOptions.children) {
      componentOptions.children = cloneVNodes(componentOptions.children, true);
    }
  }
  return cloned;
}

/**
 * cloneVNodes
 * @description cloneVNodes
 * @param vnodes
 * @param deep
 */
export function cloneVNodes(vnodes, deep) {
  const len = vnodes.length;
  const res = new Array(len);
  for (let i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res;
}

/**
 * cloneElement
 * @description cloneElement
 * @param n
 * @param nodeProps
 * @param deep
 */
export function cloneElement(n, nodeProps = {}, deep) {
  let ele = n;
  if (Array.isArray(n)) {
    // @ts-ignore
    ele = filterEmpty(n)[0];
  }
  if (!ele) {
    return null;
  }
  const node = cloneVNode(ele, deep);
  // // 函数式组件不支持clone  https://github.com/vueComponent/ant-design-vue/pull/1947
  // warning(
  //   !(node.fnOptions && node.fnOptions.functional),
  //   `can not use cloneElement for functional component (${node.fnOptions && node.fnOptions.name})`,
  // );
  const { props = {}, key, on = {}, nativeOn = {}, children, directives = [] } = nodeProps as any;
  const data = node.data || {};
  let cls = {};
  let style = {};
  const {
    attrs = {},
    ref,
    domProps = {},
    style: tempStyle = {},
    class: tempCls = {},
    scopedSlots = {},
  } = nodeProps as any;

  if (typeof data.style === 'string') {
    // @ts-ignore
    style = parseStyleText(data.style);
  } else {
    style = { ...data.style, ...style };
  }
  if (typeof tempStyle === 'string') {
    // @ts-ignore
    style = { ...style, ...parseStyleText(style) };
  } else {
    style = { ...style, ...tempStyle };
  }

  if (typeof data.class === 'string' && data.class.trim() !== '') {
    data.class.split(' ').forEach((c) => {
      cls[c.trim()] = true;
    });
  } else if (Array.isArray(data.class)) {
    classNames(data.class)
      .split(' ')
      .forEach((c) => {
        cls[c.trim()] = true;
      });
  } else {
    cls = { ...data.class, ...cls };
  }
  if (typeof tempCls === 'string' && tempCls.trim() !== '') {
    tempCls.split(' ').forEach((c) => {
      cls[c.trim()] = true;
    });
  } else {
    cls = { ...cls, ...tempCls };
  }
  node.data = Object.assign({}, data, {
    style,
    attrs: { ...data.attrs, ...attrs },
    class: cls,
    domProps: { ...data.domProps, ...domProps },
    scopedSlots: { ...data.scopedSlots, ...scopedSlots },
    directives: [...(data.directives || []), ...directives],
  });

  if (node.componentOptions) {
    node.componentOptions.propsData = node.componentOptions.propsData || {};
    node.componentOptions.listeners = node.componentOptions.listeners || {};
    node.componentOptions.propsData = { ...node.componentOptions.propsData, ...props };
    node.componentOptions.listeners = { ...node.componentOptions.listeners, ...on };
    if (children) {
      node.componentOptions.children = children;
    }
  } else {
    if (children) {
      node.children = children;
    }
    node.data.on = { ...(node.data.on || {}), ...on };
  }
  node.data.on = { ...(node.data.on || {}), ...nativeOn };

  if (key !== undefined) {
    node.key = key;
    node.data.key = key;
  }
  if (typeof ref === 'string') {
    node.data.ref = ref;
  }
  return node;
}

/**
 * forwardRef
 * @param comp
 * @param ref
 */
export function forwardRef(
  comp: ComponentOptionsWithProps,
  ref: string,
): ComponentOptionsWithProps {
  return {
    methods: Object.keys(comp?.methods || {}).reduce((methods, methodName) => {
      methods[methodName] = function (this: Vue, ...params) {
        return this?.$refs?.[ref]?.[methodName]?.(...params);
      }

      return methods;
    }, {}),
  };
}
