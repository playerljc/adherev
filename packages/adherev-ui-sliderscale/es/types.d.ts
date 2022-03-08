export interface IProps {
    min: number;
    max: number;
    step: number;
    value: number;
    interval: number;
}
export interface IData {
    $preValue: number | null;
}
export interface IMethods {
    touchEvent(e: TouchEvent): void;
    renderScale(): void;
    onMousemove(e: MouseEvent): void;
    onTouchmove(e: MouseEvent): void;
}
export interface ISelf extends IProps, IData, IMethods {
    $refs: any;
    $data: any;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
}
