import { IConfig, IShowConfig, IShowStandardConfig } from './types';
/**
 * Notification
 * @class Notification
 * @classdesc Notification
 */
declare class Notification {
    private readonly config;
    private container;
    private innerContainer;
    private notificationContainer;
    private notifications;
    private key;
    constructor(container: any, config: IConfig);
    /**
     * createInnerContainer
     * @private
     */
    private createInnerContainer;
    /**
     * init
     * @private
     */
    private init;
    /**
     * initEvents
     * @private
     */
    private initEvents;
    /**
     * closeNotification - 点击删除通知
     * closeNotification
     * @param {string} id
     * @access private
     */
    private closeNotification;
    /**
     * buildCustom
     * @param config
     * @return Promise<String>
     * @private
     */
    private buildCustom;
    /**
     * buildStandard
     * @param config
     * @return Promise<string>
     * @private
     */
    private buildStandard;
    /**
     * build
     * @param id
     * @param n
     * @return string
     * @private
     */
    private build;
    /**
     * trigger
     * @param action
     * @param params
     * @private
     */
    private trigger;
    /**
     * show
     * @param {Object} config
     * @return Promise<string>
     */
    show(config: IShowConfig): Promise<string>;
    /**
     * showStandard
     * @param {Object} config
     * @return Promise<string>
     */
    showStandard(config: IShowStandardConfig): Promise<string>;
    /**
     * close
     * @param {string} id
     */
    close(id: any): void;
}
declare const _default: {
    /**
     * build
     * @param container
     * @param config
     * @return Notification
     */
    build(container: HTMLElement, config: IConfig): Notification;
};
/**
 * NotificationFactory
 */
export default _default;
