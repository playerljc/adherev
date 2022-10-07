import"core-js/modules/es.number.constructor.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.map.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/esnext.map.delete-all.js";import"core-js/modules/esnext.map.every.js";import"core-js/modules/esnext.map.filter.js";import"core-js/modules/esnext.map.find.js";import"core-js/modules/esnext.map.find-key.js";import"core-js/modules/esnext.map.includes.js";import"core-js/modules/esnext.map.key-of.js";import"core-js/modules/esnext.map.map-keys.js";import"core-js/modules/esnext.map.map-values.js";import"core-js/modules/esnext.map.merge.js";import"core-js/modules/esnext.map.reduce.js";import"core-js/modules/esnext.map.some.js";import"core-js/modules/esnext.map.update.js";import"core-js/modules/web.dom-collections.iterator.js";import{__assign}from"tslib";import debounce from"lodash/debounce";import{ResizeObserver}from"@juggle/resize-observer";import{Mode}from"./types";var selectorPrefix="adherev-ui-writingboard",BackTopAnimation={name:"adv-writingboard",props:{defaultMode:{type:String,default:Mode.FREE},defaultStrokeStyle:{type:String,default:"#000"},defaultLineWidth:{type:Number,default:2},resizeTime:{type:Number,default:300}},data:function(){return{$stack:[],$ctx:null,$ro:null,$config:null,$curShape:null,$lineWidth:null,$strokeStyle:null,$startPoint:null,$prePoint:null,$stackIndex:0}},methods:{drawStack:function(){for(var t=0;t<this.$data.$stack.length;t++){var e=this.$data.$stack[t];this.$data.$config.get(e.shape).drawStack(e)}},style:function(t){var e=t.lineWidth,t=t.strokeStyle;this.$data.$ctx.lineWidth=e,this.$data.$ctx.strokeStyle=t,this.$data.$ctx.lineCap="round",this.$data.$ctx.lineJoin="round"},triangle:function(t){var e=t.startPoint,a=t.targetPoint,i=this.getPoint({startPoint:e,targetPoint:a}),t=Math.abs(a.x-e.x),e=Math.abs(a.y-e.y);return[{x:i.x,y:i.y+e},{x:i.x+t/2,y:i.y},{x:i.x+t,y:i.y+e}]},devicePointToCanvasPoint:function(t){var e=t.clientX,a=t.clientY,t=this.$refs.canvasRef.getBoundingClientRect();return{x:e-t.x,y:a-t.y}},getDistanceByBetweenPoint:function(t){var e=t.p1,a=t.p2,i=e.x,t=e.y,e=a.x,a=a.y;return Math.sqrt(Math.pow(e-i,2)+Math.pow(a-t,2))},getPoint:function(t){var e=t.startPoint,t=t.targetPoint;return t.x<=e.x&&t.y<=e.y?t:t.x<=e.x&&t.y>=e.y?{x:t.x,y:e.y}:t.x>=e.x&&t.y<=e.y?{x:e.x,y:t.y}:t.x>=e.x&&t.y>=e.y?e:void 0},draw:function(t){var e=t.sourcePoint,t=t.targetPoint;this.$data.$config.get(this.$data.$curShape).draw({sourcePoint:e,targetPoint:t})},onMousedown:function(t){this.start(t)},onTouchstart:function(t){this.start(__assign(__assign({},t),{clientX:t.targetTouches[0].clientX,clientY:t.targetTouches[0].clientY}))},onMousemove:function(t){this.move(t)},onTouchmove:function(t){this.move(__assign(__assign({},t),{clientX:t.targetTouches[0].clientX,clientY:t.targetTouches[0].clientY}))},onMouseup:function(t){this.end(t)},onTouchend:function(t){this.end(__assign(__assign({},t),{clientX:t.changedTouches[0].clientX,clientY:t.changedTouches[0].clientY}))},start:function(t){var e=t.clientX,t=t.clientY;this.$data.$startPoint=this.$data.$prePoint=this.devicePointToCanvasPoint({clientX:e,clientY:t}),this.$refs.containerRef.addEventListener("mousemove",this.onMousemove),this.$refs.containerRef.addEventListener("mouseup",this.onMouseup),this.$refs.containerRef.addEventListener("touchmove",this.onTouchmove),this.$refs.containerRef.addEventListener("touchend",this.onTouchend)},move:function(t){var e=t.clientX,t=t.clientY,t=this.devicePointToCanvasPoint({clientX:e,clientY:t});this.draw({sourcePoint:this.$data.$prePoint,targetPoint:t}),this.$data.$prePoint=t},end:function(t){var e=t.clientX,t=t.clientY,e=this.devicePointToCanvasPoint({clientX:e,clientY:t});null!==(t=this.$data.$config.get(this.$data.$curShape))&&void 0!==t&&t.mouseup(e),this.$data.$startPoint=null,this.$data.$prePoint=null,this.$refs.containerRef.removeEventListener("mousemove",this.onMousemove),this.$refs.containerRef.removeEventListener("mouseup",this.onMouseup),this.$refs.containerRef.removeEventListener("touchmove",this.onTouchmove),this.$refs.containerRef.removeEventListener("touchend",this.onTouchend)},clear:function(){this.$data.$ctx.clearRect(0,0,this.$refs.canvasRef.width,this.$refs.canvasRef.height),this.$data.$prePoint=this.$data.$startPoint=null,this.$data.$stack=[],this.$data.$stackIndex=0},setMode:function(t){this.$data.$curShape=t},setStrokeStyle:function(t){this.$data.$strokeStyle=t},setLineWidth:function(t){this.$data.$lineWidth=t},toDataURL:function(){return this.$refs.canvasRef.toDataURL("image/png",1)}},created:function(){var i=this;this.$data.$curShape=this.defaultMode,this.$data.$lineWidth=this.defaultLineWidth,this.$data.$strokeStyle=this.defaultStrokeStyle,this.$data.$config=new Map([[Mode.FREE,{draw:function(t){var e=t.sourcePoint,a=t.targetPoint,t=i.$data.$ctx;t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(a.x,a.y),i.$data.$stack.push({shape:i.$data.$curShape,sourcePoint:e,targetPoint:a}),i.style({lineWidth:i.$data.$lineWidth,strokeStyle:i.$data.$strokeStyle}),t.stroke()},drawStack:function(t){var e=i.$data.$ctx;e.beginPath(),e.moveTo(t.sourcePoint.x,t.sourcePoint.y),e.lineTo(t.targetPoint.x,t.targetPoint.y),i.style({lineWidth:t.lineWidth,strokeStyle:t.strokeStyle}),e.stroke()},mouseup:function(t){i.draw({sourcePoint:i.$data.$prePoint,targetPoint:t})}}],[Mode.LINE,{draw:function(t){var e=t.targetPoint,t=i.$data.$ctx;t.clearRect(0,0,i.$refs.canvasRef.width,i.$refs.canvasRef.height),i.drawStack(),t.beginPath(),t.moveTo(i.$data.$startPoint.x,i.$data.$startPoint.y),t.lineTo(e.x,e.y),i.style({lineWidth:i.$data.$lineWidth,strokeStyle:i.$data.$strokeStyle}),t.stroke()},drawStack:function(t){var e=i.$data.$ctx;e.beginPath(),e.moveTo(t.sourcePoint.x,t.sourcePoint.y),e.lineTo(t.targetPoint.x,t.targetPoint.y),i.style({lineWidth:t.lineWidth,strokeStyle:t.strokeStyle}),e.stroke()},mouseup:function(t){i.$data.$stack.push({shape:i.$data.$curShape,lineWidth:i.$data.$ctx.lineWidth,strokeStyle:i.$data.$ctx.strokeStyle,sourcePoint:i.$data.$startPoint,targetPoint:t})}}],[Mode.RECTANGLE,{draw:function(t){var e=t.targetPoint,a=i.$data.$ctx;a.clearRect(0,0,i.$refs.canvasRef.width,i.$refs.canvasRef.height),i.drawStack(),a.beginPath();t=i.getPoint({startPoint:i.$data.$startPoint,targetPoint:e});a.rect(t.x,t.y,Math.abs(e.x-i.$data.$startPoint.x),Math.abs(e.y-i.$data.$startPoint.y)),i.style({lineWidth:i.$data.$lineWidth,strokeStyle:i.$data.$strokeStyle}),a.stroke()},drawStack:function(t){var e=i.$data.$ctx;e.beginPath(),e.rect(t.x,t.y,t.width,t.height),i.style({lineWidth:t.lineWidth,strokeStyle:t.strokeStyle}),e.stroke()},mouseup:function(t){var e=i.getPoint({startPoint:i.$data.$startPoint,targetPoint:t});i.$data.$stack.push({shape:i.$data.$curShape,lineWidth:i.$data.$ctx.lineWidth,strokeStyle:i.$data.$ctx.strokeStyle,x:e.x,y:e.y,width:Math.abs(t.x-i.$data.$startPoint.x),height:Math.abs(t.y-i.$data.$startPoint.y)})}}],[Mode.CIRCLE,{draw:function(t){var e=t.targetPoint,a=i.$data.$ctx;a.clearRect(0,0,i.$refs.canvasRef.width,i.$refs.canvasRef.height),i.drawStack(),a.beginPath();t=i.getPoint({startPoint:i.$data.$startPoint,targetPoint:e}),e=i.getDistanceByBetweenPoint({p2:e,p1:i.$data.$startPoint});a.ellipse(t.x,t.y,e,e,45*Math.PI/180,0,2*Math.PI),i.style({lineWidth:i.$data.$lineWidth,strokeStyle:i.$data.$strokeStyle}),a.stroke()},drawStack:function(t){var e=i.$data.$ctx;e.beginPath(),e.ellipse(t.x,t.y,t.radiusX,t.radiusY,t.rotation,t.startAngle,t.endAngle),i.style({lineWidth:t.lineWidth,strokeStyle:t.strokeStyle}),e.stroke()},mouseup:function(t){var e=i.getPoint({startPoint:i.$data.$startPoint,targetPoint:t}),t=i.getDistanceByBetweenPoint({p2:t,p1:i.$data.$startPoint});i.$data.$stack.push({shape:i.$data.$curShape,lineWidth:i.$data.$ctx.lineWidth,strokeStyle:i.$data.$ctx.strokeStyle,x:e.x,y:e.y,radiusX:t,radiusY:t,rotation:45*Math.PI/180,startAngle:0,endAngle:2*Math.PI})}}],[Mode.TRIANGLE,{draw:function(t){var e=t.targetPoint,t=i.$data.$ctx;t.clearRect(0,0,i.$refs.canvasRef.width,i.$refs.canvasRef.height),i.drawStack(),t.beginPath();e=i.triangle({startPoint:i.$data.$startPoint,targetPoint:e});t.moveTo(e[0].x,e[0].y),t.lineTo(e[1].x,e[1].y),t.lineTo(e[2].x,e[2].y),t.closePath(),i.style({lineWidth:i.$data.$lineWidth,strokeStyle:i.$data.$strokeStyle}),t.stroke()},drawStack:function(t){var e=i.$data.$ctx;e.beginPath(),e.moveTo(t.points[0].x,t.points[0].y),e.lineTo(t.points[1].x,t.points[1].y),e.lineTo(t.points[2].x,t.points[2].y),e.closePath(),i.style({lineWidth:t.lineWidth,strokeStyle:t.strokeStyle}),e.stroke()},mouseup:function(t){t=i.triangle({startPoint:i.$data.$startPoint,targetPoint:t});i.$data.$stack.push({shape:i.$data.$curShape,lineWidth:i.$data.$ctx.lineWidth,strokeStyle:i.$data.$ctx.strokeStyle,points:t})}}],[Mode.RUBBER,{draw:function(t){var e=t.sourcePoint,a=t.targetPoint,t=i.$data.$ctx;t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(a.x,a.y),i.$data.$stack.push({shape:i.$data.$curShape,sourcePoint:e,targetPoint:a}),t.lineWidth=15,t.strokeStyle="#fff",t.lineCap="round",t.lineJoin="round",t.stroke()},drawStack:function(t){var e=i.$data.$ctx;e.beginPath(),e.moveTo(t.sourcePoint.x,t.sourcePoint.y),e.lineTo(t.targetPoint.x,t.targetPoint.y),e.lineWidth=15,e.strokeStyle="#fff",e.lineCap="round",e.lineJoin="round",e.stroke()},mouseup:function(t){i.draw({sourcePoint:i.$data.$prePoint,targetPoint:t})}}]])},mounted:function(){var t,e=this;this.$data.$ctx=this.$refs.canvasRef.getContext("2d"),this.$refs.canvasRef.width=this.$refs.containerRef.offsetWidth,this.$refs.canvasRef.height=this.$refs.containerRef.offsetHeight;var a=debounce(function(){e.$refs.canvasRef.width=e.$refs.containerRef.offsetWidth,e.$refs.canvasRef.height=e.$refs.containerRef.offsetHeight,e.$data.$ctx.clearRect(0,0,e.$refs.canvasRef.width,e.$refs.canvasRef.height),e.drawStack()},this.resizeTime);this.$data.$ro=new ResizeObserver(a),null!==(a=(t=this.$data.$ro).observe)&&void 0!==a&&a.call(t,document.body),this.$refs.containerRef.addEventListener("mousedown",this.onMousedown),this.$refs.containerRef.addEventListener("touchstart",this.onTouchstart)},beforeDestroy:function(){this.$refs.containerRef.removeEventListener("mousedown",this.onMousedown),this.$refs.containerRef.removeEventListener("touchstart",this.onTouchstart)},render:function(t){return t("div",{ref:"containerRef",class:selectorPrefix},[t("canvas",{ref:"canvasRef"})])}};export default BackTopAnimation;
//# sourceMappingURL=writingboard.js.map
