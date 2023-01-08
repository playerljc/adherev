import Util from '@baifendian/adherev-util';

/**
 * getProps
 * @param attrs
 * @returns {{}}
 */
function getProps(attrs) {
  const props = {};

  for (const p in attrs) props[Util.toCamelCase(p)] = attrs[p];

  return props;
}

/**
 * assignAttrs
 * @param Component
 * @param context
 * @param defaultProps
 */
export function assignAttrs(Component, context, defaultProps) {
  context.data.attrs = {
    ...defaultProps,
    ...getProps(context.data.attrs),
  };

  if (
    !('getPopupContainer' in context.data.attrs) ||
    context.data.attrs.getPopupContainer === undefined
  ) {
    context.data.attrs.getPopupContainer = (el) =>
      context?.injections?.getEl?.() || el?.parentElement || document.body;
  }
}

/**
 * extend
 * @param Component
 * @param SubComponent
 * @returns {*}
 */
export function extend(Component, SubComponent) {
  const ComponentOtherMixins = {};

  Object.keys(Component)
    .filter((key) => /^[A-Z]$/.test(key))
    .forEach((key) => (ComponentOtherMixins[key] = Component[key]));

  return {
    ...ComponentOtherMixins,
    ...SubComponent,
    defaultProps: {},
  };
}
