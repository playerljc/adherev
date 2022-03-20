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
  getOptions(): any;
}
