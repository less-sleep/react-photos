module.exports=__NEXT_REGISTER_PAGE("/",function(){var e=webpackJsonp([2],{330:function(e,t,r){e.exports=r(331)},331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(12);var u=r(85);var i=r(86);var l=r(139);var c=r(140);var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function f(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=o["a"].div.withConfig({displayName:"pages__Wrapper",componentId:"s1cvwks4-0"})(["position:absolute;width:100%;height:100%;"]);var m=function(e){v(t,e);function t(){var e;var r,n,o;p(this,t);for(var u=arguments.length,i=Array(u),l=0;l<u;l++)i[l]=arguments[l];return o=(r=(n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n),n.state={baseUrl:"",albums:[]},n.createAlbums=function(e,t){return e.map(function(e){var r=e.id,n=e.title,o=e.photos;return a.a.createElement(c["a"],{key:r,id:r,link:{pathname:"/album",query:{id:r}},title:n,imageUrl:o[0]?o[0].url:void 0,baseUrl:t})})},n.update=function(e){n.setState({baseUrl:e.baseUrl,albums:[].concat(f(e.albums))})},r),b(n,o)}s(t,[{key:"componentDidMount",value:function e(){var t=this;fetch("/static/data.json").then(function(e){return e.json()}).then(function(e){t.update(e)})}},{key:"render",value:function e(){var t=this.state,r=t.albums,n=t.baseUrl;var o=void 0;o=r&&r.length>0?a.a.createElement(l["a"],null,this.createAlbums(r,n)):r&&0===r.length?a.a.createElement(u["a"],{message:"No Albums"}):a.a.createElement(u["a"],null);return a.a.createElement(h,null,a.a.createElement(i["a"],{title:"React Photos"}),o)}}]);return t}(n["Component"]);t["default"]=m}},[330]);return{page:e.default}});