export interface Component {
    isUse(): boolean;
    use(Vue: any): void;
}
