export interface IProps {
    className?: string;
    maxSize: string | number;
    minSize: string | number;
}
export interface IData {
    $fixedEl: HTMLElement | null;
    $autoEl: HTMLElement | null;
    $containerEl: HTMLElement | null;
    $isEnter: boolean;
    $isOut: boolean;
    $isDown: boolean;
    $isMove: boolean;
    $startVal: number;
    $changeVal: number;
    $changeBaseVal: number;
    $fixedValue: number;
    $maxDimension: number;
    $situation: Map<string, boolean>;
}
export interface IMethods {
    checked(): boolean;
    initEvents(): void;
    getFixedEl(): HTMLElement;
    getAutoEl(): HTMLElement;
    getFixedElPosition(): 'prev' | 'next';
    getMaxDimension(): number;
    getResizeClass(): 'rowResize' | 'colResize';
    getProps(): void;
    getMaxSize(): number;
    getMinSize(): number;
    onMouseenter(e: MouseEvent): void;
    onMousedown(e: MouseEvent): void;
    onMouseup(e: MouseEvent): void;
    onMouseleave(e: MouseEvent): void;
    onMousemove(e: MouseEvent): void;
    onMouseout(e: MouseEvent): void;
    getDirection(): string;
}
export interface ISelf extends IProps, IData, IMethods {
    $refs: any;
    $data: any;
    $slots: any;
    $emit(type: string, params?: any): void;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
}
