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
}): void {
  slots.default.forEach((vNode) => {
    if (!vNode.data) {
      vNode.data = {
        staticStyle: {},
      };
    } else if (!('staticStyle' in vNode.data)) {
      vNode.data.staticStyle = {};
    }

    vNode.data.staticStyle[rule] = conditional ? ruleVisibleValue : ruleHideValue;
  });

  if (slots.noMatch) {
    slots.noMatch.forEach((vNode) => {
      if (!vNode.data) {
        vNode.data = {
          staticStyle: {},
        };
      } else if (!('staticStyle' in vNode.data)) {
        vNode.data.staticStyle = {};
      }

      vNode.data.staticStyle[rule] = conditional ? ruleHideValue : ruleVisibleValue;
    });
  }
}
