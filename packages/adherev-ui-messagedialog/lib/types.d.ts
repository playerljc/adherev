/**
 * IAlertArgv
 * @interface IAlertArgv
 */
export interface IAlertArgv {
    title?: string | null | Function;
    text?: string | null | Function;
    width?: number;
    zIndex?: number;
    local?: string;
    icon?: Function | null;
}
/**
 * IConfirmArgv
 * @interface IConfirmArgv
 */
export interface IConfirmArgv extends IAlertArgv {
    onSuccess?: Function;
}
/**
 * IModalDialogProps
 * @interface IModalDialogProps
 */
export interface IModalDialogProps {
    cloneBtn: boolean;
    parent: HTMLElement | null;
    config: Object;
}
/**
 * IPromptConfig
 */
export interface IPromptConfig {
    title?: string | null | Function;
    width?: number;
    zIndex?: number;
    local?: string;
    onSuccess?: Function;
    config: {
        rule: any;
        option: any;
    };
}
export interface IConfig {
    messages: object;
    beforeMount(app: any): void;
}
export interface IModalArg {
    config?: any;
    children?: any;
    defaultCloneBtn?: boolean;
    local?: string | null | undefined;
}
export interface IMessageDialogFactory extends IComponent {
    Confirm(config: IConfirmArgv): void;
    Prompt(config: IPromptConfig): void;
    InputPrompt(config: IPromptConfig): void;
    TextAreaPrompt(config: IPromptConfig): void;
    PassWordPrompt(config: IPromptConfig): void;
    NumberPrompt(config: IPromptConfig): void;
    Alert(config: IAlertArgv): void;
    Modal(config: IModalArg): void;
    close(el: HTMLElement): void;
    setConfig(gc: IConfig): void;
}
export interface IModalProps {
    config: any;
    closeBtn: boolean;
}
export interface IModalMethod {
    onEmitterClose(): void;
    renderCloseBtn(): void;
    renderDefault(): void;
    renderTitle(): void;
    renderFooter(): void;
}
export interface IComponent {
    isUse?(): boolean;
    use?(Vue: any): void;
}
