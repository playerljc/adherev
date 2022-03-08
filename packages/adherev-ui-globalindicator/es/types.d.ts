export interface IComponent {
    show(parent: HTMLElement, text: string, zIndex: number): HTMLElement;
    hide(indicatorDom: HTMLElement): any;
    isUse?(): boolean;
    use?(Vue: any): void;
}
