import { VNode, PropType } from 'vue';
import { IMenuItemProps } from './types';
declare const _default: {
    props: {
        data: {
            type: PropType<IMenuItemProps>;
            default: () => {};
        };
    };
    inject: string[];
    computed: {
        getClass(): string;
    };
    methods: {
        renderIcon(h: any): VNode;
        renderName(h: any): VNode;
        renderMore(h: any): VNode;
        renderSubMenu(h: any): VNode;
        onClick(e: any): false | undefined;
    };
    render(h: any): VNode;
};
export default _default;
