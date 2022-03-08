"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var uuid_1 = require("uuid");
var algebra_js_1 = (0, tslib_1.__importDefault)(require("algebra.js"));
var proj_js_1 = require("ol/proj.js");
var util_1 = (0, tslib_1.__importDefault)(require("./util"));
/**
 * AnimationManager
 * @class AnimationManager
 * @classdesc 地图轨迹播放动画
 */
var AnimationManager = /** @class */ (function () {
    // runing: boolean;
    // vectorSource: any;
    // animationMap: {};
    // preAnimations: any[];
    // pointsMapIndex: any;
    // preActiveId: string | undefined;
    // handler: any;
    // lines: any;
    // pref: any;
    // config: {
    //   arrowImg: '';
    //   pointImg: '';
    //   lineWidth: 8,
    //   lineColor: '#FF5D00',
    // };
    function AnimationManager(vectorSource, config) {
        this.runing = false;
        this.vectorSource = vectorSource;
        this.animationMap = [];
        this.preAnimations = [];
        this.config = config;
    }
    AnimationManager.prototype.isRun = function () {
        return this.runing;
    };
    AnimationManager.prototype.getPoints = function (locations) {
        console.log('locations', locations);
        var distance = 0;
        // let speed = 0;
        var addPoints = [];
        this.animationMap = [];
        for (var i = locations.length - 1; i >= 1; i--) {
            var startPoint = (0, proj_js_1.fromLonLat)(locations[i]);
            var endPoint = (0, proj_js_1.fromLonLat)(locations[i - 1]);
            // 距离
            var xDistance = Math.abs(startPoint[0] - endPoint[0]);
            distance += xDistance;
        }
        var speed = Math.floor(distance / (locations.length * 80));
        if (speed === 0) {
            speed = 0.01;
        }
        this.animationMap[0] = locations.length - 1;
        for (var i = locations.length - 1; i >= 1; i--) {
            var startPoint = (0, proj_js_1.fromLonLat)(locations[i]);
            var endPoint = (0, proj_js_1.fromLonLat)(locations[i - 1]);
            var xDirection = startPoint[0] < endPoint[0] ? '->' : '<-';
            var yDirection = startPoint[1] < endPoint[1] ? '->' : '<-';
            // 同一个点没有轨迹
            // eslint-disable-next-line no-continue
            if (startPoint[0] === endPoint[0] && startPoint[1] === endPoint[1])
                continue;
            // 垂直的
            if (startPoint[0] === endPoint[0] && startPoint[1] !== endPoint[1]) {
                // 距离
                var xdistance = Math.abs(startPoint[1] - endPoint[1]);
                // 段数
                var interval = Math.floor(xdistance / speed);
                if (xdistance % speed > 0) {
                    interval += 1;
                }
                for (var j = 1; j <= interval; j++) {
                    var x = startPoint[0];
                    var y = void 0;
                    if (yDirection === '->') {
                        if (j * speed > xdistance) {
                            // eslint-disable-next-line prefer-destructuring
                            x = endPoint[0];
                            // eslint-disable-next-line prefer-destructuring
                            y = endPoint[1];
                        }
                        else {
                            y = startPoint[1] + j * speed;
                        }
                    }
                    else if (yDirection === '<-') {
                        if (j * speed > xdistance) {
                            // eslint-disable-next-line prefer-destructuring
                            x = endPoint[0];
                            // eslint-disable-next-line prefer-destructuring
                            y = endPoint[1];
                        }
                        else {
                            y = startPoint[1] - j * speed;
                        }
                    }
                    addPoints.push([x, y]);
                }
            }
            else if (startPoint[0] !== endPoint[0] && startPoint[1] === endPoint[1]) {
                // 水平的
                // 距离
                var xDistance = Math.abs(startPoint[0] - endPoint[0]);
                // 段数
                var interval = Math.floor(xDistance / speed);
                if (xDistance % speed > 0) {
                    interval += 1;
                }
                for (var j = 1; j <= interval; j++) {
                    var x = void 0;
                    var y = startPoint[1];
                    if (xDirection === '->') {
                        if (j * speed > xDistance) {
                            // eslint-disable-next-line prefer-destructuring
                            x = endPoint[0];
                            // eslint-disable-next-line prefer-destructuring
                            y = endPoint[1];
                        }
                        else {
                            x = startPoint[0] + j * speed;
                        }
                    }
                    else if (xDirection === '<-') {
                        if (j * speed > xDistance) {
                            // eslint-disable-next-line prefer-destructuring
                            x = endPoint[0];
                            // eslint-disable-next-line prefer-destructuring
                            y = endPoint[1];
                        }
                        else {
                            x = startPoint[0] - j * speed;
                        }
                    }
                    addPoints.push([x, y]);
                }
            }
            else {
                // 有角度的
                // 距离
                var time = 5 * 30;
                var xDistance = Math.abs(startPoint[0] - endPoint[0]);
                speed = xDistance / time;
                // 段数
                var interval = Math.floor(xDistance / speed);
                if (xDistance % speed > 0) {
                    interval += 1;
                }
                var Equation = algebra_js_1.default.Equation;
                //= ======================================
                var x1 = algebra_js_1.default.parse("".concat(startPoint[1], "=").concat(startPoint[0], "k+b"));
                var answer1 = x1.solveFor('k');
                // console.log(`k = ${answer1.toString()}`);
                var x2 = algebra_js_1.default.parse("".concat(endPoint[1], "=").concat(endPoint[0], "k+b"));
                var answer2 = x2.solveFor('k');
                // console.log(`k = ${answer2.toString()}`);
                //= ================================================
                // 解出b值
                var eq = new Equation(answer1, answer2);
                // console.log(`b表达式：${eq.toString()}`);
                var answerX = eq.solveFor('b');
                // console.log(`解出B的值为：${answerX.toString()}`);
                //= ================================================
                // 解出Y值（把x的值代入x1或x2）
                eq = x1.eval({
                    b: answerX,
                });
                // console.log(`k表达式：${eq.toString()}`);
                var answerY = eq.solveFor('k');
                // console.log(`解出k的值为：${answerY.toString()}`);
                // eslint-disable-next-line no-eval
                var b = eval(answerX.toString());
                // eslint-disable-next-line no-eval
                var k = eval(answerY.toString());
                for (var j = 1; j <= interval; j++) {
                    var x = void 0;
                    var y = void 0;
                    if (xDirection === '->') {
                        if (j * speed > xDistance) {
                            // eslint-disable-next-line prefer-destructuring
                            x = endPoint[0];
                            // eslint-disable-next-line prefer-destructuring
                            y = endPoint[1];
                        }
                        else {
                            x = startPoint[0] + j * speed;
                            y = k * x + b;
                        }
                    }
                    else if (xDirection === '<-') {
                        if (j * speed > xDistance) {
                            // eslint-disable-next-line prefer-destructuring
                            x = endPoint[0];
                            // eslint-disable-next-line prefer-destructuring
                            y = endPoint[1];
                        }
                        else {
                            x = startPoint[0] - j * speed;
                            y = k * x + b;
                        }
                    }
                    addPoints.push([x, y]);
                }
            }
            this.animationMap[addPoints.length - 1] = i - 1;
        }
        return addPoints;
    };
    // eslint-disable-next-line consistent-return
    AnimationManager.prototype.run = function (lineData, pointsMapIndex) {
        var _this = this;
        if (!lineData || this.runing)
            return false;
        this.runing = true;
        this.pointsMapIndex = pointsMapIndex;
        var it = lineData.values();
        this.loopTask(it).then(function () {
            // 所有动画完成
            _this.runing = false;
            console.log('finish');
        });
    };
    AnimationManager.prototype.loopTask = function (it) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var entry = it.next();
            if (entry.done) {
                resolve();
            }
            else {
                var lines = entry.value;
                var points = _this.getPoints(lines);
                _this.runTask(points)
                    .then(function () {
                    _this.loopTask(it).then(function () {
                        resolve();
                    });
                })
                    .catch(function (error) {
                    reject(error);
                });
            }
        });
    };
    AnimationManager.prototype.runTask = function (points) {
        var _this = this;
        this.preActiveId = '';
        // eslint-disable-next-line no-unused-vars,consistent-return
        return new Promise(function (resolve) {
            var self = _this;
            if (!points.length) {
                resolve();
                return false;
            }
            var topIndex = 0;
            _this.pref = null;
            _this.lines = [];
            _this.handler = null;
            // eslint-disable-next-line consistent-return
            function loop() {
                if (topIndex === points.length) {
                    self.stopTask();
                    if (self.preAnimations) {
                        self.preAnimations.forEach(function (p) {
                            self.vectorSource.removeFeature(p);
                        });
                        self.preAnimations = [];
                    }
                    resolve();
                    return false;
                }
                if (self.pref) {
                    self.vectorSource.removeFeature(self.pref);
                }
                var point = points[topIndex];
                var rotation = 0;
                if (topIndex !== 0) {
                    var line = util_1.default.drawLine({
                        points: [points[topIndex - 1], points[topIndex]],
                        width: self.config.lineWidth,
                        color: self.config.lineColor,
                    });
                    self.vectorSource.addFeature(line);
                    self.lines.push(line);
                    var prePoint = points[topIndex - 1];
                    var dx = point[0] - prePoint[0];
                    var dy = point[1] - prePoint[1];
                    rotation = Math.atan2(dy, dx);
                }
                if (self.animationMap[topIndex] || self.animationMap[topIndex] === 0) {
                    if (self.preActiveId) {
                        var preFeature = self.vectorSource.getFeatureById(self.preActiveId);
                        self.vectorSource.removeFeature(preFeature);
                        self.preActiveId = '';
                    }
                    var pointConfig = self.pointsMapIndex[self.animationMap[topIndex]];
                    if (pointConfig) {
                        var id = "active_".concat(pointConfig.id);
                        var node = util_1.default.drawImagePoint((0, tslib_1.__assign)((0, tslib_1.__assign)({}, pointConfig), { id: id, src: self.config.pointImg, zIndex: pointConfig.zIndex + 10 }));
                        self.vectorSource.addFeature(node);
                        self.preActiveId = id;
                    }
                }
                var f = util_1.default.drawImagePoint({
                    id: (0, uuid_1.v1)(),
                    pos: point,
                    src: self.config.arrowImg,
                    scale: 1,
                    zIndex: 1000,
                    rotation: -rotation,
                });
                self.vectorSource.addFeature(f);
                self.pref = f;
                // eslint-disable-next-line no-plusplus
                ++topIndex;
                self.handler = requestAnimationFrame(loop);
            }
            self.handler = requestAnimationFrame(loop);
        });
    };
    // eslint-disable-next-line consistent-return
    AnimationManager.prototype.stopTask = function () {
        if (!this.runing)
            return false;
        if (this.handler) {
            cancelAnimationFrame(this.handler);
        }
        if (this.pref) {
            this.vectorSource.removeFeature(this.pref);
        }
        if (this.lines) {
            for (var i = 0; i < this.lines.length; i++) {
                this.vectorSource.removeFeature(this.lines[i]);
            }
        }
        if (this.preActiveId) {
            var preFeature = this.vectorSource.getFeatureById(this.preActiveId);
            this.vectorSource.removeFeature(preFeature);
            this.preActiveId = '';
        }
    };
    AnimationManager.prototype.stop = function () {
        this.stopTask();
        this.runing = false;
    };
    return AnimationManager;
}());
exports.default = AnimationManager;
//# sourceMappingURL=animationmanager.js.map