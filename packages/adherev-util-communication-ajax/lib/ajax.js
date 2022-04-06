"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ant_design_vue_1 = require("ant-design-vue");
// @ts-ignore
var adherev_util_1 = __importDefault(require("@baifendian/adherev-util"));
var adherev_util_intl_1 = __importDefault(require("@baifendian/adherev-util-intl"));
var adherev_ui_globalindicator_1 = __importDefault(require("@baifendian/adherev-ui-globalindicator"));
// 是否触发过402
var trigger402 = false;
// notification的节流时间(毫秒)
var notificationThrottlingTime = 2000;
var errorInfoHandler;
var warnInfoHandler;
/**
 * errorInfo - 错误的提示
 * @param title
 * @param message
 */
function errorInfo(title, message) {
    if (errorInfoHandler) {
        clearTimeout(errorInfoHandler);
        errorInfoHandler = null;
    }
    errorInfoHandler = setTimeout(function () {
        ant_design_vue_1.notification.error({
            message: title,
            description: message,
        });
    }, notificationThrottlingTime);
}
/**
 * warnInfo - 警告的提示
 * @param title
 * @param message
 */
function warnInfo(title, message) {
    if (warnInfoHandler) {
        clearTimeout(warnInfoHandler);
        warnInfoHandler = null;
    }
    warnInfoHandler = setTimeout(function () {
        ant_design_vue_1.notification.warn({
            message: title,
            description: message,
        });
    }, notificationThrottlingTime);
}
/**
 * createXHR - 创建一个XHR对象
 * @return XMLHttpRequest
 */
function createXHR() {
    return new XMLHttpRequest();
}
/**
 * getDefaultConfig - 返回构造函数config的默认值
 * @return IConfig
 */
function getDefaultConfig() {
    var _this = this;
    return {
        timeout: Ajax.TIMEOUT,
        withCredentials: true,
        onLoad: function () { },
        onLoadsStart: function () { },
        onLoadend: function () { },
        onProgress: function () { },
        // 超时
        onTimeout: function () {
            warnInfo(adherev_util_intl_1.default.tv('提示'), adherev_util_intl_1.default.tv('请求超时'));
        },
        // 取消
        onAbort: function () {
            warnInfo(adherev_util_intl_1.default.tv('提示'), adherev_util_intl_1.default.tv('请求终止'));
        },
        // 发生错误
        onError: function () {
            errorInfo(adherev_util_intl_1.default.tv('提示'), adherev_util_intl_1.default.tv('请求发生错误'));
        },
        // 拦截器
        interceptor: function (_a) {
            var status = _a.status;
            switch (status) {
                case 401:
                    // @ts-ignore
                    deal401.call(_this);
                    break;
                case 402:
                    // @ts-ignore
                    deal402.call(_this);
                    break;
                default:
                    errorInfo(adherev_util_intl_1.default.tv('提示'), adherev_util_intl_1.default.tv('已提出请求，但未收到任何回复'));
                    break;
            }
        },
        mock: false,
        // loading的配置
        loading: {
            // 是否显示遮罩
            show: false,
            // 遮罩的内容
            text: '',
            // 遮罩的元素
            el: document.body,
        },
        onBeforeResponse: function () { },
        dataKey: 'data',
        messageKey: 'message',
        codeKey: 'code',
        codeSuccess: 200,
        showWarn: true,
    };
}
/**
 * initXhrEvents - 初始化XHR的事件
 * @param xhr
 * @param events
 */
function initXhrEvents(xhr, events) {
    var onTimeout = events.onTimeout, onLoadsStart = events.onLoadsStart, onProgress = events.onProgress, onAbort = events.onAbort, onError = events.onError, onLoad = events.onLoad, onLoadend = events.onLoadend;
    // events
    if (onTimeout) {
        xhr.addEventListener('timeout', onTimeout);
    }
    if (onLoadsStart) {
        xhr.addEventListener('loadstart', onLoadsStart);
    }
    if (onProgress) {
        xhr.addEventListener('progress', onProgress);
    }
    if (onAbort) {
        xhr.addEventListener('abort', onAbort);
    }
    if (onError) {
        xhr.addEventListener('error', onError);
    }
    if (onLoad) {
        xhr.addEventListener('load', onLoad);
    }
    if (onLoadend) {
        xhr.addEventListener('loadend', onLoadend);
    }
}
/**
 * resolveData - onreadystatechange中resolve的数据
 * @param show
 * @param data
 * @param indicator
 */
function resolveData(_a) {
    var show = _a.show, data = _a.data, indicator = _a.indicator;
    return show
        ? {
            data: data,
            hideIndicator: function () {
                adherev_ui_globalindicator_1.default.hide(indicator);
            },
        }
        : data;
}
/**
 * onreadystatechange - onreadystatechange的处理
 * @param xhr
 * @param interceptor
 * @param show
 * @param indicator
 * @param messageKey
 * @param codeKey
 * @param codeSuccess
 * @param showWarn
 * @param resolve
 * @param reject
 */
function onreadystatechange(_a) {
    var xhr = _a.xhr, interceptor = _a.interceptor, _b = _a.loading, show = _b.show, indicator = _b.indicator, _c = _a.business, messageKey = _c.messageKey, codeKey = _c.codeKey, codeSuccess = _c.codeSuccess, showWarn = _c.showWarn, resolve = _a.resolve, reject = _a.reject;
    var status = xhr.status, readyState = xhr.readyState, statusText = xhr.statusText, response = xhr.response, responseText = xhr.responseText;
    // readyState === 4
    if (readyState === Ajax.READY_STATE_DONE) {
        // status success
        if ((status >= 200 && status < 300) || status === 304) {
            // 获取contentType
            var contentType = xhr.getResponseHeader('Content-type');
            // response ContentType是application/json
            if (contentType.indexOf(Ajax.CONTENT_TYPE_APPLICATION_JSON) !== -1) {
                // 只有application/json才进行三大值的判断
                var jsonObj = JSON.parse(xhr.responseText);
                if (showWarn && codeKey in jsonObj && jsonObj[codeKey] !== codeSuccess) {
                    warnInfo(adherev_util_intl_1.default.v('提示'), jsonObj[messageKey]);
                }
                resolve(resolveData({ show: show, data: jsonObj, indicator: indicator }));
            }
            // response ContentType是xml
            else if ([Ajax.CONTENT_TYPE_TEXT_XML, Ajax.CONTENT_TYPE_TEXT_XML].includes(contentType)) {
                resolve(resolveData({ show: show, data: xhr.responseXML, indicator: indicator }));
            }
            // response ContentType是其他
            else {
                resolve(resolveData({ show: show, data: xhr.response, indicator: indicator }));
            }
        }
        // status error
        else {
            // 3xx
            // 4xx
            // 5xx
            // 拦截器
            interceptor({
                status: status,
                statusText: statusText,
                response: response,
                responseText: responseText,
            });
            // catch
            if (status)
                reject({
                    status: status,
                    statusText: statusText,
                    response: response,
                    responseText: responseText,
                });
            // 取消遮罩
            if (show && indicator) {
                adherev_ui_globalindicator_1.default.hide(indicator);
            }
        }
    }
}
/**
 * sendPrepare - send前的准备
 */
function sendPrepare(_a, _b) {
    var 
    // 当前方法独有
    method = _a.method, 
    // get|post|path|put|delete方法独有
    path = _a.path, headers = _a.headers, 
    // 数据
    data = _a.data, 
    // 业务参数
    mock = _a.mock, loading = _a.loading, onBeforeResponse = _a.onBeforeResponse, 
    // 下面是后端返回的三组值
    _c = _a.dataKey, 
    // 下面是后端返回的三组值
    dataKey = _c === void 0 ? 'data' : _c, _d = _a.messageKey, messageKey = _d === void 0 ? 'message' : _d, _e = _a.codeKey, codeKey = _e === void 0 ? 'code' : _e, _f = _a.codeSuccess, codeSuccess = _f === void 0 ? 200 : _f, _g = _a.showWarn, showWarn = _g === void 0 ? true : _g, 
    // curConfig
    curConfig = __rest(_a, ["method", "path", "headers", "data", "mock", "loading", "onBeforeResponse", "dataKey", "messageKey", "codeKey", "codeSuccess", "showWarn"]) // timeout && withCredentials && events
    ;
    var resolve = _b.resolve, reject = _b.reject;
    var indicator;
    var defaultLoadingText = "".concat(adherev_util_intl_1.default.tv('加载中'), "...");
    var _h = loading, _j = _h.show, show = _j === void 0 ? false : _j, _k = _h.text, text = _k === void 0 ? defaultLoadingText : _k, _l = _h.el, el = _l === void 0 ? document.body : _l;
    // 显示loading
    if (show) {
        // @ts-ignore
        indicator = adherev_ui_globalindicator_1.default.show(el || document.body, text || defaultLoadingText);
    }
    // 如果是mock数据
    if (mock) {
        setTimeout(function () {
            if (show) {
                resolve({
                    data: path,
                    hideIndicator: function () {
                        adherev_ui_globalindicator_1.default.hide(indicator);
                    },
                });
            }
            else {
                resolve(path);
            }
        }, 200);
        return { xhr: null, contentType: '' };
    }
    // @ts-ignore
    var _m = this, baseURL = _m.baseURL, config = _m.config;
    var _o = Object.assign(
    // 默认的属性
    // @ts-ignore
    getDefaultConfig.call(this), config, curConfig), timeout = _o.timeout, withCredentials = _o.withCredentials, interceptor = _o.interceptor, events = __rest(_o, ["timeout", "withCredentials", "interceptor"]);
    // xhr
    var xhr = createXHR();
    // open
    xhr.open(method, "".concat(baseURL, "/").concat(path), true);
    // timeout
    xhr.timeout = timeout;
    // withCredentials
    xhr.withCredentials = withCredentials;
    var contentType = '';
    // requestHeaders - 在open之后
    // 如果用户设置了header
    if (!adherev_util_1.default.isEmpty(headers) && adherev_util_1.default.isObject(headers)) {
        // 不是get请求且如果用户没有定义Content-type 则默认添加application/json
        if (!('Content-type' in headers) && method !== ('get' || 'GET')) {
            headers['Content-Type'] = "".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON, ";charset=utf-8");
            contentType = headers['Content-Type'];
            // console.log('设置了header，但是没有设置Content-Type', Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA);
        }
        for (var header in headers) {
            xhr.setRequestHeader(header, headers[header]);
        }
    }
    else {
        // 用户没有设置header
        // 会根据data初始化heeader
        if (!adherev_util_1.default.isEmpty(data) && adherev_util_1.default.isRef(data) && method !== ('get' || 'GET')) {
            if (!('form' in
                // @ts-ignore
                data &&
                'data' in data &&
                !adherev_util_1.default.isEmpty(data.form) &&
                !adherev_util_1.default.isEmpty(data.data) &&
                data.form instanceof HTMLFormElement)) {
                // console.log('默认设置Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
                contentType = "".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON, ";charset=utf-8");
                xhr.setRequestHeader('Content-Type', "".concat(Ajax.CONTENT_TYPE_APPLICATION_JSON, ";charset=utf-8"));
            }
            else {
                // console.log('有formData不需要设置Content-Type');
                contentType = Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA;
            }
        }
    }
    // 默认Content-Type
    // else {
    //   xhr.setRequestHeader('Content-Type', `${Ajax.CONTENT_TYPE_APPLICATION_JSON};charset=utf-8`);
    // }
    // events
    initXhrEvents(xhr, events);
    // onreadystatechange
    // @ts-ignore
    xhr.onreadystatechange = onreadystatechange.bind(this, {
        xhr: xhr,
        interceptor: interceptor,
        loading: {
            show: show,
            indicator: indicator,
        },
        business: {
            dataKey: dataKey,
            messageKey: messageKey,
            codeKey: codeKey,
            codeSuccess: codeSuccess,
            showWarn: showWarn,
        },
        resolve: resolve,
        reject: reject,
    });
    // return
    return {
        xhr: xhr,
        contentType: contentType,
    };
}
/**
 * getSendParams
 * @param data
 * @param contentType
 */
function getSendParams(_a) {
    var data = _a.data, contentType = _a.contentType;
    contentType = contentType || '';
    // 四种Content-Type的处理(也就是send的参数)
    // application/json
    // "{}"
    // application/x-www-form-urlencoded
    // key1=1&key2=2&key3=3&key4=4&key5=5
    // multipart/form-data
    // FormData
    // console.log('getSendParams', data, contentType);
    /**
     * application/json
     */
    if (contentType.startsWith(Ajax.CONTENT_TYPE_APPLICATION_JSON) && adherev_util_1.default.isRef(data)) {
        // console.log('数据需要被转换成JSON字符串', JSON.stringify(data));
        return JSON.stringify(data);
    }
    /**
     * application/x-www-form-urlencoded
     */
    if (contentType.startsWith(Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED) &&
        adherev_util_1.default.isObject(data)) {
        // console.log('application/x-www-form-urlencoded转换', JSON.stringify(data));
        return Array.from(Object.keys(data))
            .map(function (k) { return encodeURIComponent("".concat(k, "=").concat(data[k])); })
            .join('&');
    }
    /**
     * multipart/form-data
     */
    if (contentType.startsWith(Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA) && adherev_util_1.default.isObject(data)) {
        // console.log('multipart/form-data转换');
        // console.log('form', data.form);
        var formData_1 = new FormData(data.form);
        Array.from(Object.keys(data.data)).forEach(function (k) {
            formData_1.append(k, data.data[k]);
            // console.log(k, data.data[k]);
        });
        return formData_1;
    }
    /**
     * text/plain
     */
    if (contentType.startsWith(Ajax.CONTENT_TYPE_TEXT_PLAIN)) {
        if (adherev_util_1.default.isString(data))
            return data;
        if (adherev_util_1.default.isObject(data))
            return JSON.stringify(data);
    }
    return data.toString();
}
/**
 * complexRequest - 复杂的请求
 * @param method
 * @param params
 */
function complexRequest(method, params) {
    var _this = this;
    return new Promise(function (resolve, reject) {
        var _a = sendPrepare.call(
        // @ts-ignore
        _this, __assign(__assign(__assign(__assign({}, getDefaultConfig.call(_this)), _this.config), { method: method }), params), {
            resolve: resolve,
            reject: reject,
        }), xhr = _a.xhr, contentType = _a.contentType;
        if (xhr) {
            xhr.send(getSendParams.call(
            // @ts-ignore
            _this, {
                data: params.data,
                contentType: contentType,
            }));
        }
    });
}
/**
 * deal401
 */
function deal401() {
    // 像top发送消息
    if (window.top && window.top !== window) {
        window.top.postMessage('http_status_401', '*');
    }
    if (trigger402) {
        return false;
    }
    window.location.href = adherev_util_1.default.casUrl({
        // @ts-ignore
        baseUrl: this.systemManagerBaseURL,
        enterUrl: window.location.href,
    });
}
/**
 * deal402
 */
function deal402() {
    trigger402 = true;
    if (window.parent && window.parent !== window) {
        window.parent.postMessage('http_status_402', '*');
        return false;
    }
    window.location.href = adherev_util_1.default.casLogoutUrl({
        // @ts-ignore
        baseUrl: this.systemManagerBaseURL,
        enterUrl: window.location.href,
        params: '&code=402',
    });
}
/**
 * Ajax
 * @class Ajax
 * @classdesc Ajax
 */
var Ajax = /** @class */ (function () {
    /**
     * constructor
     * @param baseURL
     * @param systemManagerBaseURL
     * @param config
     */
    function Ajax(baseURL, systemManagerBaseURL, config) {
        this.baseURL = baseURL || '';
        this.systemManagerBaseURL = systemManagerBaseURL || '';
        this.config = config || {};
    }
    /**
     * get
     * @param data
     * @param arg
     */
    Ajax.prototype.get = function (_a) {
        var _this = this;
        var data = _a.data, arg = __rest(_a, ["data"]);
        return new Promise(function (resolve, reject) {
            var xhr = sendPrepare.call(_this, __assign(__assign(__assign(__assign({}, getDefaultConfig.call(_this)), _this.config), { method: 'get' }), arg), {
                resolve: resolve,
                reject: reject,
            }).xhr;
            if (xhr) {
                xhr.send(null);
            }
        });
    };
    /**
     * post
     * @param params
     */
    Ajax.prototype.post = function (params) {
        return complexRequest.call(this, 'post', params);
    };
    /**
     * path
     * @param params
     */
    Ajax.prototype.path = function (params) {
        return complexRequest.call(this, 'path', params);
    };
    /**
     * put
     * @param params
     */
    Ajax.prototype.put = function (params) {
        return complexRequest.call(this, 'put', params);
    };
    /**
     * delete
     * @param params
     */
    Ajax.prototype.delete = function (params) {
        return complexRequest.call(this, 'delete', params);
    };
    /**
     * 超时时间(10分钟)
     */
    Ajax.TIMEOUT = 1000 * 1000;
    /**
     * 状态成功代码
     */
    Ajax.STATUS_SUCCESS_CODES = [200, 201, 202, 203, 204, 205, 206, 207, 208, 226];
    /**
     * 状态重定向代码
     */
    Ajax.STATUS_REDIRECT_CODES = [300, 301, 302, 303, 304, 305, 306, 307, 308];
    /**
     * 代理被创建，但尚未调用 open() 方法。
     */
    Ajax.READY_STATE_UNSENT = 0;
    /**
     * open() 方法已经被调用
     */
    Ajax.READY_STATE_OPENED = 1;
    /**
     * send() 方法已经被调用，并且头部和状态已经可获得
     */
    Ajax.READY_STATE_HEADERS_RECEIVED = 2;
    /**
     * 下载中； responseText 属性已经包含部分数据
     */
    Ajax.READY_STATE_LOADING = 3;
    /**
     * 下载操作已完成
     */
    Ajax.READY_STATE_DONE = 4;
    Ajax.CONTENT_TYPE_APPLICATION_JSON = 'application/json';
    Ajax.CONTENT_TYPE_MULTIPART_FORM_DATA = 'multipart/form-data';
    Ajax.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED = 'application/x-www-form-urlencoded';
    Ajax.CONTENT_TYPE_TEXT_XML = 'text/xml';
    Ajax.CONTENT_TYPE_APPLICATION_XML = 'application/xml';
    Ajax.CONTENT_TYPE_TEXT_PLAIN = 'text/plain';
    return Ajax;
}());
exports.default = Ajax;
