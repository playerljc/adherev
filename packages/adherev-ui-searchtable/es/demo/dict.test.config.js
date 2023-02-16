import"core-js/modules/es.object.to-string.js";import"core-js/modules/es.promise.js";import"core-js/modules/es.array.filter.js";import"core-js/modules/es.array.includes.js";import"core-js/modules/es.string.includes.js";import"core-js/modules/es.array.map.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/es.array.fill.js";import"core-js/modules/es.array.slice.js";import faker from"faker";import Dict from"@baifendian/adherev-util-dict";export default{initStatic:function(){Dict.handlers.SystemTestRadio=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},Dict.handlers.SystemTestDynamicRadio=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},Dict.handlers.SystemTestCheckBox=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},Dict.handlers.SystemTestDynamicCheckBox=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},Dict.handlers.SystemTestSelect=function(){return[{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}]},Dict.handlers.SystemTestDynamicSelect=function(){return Promise.resolve([{value:1,label:"通过"},{value:2,label:"不通过"},{value:3,label:"退回"}])},Dict.handlers.SystemTestAutoCompleteSelect=function(){return function(a){return Promise.resolve([{label:"java",value:1},{label:"javaScript",value:2},{label:"html",value:3},{label:"css",value:4},{label:"spring",value:5},{label:"react",value:6}].filter(function(e){return e.label.includes(a)}))}},Dict.handlers.SystemTestTree=function(){return[{title:"Node1",value:"0-0",leaf:!1,children:[{title:"Child Node1",value:"0-0-1",leaf:!0},{title:"Child Node2",value:"0-0-2",leaf:!0}]},{title:"Node2",value:"0-1",leaf:!0}]},Dict.handlers.SystemTestTransfer=function(){return[{value:"1",label:"通过"},{value:"2",label:"不通过"},{value:"3",label:"退回"}]},Dict.handlers.SystemTestDynamicTransfer=function(){return Promise.resolve([{value:"1",label:"通过"},{value:"2",label:"不通过"},{value:"3",label:"退回"}])},Dict.handlers.SystemTestTable=function(){return Array.from({length:10}).map(function(e,a){return{id:faker.random.uuid(),isMore:!!Math.floor(10*Math.random()%2),name:faker.internet.userName(),sex:"".concat((a+1)%2),birthDay:faker.time.recent(),deptName:faker.company.companyName(),height:faker.random.number(),width:faker.random.number(),hometown:faker.address.city(),address:faker.address.streetAddress()}})},Dict.handlers.SystemTestTablePagination=function(){return function(e){var r=e.current,t=e.pageSize,e=[],e=(e.length=300,e.fill(0),{resCode:0,data:{total:e.length,pages:30,current:1,records:e.slice((r-1)*t,(r-1)*t+t).map(function(e,a){return{id:(r-1)*t+(a+1),isMore:!!Math.floor(10*Math.random()%2),name:faker.internet.userName(),sex:"".concat((a+1)%2),birthDay:faker.time.recent(),deptName:faker.company.companyName(),height:faker.random.number(),width:faker.random.number(),hometown:faker.address.city(),address:faker.address.streetAddress()}})},resMsg:""});return Promise.resolve(e.data)}},Dict.handlers.SystemTestCascader=function(){return[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]},Dict.handlers.SystemTestDynamicCascader=function(){return Promise.resolve([{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}])},Dict.handlers.SystemTestList=function(){return Array.from({length:5}).map(function(e,a){return{id:faker.random.uuid(),isMore:!!Math.floor(10*Math.random()%2),name:faker.internet.userName(),sex:"".concat((a+1)%2),birthDay:faker.time.recent(),deptName:faker.company.companyName(),height:faker.random.number(),width:faker.random.number(),hometown:faker.address.city(),address:faker.address.streetAddress()}})},Dict.handlers.SystemTestListPagination=function(){return function(e){var r=e.current,t=e.pageSize,e=[],e=(e.length=300,e.fill(0),{resCode:0,data:{total:e.length,pages:30,current:1,records:e.slice((r-1)*t,(r-1)*t+t).map(function(e,a){return{id:(r-1)*t+(a+1),isMore:!!Math.floor(10*Math.random()%2),name:faker.internet.userName(),sex:"".concat((a+1)%2),birthDay:faker.time.recent(),deptName:faker.company.companyName(),height:faker.random.number(),width:faker.random.number(),hometown:faker.address.city(),address:faker.address.streetAddress()}})},resMsg:""});return Promise.resolve(e.data)}},Dict.handlers.SystemTestSexSelect=function(){return[{label:"男",value:"0"},{label:"女",value:"1"}]}},initRemote:function(){}};
//# sourceMappingURL=dict.test.config.js.map
