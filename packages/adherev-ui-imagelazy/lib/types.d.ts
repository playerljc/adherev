export interface IImgArgs {
    originSrc: string;
    errorSrc: string;
    targetSrc: string;
}
export interface IComponent {
    isUse(): boolean;
    use(Vue: any): void;
}
