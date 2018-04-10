module.exports=__NEXT_REGISTER_PAGE("/photo",function(){var e=webpackJsonp([1],{332:function(e,t,r){e.exports=r(333)},333:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(12);var i=r(115);var l=r.n(i);var u=r(85);var c=r(86);var s=o["a"].div.withConfig({displayName:"Slide__Wrapper",componentId:"s5oc7pi-0"})(["position:absolute;width:100%;height:100%;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(",");"],function(e){return e.imageUrl});var p=o["a"].picture.withConfig({displayName:"Slide__Picture",componentId:"s5oc7pi-1"})(["display:flex;height:100%;position:absolute;width:100%;img{width:100%;height:auto;object-fit:contain;}"]);var f=function e(t){var r=t.baseUrl,n=t.imageUrl,o=t.title;return a.a.createElement(s,null,a.a.createElement(p,null,a.a.createElement("source",{media:"(min-width: 800px)",srcSet:r+"/w_1200/"+n}),a.a.createElement("source",{media:"(min-width: 480px)",srcSet:r+"/w_800/"+n}),a.a.createElement("source",{media:"(max-width: 480px)",srcSet:r+"/w_480/"+n}),a.a.createElement("img",{srcSet:r+"/"+n,alt:o})))};var d=f;var h=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}return function(t,r,n){r&&e(t.prototype,r);n&&e(t,n);return t}}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var y=o["a"].div.withConfig({displayName:"photo__Wrapper",componentId:"s18su4kr-0"})(["display:flex;flex-direction:column;position:absolute;width:100%;height:100%;"]);var g=o["a"].div.withConfig({displayName:"photo__Content",componentId:"s18su4kr-1"})(["flex-grow:1;position:relative;"]);var _=function(e){b(t,e);function t(){var e;var r,n,a;m(this,t);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return a=(r=(n=v(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n),n.state={baseUrl:"",photo:void 0},n.update=function(e){var t=n.props.url;var r=l()(e.albums,{id:t.query.albumId});n.setState(function(){return{baseUrl:e.baseUrl,photo:l()(r.photos,{id:t.query.photoId})}})},r),v(n,a)}h(t,[{key:"componentDidMount",value:function e(){var t=this;fetch("/static/data.json").then(function(e){return e.json()}).then(function(e){t.update(e)})}},{key:"render",value:function e(){var t=this.state,r=t.photo,o=t.baseUrl;var i=this.props.url;var l=void 0;l=r?a.a.createElement(n["Fragment"],null,a.a.createElement(c["a"],{title:r.title,backLink:{pathname:"/album",query:{id:i.query.albumId}}}),a.a.createElement(g,null,a.a.createElement(d,{imageUrl:r.url,baseUrl:o,title:r.title}))):a.a.createElement(u["a"],null);return a.a.createElement(y,null,a.a.createElement(c["a"],{title:"React Photos"}),l)}}]);return t}(n["Component"]);var w=t["default"]=_}},[332]);return{page:e.default}});