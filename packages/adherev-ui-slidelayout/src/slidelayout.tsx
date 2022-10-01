import Overlay from './overlay';
import Push from './push';
import Revolving from './reveal';

export const selectorPrefix = 'adherev-ui-slidelayout';

/**
 * slider
 * @param el
 * @param x
 * @param y
 * @param z
 * @param time
 * @param callback
 */
export function slider(
  el: HTMLElement,
  x: string,
  y: string,
  z: string,
  time?: number | string,
  callback?: Function,
) {
  if (callback) {
    callback(el);
  }

  el.style.transform = el.style.webkitTransform = `translate3d(${x},${y},${z})`;

  el.style.transition = el.style.webkitTransition = `all ${time} ease`;
}

/**
 * createMask
 * @param zIndex
 * @param closeCallback
 */
export function createMask(zIndex: number | string, closeCallback: Function): HTMLElement {
  const el = document.createElement('div');

  el.innerHTML = `<div class='${selectorPrefix}-mask'></div>`;

  const maskEl = el.firstElementChild;

  (maskEl as HTMLElement).style.zIndex = `${parseInt(zIndex as string) - 1}`;

  (maskEl as HTMLElement).addEventListener('click', () => {
    closeCallback();
  });

  return maskEl as HTMLElement;
}

export { Overlay, Push, Revolving };
