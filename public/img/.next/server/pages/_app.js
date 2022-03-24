module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/layouts/DefaultLayout.jsx":
/*!**********************************************!*\
  !*** ./components/layouts/DefaultLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Head */ "./components/layouts/modules/Head.jsx");
var _jsxFileName = "F:\\newapollo\\components\\layouts\\DefaultLayout.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const DefaultLayout = ({
  children
}) => __jsx("div", {
  className: "layout--default",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(_modules_Head__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}), children, __jsx("div", {
  id: "loader-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "loader-section section-left",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}), __jsx("div", {
  className: "loader-section section-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/modules/Head.jsx":
/*!*********************************************!*\
  !*** ./components/layouts/modules/Head.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\newapollo\\components\\layouts\\modules\\Head.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const StyleSheets = () => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, "newapollo"), __jsx("link", {
  rel: "shortcut icon",
  href: "/img/favicon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/img/favicon.png",
  sizes: "32x32",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "icon",
  href: "/img/favicon.png",
  sizes: "192x192",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "apple-touch-icon-precomposed",
  href: "/img/favicon.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
}), __jsx("meta", {
  httpEquiv: "X-UA-Compatible",
  content: "IE=edge",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "format-detection",
  content: "telephone=no",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "apple-mobile-web-app-capable",
  content: "yes",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "author",
  content: "nouthemes",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "keywords",
  content: "newapollo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }
}), __jsx("meta", {
  name: "description",
  content: "newapollo",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }
}), __jsx("script", {
  src: "https://checkout.razorpay.com/v1/checkout.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/slick-theme.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/slick.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/style.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/css/bootstrap.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
  integrity: "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p",
  crossOrigin: "anonymous",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (StyleSheets);

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-component-countdown-timer/lib/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/react-component-countdown-timer/lib/styles.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/store */ "./store/store.js");
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout.jsx");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var node_modules_react_component_countdown_timer_lib_styles_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! node_modules/react-component-countdown-timer/lib/styles.css */ "./node_modules/react-component-countdown-timer/lib/styles.css");
/* harmony import */ var node_modules_react_component_countdown_timer_lib_styles_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(node_modules_react_component_countdown_timer_lib_styles_css__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "F:\\newapollo\\pages\\_app.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_0___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistStore"])(props.store);
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;

    const getLayout = Component.getLayout || (page => __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: page,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 59
      }
    }));

    return getLayout(__jsx(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_6__["PersistGate"], {
      loading: __jsx(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 30
        }
      })),
      persistor: this.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default()(_store_store__WEBPACK_IMPORTED_MODULE_7__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(MyApp)));

/***/ }),

/***/ "./repositories/AdminRepository.js":
/*!*****************************************!*\
  !*** ./repositories/AdminRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getAdminMenuAll() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminmenu/all`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getAdminUserMenu() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminmenu/`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getAllOperators() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/operator/getoperator/Y`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async changePassword(data) {
    console.log(user, 'data'); //  if (user.user.type === "S")

    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/adminmenu/changepasswordsuperadmin`, data) // else
    //     const reponse = await Repository.put(`${apiUrl}/adminmenu/changepasswordadminoperator`, data)
    .then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/AuthRepository.js":
/*!****************************************!*\
  !*** ./repositories/AuthRepository.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async adminLogin(payload) {
    var data = {
      "admin_name": payload.user,
      "admin_pass": payload.password,
      "type": payload.type,
      "logintype": payload.logintype
    };
    let url = '';

    if (payload.type === "S") {
      url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/login`;
    } else {
      url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/login/adminfaculty`;
    }

    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(url, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/DashboardCategoryRepository.js":
/*!*****************************************************!*\
  !*** ./repositories/DashboardCategoryRepository.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getAlldashboardCategory(payload) {
    console.log("1234", payload);
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getInactivedashboardCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/inactive?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async savedashboardCategory(formdata) {
    console.log("12345689");
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async editdashboardCategory(categoryId, formdata) {
    console.log("12345689");
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/catId/${categoryId}`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async inactiveCategory(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/inactive`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async deleteCategory(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/`, {
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    }).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    ;
    return reponse;
  }

  async changePosition(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/dashboardCategory/position`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async imageUpload(formData) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/image/dashboard`, formData).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/LocationControllerRepository.js":
/*!******************************************************!*\
  !*** ./repositories/LocationControllerRepository.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getAllState(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/state/Y?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getState(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/state/Y`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getInactiveState(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/state/N?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async saveState(formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/state/`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async editState(categoryId, formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/State/${categoryId}`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async inactiveCategory(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/statestatus`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  } //City


  async getAllCity(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/city/Y?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getInactiveCity(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/city/N?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async saveCity(formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/city/`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async editCity(categoryId, formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/city/${categoryId}`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async inactiveCity(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/location/citystatus`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/*! exports provided: baseurl, apiUrl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseurl", function() { return baseurl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiUrl", function() { return apiUrl; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseurl = "https://myadmin.questioncloud.in/adminapi"; // export const baseurl = "http://localhost:4003";

const apiUrl = baseurl + "/api";
let customHeaders = {
  Accept: 'application/json'
};
let local = false ? undefined : null;

if (local && local.usertoken) {
  customHeaders['x-auth-token'] = local.usertoken;
}

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  headers: customHeaders
}));

/***/ }),

/***/ "./repositories/StudentRepository.js":
/*!*******************************************!*\
  !*** ./repositories/StudentRepository.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getAllStudent(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/status/Y?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getInactiveStudent(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/status/N?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async saveStudent(formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async updateStudent(categoryId, formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/id/${categoryId}`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async changeStatus(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/status`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async deleteStudent(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/status`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getStudentsCount(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/stud-count/${stud_status}?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getStudentById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/id/${stud_id}?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async downloadStudentReport(status, startDate, endDate) {
    let url = `${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/student/download/${status}`;

    if (startDate && endDate) {
      url += `?startDate=${startDate}&endDate=${endDate}`;
    } else if (startDate) {
      url += `?startDate=${startDate}`;
    } else if (endDate) {
      url += `?endDate=${endDate}`;
    }

    const reponse = axios__WEBPACK_IMPORTED_MODULE_1___default()({
      method: "GET",
      url: url,
      responseType: 'blob'
    }).then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./repositories/TestimonialsRepository.js":
/*!************************************************!*\
  !*** ./repositories/TestimonialsRepository.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getAllTestimonials(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getInactiveTestimonials(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/inactive?_start=${payload._start}&_limit=${payload._limit}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async saveTestimonials(formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async editTestimonials(categoryId, formdata) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/catId/${categoryId}`, formdata).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async inactiveCategory(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/inactive`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async deleteCategory(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].delete(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/`, {
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    }).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    ;
    return reponse;
  }

  async changePosition(data) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].put(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/Testimonials/position`, data).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async imageUpload(formData) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["apiUrl"]}/image/testimonials`, formData).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthRepository());

/***/ }),

/***/ "./store/City/action.js":
/*!******************************!*\
  !*** ./store/City/action.js ***!
  \******************************/
/*! exports provided: actionTypes, getAllCity, getAllCitySuccess, getInactiveCity, getInactiveCitySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCity", function() { return getAllCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCitySuccess", function() { return getAllCitySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveCity", function() { return getInactiveCity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveCitySuccess", function() { return getInactiveCitySuccess; });
const actionTypes = {
  GET_ALL_CITY_REQUEST: 'GET_ALL_CITY_REQUEST',
  GET_ALL_CITY_SUCCESS: 'GET_ALL_CITY_SUCCESS',
  GET_INACTIVE_CITY_REQUEST: 'GET_INACTIVE_CITY_REQUEST',
  GET_INACTIVE_CITY_SUCCESS: 'GET_INACTIVE_CITY_SUCCESS'
};
function getAllCity(payload) {
  return {
    type: actionTypes.GET_ALL_CITY_REQUEST,
    payload
  };
}
function getAllCitySuccess(payload) {
  return {
    type: actionTypes.GET_ALL_CITY_SUCCESS,
    payload
  };
}
function getInactiveCity(payload) {
  return {
    type: actionTypes.GET_INACTIVE_CITY_REQUEST,
    payload
  };
}
function getInactiveCitySuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_CITY_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/City/reducer.js":
/*!*******************************!*\
  !*** ./store/City/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/City/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  allCity: [],
  totalActiveCount: 0,
  inactiveCity: [],
  totalInactiveCount: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_CITY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allCity: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.city : [],
        totalActiveCount: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.count : 0
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_CITY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveCity: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.city : [],
        totalInactiveCount: action.payload && action.payload.city && action.payload.city.length > 0 ? action.payload.count : 0
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/City/saga.js":
/*!****************************!*\
  !*** ./store/City/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/City/action.js");
/* harmony import */ var _repositories_LocationControllerRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/LocationControllerRepository */ "./repositories/LocationControllerRepository.js");




function* getAllCitySaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_LocationControllerRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getAllCity, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllCitySuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllCitySuccess"])(null));
  }
}

function* getInactiveCitySaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_LocationControllerRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveCity, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveCitySuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveCitySuccess"])(null));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_CITY_REQUEST, getAllCitySaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_CITY_REQUEST, getInactiveCitySaga)]);
}

/***/ }),

/***/ "./store/DashboardCategory/action.js":
/*!*******************************************!*\
  !*** ./store/DashboardCategory/action.js ***!
  \*******************************************/
/*! exports provided: actionTypes, getAllDashboardCategory, getAllDashboardCategorySuccess, getInactiveDashboardCategory, getInactiveDashboardCategorySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDashboardCategory", function() { return getAllDashboardCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllDashboardCategorySuccess", function() { return getAllDashboardCategorySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveDashboardCategory", function() { return getInactiveDashboardCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveDashboardCategorySuccess", function() { return getInactiveDashboardCategorySuccess; });
const actionTypes = {
  GET_ALL_DASHBOARD_CATEGORY_REQUEST: 'GET_ALL_DASHBOARD_CATEGORY_REQUEST',
  GET_ALL_DASHBOARD_CATEGORY_SUCCESS: 'GET_ALL_DASHBOARD_CATEGORY_SUCCESS',
  GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST: 'GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST',
  GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS: 'GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS'
};
function getAllDashboardCategory(payload) {
  return {
    type: actionTypes.GET_ALL_DASHBOARD_CATEGORY_REQUEST,
    payload
  };
}
function getAllDashboardCategorySuccess(payload) {
  return {
    type: actionTypes.GET_ALL_DASHBOARD_CATEGORY_SUCCESS,
    payload
  };
}
function getInactiveDashboardCategory(payload) {
  return {
    type: actionTypes.GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST,
    payload
  };
}
function getInactiveDashboardCategorySuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/DashboardCategory/reducer.js":
/*!********************************************!*\
  !*** ./store/DashboardCategory/reducer.js ***!
  \********************************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/DashboardCategory/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  allDashboardCategory: [],
  totalActiveCount: 0,
  inactiveDashboardCategory: [],
  totalInactiveCount: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_DASHBOARD_CATEGORY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allDashboardCategory: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
        totalActiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_DASHBOARD_CATEGORY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveDashboardCategory: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
        totalInactiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/DashboardCategory/saga.js":
/*!*****************************************!*\
  !*** ./store/DashboardCategory/saga.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/DashboardCategory/action.js");
/* harmony import */ var _repositories_DashboardCategoryRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/DashboardCategoryRepository */ "./repositories/DashboardCategoryRepository.js");




function* getAllDashboardCategorySaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_DashboardCategoryRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getAlldashboardCategory, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllDashboardCategorySuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllDashboardCategorySuccess"])(null));
  }
}

function* getInactiveDashboardCategorySaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_DashboardCategoryRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactivedashboardCategory, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveDashboardCategorySuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveDashboardCategorySuccess"])(null));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_DASHBOARD_CATEGORY_REQUEST, getAllDashboardCategorySaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_DASHBOARD_CATEGORY_REQUEST, getInactiveDashboardCategorySaga)]);
}

/***/ }),

/***/ "./store/Student/action.js":
/*!*********************************!*\
  !*** ./store/Student/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, getAllStudent, getAllStudentSuccess, getInactiveStudent, getInactiveStudentSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStudent", function() { return getAllStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllStudentSuccess", function() { return getAllStudentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveStudent", function() { return getInactiveStudent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveStudentSuccess", function() { return getInactiveStudentSuccess; });
const actionTypes = {
  GET_ALL_STUDENT_REQUEST: 'GET_ALL_STUDENT_REQUEST',
  GET_ALL_STUDENT_SUCCESS: 'GET_ALL_STUDENT_SUCCESS',
  GET_INACTIVE_STUDENT_REQUEST: 'GET_INACTIVE_STUDENT_REQUEST',
  GET_INACTIVE_STUDENT_SUCCESS: 'GET_INACTIVE_STUDENT_SUCCESS'
};
function getAllStudent(payload) {
  return {
    type: actionTypes.GET_ALL_STUDENT_REQUEST,
    payload
  };
}
function getAllStudentSuccess(payload) {
  return {
    type: actionTypes.GET_ALL_STUDENT_SUCCESS,
    payload
  };
}
function getInactiveStudent(payload) {
  return {
    type: actionTypes.GET_INACTIVE_STUDENT_REQUEST,
    payload
  };
}
function getInactiveStudentSuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_STUDENT_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/Student/reducer.js":
/*!**********************************!*\
  !*** ./store/Student/reducer.js ***!
  \**********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/Student/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  allStudent: [],
  totalActiveCount: 0,
  inactiveStudent: [],
  totalInactiveCount: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_STUDENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allStudent: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.Student : [],
        totalActiveCount: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.count : 0
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_STUDENT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveStudent: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.Student : [],
        totalInactiveCount: action.payload && action.payload.Student && action.payload.Student.length > 0 ? action.payload.count : 0
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/Student/saga.js":
/*!*******************************!*\
  !*** ./store/Student/saga.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/Student/action.js");
/* harmony import */ var _repositories_StudentRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/StudentRepository */ "./repositories/StudentRepository.js");




function* getAllStudentSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_StudentRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getAllStudent, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllStudentSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllStudentSuccess"])(null));
  }
}

function* getInactiveStudentSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_StudentRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveStudent, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveStudentSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveStudentSuccess"])(null));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_STUDENT_REQUEST, getAllStudentSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_STUDENT_REQUEST, getInactiveStudentSaga)]);
}

/***/ }),

/***/ "./store/Testimonials/action.js":
/*!**************************************!*\
  !*** ./store/Testimonials/action.js ***!
  \**************************************/
/*! exports provided: actionTypes, getAllTestimonials, getAllTestimonialsSuccess, getInactiveTestimonials, getInactiveTestimonialsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTestimonials", function() { return getAllTestimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllTestimonialsSuccess", function() { return getAllTestimonialsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveTestimonials", function() { return getInactiveTestimonials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInactiveTestimonialsSuccess", function() { return getInactiveTestimonialsSuccess; });
const actionTypes = {
  GET_ALL_TESTIMONIALS_REQUEST: 'GET_ALL_TESTIMONIALS_REQUEST',
  GET_ALL_TESTIMONIALS_SUCCESS: 'GET_ALL_TESTIMONIALS_SUCCESS',
  GET_INACTIVE_TESTIMONIALS_REQUEST: 'GET_INACTIVE_TESTIMONIALS_REQUEST',
  GET_INACTIVE_TESTIMONIALS_SUCCESS: 'GET_INACTIVE_TESTIMONIALS_SUCCESS'
};
function getAllTestimonials(payload) {
  return {
    type: actionTypes.GET_ALL_TESTIMONIALS_REQUEST,
    payload
  };
}
function getAllTestimonialsSuccess(payload) {
  return {
    type: actionTypes.GET_ALL_TESTIMONIALS_SUCCESS,
    payload
  };
}
function getInactiveTestimonials(payload) {
  return {
    type: actionTypes.GET_INACTIVE_TESTIMONIALS_REQUEST,
    payload
  };
}
function getInactiveTestimonialsSuccess(payload) {
  return {
    type: actionTypes.GET_INACTIVE_TESTIMONIALS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/Testimonials/reducer.js":
/*!***************************************!*\
  !*** ./store/Testimonials/reducer.js ***!
  \***************************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/Testimonials/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  allTestimonials: [],
  totalActiveCount: 0,
  inactiveTestimonials: [],
  totalInactiveCount: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ALL_TESTIMONIALS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allTestimonials: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
        totalActiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_INACTIVE_TESTIMONIALS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        inactiveTestimonials: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.category : [],
        totalInactiveCount: action.payload && action.payload.category && action.payload.category.length > 0 ? action.payload.count : 0
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/Testimonials/saga.js":
/*!************************************!*\
  !*** ./store/Testimonials/saga.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/Testimonials/action.js");
/* harmony import */ var _repositories_TestimonialsRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/TestimonialsRepository */ "./repositories/TestimonialsRepository.js");




function* getAllTestimonialsSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_TestimonialsRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getAllTestimonials, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllTestimonialsSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAllTestimonialsSuccess"])(null));
  }
}

function* getInactiveTestimonialsSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_TestimonialsRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getInactiveTestimonials, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveTestimonialsSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getInactiveTestimonialsSuccess"])(null));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ALL_TESTIMONIALS_REQUEST, getAllTestimonialsSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_INACTIVE_TESTIMONIALS_REQUEST, getInactiveTestimonialsSaga)]);
}

/***/ }),

/***/ "./store/admin/action.js":
/*!*******************************!*\
  !*** ./store/admin/action.js ***!
  \*******************************/
/*! exports provided: actionTypes, getAdminMenuAll, getAdminMenuAllSuccess, getAdminUserMenu, getAdminUserMenuSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminMenuAll", function() { return getAdminMenuAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminMenuAllSuccess", function() { return getAdminMenuAllSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUserMenu", function() { return getAdminUserMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminUserMenuSuccess", function() { return getAdminUserMenuSuccess; });
const actionTypes = {
  GET_ADMIN_MENU_ALL_REQUEST: 'GET_ADMIN_MENU_ALL_REQUEST',
  GET_ADMIN_MENU_ALL_SUCCESS: 'GET_ADMIN_MENU_ALL_SUCCESS',
  GET_ADMIN_USER_MENU_REQUEST: 'GET_ADMIN_USER_MENU_REQUEST',
  GET_ADMIN_USER_MENU_SUCCESS: 'GET_ADMIN_USER_MENU_SUCCESS'
};
function getAdminMenuAll() {
  console.log('dckndcscsdc');
  return {
    type: actionTypes.GET_ADMIN_MENU_ALL_REQUEST
  };
}
function getAdminMenuAllSuccess(payload) {
  return {
    type: actionTypes.GET_ADMIN_MENU_ALL_SUCCESS,
    payload
  };
}
function getAdminUserMenu() {
  return {
    type: actionTypes.GET_ADMIN_USER_MENU_REQUEST
  };
}
function getAdminUserMenuSuccess(payload) {
  return {
    type: actionTypes.GET_ADMIN_USER_MENU_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/admin/reducer.js":
/*!********************************!*\
  !*** ./store/admin/reducer.js ***!
  \********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/admin/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  allMenu: [],
  userMenu: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ADMIN_MENU_ALL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allMenu: action.payload && action.payload.Adminmenu && action.payload.Adminmenu.length > 0 ? action.payload.Adminmenu : []
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_ADMIN_USER_MENU_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        userMenu: action.payload && action.payload.Adminmenu && action.payload.Adminmenu.length > 0 ? action.payload.Adminmenu : []
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/admin/saga.js":
/*!*****************************!*\
  !*** ./store/admin/saga.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/admin/action.js");
/* harmony import */ var _repositories_AdminRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/AdminRepository */ "./repositories/AdminRepository.js");




function* getAdminMenuAllSaga() {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_AdminRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getAdminMenuAll);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAdminMenuAllSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAdminMenuAllSuccess"])(null));
  }
}

function* getAdminUserMenuSaga() {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_AdminRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getAdminUserMenu);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAdminUserMenuSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["getAdminUserMenuSuccess"])(null));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ADMIN_MENU_ALL_REQUEST, getAdminMenuAllSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].GET_ADMIN_USER_MENU_REQUEST, getAdminUserMenuSaga)]);
}

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/*! exports provided: actionTypes, login, loginSuccess, logout, logoutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutSuccess", function() { return logoutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT_REQUEST: 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
};
function login(payload) {
  return {
    type: actionTypes.LOGIN_REQUEST,
    payload
  };
}
function loginSuccess(payload) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload
  };
}
function logout() {
  return {
    type: actionTypes.LOGOUT_REQUEST
  };
}
function logoutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "./store/auth/reducer.js":
/*!*******************************!*\
  !*** ./store/auth/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false,
  auth: {},
  token: ''
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        auth: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGOUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        auth: {},
        token: '',
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
/* harmony import */ var _repositories_AuthRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/AuthRepository */ "./repositories/AuthRepository.js");




function* loginSaga({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_AuthRepository__WEBPACK_IMPORTED_MODULE_2__["default"].login, payload);

    if (data && data.statusCode === 200 && data.authorization) {
      let res = data.data;
      res.authorization = data.authorization;
      res.isLoggedIn = true;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"])(res));
    } else if (data && data.statusCode === 400) {} else if (data && data.statusCode === 404) {} else {}
  } catch (err) {// console.log(err);
  }
}

function* logoutSaga() {
  try {
    localStorage.removeItem('usertoken'); // yield call(AuthRepository.logout);

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["logoutSuccess"])());
  } catch (err) {// console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGIN_REQUEST, loginSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].LOGOUT_REQUEST, logoutSaga)]);
}

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./store/auth/reducer.js");
/* harmony import */ var _admin_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/reducer */ "./store/admin/reducer.js");
/* harmony import */ var _DashboardCategory_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardCategory/reducer */ "./store/DashboardCategory/reducer.js");
/* harmony import */ var _Student_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Student/reducer */ "./store/Student/reducer.js");
/* harmony import */ var _Testimonials_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Testimonials/reducer */ "./store/Testimonials/reducer.js");
/* harmony import */ var _City_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./City/reducer */ "./store/City/reducer.js");







/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  admin: _admin_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  DashboardCategory: _DashboardCategory_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  Student: _Student_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  Testimonials: _Testimonials_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  City: _City_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _admin_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/saga */ "./store/admin/saga.js");
/* harmony import */ var _DashboardCategory_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DashboardCategory/saga */ "./store/DashboardCategory/saga.js");
/* harmony import */ var _Student_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Student/saga */ "./store/Student/saga.js");
/* harmony import */ var _Testimonials_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Testimonials/saga */ "./store/Testimonials/saga.js");
/* harmony import */ var _City_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./City/saga */ "./store/City/saga.js");







function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_auth_saga__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_admin_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_DashboardCategory_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_Student_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_Testimonials_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_City_saga__WEBPACK_IMPORTED_MODULE_6__["default"])()]);
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootSaga */ "./store/rootSaga.js");







const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const persistConfig = {
  key: 'QuestionCloudAdmin',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default()),
  whitelist: ['auth']
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]);

function configureStore(initialState) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9EZWZhdWx0TGF5b3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dHMvbW9kdWxlcy9IZWFkLmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvQWRtaW5SZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9BdXRoUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvRGFzaGJvYXJkQ2F0ZWdvcnlSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9Mb2NhdGlvbkNvbnRyb2xsZXJSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9SZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9TdHVkZW50UmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvVGVzdGltb25pYWxzUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9DaXR5L2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9DaXR5L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvQ2l0eS9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0Rhc2hib2FyZENhdGVnb3J5L2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9EYXNoYm9hcmRDYXRlZ29yeS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL0Rhc2hib2FyZENhdGVnb3J5L3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvU3R1ZGVudC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvU3R1ZGVudC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1N0dWRlbnQvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9UZXN0aW1vbmlhbHMvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1Rlc3RpbW9uaWFscy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL1Rlc3RpbW9uaWFscy9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FkbWluL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hZG1pbi9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FkbWluL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYXV0aC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGgvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yb290U2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiJdLCJuYW1lcyI6WyJEZWZhdWx0TGF5b3V0IiwiY2hpbGRyZW4iLCJTdHlsZVNoZWV0cyIsInBhZ2VQcm9wcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJfX05fU1NHIiwidXJsIiwiY3JlYXRlVXJsIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJjb25zb2xlIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiTXlBcHAiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicGVyc2lzdG9yIiwicGVyc2lzdFN0b3JlIiwic3RvcmUiLCJnZXRMYXlvdXQiLCJwYWdlIiwid2l0aFJlZHV4IiwiY3JlYXRlU3RvcmUiLCJ3aXRoUmVkdXhTYWdhIiwiQXV0aFJlcG9zaXRvcnkiLCJjYWxsYmFjayIsImdldEFkbWluTWVudUFsbCIsInJlcG9uc2UiLCJSZXBvc2l0b3J5IiwiZ2V0IiwiYXBpVXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0QWRtaW5Vc2VyTWVudSIsImdldEFsbE9wZXJhdG9ycyIsImNoYW5nZVBhc3N3b3JkIiwibG9nIiwidXNlciIsInB1dCIsImFkbWluTG9naW4iLCJwYXlsb2FkIiwicGFzc3dvcmQiLCJ0eXBlIiwibG9naW50eXBlIiwicG9zdCIsImdldEFsbGRhc2hib2FyZENhdGVnb3J5IiwiX3N0YXJ0IiwiX2xpbWl0IiwiZ2V0SW5hY3RpdmVkYXNoYm9hcmRDYXRlZ29yeSIsInNhdmVkYXNoYm9hcmRDYXRlZ29yeSIsImZvcm1kYXRhIiwiZWRpdGRhc2hib2FyZENhdGVnb3J5IiwiY2F0ZWdvcnlJZCIsImluYWN0aXZlQ2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsImRlbGV0ZSIsImhlYWRlcnMiLCJjaGFuZ2VQb3NpdGlvbiIsImltYWdlVXBsb2FkIiwiZm9ybURhdGEiLCJnZXRBbGxTdGF0ZSIsImdldFN0YXRlIiwiZ2V0SW5hY3RpdmVTdGF0ZSIsInNhdmVTdGF0ZSIsImVkaXRTdGF0ZSIsImdldEFsbENpdHkiLCJnZXRJbmFjdGl2ZUNpdHkiLCJzYXZlQ2l0eSIsImVkaXRDaXR5IiwiaW5hY3RpdmVDaXR5IiwiYmFzZXVybCIsImN1c3RvbUhlYWRlcnMiLCJBY2NlcHQiLCJsb2NhbCIsImxvY2FsU3RvcmFnZSIsInVzZXJ0b2tlbiIsImF4aW9zIiwiY3JlYXRlIiwiZ2V0QWxsU3R1ZGVudCIsImdldEluYWN0aXZlU3R1ZGVudCIsInNhdmVTdHVkZW50IiwidXBkYXRlU3R1ZGVudCIsImNoYW5nZVN0YXR1cyIsImRlbGV0ZVN0dWRlbnQiLCJnZXRTdHVkZW50c0NvdW50Iiwic3R1ZF9zdGF0dXMiLCJnZXRTdHVkZW50QnlJZCIsInN0dWRfaWQiLCJkb3dubG9hZFN0dWRlbnRSZXBvcnQiLCJzdGF0dXMiLCJzdGFydERhdGUiLCJlbmREYXRlIiwibWV0aG9kIiwicmVzcG9uc2VUeXBlIiwiZ2V0QWxsVGVzdGltb25pYWxzIiwiZ2V0SW5hY3RpdmVUZXN0aW1vbmlhbHMiLCJzYXZlVGVzdGltb25pYWxzIiwiZWRpdFRlc3RpbW9uaWFscyIsImFjdGlvblR5cGVzIiwiR0VUX0FMTF9DSVRZX1JFUVVFU1QiLCJHRVRfQUxMX0NJVFlfU1VDQ0VTUyIsIkdFVF9JTkFDVElWRV9DSVRZX1JFUVVFU1QiLCJHRVRfSU5BQ1RJVkVfQ0lUWV9TVUNDRVNTIiwiZ2V0QWxsQ2l0eVN1Y2Nlc3MiLCJnZXRJbmFjdGl2ZUNpdHlTdWNjZXNzIiwiaW5pdFN0YXRlIiwiYWxsQ2l0eSIsInRvdGFsQWN0aXZlQ291bnQiLCJ0b3RhbEluYWN0aXZlQ291bnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjaXR5IiwibGVuZ3RoIiwiY291bnQiLCJnZXRBbGxDaXR5U2FnYSIsImNhbGwiLCJDaXR5UmVwb3NpdG9yeSIsImVyciIsImdldEluYWN0aXZlQ2l0eVNhZ2EiLCJyb290U2FnYSIsImFsbCIsInRha2VFdmVyeSIsIkdFVF9BTExfREFTSEJPQVJEX0NBVEVHT1JZX1JFUVVFU1QiLCJHRVRfQUxMX0RBU0hCT0FSRF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0lOQUNUSVZFX0RBU0hCT0FSRF9DQVRFR09SWV9SRVFVRVNUIiwiR0VUX0lOQUNUSVZFX0RBU0hCT0FSRF9DQVRFR09SWV9TVUNDRVNTIiwiZ2V0QWxsRGFzaGJvYXJkQ2F0ZWdvcnkiLCJnZXRBbGxEYXNoYm9hcmRDYXRlZ29yeVN1Y2Nlc3MiLCJnZXRJbmFjdGl2ZURhc2hib2FyZENhdGVnb3J5IiwiZ2V0SW5hY3RpdmVEYXNoYm9hcmRDYXRlZ29yeVN1Y2Nlc3MiLCJhbGxEYXNoYm9hcmRDYXRlZ29yeSIsImluYWN0aXZlRGFzaGJvYXJkQ2F0ZWdvcnkiLCJjYXRlZ29yeSIsImdldEFsbERhc2hib2FyZENhdGVnb3J5U2FnYSIsIkRhc2hib2FyZENhdGVnb3J5UmVwb3NpdG9yeSIsImdldEluYWN0aXZlRGFzaGJvYXJkQ2F0ZWdvcnlTYWdhIiwiR0VUX0FMTF9TVFVERU5UX1JFUVVFU1QiLCJHRVRfQUxMX1NUVURFTlRfU1VDQ0VTUyIsIkdFVF9JTkFDVElWRV9TVFVERU5UX1JFUVVFU1QiLCJHRVRfSU5BQ1RJVkVfU1RVREVOVF9TVUNDRVNTIiwiZ2V0QWxsU3R1ZGVudFN1Y2Nlc3MiLCJnZXRJbmFjdGl2ZVN0dWRlbnRTdWNjZXNzIiwiYWxsU3R1ZGVudCIsImluYWN0aXZlU3R1ZGVudCIsIlN0dWRlbnQiLCJnZXRBbGxTdHVkZW50U2FnYSIsIlN0dWRlbnRSZXBvc2l0b3J5IiwiZ2V0SW5hY3RpdmVTdHVkZW50U2FnYSIsIkdFVF9BTExfVEVTVElNT05JQUxTX1JFUVVFU1QiLCJHRVRfQUxMX1RFU1RJTU9OSUFMU19TVUNDRVNTIiwiR0VUX0lOQUNUSVZFX1RFU1RJTU9OSUFMU19SRVFVRVNUIiwiR0VUX0lOQUNUSVZFX1RFU1RJTU9OSUFMU19TVUNDRVNTIiwiZ2V0QWxsVGVzdGltb25pYWxzU3VjY2VzcyIsImdldEluYWN0aXZlVGVzdGltb25pYWxzU3VjY2VzcyIsImFsbFRlc3RpbW9uaWFscyIsImluYWN0aXZlVGVzdGltb25pYWxzIiwiZ2V0QWxsVGVzdGltb25pYWxzU2FnYSIsIlRlc3RpbW9uaWFsc1JlcG9zaXRvcnkiLCJnZXRJbmFjdGl2ZVRlc3RpbW9uaWFsc1NhZ2EiLCJHRVRfQURNSU5fTUVOVV9BTExfUkVRVUVTVCIsIkdFVF9BRE1JTl9NRU5VX0FMTF9TVUNDRVNTIiwiR0VUX0FETUlOX1VTRVJfTUVOVV9SRVFVRVNUIiwiR0VUX0FETUlOX1VTRVJfTUVOVV9TVUNDRVNTIiwiZ2V0QWRtaW5NZW51QWxsU3VjY2VzcyIsImdldEFkbWluVXNlck1lbnVTdWNjZXNzIiwiYWxsTWVudSIsInVzZXJNZW51IiwiQWRtaW5tZW51IiwiZ2V0QWRtaW5NZW51QWxsU2FnYSIsIkFkbWluUmVwb3NpdG9yeSIsImdldEFkbWluVXNlck1lbnVTYWdhIiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dPVVRfUkVRVUVTVCIsIkxPR09VVF9TVUNDRVNTIiwibG9naW4iLCJsb2dpblN1Y2Nlc3MiLCJsb2dvdXQiLCJsb2dvdXRTdWNjZXNzIiwiaXNMb2dnZWRJbiIsImF1dGgiLCJ0b2tlbiIsImxvZ2luU2FnYSIsInN0YXR1c0NvZGUiLCJhdXRob3JpemF0aW9uIiwicmVzIiwibG9nb3V0U2FnYSIsInJlbW92ZUl0ZW0iLCJjb21iaW5lUmVkdWNlcnMiLCJhZG1pbiIsIkRhc2hib2FyZENhdGVnb3J5IiwiVGVzdGltb25pYWxzIiwiQ2l0eSIsIkF1dGhTYWdhIiwiQWRtaW5TYWdhIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInJlcXVpcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsInJvb3RSZWR1Y2VyIiwiY29uZmlndXJlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwic2FnYVRhc2siLCJydW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFt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a0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnLi9tb2R1bGVzL0hlYWQnO1xyXG5jb25zdCBEZWZhdWx0TGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtLWRlZmF1bHRcIj5cclxuICAgICAgICA8SGVhZCAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IGlkPVwibG9hZGVyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLWxlZnRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItc2VjdGlvbiBzZWN0aW9uLXJpZ2h0XCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIDxCYWNrVG9wPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInBzLWJ0bi0tYmFja3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1hcnJvdy11cFwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9CYWNrVG9wPiAqL31cclxuICAgIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmNvbnN0IFN0eWxlU2hlZXRzID0gKCkgPT4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPm5ld2Fwb2xsbzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvaW1nL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWcvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjMyeDMyXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pbWcvZmF2aWNvbi5wbmdcIiBzaXplcz1cIjE5MngxOTJcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb24tcHJlY29tcG9zZWRcIiBocmVmPVwiL2ltZy9mYXZpY29uLnBuZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJub3V0aGVtZXNcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJuZXdhcG9sbG9cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJuZXdhcG9sbG9cIiAvPlxyXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jaGVja291dC5yYXpvcnBheS5jb20vdjEvY2hlY2tvdXQuanNcIj48L3NjcmlwdD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc2xpY2stdGhlbWUubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc2xpY2subWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgaHJlZj1cIi9jc3Mvc3R5bGUuY3NzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICBocmVmPVwiL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcHJvLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xMC4wL2Nzcy9hbGwuY3NzXCJcclxuICAgICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LUFZbUVDM1l3NWNWYjNaY3VIdE9BOTN3MzVkWVRzdmhMUFZuWXM5ZVN0SGZHSnZPdkt4VmZFTEdyb0drdnNnK3BcIlxyXG4gICAgICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgICAgLz5cclxuICAgIDwvSGVhZD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2hlZXRzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcclxuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XHJcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuLi9zdG9yZS9zdG9yZSc7XHJcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9EZWZhdWx0TGF5b3V0JztcclxuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xyXG5pbXBvcnQgJ25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9zY3NzL21vZGFsLXZpZGVvLnNjc3MnO1xyXG5pbXBvcnQgJ25vZGVfbW9kdWxlcy9yZWFjdC1jb21wb25lbnQtY291bnRkb3duLXRpbWVyL2xpYi9zdHlsZXMuY3NzJztcclxuXHJcbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMucGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHByb3BzLnN0b3JlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgc3RvcmUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAocGFnZSA9PiA8RGVmYXVsdExheW91dCBjaGlsZHJlbj17cGFnZX0gLz4pO1xyXG4gICAgICAgIHJldHVybiBnZXRMYXlvdXQoXHJcbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgICAgICAgICAgICAgPFBlcnNpc3RHYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn1cclxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0b3I9e3RoaXMucGVyc2lzdG9yfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1BlcnNpc3RHYXRlPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChjcmVhdGVTdG9yZSkod2l0aFJlZHV4U2FnYShNeUFwcCkpO1xyXG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBhcGlVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xyXG5cclxuY2xhc3MgQXV0aFJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWRtaW5NZW51QWxsKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L2FkbWlubWVudS9hbGxgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFkbWluVXNlck1lbnUoKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2FwaVVybH0vYWRtaW5tZW51L2ApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsT3BlcmF0b3JzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L29wZXJhdG9yL2dldG9wZXJhdG9yL1lgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBhc3N3b3JkKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyLCdkYXRhJylcclxuICAgICAgLy8gIGlmICh1c2VyLnVzZXIudHlwZSA9PT0gXCJTXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dChgJHthcGlVcmx9L2FkbWlubWVudS9jaGFuZ2VwYXNzd29yZHN1cGVyYWRtaW5gLCBkYXRhKVxyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KGAke2FwaVVybH0vYWRtaW5tZW51L2NoYW5nZXBhc3N3b3JkYWRtaW5vcGVyYXRvcmAsIGRhdGEpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhSZXBvc2l0b3J5KCk7XHJcblxyXG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBhcGlVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xyXG5cclxuY2xhc3MgQXV0aFJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgYWRtaW5Mb2dpbihwYXlsb2FkKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIFwiYWRtaW5fbmFtZVwiOiBwYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgICAgIFwiYWRtaW5fcGFzc1wiOiBwYXlsb2FkLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBcInR5cGVcIjogcGF5bG9hZC50eXBlLFxyXG4gICAgICAgICAgICBcImxvZ2ludHlwZVwiOiBwYXlsb2FkLmxvZ2ludHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHVybCA9ICcnO1xyXG4gICAgICAgIGlmIChwYXlsb2FkLnR5cGUgPT09IFwiU1wiKSB7XHJcbiAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH0vbG9naW5gO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVybCA9IGAke2FwaVVybH0vbG9naW4vYWRtaW5mYWN1bHR5YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucG9zdCh1cmwsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoUmVwb3NpdG9yeSgpO1xyXG5cclxuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuXHJcbmNsYXNzIEF1dGhSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbGRhc2hib2FyZENhdGVnb3J5KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEyMzRcIixwYXlsb2FkKVxyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L2Rhc2hib2FyZENhdGVnb3J5Lz9fc3RhcnQ9JHtwYXlsb2FkLl9zdGFydH0mX2xpbWl0PSR7cGF5bG9hZC5fbGltaXR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRJbmFjdGl2ZWRhc2hib2FyZENhdGVnb3J5KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9kYXNoYm9hcmRDYXRlZ29yeS9pbmFjdGl2ZT9fc3RhcnQ9JHtwYXlsb2FkLl9zdGFydH0mX2xpbWl0PSR7cGF5bG9hZC5fbGltaXR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzYXZlZGFzaGJvYXJkQ2F0ZWdvcnkoZm9ybWRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIjEyMzQ1Njg5XCIpXHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucG9zdChgJHthcGlVcmx9L2Rhc2hib2FyZENhdGVnb3J5L2AsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRkYXNoYm9hcmRDYXRlZ29yeShjYXRlZ29yeUlkLCBmb3JtZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiMTIzNDU2ODlcIilcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQoYCR7YXBpVXJsfS9kYXNoYm9hcmRDYXRlZ29yeS9jYXRJZC8ke2NhdGVnb3J5SWR9YCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5hY3RpdmVDYXRlZ29yeShkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KGAke2FwaVVybH0vZGFzaGJvYXJkQ2F0ZWdvcnkvaW5hY3RpdmVgLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGRlbGV0ZUNhdGVnb3J5KGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5kZWxldGUoYCR7YXBpVXJsfS9kYXNoYm9hcmRDYXRlZ29yeS9gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7O1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBvc2l0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQoYCR7YXBpVXJsfS9kYXNoYm9hcmRDYXRlZ29yeS9wb3NpdGlvbmAsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbWFnZVVwbG9hZChmb3JtRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QoYCR7YXBpVXJsfS9pbWFnZS9kYXNoYm9hcmRgLCBmb3JtRGF0YSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoUmVwb3NpdG9yeSgpO1xyXG5cclxuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuXHJcbmNsYXNzIEF1dGhSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFsbFN0YXRlKHBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9sb2NhdGlvbi9zdGF0ZS9ZP19zdGFydD0ke3BheWxvYWQuX3N0YXJ0fSZfbGltaXQ9JHtwYXlsb2FkLl9saW1pdH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0U3RhdGUocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L2xvY2F0aW9uL3N0YXRlL1lgKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEluYWN0aXZlU3RhdGUocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L2xvY2F0aW9uL3N0YXRlL04/X3N0YXJ0PSR7cGF5bG9hZC5fc3RhcnR9Jl9saW1pdD0ke3BheWxvYWQuX2xpbWl0fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgYXN5bmMgc2F2ZVN0YXRlKGZvcm1kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucG9zdChgJHthcGlVcmx9L2xvY2F0aW9uL3N0YXRlL2AsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRTdGF0ZShjYXRlZ29yeUlkLCBmb3JtZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dChgJHthcGlVcmx9L2xvY2F0aW9uL1N0YXRlLyR7Y2F0ZWdvcnlJZH1gLCBmb3JtZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbmFjdGl2ZUNhdGVnb3J5KGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQoYCR7YXBpVXJsfS9sb2NhdGlvbi9zdGF0ZXN0YXR1c2AsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gIC8vQ2l0eVxyXG4gICAgYXN5bmMgZ2V0QWxsQ2l0eShwYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2FwaVVybH0vbG9jYXRpb24vY2l0eS9ZP19zdGFydD0ke3BheWxvYWQuX3N0YXJ0fSZfbGltaXQ9JHtwYXlsb2FkLl9saW1pdH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0SW5hY3RpdmVDaXR5KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9sb2NhdGlvbi9jaXR5L04/X3N0YXJ0PSR7cGF5bG9hZC5fc3RhcnR9Jl9saW1pdD0ke3BheWxvYWQuX2xpbWl0fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBzYXZlQ2l0eShmb3JtZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QoYCR7YXBpVXJsfS9sb2NhdGlvbi9jaXR5L2AsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRDaXR5KGNhdGVnb3J5SWQsIGZvcm1kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KGAke2FwaVVybH0vbG9jYXRpb24vY2l0eS8ke2NhdGVnb3J5SWR9YCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBpbmFjdGl2ZUNpdHkoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dChgJHthcGlVcmx9L2xvY2F0aW9uL2NpdHlzdGF0dXNgLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFJlcG9zaXRvcnkoKTtcclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwczovL215YWRtaW4ucXVlc3Rpb25jbG91ZC5pbi9hZG1pbmFwaVwiO1xyXG4vLyBleHBvcnQgY29uc3QgYmFzZXVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAzXCI7XHJcbmV4cG9ydCBjb25zdCBhcGlVcmwgPSBiYXNldXJsICsgXCIvYXBpXCI7XHJcblxyXG5sZXQgY3VzdG9tSGVhZGVycyA9IHtcclxuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbn07XHJcblxyXG5sZXQgbG9jYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZSA6IG51bGw7XHJcbmlmIChsb2NhbCAmJiBsb2NhbC51c2VydG9rZW4pIHtcclxuICAgIGN1c3RvbUhlYWRlcnNbJ3gtYXV0aC10b2tlbiddID0gbG9jYWwudXNlcnRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcclxufSk7IiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jbGFzcyBBdXRoUmVwb3NpdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuICAgIGFzeW5jIGdldEFsbFN0dWRlbnQocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L3N0dWRlbnQvc3RhdHVzL1k/X3N0YXJ0PSR7cGF5bG9hZC5fc3RhcnR9Jl9saW1pdD0ke3BheWxvYWQuX2xpbWl0fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0SW5hY3RpdmVTdHVkZW50KHBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9zdHVkZW50L3N0YXR1cy9OP19zdGFydD0ke3BheWxvYWQuX3N0YXJ0fSZfbGltaXQ9JHtwYXlsb2FkLl9saW1pdH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIHNhdmVTdHVkZW50KGZvcm1kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucG9zdChgJHthcGlVcmx9L3N0dWRlbnQvYCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyB1cGRhdGVTdHVkZW50KGNhdGVnb3J5SWQsIGZvcm1kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkucHV0KGAke2FwaVVybH0vc3R1ZGVudC9pZC8ke2NhdGVnb3J5SWR9YCwgZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcbiAgICBhc3luYyBjaGFuZ2VTdGF0dXMoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dChgJHthcGlVcmx9L3N0dWRlbnQvc3RhdHVzYCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGRlbGV0ZVN0dWRlbnQoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dChgJHthcGlVcmx9L3N0dWRlbnQvc3RhdHVzYCwgZGF0YSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuICAgIGFzeW5jIGdldFN0dWRlbnRzQ291bnQocGF5bG9hZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHthcGlVcmx9L3N0dWRlbnQvc3R1ZC1jb3VudC8ke3N0dWRfc3RhdHVzfT9fc3RhcnQ9JHtwYXlsb2FkLl9zdGFydH0mX2xpbWl0PSR7cGF5bG9hZC5fbGltaXR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRTdHVkZW50QnlJZChwYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2FwaVVybH0vc3R1ZGVudC9pZC8ke3N0dWRfaWR9P19zdGFydD0ke3BheWxvYWQuX3N0YXJ0fSZfbGltaXQ9JHtwYXlsb2FkLl9saW1pdH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgZG93bmxvYWRTdHVkZW50UmVwb3J0KHN0YXR1cywgc3RhcnREYXRlLCBlbmREYXRlKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IGAke2FwaVVybH0vc3R1ZGVudC9kb3dubG9hZC8ke3N0YXR1c31gO1xyXG4gICAgICAgIGlmIChzdGFydERhdGUgJiYgZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICB1cmwgKz0gYD9zdGFydERhdGU9JHtzdGFydERhdGV9JmVuZERhdGU9JHtlbmREYXRlfWBcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXJ0RGF0ZSkge1xyXG4gICAgICAgICAgICB1cmwgKz0gYD9zdGFydERhdGU9JHtzdGFydERhdGV9YFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZW5kRGF0ZSkge1xyXG4gICAgICAgICAgICB1cmwgKz0gYD9lbmREYXRlPSR7ZW5kRGF0ZX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBheGlvcyh7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVwb25zZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhSZXBvc2l0b3J5KCk7XHJcblxyXG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBhcGlVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xyXG5cclxuY2xhc3MgQXV0aFJlcG9zaXRvcnkge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0QWxsVGVzdGltb25pYWxzKHBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9UZXN0aW1vbmlhbHMvP19zdGFydD0ke3BheWxvYWQuX3N0YXJ0fSZfbGltaXQ9JHtwYXlsb2FkLl9saW1pdH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEluYWN0aXZlVGVzdGltb25pYWxzKHBheWxvYWQpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YXBpVXJsfS9UZXN0aW1vbmlhbHMvaW5hY3RpdmU/X3N0YXJ0PSR7cGF5bG9hZC5fc3RhcnR9Jl9saW1pdD0ke3BheWxvYWQuX2xpbWl0fWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNhdmVUZXN0aW1vbmlhbHMoZm9ybWRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wb3N0KGAke2FwaVVybH0vVGVzdGltb25pYWxzL2AsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGVkaXRUZXN0aW1vbmlhbHMoY2F0ZWdvcnlJZCwgZm9ybWRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQoYCR7YXBpVXJsfS9UZXN0aW1vbmlhbHMvY2F0SWQvJHtjYXRlZ29yeUlkfWAsIGZvcm1kYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluYWN0aXZlQ2F0ZWdvcnkoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnB1dChgJHthcGlVcmx9L1Rlc3RpbW9uaWFscy9pbmFjdGl2ZWAsIGRhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZGVsZXRlQ2F0ZWdvcnkoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmRlbGV0ZShgJHthcGlVcmx9L1Rlc3RpbW9uaWFscy9gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7O1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNoYW5nZVBvc2l0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wdXQoYCR7YXBpVXJsfS9UZXN0aW1vbmlhbHMvcG9zaXRpb25gLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgaW1hZ2VVcGxvYWQoZm9ybURhdGEpIHtcclxuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5wb3N0KGAke2FwaVVybH0vaW1hZ2UvdGVzdGltb25pYWxzYCwgZm9ybURhdGEpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhSZXBvc2l0b3J5KCk7XHJcblxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQUxMX0NJVFlfUkVRVUVTVDogJ0dFVF9BTExfQ0lUWV9SRVFVRVNUJyxcclxuICAgIEdFVF9BTExfQ0lUWV9TVUNDRVNTOiAnR0VUX0FMTF9DSVRZX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX0NJVFlfUkVRVUVTVDogJ0dFVF9JTkFDVElWRV9DSVRZX1JFUVVFU1QnLFxyXG4gICAgR0VUX0lOQUNUSVZFX0NJVFlfU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9DSVRZX1NVQ0NFU1MnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2l0eShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX0NJVFlfUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQ2l0eVN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9DSVRZX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlQ2l0eShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfQ0lUWV9SRVFVRVNULCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmFjdGl2ZUNpdHlTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9DSVRZX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBhbGxDaXR5OiBbXSxcclxuICAgIHRvdGFsQWN0aXZlQ291bnQ6IDAsXHJcbiAgICBpbmFjdGl2ZUNpdHk6IFtdLFxyXG4gICAgdG90YWxJbmFjdGl2ZUNvdW50OiAwLFxyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQUxMX0NJVFlfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbENpdHk6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNpdHkgJiYgYWN0aW9uLnBheWxvYWQuY2l0eS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY2l0eSA6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNpdHkgJiYgYWN0aW9uLnBheWxvYWQuY2l0eS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX0NJVFlfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlQ2l0eTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY2l0eSAmJiBhY3Rpb24ucGF5bG9hZC5jaXR5Lmxlbmd0aCA+IDAgPyBhY3Rpb24ucGF5bG9hZC5jaXR5IDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxJbmFjdGl2ZUNvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jaXR5ICYmIGFjdGlvbi5wYXlsb2FkLmNpdHkubGVuZ3RoID4gMCA/IGFjdGlvbi5wYXlsb2FkLmNvdW50IDogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgcHV0LCBjYWxsLCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGdldEFsbENpdHlTdWNjZXNzLCBnZXRJbmFjdGl2ZUNpdHlTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuaW1wb3J0IENpdHlSZXBvc2l0b3J5IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9Mb2NhdGlvbkNvbnRyb2xsZXJSZXBvc2l0b3J5JztcclxuXHJcbmZ1bmN0aW9uKiBnZXRBbGxDaXR5U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChDaXR5UmVwb3NpdG9yeS5nZXRBbGxDaXR5LCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsQ2l0eVN1Y2Nlc3MoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbENpdHlTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEluYWN0aXZlQ2l0eVNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoQ2l0eVJlcG9zaXRvcnkuZ2V0SW5hY3RpdmVDaXR5LCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVDaXR5U3VjY2VzcyhkYXRhKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVDaXR5U3VjY2VzcyhudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BTExfQ0lUWV9SRVFVRVNULCBnZXRBbGxDaXR5U2FnYSldKTtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9DSVRZX1JFUVVFU1QsIGdldEluYWN0aXZlQ2l0eVNhZ2EpXSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgR0VUX0FMTF9EQVNIQk9BUkRfQ0FURUdPUllfUkVRVUVTVDogJ0dFVF9BTExfREFTSEJPQVJEX0NBVEVHT1JZX1JFUVVFU1QnLFxyXG4gICAgR0VUX0FMTF9EQVNIQk9BUkRfQ0FURUdPUllfU1VDQ0VTUzogJ0dFVF9BTExfREFTSEJPQVJEX0NBVEVHT1JZX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX0RBU0hCT0FSRF9DQVRFR09SWV9SRVFVRVNUOiAnR0VUX0lOQUNUSVZFX0RBU0hCT0FSRF9DQVRFR09SWV9SRVFVRVNUJyxcclxuICAgIEdFVF9JTkFDVElWRV9EQVNIQk9BUkRfQ0FURUdPUllfU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9EQVNIQk9BUkRfQ0FURUdPUllfU1VDQ0VTUydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxEYXNoYm9hcmRDYXRlZ29yeShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX0RBU0hCT0FSRF9DQVRFR09SWV9SRVFVRVNULCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxEYXNoYm9hcmRDYXRlZ29yeVN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9EQVNIQk9BUkRfQ0FURUdPUllfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5hY3RpdmVEYXNoYm9hcmRDYXRlZ29yeShwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfREFTSEJPQVJEX0NBVEVHT1JZX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlRGFzaGJvYXJkQ2F0ZWdvcnlTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9EQVNIQk9BUkRfQ0FURUdPUllfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIGFsbERhc2hib2FyZENhdGVnb3J5OiBbXSxcclxuICAgIHRvdGFsQWN0aXZlQ291bnQ6IDAsXHJcbiAgICBpbmFjdGl2ZURhc2hib2FyZENhdGVnb3J5OiBbXSxcclxuICAgIHRvdGFsSW5hY3RpdmVDb3VudDogMCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0FMTF9EQVNIQk9BUkRfQ0FURUdPUllfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbERhc2hib2FyZENhdGVnb3J5OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEFjdGl2ZUNvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX0RBU0hCT0FSRF9DQVRFR09SWV9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmVEYXNoYm9hcmRDYXRlZ29yeTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkgJiYgYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkubGVuZ3RoID4gMCA/IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5IDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxJbmFjdGl2ZUNvdW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgZ2V0QWxsRGFzaGJvYXJkQ2F0ZWdvcnlTdWNjZXNzLCBnZXRJbmFjdGl2ZURhc2hib2FyZENhdGVnb3J5U3VjY2VzcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmltcG9ydCBEYXNoYm9hcmRDYXRlZ29yeVJlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL0Rhc2hib2FyZENhdGVnb3J5UmVwb3NpdG9yeSc7XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsRGFzaGJvYXJkQ2F0ZWdvcnlTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKERhc2hib2FyZENhdGVnb3J5UmVwb3NpdG9yeS5nZXRBbGxkYXNoYm9hcmRDYXRlZ29yeSwgcGF5bG9hZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbERhc2hib2FyZENhdGVnb3J5U3VjY2VzcyhkYXRhKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsRGFzaGJvYXJkQ2F0ZWdvcnlTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEluYWN0aXZlRGFzaGJvYXJkQ2F0ZWdvcnlTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKERhc2hib2FyZENhdGVnb3J5UmVwb3NpdG9yeS5nZXRJbmFjdGl2ZWRhc2hib2FyZENhdGVnb3J5LCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVEYXNoYm9hcmRDYXRlZ29yeVN1Y2Nlc3MoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEluYWN0aXZlRGFzaGJvYXJkQ2F0ZWdvcnlTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FMTF9EQVNIQk9BUkRfQ0FURUdPUllfUkVRVUVTVCwgZ2V0QWxsRGFzaGJvYXJkQ2F0ZWdvcnlTYWdhKV0pO1xyXG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0lOQUNUSVZFX0RBU0hCT0FSRF9DQVRFR09SWV9SRVFVRVNULCBnZXRJbmFjdGl2ZURhc2hib2FyZENhdGVnb3J5U2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQUxMX1NUVURFTlRfUkVRVUVTVDogJ0dFVF9BTExfU1RVREVOVF9SRVFVRVNUJyxcclxuICAgIEdFVF9BTExfU1RVREVOVF9TVUNDRVNTOiAnR0VUX0FMTF9TVFVERU5UX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1NUVURFTlRfUkVRVUVTVDogJ0dFVF9JTkFDVElWRV9TVFVERU5UX1JFUVVFU1QnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1NUVURFTlRfU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9TVFVERU5UX1NVQ0NFU1MnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3R1ZGVudChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX1NUVURFTlRfUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3R1ZGVudFN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9TVFVERU5UX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlU3R1ZGVudChwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfU1RVREVOVF9SRVFVRVNULCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmFjdGl2ZVN0dWRlbnRTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9TVFVERU5UX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBhbGxTdHVkZW50OiBbXSxcclxuICAgIHRvdGFsQWN0aXZlQ291bnQ6IDAsXHJcbiAgICBpbmFjdGl2ZVN0dWRlbnQ6IFtdLFxyXG4gICAgdG90YWxJbmFjdGl2ZUNvdW50OiAwLFxyXG4gICAgXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9BTExfU1RVREVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU3R1ZGVudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuU3R1ZGVudCAmJiBhY3Rpb24ucGF5bG9hZC5TdHVkZW50Lmxlbmd0aCA+IDAgPyBhY3Rpb24ucGF5bG9hZC5TdHVkZW50IDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxBY3RpdmVDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuU3R1ZGVudCAmJiBhY3Rpb24ucGF5bG9hZC5TdHVkZW50Lmxlbmd0aCA+IDAgPyBhY3Rpb24ucGF5bG9hZC5jb3VudCA6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfU1RVREVOVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgaW5hY3RpdmVTdHVkZW50OiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5TdHVkZW50ICYmIGFjdGlvbi5wYXlsb2FkLlN0dWRlbnQubGVuZ3RoID4gMCA/IGFjdGlvbi5wYXlsb2FkLlN0dWRlbnQgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEluYWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLlN0dWRlbnQgJiYgYWN0aW9uLnBheWxvYWQuU3R1ZGVudC5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY291bnQgOiAwXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgZ2V0QWxsU3R1ZGVudFN1Y2Nlc3MsIGdldEluYWN0aXZlU3R1ZGVudFN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5pbXBvcnQgU3R1ZGVudFJlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL1N0dWRlbnRSZXBvc2l0b3J5JztcclxuXHJcbmZ1bmN0aW9uKiBnZXRBbGxTdHVkZW50U2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChTdHVkZW50UmVwb3NpdG9yeS5nZXRBbGxTdHVkZW50LCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0QWxsU3R1ZGVudFN1Y2Nlc3MoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbFN0dWRlbnRTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEluYWN0aXZlU3R1ZGVudFNhZ2EoeyBwYXlsb2FkIH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoU3R1ZGVudFJlcG9zaXRvcnkuZ2V0SW5hY3RpdmVTdHVkZW50LCBwYXlsb2FkKTtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVTdHVkZW50U3VjY2VzcyhkYXRhKSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICB5aWVsZCBwdXQoZ2V0SW5hY3RpdmVTdHVkZW50U3VjY2VzcyhudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BTExfU1RVREVOVF9SRVFVRVNULCBnZXRBbGxTdHVkZW50U2FnYSldKTtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9TVFVERU5UX1JFUVVFU1QsIGdldEluYWN0aXZlU3R1ZGVudFNhZ2EpXSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgR0VUX0FMTF9URVNUSU1PTklBTFNfUkVRVUVTVDogJ0dFVF9BTExfVEVTVElNT05JQUxTX1JFUVVFU1QnLFxyXG4gICAgR0VUX0FMTF9URVNUSU1PTklBTFNfU1VDQ0VTUzogJ0dFVF9BTExfVEVTVElNT05JQUxTX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0lOQUNUSVZFX1RFU1RJTU9OSUFMU19SRVFVRVNUOiAnR0VUX0lOQUNUSVZFX1RFU1RJTU9OSUFMU19SRVFVRVNUJyxcclxuICAgIEdFVF9JTkFDVElWRV9URVNUSU1PTklBTFNfU1VDQ0VTUzogJ0dFVF9JTkFDVElWRV9URVNUSU1PTklBTFNfU1VDQ0VTUydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxUZXN0aW1vbmlhbHMocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FMTF9URVNUSU1PTklBTFNfUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsVGVzdGltb25pYWxzU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQUxMX1RFU1RJTU9OSUFMU19TVUNDRVNTLCBwYXlsb2FkIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmFjdGl2ZVRlc3RpbW9uaWFscyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfVEVTVElNT05JQUxTX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluYWN0aXZlVGVzdGltb25pYWxzU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfVEVTVElNT05JQUxTX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSB7XHJcbiAgICBhbGxUZXN0aW1vbmlhbHM6IFtdLFxyXG4gICAgdG90YWxBY3RpdmVDb3VudDogMCxcclxuICAgIGluYWN0aXZlVGVzdGltb25pYWxzOiBbXSxcclxuICAgIHRvdGFsSW5hY3RpdmVDb3VudDogMCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0FMTF9URVNUSU1PTklBTFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGFsbFRlc3RpbW9uaWFsczogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkgJiYgYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkubGVuZ3RoID4gMCA/IGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5IDogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxBY3RpdmVDb3VudDogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkgJiYgYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkubGVuZ3RoID4gMCA/IGFjdGlvbi5wYXlsb2FkLmNvdW50IDogMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9JTkFDVElWRV9URVNUSU1PTklBTFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGluYWN0aXZlVGVzdGltb25pYWxzOiBhY3Rpb24ucGF5bG9hZCAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeSAmJiBhY3Rpb24ucGF5bG9hZC5jYXRlZ29yeS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuY2F0ZWdvcnkgOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEluYWN0aXZlQ291bnQ6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5ICYmIGFjdGlvbi5wYXlsb2FkLmNhdGVnb3J5Lmxlbmd0aCA+IDAgPyBhY3Rpb24ucGF5bG9hZC5jb3VudCA6IDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCB7IGFjdGlvblR5cGVzLCBnZXRBbGxUZXN0aW1vbmlhbHNTdWNjZXNzLCBnZXRJbmFjdGl2ZVRlc3RpbW9uaWFsc1N1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5pbXBvcnQgVGVzdGltb25pYWxzUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvVGVzdGltb25pYWxzUmVwb3NpdG9yeSc7XHJcblxyXG5mdW5jdGlvbiogZ2V0QWxsVGVzdGltb25pYWxzU2FnYSh7IHBheWxvYWQgfSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChUZXN0aW1vbmlhbHNSZXBvc2l0b3J5LmdldEFsbFRlc3RpbW9uaWFscywgcGF5bG9hZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbFRlc3RpbW9uaWFsc1N1Y2Nlc3MoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFsbFRlc3RpbW9uaWFsc1N1Y2Nlc3MobnVsbCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogZ2V0SW5hY3RpdmVUZXN0aW1vbmlhbHNTYWdhKHsgcGF5bG9hZCB9KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKFRlc3RpbW9uaWFsc1JlcG9zaXRvcnkuZ2V0SW5hY3RpdmVUZXN0aW1vbmlhbHMsIHBheWxvYWQpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRJbmFjdGl2ZVRlc3RpbW9uaWFsc1N1Y2Nlc3MoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEluYWN0aXZlVGVzdGltb25pYWxzU3VjY2VzcyhudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BTExfVEVTVElNT05JQUxTX1JFUVVFU1QsIGdldEFsbFRlc3RpbW9uaWFsc1NhZ2EpXSk7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfSU5BQ1RJVkVfVEVTVElNT05JQUxTX1JFUVVFU1QsIGdldEluYWN0aXZlVGVzdGltb25pYWxzU2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBHRVRfQURNSU5fTUVOVV9BTExfUkVRVUVTVDogJ0dFVF9BRE1JTl9NRU5VX0FMTF9SRVFVRVNUJyxcclxuICAgIEdFVF9BRE1JTl9NRU5VX0FMTF9TVUNDRVNTOiAnR0VUX0FETUlOX01FTlVfQUxMX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0FETUlOX1VTRVJfTUVOVV9SRVFVRVNUOiAnR0VUX0FETUlOX1VTRVJfTUVOVV9SRVFVRVNUJyxcclxuICAgIEdFVF9BRE1JTl9VU0VSX01FTlVfU1VDQ0VTUzogJ0dFVF9BRE1JTl9VU0VSX01FTlVfU1VDQ0VTUydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbk1lbnVBbGwoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZGNrbmRjc2NzZGMnKVxyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FETUlOX01FTlVfQUxMX1JFUVVFU1QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluTWVudUFsbFN1Y2Nlc3MocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0FETUlOX01FTlVfQUxMX1NVQ0NFU1MsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluVXNlck1lbnUoKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQURNSU5fVVNFUl9NRU5VX1JFUVVFU1QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluVXNlck1lbnVTdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9BRE1JTl9VU0VSX01FTlVfU1VDQ0VTUywgcGF5bG9hZCB9O1xyXG59IiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgYWxsTWVudTogW10sXHJcbiAgICB1c2VyTWVudTogW11cclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0FETUlOX01FTlVfQUxMX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLnsgYWxsTWVudTogYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWQuQWRtaW5tZW51ICYmIGFjdGlvbi5wYXlsb2FkLkFkbWlubWVudS5sZW5ndGggPiAwID8gYWN0aW9uLnBheWxvYWQuQWRtaW5tZW51IDogW10gfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQURNSU5fVVNFUl9NRU5VX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnsgdXNlck1lbnU6IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkLkFkbWlubWVudSAmJiBhY3Rpb24ucGF5bG9hZC5BZG1pbm1lbnUubGVuZ3RoID4gMCA/IGFjdGlvbi5wYXlsb2FkLkFkbWlubWVudSA6IFtdIH0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIGNhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgZ2V0QWRtaW5NZW51QWxsU3VjY2VzcywgZ2V0QWRtaW5Vc2VyTWVudVN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5pbXBvcnQgQWRtaW5SZXBvc2l0b3J5IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9BZG1pblJlcG9zaXRvcnknO1xyXG5cclxuZnVuY3Rpb24qIGdldEFkbWluTWVudUFsbFNhZ2EoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKEFkbWluUmVwb3NpdG9yeS5nZXRBZG1pbk1lbnVBbGwpO1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBZG1pbk1lbnVBbGxTdWNjZXNzKGRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBZG1pbk1lbnVBbGxTdWNjZXNzKG51bGwpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIGdldEFkbWluVXNlck1lbnVTYWdhKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChBZG1pblJlcG9zaXRvcnkuZ2V0QWRtaW5Vc2VyTWVudSk7XHJcbiAgICAgICAgeWllbGQgcHV0KGdldEFkbWluVXNlck1lbnVTdWNjZXNzKGRhdGEpKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHlpZWxkIHB1dChnZXRBZG1pblVzZXJNZW51U3VjY2VzcyhudWxsKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9BRE1JTl9NRU5VX0FMTF9SRVFVRVNULCBnZXRBZG1pbk1lbnVBbGxTYWdhKV0pO1xyXG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX0FETUlOX1VTRVJfTUVOVV9SRVFVRVNULCBnZXRBZG1pblVzZXJNZW51U2FnYSldKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XHJcbiAgICBMT0dJTl9SRVFVRVNUOiAnTE9HSU5fUkVRVUVTVCcsXHJcbiAgICBMT0dJTl9TVUNDRVNTOiAnTE9HSU5fU1VDQ0VTUycsXHJcbiAgICBMT0dPVVRfUkVRVUVTVDogJ0xPR09VVF9SRVFVRVNUJyxcclxuICAgIExPR09VVF9TVUNDRVNTOiAnTE9HT1VUX1NVQ0NFU1MnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4ocGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCwgcGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1MscGF5bG9hZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9nb3V0KCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1JFUVVFU1QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dFN1Y2Nlc3MoKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVRfU1VDQ0VTUyB9O1xyXG59IiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgICBhdXRoOiB7fSxcclxuICAgIHRva2VuOiAnJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi57IGF1dGg6IGFjdGlvbi5wYXlsb2FkLnVzZXIsIHRva2VuOiBhY3Rpb24ucGF5bG9hZC50b2tlbiwgaXNMb2dnZWRJbjogdHJ1ZSB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIC4uLnsgYXV0aDoge30sIHRva2VuOiAnJywgaXNMb2dnZWRJbjogZmFsc2UgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgcHV0LGNhbGwsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgbG9naW5TdWNjZXNzLCBsb2dvdXRTdWNjZXNzIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuaW1wb3J0IEF1dGhSZXBvc2l0b3J5IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9BdXRoUmVwb3NpdG9yeSc7XHJcblxyXG5cclxuZnVuY3Rpb24qIGxvZ2luU2FnYSh7cGF5bG9hZH0pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoQXV0aFJlcG9zaXRvcnkubG9naW4sIHBheWxvYWQpO1xyXG4gICAgICAgIGlmKGRhdGEgJiYgZGF0YS5zdGF0dXNDb2RlID09PSAyMDAgJiYgZGF0YS5hdXRob3JpemF0aW9uKXtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgcmVzLmF1dGhvcml6YXRpb24gPSBkYXRhLmF1dGhvcml6YXRpb247XHJcbiAgICAgICAgICAgIHJlcy5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KGxvZ2luU3VjY2VzcyhyZXMpKTtcclxuICAgICAgICB9ZWxzZSBpZihkYXRhICYmIGRhdGEuc3RhdHVzQ29kZSA9PT0gNDAwICl7XHJcbiAgICAgICAgfWVsc2UgaWYoZGF0YSAmJiBkYXRhLnN0YXR1c0NvZGUgPT09IDQwNCApe1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIH1cclxuICAgIH0gIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nb3V0U2FnYSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJ0b2tlbicpO1xyXG4gICAgICAgIC8vIHlpZWxkIGNhbGwoQXV0aFJlcG9zaXRvcnkubG9nb3V0KTtcclxuICAgICAgICB5aWVsZCBwdXQobG9nb3V0U3VjY2VzcygpKTtcclxuICAgIH0gIGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dJTl9SRVFVRVNULCBsb2dpblNhZ2EpXSk7XHJcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVRfUkVRVUVTVCwgbG9nb3V0U2FnYSldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcblxyXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGgvcmVkdWNlcic7XHJcbmltcG9ydCBhZG1pbiBmcm9tICcuL2FkbWluL3JlZHVjZXInO1xyXG5pbXBvcnQgRGFzaGJvYXJkQ2F0ZWdvcnkgZnJvbSAnLi9EYXNoYm9hcmRDYXRlZ29yeS9yZWR1Y2VyJztcclxuaW1wb3J0IFN0dWRlbnQgZnJvbSAnLi9TdHVkZW50L3JlZHVjZXInO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJy4vVGVzdGltb25pYWxzL3JlZHVjZXInO1xyXG5pbXBvcnQgQ2l0eSBmcm9tICcuL0NpdHkvcmVkdWNlcidcclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcclxuICAgIGF1dGgsXHJcbiAgICBhZG1pbixcclxuICAgIERhc2hib2FyZENhdGVnb3J5LFxyXG4gICAgU3R1ZGVudCxcclxuICAgIFRlc3RpbW9uaWFscyxcclxuICAgIENpdHlcclxufSk7IiwiaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCBBdXRoU2FnYSBmcm9tICcuL2F1dGgvc2FnYSc7XHJcbmltcG9ydCBBZG1pblNhZ2EgZnJvbSAnLi9hZG1pbi9zYWdhJztcclxuaW1wb3J0IERhc2hib2FyZENhdGVnb3J5IGZyb20gJy4vRGFzaGJvYXJkQ2F0ZWdvcnkvc2FnYSc7XHJcbmltcG9ydCBTdHVkZW50IGZyb20gJy4vU3R1ZGVudC9zYWdhJztcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICcuL1Rlc3RpbW9uaWFscy9zYWdhJztcclxuaW1wb3J0IENpdHkgZnJvbSAnLi9DaXR5L3NhZ2EnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgQXV0aFNhZ2EoKSxcclxuICAgICAgICBBZG1pblNhZ2EoKSxcclxuICAgICAgICBEYXNoYm9hcmRDYXRlZ29yeSgpLFxyXG4gICAgICAgIFN0dWRlbnQoKSxcclxuICAgICAgICBUZXN0aW1vbmlhbHMoKSxcclxuICAgICAgICBDaXR5KClcclxuICAgIF0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xyXG5cclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9yb290U2FnYSc7XHJcblxyXG5jb25zdCBiaW5kTWlkZGxld2FyZSA9IG1pZGRsZXdhcmUgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBjb25zdCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpO1xyXG4gICAgICAgIHJldHVybiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpO1xyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgIGtleTogJ1F1ZXN0aW9uQ2xvdWRBZG1pbicsXHJcbiAgICBzdG9yYWdlLFxyXG4gICAgd2hpdGVsaXN0OiBbJ2F1dGgnXVxyXG59O1xyXG5cclxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICAgICAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgICBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKVxyXG4gICAgKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuICAgIHJldHVybiBzdG9yZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=