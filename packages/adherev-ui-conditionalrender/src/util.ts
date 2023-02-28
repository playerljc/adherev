import { VNode } from 'vue';

export function deal({
  conditional,
  rule,
  ruleVisibleValue,
  ruleHideValue,
  slots,
}: {
  conditional: boolean;
  rule: string;
  ruleVisibleValue: string;
  ruleHideValue: string;
  slots: any;
}): {
  defaultVNodes: VNode[] | null;
  noMatchVNodes: VNode[] | null;
} {
  const defaultVNodes = slots?.default?.().map((vNode: VNode) => {
    if (!vNode.props) {
      vNode.props = {
        style: {},
      };
    } else if (!('style' in vNode.props)) {
      vNode.props.style = {};
    }

    vNode.props.style[rule] = conditional ? ruleVisibleValue : ruleHideValue;

    return vNode;
  });

  let noMatchVNodes = null;

  if (slots.noMatch) {
    noMatchVNodes = slots.noMatch().map((vNode: VNode) => {
      if (!vNode.props) {
        vNode.props = {
          style: {},
        };
      } else if (!('style' in vNode.props)) {
        vNode.props.style = {};
      }

      vNode.props.style[rule] = conditional ? ruleHideValue : ruleVisibleValue;

      return vNode;
    });
  }

  return {
    defaultVNodes,
    noMatchVNodes,
  };
}
