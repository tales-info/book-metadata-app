(function(t){function e(e){for(var a,i,o=e[0],l=e[1],u=e[2],v=0,d=[];v<o.length;v++)i=o[v],s[i]&&d.push(s[i][0]),s[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(d.length)d.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,o=1;o<r.length;o++){var l=r[o];0!==s[l]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},s={app:0},n=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),r("h2",{staticClass:"mt-5"},[t._v("Obter Metadados de Livros através do ISBN")]),r("hr"),r("get-isbn"),r("hr"),r("h4",[t._v("Especificações da API")]),r("h5",{staticClass:"mt-4 mb-4"},[t._v("Pesquisa")]),r("h6",[t._v("Endpoint: /api/search/:termo-de-busca?start=0&format=json")]),t._m(1),r("h6",[t._v("Exemplos de Endpoints:")]),t._m(2),r("h5",{staticClass:"mt-4 mb-4"},[t._v("Obter pelo isbn")]),r("h6",[t._v("Endpoint: /api/get/:isbn1/:isbn2/...&format=json")]),t._m(3),r("h6",[t._v("Exemplos de Endpoints:")]),t._m(4)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-auto mr-auto"},[a("img",{attrs:{alt:"Sucupira",height:"80",src:r("b38a")}})]),a("div",{staticClass:"col-auto ml-auto"},[a("img",{attrs:{alt:"Coleta Capes",height:"80",src:r("8043")}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("code",[t._v("\n  :termo-de-busca: pode ser o nome de um livro, autor, etc.."),r("br"),t._v("\n  start: por padrão o valor é 0. serve para paginar o resultado"),r("br"),t._v("\n  format: por padrão é json. mas pode ser setado como xml\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{target:"blank",href:"/api/search/ziviani"}},[t._v("/api/search/ziviani")])]),r("li",[r("a",{attrs:{target:"blank",href:"/api/search/ziviani?start=10"}},[t._v("/api/search/ziviani?start=10")])]),r("li",[r("a",{attrs:{target:"blank",href:"/api/search/ziviani?start=20&format=xml"}},[t._v("/api/search/ziviani?start=20&format=xml")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("code",[t._v("\n  :isbn1, isbn2,... : um ou mais isbn para retornar (isbn 10 ou isbn 13)"),r("br"),t._v("\n  format: por padrão é json. mas pode ser setado como xml\n  ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("a",{attrs:{target:"blank",href:"/api/get/1849051259"}},[t._v("/api/get/1849051259")])]),r("li",[r("a",{attrs:{target:"blank",href:"/api/get/9781568823522"}},[t._v("/api/get/9781568823522")])]),r("li",[r("a",{attrs:{target:"blank",href:"/api/get/1849051259/9781568823522"}},[t._v("/api/get/1849051259/9781568823522")])]),r("li",[r("a",{attrs:{target:"blank",href:"/api/get/1849051259/9781568823522&format=xml"}},[t._v("/api/get/1849051259/9781568823522&format=xml")])])])}],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("Buscar metadados através do ISBN")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"form-group"},[r("small",{staticClass:"form-text text-muted",attrs:{id:"isbnHelp"}},[t._v("Um ISBN por linha")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.isbnList,expression:"isbnList"}],staticClass:"form-control",attrs:{id:"isbnList",rows:"10","aria-describedby":"isbnHelp"},domProps:{value:t.isbnList},on:{input:function(e){e.target.composing||(t.isbnList=e.target.value)}}}),r("button",{staticClass:"btn btn-primary btn-block mt-2",on:{click:function(){return t.getData(t.format)}}},[t._v("Obter Metadados")])])]),r("div",{staticClass:"col"},[r("div",[t.result?r("result-set",{on:{format:function(e){return t.getData(e)}}},[r("div",[r("button",{staticClass:"btn btn-primary",on:{click:function(){return t.getData(t.format)}}},[t._v("Obter Metadados")])]),r("div",{staticClass:"mt-5"},[r("h5",[t._v("Endpoint")]),r("code",[r("a",{attrs:{target:"blank",href:t.getUrl(t.format)}},[t._v(t._s(t.getUrl(t.format)))])]),r("hr"),""!=t.format?r("div",[r("code",[t._v("\r\n                "+t._s(t.result)+"\r\n              ")])]):r("div",[r("h5",{staticClass:"mt-2 mb-2"},[t._v("Quantidade: "+t._s(t.result.count))]),r("hr"),r("h5",[t._v("Itens")]),r("div",{staticClass:"list-group"},t._l(t.result.result,function(e,a){return r("div",{key:a,staticClass:"list-group-item"},[e.title?r("h5",[t._v(t._s(e.title))]):t._e(),e.subtitle?r("h6",[t._v(t._s(e.subtitle))]):t._e(),e.authors.length>0?r("p",[r("strong",[t._v(t._s(t._f("commaSeparated")(e.authors)))])]):t._e()])}),0),t.result.errors.length>0?[r("hr"),r("h5",[t._v("Erros")]),r("div",{staticClass:"list-group"},t._l(t.result.errors,function(e,a){return r("div",{key:a,staticClass:"list-group-item"},[e.isbn?r("h5",[t._v(t._s(e.isbn))]):t._e(),e.error?r("h6",[t._v(t._s(e.error))]):t._e()])}),0)]:t._e()],2)])]):t._e()],1)])])])},o=[],l=(r("28a5"),r("bc3a")),u=r.n(l),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Resultados \n        "),r("div",{staticClass:"btn-group float-right",attrs:{role:"group","aria-label":"Basic example"}},[r("button",{class:"btn btn-secondary btn-sm"+(""==t.viewFormat?" active":""),attrs:{type:"button"},on:{click:function(){return t.changeFormat("")}}},[t._v("Formatado")]),r("button",{class:"btn btn-secondary btn-sm"+("xml"==t.viewFormat?" active":""),attrs:{type:"button"},on:{click:function(){return t.changeFormat("xml")}}},[t._v("XML")]),r("button",{class:"btn btn-secondary btn-sm"+("json"==t.viewFormat?" active":""),attrs:{type:"button"},on:{click:function(){return t.changeFormat("json")}}},[t._v("JSON")])])]),t.$slots.default?r("div",[t._t("default",null,{format:t.viewFormat})],2):r("div",[t._v("\n        Nada a ser exibido\n    ")])])},v=[],d={name:"ResultSet",props:{url:{type:String,default:void 0}},data:function(){return{viewFormat:""}},methods:{changeFormat:function(t){this.viewFormat=t,this.$emit("format",t)}}},m=d,f=r("2877"),p=Object(f["a"])(m,c,v,!1,null,null,null),h=p.exports,b={name:"GetIsbn",components:{ResultSet:h},data:function(){return{isbnList:"8535236996\n9788543025001\n123456",format:"",result:""}},filters:{commaSeparated:function(t){return t?t.join(", "):""}},methods:{getUrl:function(t){return"/api/get/"+this.isbnList.split("\n").join("/")+(t?"?format="+t:"")},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";u.a.get(this.getUrl(e)).then(function(r){t.result=r.data,t.format=e}).catch(function(t){console.error(t)})}}},g=b,_=Object(f["a"])(g,i,o,!1,null,null,null),w=_.exports,j=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h4",[t._v("Pesquisar por título, nome dos autores, etc.")]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6"},[r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"email",id:"autocomplete","aria-describedby":"helpPesquisa",placeholder:"Digite para pesquisar..."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),r("small",{staticClass:"form-text text-muted",attrs:{id:"helpPesquisa"}},[t._v("Comece a digitar para pesquisar o livro pelo titulo")])])])]),r("div",[r("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.getData(t.format)}}},[t._v("Pesquisar")]),t._v(" \n        "),t.result?r("button",{staticClass:"btn btn-secondary btn-sm",on:{click:function(e){t.result=""}}},[t._v("Limpar")]):t._e()]),r("div",[t.result?r("result-set",{on:{format:function(e){return t.getData(e)}}},[r("div",{staticClass:"mt-5"},[r("h5",[t._v("Endpoint")]),r("code",[r("a",{attrs:{target:"blank",href:t.getUrl(t.format)}},[t._v(t._s(t.getUrl(t.format)))])]),r("hr"),""!=t.format?r("div",[r("code",[t._v("\n            "+t._s(t.result)+"\n          ")])]):r("div",[r("h5",{staticClass:"mt-2 mb-2"},[t._v("Quantidade: "+t._s(t.result.count))]),r("hr"),r("h5",[t._v("Itens")]),r("div",{staticClass:"list-group"},t._l(t.result.result,function(e,a){return r("div",{key:a,staticClass:"list-group-item"},[e.title?r("h5",[t._v(t._s(e.title))]):t._e(),e.subtitle?r("h6",[t._v(t._s(e.subtitle))]):t._e(),e.authors.length>0?r("p",[r("strong",[t._v(t._s(t._f("commaSeparated")(e.authors)))])]):t._e()])}),0),t.result.errors.length>0?[r("hr"),r("h5",[t._v("Erros")]),r("div",{staticClass:"list-group"},t._l(t.result.errors,function(e,a){return r("div",{key:a,staticClass:"list-group-item"},[e.isbn?r("h5",[t._v(t._s(e.isbn))]):t._e(),e.error?r("h6",[t._v(t._s(e.error))]):t._e()])}),0)]:t._e()],2)])]):t._e()],1)])},A=[],x=(r("386d"),{name:"Search",components:{ResultSet:h},data:function(){return{search:"",format:"",result:""}},filters:{commaSeparated:function(t){return t?t.join(", "):""}},methods:{getUrl:function(t){return"/api/search/"+this.search+(t?"?format="+t:"")},getData:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";u.a.get(this.getUrl(e)).then(function(r){t.result=r.data,t.format=e}).catch(function(t){console.error(t)})}}}),C=x,Q=Object(f["a"])(C,j,A,!1,null,null,null),S=Q.exports,y={name:"app",components:{GetIsbn:w,Search:S}},q=y,N=(r("5c0b"),Object(f["a"])(q,s,n,!1,null,null,null)),k=N.exports;r("4989"),r("21b6");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var a=r("5e27"),s=r.n(a);s.a},"5e27":function(t,e,r){},8043:function(t,e){t.exports="data:image/png;base64,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"},b38a:function(t,e,r){t.exports=r.p+"img/logo-sucupira.45478c7b.png"}});
//# sourceMappingURL=app.7ce35d5d.js.map