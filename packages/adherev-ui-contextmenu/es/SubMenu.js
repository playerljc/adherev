import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.map.js";import classNames from"classnames";import MenuItem from"./MenuItem";var selectorPrefix="adherev-ui-contextmenu-submenu",SubMenu={props:{data:{type:Array,default:function(){return[]}},className:{type:String,default:""},styleName:{type:String,default:""}},inject:["getContext"],computed:{getClass:function(){var e=this.className;return classNames(selectorPrefix,e||"")},getStyle:function(){var e=this.styleName,t=this.getContext().config.width;return"".concat(e,"width:").concat(t,"px;z-index:").concat(199999)}},methods:{renderItems:function(t){var e=this.data;return(void 0===e?[]:e).map(function(e){return t(MenuItem,{key:e.id,attrs:{data:e}})})}},render:function(e){return e("ul",{class:this.getClass,style:this.getStyle},[this.renderItems(e)])}};export default SubMenu;
//# sourceMappingURL=SubMenu.js.map
