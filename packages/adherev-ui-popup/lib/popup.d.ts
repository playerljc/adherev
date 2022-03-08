import { IComponent, IConfig } from './types';
/**
 * Popup
 * @class Popup
 * @classdesc Popup
 */
export declare class Popup {
    private readonly id;
    private readonly config;
    private isShow;
    private el;
    private popupEl;
    private popupInnerEl;
    private vm;
    /**
     * constructor
     * @param config {Object} - config
     */
    constructor(config: IConfig);
    /**
     * createMask
     */
    private createMask;
    /**
     * render
     */
    private render;
    /**
     * trigger
     * @param hookName
     */
    private trigger;
    /**
     * show - 显示一个popup
     * @return boolean
     */
    show(): boolean;
    /**
     * close - 关闭一个popup
     * @return boolean
     */
    close(): boolean;
    /**
     * destroy - 销毁一个popup
     */
    destroy(): boolean;
    /**
     * isDestroy - 是否已经销毁
     * @return {boolean}
     */
    isDestroy(): boolean;
    /**
     * getId
     * @return {string} - id
     */
    getId(): string;
    /**
     * onInnerElTransitionend
     */
    onInnerElTransitionend(): void;
    /**
     * onMaskElTransitionend
     */
    onMaskElTransitionend(): void;
}
/**
 * PopupFactory
 */
declare const PopupFactory: IComponent;
export default PopupFactory;
