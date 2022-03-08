export interface IFlexLayoutProps {
    direction: 'vertical' | 'horizontal';
}
export interface IFlexLayoutMethods {
    getDirection(): string;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
    Fixed: any;
    Auto: any;
    selectorPrefix: string;
}
