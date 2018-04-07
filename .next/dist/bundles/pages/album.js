module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\Grid.js';



var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'Grid__Wrapper',
    componentId: 's143fupq-0'
})(['flex-direction:row;flex-wrap:wrap;display:flex;& > *{width:100%;height:220px;@media (min-width:500px){width:calc(100% / 2);}@media (min-width:800px){width:calc(100% / 3);}@media (min-width:1200px){width:calc(100% / 4);}@media (min-width:1400px){width:calc(100% / 5);}@media (min-width:1600px){width:calc(100% / 6);}}']);

var Grid = function Grid(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 35
            }
        },
        props.children
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ "./components/Image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\Image.js';



var IMAGE_WIDTH = '100%';

var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'Image__Wrapper',
    componentId: 's1rdrlm7-0'
})(['position:relative;width:100%;height:100%;background-color:rgb(235,235,235);background-position:center center;background-size:cover;background-repeat:no-repeat;background-image:url(', ');overflow:hidden;'], function (props) {
    return props.imageUrl;
});

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h3.withConfig({
    displayName: 'Image__Title',
    componentId: 's1rdrlm7-1'
})(['position:absolute;width:100%;left:0;bottom:0;font-family:\'Roboto Condensed\',Arial,Helvetica,Verdana,sans-serif;font-size:1.4em;line-height:1.4em;color:rgb(255,255,255);margin:0;padding:15px 18px 12px;background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%);background:-webkit-linear-gradient( top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100% );background:linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100% );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00000000\',endColorstr=\'#a6000000\',GradientType=0 );z-index:1;']);

var Picture = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.withConfig({
    displayName: 'Image__Picture',
    componentId: 's1rdrlm7-2'
})(['width:100%;z-index:1;']);

var Image = function Image(props) {
    var title = props.title,
        imageUrl = props.imageUrl,
        index = props.index;


    var markup = undefined;
    var title_markup = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Title,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 52
            }
        },
        title
    );

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        { imageUrl: imageUrl, 'data-index': index, __source: {
                fileName: _jsxFileName,
                lineNumber: 55
            }
        },
        title_markup
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "./components/ImageLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Image__ = __webpack_require__("./components/Image.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\ImageLink.js';






var ImageLink = function ImageLink(props) {
    var id = props.id,
        title = props.title,
        link = props.link;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
        { href: link, prefetch: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 9
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'a',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Image__["a" /* default */], _extends({}, props, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }))
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (ImageLink);

/***/ }),

/***/ "./components/TitleBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\TitleBar.js';




var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.header.withConfig({
    displayName: 'TitleBar__Wrapper',
    componentId: 's1cpxzxu-0'
})(['position:relative;width:100%;height:50px;border-bottom:rgb(234,234,234) solid 1px;display:flex;']);

var BackBtn = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.withConfig({
    displayName: 'TitleBar__BackBtn',
    componentId: 's1cpxzxu-1'
})(['height:50px;width:50px;background-position:center center;background-repeat:no-repeat;background-image:url(\'/static/images/icon_back_arrow.svg\');display:block;&:hover{background-color:rgb(234,234,234);}']);

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.h2.withConfig({
    displayName: 'TitleBar__Title',
    componentId: 's1cpxzxu-2'
})(['height:100%;font-family:\'Roboto Condensed\',Arial,Helvetica,Verdana,sans-serif;font-size:1.2em;line-height:1.2em;color:rgb(0,0,0);margin:0 0 0 15px;padding:3px 0 0;display:table;']);

var TitleInner = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.span.withConfig({
    displayName: 'TitleBar__TitleInner',
    componentId: 's1cpxzxu-3'
})(['height:100%;vertical-align:middle;display:table-cell;']);

var TitleBar = function TitleBar(props) {
    var title = props.title,
        backLink = props.backLink;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 46
            }
        },
        backLink && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: backLink, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BackBtn, { title: 'Back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Title,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                TitleInner,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                },
                title
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (TitleBar);

/***/ }),

/***/ "./pages/album.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find__ = __webpack_require__("lodash/find");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_TitleBar__ = __webpack_require__("./components/TitleBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Grid__ = __webpack_require__("./components/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ImageLink__ = __webpack_require__("./components/ImageLink.js");
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\pages\\album.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'album__Wrapper',
    componentId: 'ogemz-0'
})(['position:absolute;width:100%;height:100%;']);

var AlbumPage = function (_Component) {
    _inherits(AlbumPage, _Component);

    function AlbumPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AlbumPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AlbumPage.__proto__ || Object.getPrototypeOf(AlbumPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            album: undefined
        }, _this.createPhotos = function (photos) {
            var album = _this.state.album;


            return photos.map(function (_ref2) {
                var id = _ref2.id,
                    title = _ref2.title,
                    url = _ref2.url;

                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ImageLink__["a" /* default */], {
                    key: id,
                    id: id,
                    link: { pathname: '/photo', query: { albumId: album.id, photoId: id } },
                    title: title,
                    imageUrl: url,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                    }
                });
            });
        }, _this.update = function (data) {
            var url = _this.props.url;


            _this.setState(function () {
                return {
                    album: __WEBPACK_IMPORTED_MODULE_2_lodash_find___default()(data.albums, { id: url.query.id })
                };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AlbumPage, [{
        key: 'componentDidMount',


        /* getInitialProps = async ({req}) => {
            const res = await fetch('static/data.json');
            const json = await res.json();
            this.update(data);
        }; */

        value: function componentDidMount() {
            var _this2 = this;

            fetch('/static/data.json').then(function (res) {
                return res.json();
            }).then(function (json) {
                _this2.update(json);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var album = this.state.album;

            var photos = album ? album.photos : [];

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Wrapper,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_TitleBar__["a" /* default */], { title: 'React Photos', backLink: '/', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }),
                photos.length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_4__components_Grid__["a" /* default */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    },
                    this.createPhotos(photos)
                ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                        }
                    },
                    'No Photos'
                )
            );
        }
    }]);

    return AlbumPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AlbumPage);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/album.js");


/***/ }),

/***/ "lodash/find":
/***/ (function(module, exports) {

module.exports = require("lodash/find");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=album.js.map