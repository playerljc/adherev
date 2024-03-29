import Resource from '@baifendian/adherev-util-resource';

import { IComponent } from './types';

const selectorPrefix = 'adherev-ui-globalindicator';

const MAX_ZINDEX = Resource.Dict.value.ResourceNormalMaxZIndex.value;

const GlobalIndicator: IComponent = {
  /**
   * show
   * @return {HTMLElement}
   * @param parent
   * @param text
   * @param zIndex
   */
  show(parent: HTMLElement = document.body, text = '', zIndex: number = MAX_ZINDEX): HTMLElement {
    const el: HTMLElement = document.createElement('div');

    el.innerHTML = `
      <div class="${selectorPrefix}" style="z-index: ${zIndex || MAX_ZINDEX}">
       <span class="${selectorPrefix}-dot"><i></i><i></i><i></i><i></i></span>
       <div class="${selectorPrefix}-text">${text}</div>
      </div>`;

    const indicatorDom: Element | null = el.firstElementChild;

    if (parent === document.body) {
      (indicatorDom as HTMLElement).style.position = 'fixed';
    }

    parent.appendChild(indicatorDom as HTMLElement);

    return indicatorDom as HTMLElement;
  },
  /**
   * hide
   * @param indicatorDom
   */
  hide(indicatorDom: HTMLElement) {
    if (indicatorDom) {
      indicatorDom.parentElement?.removeChild(indicatorDom);
    }
  },
};

export default GlobalIndicator;
