(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/mvlist"],{"2a35":function(t,n,e){"use strict";e.r(n);var a=e("7337"),u=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=u.a},"5f3b":function(t,n,e){"use strict";var a=e("cb01"),u=e.n(a);u.a},7337:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{list:{type:Array,default:function(){return[]}},link:{type:String,default:"",required:!1},isNav:{type:Boolean,default:!0}},data:function(){return{}},methods:{toPlayer:function(n){t.navigateTo({animationDuration:500,animationType:"fade-in",url:"/pages/palyer/videoplayer?id="+n})},toMvs:function(){t.switchTab({url:"/pages/video/index"})}}};n.default=e}).call(this,e("543d")["default"])},"93e7":function(t,n,e){"use strict";e.r(n);var a=e("bfed"),u=e("2a35");for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("5f3b");var i,o=e("f0c5"),f=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=f.exports},bfed:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},r=[]},cb01:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/mvlist-create-component',
    {
        'components/mvlist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("93e7"))
        })
    },
    [['components/mvlist-create-component']]
]);
