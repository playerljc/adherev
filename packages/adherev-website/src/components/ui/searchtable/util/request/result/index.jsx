import Vue from 'vue';

import Error from './error';
import Warn from './warn';

import './index.less';

// 句柄
let handler;

// 防抖时间
const time = 2000;

/**
 * createWrapOnce
 * @description - 创建wrap的dom
 * @return {HTMLElement}
 */
function createWrapOnce() {
  let el = document.getElementById('request-result');
  if (el) return el;

  el = document.createElement('div');
  el.id = 'request-result';
  el.className = 'request-result';
  document.body.appendChild(el);

  return el;
}

/**
 * openErrorOnce
 * @description - 打开Error(一次)
 * @param props
 */
export function openErrorOnce(props) {
  if (handler) {
    clearTimeout(handler);
    handler = null;
  }

  handler = setTimeout(
    () =>
      new Vue({
        el: createWrapOnce(),
        render(h) {
          return <Error props={{ ...props }} />;
        },
      }),
    time,
  );
}

/**
 * openWarnOnce
 * @description - 打开Warn一次
 * @param props
 */
export function openWarnOnce(props) {
  if (handler) {
    clearTimeout(handler);
    handler = null;
  }

  handler = setTimeout(
    () =>
      new Vue({
        el: createWrapOnce(),
        render(h) {
          return <Warn props={{ ...props }} />;
        },
      }),
    time,
  );
}
