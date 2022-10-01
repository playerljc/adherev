import Vue from 'vue';
import { IAlertArgv, IConfig, IConfirmArgv, IPromptConfig } from './types';
export declare const selectorPrefix = "adherev-ui-messagedialog";
declare const MessageDialogFactory: {
    setConfig: (gc: IConfig) => void;
    /**
     * Confirm
     * @param title {String | Function}
     * @param text {String}
     * @param width {number}
     * @param zIndex {number}
     * @param icon {String | Function}
     * @param {Function} - onSuccess
     */
    Confirm({ title, text, width, zIndex, local, icon, onSuccess, }: IConfirmArgv): void;
    /**
     * Prompt
     * @param title
     * @param config
     * @param layout
     * @param width
     * @param zIndex
     * @param local
     * @param onSuccess
     * @constructor
     */
    Prompt({ title, config, width, zIndex, local, onSuccess }: IPromptConfig): void;
    /**
     * InputPrompt
     * @param config
     * @param params
     * @constructor
     */
    InputPrompt({ config, ...params }: IPromptConfig): void;
    /**
     * TextAreaPrompt
     * @param config
     * @param params
     * @constructor
     */
    TextAreaPrompt({ config, ...params }: IPromptConfig): void;
    /**
     * PassWordPrompt
     * @param config
     * @param params
     * @constructor
     */
    PassWordPrompt({ config, ...params }: IPromptConfig): void;
    /**
     * NumberPrompt
     * @param config
     * @param params
     * @constructor
     */
    NumberPrompt({ config, ...params }: IPromptConfig): void;
    /**
     * Alert
     * @param title - {String | Function}
     * @param text - {String | Function}
     * @param width - {number}
     * @param local
     * @param zIndex
     * @param icon - {Function}
     */
    Alert({ title, text, width, zIndex, local, icon }: IAlertArgv): void;
    /**
     *  Modal
     *  @param {Object} - config
     *  @param {String | Function} - title
     *  @param {Boolean} - maskClosable 是否点击遮罩关闭 默认是false
     *  @param {Number} - zIndex 层级大小
     *  @param {String} - class 容器类名
     *  @param {String} - wrapclass 包裹容器类名
     *  @param {Boolean} - centered 垂直居中展示 Modal 默认false
     *  @param {String | Number} - width 宽度
     *  @param {Boolean} - closable 是否显示关闭 默认true
     *  @param {Function} - footer
     *  @param {Function} - children
     *  @param defaultCloneBtn
     */
    Modal({ config, children, defaultCloneBtn, local }: {
        config?: {} | undefined;
        children?: FunctionConstructor | undefined;
        defaultCloneBtn?: boolean | undefined;
        local?: string | undefined;
    }): {
        el: HTMLDivElement;
        vm: import("vue/types/vue").CombinedVueInstance<Vue, object, object, object, Record<never, any>>;
        close: () => void;
    };
    /**
     * close
     * @param el
     */
    close({ _vm, el }: {
        _vm: any;
        el: HTMLElement;
    }): void;
};
export default MessageDialogFactory;
