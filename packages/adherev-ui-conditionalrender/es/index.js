import"core-js/modules/es.regexp.exec.js";import"core-js/modules/es.string.match.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.object.to-string.js";import Util from"@baifendian/adherev-util";import ConditionalRender from"./conditionalrender";import ConditionalRenderShow from"./show";import ConditionalRenderVisibility from"./visibility";import ConditionalRenderWrap from"./wrap";var _a=Util._util,withInstall=_a.withInstall,withVue=_a.withVue,Component=withInstall(ConditionalRender);withInstall(ConditionalRenderShow),withInstall(ConditionalRenderVisibility),withInstall(ConditionalRenderWrap),Component.isUse=function(){return!0},Component.use=function(n){n.use(Component),n.use(ConditionalRenderShow),n.use(ConditionalRenderVisibility),n.use(ConditionalRenderWrap),withVue(n,"ConditionalRender",ConditionalRender),withVue(n,"ConditionalRenderShow",ConditionalRenderShow),withVue(n,"ConditionalRenderVisibility",ConditionalRenderVisibility),withVue(n,"ConditionalRenderWrap",ConditionalRenderWrap)},Component.Show=ConditionalRenderShow,Component.Visibility=ConditionalRenderVisibility,Component.Wrap=ConditionalRenderWrap,Component.conditionalRender=function(n){var i=n.conditional,o=n.match,n=n.noMatch;return i?o:n||null},Component.conditionalArr=function(n){return n.filter(function(n){var i;return!("props"in n&&"conditional"in n.props&&!n.props.conditional)||!(!n.props.noMatch||null===(null==(i=(n=n.props).noMatch)?void 0:i.call(n)))})},Component.conditionalNotEmptyArr=function(n){return n.filter(function(n){return!(null==n)})};export default Component;
//# sourceMappingURL=index.js.map
