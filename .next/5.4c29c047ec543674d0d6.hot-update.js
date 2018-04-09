webpackHotUpdate(5,{

/***/ "./components/Image.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("./node_modules/styled-components/dist/styled-components.browser.es.js");
var _jsxFileName = 'C:\\Users\\Chris.DESKTOP-IGLGDVG\\Documents\\Projects\\react-photos\\components\\Image.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

    enterModule && enterModule(module);
})();



var IMAGE_WIDTH = '100%';

var Wrapper = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div.withConfig({
    displayName: 'Image__Wrapper',
    componentId: 's1rdrlm7-0'
})(['position:relative;width:100%;height:100%;background-color:rgb(235,235,235);overflow:hidden;']);

var Title = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].h3.withConfig({
    displayName: 'Image__Title',
    componentId: 's1rdrlm7-1'
})(['position:absolute;width:100%;left:0;bottom:0;font-family:\'Roboto Condensed\',Arial,Helvetica,Verdana,sans-serif;font-size:1.4em;line-height:1.4em;color:rgb(255,255,255);margin:0;padding:15px 18px 12px;background:-moz-linear-gradient(top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100%);background:-webkit-linear-gradient( top,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100% );background:linear-gradient( to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.75) 100% );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#00000000\',endColorstr=\'#a6000000\',GradientType=0 );z-index:1;']);

var Picture = __WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].picture.withConfig({
    displayName: 'Image__Picture',
    componentId: 's1rdrlm7-2'
})(['display:flex;height:100%;position:absolute;width:100%;img{width:100%;height:auto;object-fit:cover;}']);

var Image = function Image(_ref) {
    var title = _ref.title,
        baseUrl = _ref.baseUrl,
        imageUrl = _ref.imageUrl,
        index = _ref.index;

    var markup = undefined;
    var title_markup = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Title,
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 54
            }
        },
        title
    );

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Wrapper,
        { 'data-index': index, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
            }
        },
        imageUrl && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Picture,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 1200px)', srcSet: baseUrl + '/w_300/' + imageUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 800px)', srcSet: baseUrl + '/w_400/' + imageUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('source', { media: '(min-width: 480px)', srcSet: baseUrl + '/w_480/' + imageUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { srcSet: baseUrl + '/' + imageUrl, alt: title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            })
        ),
        title_markup
    );
};

var _default = Image;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(IMAGE_WIDTH, 'IMAGE_WIDTH', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Image.js');
    reactHotLoader.register(Wrapper, 'Wrapper', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Image.js');
    reactHotLoader.register(Title, 'Title', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Image.js');
    reactHotLoader.register(Picture, 'Picture', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Image.js');
    reactHotLoader.register(Image, 'Image', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Image.js');
    reactHotLoader.register(_default, 'default', 'C:/Users/Chris.DESKTOP-IGLGDVG/Documents/Projects/react-photos/components/Image.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.4c29c047ec543674d0d6.hot-update.js.map