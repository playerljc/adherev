"use strict";require("core-js/modules/es.object.define-property.js"),require("core-js/modules/es.symbol.js"),require("core-js/modules/es.symbol.description.js"),require("core-js/modules/es.array.map.js"),Object.defineProperty(exports,"__esModule",{value:!0}),exports.cardPropTypes=void 0;var tslib_1=require("tslib"),classnames_1=tslib_1.__importDefault(require("classnames")),adherev_ui_conditionalrender_1=tslib_1.__importDefault(require("@baifendian/adherev-ui-conditionalrender")),selectorPrefix="adherev-ui-playground-card",Card=(exports.cardPropTypes={headerClassName:{type:String,default:""},headerStyle:{type:String,default:""},bodyClassName:{type:String,default:""},bodyStyle:{type:String,default:""},actionClassName:{type:String,default:""},actionStyle:{type:String,default:""},title:{type:[String,Object],default:""},extra:{type:Object,default:function(){return null}},actions:{type:Array,default:function(){return[]}},description:{type:Object,default:function(){return null}}},{name:"adv-playground-card",props:tslib_1.__assign({},exports.cardPropTypes),render:function(a){var e=this,t=e.headerClassName,r=e.headerStyle,i=e.bodyClassName,l=e.bodyStyle,n=e.actionClassName,s=e.actionStyle,o=e.title,d=e.extra,c=e.description,u=e.actions,f=e.$slots;return a("div",{class:selectorPrefix},[a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!o||!!d}},[a("div",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-header"),t||""),style:r},[a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!o}},[a("div",{class:"".concat(selectorPrefix,"-header-title")},[o])]),a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!d}},[a("div",{class:"".concat(selectorPrefix,"-header-extra")},[d])])])]),a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!!f.default}},[a("div",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-body"),i),style:l},[f.default])]),a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(null==c||!c.title)||!(null==c||!c.info)}},[a("div",{class:"".concat(selectorPrefix,"-description")},[a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(null==c||!c.title)}},[a("div",{class:"".concat(selectorPrefix,"-description-title")},[null==c?void 0:c.title])]),a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(null==c||!c.info)}},[null==c?void 0:c.info])])]),a(adherev_ui_conditionalrender_1.default,{attrs:{conditional:!(!u||!u.length)}},[a("ul",{class:(0,classnames_1.default)("".concat(selectorPrefix,"-action"),n),style:s},[u.map(function(e,t){return a("li",{key:"".concat(t+1),class:"".concat(selectorPrefix,"-action-item")},[f[e]])})])])])}});exports.default=Card;
//# sourceMappingURL=Card.js.map
