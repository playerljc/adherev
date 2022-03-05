import { VNode } from 'vue';
declare const _default: {
    name: string;
    props: {
        classNameWrapper: {
            type: StringConstructor;
            default: string;
        };
        wrapperStyle: {
            type: StringConstructor;
            default: string;
        };
        speed: {
            type: NumberConstructor;
            default: number;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        direction: {
            type: StringConstructor;
            default: string;
            validator(val: any): boolean;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        stopOnLastSlide: {
            type: BooleanConstructor;
            default: boolean;
        };
        listeners: {
            type: ObjectConstructor;
            default: () => void;
        };
    };
    data(): {
        $swiper: null;
    };
    computed: {
        getClass(): string;
        getWrapperClass(): string;
        getWrapperStyle(): any;
    };
    mounted(): void;
    updated(): void;
    methods: {
        initial(): void;
        getDirection(direction: any): "horizontal" | "vertical";
        /**
         * start
         */
        start(): void;
        /**
         * stop
         */
        stop(): void;
        /**
         * isRunning
         * @return {boolean}
         */
        isRunning(): any;
    };
    render(h: any): VNode;
};
export default _default;
