import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.regexp.to-string.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.promise.js";import"core-js/modules/web.dom-collections.for-each.js";import{__assign}from"tslib";import algebra from"algebra.js";import{fromLonLat}from"ol/proj.js";import{v1}from"uuid";import Util from"./util";var AnimationManager=function(){function AnimationManager(t,e){this.runing=!1,this.vectorSource=t,this.animationMap=[],this.preAnimations=[],this.config=e}return AnimationManager.prototype.isRun=function(){return this.runing},AnimationManager.prototype.getPoints=function(locations){console.log("locations",locations);var distance=0,addPoints=[];this.animationMap=[];for(var i=locations.length-1;1<=i;i--){var startPoint=fromLonLat(locations[i]),endPoint=fromLonLat(locations[i-1]),xDistance=Math.abs(startPoint[0]-endPoint[0]);distance+=xDistance}var speed=Math.floor(distance/(80*locations.length));0===speed&&(speed=.01),this.animationMap[0]=locations.length-1;for(var i=locations.length-1;1<=i;i--){var startPoint=fromLonLat(locations[i]),endPoint=fromLonLat(locations[i-1]),xDirection=startPoint[0]<endPoint[0]?"->":"<-",yDirection=startPoint[1]<endPoint[1]?"->":"<-";if(startPoint[0]!==endPoint[0]||startPoint[1]!==endPoint[1]){if(startPoint[0]===endPoint[0]&&startPoint[1]!==endPoint[1]){var xdistance=Math.abs(startPoint[1]-endPoint[1]),interval=Math.floor(xdistance/speed);0<xdistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=startPoint[0],y=void 0;"->"===yDirection?y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]+j*speed:"<-"===yDirection&&(y=xdistance<j*speed?(x=endPoint[0],endPoint[1]):startPoint[1]-j*speed),addPoints.push([x,y])}}else if(startPoint[0]!==endPoint[0]&&startPoint[1]===endPoint[1]){var xDistance=Math.abs(startPoint[0]-endPoint[0]),interval=Math.floor(xDistance/speed);0<xDistance%speed&&(interval+=1);for(var j=1;j<=interval;j++){var x=void 0,y=startPoint[1];"->"===xDirection?xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]+j*speed:"<-"===xDirection&&(xDistance<j*speed?(x=endPoint[0],y=endPoint[1]):x=startPoint[0]-j*speed),addPoints.push([x,y])}}else{var time=150,xDistance=Math.abs(startPoint[0]-endPoint[0]),speed=xDistance/time,interval=Math.floor(xDistance/speed);0<xDistance%speed&&(interval+=1);for(var Equation=algebra.Equation,x1=algebra.parse(startPoint[1]+"="+startPoint[0]+"k+b"),answer1=x1.solveFor("k"),x2=algebra.parse(endPoint[1]+"="+endPoint[0]+"k+b"),answer2=x2.solveFor("k"),eq=new Equation(answer1,answer2),answerX=eq.solveFor("b"),eq=x1.eval({b:answerX}),answerY=eq.solveFor("k"),b=eval(answerX.toString()),k=eval(answerY.toString()),j=1;j<=interval;j++){var x=void 0,y=void 0;"->"===xDirection?y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]+j*speed,k*x+b):"<-"===xDirection&&(y=xDistance<j*speed?(x=endPoint[0],endPoint[1]):(x=startPoint[0]-j*speed,k*x+b)),addPoints.push([x,y])}}this.animationMap[addPoints.length-1]=i-1}}return addPoints},AnimationManager.prototype.run=function(t,e){var n=this;if(!t||this.runing)return!1;this.runing=!0,this.pointsMapIndex=e;t=t.values();this.loopTask(t).then(function(){n.runing=!1,console.log("finish")})},AnimationManager.prototype.loopTask=function(i){var o=this;return new Promise(function(t,e){var n=i.next();n.done?t():(n=n.value,n=o.getPoints(n),o.runTask(n).then(function(){o.loopTask(i).then(function(){t()})}).catch(function(t){e(t)}))})},AnimationManager.prototype.runTask=function(c){var t=this;return this.preActiveId="",new Promise(function(a){var s=t;if(!c.length)return a(),!1;var d=0;t.pref=null,t.lines=[],t.handler=null,s.handler=requestAnimationFrame(function t(){if(d===c.length)return s.stopTask(),s.preAnimations&&(s.preAnimations.forEach(function(t){s.vectorSource.removeFeature(t)}),s.preAnimations=[]),a(),!1;s.pref&&s.vectorSource.removeFeature(s.pref);var e,n,i,o=c[d],r=0;0!==d&&(i=Util.drawLine({points:[c[d-1],c[d]],width:s.config.lineWidth,color:s.config.lineColor}),s.vectorSource.addFeature(i),s.lines.push(i),e=c[d-1],i=o[0]-e[0],e=o[1]-e[1],r=Math.atan2(e,i)),!s.animationMap[d]&&0!==s.animationMap[d]||(s.preActiveId&&(n=s.vectorSource.getFeatureById(s.preActiveId),s.vectorSource.removeFeature(n),s.preActiveId=""),(i=s.pointsMapIndex[s.animationMap[d]])&&(n="active_"+i.id,i=Util.drawImagePoint(__assign(__assign({},i),{id:n,src:s.config.pointImg,zIndex:i.zIndex+10})),s.vectorSource.addFeature(i),s.preActiveId=n));r=Util.drawImagePoint({id:v1(),pos:o,src:s.config.arrowImg,scale:1,zIndex:1e3,rotation:-r});s.vectorSource.addFeature(r),s.pref=r,++d,s.handler=requestAnimationFrame(t)})})},AnimationManager.prototype.stopTask=function(){if(!this.runing)return!1;if(this.handler&&cancelAnimationFrame(this.handler),this.pref&&this.vectorSource.removeFeature(this.pref),this.lines)for(var t=0;t<this.lines.length;t++)this.vectorSource.removeFeature(this.lines[t]);var e;this.preActiveId&&(e=this.vectorSource.getFeatureById(this.preActiveId),this.vectorSource.removeFeature(e),this.preActiveId="")},AnimationManager.prototype.stop=function(){this.stopTask(),this.runing=!1},AnimationManager}();export default AnimationManager;
//# sourceMappingURL=animationmanager.js.map
