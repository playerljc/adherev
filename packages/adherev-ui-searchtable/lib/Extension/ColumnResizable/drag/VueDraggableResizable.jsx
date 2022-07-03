"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = require("vue");
var dom_1 = require("./utils/dom");
var fns_1 = require("./utils/fns");
var events = {
    mouse: {
        start: 'mousedown',
        move: 'mousemove',
        stop: 'mouseup',
    },
    touch: {
        start: 'touchstart',
        move: 'touchmove',
        stop: 'touchend',
    },
};
var userSelectNone = {
    userSelect: 'none',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    MsUserSelect: 'none',
};
var userSelectAuto = {
    userSelect: 'auto',
    MozUserSelect: 'auto',
    WebkitUserSelect: 'auto',
    MsUserSelect: 'auto',
};
var eventsFor = events.mouse;
exports.default = (0, vue_1.defineComponent)({
    replace: true,
    name: 'vue-draggable-resizable',
    props: {
        className: {
            type: String,
            default: 'vdr',
        },
        classNameDraggable: {
            type: String,
            default: 'draggable',
        },
        classNameResizable: {
            type: String,
            default: 'resizable',
        },
        classNameDragging: {
            type: String,
            default: 'dragging',
        },
        classNameResizing: {
            type: String,
            default: 'resizing',
        },
        classNameActive: {
            type: String,
            default: 'active',
        },
        classNameHandle: {
            type: String,
            default: 'handle',
        },
        disableUserSelect: {
            type: Boolean,
            default: true,
        },
        enableNativeDrag: {
            type: Boolean,
            default: false,
        },
        preventDeactivation: {
            type: Boolean,
            default: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
        draggable: {
            type: Boolean,
            default: true,
        },
        resizable: {
            type: Boolean,
            default: true,
        },
        lockAspectRatio: {
            type: Boolean,
            default: false,
        },
        w: {
            type: [Number, String],
            default: 200,
            validator: function (val) {
                if (typeof val === 'number') {
                    return val > 0;
                }
                return val === 'auto';
            },
        },
        h: {
            type: [Number, String],
            default: 200,
            validator: function (val) {
                if (typeof val === 'number') {
                    return val > 0;
                }
                return val === 'auto';
            },
        },
        minWidth: {
            type: Number,
            default: 0,
            validator: function (val) { return val >= 0; },
        },
        minHeight: {
            type: Number,
            default: 0,
            validator: function (val) { return val >= 0; },
        },
        maxWidth: {
            type: Number,
            default: null,
            validator: function (val) { return val >= 0; },
        },
        maxHeight: {
            type: Number,
            default: null,
            validator: function (val) { return val >= 0; },
        },
        x: {
            type: Number,
            default: 0,
        },
        y: {
            type: Number,
            default: 0,
        },
        z: {
            type: [String, Number],
            default: 'auto',
            validator: function (val) { return (typeof val === 'string' ? val === 'auto' : val >= 0); },
        },
        handles: {
            type: Array,
            default: function () { return ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']; },
            validator: function (val) {
                var s = new Set(['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml']);
                return new Set(val.filter(function (h) { return s.has(h); })).size === val.length;
            },
        },
        dragHandle: {
            type: String,
            default: null,
        },
        dragCancel: {
            type: String,
            default: null,
        },
        axis: {
            type: String,
            default: 'both',
            validator: function (val) { return ['x', 'y', 'both'].includes(val); },
        },
        grid: {
            type: Array,
            default: function () { return [1, 1]; },
        },
        parent: {
            type: Boolean,
            default: false,
        },
        scale: {
            type: [Number, Array],
            default: 1,
            validator: function (val) {
                if (typeof val === 'number') {
                    return val > 0;
                }
                return val.length === 2 && val[0] > 0 && val[1] > 0;
            },
        },
        onDragStart: {
            type: Function,
            default: function () { return true; },
        },
        onDrag: {
            type: Function,
            default: function () { return true; },
        },
        onResizeStart: {
            type: Function,
            default: function () { return true; },
        },
        onResize: {
            type: Function,
            default: function () { return true; },
        },
    },
    data: function () {
        return {
            left: this.x,
            top: this.y,
            right: null,
            bottom: null,
            width: null,
            height: null,
            widthTouched: false,
            heightTouched: false,
            aspectFactor: null,
            parentWidth: null,
            parentHeight: null,
            minW: this.minWidth,
            minH: this.minHeight,
            maxW: this.maxWidth,
            maxH: this.maxHeight,
            handle: null,
            enabled: this.active,
            resizing: false,
            dragging: false,
            dragEnable: false,
            resizeEnable: false,
            zIndex: this.z,
        };
    },
    created: function () {
        // eslint-disable-next-line
        if (this.maxWidth && this.minWidth > this.maxWidth)
            console.warn('[Vdr warn]: Invalid prop: minWidth cannot be greater than maxWidth');
        // eslint-disable-next-line
        if (this.maxWidth && this.minHeight > this.maxHeight)
            console.warn('[Vdr warn]: Invalid prop: minHeight cannot be greater than maxHeight');
        this.resetBoundsAndMouseState();
    },
    mounted: function () {
        if (!this.enableNativeDrag) {
            this.$el.ondragstart = function () { return false; };
        }
        var _a = this.getParentSize(), parentWidth = _a[0], parentHeight = _a[1];
        this.parentWidth = parentWidth;
        this.parentHeight = parentHeight;
        var _b = (0, dom_1.getComputedSize)(this.$el), width = _b[0], height = _b[1];
        this.aspectFactor =
            (this.w !== 'auto' ? this.w : width) / (this.h !== 'auto' ? this.h : height);
        this.width = this.w !== 'auto' ? this.w : width;
        this.height = this.h !== 'auto' ? this.h : height;
        this.right = this.parentWidth - this.width - this.left;
        this.bottom = this.parentHeight - this.height - this.top;
        if (this.active) {
            this.$emit('activated');
        }
        (0, dom_1.addEvent)(document.documentElement, 'mousedown', this.deselect);
        (0, dom_1.addEvent)(document.documentElement, 'touchend touchcancel', this.deselect);
        (0, dom_1.addEvent)(window, 'resize', this.checkParentSize);
    },
    beforeDestroy: function () {
        (0, dom_1.removeEvent)(document.documentElement, 'mousedown', this.deselect);
        (0, dom_1.removeEvent)(document.documentElement, 'touchstart', this.handleUp);
        (0, dom_1.removeEvent)(document.documentElement, 'mousemove', this.move);
        (0, dom_1.removeEvent)(document.documentElement, 'touchmove', this.move);
        (0, dom_1.removeEvent)(document.documentElement, 'mouseup', this.handleUp);
        (0, dom_1.removeEvent)(document.documentElement, 'touchend touchcancel', this.deselect);
        (0, dom_1.removeEvent)(window, 'resize', this.checkParentSize);
    },
    methods: {
        resetBoundsAndMouseState: function () {
            this.mouseClickPosition = { mouseX: 0, mouseY: 0, x: 0, y: 0, w: 0, h: 0 };
            this.bounds = {
                minLeft: null,
                maxLeft: null,
                minRight: null,
                maxRight: null,
                minTop: null,
                maxTop: null,
                minBottom: null,
                maxBottom: null,
            };
        },
        checkParentSize: function () {
            if (this.parent) {
                var _a = this.getParentSize(), newParentWidth = _a[0], newParentHeight = _a[1];
                this.parentWidth = newParentWidth;
                this.parentHeight = newParentHeight;
                this.right = this.parentWidth - this.width - this.left;
                this.bottom = this.parentHeight - this.height - this.top;
            }
        },
        getParentSize: function () {
            if (this.parent) {
                var style = window.getComputedStyle(this.$el.parentNode, null);
                return [
                    parseInt(style.getPropertyValue('width'), 10),
                    parseInt(style.getPropertyValue('height'), 10),
                ];
            }
            return [null, null];
        },
        elementTouchDown: function (e) {
            eventsFor = events.touch;
            this.elementDown(e);
        },
        elementMouseDown: function (e) {
            eventsFor = events.mouse;
            this.elementDown(e);
        },
        elementDown: function (e) {
            if (e instanceof MouseEvent && e.which !== 1) {
                return;
            }
            var target = e.target || e.srcElement;
            if (this.$el.contains(target)) {
                if (this.onDragStart(e) === false) {
                    return;
                }
                if ((this.dragHandle &&
                    !(0, dom_1.matchesSelectorToParentElements)(target, this.dragHandle, this.$el)) ||
                    (this.dragCancel && (0, dom_1.matchesSelectorToParentElements)(target, this.dragCancel, this.$el))) {
                    this.dragging = false;
                    return;
                }
                if (!this.enabled) {
                    this.enabled = true;
                    this.$emit('activated');
                    this.$emit('update:active', true);
                }
                if (this.draggable) {
                    this.dragEnable = true;
                }
                this.mouseClickPosition.mouseX = e.touches ? e.touches[0].pageX : e.pageX;
                this.mouseClickPosition.mouseY = e.touches ? e.touches[0].pageY : e.pageY;
                this.mouseClickPosition.left = this.left;
                this.mouseClickPosition.right = this.right;
                this.mouseClickPosition.top = this.top;
                this.mouseClickPosition.bottom = this.bottom;
                if (this.parent) {
                    this.bounds = this.calcDragLimits();
                }
                (0, dom_1.addEvent)(document.documentElement, eventsFor.move, this.move);
                (0, dom_1.addEvent)(document.documentElement, eventsFor.stop, this.handleUp);
            }
        },
        calcDragLimits: function () {
            return {
                minLeft: this.left % this.grid[0],
                maxLeft: Math.floor((this.parentWidth - this.width - this.left) / this.grid[0]) * this.grid[0] +
                    this.left,
                minRight: this.right % this.grid[0],
                maxRight: Math.floor((this.parentWidth - this.width - this.right) / this.grid[0]) * this.grid[0] +
                    this.right,
                minTop: this.top % this.grid[1],
                maxTop: Math.floor((this.parentHeight - this.height - this.top) / this.grid[1]) * this.grid[1] +
                    this.top,
                minBottom: this.bottom % this.grid[1],
                maxBottom: Math.floor((this.parentHeight - this.height - this.bottom) / this.grid[1]) *
                    this.grid[1] +
                    this.bottom,
            };
        },
        deselect: function (e) {
            var target = e.target || e.srcElement;
            var regex = new RegExp(this.className + '-([trmbl]{2})', '');
            if (!this.$el.contains(target) && !regex.test(target.className)) {
                if (this.enabled && !this.preventDeactivation) {
                    this.enabled = false;
                    this.$emit('deactivated');
                    this.$emit('update:active', false);
                }
                (0, dom_1.removeEvent)(document.documentElement, eventsFor.move, this.handleResize);
            }
            this.resetBoundsAndMouseState();
        },
        handleTouchDown: function (handle, e) {
            eventsFor = events.touch;
            this.handleDown(handle, e);
        },
        handleDown: function (handle, e) {
            if (e instanceof MouseEvent && e.which !== 1) {
                return;
            }
            if (this.onResizeStart(handle, e) === false) {
                return;
            }
            if (e.stopPropagation)
                e.stopPropagation();
            // Here we avoid a dangerous recursion by faking
            // corner handles as middle handles
            if (this.lockAspectRatio && !handle.includes('m')) {
                this.handle = 'm' + handle.substring(1);
            }
            else {
                this.handle = handle;
            }
            this.resizeEnable = true;
            this.mouseClickPosition.mouseX = e.touches ? e.touches[0].pageX : e.pageX;
            this.mouseClickPosition.mouseY = e.touches ? e.touches[0].pageY : e.pageY;
            this.mouseClickPosition.left = this.left;
            this.mouseClickPosition.right = this.right;
            this.mouseClickPosition.top = this.top;
            this.mouseClickPosition.bottom = this.bottom;
            this.bounds = this.calcResizeLimits();
            (0, dom_1.addEvent)(document.documentElement, eventsFor.move, this.handleResize);
            (0, dom_1.addEvent)(document.documentElement, eventsFor.stop, this.handleUp);
        },
        calcResizeLimits: function () {
            var minW = this.minW;
            var minH = this.minH;
            var maxW = this.maxW;
            var maxH = this.maxH;
            var aspectFactor = this.aspectFactor;
            var _a = this.grid, gridX = _a[0], gridY = _a[1];
            var width = this.width;
            var height = this.height;
            var left = this.left;
            var top = this.top;
            var right = this.right;
            var bottom = this.bottom;
            if (this.lockAspectRatio) {
                if (minW / minH > aspectFactor) {
                    minH = minW / aspectFactor;
                }
                else {
                    minW = aspectFactor * minH;
                }
                if (maxW && maxH) {
                    maxW = Math.min(maxW, aspectFactor * maxH);
                    maxH = Math.min(maxH, maxW / aspectFactor);
                }
                else if (maxW) {
                    maxH = maxW / aspectFactor;
                }
                else if (maxH) {
                    maxW = aspectFactor * maxH;
                }
            }
            maxW = maxW - (maxW % gridX);
            maxH = maxH - (maxH % gridY);
            var limits = {
                minLeft: null,
                maxLeft: null,
                minTop: null,
                maxTop: null,
                minRight: null,
                maxRight: null,
                minBottom: null,
                maxBottom: null,
            };
            if (this.parent) {
                limits.minLeft = left % gridX;
                limits.maxLeft = left + Math.floor((width - minW) / gridX) * gridX;
                limits.minTop = top % gridY;
                limits.maxTop = top + Math.floor((height - minH) / gridY) * gridY;
                limits.minRight = right % gridX;
                limits.maxRight = right + Math.floor((width - minW) / gridX) * gridX;
                limits.minBottom = bottom % gridY;
                limits.maxBottom = bottom + Math.floor((height - minH) / gridY) * gridY;
                if (maxW) {
                    limits.minLeft = Math.max(limits.minLeft, this.parentWidth - right - maxW);
                    limits.minRight = Math.max(limits.minRight, this.parentWidth - left - maxW);
                }
                if (maxH) {
                    limits.minTop = Math.max(limits.minTop, this.parentHeight - bottom - maxH);
                    limits.minBottom = Math.max(limits.minBottom, this.parentHeight - top - maxH);
                }
                if (this.lockAspectRatio) {
                    limits.minLeft = Math.max(limits.minLeft, left - top * aspectFactor);
                    limits.minTop = Math.max(limits.minTop, top - left / aspectFactor);
                    limits.minRight = Math.max(limits.minRight, right - bottom * aspectFactor);
                    limits.minBottom = Math.max(limits.minBottom, bottom - right / aspectFactor);
                }
            }
            else {
                limits.minLeft = null;
                limits.maxLeft = left + Math.floor((width - minW) / gridX) * gridX;
                limits.minTop = null;
                limits.maxTop = top + Math.floor((height - minH) / gridY) * gridY;
                limits.minRight = null;
                limits.maxRight = right + Math.floor((width - minW) / gridX) * gridX;
                limits.minBottom = null;
                limits.maxBottom = bottom + Math.floor((height - minH) / gridY) * gridY;
                if (maxW) {
                    limits.minLeft = -(right + maxW);
                    limits.minRight = -(left + maxW);
                }
                if (maxH) {
                    limits.minTop = -(bottom + maxH);
                    limits.minBottom = -(top + maxH);
                }
                if (this.lockAspectRatio && maxW && maxH) {
                    if (typeof limits.minLeft === 'number') {
                        limits.minLeft = Math.min(limits.minLeft, -(right + maxW));
                    }
                    if (typeof limits.minTop === 'number') {
                        limits.minTop = Math.min(limits.minTop, -(maxH + bottom));
                    }
                    if (typeof limits.minRight === 'number') {
                        limits.minRight = Math.min(limits.minRight, -left - maxW);
                    }
                    if (typeof limits.minBottom === 'number') {
                        limits.minBottom = Math.min(limits.minBottom, -top - maxH);
                    }
                }
            }
            return limits;
        },
        move: function (e) {
            if (this.resizing) {
                this.handleResize(e);
            }
            else if (this.dragEnable) {
                this.handleDrag(e);
            }
        },
        handleDrag: function (e) {
            var axis = this.axis;
            var grid = this.grid;
            var bounds = this.bounds;
            var mouseClickPosition = this.mouseClickPosition;
            var tmpDeltaX = axis && axis !== 'y'
                ? mouseClickPosition.mouseX - (e.touches ? e.touches[0].pageX : e.pageX)
                : 0;
            var tmpDeltaY = axis && axis !== 'x'
                ? mouseClickPosition.mouseY - (e.touches ? e.touches[0].pageY : e.pageY)
                : 0;
            var _a = (0, fns_1.snapToGrid)(grid, tmpDeltaX, tmpDeltaY, this.scale), deltaX = _a[0], deltaY = _a[1];
            var left = (0, fns_1.restrictToBounds)(mouseClickPosition.left - deltaX, bounds.minLeft, bounds.maxLeft);
            var top = (0, fns_1.restrictToBounds)(mouseClickPosition.top - deltaY, bounds.minTop, bounds.maxTop);
            if (this.onDrag(left, top) === false) {
                return;
            }
            var right = (0, fns_1.restrictToBounds)(mouseClickPosition.right + deltaX, bounds.minRight, bounds.maxRight);
            var bottom = (0, fns_1.restrictToBounds)(mouseClickPosition.bottom + deltaY, bounds.minBottom, bounds.maxBottom);
            this.left = left;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            console.log('draggingInner', this.left);
            this.$emit('dragging', this.left, this.top);
            this.dragging = true;
        },
        moveHorizontally: function (val) {
            // should calculate with scale 1.
            var _a = (0, fns_1.snapToGrid)(this.grid, val, this.top, 1), deltaX = _a[0], _ = _a[1];
            var left = (0, fns_1.restrictToBounds)(deltaX, this.bounds.minLeft, this.bounds.maxLeft);
            this.left = left;
            this.right = this.parentWidth - this.width - left;
        },
        moveVertically: function (val) {
            // should calculate with scale 1.
            var _a = (0, fns_1.snapToGrid)(this.grid, this.left, val, 1), _ = _a[0], deltaY = _a[1];
            var top = (0, fns_1.restrictToBounds)(deltaY, this.bounds.minTop, this.bounds.maxTop);
            this.top = top;
            this.bottom = this.parentHeight - this.height - top;
        },
        handleResize: function (e) {
            var left = this.left;
            var top = this.top;
            var right = this.right;
            var bottom = this.bottom;
            var mouseClickPosition = this.mouseClickPosition;
            var lockAspectRatio = this.lockAspectRatio;
            var aspectFactor = this.aspectFactor;
            var tmpDeltaX = mouseClickPosition.mouseX - (e.touches ? e.touches[0].pageX : e.pageX);
            var tmpDeltaY = mouseClickPosition.mouseY - (e.touches ? e.touches[0].pageY : e.pageY);
            if (!this.widthTouched && tmpDeltaX) {
                this.widthTouched = true;
            }
            if (!this.heightTouched && tmpDeltaY) {
                this.heightTouched = true;
            }
            var _a = (0, fns_1.snapToGrid)(this.grid, tmpDeltaX, tmpDeltaY, this.scale), deltaX = _a[0], deltaY = _a[1];
            if (this.handle.includes('b')) {
                bottom = (0, fns_1.restrictToBounds)(mouseClickPosition.bottom + deltaY, this.bounds.minBottom, this.bounds.maxBottom);
                if (this.lockAspectRatio && this.resizingOnY) {
                    right = this.right - (this.bottom - bottom) * aspectFactor;
                }
            }
            else if (this.handle.includes('t')) {
                top = (0, fns_1.restrictToBounds)(mouseClickPosition.top - deltaY, this.bounds.minTop, this.bounds.maxTop);
                if (this.lockAspectRatio && this.resizingOnY) {
                    left = this.left - (this.top - top) * aspectFactor;
                }
            }
            if (this.handle.includes('r')) {
                right = (0, fns_1.restrictToBounds)(mouseClickPosition.right + deltaX, this.bounds.minRight, this.bounds.maxRight);
                if (this.lockAspectRatio && this.resizingOnX) {
                    bottom = this.bottom - (this.right - right) / aspectFactor;
                }
            }
            else if (this.handle.includes('l')) {
                left = (0, fns_1.restrictToBounds)(mouseClickPosition.left - deltaX, this.bounds.minLeft, this.bounds.maxLeft);
                if (this.lockAspectRatio && this.resizingOnX) {
                    top = this.top - (this.left - left) / aspectFactor;
                }
            }
            var width = (0, fns_1.computeWidth)(this.parentWidth, left, right);
            var height = (0, fns_1.computeHeight)(this.parentHeight, top, bottom);
            if (this.onResize(this.handle, left, top, width, height) === false) {
                return;
            }
            this.left = left;
            this.top = top;
            this.right = right;
            this.bottom = bottom;
            this.width = width;
            this.height = height;
            this.$emit('resizing', this.left, this.top, this.width, this.height);
            this.resizing = true;
        },
        changeWidth: function (val) {
            // should calculate with scale 1.
            var _a = (0, fns_1.snapToGrid)(this.grid, val, 0, 1), newWidth = _a[0], _ = _a[1];
            var right = (0, fns_1.restrictToBounds)(this.parentWidth - newWidth - this.left, this.bounds.minRight, this.bounds.maxRight);
            var bottom = this.bottom;
            if (this.lockAspectRatio) {
                bottom = this.bottom - (this.right - right) / this.aspectFactor;
            }
            var width = (0, fns_1.computeWidth)(this.parentWidth, this.left, right);
            var height = (0, fns_1.computeHeight)(this.parentHeight, this.top, bottom);
            this.right = right;
            this.bottom = bottom;
            this.width = width;
            this.height = height;
        },
        changeHeight: function (val) {
            // should calculate with scale 1.
            var _a = (0, fns_1.snapToGrid)(this.grid, 0, val, 1), _ = _a[0], newHeight = _a[1];
            var bottom = (0, fns_1.restrictToBounds)(this.parentHeight - newHeight - this.top, this.bounds.minBottom, this.bounds.maxBottom);
            var right = this.right;
            if (this.lockAspectRatio) {
                right = this.right - (this.bottom - bottom) * this.aspectFactor;
            }
            var width = (0, fns_1.computeWidth)(this.parentWidth, this.left, right);
            var height = (0, fns_1.computeHeight)(this.parentHeight, this.top, bottom);
            this.right = right;
            this.bottom = bottom;
            this.width = width;
            this.height = height;
        },
        handleUp: function (e) {
            this.handle = null;
            this.resetBoundsAndMouseState();
            this.dragEnable = false;
            this.resizeEnable = false;
            if (this.resizing) {
                this.resizing = false;
                this.$emit('resizestop', this.left, this.top, this.width, this.height);
            }
            if (this.dragging) {
                this.dragging = false;
                this.$emit('dragstop', this.left, this.top);
            }
            (0, dom_1.removeEvent)(document.documentElement, eventsFor.move, this.handleResize);
        },
    },
    computed: {
        style: function () {
            return (0, tslib_1.__assign)({ width: this.computedWidth, height: this.computedHeight, zIndex: this.zIndex }, (this.dragging && this.disableUserSelect ? userSelectNone : userSelectAuto));
        },
        actualHandles: function () {
            if (!this.resizable)
                return [];
            return this.handles;
        },
        computedWidth: function () {
            if (this.w === 'auto') {
                if (!this.widthTouched) {
                    return 'auto';
                }
            }
            return this.width + 'px';
        },
        computedHeight: function () {
            if (this.h === 'auto') {
                if (!this.heightTouched) {
                    return 'auto';
                }
            }
            return this.height + 'px';
        },
        resizingOnX: function () {
            return Boolean(this.handle) && (this.handle.includes('l') || this.handle.includes('r'));
        },
        resizingOnY: function () {
            return Boolean(this.handle) && (this.handle.includes('t') || this.handle.includes('b'));
        },
        isCornerHandle: function () {
            return Boolean(this.handle) && ['tl', 'tr', 'br', 'bl'].includes(this.handle);
        },
    },
    watch: {
        active: function (val) {
            this.enabled = val;
            if (val) {
                this.$emit('activated');
            }
            else {
                this.$emit('deactivated');
            }
        },
        z: function (val) {
            if (val >= 0 || val === 'auto') {
                this.zIndex = val;
            }
        },
        x: function (val) {
            if (this.resizing || this.dragging) {
                return;
            }
            if (this.parent) {
                this.bounds = this.calcDragLimits();
            }
            this.moveHorizontally(val);
        },
        y: function (val) {
            if (this.resizing || this.dragging) {
                return;
            }
            if (this.parent) {
                this.bounds = this.calcDragLimits();
            }
            this.moveVertically(val);
        },
        lockAspectRatio: function (val) {
            if (val) {
                this.aspectFactor = this.width / this.height;
            }
            else {
                this.aspectFactor = undefined;
            }
        },
        minWidth: function (val) {
            if (val > 0 && val <= this.width) {
                this.minW = val;
            }
        },
        minHeight: function (val) {
            if (val > 0 && val <= this.height) {
                this.minH = val;
            }
        },
        maxWidth: function (val) {
            this.maxW = val;
        },
        maxHeight: function (val) {
            this.maxH = val;
        },
        w: function (val) {
            if (this.resizing || this.dragging) {
                return;
            }
            if (this.parent) {
                this.bounds = this.calcResizeLimits();
            }
            this.changeWidth(val);
        },
        h: function (val) {
            if (this.resizing || this.dragging) {
                return;
            }
            if (this.parent) {
                this.bounds = this.calcResizeLimits();
            }
            this.changeHeight(val);
        },
    },
    render: function () {
        var _a;
        var _this = this;
        var _b, _c;
        return (<div style={this.style} 
        // @ts-ignore
        class={[
                (_a = {},
                    _a[this.classNameActive] = this.enabled,
                    _a[this.classNameDragging] = this.dragging,
                    _a[this.classNameResizing] = this.resizing,
                    _a[this.classNameDraggable] = this.draggable,
                    _a[this.classNameResizable] = this.resizable,
                    _a),
                this.className,
            ]} onMousedown={this.elementMouseDown} onTouchstart={this.elementTouchDown}>
        {this.actualHandles.map(function (handle) {
                var _a, _b;
                return (<div key={handle} 
                // @ts-ignore
                class={[_this.classNameHandle, _this.classNameHandle + '-' + handle]} style={{ display: _this.enabled ? 'block' : 'none' }} onMousedown={function (e) {
                        e.stopPropagation();
                        _this.handleDown(handle, e);
                    }} onTouchstart={function (e) {
                        e.stopPropagation();
                        _this.handleTouchDown(handle, e);
                    }}>
            {(_b = (_a = _this.$slots) === null || _a === void 0 ? void 0 : _a[handle]) === null || _b === void 0 ? void 0 : _b.call(_a)}
          </div>);
            })}
        {(_c = (_b = this.$slots) === null || _b === void 0 ? void 0 : _b.default) === null || _c === void 0 ? void 0 : _c.call(_b)}
      </div>);
    },
});
//# sourceMappingURL=VueDraggableResizable.jsx.map