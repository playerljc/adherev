import { h, inject } from 'vue';

/**
 * assignAttrs
 * @param props
 * @param parentElement
 * @param defaultProps
 */
export function assignAttrs(props, defaultProps, parentElement) {
  const res = {
    ...defaultProps,
    ...props,
  };

  if (!('getPopupContainer' in res) || res.getPopupContainer === undefined) {
    res.getPopupContainer = (el) => {
      return parentElement || el?.parentElement || document.body;
    };
  }

  // if (!('getCalendarContainer' in res) || res.getCalendarContainer === undefined) {
  //   res.getCalendarContainer = (el) => {
  //     return parentElement || el?.parentElement || document.body;
  //   };
  // }

  return res;
}

/**
 * extend
 * @description 实现高阶函数
 * @param Component - Vue组件配置对象
 * @param optionsOverwrite - Vue组件的options
 * @param renderOptions - props,attrs和slots
 */
// export function extend(
//   // 包装的组件
//   Component: any,
//   optionsOverwrite?: any,
//   renderOptions?: {
//     props?: (props: any, getEl: any) => any;
//     attrs?: (attrs: any) => any;
//     slots?: (slots: any) => any;
//   },
// ) {
//   return defineComponent(
//     merge(
//       {
//         ...(Component || {}),
//       },
//       {
//         ...(optionsOverwrite || {}),
//         setup(props, { slots, attrs, expose }) {
//           const comRef = ref();
//
//           if (Component.expose) {
//             const exposeObj = {};
//             Component.expose.forEach((methodName) => {
//               exposeObj[methodName] = (params) => comRef.value?.[methodName]?.(params);
//             });
//             expose(exposeObj);
//           }
//
//           const getEl = inject<(() => HTMLElement | null) | null>('getEl');
//
//           console.log('attrs', renderOptions?.attrs?.(attrs) || attrs || {});
//           console.log('props', renderOptions?.props?.(props, getEl));
//
//           const mergeProps = {
//             ...(renderOptions?.attrs?.(attrs) || attrs || {}),
//             ...(renderOptions?.props?.(props, getEl) || props || {}),
//             ref: comRef,
//           };
//
//           console.log('mergeProps', mergeProps);
//
//           return () =>
//             h(Component, mergeProps, {
//               ...(renderOptions?.slots?.(slots) || slots || {}),
//             });
//         },
//       },
//     ),
//   );
// }

export function HOC(
  // 包装的组件
  Component: any,
  renderOptions?: {
    props?: (props: any, getEl?: () => HTMLElement | null) => any;
    attrs?: (attrs: any) => any;
    slots?: (slots: any) => any;
  },
) {
  const ComponentOtherMixins = {};

  // 将Component中大写字母开头的属性赋值到function中
  Object.keys(Component)
    .filter((key) => /^[A-Z]/.test(key))
    .forEach((key) => (ComponentOtherMixins[key] = Component[key]));

  return Object.assign(function (props, context) {
    return h(
      Component,
      {
        ...props,
        ...context.attrs,
        ...(renderOptions?.props?.(props, inject('getEl')) || {}),
        ...(renderOptions?.attrs?.(context.attrs) || {}),
      },
      renderOptions?.slots?.(context.slots) || context.slots,
    );
  }, ComponentOtherMixins);
}
