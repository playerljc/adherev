import { v1 } from 'uuid';
import { createApp, h } from 'vue';

import Util from '@baifendian/adherev-util';

import { IConfig, INotificationFactory, IShowConfig, IShowStandardConfig } from './types';

const selectorPrefix = 'adherev-ui-notification';

/**
 * Notification
 * @class Notification
 * @classdesc Notification
 */
export class Notification {
  private readonly config: IConfig = {
    style: 'material',
    type: 'top',
  };

  // 通知产生的容器元素
  private container: HTMLElement;

  // 通知的inner元素
  private innerContainer: HTMLElement | undefined;

  // 通知的ul元素
  private notificationContainer: HTMLElement | undefined;

  // 存放所有的notification
  private notifications = {};
  private key: boolean = false;

  constructor(container: HTMLElement, config: IConfig) {
    this.container = container;

    this.config = Object.assign(this.config, config);

    this.createInnerContainer();

    this.init();

    this.initEvents();
  }

  /**
   * createInnerContainer
   * @private
   */
  private createInnerContainer(): void {
    const innerContainer: HTMLElement | null = this.container.querySelector(`.${selectorPrefix}`);

    if (innerContainer) {
      innerContainer?.parentElement?.removeChild(innerContainer);
    }

    this.innerContainer = document.createElement('div');
    this.innerContainer.className = selectorPrefix;

    this.notificationContainer = document.createElement('ul');
    this.innerContainer.appendChild(this.notificationContainer);

    this.container.appendChild(this.innerContainer);
  }

  /**
   * init
   * @private
   */
  private init(): void {
    const { config } = this;

    if (!this.innerContainer) return;

    this.innerContainer.classList.remove(
      [selectorPrefix].concat([config.type === 'top' ? 'bottom' : 'top', config.style]).join('-'),
    );

    this.innerContainer.classList.add(
      [selectorPrefix].concat([config.type, config.style]).join('-'),
    );
  }

  /**
   * initEvents
   * @private
   */
  private initEvents(): void {
    const self = this;

    if (!this.notificationContainer) return;

    this.notificationContainer.addEventListener('click', (e: any) => {
      if (e.target.classList.contains('closeBtn')) {
        const topDom: HTMLElement | null | undefined = Util.getTopDom?.(
          e.target,
          `${selectorPrefix}-item`,
        );

        if (topDom) {
          self.closeNotification.call(self, topDom?.dataset?.id as string);
        }
      }
    });
  }

  /**
   * closeNotification - 点击删除通知
   * closeNotification
   * @param {string} id
   * @access private
   */
  private closeNotification(id: string): void {
    const self = this;

    if (self.key) return;

    self.key = true;

    const n = self.notifications[id];

    function transitionendAction() {
      n.removeEventListener('transitionend', transitionendAction);

      self?.notificationContainer?.removeChild(n);

      self.key = false;

      // closeAfter
      self.trigger('onCloseAfter', n);
    }

    // closeBefore
    self.trigger('onCloseBefore', n);

    n.addEventListener('transitionend', transitionendAction);

    n.style.overflow = 'hidden';

    n.querySelector('.info').style.opacity = '0';

    n.style.height = '0';
  }

  /**
   * buildCustom
   * @param config
   * @return Promise<String>
   * @private
   */
  private buildCustom(config: IShowConfig): Promise<string> {
    return new Promise((resolve) => {
      const { closed, children } = config;

      const id = v1();
      const n = document.createElement('li');
      n.className = `${selectorPrefix}-item`;
      n.dataset.id = id;

      const self = this;

      createApp({
        mounted() {
          resolve(self.build(id, n));
        },
        render() {
          return (
            <>
              <div class="info">
                {Util.isObject?.(children)
                  ? h(children as any)
                  : Util.isFunction?.(children)
                  ? (children as Function)()
                  : children || ''}
              </div>
              {closed ? <span class="closeBtn" /> : null}
            </>
          );
        },
      }).mount(n);
    });
  }

  /**
   * buildStandard
   * @param config
   * @return Promise<string>
   * @private
   */
  private buildStandard(config: IShowStandardConfig): Promise<string> {
    return new Promise((resolve) => {
      const {
        headerLabel = '',
        headerIcon = '',
        title = '',
        text = '',
        icon = '',
        closed = true,
        datetime = '',
      } = config;

      const id = v1();
      const n = document.createElement('li');
      n.className = `${selectorPrefix}-item`;
      n.dataset.id = id;

      const self = this;

      createApp({
        mounted() {
          resolve(self.build(id, n));
        },
        render() {
          return (
            <>
              <div class="info">
                <div class={`${selectorPrefix}-standard-header`}>
                  <div class={`${selectorPrefix}-standard-header-icon`}>
                    {headerIcon ? <img src={headerIcon} alt="" /> : null}
                  </div>
                  <div class={`${selectorPrefix}-standard-header-label`}>
                    {Util.isObject?.(headerLabel)
                      ? h(headerLabel)
                      : Util.isFunction?.(headerLabel)
                      ? (headerLabel as Function)()
                      : headerLabel || ''}
                  </div>
                </div>
                <div class={`${selectorPrefix}-standard-content`}>
                  <div class={`${selectorPrefix}-standard-content-media-l`}>
                    {icon ? <img src={icon} alt="" /> : null}
                  </div>
                  <div class={`${selectorPrefix}-standard-content-row`}>
                    <div class={`${selectorPrefix}-standard-content-row-title`}>
                      {Util.isObject?.(title)
                        ? h(title)
                        : Util.isFunction?.(title)
                        ? (title as Function)()
                        : title || ''}
                    </div>
                    <div class={`${selectorPrefix}-standard-content-row-text`}>
                      {Util.isObject?.(text)
                        ? h(text)
                        : Util.isFunction?.(text)
                        ? (text as Function)()
                        : text || ''}
                    </div>
                  </div>
                  <div class={`${selectorPrefix}-standard-content-media-r`}>
                    {Util.isObject?.(datetime)
                      ? h(datetime)
                      : Util.isFunction?.(datetime)
                      ? (datetime as Function)()
                      : datetime || ''}
                  </div>
                </div>
              </div>
              {closed ? <span class="closeBtn" /> : null}
            </>
          );
        },
      }).mount(n);
    });
  }

  /**
   * build
   * @param id
   * @param n
   * @return string
   * @private
   */
  private build(id: string, n: HTMLLIElement): string {
    const self = this;

    this.notifications[id] = n;

    this?.notificationContainer?.appendChild(n);

    self.trigger('onCreate', n);

    n.style.height = 'auto';

    let targetHeight = n.clientHeight;

    // 会有最小高度的限制
    if (self.config.style === 'material') {
      if (targetHeight < 40) {
        targetHeight = 40;
      }
    } else if (self.config.style === 'ios') {
      if (targetHeight < 70) {
        targetHeight = 70;
      }
    }

    n.style.height = '0';

    setTimeout(() => {
      n.style.height = `${targetHeight}px`;

      (n.querySelector('.info') as HTMLElement).style.opacity = '1';

      self.trigger('onShow', n);
    }, 100);

    return id;
  }

  /**
   * trigger
   * @param action
   * @param params
   * @private
   */
  private trigger(action: string, params?: any): void {
    if (this.config[action]) {
      this.config[action](params);
    }
  }

  /**
   * show
   * @param {Object} config
   * @return Promise<string>
   */
  show(config: IShowConfig): Promise<string> {
    return this.buildCustom(config);
  }

  /**
   * showStandard
   * @param {Object} config
   * @return Promise<string>
   */
  showStandard(config: IShowStandardConfig): Promise<string> {
    return this.buildStandard(config);
  }

  /**
   * close
   * @param {string} id
   */
  close(id: string): void {
    this.closeNotification(id);
  }
}

const NotificationFactory: INotificationFactory = {
  /**
   * build
   * @param container
   * @param config
   * @return Notification
   */
  build(container: HTMLElement, config: IConfig): Notification {
    return new Notification(container, config);
  },
};

/**
 * NotificationFactory
 */
export default NotificationFactory;
