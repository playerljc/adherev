import"core-js/modules/es.array.concat.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.promise.js";import"core-js/modules/web.dom-collections.for-each.js";import{__assign}from"tslib";import algebra from"algebra.js";import{fromLonLat}from"ol/proj.js";import{v1}from"uuid";import Util from"./util";var AnimationManager=function(){function AnimationManager(t,n){this.runing=!1,this.vectorSource=t,this.animationMap=[],this.preAnimations=[],this.config=n}return AnimationManager.prototype.isRun=function(){return this.runing},AnimationManager.prototype.getPoints=function(locations){console.log("locations",locations);var distance=0,addPoints=[];this.animationMap=[];for(var i=locations.length-1;1<=i;i--){var startPoint=fromLonLat(locations[i]),endPoint=fromLonLat(locations[i-1]),xDistance=Math.abs(startPoint[0]-endPoint[0]);distance+=xDistance}var speed=Math.floor(distance/(80*locations.length));0===speed&&(speed=.01),this.animationMap[0]=locations.length-1;for(var i=locations.length-1;1<=i;i--){var startPoint=fromLonLat(locations[i]),endPoint=fromLonLat(locations[i-1]),xDirection=startPoint[0]<endPoint[0]?"->":"<-",yDirection=startPoint[1]<endPoint[1]?"->":"<-";if(startPoint[0]!==endPoint[0]||startPoint[1]!==endPoint[1]){if(startPoint[0]===endPoint[0]&&startPoint[1]!==endPoint[1]){var xdistance=Math.abs(startPoint[1]-endPoint[1]),interval=Math.floor(xdistance/speed);0<xdistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=startPoint[0],y=void 0;"->"===yDirection?y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]+j*speed:"<-"===yDirection&&(y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]-j*speed),addPoints.push([x,y])}}else if(startPoint[0]!==endPoint[0]&&startPoint[1]===endPoint[1]){var xDistance=Math.abs(startPoint[0]-endPoint[0]),interval=Math.floor(xDistance/speed);0<xDistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=void 0,y=startPoint[1];"->"===xDirection?xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]+j*speed:"<-"===xDirection&&(xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]-j*speed),addPoints.push([x,y])}}else for(var time=150,xDistance=Math.abs(startPoint[0]-endPoint[0]),speed=xDistance/time,interval=Math.floor(xDistance/speed),Equation=(0<xDistance%speed&&(interval+=1),algebra.Equation),x1=algebra.parse("".concat(startPoint[1],"=").concat(startPoint[0],"k+b")),answer1=x1.solveFor("k"),x2=algebra.parse("".concat(endPoint[1],"=").concat(endPoint[0],"k+b")),answer2=x2.solveFor("k"),eq=new Equation(answer1,answer2),answerX=eq.solveFor("b"),eq=x1.eval({b:answerX}),answerY=eq.solveFor("k"),b=eval(answerX.toString()),k=eval(answerY.toString()),j=1;j<=interval;j++){var x=void 0,y=void 0;"->"===xDirection?y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]+j*speed,k*x+b):"<-"===xDirection&&(y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]-j*speed,k*x+b)),addPoints.push([x,y])}this.animationMap[addPoints.length-1]=i-1}}return addPoints},AnimationManager.prototype.run=function(t,n){var e=this;if(!t||this.runing)return!1;this.runing=!0,this.pointsMapIndex=n;n=t.values();this.loopTask(n).then(function(){e.runing=!1,console.log("finish")})},AnimationManager.prototype.loopTask=function(i){var o=this;return new Promise(function(t,n){var e=i.next();e.done?t():(e=e.value,e=o.getPoints(e),o.runTask(e).then(function(){o.loopTask(i).then(function(){t()})}).catch(function(t){n(t)}))})},AnimationManager.prototype.runTask=function(c){var t=this;return this.preActiveId="",new Promise(function(r){var a=t;if(!c.length)return r(),!1;var s=0;t.pref=null,t.lines=[],t.handler=null,a.handler=requestAnimationFrame(function t(){if(s===c.length)return a.stopTask(),a.preAnimations&&(a.preAnimations.forEach(function(t){a.vectorSource.removeFeature(t)}),a.preAnimations=[]),r(),!1;a.pref&&a.vectorSource.removeFeature(a.pref);var n,e=c[s],i=0,o=(0!==s&&(n=Util.drawLine({points:[c[s-1],c[s]],width:a.config.lineWidth,color:a.config.lineColor}),a.vectorSource.addFeature(n),a.lines.push(n),n=c[s-1],o=e[0]-n[0],n=e[1]-n[1],i=Math.atan2(n,o)),!a.animationMap[s]&&0!==a.animationMap[s]||(a.preActiveId&&(n=a.vectorSource.getFeatureById(a.preActiveId),a.vectorSource.removeFeature(n),a.preActiveId=""),(o=a.pointsMapIndex[a.animationMap[s]])&&(n="active_".concat(o.id),o=Util.drawImagePoint(__assign(__assign({},o),{id:n,src:a.config.pointImg,zIndex:o.zIndex+10})),a.vectorSource.addFeature(o),a.preActiveId=n)),Util.drawImagePoint({id:v1(),pos:e,src:a.config.arrowImg,scale:1,zIndex:1e3,rotation:-i}));a.vectorSource.addFeature(o),a.pref=o,++s,a.handler=requestAnimationFrame(t)})})},AnimationManager.prototype.stopTask=function(){if(!this.runing)return!1;if(this.handler&&cancelAnimationFrame(this.handler),this.pref&&this.vectorSource.removeFeature(this.pref),this.lines)for(var t=0;t<this.lines.length;t++)this.vectorSource.removeFeature(this.lines[t]);var n;this.preActiveId&&(n=this.vectorSource.getFeatureById(this.preActiveId),this.vectorSource.removeFeature(n),this.preActiveId="")},AnimationManager.prototype.stop=function(){this.stopTask(),this.runing=!1},AnimationManager}();export default AnimationManager;
//# sourceMappingURL=animationmanager.js.map
