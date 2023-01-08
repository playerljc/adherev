import{__assign,__spreadArray}from"tslib";import classNames from"classnames";import ConditionalRender from"@baifendian/adherev-ui-conditionalrender";import Util from"@baifendian/adherev-util";import SubMenu from"./SubMenu";var selectorPrefix="adherev-ui-contextmenu-menuitem",MenuItem={props:{data:{type:Object,default:function(){return{}}}},inject:["getContext"],computed:{getClass:function(){var e=this.data,t=e.disabled,e=e.className;return classNames(selectorPrefix,void 0!==t&&t?"disabled":"",e||"")}},methods:{renderIcon:function(e){var t=this.data.icon;return t&&Util.isString(t)?e("span",{class:classNames("".concat(selectorPrefix,"-icon"),t)}):t&&Util.isObject(t)?e("span",{class:classNames("".concat(selectorPrefix,"-icon"))},[e(t)]):t&&Util.isFunction(t)?e("span",{class:classNames("".concat(selectorPrefix,"-icon"))},[t.apply(void 0,__spreadArray([e],this.data,!1))]):null},renderName:function(e){var t=this.data.name;return t&&Util.isString(t)?e("span",{class:classNames("".concat(selectorPrefix,"-name"))},[t]):t&&Util.isObject(t)?e("span",{class:classNames("".concat(selectorPrefix,"-name"))},[e(t)]):t&&Util.isFunction(t)?e("span",{class:classNames("".concat(selectorPrefix,"-name"))},[t(e,__assign({},this.data))]):null},renderMore:function(e){var t=this.data.children;return e(ConditionalRender,{attrs:{conditional:0!==t.length}},[e("span",{class:"".concat(selectorPrefix,"-more fa fa-caret-right")})])},renderSubMenu:function(e){var t=this.data,a=t.children,n=t.subMenuClassName,t=t.subMenuStyle;return e(ConditionalRender,{attrs:{conditional:0!==a.length}},[e(SubMenu,{attrs:{data:a,className:n,styleName:t}})])},onClick:function(e){e.stopPropagation();var e=this.data,t=e.id,a=e.attribute,n=e.disabled,e=e.children,s=this.getContext(),i=s.config,s=s.el,i=i.handler;if(n||0<(e||[]).length)return!1;i&&(i(t,a),this.$root.$destroy(),null!=(n=null==s?void 0:s.parentElement))&&n.removeChild(s)}},render:function(e){var t=this.data,a=t.separation,t=t.styleName;return e(ConditionalRender,{attrs:{conditional:!a}},[e("li",{class:this.getClass,style:t,on:{click:this.onClick}},[this.renderIcon(e),this.renderName(e),this.renderMore(e),this.renderSubMenu(e)]),e("li",{slot:"noMatch",class:"".concat(selectorPrefix,"-separation")})])}};export default MenuItem;
//# sourceMappingURL=MenuItem.js.map
