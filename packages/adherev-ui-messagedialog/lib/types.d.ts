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
    closeBtn: boolean;
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
export interface IMessageDialogFactory {
    setConfig: (gc: any) => void;
    Confirm: (params: IConfirmArgv) => void;
    Prompt: (params: IPromptConfig) => void;
    InputPrompt: (params: IPromptConfig) => void;
    TextAreaPrompt: (params: IPromptConfig) => void;
    PassWordPrompt: (params: IPromptConfig) => void;
    NumberPrompt: (params: IPromptConfig) => void;
    Alert: (params: IAlertArgv) => void;
    Modal: (params: {
        config: any;
        children: Function;
        defaultCloseBtn: boolean;
        local: string;
    }) => void;
    close: (params: {
        _vm: any;
        el: HTMLElement;
    }) => void;
    isUse?: () => boolean;
    use?: (Vue: any) => void;
}
