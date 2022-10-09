export interface GlobalIndicatorType {
    isUse?: () => boolean;
    use?: (Vue: any) => void;
    show?: (parent: HTMLElement, text: string, zIndex: number) => HTMLElement;
    hide?: (indicatorDom: HTMLElement) => void;
}
declare const GlobalIndicator: GlobalIndicatorType;
export default GlobalIndicator;
