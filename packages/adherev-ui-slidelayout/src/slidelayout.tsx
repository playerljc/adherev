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
  el: HTMLElement | null | undefined,
  x: string,
  y: string,
  z: string,
  time = '0',
  callback?: Function,
) {
  if (callback) {
    callback(el);
  }

  console.log('x,y,z', x, y, z);

  (el as HTMLElement).style.transform = `translate3d(${x},${y},${z})`;

  (el as HTMLElement).style.transition = `all ${time} ease`;
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

  // @ts-ignore
  (maskEl as HTMLElement).style.zIndex = `${Number.parseInt(zIndex) - 1}`;

  (maskEl as HTMLElement).addEventListener('click', () => {
    closeCallback();
  });

  return maskEl as HTMLElement;
}

export { Overlay, Push, Revolving };
