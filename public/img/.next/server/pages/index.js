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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/auth/action */ "./store/auth/action.js");
/* harmony import */ var _repositories_AuthRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repositories/AuthRepository */ "./repositories/AuthRepository.js");
var _jsxFileName = "F:\\newapollo\\pages\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SignIn = props => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const {
    auth,
    token
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(({
    auth
  }) => auth);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isShowPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: errors,
    1: setErrors
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});

  const typeOnChange = e => {
    setType(e.target.value);

    let errorObj = _objectSpread({}, errors);

    errorObj['type'] = '';
    setErrors(errorObj);
  };

  const userOnChange = user => {
    setUser(user);

    let errorObj = _objectSpread({}, errors);

    errorObj['user'] = '';
    setErrors(errorObj);
  };

  const passwordOnChange = password => {
    setPassword(password);

    let errorObj = _objectSpread({}, errors);

    errorObj['password'] = '';
    setErrors(errorObj);
  };

  const loginOnClick = async () => {
    let errorObj = {};

    if (user && password && type) {
      let result = await _repositories_AuthRepository__WEBPACK_IMPORTED_MODULE_5__["default"].adminLogin({
        user,
        password,
        type,
        logintype: "G"
      });

      if (result && result.statusCode === 200) {
        let user = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(result.token);
        await localStorage.setItem('usertoken', result.token);
        dispatch(Object(_store_auth_action__WEBPACK_IMPORTED_MODULE_4__["loginSuccess"])({
          user: user.user,
          token: result
        }));
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].success({
          message: "Welcome Back!"
        });
        window.location.href = "/home";
      } else if (result && result.statusCode === 404) {
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].error({
          message: result.message
        });
      } else {
        antd__WEBPACK_IMPORTED_MODULE_2__["notification"].error({
          message: 'Something Wrong'
        });
      }
    } else {
      if (!user) errorObj['user'] = 'Please Enter User';
      if (!password) errorObj['password'] = 'Please Enter Password';
      if (!type) errorObj['type'] = 'Please Select Type';
      setErrors(errorObj);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let local = JSON.parse(localStorage.getItem('persist:QuestionCloudAdmin'));
    let localAuth = local && local.auth ? JSON.parse(local.auth) : {};

    if (localAuth && localAuth.isLoggedIn) {
      window.location.href = "/home";
    }
  }, [auth, token, dispatch]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "top-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "loginscreen",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-md-8",
    style: {
      background: "#fff",
      boxShadow: '0 1px 4px 0 rgb(0 0 0 / 25%)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-md-5",
    style: {
      background: '#e7e7e7'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "col-md-7",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: " text-center my-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/img/logo.png",
    alt: "newapollo",
    className: "text-center",
    title: "newapollo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "form-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "row mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "form-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 25
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "radio",
    name: "exampleRadios1",
    value: 'S',
    onClick: e => typeOnChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 27
    }
  }), __jsx("label", {
    className: "form-check-label",
    for: "exampleRadios1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 27
    }
  }, "Super Admin"))), __jsx("div", {
    className: "col-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "form-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 25
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "radio",
    name: "exampleRadios1",
    value: 'A',
    onClick: e => typeOnChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 27
    }
  }), __jsx("label", {
    className: "form-check-label",
    for: "exampleRadios1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 27
    }
  }, "Admin"))), __jsx("div", {
    className: "col-md-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "form-check",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 25
    }
  }, __jsx("input", {
    className: "form-check-input",
    type: "radio",
    name: "exampleRadios1",
    value: 'F',
    onClick: e => typeOnChange(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 27
    }
  }), __jsx("label", {
    className: "form-check-label",
    for: "exampleRadios1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 27
    }
  }, "Faculty"))), __jsx("div", {
    style: {
      marginLeft: 20
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, __jsx("h6", {
    style: {
      color: 'red',
      paddingTop: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 56
    }
  }, errors['type']))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 21
    }
  }, __jsx("input", {
    onChange: event => userOnChange(event.target.value),
    margin: "normal",
    className: "form-control",
    placeholder: "User Name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 23
    }
  }), __jsx("i", {
    className: "fa fa-user icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 23
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 23
    }
  }, __jsx("h6", {
    style: {
      color: 'red',
      paddingTop: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 28
    }
  }, errors['user']))), __jsx("div", {
    className: "form-group",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: isShowPassword ? "text" : "password",
    onChange: event => passwordOnChange(event.target.value),
    margin: "normal",
    className: "form-control",
    placeholder: "Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 23
    }
  }), isShowPassword ? __jsx("i", {
    className: "fa fa-eye icon1",
    onClick: () => setShowPassword(false),
    style: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }) : __jsx("i", {
    className: "fa fa-eye-slash icon1",
    onClick: () => setShowPassword(true),
    style: {
      cursor: 'pointer'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 25
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }, __jsx("h6", {
    style: {
      color: 'red',
      paddingTop: '1%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 28
    }
  }, errors['password']))), __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  }, __jsx("button", {
    variant: "contained",
    className: "btn-signin",
    onClick: loginOnClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }, "Sign In")), __jsx("div", {
    className: "col-md-6 text-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 23
    }
  }, __jsx("button", {
    variant: "contained",
    className: "btn-signin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }, "School Login")))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignIn);

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

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9BdXRoUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIl0sIm5hbWVzIjpbIlNpZ25JbiIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGgiLCJ0b2tlbiIsInVzZVNlbGVjdG9yIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ0eXBlIiwic2V0VHlwZSIsImlzU2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JzIiwic2V0RXJyb3JzIiwidHlwZU9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZXJyb3JPYmoiLCJ1c2VyT25DaGFuZ2UiLCJwYXNzd29yZE9uQ2hhbmdlIiwibG9naW5PbkNsaWNrIiwicmVzdWx0IiwiQXV0aFJlcG9zaXRvcnkiLCJhZG1pbkxvZ2luIiwibG9naW50eXBlIiwic3RhdHVzQ29kZSIsImp3dERlY29kZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsb2dpblN1Y2Nlc3MiLCJub3RpZmljYXRpb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwidXNlRWZmZWN0IiwibG9jYWwiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwibG9jYWxBdXRoIiwiaXNMb2dnZWRJbiIsImJhY2tncm91bmQiLCJib3hTaGFkb3ciLCJtYXJnaW5MZWZ0IiwiY29sb3IiLCJwYWRkaW5nVG9wIiwiZXZlbnQiLCJjdXJzb3IiLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwicGF5bG9hZCIsImRhdGEiLCJ1cmwiLCJhcGlVcmwiLCJyZXBvbnNlIiwiUmVwb3NpdG9yeSIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsInN0cmluZ2lmeSIsImJhc2V1cmwiLCJjdXN0b21IZWFkZXJzIiwiQWNjZXB0IiwidXNlcnRva2VuIiwiYXhpb3MiLCJjcmVhdGUiLCJoZWFkZXJzIiwiYWN0aW9uVHlwZXMiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR09VVF9SRVFVRVNUIiwiTE9HT1VUX1NVQ0NFU1MiLCJsb2dpbiIsImxvZ291dCIsImxvZ291dFN1Y2Nlc3MiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7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LENBQXNCd0IsT0FBdEIsRUFBK0I7QUFDbEMsU0FBTztBQUFFOUMsUUFBSSxFQUFFZ0UsV0FBVyxDQUFDRSxhQUFwQjtBQUFrQ3BCO0FBQWxDLEdBQVA7QUFDSDtBQUVNLFNBQVN3QixNQUFULEdBQWtCO0FBQ3JCLFNBQU87QUFBRXRFLFFBQUksRUFBRWdFLFdBQVcsQ0FBQ0c7QUFBcEIsR0FBUDtBQUNIO0FBRU0sU0FBU0ksYUFBVCxHQUF5QjtBQUM1QixTQUFPO0FBQUV2RSxRQUFJLEVBQUVnRSxXQUFXLENBQUNJO0FBQXBCLEdBQVA7QUFDSCxDOzs7Ozs7Ozs7OztBQ3JCRCxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcclxuXHJcbmltcG9ydCB7IGxvZ2luU3VjY2VzcyB9IGZyb20gJy4uL3N0b3JlL2F1dGgvYWN0aW9uJztcclxuaW1wb3J0IEF1dGhSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9BdXRoUmVwb3NpdG9yeSc7XHJcblxyXG5jb25zdCBTaWduSW4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCB7IGF1dGgsIHRva2VuIH0gPSB1c2VTZWxlY3RvcigoeyBhdXRoIH0pID0+IGF1dGgpO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtpc1Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCB0eXBlT25DaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0VHlwZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBsZXQgZXJyb3JPYmogPSB7IC4uLmVycm9ycyB9O1xyXG4gICAgZXJyb3JPYmpbJ3R5cGUnXSA9ICcnO1xyXG4gICAgc2V0RXJyb3JzKGVycm9yT2JqKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB1c2VyT25DaGFuZ2UgPSAodXNlcikgPT4ge1xyXG4gICAgc2V0VXNlcih1c2VyKTtcclxuICAgIGxldCBlcnJvck9iaiA9IHsgLi4uZXJyb3JzIH07XHJcbiAgICBlcnJvck9ialsndXNlciddID0gJyc7XHJcbiAgICBzZXRFcnJvcnMoZXJyb3JPYmopO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFzc3dvcmRPbkNoYW5nZSA9IChwYXNzd29yZCkgPT4ge1xyXG4gICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xyXG4gICAgbGV0IGVycm9yT2JqID0geyAuLi5lcnJvcnMgfTtcclxuICAgIGVycm9yT2JqWydwYXNzd29yZCddID0gJyc7XHJcbiAgICBzZXRFcnJvcnMoZXJyb3JPYmopO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbG9naW5PbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGVycm9yT2JqID0ge307XHJcbiAgICBpZiAodXNlciAmJiBwYXNzd29yZCAmJiB0eXBlKSB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBBdXRoUmVwb3NpdG9yeS5hZG1pbkxvZ2luKHsgdXNlciwgcGFzc3dvcmQsIHR5cGUsIGxvZ2ludHlwZTogXCJHXCIgfSk7XHJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnN0YXR1c0NvZGUgPT09IDIwMCkge1xyXG4gICAgICAgIGxldCB1c2VyID0gand0RGVjb2RlKHJlc3VsdC50b2tlbik7XHJcbiAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJ0b2tlbicsIHJlc3VsdC50b2tlbik7XHJcbiAgICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHsgdXNlcjogdXNlci51c2VyLCB0b2tlbjogcmVzdWx0IH0pKTtcclxuICAgICAgICBub3RpZmljYXRpb24uc3VjY2Vzcyh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIldlbGNvbWUgQmFjayFcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCAmJiByZXN1bHQuc3RhdHVzQ29kZSA9PT0gNDA0KSB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLmVycm9yKHtcclxuICAgICAgICAgIG1lc3NhZ2U6ICdTb21ldGhpbmcgV3JvbmcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdXNlcikgZXJyb3JPYmpbJ3VzZXInXSA9ICdQbGVhc2UgRW50ZXIgVXNlcic7XHJcbiAgICAgIGlmICghcGFzc3dvcmQpIGVycm9yT2JqWydwYXNzd29yZCddID0gJ1BsZWFzZSBFbnRlciBQYXNzd29yZCc7XHJcbiAgICAgIGlmICghdHlwZSkgZXJyb3JPYmpbJ3R5cGUnXSA9ICdQbGVhc2UgU2VsZWN0IFR5cGUnO1xyXG4gICAgICBzZXRFcnJvcnMoZXJyb3JPYmopO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BlcnNpc3Q6UXVlc3Rpb25DbG91ZEFkbWluJykpO1xyXG4gICAgbGV0IGxvY2FsQXV0aCA9IGxvY2FsICYmIGxvY2FsLmF1dGggPyBKU09OLnBhcnNlKGxvY2FsLmF1dGgpIDoge307XHJcbiAgICBpZiAobG9jYWxBdXRoICYmIGxvY2FsQXV0aC5pc0xvZ2dlZEluKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvaG9tZVwiO1xyXG4gICAgfVxyXG4gIH0sIFthdXRoLCB0b2tlbiwgZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5zY3JlZW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBib3hTaGFkb3c6ICcwIDFweCA0cHggMCByZ2IoMCAwIDAgLyAyNSUpJyB9fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiIHN0eWxlPXt7IGJhY2tncm91bmQ6ICcjZTdlN2U3JyB9fT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1wiL2ltZy9sb2dvLnBuZ1wifSBhbHQ9XCJRdWVzdGlvbiBDbG91ZFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgdGl0bGU9XCJRdWVzdGlvbiBDbG91ZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1uYW1lJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0nZXhhbXBsZVJhZGlvczEnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17J1MnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHR5cGVPbkNoYW5nZShlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiZXhhbXBsZVJhZGlvczFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1cGVyIEFkbWluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdleGFtcGxlUmFkaW9zMSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsnQSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdHlwZU9uQ2hhbmdlKGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJleGFtcGxlUmFkaW9zMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2V4YW1wbGVSYWRpb3MxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eydGJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0eXBlT25DaGFuZ2UoZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cImV4YW1wbGVSYWRpb3MxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYWN1bHR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luTGVmdCA6IDIwIH19PjxoNiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHBhZGRpbmdUb3A6ICcxJScgfX0+e2Vycm9yc1sndHlwZSddfTwvaDY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdXNlck9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyIGljb25cIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxoNiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHBhZGRpbmdUb3A6ICcxJScgfX0+e2Vycm9yc1sndXNlciddfTwvaDY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17aXNTaG93UGFzc3dvcmQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gcGFzc3dvcmRPbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2lzU2hvd1Bhc3N3b3JkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllIGljb24xXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1Bhc3N3b3JkKGZhbHNlKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gLz4gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leWUtc2xhc2ggaWNvbjFcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93UGFzc3dvcmQodHJ1ZSl9IHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxoNiBzdHlsZT17eyBjb2xvcjogJ3JlZCcsIHBhZGRpbmdUb3A6ICcxJScgfX0+e2Vycm9yc1sncGFzc3dvcmQnXX08L2g2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjbGFzc05hbWU9XCJidG4tc2lnbmluXCIgb25DbGljaz17bG9naW5PbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTaWduIEluXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY2xhc3NOYW1lPVwiYnRuLXNpZ25pblwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBTY2hvb2wgTG9naW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYXBpVXJsIH0gZnJvbSAnLi9SZXBvc2l0b3J5JztcclxuXHJcbmNsYXNzIEF1dGhSZXBvc2l0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGFkbWluTG9naW4ocGF5bG9hZCkge1xyXG4gICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICBcImFkbWluX25hbWVcIjogcGF5bG9hZC51c2VyLFxyXG4gICAgICAgICAgICBcImFkbWluX3Bhc3NcIjogcGF5bG9hZC5wYXNzd29yZCxcclxuICAgICAgICAgICAgXCJ0eXBlXCI6IHBheWxvYWQudHlwZSxcclxuICAgICAgICAgICAgXCJsb2dpbnR5cGVcIjogcGF5bG9hZC5sb2dpbnR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCB1cmwgPSAnJztcclxuICAgICAgICBpZiAocGF5bG9hZC50eXBlID09PSBcIlNcIikge1xyXG4gICAgICAgICAgICB1cmwgPSBgJHthcGlVcmx9L2xvZ2luYDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB1cmwgPSBgJHthcGlVcmx9L2xvZ2luL2FkbWluZmFjdWx0eWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LnBvc3QodXJsLCBkYXRhKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xyXG4gICAgICAgIHJldHVybiByZXBvbnNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFJlcG9zaXRvcnkoKTtcclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmV4cG9ydCBjb25zdCBiYXNldXJsID0gXCJodHRwczovL215YWRtaW4ucXVlc3Rpb25jbG91ZC5pbi9hZG1pbmFwaVwiO1xyXG4vLyBleHBvcnQgY29uc3QgYmFzZXVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo0MDAzXCI7XHJcbmV4cG9ydCBjb25zdCBhcGlVcmwgPSBiYXNldXJsICsgXCIvYXBpXCI7XHJcblxyXG5sZXQgY3VzdG9tSGVhZGVycyA9IHtcclxuICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbn07XHJcblxyXG5sZXQgbG9jYWwgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsU3RvcmFnZSA6IG51bGw7XHJcbmlmIChsb2NhbCAmJiBsb2NhbC51c2VydG9rZW4pIHtcclxuICAgIGN1c3RvbUhlYWRlcnNbJ3gtYXV0aC10b2tlbiddID0gbG9jYWwudXNlcnRva2VuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcclxufSk7IiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xyXG4gICAgTE9HSU5fUkVRVUVTVDogJ0xPR0lOX1JFUVVFU1QnLFxyXG4gICAgTE9HSU5fU1VDQ0VTUzogJ0xPR0lOX1NVQ0NFU1MnLFxyXG4gICAgTE9HT1VUX1JFUVVFU1Q6ICdMT0dPVVRfUkVRVUVTVCcsXHJcbiAgICBMT0dPVVRfU1VDQ0VTUzogJ0xPR09VVF9TVUNDRVNTJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHBheWxvYWQpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1JFUVVFU1QsIHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luU3VjY2VzcyhwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dJTl9TVUNDRVNTLHBheWxvYWQgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dCgpIHtcclxuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR09VVF9SRVFVRVNUIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXRTdWNjZXNzKCkge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1MgfTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9