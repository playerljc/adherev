import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { PropType, VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        imgArgs: {
            type: PropType<{
                originSrc: string;
                errorSrc: string;
                targetSrc: string;
            }>;
            default: () => {
                originSrc: string;
                errorSrc: string;
                targetSrc: string;
            };
        };
    };
    render(h: any): VNode;
};
export default _default;
