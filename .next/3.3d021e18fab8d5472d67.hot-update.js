webpackHotUpdate(3,{

/***/ "./pages/photo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find__ = __webpack_require__("./node_modules/lodash/find.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Loading__ = __webpack_require__("./components/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_TitleBar__ = __webpack_require__("./components/TitleBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Slide__ = __webpack_require__("./components/Slide.js");
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\pages\\photo.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
    displayName: 'photo__Wrapper',
    componentId: 's18su4kr-0'
})(['display:flex;flex-direction:column;position:absolute;width:100%;height:100%;']);

var Content = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
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


            if (photo) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Wrapper,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 60
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_TitleBar__["a" /* default */], { title: 'React Photos', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_TitleBar__["a" /* default */], { title: photo.title, backLink: { pathname: '/album', query: { id: url.query.albumId } }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 62
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        Content,
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 63
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Slide__["a" /* default */], { imageUrl: photo.url, baseUrl: baseUrl, title: photo.title, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 64
                            }
                        })
                    )
                );
            } else {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    Wrapper,
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 70
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_TitleBar__["a" /* default */], { title: 'React Photos', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 71
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Loading__["a" /* default */], {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                        }
                    })
                );
            }
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return PhotoPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = PhotoPage;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Wrapper, 'Wrapper', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/pages/photo.js');
    reactHotLoader.register(Content, 'Content', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/pages/photo.js');
    reactHotLoader.register(PhotoPage, 'PhotoPage', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/pages/photo.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/pages/photo.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/photo")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.3d021e18fab8d5472d67.hot-update.js.map