"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.regexp.exec.js"),require("core-js/modules/es.string.split.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0});var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),MenuItem_1=tslib_1.__importDefault(require("./MenuItem")),selectorPrefix="adherev-ui-contextmenu-submenu";exports.default={props:{data:{type:Array,default:function(){return[]}},className:{type:String,default:""},styleName:{type:String,default:""}},inject:["getContext"],computed:{getClass:function(){var e=this.className;return classnames_1.default(selectorPrefix,(e||"").split(/\s+/))},getStyle:function(){return this.styleName+"width:"+this.getContext().config.width+"px;z-index:199999"}},methods:{renderItems:function(t){var e=this.data;return(void 0===e?[]:e).map(function(e){return t(MenuItem_1.default,{key:e.id,attrs:{data:e}})})}},render:function(e){return e("ul",{class:this.getClass,style:this.getStyle},[this.renderItems(e)])}};
//# sourceMappingURL=SubMenu.js.map
