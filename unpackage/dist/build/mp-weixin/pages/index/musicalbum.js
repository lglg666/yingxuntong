(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/musicalbum"],{"286c":function(t,n,c){"use strict";(function(t){c("2fb7");e(c("66fd"));var n=e(c("66a6"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,c("543d")["createPage"])},"560c":function(t,n,c){"use strict";var e;c.d(n,"b",(function(){return a})),c.d(n,"c",(function(){return r})),c.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,c=(t._self._c,t.album.description?t.album.description.slice(0,30):null);t.$mp.data=Object.assign({},{$root:{g0:c}})},r=[]},"66a6":function(t,n,c){"use strict";c.r(n);var e=c("560c"),a=c("c5ca");for(var r in a)"default"!==r&&function(t){c.d(n,t,(function(){return a[t]}))}(r);c("f874");var u,i=c("f0c5"),o=Object(i["a"])(a["default"],e["b"],e["c"],!1,null,"707339e1",null,!1,e["a"],u);n["default"]=o.exports},"7fe2":function(t,n,c){},c5ca:function(t,n,c){"use strict";c.r(n);var e=c("dc41"),a=c.n(e);for(var r in e)"default"!==r&&function(t){c.d(n,t,(function(){return e[t]}))}(r);n["default"]=a.a},dc41:function(t,n,c){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=c("be85");function a(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,c=null;return function(){null!==c&&clearTimeout(c),c=setTimeout(t,n)}}var r=null,u=function(){c.e("components/musiclist").then(function(){return resolve(c("8a1b"))}.bind(null,c)).catch(c.oe)},i={data:function(){return{album:{},bgimg:"",playList:[],scrollTop:20,scrollY:0}},components:{muList:u},computed:{targetMuList:function(){if(!this.album.tracks)return[];var t=this.album.tracks.slice(0,25);return t.map((function(t){return{id:t.id,name:t.name,picUrl:t.al.picUrl,n1:t.ar[0].name,n2:t.al.name}}))},customBar:function(){return this.CustomBar}},created:function(){r=this},onLoad:function(t){this.getData(t.id)},methods:{getData:function(t){var n=this,c={id:t};(0,e.getMuListDetail)(c).then((function(t){var c=t.playlist;n.bgimg=c.backgroundCoverUrl||c.coverImgUrl,n.album=c,n.playList=t.privileges}))},scrollpage:function(t){this.scrollY=t.detail.scrollTop,this.scroll()},scroll:a((function(){r.scrollY<5?r.scrollTop=20:r.scrollY<300&&(r.scrollTop=20-parseInt(r.scrollY))})),goBack:function(){t.navigateBack()}}};n.default=i}).call(this,c("543d")["default"])},f874:function(t,n,c){"use strict";var e=c("7fe2"),a=c.n(e);a.a}},[["286c","common/runtime","common/vendor"]]]);