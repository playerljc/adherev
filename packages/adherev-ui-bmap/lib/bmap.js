"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.number.constructor.js"),require("core-js/modules/es.object.to-string.js"),require("core-js/modules/es.promise.js"),require("core-js/modules/es.array.index-of.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),selectorPrefix="adhere-ui-bmap",loadGridIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUdJREFUeNrs2sENwyAQRcE4ckf0RBv04Z7ck30wFXBi/4wU5bScXhQk9hhj9B+xzu/7WjijvZ/b/Jbz/e83kE0AAkAACAABIAAEgAAQAAJAAAgAAVDYfA5ui+eY33R+BuA9PXO++QtwB0AACAABIAAEgAAQAAJAAAgAASAAqrIPED5vH8A+AO4ACAABIAAEgAAQAAJAAAgAASAABEBJ9gHC5+0D2AfAHQABIAAEgAAQAAJAAAgAASAABIAAKMk+QPi8fQD7ALgDIAAEgAAQAAJAAAgAASAABIAAEAAl2QcIn7cPYB8AdwAEgAAQAAJAAAgAASAABIAAEAACoCT7AOHz9gHsA+AOgAAQAAJAAAgAASAABIAAEAACQACUZB8gfN4+gH0A3AEQAAJAAAgAASAABIAAEAACQABUNV8D++I5nmM3nX8EGADa0U/2xPbBVwAAAABJRU5ErkJggg==";exports.default={name:"adv-bmap",props:{ak:{type:String,default:"bxFuXXDt1oKdlgu6mXCCnK51cDgDGBLp"},zoom:{type:Number,default:5},center:{type:Object,default:function(){return{lon:116.404,lat:39.915}}},config:{type:Object,default:function(){return{minZoom:2,maxZoom:20,enableHighResolution:!0,enableAutoResize:!0,enableMapClick:!1}}},externalImportBMapScript:{type:Boolean,default:!1}},data:function(){return{isReady:!1,$BMap:null,$map:null,$isLoad:!1}},methods:{importBMapJS:function(){var A=this;return new Promise(function(n){var e,o=document.write;document.write=function(e){var t=document.createElement("div");t.innerHTML=e;var i,A=t.firstElementChild;"script"===(null==A?void 0:A.tagName.toLowerCase())&&-1!==(null===(t=null==A?void 0:A.getAttribute("src"))||void 0===t?void 0:t.indexOf("http://api.map.baidu.com"))?(i=A.getAttribute("src"),new Promise(function(e){var t,A=document.createElement("script");A.onload=function(){e(window.BMap)},A.src=i,null!==(t=document.querySelector("head"))&&void 0!==t&&t.appendChild(A)}).then(function(e){n(e)})):o(e)};var t=document.createElement("script");t.src="http://api.map.baidu.com/api?v=3.0&ak="+A.props.ak,null!==(e=null===document||void 0===document?void 0:document.querySelector("head"))&&void 0!==e&&e.appendChild(t)})},initMap:function(){var A=this,e=this.$data.$BMap,t=this,i=t.config,n=t.zoom,t=t.center;this.$data.$map=new e.Map(this.$refs.ref,tslib_1.__assign({enableMapClick:!1},i)),this.initMapControl(),this.$data.$map.centerAndZoom(new e.Point(null==t?void 0:t.lon,null==t?void 0:t.lat),n),this.$data.$map.addEventListener("tilesloaded",function(){var e,t;A.$data.$isLoad||(A.$data.$isLoad=!0,(t=document.querySelector(".anchorBL"))&&null!==(e=null==t?void 0:t.parentElement)&&void 0!==e&&e.removeChild(t),setTimeout(function(){var e;null!==(e=null===(e=null===(e=null==A?void 0:A.$refs)||void 0===e?void 0:e.ref)||void 0===e?void 0:e.style)&&void 0!==e&&(e.background='url("'+loadGridIcon+'") repeat #fff;')},2e3))}),this.$emit("onBMapInitReady")},initMapControl:function(){var e=this.$data,t=e.$BMap,e=e.$map;e.addControl(new t.NavigationControl),e.enableScrollWheelZoom(!0)},getMap:function(){return this.$data.$map}},mounted:function(){var t=this;this.externalImportBMapScript?(this.$data.$BMap=window.BMap,this.isReady=!0,this.$nextTick(function(){t.initMap()})):this.importBMapJS().then(function(e){t.$data.$BMap=e,window.BMap=e,t.$emit("onBMapScriptReady"),t.isReady=!0,t.$nextTick(function(){t.initMap()})})},render:function(e){var t=this.isReady;return e(adherev_ui_conditionalrender_1.default,{attrs:{conditional:t}},[e("div",{class:selectorPrefix,ref:"ref"}),e("div",{slot:"noMatch"},["loading"])])}};
//# sourceMappingURL=bmap.js.map
