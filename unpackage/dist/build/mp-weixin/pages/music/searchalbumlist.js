(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/music/searchalbumlist"],{"0622":function(t,e,n){"use strict";n.r(e);var o=n("9782"),i=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=i.a},"3dd4":function(t,e,n){"use strict";var o=n("7cdd"),i=n.n(o);i.a},"6c98":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"7cdd":function(t,e,n){},9782:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("1b15"),i=function(){n.e("components/songlist").then(function(){return resolve(n("e50b"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{CustomBar:this.CustomBar,albumlist:[],type:1e3,keyword:"",searchText:"",downOption:{auto:!1},upOption:{auto:!1,page:{num:0,size:14}},mescroll:null}},components:{songList:i},onLoad:function(t){this.type=t.type,this.keyword=t.keyword,this.apiSearch(t)},methods:{mescrollInit:function(t){this.mescroll=t},apiSearch:function(t){var e=this;this.searchText='搜索"'.concat(t.keyword,'"'),this.keyword=t.keyword,this.type=t.type,(0,o.apiSearch)({keywords:t.keyword,type:t.type,limit:18,offset:0}).then((function(t){e.albumlist=t.result.playlists}))},downCallback:function(t){this.mescroll.resetUpScroll()},upCallback:function(t){var e=this,n={limit:18,type:this.type,keywords:this.keyword,offset:18*(t.num-1)};(0,o.apiSearch)(n).then((function(n){var o=n.result.playlists,i=o.length,u=n.result.playlistCount;1==t.num&&(e.albumlist=[]),e.albumlist=e.albumlist.concat(o),e.$nextTick((function(){e.mescroll.endBySize(i,u)}))})).catch((function(t){e.mescroll.endErr()}))}}};e.default=u},"9e6f":function(t,e,n){"use strict";(function(t){n("2fb7");o(n("66fd"));var e=o(n("f12a"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},f12a:function(t,e,n){"use strict";n.r(e);var o=n("6c98"),i=n("0622");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("3dd4");var c,r=n("f0c5"),a=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],c);e["default"]=a.exports}},[["9e6f","common/runtime","common/vendor"]]]);