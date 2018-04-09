webpackHotUpdate(3,{

/***/ "./components/Slide.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Loading__ = __webpack_require__("./components/Loading.js");
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\Slide.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();





var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
    displayName: 'Slide__Wrapper',
    componentId: 's5oc7pi-0'
})(['position:absolute;width:100%;height:100%;background-position:center center;background-size:contain;background-repeat:no-repeat;background-image:url(', ');'], function (props) {
    return props.imageUrl;
});

var Picture = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].picture.withConfig({
    displayName: 'Slide__Picture',
    componentId: 's5oc7pi-1'
})(['display:flex;height:100%;position:absolute;width:100%;img{width:100%;height:auto;object-fit:contain;}']);

var Slide = function Slide(props) {
    var baseUrl = props.baseUrl,
        imageUrl = props.imageUrl,
        title = props.title;


    if (!imageUrl) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Wrapper,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                Picture,
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 800px)', srcSet: baseUrl + '/w_1200/' + imageUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 35
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 480px)', srcSet: baseUrl + '/w_800/' + imageUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 36
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(max-width: 480px)', srcSet: baseUrl + '/w_480/' + imageUrl, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 37
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { srcSet: baseUrl + '/' + imageUrl, alt: title, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 38
                    }
                })
            )
        );
    } else {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Loading__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 43
            }
        });
    }
};

var _default = Slide;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Wrapper, 'Wrapper', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Slide.js');
    reactHotLoader.register(Picture, 'Picture', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Slide.js');
    reactHotLoader.register(Slide, 'Slide', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Slide.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Slide.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.08efdb6cb7d69d18d5b8.hot-update.js.map