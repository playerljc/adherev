import"core-js/modules/es.array.map.js";import{__assign}from"tslib";import{Popover}from"ant-design-vue";import Setting from"./setting";export default{name:"adv-searchtable-column-setting",inject:["getContext"],render:function(M){var t,L,u=this;return M(Popover,{attrs:{content:M(Setting,{attrs:{columns:(null===(L=null===(t=null===(L=this.getContext)||void 0===L?void 0:L.call(this))||void 0===t?void 0:t.getSortColumnSetting)||void 0===L?void 0:L.call(t))||[]},on:{showColumns:function(t){var M=(null===(M=u.getContext)||void 0===M?void 0:M.call(u)).columnSetting;u.getContext().columnSetting=M.map(function(M){return __assign(__assign({},M),{display:t})})},reset:function(){u.getContext().columnSetting=u.getContext().getTableColumns().map(function(M,t){return __assign(__assign({},M),{display:!0,sort:t})})},displayColumn:function(M){var t=M.column,L=M.checked,M=(null===(M=u.getContext)||void 0===M?void 0:M.call(u)).columnSetting;u.getContext().columnSetting=M.map(function(M){return __assign(__assign({},M),{display:M.key===t.key?L:M.display})})},sortEnd:function(t){var M=(null===(M=u.getContext)||void 0===M?void 0:M.call(u)).columnSetting;u.getContext().columnSetting=M.map(function(M){return __assign(__assign({},M),{sort:t.get(M.key)})})}}}),placement:"bottomRight",trigger:"click",getPopupContainer:function(M){return M.parentElement}}},[M("a",[M("img",{attrs:{alt:"",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1yaSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCBtZWV0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM4ODg4ODgiIGQ9Ik0yLjIxMyAxNC4wNmE5Ljk0NSA5Ljk0NSAwIDAgMSAwLTQuMTJjMS4xMS4xMyAyLjA4LS4yMzcgMi4zOTYtMS4wMDFjLjMxNy0uNzY1LS4xMDgtMS43MS0uOTg2LTIuNDAzYTkuOTQ1IDkuOTQ1IDAgMCAxIDIuOTEzLTIuOTEzYy42OTIuODc3IDEuNjM4IDEuMzAzIDIuNDAzLjk4NmMuNzY1LS4zMTcgMS4xMzItMS4yODYgMS4wMDEtMi4zOTZhOS45NDUgOS45NDUgMCAwIDEgNC4xMiAwYy0uMTMgMS4xMS4yMzcgMi4wOCAxLjAwMSAyLjM5NmMuNzY1LjMxNyAxLjcxLS4xMDggMi40MDMtLjk4NmE5Ljk0NSA5Ljk0NSAwIDAgMSAyLjkxMyAyLjkxM2MtLjg3Ny42OTItMS4zMDMgMS42MzgtLjk4NiAyLjQwM2MuMzE3Ljc2NSAxLjI4NiAxLjEzMiAyLjM5NiAxLjAwMWE5Ljk0NSA5Ljk0NSAwIDAgMSAwIDQuMTJjLTEuMTEtLjEzLTIuMDguMjM3LTIuMzk2IDEuMDAxYy0uMzE3Ljc2NS4xMDggMS43MS45ODYgMi40MDNhOS45NDUgOS45NDUgMCAwIDEtMi45MTMgMi45MTNjLS42OTItLjg3Ny0xLjYzOC0xLjMwMy0yLjQwMy0uOTg2Yy0uNzY1LjMxNy0xLjEzMiAxLjI4Ni0xLjAwMSAyLjM5NmE5Ljk0NSA5Ljk0NSAwIDAgMS00LjEyIDBjLjEzLTEuMTEtLjIzNy0yLjA4LTEuMDAxLTIuMzk2Yy0uNzY1LS4zMTctMS43MS4xMDgtMi40MDMuOTg2YTkuOTQ1IDkuOTQ1IDAgMCAxLTIuOTEzLTIuOTEzYy44NzctLjY5MiAxLjMwMy0xLjYzOC45ODYtMi40MDNjLS4zMTctLjc2NS0xLjI4Ni0xLjEzMi0yLjM5Ni0xLjAwMXpNNCAxMi4yMWMxLjEuMzA1IDIuMDA3IDEuMDAyIDIuNDU3IDIuMDg2Yy40NDkgMS4wODUuMyAyLjIyLS4yNjIgMy4yMTJjLjA5Ni4xMDIuMTk1LjIwMS4yOTcuMjk3Yy45OTMtLjU2MiAyLjEyNy0uNzEgMy4yMTItLjI2MmMxLjA4NC40NSAxLjc4MSAxLjM1NyAyLjA4NiAyLjQ1N2MuMTQuMDA0LjI4LjAwNC40MiAwYy4zMDUtMS4xIDEuMDAyLTIuMDA3IDIuMDg2LTIuNDU3YzEuMDg1LS40NDkgMi4yMi0uMyAzLjIxMi4yNjJjLjEwMi0uMDk2LjIwMS0uMTk1LjI5Ny0uMjk3Yy0uNTYyLS45OTMtLjcxLTIuMTI3LS4yNjItMy4yMTJjLjQ1LTEuMDg0IDEuMzU3LTEuNzgxIDIuNDU3LTIuMDg2Yy4wMDQtLjE0LjAwNC0uMjggMC0uNDJjLTEuMS0uMzA1LTIuMDA3LTEuMDAyLTIuNDU3LTIuMDg2Yy0uNDQ5LTEuMDg1LS4zLTIuMjIuMjYyLTMuMjEyYTcuOTM1IDcuOTM1IDAgMCAwLS4yOTctLjI5N2MtLjk5My41NjItMi4xMjcuNzEtMy4yMTIuMjYyQzEzLjIxMiA2LjAwNyAxMi41MTUgNS4xIDEyLjIxIDRhNy45MzUgNy45MzUgMCAwIDAtLjQyIDBjLS4zMDUgMS4xLTEuMDAyIDIuMDA3LTIuMDg2IDIuNDU3Yy0xLjA4NS40NDktMi4yMi4zLTMuMjEyLS4yNjJhNi45MzIgNi45MzIgMCAwIDAtLjI5Ny4yOTdjLjU2Mi45OTMuNzEgMi4xMjcuMjYyIDMuMjEyQzYuMDA3IDEwLjc4OCA1LjEgMTEuNDg1IDQgMTEuNzljLS4wMDQuMTQtLjAwNC4yOCAwIC40MnpNMTIgMTVhMyAzIDAgMSAxIDAtNmEzIDMgMCAwIDEgMCA2em0wLTJhMSAxIDAgMSAwIDAtMmExIDEgMCAwIDAgMCAyeiI+PC9wYXRoPjwvc3ZnPg=="}})])])}};
//# sourceMappingURL=index.js.map