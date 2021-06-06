(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/pokedex/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3362:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("h1",[e._v("Pokedex")]),n("PokemonList",{attrs:{imageUrl:e.imageUrl,apiUrl:e.apiUrl}})],1)],1)],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PokemonList"},[n("v-row",e._l(e.pokemons,(function(t,r){return n("v-col",{key:"poke"+r,attrs:{cols:"6",sm:"4",md:"3",lg:"2",xl:"2"}},[t.id<=151?n("v-card",{staticClass:"text-center",attrs:{rounded:"",height:"100%",width:"100%"}},[n("v-responsive",{attrs:{"aspect-ratio":"1"}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-img",{attrs:{"max-height":"120","max-width":"120",src:e.imageUrl+t.id+".png"}})],1),n("v-layout",{attrs:{"justify-center":""}},[n("v-card-title",[e._v("No."+e._s(t.id)),n("br"),e._v(e._s(t.name))])],1)],1)],1):e._e()],1)})),1)],1)},s=[],u=n("1da1"),c=(n("96cf"),n("d3b7"),n("159b"),n("4de4"),n("ac1f"),n("1276"),{name:"PokemonList",components:{},data:function(){return{nextUrl:"",detailUrl:"",isLoading:!1,pokemons:[]}},props:["imageUrl","apiUrl"],methods:{fetchData:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.isLoading){e.next=2;break}return e.abrupt("return");case 2:return this.isLoading=!0,t=new Request(this.nextUrl),e.prev=4,e.next=7,fetch(t);case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,this.nextUrl=r.next,r.results.forEach((function(e){a.detailUrl=e.url,e.id=e.url.split("/").filter((function(e){return!!e})).pop(),a.pokemons.length<151&&a.pokemons.push(e),a.isLoading=!1})),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](4),console.log("error!");case 18:case"end":return e.stop()}}),e,this,[[4,15]])})));function t(){return e.apply(this,arguments)}return t}(),firstTime:function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.nextUrl=this.apiUrl,e.next=3,this.fetchData();case 3:return e.next=5,this.fetchData();case 5:return e.next=7,this.fetchData();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getNextData:function(){var e=this;window.onscroll=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(Math.abs(document.documentElement.scrollTop+document.documentElement.clientHeight>=document.documentElement.scrollHeight)<1&&e.pokemons.length<151)){t.next=3;break}return t.next=3,e.fetchData();case 3:case"end":return t.stop()}}),t)})))}},created:function(){this.nextUrl=this.apiUrl,this.firstTime()},mounted:function(){this.getNextData()}}),l=c,p=(n("90e0"),n("2877")),f=n("6544"),d=n.n(f),h=n("b0af"),m=n("99d9"),v=n("62ad"),g=n("adda"),b=n("a722"),x=n("6b53"),w=n("0fd9"),k=Object(p["a"])(l,i,s,!1,null,null,null),y=k.exports;d()(k,{VCard:h["a"],VCardTitle:m["a"],VCol:v["a"],VImg:g["a"],VLayout:b["a"],VResponsive:x["a"],VRow:w["a"]});var U={name:"App",components:{PokemonList:y},data:function(){return{imageUrl:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",apiUrl:"https://pokeapi.co/api/v2/pokemon/"}}},j=U,_=n("7496"),O=n("a523"),P=n("f6c4"),V=Object(p["a"])(j,a,o,!1,null,null,null),L=V.exports;d()(V,{VApp:_["a"],VContainer:O["a"],VMain:P["a"]});var R=n("f309");r["a"].use(R["a"]);var D=new R["a"]({theme:{dark:!0}});r["a"].config.productionTip=!1,new r["a"]({vuetify:D,render:function(e){return e(L)}}).$mount("#app")},"90e0":function(e,t,n){"use strict";n("3362")}});
//# sourceMappingURL=app.ffdbd4b7.js.map