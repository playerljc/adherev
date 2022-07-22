/**
 * ISwipeOutProps
 * @interface ISwipeOutProps
 */
export interface ISwipeOutProps {
    className?: string;
    beforeClassName?: string;
    beforeStyle?: string;
    afterClassName?: string;
    afterStyle?: string;
    contentClassName?: string;
    contentStyle?: string;
    beforeShow: boolean;
    afterShow: boolean;
    direction: 'horizontal' | 'vertical';
    duration: number;
}
