import { CreateElement } from 'vue';
export declare const selectorPrefix = "adherev-ui-messagedialog";
declare const _default: {
    props: {
        config: {
            type: ObjectConstructor;
        };
        closeBtn: {
            type: BooleanConstructor;
            required: boolean;
            default: boolean;
        };
    };
    methods: {
        /**
         * renderCloseBtn
         * @param h
         */
        renderCloseBtn(h: any): any;
        /**
         * renderDefault
         * @param h
         */
        renderDefault(h: CreateElement): any;
        /**
         * renderTitle
         * @param h
         */
        renderTitle(h: any): any;
        /**
         * renderFooter
         * @param h
         */
        renderFooter(h: any): null;
    };
    /**
     * render
     * @param h
     */
    render(h: any): any;
};
export default _default;
