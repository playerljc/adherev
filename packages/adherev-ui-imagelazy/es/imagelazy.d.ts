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
    watch: {
        'imgArgs.targetSrc': () => void;
    };
    mounted(): void;
    methods: {
        update(): void;
    };
    render(h: any): VNode;
};
export default _default;
