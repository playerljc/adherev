import"core-js/modules/es.string.starts-with.js";export default{created:function(){var r=this.$data,t=this.$props,s=("$preProps"in r||(r.$preProps={}),this);for(i in r)!function(i){i.startsWith("$")||i.startsWith("_")||s.$watch(i,function(t,s){r.$preProps[i]=s})}(i);var i,a=this;for(i in t)!function(i){i.startsWith("$")||i.startsWith("_")||a.$watch(i,function(t,s){r.$preProps[i]=s})}(i)},updated:function(){var t=this.$options,s=this.$data;"updatedEx"in t&&t.updatedEx instanceof Function&&t.updatedEx.call(this,s.$preProps)}};
//# sourceMappingURL=updatedEx.js.map
