import { VNode } from 'vue';
export declare function deal({ conditional, rule, ruleVisibleValue, ruleHideValue, slots, }: {
    conditional: boolean;
    rule: string;
    ruleVisibleValue: string;
    ruleHideValue: string;
    slots: any;
}): {
    defaultVNodes: VNode[] | null;
    noMatchVNodes: VNode[] | null;
};
