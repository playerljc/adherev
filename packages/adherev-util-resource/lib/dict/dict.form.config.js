import Dict from"@baifendian/adherev-util-dict";import Intl from"@baifendian/adherev-util-intl";export default{initStatic:function(){Dict.handlers.FormInputNumberRule=function(){return{whitespace:!0,type:"number",message:Intl.tv("输入的值在1~200之间"),min:1,max:200}},Dict.handlers.FormInputStringRule=function(){return{whitespace:!0,type:"string",message:Intl.tv("输入的内容在100个字符之内"),min:1,max:100}},Dict.handlers.FormPopupContainer=function(){return function(t){return t.parentElement}}}};
//# sourceMappingURL=dict.form.config.js.map
