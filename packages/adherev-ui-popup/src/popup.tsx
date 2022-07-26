import Vue from 'vue';
import { v1 } from 'uuid';

import { IConfig } from './types';

const selectorPrefix = 'adherev-ui-popup';

// @ts-ignore
let prePopup: this;
let maskEl;
let el = null;

/**
 * Popup
 * @class Popup
 * @classdesc Popup
 */
class Popup {
  private readonly id: string = '';
  private readonly config: IConfig | null = null;

  private isShow = false;
  private el: HTMLElement | null = null;
  private popupEl: HTMLDivElement | null = null;
  private popupInnerEl: HTMLDivElement | null = null;
  private vm: Vue | undefined;

  /**
   * constructor
   * @param config {Object} - config
   */
  constructor(config: IConfig) {
    this.isShow = false;
    this.el = PopupFactory.getEl();
    this.id = v1();
    this.config = config;

    this.onMaskElTransitionend = this.onMaskElTransitionend.bind(this);
    this.onInnerElTransitionend = this.onInnerElTransitionend.bind(this);

    this.render();
  }

  /**
   * createMask
   */
  private createMask(): void {
    // @ts-ignore
    const { zIndex } = this.config;

    maskEl = document.createElement('div');

    maskEl.className = `${selectorPrefix}-mask`;

    maskEl.style.zIndex = String((zIndex || 11000) - 1500);

    this?.el?.appendChild(maskEl);

    maskEl.addEventListener('transitionend', this.onMaskElTransitionend);
  }

  /**
   * render
   */
  private render(): void {
    // @ts-ignore
    const { children, zIndex } = this.config;

    this.popupEl = document.createElement('div');

    this.popupEl.addEventListener('transitionend', this.onInnerElTransitionend);

    this.popupEl.className = selectorPrefix;

    this.popupEl.style.zIndex = String(zIndex || 11000);

    this.popupInnerEl = document.createElement('div');

    this.popupEl.appendChild(this.popupInnerEl);

    const self = this;

    this.vm = new Vue({
      mounted() {
        self?.el?.appendChild(self.popupEl as HTMLElement);
        self.trigger('onCreate');
      },
      render(h) {
        return h(children);
      },
    });

    this.vm.$mount(this.popupInnerEl);
  }

  /**
   * trigger
   * @param hookName
   */
  private trigger(hookName: string): void {
    // @ts-ignore
    if (this.config[hookName]) {
      // @ts-ignore
      return this.config[hookName]();
    }
  }

  /**
   * show - 显示一个popup
   * @return boolean
   */
  show(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    if (prePopup) {
      prePopup.close();
    }

    maskEl.style.display = 'block';

    (this.popupEl as HTMLElement).style.display = 'block';

    this.isShow = true;

    this.trigger('onBeforeShow');

    setTimeout(() => {
      maskEl.classList.add('modal-in');

      (this.popupEl as HTMLElement).classList.add('modal-in');
    }, 100);

    return true;
  }

  /**
   * close - 关闭一个popup
   * @return boolean
   */
  close(): boolean {
    if (!maskEl) {
      this.createMask();
    }

    this.isShow = false;

    const promise = this.trigger('onBeforeClose');

    // @ts-ignore
    if (promise) {
      (promise as unknown as Promise<null>).then(() => {
        this.popupEl?.classList.remove('modal-in');

        maskEl.classList.remove('modal-in');
      });
    } else {
      this.popupEl?.classList.remove('modal-in');

      maskEl.classList.remove('modal-in');
    }

    return true;
  }

  /**
   * destroy - 销毁一个popup
   */
  destroy(): boolean {
    // @ts-ignore
    this.vm.$destroy();

    this.popupEl?.parentNode?.removeChild(this.popupEl);
    this.popupEl = null;

    this.trigger('onDestroy');

    return true;
  }

  /**
   * isDestroy - 是否已经销毁
   * @return {boolean}
   */
  isDestroy(): boolean {
    return !this.popupEl;
  }

  /**
   * getId
   * @return {string} - id
   */
  getId(): string {
    return this.id;
  }

  /**
   * onInnerElTransitionend
   */
  onInnerElTransitionend(): void {
    if (!this.isShow) {
      prePopup = null;

      (this.popupEl as HTMLElement).style.display = 'none';

      this.trigger('onAfterClose');
    } else {
      prePopup = this;

      this.trigger('onAfterShow');
    }
  }

  /**
   * onMaskElTransitionend
   */
  onMaskElTransitionend(): void {
    if (!this.isShow) {
      maskEl.style.display = 'none';
    }
  }
}

/**
 * PopupFactory
 */
const PopupFactory = {
  /**
   * create
   * @param config
   * @return Popup
   */
  create(config: IConfig): Popup {
    return new Popup(config);
  },

  /**
   * show - 显示一个popup
   * @param popup
   * @return boolean
   */
  show(popup: Popup) {
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    if (popup === prePopup) return false;

    if (prePopup && popup.getId() === prePopup.getId()) return false;

    return popup.show();
  },

  /**
   * close - 关闭一个popup
   * @param {Popup} popup
   * @return boolean
   */
  close(popup: Popup) {
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    return popup.close();
  },

  /**
   * closeAll - 关闭所有
   * @return boolean
   */
  closeAll() {
    if (prePopup) {
      return this.close(prePopup);
    }

    return false;
  },

  /**
   * destroy - 销毁一个popup
   * @param {Popup} popup
   * @return bool
   */
  destroy(popup) {
    if (!popup) return false;

    if (popup.isDestroy()) return false;

    return popup.destroy();
  },

  /**
   * getEl
   * @return {HTMLElement}
   */
  getEl() {
    return el || document.body;
  },
  /**
   * setEl
   * @param tel
   */
  setEl(tel) {
    el = tel;
  },
};

export default PopupFactory;
