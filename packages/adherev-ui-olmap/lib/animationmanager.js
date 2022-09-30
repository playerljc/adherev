"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.array.concat.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.regexp.to-string.js"),require("core-js/modules/es.array.iterator.js"),require("core-js/modules/web.dom-collections.iterator.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/web.dom-collections.for-each.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),algebra_js_1=(0,tslib_1.__importDefault)(require("algebra.js")),proj_js_1=require("ol/proj.js"),uuid_1=require("uuid"),util_1=(0,tslib_1.__importDefault)(require("./util")),AnimationManager=function(){function AnimationManager(e,t){this.runing=!1,this.vectorSource=e,this.animationMap=[],this.preAnimations=[],this.config=t}return AnimationManager.prototype.isRun=function(){return this.runing},AnimationManager.prototype.getPoints=function(locations){console.log("locations",locations);var distance=0,addPoints=[];this.animationMap=[];for(var i=locations.length-1;1<=i;i--){var startPoint=(0,proj_js_1.fromLonLat)(locations[i]),endPoint=(0,proj_js_1.fromLonLat)(locations[i-1]),xDistance=Math.abs(startPoint[0]-endPoint[0]);distance+=xDistance}var speed=Math.floor(distance/(80*locations.length));0===speed&&(speed=.01),this.animationMap[0]=locations.length-1;for(var i=locations.length-1;1<=i;i--){var startPoint=(0,proj_js_1.fromLonLat)(locations[i]),endPoint=(0,proj_js_1.fromLonLat)(locations[i-1]),xDirection=startPoint[0]<endPoint[0]?"->":"<-",yDirection=startPoint[1]<endPoint[1]?"->":"<-";if(startPoint[0]!==endPoint[0]||startPoint[1]!==endPoint[1]){if(startPoint[0]===endPoint[0]&&startPoint[1]!==endPoint[1]){var xdistance=Math.abs(startPoint[1]-endPoint[1]),interval=Math.floor(xdistance/speed);0<xdistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=startPoint[0],y=void 0;"->"===yDirection?y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]+j*speed:"<-"===yDirection&&(y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]-j*speed),addPoints.push([x,y])}}else if(startPoint[0]!==endPoint[0]&&startPoint[1]===endPoint[1]){var xDistance=Math.abs(startPoint[0]-endPoint[0]),interval=Math.floor(xDistance/speed);0<xDistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=void 0,y=startPoint[1];"->"===xDirection?xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]+j*speed:"<-"===xDirection&&(xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]-j*speed),addPoints.push([x,y])}}else for(var time=150,xDistance=Math.abs(startPoint[0]-endPoint[0]),speed=xDistance/time,interval=Math.floor(xDistance/speed),Equation=(0<xDistance%speed&&(interval+=1),algebra_js_1.default.Equation),x1=algebra_js_1.default.parse("".concat(startPoint[1],"=").concat(startPoint[0],"k+b")),answer1=x1.solveFor("k"),x2=algebra_js_1.default.parse("".concat(endPoint[1],"=").concat(endPoint[0],"k+b")),answer2=x2.solveFor("k"),eq=new Equation(answer1,answer2),answerX=eq.solveFor("b"),eq=x1.eval({b:answerX}),answerY=eq.solveFor("k"),b=eval(answerX.toString()),k=eval(answerY.toString()),j=1;j<=interval;j++){var x=void 0,y=void 0;"->"===xDirection?y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]+j*speed,k*x+b):"<-"===xDirection&&(y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]-j*speed,k*x+b)),addPoints.push([x,y])}this.animationMap[addPoints.length-1]=i-1}}return addPoints},AnimationManager.prototype.run=function(e,t){var n=this;if(!e||this.runing)return!1;this.runing=!0,this.pointsMapIndex=t;t=e.values();this.loopTask(t).then(function(){n.runing=!1,console.log("finish")})},AnimationManager.prototype.loopTask=function(i){var o=this;return new Promise(function(e,t){var n=i.next();n.done?e():(n=n.value,n=o.getPoints(n),o.runTask(n).then(function(){o.loopTask(i).then(function(){e()})}).catch(function(e){t(e)}))})},AnimationManager.prototype.runTask=function(c){var e=this;return this.preActiveId="",new Promise(function(r){var a=e;if(!c.length)return r(),!1;var s=0;e.pref=null,e.lines=[],e.handler=null,a.handler=requestAnimationFrame(function e(){if(s===c.length)return a.stopTask(),a.preAnimations&&(a.preAnimations.forEach(function(e){a.vectorSource.removeFeature(e)}),a.preAnimations=[]),r(),!1;a.pref&&a.vectorSource.removeFeature(a.pref);var t,n=c[s],i=0,o=(0!==s&&(t=util_1.default.drawLine({points:[c[s-1],c[s]],width:a.config.lineWidth,color:a.config.lineColor}),a.vectorSource.addFeature(t),a.lines.push(t),t=c[s-1],o=n[0]-t[0],t=n[1]-t[1],i=Math.atan2(t,o)),!a.animationMap[s]&&0!==a.animationMap[s]||(a.preActiveId&&(t=a.vectorSource.getFeatureById(a.preActiveId),a.vectorSource.removeFeature(t),a.preActiveId=""),(o=a.pointsMapIndex[a.animationMap[s]])&&(t="active_".concat(o.id),o=util_1.default.drawImagePoint((0,tslib_1.__assign)((0,tslib_1.__assign)({},o),{id:t,src:a.config.pointImg,zIndex:o.zIndex+10})),a.vectorSource.addFeature(o),a.preActiveId=t)),util_1.default.drawImagePoint({id:(0,uuid_1.v1)(),pos:n,src:a.config.arrowImg,scale:1,zIndex:1e3,rotation:-i}));a.vectorSource.addFeature(o),a.pref=o,++s,a.handler=requestAnimationFrame(e)})})},AnimationManager.prototype.stopTask=function(){if(!this.runing)return!1;if(this.handler&&cancelAnimationFrame(this.handler),this.pref&&this.vectorSource.removeFeature(this.pref),this.lines)for(var e=0;e<this.lines.length;e++)this.vectorSource.removeFeature(this.lines[e]);var t;this.preActiveId&&(t=this.vectorSource.getFeatureById(this.preActiveId),this.vectorSource.removeFeature(t),this.preActiveId="")},AnimationManager.prototype.stop=function(){this.stopTask(),this.runing=!1},AnimationManager}();exports.default=AnimationManager;
//# sourceMappingURL=animationmanager.js.map
