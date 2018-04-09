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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\Loading.js';



var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'Loading__Wrapper',
    componentId: 'fk96ey-0'
})(['position:absolute;align-items:center;display:flex;justify-content:center;height:100%;overflow:hidden;width:100%;']);

var Loading = function Loading(_ref) {
    var _ref$message = _ref.message,
        message = _ref$message === undefined ? 'Loading' : _ref$message;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 14
            }
        },
        message
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "./components/Slide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\Slide.js';



var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'Slide__Wrapper',
    componentId: 's5oc7pi-0'
})(['position:absolute;width:100%;height:100%;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(', ');'], function (props) {
    return props.imageUrl;
});

var Picture = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.picture.withConfig({
    displayName: 'Slide__Picture',
    componentId: 's5oc7pi-1'
})(['display:flex;height:100%;position:absolute;width:100%;img{width:100%;height:auto;object-fit:contain;}']);

var Slide = function Slide(props) {
    var baseUrl = props.baseUrl,
        imageUrl = props.imageUrl,
        title = props.title;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 30
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Picture,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 800px)', srcSet: baseUrl + '/w_1200/' + imageUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 480px)', srcSet: baseUrl + '/w_800/' + imageUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(max-width: 480px)', srcSet: baseUrl + '/w_480/' + imageUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { srcSet: baseUrl + '/' + imageUrl, alt: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            })
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Slide);

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
})(['position:relative;width:100%;height:50px;border-bottom:rgb(234,234,234) solid 1px;display:flex;overflow:hidden;']);

var BackBtn = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a.withConfig({
    displayName: 'TitleBar__BackBtn',
    componentId: 's1cpxzxu-1'
})(['height:50px;width:50px;background-position:center center;background-repeat:no-repeat;background-image:url(\'/static/images/icon_back_arrow.svg\');border-right:rgb(234,234,234) solid 1px;cursor:pointer;display:block;&:hover{background-color:rgb(244,244,244);}']);

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
                lineNumber: 49
            }
        },
        backLink && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            { href: backLink, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(BackBtn, { title: 'Back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Title,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                TitleInner,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                },
                title
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (TitleBar);

/***/ }),

/***/ "./pages/photo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find__ = __webpack_require__("lodash/find");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Loading__ = __webpack_require__("./components/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TitleBar__ = __webpack_require__("./components/TitleBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Slide__ = __webpack_require__("./components/Slide.js");
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\pages\\photo.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'photo__Wrapper',
    componentId: 's18su4kr-0'
})(['display:flex;flex-direction:column;position:absolute;width:100%;height:100%;']);

var Content = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
    displayName: 'photo__Content',
    componentId: 's18su4kr-1'
})(['flex-grow:1;position:relative;']);

var PhotoPage = function (_Component) {
    _inherits(PhotoPage, _Component);

    function PhotoPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PhotoPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PhotoPage.__proto__ || Object.getPrototypeOf(PhotoPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            baseUrl: '',
            photo: undefined
        }, _this.update = function (data) {
            var url = _this.props.url;

            var album = __WEBPACK_IMPORTED_MODULE_2_lodash_find___default()(data.albums, { id: url.query.albumId });

            _this.setState(function () {
                return {
                    baseUrl: data.baseUrl,
                    photo: __WEBPACK_IMPORTED_MODULE_2_lodash_find___default()(album.photos, { id: url.query.photoId })
                };
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PhotoPage, [{
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
            var _state = this.state,
                photo = _state.photo,
                baseUrl = _state.baseUrl;
            var url = this.props.url;


            var content = undefined;

            if (photo) {
                content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_0_react__["Fragment"],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_TitleBar__["a" /* default */], { title: photo.title, backLink: { pathname: '/album', query: { id: url.query.albumId } }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 63
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Content,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Slide__["a" /* default */], { imageUrl: photo.url, baseUrl: baseUrl, title: photo.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 65
                            }
                        })
                    )
                );
            } else {
                content = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Loading__["a" /* default */], {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                });
            }

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Wrapper,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 74
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_TitleBar__["a" /* default */], { title: 'React Photos', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 75
                    }
                }),
                content
            );
        }
    }]);

    return PhotoPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PhotoPage);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/photo.js");


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
//# sourceMappingURL=photo.js.map