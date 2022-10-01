import { ISwipeOutProps } from './types';
declare const _default: {
    name: string;
    props: {
        className: {
            type: StringConstructor;
            default: string;
        };
        beforeClassName: {
            type: StringConstructor;
            default: string;
        };
        beforeStyle: {
            type: StringConstructor;
            default: string;
        };
        afterClassName: {
            type: StringConstructor;
            default: string;
        };
        afterStyle: {
            type: StringConstructor;
            default: string;
        };
        contentClassName: {
            type: StringConstructor;
            default: string;
        };
        contentStyle: {
            type: StringConstructor;
            default: string;
        };
        beforeShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        afterShow: {
            type: BooleanConstructor;
            default: boolean;
        };
        direction: {
            type: StringConstructor;
            default: string;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
    };
    data(): {
        $swiper: null;
        $map: Map<string, number>;
    };
    watch: {
        direction(direction: any, oldDirection: any): void;
        beforeShow(val: any, oldVal: any): void;
        afterShow(val: any, oldVal: any): void;
    };
    computed: {
        getContainerClassName(): string;
        getWrapperClassName(): string;
        getBeforeClassName(): string;
        getContentClassName(): string;
        getAfterClassName(): string;
    };
    methods: {
        createSwiper(): void;
        slide(props: ISwipeOutProps): void;
    };
    mounted(): void;
    render(h: any): any;
};
export default _default;
