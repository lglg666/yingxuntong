(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/musiclist"],{"162d":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var u=function(){var t=this,e=t.$createElement;t._self._c},r=[]},"8a1b":function(t,e,n){"use strict";n.r(e);var a=n("162d"),u=n("c81a");for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);n("e5e8");var i,l=n("f0c5"),o=Object(l["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);e["default"]=o.exports},c81a:function(t,e,n){"use strict";n.r(e);var a=n("f5a1"),u=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=u.a},e35d:function(t,e,n){},e5e8:function(t,e,n){"use strict";var a=n("e35d"),u=n.n(a);u.a},f5a1:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,default:"歌曲推荐"},more:{type:String,default:"更多推荐"},list:{type:Array,default:[]},isNav:{type:Boolean,default:!0}},methods:{toPlayer:function(e){t.navigateTo({url:"/pages/palyer/palyer?id="+e.id+"&index="+e.index+"&list="+encodeURIComponent(JSON.stringify(e.list))})}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/musiclist-create-component',
    {
        'components/musiclist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8a1b"))
        })
    },
    [['components/musiclist-create-component']]
]);
