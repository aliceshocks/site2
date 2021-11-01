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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/CustomFont.tsx":
/*!***********************************!*\
  !*** ./components/CustomFont.tsx ***!
  \***********************************/
/*! exports provided: CustomFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFont", function() { return CustomFont; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\CustomFont.tsx";


const CustomFont = ({
  site
}) => {
  if (!site.fontFamily) {
    return null;
  } // https://developers.google.com/fonts/docs/css2


  const fontFamilies = [site.fontFamily];
  const googleFontFamilies = fontFamilies.map(font => font.replace(/ /g, '+')).map(font => `family=${font}:ital,wght@0,200..700;1,200..700`).join('&');
  const googleFontsLink = `https://fonts.googleapis.com/css?${googleFontFamilies}&display=swap`;
  const cssFontFamilies = fontFamilies.map(font => `"${font}"`).join(', ');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: googleFontsLink
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
        children: `
          .notion.notion-app {
            font-family: ${cssFontFamilies}, -apple-system, BlinkMacSystemFont,
              'Segoe UI', Helvetica, 'Apple Color Emoji', Arial, sans-serif,
              'Segoe UI Emoji', 'Segoe UI Symbol';
          }
        `
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./components/CustomHtml.tsx":
/*!***********************************!*\
  !*** ./components/CustomHtml.tsx ***!
  \***********************************/
/*! exports provided: CustomHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHtml", function() { return CustomHtml; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dangerously-set-html-content */ "dangerously-set-html-content");
/* harmony import */ var dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\CustomHtml.tsx";


const CustomHtml = ({
  site
}) => {
  if (!site.html) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(dangerously_set_html_content__WEBPACK_IMPORTED_MODULE_2___default.a, {
    html: site.html
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./components/ErrorPage.tsx":
/*!**********************************!*\
  !*** ./components/ErrorPage.tsx ***!
  \**********************************/
/*! exports provided: ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return ErrorPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageHead */ "./components/PageHead.tsx");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\ErrorPage.tsx";




const ErrorPage = ({
  statusCode
}) => {
  const title = 'Error';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageHead__WEBPACK_IMPORTED_MODULE_3__["PageHead"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Error Loading Page"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, undefined), statusCode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Error code: ", statusCode]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 26
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/error.png",
          alt: "Error",
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/config */ "./lib/config.ts");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\Footer.tsx";




 // TODO: merge the data and icons from PageSocial with the social links in Footer

const Footer = ({
  isDarkMode,
  toggleDarkMode
}) => {
  const [hasMounted, setHasMounted] = react__WEBPACK_IMPORTED_MODULE_1__["useState"](false);
  const toggleDarkModeCb = react__WEBPACK_IMPORTED_MODULE_1__["useCallback"](e => {
    e.preventDefault();
    toggleDarkMode();
  }, [toggleDarkMode]);
  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](() => {
    setHasMounted(true);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.copyright,
      children: ["Copyright 2021 ", lib_config__WEBPACK_IMPORTED_MODULE_4__["author"]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), hasMounted ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.settings,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.toggleDarkMode,
        onClick: toggleDarkModeCb,
        title: "Tottle dark mode",
        children: isDarkMode ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoMoonSharp"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 27
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoSunnyOutline"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 45
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, undefined) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.social,
      children: [lib_config__WEBPACK_IMPORTED_MODULE_4__["twitter"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.twitter,
        href: `https://twitter.com/${lib_config__WEBPACK_IMPORTED_MODULE_4__["twitter"]}`,
        title: `Twitter @${lib_config__WEBPACK_IMPORTED_MODULE_4__["twitter"]}`,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTwitter"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }, undefined), lib_config__WEBPACK_IMPORTED_MODULE_4__["github"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.github,
        href: `https://github.com/${lib_config__WEBPACK_IMPORTED_MODULE_4__["github"]}`,
        title: `GitHub @${lib_config__WEBPACK_IMPORTED_MODULE_4__["github"]}`,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaGithub"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined), lib_config__WEBPACK_IMPORTED_MODULE_4__["linkedin"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.linkedin,
        href: `https://www.linkedin.com/in/${lib_config__WEBPACK_IMPORTED_MODULE_4__["linkedin"]}`,
        title: `LinkedIn ${lib_config__WEBPACK_IMPORTED_MODULE_4__["author"]}`,
        target: "_blank",
        rel: "noopener noreferrer",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaLinkedin"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Loading.tsx":
/*!********************************!*\
  !*** ./components/Loading.tsx ***!
  \********************************/
/*! exports provided: Loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LoadingIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadingIcon */ "./components/LoadingIcon.tsx");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\Loading.tsx";



const Loading = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LoadingIcon__WEBPACK_IMPORTED_MODULE_2__["LoadingIcon"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/LoadingIcon.tsx":
/*!************************************!*\
  !*** ./components/LoadingIcon.tsx ***!
  \************************************/
/*! exports provided: LoadingIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIcon", function() { return LoadingIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\LoadingIcon.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LoadingIcon = props => {
  const {
    className
  } = props,
        rest = _objectWithoutProperties(props, ["className"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", _objectSpread(_objectSpread({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.loadingIcon, className)
  }, rest), {}, {
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        x1: "28.1542969%",
        y1: "63.7402344%",
        x2: "74.6289062%",
        y2: "17.7832031%",
        id: "linearGradient-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          stopColor: "rgba(164, 164, 164, 1)",
          offset: "0%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          stopColor: "rgba(164, 164, 164, 0)",
          stopOpacity: "0",
          offset: "100%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      id: "Page-1",
      stroke: "none",
      strokeWidth: "1",
      fill: "none",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
        transform: "translate(-236.000000, -286.000000)",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
          transform: "translate(238.000000, 286.000000)",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("circle", {
            id: "Oval-2",
            stroke: "url(#linearGradient-1)",
            strokeWidth: "4",
            cx: "10",
            cy: "12",
            r: "10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
            d: "M10,2 C4.4771525,2 0,6.4771525 0,12",
            id: "Oval-2",
            stroke: "rgba(164, 164, 164, 1)",
            strokeWidth: "4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("rect", {
            id: "Rectangle-1",
            fill: "rgba(164, 164, 164, 1)",
            x: "8",
            y: "0",
            width: "4",
            height: "4",
            rx: "8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/NotionPage.tsx":
/*!***********************************!*\
  !*** ./components/NotionPage.tsx ***!
  \***********************************/
/*! exports provided: NotionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotionPage", function() { return NotionPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-use */ "react-use");
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_use__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_body_classname__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-body-classname */ "react-body-classname");
/* harmony import */ var react_body_classname__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_body_classname__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-dark-mode */ "use-dark-mode");
/* harmony import */ var use_dark_mode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(use_dark_mode__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_static_tweets__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-static-tweets */ "react-static-tweets");
/* harmony import */ var react_static_tweets__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_static_tweets__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-notion-x */ "react-notion-x");
/* harmony import */ var react_notion_x__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_notion_x__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lib_map_page_url__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/map-page-url */ "./lib/map-page-url.ts");
/* harmony import */ var lib_map_image_url__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/map-image-url */ "./lib/map-image-url.ts");
/* harmony import */ var lib_get_page_description__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/get-page-description */ "./lib/get-page-description.ts");
/* harmony import */ var lib_get_page_tweet__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lib/get-page-tweet */ "./lib/get-page-tweet.ts");
/* harmony import */ var lib_search_notion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lib/search-notion */ "./lib/search-notion.ts");
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lib/config */ "./lib/config.ts");
/* harmony import */ var _CustomFont__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./CustomFont */ "./components/CustomFont.tsx");
/* harmony import */ var _CustomHtml__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CustomHtml */ "./components/CustomHtml.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Loading */ "./components/Loading.tsx");
/* harmony import */ var _Page404__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Page404 */ "./components/Page404.tsx");
/* harmony import */ var _PageHead__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./PageHead */ "./components/PageHead.tsx");
/* harmony import */ var _PageActions__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PageActions */ "./components/PageActions.tsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Footer */ "./components/Footer.tsx");
/* harmony import */ var _PageSocial__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./PageSocial */ "./components/PageSocial.tsx");
/* harmony import */ var _ReactUtterances__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ReactUtterances */ "./components/ReactUtterances.tsx");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_28__);


var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\NotionPage.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










 // core notion renderer

 // utils







 // components










 // const Code = dynamic(() =>
//   import('react-notion-x').then((notion) => notion.Code)
// )
//
// const Collection = dynamic(() =>
//   import('react-notion-x').then((notion) => notion.Collection)
// )
//
// const CollectionRow = dynamic(
//   () => import('react-notion-x').then((notion) => notion.CollectionRow),
//   {
//     ssr: false
//   }
// )

const Pdf = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-notion-x */ "react-notion-x", 7)).then(notion => notion.Pdf), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-notion-x */ "react-notion-x")],
    modules: ['react-notion-x']
  }
});
const Equation = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-notion-x */ "react-notion-x", 7)).then(notion => notion.Equation), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-notion-x */ "react-notion-x")],
    modules: ['react-notion-x']
  }
}); // we're now using a much lighter-weight tweet renderer react-static-tweets
// instead of the official iframe-based embed widget from twitter
// const Tweet = dynamic(() => import('react-tweet-embed'))

const Modal = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-notion-x */ "react-notion-x", 7)).then(notion => notion.Modal), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-notion-x */ "react-notion-x")],
    modules: ['react-notion-x']
  }
});
const NotionPage = ({
  site,
  recordMap,
  error,
  pageId
}) => {
  var _recordMap$block, _recordMap$block$keys, _format, _getPageDescription;

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const lite = Object(react_use__WEBPACK_IMPORTED_MODULE_7__["useSearchParam"])('lite');
  const params = {};
  if (lite) params.lite = lite; // lite mode is for oembed

  const isLiteMode = lite === 'true';
  const searchParams = new URLSearchParams(params);
  const darkMode = use_dark_mode__WEBPACK_IMPORTED_MODULE_9___default()(false, {
    classNameDark: 'dark-mode'
  });

  if (router.isFallback) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Loading__WEBPACK_IMPORTED_MODULE_21__["Loading"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 12
    }, undefined);
  }

  const keys = Object.keys((recordMap === null || recordMap === void 0 ? void 0 : recordMap.block) || {});
  const block = recordMap === null || recordMap === void 0 ? void 0 : (_recordMap$block = recordMap.block) === null || _recordMap$block === void 0 ? void 0 : (_recordMap$block$keys = _recordMap$block[keys[0]]) === null || _recordMap$block$keys === void 0 ? void 0 : _recordMap$block$keys.value;

  if (error || !site || !keys.length || !block) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Page404__WEBPACK_IMPORTED_MODULE_22__["Page404"], {
      site: site,
      pageId: pageId,
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 12
    }, undefined);
  }

  const title = Object(notion_utils__WEBPACK_IMPORTED_MODULE_12__["getBlockTitle"])(block, recordMap) || site.name;
  console.log('notion page', {
    isDev: lib_config__WEBPACK_IMPORTED_MODULE_18__["isDev"],
    title,
    pageId,
    rootNotionPageId: site.rootNotionPageId,
    recordMap
  });

  if (!lib_config__WEBPACK_IMPORTED_MODULE_18__["isServer"]) {
    // add important objects to the window global for easy debugging
    const g = window;
    g.pageId = pageId;
    g.recordMap = recordMap;
    g.block = block;
  }

  const siteMapPageUrl = Object(lib_map_page_url__WEBPACK_IMPORTED_MODULE_13__["mapPageUrl"])(site, recordMap, searchParams);
  const canonicalPageUrl = !lib_config__WEBPACK_IMPORTED_MODULE_18__["isDev"] && Object(lib_map_page_url__WEBPACK_IMPORTED_MODULE_13__["getCanonicalPageUrl"])(site, recordMap)(pageId); // const isRootPage =
  //   parsePageId(block.id) === parsePageId(site.rootNotionPageId)

  const isBlogPost = block.type === 'page' && block.parent_table === 'collection';
  const showTableOfContents = !!isBlogPost;
  const minTableOfContentsItems = 3;
  const socialImage = Object(lib_map_image_url__WEBPACK_IMPORTED_MODULE_14__["mapNotionImageUrl"])(((_format = block.format) === null || _format === void 0 ? void 0 : _format.page_cover) || lib_config__WEBPACK_IMPORTED_MODULE_18__["defaultPageCover"], block) || lib_config__WEBPACK_IMPORTED_MODULE_18__["api"].renderSocialImage(pageId);
  const socialDescription = (_getPageDescription = Object(lib_get_page_description__WEBPACK_IMPORTED_MODULE_15__["getPageDescription"])(block, recordMap)) !== null && _getPageDescription !== void 0 ? _getPageDescription : lib_config__WEBPACK_IMPORTED_MODULE_18__["description"];
  let comments = null;
  let pageAside = null; // only display comments and page actions on blog post pages

  if (isBlogPost) {
    if (lib_config__WEBPACK_IMPORTED_MODULE_18__["utterancesGitHubRepo"]) {
      comments = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ReactUtterances__WEBPACK_IMPORTED_MODULE_27__["ReactUtterances"], {
        repo: lib_config__WEBPACK_IMPORTED_MODULE_18__["utterancesGitHubRepo"],
        issueMap: "issue-term",
        issueTerm: "title",
        theme: darkMode.value ? 'photon-dark' : 'github-light'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, undefined);
    }

    const tweet = Object(lib_get_page_tweet__WEBPACK_IMPORTED_MODULE_16__["getPageTweet"])(block, recordMap);

    if (tweet) {
      pageAside = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageActions__WEBPACK_IMPORTED_MODULE_24__["PageActions"], {
        tweet: tweet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 19
      }, undefined);
    }
  } else {
    pageAside = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageSocial__WEBPACK_IMPORTED_MODULE_26__["PageSocial"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_static_tweets__WEBPACK_IMPORTED_MODULE_10__["Twitter"].Provider, {
    value: {
      tweetAstMap: recordMap.tweetAstMap || {},
      swrOptions: {
        fetcher: id => fetch(`/api/get-tweet-ast/${id}`).then(r => r.json())
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageHead__WEBPACK_IMPORTED_MODULE_23__["PageHead"], {
      site: site
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: site.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "twitter:domain",
        content: site.domain
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 9
      }, undefined), lib_config__WEBPACK_IMPORTED_MODULE_18__["twitter"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:creator",
        content: `@${lib_config__WEBPACK_IMPORTED_MODULE_18__["twitter"]}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }, undefined), socialDescription && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "description",
          content: socialDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:description",
          content: socialDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "twitter:description",
          content: socialDescription
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 13
        }, undefined)]
      }, void 0, true), socialImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "twitter:card",
          content: "summary_large_image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "twitter:image",
          content: socialImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:image",
          content: socialImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 13
        }, undefined)]
      }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "twitter:card",
        content: "summary"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 11
      }, undefined), canonicalPageUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "canonical",
          href: canonicalPageUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "og:url",
          content: canonicalPageUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          property: "twitter:url",
          content: canonicalPageUrl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }, undefined)]
      }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomFont__WEBPACK_IMPORTED_MODULE_19__["CustomFont"], {
      site: site
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 7
    }, undefined), isLiteMode && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_body_classname__WEBPACK_IMPORTED_MODULE_8___default.a, {
      className: "notion-lite"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 22
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_notion_x__WEBPACK_IMPORTED_MODULE_11__["NotionRenderer"], {
      bodyClassName: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_styles_module_css__WEBPACK_IMPORTED_MODULE_28___default.a.notion, pageId === site.rootNotionPageId && 'index-page'),
      components: {
        pageLink: (_ref) => {
          let {
            href,
            as,
            passHref,
            prefetch,
            replace,
            scroll,
            shallow,
            locale
          } = _ref,
              props = _objectWithoutProperties(_ref, ["href", "as", "passHref", "prefetch", "replace", "scroll", "shallow", "locale"]);

          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
            href: href,
            as: as,
            passHref: passHref,
            prefetch: prefetch,
            replace: replace,
            scroll: scroll,
            shallow: shallow,
            locale: locale,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", _objectSpread({}, props), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 246,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 13
          }, undefined);
        },
        code: react_notion_x__WEBPACK_IMPORTED_MODULE_11__["Code"],
        collection: react_notion_x__WEBPACK_IMPORTED_MODULE_11__["Collection"],
        collectionRow: react_notion_x__WEBPACK_IMPORTED_MODULE_11__["CollectionRow"],
        tweet: react_static_tweets__WEBPACK_IMPORTED_MODULE_10__["Tweet"],
        modal: Modal,
        pdf: Pdf,
        equation: Equation
      },
      recordMap: recordMap,
      rootPageId: site.rootNotionPageId,
      fullPage: !isLiteMode,
      darkMode: darkMode.value,
      previewImages: site.previewImages !== false,
      showCollectionViewDropdown: false,
      showTableOfContents: showTableOfContents,
      minTableOfContentsItems: minTableOfContentsItems,
      defaultPageIcon: lib_config__WEBPACK_IMPORTED_MODULE_18__["defaultPageIcon"],
      defaultPageCover: lib_config__WEBPACK_IMPORTED_MODULE_18__["defaultPageCover"],
      defaultPageCoverPosition: lib_config__WEBPACK_IMPORTED_MODULE_18__["defaultPageCoverPosition"],
      mapPageUrl: siteMapPageUrl,
      mapImageUrl: lib_map_image_url__WEBPACK_IMPORTED_MODULE_14__["mapNotionImageUrl"],
      searchNotion: lib_search_notion__WEBPACK_IMPORTED_MODULE_17__["searchNotion"],
      pageFooter: comments,
      pageAside: pageAside,
      footer: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_25__["Footer"], {
        isDarkMode: darkMode.value,
        toggleDarkMode: darkMode.toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_CustomHtml__WEBPACK_IMPORTED_MODULE_20__["CustomHtml"], {
      site: site
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 164,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Page404.tsx":
/*!********************************!*\
  !*** ./components/Page404.tsx ***!
  \********************************/
/*! exports provided: Page404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404", function() { return Page404; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PageHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageHead */ "./components/PageHead.tsx");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\Page404.tsx";




const Page404 = ({
  site,
  pageId,
  error
}) => {
  const title = (site === null || site === void 0 ? void 0 : site.name) || 'Page Not Found';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageHead__WEBPACK_IMPORTED_MODULE_3__["PageHead"], {
      site: site
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:site_name",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.main,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Page Not Found"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined), error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: error.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined) : pageId && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Make sure that Notion page \"", pageId, "\" is publicly accessible."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/404.png",
          alt: "404 Not Found",
          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.errorImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/PageActions.tsx":
/*!************************************!*\
  !*** ./components/PageActions.tsx ***!
  \************************************/
/*! exports provided: PageActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageActions", function() { return PageActions; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\PageActions.tsx";




/**
 * @see https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview
 */

const PageActions = ({
  tweet
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.pageActions,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.likeTweet,
      href: `https://twitter.com/intent/like?tweet_id=${tweet}`,
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Like this post on Twitter",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__["IoHeartOutline"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.retweet,
      href: `https://twitter.com/intent/retweet?tweet_id=${tweet}`,
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Retweet this post on Twitter",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineRetweet"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/PageHead.tsx":
/*!*********************************!*\
  !*** ./components/PageHead.tsx ***!
  \*********************************/
/*! exports provided: PageHead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHead", function() { return PageHead; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\PageHead.tsx";


// TODO: remove duplication between PageHead and NotionPage Head
const PageHead = ({
  site
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      charSet: "utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      httpEquiv: "Content-Type",
      content: "text/html; charset=utf-8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1, shrink-to-fit=no"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), (site === null || site === void 0 ? void 0 : site.description) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: site.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: site.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, undefined)]
    }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "theme-color",
      content: "#EB625A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/PageSocial.module.css":
/*!******************************************!*\
  !*** ./components/PageSocial.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pageSocial": "PageSocial_pageSocial__2WqHl",
	"action": "PageSocial_action__2zgVt",
	"actionBg": "PageSocial_actionBg__3CigO",
	"actionBgPane": "PageSocial_actionBgPane__gbBkL",
	"facebook": "PageSocial_facebook__3o4sf",
	"twitter": "PageSocial_twitter__-BgFt",
	"linkedin": "PageSocial_linkedin__nElHT",
	"github": "PageSocial_github__slQ0z",
	"medium": "PageSocial_medium__xqvNJ",
	"email": "PageSocial_email__22NP5",
	"links": "PageSocial_links__3pCg6"
};


/***/ }),

/***/ "./components/PageSocial.tsx":
/*!***********************************!*\
  !*** ./components/PageSocial.tsx ***!
  \***********************************/
/*! exports provided: PageSocial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageSocial", function() { return PageSocial; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/config */ "./lib/config.ts");
/* harmony import */ var _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageSocial.module.css */ "./components/PageSocial.module.css");
/* harmony import */ var _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\PageSocial.tsx";




const socialLinks = [lib_config__WEBPACK_IMPORTED_MODULE_3__["twitter"] && {
  name: 'twitter',
  href: `https://twitter.com/${lib_config__WEBPACK_IMPORTED_MODULE_3__["twitter"]}`,
  title: `Twitter @${lib_config__WEBPACK_IMPORTED_MODULE_3__["twitter"]}`,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }, undefined)
}, lib_config__WEBPACK_IMPORTED_MODULE_3__["github"] && {
  name: 'github',
  href: `https://github.com/${lib_config__WEBPACK_IMPORTED_MODULE_3__["github"]}`,
  title: `GitHub @${lib_config__WEBPACK_IMPORTED_MODULE_3__["github"]}`,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 7
  }, undefined)
}, lib_config__WEBPACK_IMPORTED_MODULE_3__["linkedin"] && {
  name: 'linkedin',
  href: `https://www.linkedin.com/in/${lib_config__WEBPACK_IMPORTED_MODULE_3__["linkedin"]}`,
  title: `LinkedIn ${lib_config__WEBPACK_IMPORTED_MODULE_3__["author"]}`,
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }, undefined)
}].filter(Boolean);
const PageSocial = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.pageSocial,
    children: socialLinks.map(action => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.action, _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[action.name]),
      href: action.href,
      title: action.title,
      target: "_blank",
      rel: "noopener noreferrer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actionBg,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actionBgPane
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PageSocial_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actionBg,
        children: action.icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, undefined)]
    }, action.name, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/ReactUtterances.tsx":
/*!****************************************!*\
  !*** ./components/ReactUtterances.tsx ***!
  \****************************************/
/*! exports provided: ReactUtterances */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactUtterances", function() { return ReactUtterances; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ "./components/styles.module.css");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\components\\ReactUtterances.tsx";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class ReactUtterances extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "reference", void 0);

    _defineProperty(this, "scriptElement", void 0);

    if (props.issueMap === 'issue-term' && props.issueTerm === undefined) {
      throw Error("Property 'issueTerm' must be provided with issueMap 'issue-term'");
    }

    if (props.issueMap === 'issue-number' && props.issueNumber === undefined) {
      throw Error("Property 'issueNumber' must be provided with issueMap 'issue-number'");
    }

    this.reference = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef();
    this.state = {
      pending: true
    };
  }

  UNSAFE_componentWillReceiveProps(props) {
    // this.scriptElement.setAttribute('theme', props.theme)
    const iframe = document.querySelector('iframe.utterances-frame');

    if (iframe) {
      iframe.contentWindow.postMessage({
        type: 'set-theme',
        theme: props.theme
      }, 'https://utteranc.es/');
    }
  }

  componentDidMount() {
    const {
      repo,
      issueMap,
      issueTerm,
      issueNumber,
      label,
      theme
    } = this.props;
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://utteranc.es/client.js';
    scriptElement.async = true;
    scriptElement.defer = true;
    scriptElement.setAttribute('repo', repo);
    scriptElement.setAttribute('crossorigin', 'annonymous');
    scriptElement.setAttribute('theme', theme);

    scriptElement.onload = () => this.setState({
      pending: false
    });

    if (label) {
      scriptElement.setAttribute('label', label);
    }

    if (issueMap === 'issue-number') {
      scriptElement.setAttribute('issue-number', issueNumber.toString());
    } else if (issueMap === 'issue-term') {
      scriptElement.setAttribute('issue-term', issueTerm);
    } else {
      scriptElement.setAttribute('issue-term', issueMap);
    } // TODO: Check current availability


    this.scriptElement = scriptElement;
    this.reference.current.appendChild(scriptElement);
  }

  render() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.comments,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.utterances,
        ref: this.reference,
        children: this.state.pending && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "Loading Comments..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 34
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! exports provided: NotionPage, Page404, ErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotionPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotionPage */ "./components/NotionPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotionPage", function() { return _NotionPage__WEBPACK_IMPORTED_MODULE_0__["NotionPage"]; });

/* harmony import */ var _Page404__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page404 */ "./components/Page404.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Page404", function() { return _Page404__WEBPACK_IMPORTED_MODULE_1__["Page404"]; });

/* harmony import */ var _ErrorPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ErrorPage */ "./components/ErrorPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorPage", function() { return _ErrorPage__WEBPACK_IMPORTED_MODULE_2__["ErrorPage"]; });





/***/ }),

/***/ "./components/styles.module.css":
/*!**************************************!*\
  !*** ./components/styles.module.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "styles_container__34prM",
	"loadingIcon": "styles_loadingIcon__3Ke2b",
	"spinner": "styles_spinner__307xT",
	"main": "styles_main__2iNpi",
	"errorImage": "styles_errorImage__1yOPE",
	"footer": "styles_footer__1r_c6",
	"copyright": "styles_copyright__3kWHj",
	"settings": "styles_settings__1ed8a",
	"social": "styles_social__235gY",
	"toggleDarkMode": "styles_toggleDarkMode__1icXg",
	"twitter": "styles_twitter__WwfaA",
	"github": "styles_github__32xIr",
	"linkedin": "styles_linkedin__1XGvB",
	"comments": "styles_comments__eWSFD",
	"utterances": "styles_utterances__3A-24",
	"pageActions": "styles_pageActions__3AS89",
	"likeTweet": "styles_likeTweet__1MKrv",
	"retweet": "styles_retweet__3elI5",
	"githubCorner": "styles_githubCorner__1WYyN",
	"octoArm": "styles_octoArm__LVchX",
	"octocat-wave": "styles_octocat-wave__13zbz"
};


/***/ }),

/***/ "./lib/acl.ts":
/*!********************!*\
  !*** ./lib/acl.ts ***!
  \********************/
/*! exports provided: pageAcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageAcl", function() { return pageAcl; });
async function pageAcl({
  site,
  recordMap,
  pageId
}) {
  var _recordMap$block$root;

  if (!site) {
    return {
      error: {
        statusCode: 404,
        message: 'Unable to resolve notion site'
      }
    };
  }

  if (!recordMap) {
    return {
      error: {
        statusCode: 404,
        message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" not found.`
      }
    };
  }

  const keys = Object.keys(recordMap.block);
  const rootKey = keys[0];

  if (!rootKey) {
    return {
      error: {
        statusCode: 404,
        message: `Unable to resolve page for domain "${site.domain}". Notion page "${pageId}" invalid data.`
      }
    };
  }

  const rootValue = (_recordMap$block$root = recordMap.block[rootKey]) === null || _recordMap$block$root === void 0 ? void 0 : _recordMap$block$root.value;
  const rootSpaceId = rootValue === null || rootValue === void 0 ? void 0 : rootValue.space_id;

  if (rootSpaceId && site.rootNotionSpaceId && rootSpaceId !== site.rootNotionSpaceId) {
    if ("development") {
      return {
        error: {
          statusCode: 404,
          message: `Notion page "${pageId}" doesn't belong to the Notion workspace owned by "${site.domain}".`
        }
      };
    }
  }
}

/***/ }),

/***/ "./lib/config.ts":
/*!***********************!*\
  !*** ./lib/config.ts ***!
  \***********************/
/*! exports provided: rootNotionPageId, rootNotionSpaceId, pageUrlOverrides, inversePageUrlOverrides, pageUrlAdditions, name, author, domain, description, twitter, github, linkedin, socialImageTitle, socialImageSubtitle, defaultPageIcon, defaultPageCover, defaultPageCoverPosition, utterancesGitHubRepo, imageCDNHost, isPreviewImageSupportEnabled, isDev, includeNotionIdInUrls, isServer, port, host, apiBaseUrl, api, fathomId, fathomConfig, googleProjectId, googleApplicationCredentials, firebaseCollectionImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootNotionPageId", function() { return rootNotionPageId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootNotionSpaceId", function() { return rootNotionSpaceId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageUrlOverrides", function() { return pageUrlOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inversePageUrlOverrides", function() { return inversePageUrlOverrides; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageUrlAdditions", function() { return pageUrlAdditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "author", function() { return author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "description", function() { return description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twitter", function() { return twitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "github", function() { return github; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkedin", function() { return linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialImageTitle", function() { return socialImageTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialImageSubtitle", function() { return socialImageSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPageIcon", function() { return defaultPageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPageCover", function() { return defaultPageCover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPageCoverPosition", function() { return defaultPageCoverPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utterancesGitHubRepo", function() { return utterancesGitHubRepo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageCDNHost", function() { return imageCDNHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPreviewImageSupportEnabled", function() { return isPreviewImageSupportEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDev", function() { return isDev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includeNotionIdInUrls", function() { return includeNotionIdInUrls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "port", function() { return port; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "host", function() { return host; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiBaseUrl", function() { return apiBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fathomId", function() { return fathomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fathomConfig", function() { return fathomConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleProjectId", function() { return googleProjectId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleApplicationCredentials", function() { return googleApplicationCredentials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseCollectionImages", function() { return firebaseCollectionImages; });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_config_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-config-value */ "./lib/get-config-value.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Site-wide app configuration.
 *
 * This file pulls from the root "site.config.js" as well as environment variables
 * for optional depenencies.
 */


const rootNotionPageId = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('rootNotionPageId'), {
  uuid: false
});

if (!rootNotionPageId) {
  throw new Error('Config error invalid "rootNotionPageId"');
} // if you want to restrict pages to a single notion workspace (optional)


const rootNotionSpaceId = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('rootNotionSpaceId', null), {
  uuid: true
});
const pageUrlOverrides = cleanPageUrlMap(Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('pageUrlOverrides', {}) || {}, 'pageUrlOverrides');
const inversePageUrlOverrides = invertPageUrlOverrides(pageUrlOverrides);
const pageUrlAdditions = cleanPageUrlMap(Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('pageUrlAdditions', {}) || {}, 'pageUrlAdditions'); // general site config

const name = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('name');
const author = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('author');
const domain = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('domain');
const description = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('description', 'Notion Blog'); // social accounts

const twitter = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('twitter', null);
const github = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('github', null);
const linkedin = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('linkedin', null);
const socialImageTitle = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('socialImageTitle', null);
const socialImageSubtitle = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('socialImageSubtitle', null); // default notion values for site-wide consistency (optional; may be overridden on a per-page basis)

const defaultPageIcon = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('defaultPageIcon', null);
const defaultPageCover = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('defaultPageCover', null);
const defaultPageCoverPosition = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('defaultPageCoverPosition', 0.5); // Optional utteranc.es comments via GitHub issue comments

const utterancesGitHubRepo = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('utterancesGitHubRepo', null); // Optional image CDN host to proxy all image requests through

const imageCDNHost = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('imageCDNHost', null); // Optional whether or not to enable support for LQIP preview images
// (requires a Google Firebase collection)

const isPreviewImageSupportEnabled = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('isPreviewImageSupportEnabled', false);
const isDev =  true || false; // where it all starts -- the site's root Notion page

const includeNotionIdInUrls = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getSiteConfig"])('includeNotionIdInUrls', !!isDev); // ----------------------------------------------------------------------------

const isServer = true;
const port = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getEnv"])('PORT', '3000');
const host = isDev ? `http://localhost:${port}` : `https://${domain}`;
const apiBaseUrl = `${host}/api`;
const api = {
  createPreviewImage: `${apiBaseUrl}/create-preview-image`,
  searchNotion: `${apiBaseUrl}/search-notion`,
  renderSocialImage: pageId => `${apiBaseUrl}/render-social-image/${pageId}`
}; // ----------------------------------------------------------------------------

const fathomId = isDev ? null : process.env.NEXT_PUBLIC_FATHOM_ID;
const fathomConfig = fathomId ? {
  excludedDomains: ['localhost', 'localhost:3000']
} : undefined;
const defaultEnvValueForPreviewImageSupport = isPreviewImageSupportEnabled && isServer ? undefined : null;
const googleProjectId = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getEnv"])('GCLOUD_PROJECT', defaultEnvValueForPreviewImageSupport);
const googleApplicationCredentials = getGoogleApplicationCredentials();
const firebaseCollectionImages = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getEnv"])('FIREBASE_COLLECTION_IMAGES', defaultEnvValueForPreviewImageSupport); // this hack is necessary because vercel doesn't support secret files so we need to encode our google
// credentials a base64-encoded string of the JSON-ified content

function getGoogleApplicationCredentials() {
  if (!isPreviewImageSupportEnabled || !isServer) {
    return null;
  }

  try {
    const googleApplicationCredentialsBase64 = Object(_get_config_value__WEBPACK_IMPORTED_MODULE_1__["getEnv"])('GOOGLE_APPLICATION_CREDENTIALS', defaultEnvValueForPreviewImageSupport);
    return JSON.parse(Buffer.from(googleApplicationCredentialsBase64, 'base64').toString());
  } catch (err) {
    console.error('Firebase config error: invalid "GOOGLE_APPLICATION_CREDENTIALS" should be base64-encoded JSON\n');
    throw err;
  }
}

function cleanPageUrlMap(pageUrlMap, label) {
  return Object.keys(pageUrlMap).reduce((acc, uri) => {
    const pageId = pageUrlMap[uri];
    const uuid = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(pageId, {
      uuid: false
    });

    if (!uuid) {
      throw new Error(`Invalid ${label} page id "${pageId}"`);
    }

    if (!uri) {
      throw new Error(`Missing ${label} value for page "${pageId}"`);
    }

    if (!uri.startsWith('/')) {
      throw new Error(`Invalid ${label} value for page "${pageId}": value "${uri}" should be a relative URI that starts with "/"`);
    }

    const path = uri.slice(1);
    return _objectSpread(_objectSpread({}, acc), {}, {
      [path]: uuid
    });
  }, {});
}

function invertPageUrlOverrides(pageUrlOverrides) {
  return Object.keys(pageUrlOverrides).reduce((acc, uri) => {
    const pageId = pageUrlOverrides[uri];
    return _objectSpread(_objectSpread({}, acc), {}, {
      [pageId]: uri
    });
  }, {});
}

/***/ }),

/***/ "./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/*! exports provided: db, images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
/* harmony import */ var _google_cloud_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google-cloud/firestore */ "@google-cloud/firestore");
/* harmony import */ var _google_cloud_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_google_cloud_firestore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./lib/config.ts");


let db = null;
let images = null;

if (_config__WEBPACK_IMPORTED_MODULE_1__["isPreviewImageSupportEnabled"]) {
  db = new _google_cloud_firestore__WEBPACK_IMPORTED_MODULE_0__["Firestore"]({
    projectId: _config__WEBPACK_IMPORTED_MODULE_1__["googleProjectId"],
    credentials: _config__WEBPACK_IMPORTED_MODULE_1__["googleApplicationCredentials"]
  });
  images = db.collection(_config__WEBPACK_IMPORTED_MODULE_1__["firebaseCollectionImages"]);
}

/***/ }),

/***/ "./lib/get-all-pages.ts":
/*!******************************!*\
  !*** ./lib/get-all-pages.ts ***!
  \******************************/
/*! exports provided: getAllPages, getAllPagesImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPages", function() { return getAllPages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPagesImpl", function() { return getAllPagesImpl; });
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-memoize */ "p-memoize");
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p_memoize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./lib/config.ts");
/* harmony import */ var _notion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notion */ "./lib/notion.ts");
/* harmony import */ var _get_canonical_page_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-canonical-page-id */ "./lib/get-canonical-page-id.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const uuid = !!_config__WEBPACK_IMPORTED_MODULE_2__["includeNotionIdInUrls"];
const getAllPages = p_memoize__WEBPACK_IMPORTED_MODULE_0___default()(getAllPagesImpl, {
  maxAge: 60000 * 5
});
async function getAllPagesImpl(rootNotionPageId, rootNotionSpaceId) {
  const pageMap = await Object(notion_utils__WEBPACK_IMPORTED_MODULE_1__["getAllPagesInSpace"])(rootNotionPageId, rootNotionSpaceId, _notion__WEBPACK_IMPORTED_MODULE_3__["notion"].getPage.bind(_notion__WEBPACK_IMPORTED_MODULE_3__["notion"]));
  const canonicalPageMap = Object.keys(pageMap).reduce((map, pageId) => {
    const recordMap = pageMap[pageId];

    if (!recordMap) {
      throw new Error(`Error loading page "${pageId}"`);
    }

    const canonicalPageId = Object(_get_canonical_page_id__WEBPACK_IMPORTED_MODULE_4__["getCanonicalPageId"])(pageId, recordMap, {
      uuid
    });

    if (map[canonicalPageId]) {
      console.error('error duplicate canonical page id', canonicalPageId, pageId, map[canonicalPageId]);
      return map;
    } else {
      return _objectSpread(_objectSpread({}, map), {}, {
        [canonicalPageId]: pageId
      });
    }
  }, {});
  return {
    pageMap,
    canonicalPageMap
  };
}

/***/ }),

/***/ "./lib/get-canonical-page-id.ts":
/*!**************************************!*\
  !*** ./lib/get-canonical-page-id.ts ***!
  \**************************************/
/*! exports provided: getCanonicalPageId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanonicalPageId", function() { return getCanonicalPageId; });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./lib/config.ts");


function getCanonicalPageId(pageId, recordMap, {
  uuid = true
} = {}) {
  const cleanPageId = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(pageId, {
    uuid: false
  });

  if (!cleanPageId) {
    return null;
  }

  const override = _config__WEBPACK_IMPORTED_MODULE_1__["inversePageUrlOverrides"][cleanPageId];

  if (override) {
    return override;
  } else {
    return Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["getCanonicalPageId"])(pageId, recordMap, {
      uuid
    });
  }
}

/***/ }),

/***/ "./lib/get-config-value.ts":
/*!*********************************!*\
  !*** ./lib/get-config-value.ts ***!
  \*********************************/
/*! exports provided: getSiteConfig, getEnv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiteConfig", function() { return getSiteConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../site.config */ "./site.config.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



if (!_site_config__WEBPACK_IMPORTED_MODULE_0___default.a) {
  throw new Error(`Config error: invalid site.config.js`);
} // TODO: allow environment variables to override site.config.js


let siteConfigOverrides;

try {
  if (process.env.NEXT_PUBLIC_SITE_CONFIG) {
    siteConfigOverrides = JSON.parse(process.env.NEXT_PUBLIC_SITE_CONFIG);
  }
} catch (err) {
  console.error('Invalid config "NEXT_PUBLIC_SITE_CONFIG" failed to parse');
  throw err;
}

const siteConfig = _objectSpread(_objectSpread({}, _site_config__WEBPACK_IMPORTED_MODULE_0___default.a), siteConfigOverrides);

function getSiteConfig(key, defaultValue) {
  const value = siteConfig[key];

  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(`Config error: missing required site config value "${key}"`);
}
function getEnv(key, defaultValue, env = process.env) {
  const value = env[key];

  if (value !== undefined) {
    return value;
  }

  if (defaultValue !== undefined) {
    return defaultValue;
  }

  throw new Error(`Config error: missing required env variable "${key}"`);
}

/***/ }),

/***/ "./lib/get-page-description.ts":
/*!*************************************!*\
  !*** ./lib/get-page-description.ts ***!
  \*************************************/
/*! exports provided: getPageDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageDescription", function() { return getPageDescription; });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);

function getPageDescription(block, recordMap) {
  return Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["getPageProperty"])('Description', block, recordMap);
}

/***/ }),

/***/ "./lib/get-page-tweet.ts":
/*!*******************************!*\
  !*** ./lib/get-page-tweet.ts ***!
  \*******************************/
/*! exports provided: getPageTweet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageTweet", function() { return getPageTweet; });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);

function getPageTweet(block, recordMap) {
  return Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["getPageProperty"])('Tweet', block, recordMap);
}

/***/ }),

/***/ "./lib/get-preview-images.ts":
/*!***********************************!*\
  !*** ./lib/get-preview-images.ts ***!
  \***********************************/
/*! exports provided: getPreviewImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviewImages", function() { return getPreviewImages; });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! got */ "got");
/* harmony import */ var got__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(got__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! p-map */ "p-map");
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(p_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./lib/config.ts");
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ "./lib/db.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function sha256(input) {
  const buffer = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createHash('sha256').update(buffer).digest('hex');
}

async function getPreviewImages(images) {
  if (!_config__WEBPACK_IMPORTED_MODULE_3__["isPreviewImageSupportEnabled"]) {
    return {};
  }

  const imageDocRefs = images.map(url => {
    const id = sha256(url);
    return _db__WEBPACK_IMPORTED_MODULE_4__["images"].doc(id);
  });

  if (!imageDocRefs.length) {
    return {};
  }

  const imageDocs = await _db__WEBPACK_IMPORTED_MODULE_4__["db"].getAll(...imageDocRefs);
  const results = await p_map__WEBPACK_IMPORTED_MODULE_2___default()(imageDocs, async (model, index) => {
    if (model.exists) {
      return model.data();
    } else {
      const json = {
        url: images[index],
        id: model.id
      };
      console.log('createPreviewImage server-side', json); // TODO: should we fire and forget here to speed up builds?

      return got__WEBPACK_IMPORTED_MODULE_1___default.a.post(_config__WEBPACK_IMPORTED_MODULE_3__["api"].createPreviewImage, {
        json
      }).json();
    }
  });
  return results.filter(Boolean).filter(image => !image.error).reduce((acc, result) => _objectSpread(_objectSpread({}, acc), {}, {
    [result.url]: result
  }), {});
}

/***/ }),

/***/ "./lib/get-site-for-domain.ts":
/*!************************************!*\
  !*** ./lib/get-site-for-domain.ts ***!
  \************************************/
/*! exports provided: getSiteForDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiteForDomain", function() { return getSiteForDomain; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.ts");

const getSiteForDomain = async (domain) => {
  return {
    domain,
    name: _config__WEBPACK_IMPORTED_MODULE_0__["name"],
    rootNotionPageId: _config__WEBPACK_IMPORTED_MODULE_0__["rootNotionPageId"],
    rootNotionSpaceId: _config__WEBPACK_IMPORTED_MODULE_0__["rootNotionSpaceId"],
    description: _config__WEBPACK_IMPORTED_MODULE_0__["description"]
  };
};

/***/ }),

/***/ "./lib/get-site-maps.ts":
/*!******************************!*\
  !*** ./lib/get-site-maps.ts ***!
  \******************************/
/*! exports provided: getSiteMaps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSiteMaps", function() { return getSiteMaps; });
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p-map */ "p-map");
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_all_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-all-pages */ "./lib/get-all-pages.ts");
/* harmony import */ var _get_sites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-sites */ "./lib/get-sites.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




async function getSiteMaps() {
  const sites = await Object(_get_sites__WEBPACK_IMPORTED_MODULE_2__["getSites"])();
  const siteMaps = await p_map__WEBPACK_IMPORTED_MODULE_0___default()(sites, async (site, index) => {
    try {
      console.log('getSiteMap', `${index + 1}/${sites.length}`, `(${(index + 1) / sites.length * 100 | 0}%)`, site);
      return _objectSpread({
        site
      }, await Object(_get_all_pages__WEBPACK_IMPORTED_MODULE_1__["getAllPages"])(site.rootNotionPageId, site.rootNotionSpaceId));
    } catch (err) {
      console.warn('site build error', index, site, err);
    }
  }, {
    concurrency: 4
  });
  return siteMaps.filter(Boolean);
}

/***/ }),

/***/ "./lib/get-sites.ts":
/*!**************************!*\
  !*** ./lib/get-sites.ts ***!
  \**************************/
/*! exports provided: getSites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSites", function() { return getSites; });
/* harmony import */ var _get_site_for_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-site-for-domain */ "./lib/get-site-for-domain.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./lib/config.ts");


async function getSites() {
  return [await Object(_get_site_for_domain__WEBPACK_IMPORTED_MODULE_0__["getSiteForDomain"])(_config__WEBPACK_IMPORTED_MODULE_1__["domain"])];
}

/***/ }),

/***/ "./lib/map-image-url.ts":
/*!******************************!*\
  !*** ./lib/map-image-url.ts ***!
  \******************************/
/*! exports provided: mapNotionImageUrl, mapImageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapNotionImageUrl", function() { return mapNotionImageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapImageUrl", function() { return mapImageUrl; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./lib/config.ts");

const mapNotionImageUrl = (url, block) => {
  if (!url) {
    return null;
  }

  if (url.startsWith('data:')) {
    return url;
  }

  if (_config__WEBPACK_IMPORTED_MODULE_0__["imageCDNHost"] && url.startsWith(_config__WEBPACK_IMPORTED_MODULE_0__["imageCDNHost"])) {
    return url;
  } // const origUrl = url


  if (url.startsWith('/images')) {
    url = `https://www.notion.so${url}`;
  } // more recent versions of notion don't proxy unsplash images


  if (!url.startsWith('https://images.unsplash.com')) {
    url = `https://www.notion.so${url.startsWith('/image') ? url : `/image/${encodeURIComponent(url)}`}`;
    const notionImageUrlV2 = new URL(url);
    let table = block.parent_table === 'space' ? 'block' : block.parent_table;

    if (table === 'collection') {
      table = 'block';
    }

    notionImageUrlV2.searchParams.set('table', table);
    notionImageUrlV2.searchParams.set('id', block.id);
    notionImageUrlV2.searchParams.set('cache', 'v2');
    url = notionImageUrlV2.toString();
  } // console.log({ url, origUrl })


  return mapImageUrl(url);
};
const mapImageUrl = imageUrl => {
  if (imageUrl.startsWith('data:')) {
    return imageUrl;
  }

  if (_config__WEBPACK_IMPORTED_MODULE_0__["imageCDNHost"]) {
    // Our proxy uses Cloudflare's global CDN to cache these image assets
    return `${_config__WEBPACK_IMPORTED_MODULE_0__["imageCDNHost"]}/${encodeURIComponent(imageUrl)}`;
  } else {
    return imageUrl;
  }
};

/***/ }),

/***/ "./lib/map-page-url.ts":
/*!*****************************!*\
  !*** ./lib/map-page-url.ts ***!
  \*****************************/
/*! exports provided: mapPageUrl, getCanonicalPageUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapPageUrl", function() { return mapPageUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCanonicalPageUrl", function() { return getCanonicalPageUrl; });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./lib/config.ts");
/* harmony import */ var _get_canonical_page_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-canonical-page-id */ "./lib/get-canonical-page-id.ts");


 // include UUIDs in page URLs during local development but not in production
// (they're nice for debugging and speed up local dev)

const uuid = !!_config__WEBPACK_IMPORTED_MODULE_1__["includeNotionIdInUrls"];
const mapPageUrl = (site, recordMap, searchParams) => (pageId = '') => {
  if (Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["uuidToId"])(pageId) === site.rootNotionPageId) {
    return createUrl('/', searchParams);
  } else {
    return createUrl(`/${Object(_get_canonical_page_id__WEBPACK_IMPORTED_MODULE_2__["getCanonicalPageId"])(pageId, recordMap, {
      uuid
    })}`, searchParams);
  }
};
const getCanonicalPageUrl = (site, recordMap) => (pageId = '') => {
  const pageUuid = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(pageId, {
    uuid: true
  });

  if (Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["uuidToId"])(pageId) === site.rootNotionPageId) {
    return `https://${site.domain}`;
  } else {
    return `https://${site.domain}/${Object(_get_canonical_page_id__WEBPACK_IMPORTED_MODULE_2__["getCanonicalPageId"])(pageUuid, recordMap, {
      uuid
    })}`;
  }
};

function createUrl(path, searchParams) {
  return [path, searchParams.toString()].filter(Boolean).join('?');
}

/***/ }),

/***/ "./lib/notion.ts":
/*!***********************!*\
  !*** ./lib/notion.ts ***!
  \***********************/
/*! exports provided: notion, getPage, search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notion", function() { return notion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPage", function() { return getPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-client */ "notion-client");
/* harmony import */ var notion_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_preview_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-preview-images */ "./lib/get-preview-images.ts");
/* harmony import */ var _map_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-image-url */ "./lib/map-image-url.ts");
/* harmony import */ var static_tweets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! static-tweets */ "static-tweets");
/* harmony import */ var static_tweets__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(static_tweets__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! p-map */ "p-map");
/* harmony import */ var p_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(p_map__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const notion = new notion_client__WEBPACK_IMPORTED_MODULE_0__["NotionAPI"]({
  apiBaseUrl: process.env.NOTION_API_BASE_URL
});
async function getPage(pageId) {
  const recordMap = await notion.getPage(pageId);
  const blockIds = Object.keys(recordMap.block);
  const imageUrls = blockIds.map(blockId => {
    var _recordMap$block$bloc;

    const block = (_recordMap$block$bloc = recordMap.block[blockId]) === null || _recordMap$block$bloc === void 0 ? void 0 : _recordMap$block$bloc.value;

    if (block) {
      var _block$format;

      if (block.type === 'image') {
        var _block$properties, _block$properties$sou, _block$properties$sou2;

        const source = (_block$properties = block.properties) === null || _block$properties === void 0 ? void 0 : (_block$properties$sou = _block$properties.source) === null || _block$properties$sou === void 0 ? void 0 : (_block$properties$sou2 = _block$properties$sou[0]) === null || _block$properties$sou2 === void 0 ? void 0 : _block$properties$sou2[0];

        if (source) {
          return {
            block,
            url: source
          };
        }
      }

      if ((_block$format = block.format) !== null && _block$format !== void 0 && _block$format.page_cover) {
        const source = block.format.page_cover;
        return {
          block,
          url: source
        };
      }
    }

    return null;
  }).filter(Boolean).map(({
    block,
    url
  }) => Object(_map_image_url__WEBPACK_IMPORTED_MODULE_2__["mapNotionImageUrl"])(url, block)).filter(Boolean);
  const urls = Array.from(new Set(imageUrls));
  const previewImageMap = await Object(_get_preview_images__WEBPACK_IMPORTED_MODULE_1__["getPreviewImages"])(urls);
  recordMap.preview_images = previewImageMap;
  const tweetIds = blockIds.map(blockId => {
    var _recordMap$block$bloc2;

    const block = (_recordMap$block$bloc2 = recordMap.block[blockId]) === null || _recordMap$block$bloc2 === void 0 ? void 0 : _recordMap$block$bloc2.value;

    if (block) {
      if (block.type === 'tweet') {
        var _block$properties2, _block$properties2$so, _block$properties2$so2;

        const src = (_block$properties2 = block.properties) === null || _block$properties2 === void 0 ? void 0 : (_block$properties2$so = _block$properties2.source) === null || _block$properties2$so === void 0 ? void 0 : (_block$properties2$so2 = _block$properties2$so[0]) === null || _block$properties2$so2 === void 0 ? void 0 : _block$properties2$so2[0];

        if (src) {
          const id = src.split('?')[0].split('/').pop();
          if (id) return id;
        }
      }
    }

    return null;
  }).filter(Boolean);
  const tweetAsts = await p_map__WEBPACK_IMPORTED_MODULE_4___default()(tweetIds, async tweetId => {
    try {
      return {
        tweetId,
        tweetAst: await Object(static_tweets__WEBPACK_IMPORTED_MODULE_3__["fetchTweetAst"])(tweetId)
      };
    } catch (err) {
      console.error('error fetching tweet info', tweetId, err);
    }
  }, {
    concurrency: 4
  });
  const tweetAstMap = tweetAsts.reduce((acc, {
    tweetId,
    tweetAst
  }) => {
    if (tweetAst) {
      return _objectSpread(_objectSpread({}, acc), {}, {
        [tweetId]: tweetAst
      });
    } else {
      return acc;
    }
  }, {});
  recordMap.tweetAstMap = tweetAstMap;
  return recordMap;
}
async function search(params) {
  return notion.search(params);
}

/***/ }),

/***/ "./lib/resolve-notion-page.ts":
/*!************************************!*\
  !*** ./lib/resolve-notion-page.ts ***!
  \************************************/
/*! exports provided: resolveNotionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNotionPage", function() { return resolveNotionPage; });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _acl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./acl */ "./lib/acl.ts");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./lib/config.ts");
/* harmony import */ var _notion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notion */ "./lib/notion.ts");
/* harmony import */ var _get_site_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-site-maps */ "./lib/get-site-maps.ts");
/* harmony import */ var _get_site_for_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-site-for-domain */ "./lib/get-site-for-domain.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







async function resolveNotionPage(domain, rawPageId) {
  let site;
  let pageId;
  let recordMap;

  if (rawPageId && rawPageId !== 'index') {
    pageId = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(rawPageId);

    if (!pageId) {
      // check if the site configuration provides an override of a fallback for
      // the page's URI
      const override = _config__WEBPACK_IMPORTED_MODULE_2__["pageUrlOverrides"][rawPageId] || _config__WEBPACK_IMPORTED_MODULE_2__["pageUrlAdditions"][rawPageId];

      if (override) {
        pageId = Object(notion_utils__WEBPACK_IMPORTED_MODULE_0__["parsePageId"])(override);
      }
    }

    if (pageId) {
      const resources = await Promise.all([Object(_get_site_for_domain__WEBPACK_IMPORTED_MODULE_5__["getSiteForDomain"])(domain), Object(_notion__WEBPACK_IMPORTED_MODULE_3__["getPage"])(pageId)]);
      site = resources[0];
      recordMap = resources[1];
    } else {
      // handle mapping of user-friendly canonical page paths to Notion page IDs
      // e.g., /developer-x-entrepreneur versus /71201624b204481f862630ea25ce62fe
      const siteMaps = await Object(_get_site_maps__WEBPACK_IMPORTED_MODULE_4__["getSiteMaps"])();
      const siteMap = siteMaps[0];
      pageId = siteMap.canonicalPageMap[rawPageId];

      if (pageId) {
        // TODO: we're not re-using the site from siteMaps because it is
        // cached aggressively
        // site = await getSiteForDomain(domain)
        // recordMap = siteMap.pageMap[pageId]
        const resources = await Promise.all([Object(_get_site_for_domain__WEBPACK_IMPORTED_MODULE_5__["getSiteForDomain"])(domain), Object(_notion__WEBPACK_IMPORTED_MODULE_3__["getPage"])(pageId)]);
        site = resources[0];
        recordMap = resources[1];
      } else {
        return {
          error: {
            message: `Not found "${rawPageId}"`,
            statusCode: 404
          }
        };
      }
    }
  } else {
    site = await Object(_get_site_for_domain__WEBPACK_IMPORTED_MODULE_5__["getSiteForDomain"])(domain);
    pageId = site.rootNotionPageId;
    console.log(site);
    recordMap = await Object(_notion__WEBPACK_IMPORTED_MODULE_3__["getPage"])(pageId);
  }

  const props = {
    site,
    recordMap,
    pageId
  };
  return _objectSpread(_objectSpread({}, props), await _acl__WEBPACK_IMPORTED_MODULE_1__["pageAcl"](props));
}

/***/ }),

/***/ "./lib/search-notion.ts":
/*!******************************!*\
  !*** ./lib/search-notion.ts ***!
  \******************************/
/*! exports provided: searchNotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchNotion", function() { return searchNotion; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! p-memoize */ "p-memoize");
/* harmony import */ var p_memoize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(p_memoize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./lib/config.ts");
// import ky from 'ky'



const searchNotion = p_memoize__WEBPACK_IMPORTED_MODULE_1___default()(searchNotionImpl, {
  maxAge: 10000
});

async function searchNotionImpl(params) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(_config__WEBPACK_IMPORTED_MODULE_2__["api"].searchNotion, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => {
    console.log(res);

    if (res.ok) {
      return res;
    } // convert non-2xx HTTP responses into errors


    const error = new Error(res.statusText);
    error.response = res;
    return Promise.reject(error);
  }).then(res => res.json()); // return ky
  //   .post(api.searchNotion, {
  //     json: params
  //   })
  //   .json()
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotionDomainPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/config */ "./lib/config.ts");
/* harmony import */ var lib_resolve_notion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/resolve-notion-page */ "./lib/resolve-notion-page.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components */ "./components/index.ts");

var _jsxFileName = "B:\\jacko\\Documents\\JacksNewSiteCRM\\jackoregankenny.com\\NewOne\\nextjs-notion-starter-kit\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getStaticProps = async () => {
  try {
    const props = await Object(lib_resolve_notion_page__WEBPACK_IMPORTED_MODULE_3__["resolveNotionPage"])(lib_config__WEBPACK_IMPORTED_MODULE_2__["domain"]);
    return {
      props,
      revalidate: 10
    };
  } catch (err) {
    console.error('page error', lib_config__WEBPACK_IMPORTED_MODULE_2__["domain"], err); // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed

    throw err;
  }
};
function NotionDomainPage(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components__WEBPACK_IMPORTED_MODULE_4__["NotionPage"], _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./site.config.js":
/*!************************!*\
  !*** ./site.config.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'e30660ff57944cef97b5f448aaa47d7f',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,
  // basic site info (required)
  name: "Jack O'Regan Kenny",
  domain: 'jackoregankenny.com',
  author: "Jack O'Regan Kenny",
  // open graph metadata (optional)
  description: "Hi I'm Jack and I build things",
  socialImageTitle: "Jack O'Regan Kenny",
  socialImageSubtitle: 'I build stuff',
  // social usernames (optional)
  twitter: 'jackoregankenny',
  github: 'jackoregankenny',
  linkedin: 'jackoregankenny',
  email: 'mailto:jackoregankenny@gmail.com',
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,
  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,
  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,
  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,
  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
};

/***/ }),

/***/ "@google-cloud/firestore":
/*!******************************************!*\
  !*** external "@google-cloud/firestore" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@google-cloud/firestore");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "dangerously-set-html-content":
/*!***********************************************!*\
  !*** external "dangerously-set-html-content" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dangerously-set-html-content");

/***/ }),

/***/ "got":
/*!**********************!*\
  !*** external "got" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("got");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "notion-client":
/*!********************************!*\
  !*** external "notion-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notion-client");

/***/ }),

/***/ "notion-utils":
/*!*******************************!*\
  !*** external "notion-utils" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notion-utils");

/***/ }),

/***/ "p-map":
/*!************************!*\
  !*** external "p-map" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p-map");

/***/ }),

/***/ "p-memoize":
/*!****************************!*\
  !*** external "p-memoize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("p-memoize");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-body-classname":
/*!***************************************!*\
  !*** external "react-body-classname" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-body-classname");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-notion-x":
/*!*********************************!*\
  !*** external "react-notion-x" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-notion-x");

/***/ }),

/***/ "react-static-tweets":
/*!**************************************!*\
  !*** external "react-static-tweets" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-static-tweets");

/***/ }),

/***/ "react-use":
/*!****************************!*\
  !*** external "react-use" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-use");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "static-tweets":
/*!********************************!*\
  !*** external "static-tweets" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("static-tweets");

/***/ }),

/***/ "use-dark-mode":
/*!********************************!*\
  !*** external "use-dark-mode" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("use-dark-mode");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0N1c3RvbUZvbnQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3VzdG9tSHRtbC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9FcnJvclBhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZGluZ0ljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aW9uUGFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYWdlNDA0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VIZWFkLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VTb2NpYWwubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VTb2NpYWwudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUmVhY3RVdHRlcmFuY2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc3R5bGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbGliL2FjbC50cyIsIndlYnBhY2s6Ly8vLi9saWIvY29uZmlnLnRzIiwid2VicGFjazovLy8uL2xpYi9kYi50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LWFsbC1wYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LWNhbm9uaWNhbC1wYWdlLWlkLnRzIiwid2VicGFjazovLy8uL2xpYi9nZXQtY29uZmlnLXZhbHVlLnRzIiwid2VicGFjazovLy8uL2xpYi9nZXQtcGFnZS1kZXNjcmlwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LXBhZ2UtdHdlZXQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2dldC1wcmV2aWV3LWltYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LXNpdGUtZm9yLWRvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LXNpdGUtbWFwcy50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LXNpdGVzLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXAtaW1hZ2UtdXJsLnRzIiwid2VicGFjazovLy8uL2xpYi9tYXAtcGFnZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL25vdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9saWIvcmVzb2x2ZS1ub3Rpb24tcGFnZS50cyIsIndlYnBhY2s6Ly8vLi9saWIvc2VhcmNoLW5vdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMtbm9vcC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NpdGUuY29uZmlnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBnb29nbGUtY2xvdWQvZmlyZXN0b3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNyeXB0b1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhbmdlcm91c2x5LXNldC1odG1sLWNvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vdGlvbi1jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpb24tdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwLW1hcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInAtbWVtb2l6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9keS1jbGFzc25hbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvaW81XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ub3Rpb24teFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0YXRpYy10d2VldHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC11c2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdGF0aWMtdHdlZXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXNlLWRhcmstbW9kZVwiIl0sIm5hbWVzIjpbIkN1c3RvbUZvbnQiLCJzaXRlIiwiZm9udEZhbWlseSIsImZvbnRGYW1pbGllcyIsImdvb2dsZUZvbnRGYW1pbGllcyIsIm1hcCIsImZvbnQiLCJyZXBsYWNlIiwiam9pbiIsImdvb2dsZUZvbnRzTGluayIsImNzc0ZvbnRGYW1pbGllcyIsIkN1c3RvbUh0bWwiLCJodG1sIiwiRXJyb3JQYWdlIiwic3RhdHVzQ29kZSIsInRpdGxlIiwic3R5bGVzIiwiY29udGFpbmVyIiwibWFpbiIsImVycm9ySW1hZ2UiLCJGb290ZXIiLCJpc0RhcmtNb2RlIiwidG9nZ2xlRGFya01vZGUiLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsIlJlYWN0IiwidG9nZ2xlRGFya01vZGVDYiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvb3RlciIsImNvcHlyaWdodCIsImNvbmZpZyIsInNldHRpbmdzIiwic29jaWFsIiwidHdpdHRlciIsImdpdGh1YiIsImxpbmtlZGluIiwiTG9hZGluZyIsIkxvYWRpbmdJY29uIiwicHJvcHMiLCJjbGFzc05hbWUiLCJyZXN0IiwiY3MiLCJsb2FkaW5nSWNvbiIsIlBkZiIsImR5bmFtaWMiLCJ0aGVuIiwibm90aW9uIiwiRXF1YXRpb24iLCJNb2RhbCIsInNzciIsIk5vdGlvblBhZ2UiLCJyZWNvcmRNYXAiLCJlcnJvciIsInBhZ2VJZCIsInJvdXRlciIsInVzZVJvdXRlciIsImxpdGUiLCJ1c2VTZWFyY2hQYXJhbSIsInBhcmFtcyIsImlzTGl0ZU1vZGUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJkYXJrTW9kZSIsInVzZURhcmtNb2RlIiwiY2xhc3NOYW1lRGFyayIsImlzRmFsbGJhY2siLCJrZXlzIiwiT2JqZWN0IiwiYmxvY2siLCJ2YWx1ZSIsImxlbmd0aCIsImdldEJsb2NrVGl0bGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImlzRGV2Iiwicm9vdE5vdGlvblBhZ2VJZCIsImciLCJ3aW5kb3ciLCJzaXRlTWFwUGFnZVVybCIsIm1hcFBhZ2VVcmwiLCJjYW5vbmljYWxQYWdlVXJsIiwiZ2V0Q2Fub25pY2FsUGFnZVVybCIsImlzQmxvZ1Bvc3QiLCJ0eXBlIiwicGFyZW50X3RhYmxlIiwic2hvd1RhYmxlT2ZDb250ZW50cyIsIm1pblRhYmxlT2ZDb250ZW50c0l0ZW1zIiwic29jaWFsSW1hZ2UiLCJtYXBOb3Rpb25JbWFnZVVybCIsImZvcm1hdCIsInBhZ2VfY292ZXIiLCJyZW5kZXJTb2NpYWxJbWFnZSIsInNvY2lhbERlc2NyaXB0aW9uIiwiZ2V0UGFnZURlc2NyaXB0aW9uIiwiY29tbWVudHMiLCJwYWdlQXNpZGUiLCJ0d2VldCIsImdldFBhZ2VUd2VldCIsInR3ZWV0QXN0TWFwIiwic3dyT3B0aW9ucyIsImZldGNoZXIiLCJpZCIsImZldGNoIiwiciIsImpzb24iLCJkb21haW4iLCJwYWdlTGluayIsImhyZWYiLCJhcyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJzY3JvbGwiLCJzaGFsbG93IiwibG9jYWxlIiwiY29kZSIsIkNvZGUiLCJjb2xsZWN0aW9uIiwiQ29sbGVjdGlvbiIsImNvbGxlY3Rpb25Sb3ciLCJDb2xsZWN0aW9uUm93IiwiVHdlZXQiLCJtb2RhbCIsInBkZiIsImVxdWF0aW9uIiwicHJldmlld0ltYWdlcyIsInNlYXJjaE5vdGlvbiIsInRvZ2dsZSIsIlBhZ2U0MDQiLCJtZXNzYWdlIiwiUGFnZUFjdGlvbnMiLCJwYWdlQWN0aW9ucyIsImxpa2VUd2VldCIsInJldHdlZXQiLCJQYWdlSGVhZCIsImRlc2NyaXB0aW9uIiwic29jaWFsTGlua3MiLCJpY29uIiwiZmlsdGVyIiwiQm9vbGVhbiIsIlBhZ2VTb2NpYWwiLCJwYWdlU29jaWFsIiwiYWN0aW9uIiwiYWN0aW9uQmciLCJhY3Rpb25CZ1BhbmUiLCJSZWFjdFV0dGVyYW5jZXMiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImlzc3VlTWFwIiwiaXNzdWVUZXJtIiwidW5kZWZpbmVkIiwiRXJyb3IiLCJpc3N1ZU51bWJlciIsInJlZmVyZW5jZSIsImNyZWF0ZVJlZiIsInN0YXRlIiwicGVuZGluZyIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwiaWZyYW1lIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudFdpbmRvdyIsInBvc3RNZXNzYWdlIiwidGhlbWUiLCJjb21wb25lbnREaWRNb3VudCIsInJlcG8iLCJsYWJlbCIsInNjcmlwdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJkZWZlciIsInNldEF0dHJpYnV0ZSIsIm9ubG9hZCIsInNldFN0YXRlIiwidG9TdHJpbmciLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCJ1dHRlcmFuY2VzIiwicGFnZUFjbCIsInJvb3RLZXkiLCJyb290VmFsdWUiLCJyb290U3BhY2VJZCIsInNwYWNlX2lkIiwicm9vdE5vdGlvblNwYWNlSWQiLCJwYXJzZVBhZ2VJZCIsImdldFNpdGVDb25maWciLCJ1dWlkIiwicGFnZVVybE92ZXJyaWRlcyIsImNsZWFuUGFnZVVybE1hcCIsImludmVyc2VQYWdlVXJsT3ZlcnJpZGVzIiwiaW52ZXJ0UGFnZVVybE92ZXJyaWRlcyIsInBhZ2VVcmxBZGRpdGlvbnMiLCJhdXRob3IiLCJzb2NpYWxJbWFnZVRpdGxlIiwic29jaWFsSW1hZ2VTdWJ0aXRsZSIsImRlZmF1bHRQYWdlSWNvbiIsImRlZmF1bHRQYWdlQ292ZXIiLCJkZWZhdWx0UGFnZUNvdmVyUG9zaXRpb24iLCJ1dHRlcmFuY2VzR2l0SHViUmVwbyIsImltYWdlQ0ROSG9zdCIsImlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQiLCJpbmNsdWRlTm90aW9uSWRJblVybHMiLCJpc1NlcnZlciIsInBvcnQiLCJnZXRFbnYiLCJob3N0IiwiYXBpQmFzZVVybCIsImFwaSIsImNyZWF0ZVByZXZpZXdJbWFnZSIsImZhdGhvbUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZBVEhPTV9JRCIsImZhdGhvbUNvbmZpZyIsImV4Y2x1ZGVkRG9tYWlucyIsImRlZmF1bHRFbnZWYWx1ZUZvclByZXZpZXdJbWFnZVN1cHBvcnQiLCJnb29nbGVQcm9qZWN0SWQiLCJnb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzIiwiZ2V0R29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFscyIsImZpcmViYXNlQ29sbGVjdGlvbkltYWdlcyIsImdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHNCYXNlNjQiLCJKU09OIiwicGFyc2UiLCJCdWZmZXIiLCJmcm9tIiwiZXJyIiwicGFnZVVybE1hcCIsInJlZHVjZSIsImFjYyIsInVyaSIsInN0YXJ0c1dpdGgiLCJwYXRoIiwic2xpY2UiLCJkYiIsImltYWdlcyIsImZpcmVzdG9yZSIsInByb2plY3RJZCIsImNyZWRlbnRpYWxzIiwiZ2V0QWxsUGFnZXMiLCJwTWVtb2l6ZSIsImdldEFsbFBhZ2VzSW1wbCIsIm1heEFnZSIsInBhZ2VNYXAiLCJnZXRBbGxQYWdlc0luU3BhY2UiLCJnZXRQYWdlIiwiYmluZCIsImNhbm9uaWNhbFBhZ2VNYXAiLCJjYW5vbmljYWxQYWdlSWQiLCJnZXRDYW5vbmljYWxQYWdlSWQiLCJjbGVhblBhZ2VJZCIsIm92ZXJyaWRlIiwiZ2V0Q2Fub25pY2FsUGFnZUlkSW1wbCIsInJhd1NpdGVDb25maWciLCJzaXRlQ29uZmlnT3ZlcnJpZGVzIiwiTkVYVF9QVUJMSUNfU0lURV9DT05GSUciLCJzaXRlQ29uZmlnIiwia2V5IiwiZGVmYXVsdFZhbHVlIiwiZ2V0UGFnZVByb3BlcnR5Iiwic2hhMjU2IiwiaW5wdXQiLCJidWZmZXIiLCJpc0J1ZmZlciIsImNyeXB0byIsImNyZWF0ZUhhc2giLCJ1cGRhdGUiLCJkaWdlc3QiLCJnZXRQcmV2aWV3SW1hZ2VzIiwiaW1hZ2VEb2NSZWZzIiwidXJsIiwiZG9jIiwiaW1hZ2VEb2NzIiwiZ2V0QWxsIiwicmVzdWx0cyIsInBNYXAiLCJtb2RlbCIsImluZGV4IiwiZXhpc3RzIiwiZGF0YSIsImdvdCIsInBvc3QiLCJpbWFnZSIsInJlc3VsdCIsImdldFNpdGVGb3JEb21haW4iLCJnZXRTaXRlTWFwcyIsInNpdGVzIiwiZ2V0U2l0ZXMiLCJzaXRlTWFwcyIsIndhcm4iLCJjb25jdXJyZW5jeSIsImVuY29kZVVSSUNvbXBvbmVudCIsIm5vdGlvbkltYWdlVXJsVjIiLCJVUkwiLCJ0YWJsZSIsInNldCIsIm1hcEltYWdlVXJsIiwiaW1hZ2VVcmwiLCJ1dWlkVG9JZCIsImNyZWF0ZVVybCIsInBhZ2VVdWlkIiwiTm90aW9uQVBJIiwiTk9USU9OX0FQSV9CQVNFX1VSTCIsImJsb2NrSWRzIiwiaW1hZ2VVcmxzIiwiYmxvY2tJZCIsInNvdXJjZSIsInByb3BlcnRpZXMiLCJ1cmxzIiwiQXJyYXkiLCJTZXQiLCJwcmV2aWV3SW1hZ2VNYXAiLCJwcmV2aWV3X2ltYWdlcyIsInR3ZWV0SWRzIiwic3BsaXQiLCJwb3AiLCJ0d2VldEFzdHMiLCJ0d2VldElkIiwidHdlZXRBc3QiLCJmZXRjaFR3ZWV0QXN0Iiwic2VhcmNoIiwicmVzb2x2ZU5vdGlvblBhZ2UiLCJyYXdQYWdlSWQiLCJyZXNvdXJjZXMiLCJQcm9taXNlIiwiYWxsIiwic2l0ZU1hcCIsImFjbCIsInNlYXJjaE5vdGlvbkltcGwiLCJtZXRob2QiLCJib2R5Iiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsIm9rIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlIiwicmVqZWN0IiwicHJlZmV0Y2hlZCIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJldmVudCIsInRhcmdldCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50IiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImxpbmsiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsIm1hcmtBc3NldEVycm9yIiwiY2FuY2VsbGVkIiwib25CdWlsZE1hbmlmZXN0IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiY2xlYW5QYXRobmFtZSIsInBhZ2VzIiwicGFnZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4IiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImdldFN0YXRpY1Byb3BzIiwicmV2YWxpZGF0ZSIsIk5vdGlvbkRvbWFpblBhZ2UiLCJtb2R1bGUiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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QSxpRDs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4uL2xpYi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBDdXN0b21Gb250OiBSZWFjdC5GQzx7IHNpdGU6IHR5cGVzLlNpdGUgfT4gPSAoeyBzaXRlIH0pID0+IHtcclxuICBpZiAoIXNpdGUuZm9udEZhbWlseSkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2ZvbnRzL2RvY3MvY3NzMlxyXG4gIGNvbnN0IGZvbnRGYW1pbGllcyA9IFtzaXRlLmZvbnRGYW1pbHldXHJcbiAgY29uc3QgZ29vZ2xlRm9udEZhbWlsaWVzID0gZm9udEZhbWlsaWVzXHJcbiAgICAubWFwKChmb250KSA9PiBmb250LnJlcGxhY2UoLyAvZywgJysnKSlcclxuICAgIC5tYXAoKGZvbnQpID0+IGBmYW1pbHk9JHtmb250fTppdGFsLHdnaHRAMCwyMDAuLjcwMDsxLDIwMC4uNzAwYClcclxuICAgIC5qb2luKCcmJylcclxuICBjb25zdCBnb29nbGVGb250c0xpbmsgPSBgaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/JHtnb29nbGVGb250RmFtaWxpZXN9JmRpc3BsYXk9c3dhcGBcclxuICBjb25zdCBjc3NGb250RmFtaWxpZXMgPSBmb250RmFtaWxpZXMubWFwKChmb250KSA9PiBgXCIke2ZvbnR9XCJgKS5qb2luKCcsICcpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9e2dvb2dsZUZvbnRzTGlua30gLz5cclxuXHJcbiAgICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgICAubm90aW9uLm5vdGlvbi1hcHAge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJHtjc3NGb250RmFtaWxpZXN9LCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXHJcbiAgICAgICAgICAgICAgJ1NlZ29lIFVJJywgSGVsdmV0aWNhLCAnQXBwbGUgQ29sb3IgRW1vamknLCBBcmlhbCwgc2Fucy1zZXJpZixcclxuICAgICAgICAgICAgICAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IElubmVySFRNTCBmcm9tICdkYW5nZXJvdXNseS1zZXQtaHRtbC1jb250ZW50J1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi9saWIvdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3QgQ3VzdG9tSHRtbDogUmVhY3QuRkM8eyBzaXRlOiB0eXBlcy5TaXRlIH0+ID0gKHsgc2l0ZSB9KSA9PiB7XHJcbiAgaWYgKCFzaXRlLmh0bWwpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPElubmVySFRNTCBodG1sPXtzaXRlLmh0bWx9IC8+XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFBhZ2VIZWFkIH0gZnJvbSAnLi9QYWdlSGVhZCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBjb25zdCBFcnJvclBhZ2U6IFJlYWN0LkZDPHsgc3RhdHVzQ29kZTogbnVtYmVyIH0+ID0gKHsgc3RhdHVzQ29kZSB9KSA9PiB7XHJcbiAgY29uc3QgdGl0bGUgPSAnRXJyb3InXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZUhlYWQgLz5cclxuXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17dGl0bGV9IC8+XHJcblxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGgxPkVycm9yIExvYWRpbmcgUGFnZTwvaDE+XHJcblxyXG4gICAgICAgICAge3N0YXR1c0NvZGUgJiYgPHA+RXJyb3IgY29kZToge3N0YXR1c0NvZGV9PC9wPn1cclxuXHJcbiAgICAgICAgICA8aW1nIHNyYz0nL2Vycm9yLnBuZycgYWx0PSdFcnJvcicgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JJbWFnZX0gLz5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYVR3aXR0ZXIsIEZhR2l0aHViLCBGYUxpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IElvU3VubnlPdXRsaW5lLCBJb01vb25TaGFycCB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJ2xpYi9jb25maWcnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG4vLyBUT0RPOiBtZXJnZSB0aGUgZGF0YSBhbmQgaWNvbnMgZnJvbSBQYWdlU29jaWFsIHdpdGggdGhlIHNvY2lhbCBsaW5rcyBpbiBGb290ZXJcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXI6IFJlYWN0LkZDPHtcclxuICBpc0RhcmtNb2RlOiBib29sZWFuXHJcbiAgdG9nZ2xlRGFya01vZGU6ICgpID0+IHZvaWRcclxufT4gPSAoeyBpc0RhcmtNb2RlLCB0b2dnbGVEYXJrTW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW2hhc01vdW50ZWQsIHNldEhhc01vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgdG9nZ2xlRGFya01vZGVDYiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHRvZ2dsZURhcmtNb2RlKClcclxuICAgIH0sXHJcbiAgICBbdG9nZ2xlRGFya01vZGVdXHJcbiAgKVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0SGFzTW91bnRlZCh0cnVlKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcHlyaWdodH0+Q29weXJpZ2h0IDIwMjEge2NvbmZpZy5hdXRob3J9PC9kaXY+XHJcblxyXG4gICAgICB7aGFzTW91bnRlZCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNldHRpbmdzfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZURhcmtNb2RlfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEYXJrTW9kZUNifVxyXG4gICAgICAgICAgICB0aXRsZT0nVG90dGxlIGRhcmsgbW9kZSdcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzRGFya01vZGUgPyA8SW9Nb29uU2hhcnAgLz4gOiA8SW9TdW5ueU91dGxpbmUgLz59XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWx9PlxyXG4gICAgICAgIHtjb25maWcudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50d2l0dGVyfVxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS8ke2NvbmZpZy50d2l0dGVyfWB9XHJcbiAgICAgICAgICAgIHRpdGxlPXtgVHdpdHRlciBAJHtjb25maWcudHdpdHRlcn1gfVxyXG4gICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmFUd2l0dGVyIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2NvbmZpZy5naXRodWIgJiYgKFxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ2l0aHVifVxyXG4gICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Y29uZmlnLmdpdGh1Yn1gfVxyXG4gICAgICAgICAgICB0aXRsZT17YEdpdEh1YiBAJHtjb25maWcuZ2l0aHVifWB9XHJcbiAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGYUdpdGh1YiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtjb25maWcubGlua2VkaW4gJiYgKFxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua2VkaW59XHJcbiAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vJHtjb25maWcubGlua2VkaW59YH1cclxuICAgICAgICAgICAgdGl0bGU9e2BMaW5rZWRJbiAke2NvbmZpZy5hdXRob3J9YH1cclxuICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgICAgIHJlbD0nbm9vcGVuZXIgbm9yZWZlcnJlcidcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZhTGlua2VkaW4gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTG9hZGluZ0ljb24gfSBmcm9tICcuL0xvYWRpbmdJY29uJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmc6IFJlYWN0LkZDID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgIDxMb2FkaW5nSWNvbiAvPlxyXG4gIDwvZGl2PlxyXG4pXHJcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgY3MgZnJvbSAnY2xhc3NuYW1lcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRpbmdJY29uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIC4uLnJlc3QgfSA9IHByb3BzXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgY2xhc3NOYW1lPXtjcyhzdHlsZXMubG9hZGluZ0ljb24sIGNsYXNzTmFtZSl9XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICB2aWV3Qm94PScwIDAgMjQgMjQnXHJcbiAgICA+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgeDE9JzI4LjE1NDI5NjklJ1xyXG4gICAgICAgICAgeTE9JzYzLjc0MDIzNDQlJ1xyXG4gICAgICAgICAgeDI9Jzc0LjYyODkwNjIlJ1xyXG4gICAgICAgICAgeTI9JzE3Ljc4MzIwMzElJ1xyXG4gICAgICAgICAgaWQ9J2xpbmVhckdyYWRpZW50LTEnXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPSdyZ2JhKDE2NCwgMTY0LCAxNjQsIDEpJyBvZmZzZXQ9JzAlJyAvPlxyXG4gICAgICAgICAgPHN0b3BcclxuICAgICAgICAgICAgc3RvcENvbG9yPSdyZ2JhKDE2NCwgMTY0LCAxNjQsIDApJ1xyXG4gICAgICAgICAgICBzdG9wT3BhY2l0eT0nMCdcclxuICAgICAgICAgICAgb2Zmc2V0PScxMDAlJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcblxyXG4gICAgICA8ZyBpZD0nUGFnZS0xJyBzdHJva2U9J25vbmUnIHN0cm9rZVdpZHRoPScxJyBmaWxsPSdub25lJz5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjM2LjAwMDAwMCwgLTI4Ni4wMDAwMDApJz5cclxuICAgICAgICAgIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDIzOC4wMDAwMDAsIDI4Ni4wMDAwMDApJz5cclxuICAgICAgICAgICAgPGNpcmNsZVxyXG4gICAgICAgICAgICAgIGlkPSdPdmFsLTInXHJcbiAgICAgICAgICAgICAgc3Ryb2tlPSd1cmwoI2xpbmVhckdyYWRpZW50LTEpJ1xyXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPSc0J1xyXG4gICAgICAgICAgICAgIGN4PScxMCdcclxuICAgICAgICAgICAgICBjeT0nMTInXHJcbiAgICAgICAgICAgICAgcj0nMTAnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD0nTTEwLDIgQzQuNDc3MTUyNSwyIDAsNi40NzcxNTI1IDAsMTInXHJcbiAgICAgICAgICAgICAgaWQ9J092YWwtMidcclxuICAgICAgICAgICAgICBzdHJva2U9J3JnYmEoMTY0LCAxNjQsIDE2NCwgMSknXHJcbiAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9JzQnXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxyZWN0XHJcbiAgICAgICAgICAgICAgaWQ9J1JlY3RhbmdsZS0xJ1xyXG4gICAgICAgICAgICAgIGZpbGw9J3JnYmEoMTY0LCAxNjQsIDE2NCwgMSknXHJcbiAgICAgICAgICAgICAgeD0nOCdcclxuICAgICAgICAgICAgICB5PScwJ1xyXG4gICAgICAgICAgICAgIHdpZHRoPSc0J1xyXG4gICAgICAgICAgICAgIGhlaWdodD0nNCdcclxuICAgICAgICAgICAgICByeD0nOCdcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYydcclxuaW1wb3J0IGNzIGZyb20gJ2NsYXNzbmFtZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbSB9IGZyb20gJ3JlYWN0LXVzZSdcclxuaW1wb3J0IEJvZHlDbGFzc05hbWUgZnJvbSAncmVhY3QtYm9keS1jbGFzc25hbWUnXHJcbmltcG9ydCB1c2VEYXJrTW9kZSBmcm9tICd1c2UtZGFyay1tb2RlJ1xyXG5pbXBvcnQgeyBQYWdlQmxvY2sgfSBmcm9tICdub3Rpb24tdHlwZXMnXHJcblxyXG5pbXBvcnQgeyBUd2VldCwgVHdpdHRlciB9IGZyb20gJ3JlYWN0LXN0YXRpYy10d2VldHMnXHJcblxyXG4vLyBjb3JlIG5vdGlvbiByZW5kZXJlclxyXG5pbXBvcnQgeyBOb3Rpb25SZW5kZXJlciwgQ29kZSwgQ29sbGVjdGlvbiwgQ29sbGVjdGlvblJvdyB9IGZyb20gJ3JlYWN0LW5vdGlvbi14J1xyXG5cclxuLy8gdXRpbHNcclxuaW1wb3J0IHsgZ2V0QmxvY2tUaXRsZSB9IGZyb20gJ25vdGlvbi11dGlscydcclxuaW1wb3J0IHsgbWFwUGFnZVVybCwgZ2V0Q2Fub25pY2FsUGFnZVVybCB9IGZyb20gJ2xpYi9tYXAtcGFnZS11cmwnXHJcbmltcG9ydCB7IG1hcE5vdGlvbkltYWdlVXJsIH0gZnJvbSAnbGliL21hcC1pbWFnZS11cmwnXHJcbmltcG9ydCB7IGdldFBhZ2VEZXNjcmlwdGlvbiB9IGZyb20gJ2xpYi9nZXQtcGFnZS1kZXNjcmlwdGlvbidcclxuaW1wb3J0IHsgZ2V0UGFnZVR3ZWV0IH0gZnJvbSAnbGliL2dldC1wYWdlLXR3ZWV0J1xyXG5pbXBvcnQgeyBzZWFyY2hOb3Rpb24gfSBmcm9tICdsaWIvc2VhcmNoLW5vdGlvbidcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnbGliL3R5cGVzJ1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnbGliL2NvbmZpZydcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgQ3VzdG9tRm9udCB9IGZyb20gJy4vQ3VzdG9tRm9udCdcclxuaW1wb3J0IHsgQ3VzdG9tSHRtbCB9IGZyb20gJy4vQ3VzdG9tSHRtbCdcclxuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gJy4vTG9hZGluZydcclxuaW1wb3J0IHsgUGFnZTQwNCB9IGZyb20gJy4vUGFnZTQwNCdcclxuaW1wb3J0IHsgUGFnZUhlYWQgfSBmcm9tICcuL1BhZ2VIZWFkJ1xyXG5pbXBvcnQgeyBQYWdlQWN0aW9ucyB9IGZyb20gJy4vUGFnZUFjdGlvbnMnXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJ1xyXG5pbXBvcnQgeyBQYWdlU29jaWFsIH0gZnJvbSAnLi9QYWdlU29jaWFsJ1xyXG5pbXBvcnQgeyBHaXRIdWJTaGFyZUJ1dHRvbiB9IGZyb20gJy4vR2l0SHViU2hhcmVCdXR0b24nXHJcbmltcG9ydCB7IFJlYWN0VXR0ZXJhbmNlcyB9IGZyb20gJy4vUmVhY3RVdHRlcmFuY2VzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gY29uc3QgQ29kZSA9IGR5bmFtaWMoKCkgPT5cclxuLy8gICBpbXBvcnQoJ3JlYWN0LW5vdGlvbi14JykudGhlbigobm90aW9uKSA9PiBub3Rpb24uQ29kZSlcclxuLy8gKVxyXG4vL1xyXG4vLyBjb25zdCBDb2xsZWN0aW9uID0gZHluYW1pYygoKSA9PlxyXG4vLyAgIGltcG9ydCgncmVhY3Qtbm90aW9uLXgnKS50aGVuKChub3Rpb24pID0+IG5vdGlvbi5Db2xsZWN0aW9uKVxyXG4vLyApXHJcbi8vXHJcbi8vIGNvbnN0IENvbGxlY3Rpb25Sb3cgPSBkeW5hbWljKFxyXG4vLyAgICgpID0+IGltcG9ydCgncmVhY3Qtbm90aW9uLXgnKS50aGVuKChub3Rpb24pID0+IG5vdGlvbi5Db2xsZWN0aW9uUm93KSxcclxuLy8gICB7XHJcbi8vICAgICBzc3I6IGZhbHNlXHJcbi8vICAgfVxyXG4vLyApXHJcblxyXG5jb25zdCBQZGYgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3Qtbm90aW9uLXgnKS50aGVuKChub3Rpb24pID0+IG5vdGlvbi5QZGYpKVxyXG5cclxuY29uc3QgRXF1YXRpb24gPSBkeW5hbWljKCgpID0+XHJcbiAgaW1wb3J0KCdyZWFjdC1ub3Rpb24teCcpLnRoZW4oKG5vdGlvbikgPT4gbm90aW9uLkVxdWF0aW9uKVxyXG4pXHJcblxyXG4vLyB3ZSdyZSBub3cgdXNpbmcgYSBtdWNoIGxpZ2h0ZXItd2VpZ2h0IHR3ZWV0IHJlbmRlcmVyIHJlYWN0LXN0YXRpYy10d2VldHNcclxuLy8gaW5zdGVhZCBvZiB0aGUgb2ZmaWNpYWwgaWZyYW1lLWJhc2VkIGVtYmVkIHdpZGdldCBmcm9tIHR3aXR0ZXJcclxuLy8gY29uc3QgVHdlZXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtdHdlZXQtZW1iZWQnKSlcclxuXHJcbmNvbnN0IE1vZGFsID0gZHluYW1pYyhcclxuICAoKSA9PiBpbXBvcnQoJ3JlYWN0LW5vdGlvbi14JykudGhlbigobm90aW9uKSA9PiBub3Rpb24uTW9kYWwpLFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBOb3Rpb25QYWdlOiBSZWFjdC5GQzx0eXBlcy5QYWdlUHJvcHM+ID0gKHtcclxuICBzaXRlLFxyXG4gIHJlY29yZE1hcCxcclxuICBlcnJvcixcclxuICBwYWdlSWRcclxufSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgbGl0ZSA9IHVzZVNlYXJjaFBhcmFtKCdsaXRlJylcclxuXHJcbiAgY29uc3QgcGFyYW1zOiBhbnkgPSB7fVxyXG4gIGlmIChsaXRlKSBwYXJhbXMubGl0ZSA9IGxpdGVcclxuXHJcbiAgLy8gbGl0ZSBtb2RlIGlzIGZvciBvZW1iZWRcclxuICBjb25zdCBpc0xpdGVNb2RlID0gbGl0ZSA9PT0gJ3RydWUnXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhwYXJhbXMpXHJcblxyXG4gIGNvbnN0IGRhcmtNb2RlID0gdXNlRGFya01vZGUoZmFsc2UsIHsgY2xhc3NOYW1lRGFyazogJ2RhcmstbW9kZScgfSlcclxuXHJcbiAgaWYgKHJvdXRlci5pc0ZhbGxiYWNrKSB7XHJcbiAgICByZXR1cm4gPExvYWRpbmcgLz5cclxuICB9XHJcblxyXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZWNvcmRNYXA/LmJsb2NrIHx8IHt9KVxyXG4gIGNvbnN0IGJsb2NrID0gcmVjb3JkTWFwPy5ibG9jaz8uW2tleXNbMF1dPy52YWx1ZVxyXG5cclxuICBpZiAoZXJyb3IgfHwgIXNpdGUgfHwgIWtleXMubGVuZ3RoIHx8ICFibG9jaykge1xyXG4gICAgcmV0dXJuIDxQYWdlNDA0IHNpdGU9e3NpdGV9IHBhZ2VJZD17cGFnZUlkfSBlcnJvcj17ZXJyb3J9IC8+XHJcbiAgfVxyXG5cclxuICBjb25zdCB0aXRsZSA9IGdldEJsb2NrVGl0bGUoYmxvY2ssIHJlY29yZE1hcCkgfHwgc2l0ZS5uYW1lXHJcblxyXG4gIGNvbnNvbGUubG9nKCdub3Rpb24gcGFnZScsIHtcclxuICAgIGlzRGV2OiBjb25maWcuaXNEZXYsXHJcbiAgICB0aXRsZSxcclxuICAgIHBhZ2VJZCxcclxuICAgIHJvb3ROb3Rpb25QYWdlSWQ6IHNpdGUucm9vdE5vdGlvblBhZ2VJZCxcclxuICAgIHJlY29yZE1hcFxyXG4gIH0pXHJcblxyXG4gIGlmICghY29uZmlnLmlzU2VydmVyKSB7XHJcbiAgICAvLyBhZGQgaW1wb3J0YW50IG9iamVjdHMgdG8gdGhlIHdpbmRvdyBnbG9iYWwgZm9yIGVhc3kgZGVidWdnaW5nXHJcbiAgICBjb25zdCBnID0gd2luZG93IGFzIGFueVxyXG4gICAgZy5wYWdlSWQgPSBwYWdlSWRcclxuICAgIGcucmVjb3JkTWFwID0gcmVjb3JkTWFwXHJcbiAgICBnLmJsb2NrID0gYmxvY2tcclxuICB9XHJcblxyXG4gIGNvbnN0IHNpdGVNYXBQYWdlVXJsID0gbWFwUGFnZVVybChzaXRlLCByZWNvcmRNYXAsIHNlYXJjaFBhcmFtcylcclxuXHJcbiAgY29uc3QgY2Fub25pY2FsUGFnZVVybCA9XHJcbiAgICAhY29uZmlnLmlzRGV2ICYmIGdldENhbm9uaWNhbFBhZ2VVcmwoc2l0ZSwgcmVjb3JkTWFwKShwYWdlSWQpXHJcblxyXG4gIC8vIGNvbnN0IGlzUm9vdFBhZ2UgPVxyXG4gIC8vICAgcGFyc2VQYWdlSWQoYmxvY2suaWQpID09PSBwYXJzZVBhZ2VJZChzaXRlLnJvb3ROb3Rpb25QYWdlSWQpXHJcbiAgY29uc3QgaXNCbG9nUG9zdCA9XHJcbiAgICBibG9jay50eXBlID09PSAncGFnZScgJiYgYmxvY2sucGFyZW50X3RhYmxlID09PSAnY29sbGVjdGlvbidcclxuICBjb25zdCBzaG93VGFibGVPZkNvbnRlbnRzID0gISFpc0Jsb2dQb3N0XHJcbiAgY29uc3QgbWluVGFibGVPZkNvbnRlbnRzSXRlbXMgPSAzXHJcblxyXG4gIGNvbnN0IHNvY2lhbEltYWdlID1cclxuICAgIG1hcE5vdGlvbkltYWdlVXJsKFxyXG4gICAgICAoYmxvY2sgYXMgUGFnZUJsb2NrKS5mb3JtYXQ/LnBhZ2VfY292ZXIgfHwgY29uZmlnLmRlZmF1bHRQYWdlQ292ZXIsXHJcbiAgICAgIGJsb2NrXHJcbiAgICApIHx8IGNvbmZpZy5hcGkucmVuZGVyU29jaWFsSW1hZ2UocGFnZUlkKVxyXG5cclxuICBjb25zdCBzb2NpYWxEZXNjcmlwdGlvbiA9XHJcbiAgICBnZXRQYWdlRGVzY3JpcHRpb24oYmxvY2ssIHJlY29yZE1hcCkgPz8gY29uZmlnLmRlc2NyaXB0aW9uXHJcblxyXG4gIGxldCBjb21tZW50czogUmVhY3QuUmVhY3ROb2RlID0gbnVsbFxyXG4gIGxldCBwYWdlQXNpZGU6IFJlYWN0LlJlYWN0Q2hpbGQgPSBudWxsXHJcblxyXG4gIC8vIG9ubHkgZGlzcGxheSBjb21tZW50cyBhbmQgcGFnZSBhY3Rpb25zIG9uIGJsb2cgcG9zdCBwYWdlc1xyXG4gIGlmIChpc0Jsb2dQb3N0KSB7XHJcbiAgICBpZiAoY29uZmlnLnV0dGVyYW5jZXNHaXRIdWJSZXBvKSB7XHJcbiAgICAgIGNvbW1lbnRzID0gKFxyXG4gICAgICAgIDxSZWFjdFV0dGVyYW5jZXNcclxuICAgICAgICAgIHJlcG89e2NvbmZpZy51dHRlcmFuY2VzR2l0SHViUmVwb31cclxuICAgICAgICAgIGlzc3VlTWFwPSdpc3N1ZS10ZXJtJ1xyXG4gICAgICAgICAgaXNzdWVUZXJtPSd0aXRsZSdcclxuICAgICAgICAgIHRoZW1lPXtkYXJrTW9kZS52YWx1ZSA/ICdwaG90b24tZGFyaycgOiAnZ2l0aHViLWxpZ2h0J31cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHdlZXQgPSBnZXRQYWdlVHdlZXQoYmxvY2ssIHJlY29yZE1hcClcclxuICAgIGlmICh0d2VldCkge1xyXG4gICAgICBwYWdlQXNpZGUgPSA8UGFnZUFjdGlvbnMgdHdlZXQ9e3R3ZWV0fSAvPlxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBwYWdlQXNpZGUgPSA8UGFnZVNvY2lhbCAvPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUd2l0dGVyLlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgdHdlZXRBc3RNYXA6IChyZWNvcmRNYXAgYXMgYW55KS50d2VldEFzdE1hcCB8fCB7fSxcclxuICAgICAgICBzd3JPcHRpb25zOiB7XHJcbiAgICAgICAgICBmZXRjaGVyOiAoaWQpID0+XHJcbiAgICAgICAgICAgIGZldGNoKGAvYXBpL2dldC10d2VldC1hc3QvJHtpZH1gKS50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxQYWdlSGVhZCBzaXRlPXtzaXRlfSAvPlxyXG5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOnRpdGxlJyBjb250ZW50PXt0aXRsZX0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6c2l0ZV9uYW1lJyBjb250ZW50PXtzaXRlLm5hbWV9IC8+XHJcblxyXG4gICAgICAgIDxtZXRhIG5hbWU9J3R3aXR0ZXI6dGl0bGUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSd0d2l0dGVyOmRvbWFpbicgY29udGVudD17c2l0ZS5kb21haW59IC8+XHJcblxyXG4gICAgICAgIHtjb25maWcudHdpdHRlciAmJiAoXHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmNyZWF0b3InIGNvbnRlbnQ9e2BAJHtjb25maWcudHdpdHRlcn1gfSAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzb2NpYWxEZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17c29jaWFsRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17c29jaWFsRGVzY3JpcHRpb259IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3R3aXR0ZXI6ZGVzY3JpcHRpb24nIGNvbnRlbnQ9e3NvY2lhbERlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3NvY2lhbEltYWdlID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0ndHdpdHRlcjpjYXJkJyBjb250ZW50PSdzdW1tYXJ5X2xhcmdlX2ltYWdlJyAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmltYWdlJyBjb250ZW50PXtzb2NpYWxJbWFnZX0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9J29nOmltYWdlJyBjb250ZW50PXtzb2NpYWxJbWFnZX0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSd0d2l0dGVyOmNhcmQnIGNvbnRlbnQ9J3N1bW1hcnknIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge2Nhbm9uaWNhbFBhZ2VVcmwgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPSdjYW5vbmljYWwnIGhyZWY9e2Nhbm9uaWNhbFBhZ2VVcmx9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp1cmwnIGNvbnRlbnQ9e2Nhbm9uaWNhbFBhZ2VVcmx9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSd0d2l0dGVyOnVybCcgY29udGVudD17Y2Fub25pY2FsUGFnZVVybH0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPEN1c3RvbUZvbnQgc2l0ZT17c2l0ZX0gLz5cclxuXHJcbiAgICAgIHtpc0xpdGVNb2RlICYmIDxCb2R5Q2xhc3NOYW1lIGNsYXNzTmFtZT0nbm90aW9uLWxpdGUnIC8+fVxyXG5cclxuICAgICAgPE5vdGlvblJlbmRlcmVyXHJcbiAgICAgICAgYm9keUNsYXNzTmFtZT17Y3MoXHJcbiAgICAgICAgICBzdHlsZXMubm90aW9uLFxyXG4gICAgICAgICAgcGFnZUlkID09PSBzaXRlLnJvb3ROb3Rpb25QYWdlSWQgJiYgJ2luZGV4LXBhZ2UnXHJcbiAgICAgICAgKX1cclxuICAgICAgICBjb21wb25lbnRzPXt7XHJcbiAgICAgICAgICBwYWdlTGluazogKHtcclxuICAgICAgICAgICAgaHJlZixcclxuICAgICAgICAgICAgYXMsXHJcbiAgICAgICAgICAgIHBhc3NIcmVmLFxyXG4gICAgICAgICAgICBwcmVmZXRjaCxcclxuICAgICAgICAgICAgcmVwbGFjZSxcclxuICAgICAgICAgICAgc2Nyb2xsLFxyXG4gICAgICAgICAgICBzaGFsbG93LFxyXG4gICAgICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgICAgIC4uLnByb3BzXHJcbiAgICAgICAgICB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj17aHJlZn1cclxuICAgICAgICAgICAgICBhcz17YXN9XHJcbiAgICAgICAgICAgICAgcGFzc0hyZWY9e3Bhc3NIcmVmfVxyXG4gICAgICAgICAgICAgIHByZWZldGNoPXtwcmVmZXRjaH1cclxuICAgICAgICAgICAgICByZXBsYWNlPXtyZXBsYWNlfVxyXG4gICAgICAgICAgICAgIHNjcm9sbD17c2Nyb2xsfVxyXG4gICAgICAgICAgICAgIHNoYWxsb3c9e3NoYWxsb3d9XHJcbiAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8YSB7Li4ucHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICksXHJcbiAgICAgICAgICBjb2RlOiBDb2RlLFxyXG4gICAgICAgICAgY29sbGVjdGlvbjogQ29sbGVjdGlvbixcclxuICAgICAgICAgIGNvbGxlY3Rpb25Sb3c6IENvbGxlY3Rpb25Sb3csXHJcbiAgICAgICAgICB0d2VldDogVHdlZXQsXHJcbiAgICAgICAgICBtb2RhbDogTW9kYWwsXHJcbiAgICAgICAgICBwZGY6IFBkZixcclxuICAgICAgICAgIGVxdWF0aW9uOiBFcXVhdGlvblxyXG4gICAgICAgIH19XHJcbiAgICAgICAgcmVjb3JkTWFwPXtyZWNvcmRNYXB9XHJcbiAgICAgICAgcm9vdFBhZ2VJZD17c2l0ZS5yb290Tm90aW9uUGFnZUlkfVxyXG4gICAgICAgIGZ1bGxQYWdlPXshaXNMaXRlTW9kZX1cclxuICAgICAgICBkYXJrTW9kZT17ZGFya01vZGUudmFsdWV9XHJcbiAgICAgICAgcHJldmlld0ltYWdlcz17c2l0ZS5wcmV2aWV3SW1hZ2VzICE9PSBmYWxzZX1cclxuICAgICAgICBzaG93Q29sbGVjdGlvblZpZXdEcm9wZG93bj17ZmFsc2V9XHJcbiAgICAgICAgc2hvd1RhYmxlT2ZDb250ZW50cz17c2hvd1RhYmxlT2ZDb250ZW50c31cclxuICAgICAgICBtaW5UYWJsZU9mQ29udGVudHNJdGVtcz17bWluVGFibGVPZkNvbnRlbnRzSXRlbXN9XHJcbiAgICAgICAgZGVmYXVsdFBhZ2VJY29uPXtjb25maWcuZGVmYXVsdFBhZ2VJY29ufVxyXG4gICAgICAgIGRlZmF1bHRQYWdlQ292ZXI9e2NvbmZpZy5kZWZhdWx0UGFnZUNvdmVyfVxyXG4gICAgICAgIGRlZmF1bHRQYWdlQ292ZXJQb3NpdGlvbj17Y29uZmlnLmRlZmF1bHRQYWdlQ292ZXJQb3NpdGlvbn1cclxuICAgICAgICBtYXBQYWdlVXJsPXtzaXRlTWFwUGFnZVVybH1cclxuICAgICAgICBtYXBJbWFnZVVybD17bWFwTm90aW9uSW1hZ2VVcmx9XHJcbiAgICAgICAgc2VhcmNoTm90aW9uPXtzZWFyY2hOb3Rpb259XHJcbiAgICAgICAgcGFnZUZvb3Rlcj17Y29tbWVudHN9XHJcbiAgICAgICAgcGFnZUFzaWRlPXtwYWdlQXNpZGV9XHJcbiAgICAgICAgZm9vdGVyPXtcclxuICAgICAgICAgIDxGb290ZXJcclxuICAgICAgICAgICAgaXNEYXJrTW9kZT17ZGFya01vZGUudmFsdWV9XHJcbiAgICAgICAgICAgIHRvZ2dsZURhcmtNb2RlPXtkYXJrTW9kZS50b2dnbGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgPEN1c3RvbUh0bWwgc2l0ZT17c2l0ZX0gLz5cclxuICAgIDwvVHdpdHRlci5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnbGliL3R5cGVzJ1xyXG5pbXBvcnQgeyBQYWdlSGVhZCB9IGZyb20gJy4vUGFnZUhlYWQnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnXHJcblxyXG5leHBvcnQgY29uc3QgUGFnZTQwNDogUmVhY3QuRkM8dHlwZXMuUGFnZVByb3BzPiA9ICh7IHNpdGUsIHBhZ2VJZCwgZXJyb3IgfSkgPT4ge1xyXG4gIGNvbnN0IHRpdGxlID0gc2l0ZT8ubmFtZSB8fCAnUGFnZSBOb3QgRm91bmQnXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGFnZUhlYWQgc2l0ZT17c2l0ZX0gLz5cclxuXHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpzaXRlX25hbWUnIGNvbnRlbnQ9e3RpdGxlfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzp0aXRsZScgY29udGVudD17dGl0bGV9IC8+XHJcblxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgICAgPGgxPlBhZ2UgTm90IEZvdW5kPC9oMT5cclxuXHJcbiAgICAgICAgICB7ZXJyb3IgPyAoXHJcbiAgICAgICAgICAgIDxwPntlcnJvci5tZXNzYWdlfTwvcD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIHBhZ2VJZCAmJiAoXHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBNYWtlIHN1cmUgdGhhdCBOb3Rpb24gcGFnZSBcIntwYWdlSWR9XCIgaXMgcHVibGljbHkgYWNjZXNzaWJsZS5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBzcmM9Jy80MDQucG5nJ1xyXG4gICAgICAgICAgICBhbHQ9JzQwNCBOb3QgRm91bmQnXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVycm9ySW1hZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBJb0hlYXJ0T3V0bGluZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSdcclxuaW1wb3J0IHsgQWlPdXRsaW5lUmV0d2VldCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJ1xyXG5cclxuLyoqXHJcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIudHdpdHRlci5jb20vZW4vZG9jcy90d2l0dGVyLWZvci13ZWJzaXRlcy93ZWItaW50ZW50cy9vdmVydmlld1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBhZ2VBY3Rpb25zOiBSZWFjdC5GQzx7IHR3ZWV0OiBzdHJpbmcgfT4gPSAoeyB0d2VldCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUFjdGlvbnN9PlxyXG4gICAgICA8YVxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpa2VUd2VldH1cclxuICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvbGlrZT90d2VldF9pZD0ke3R3ZWV0fWB9XHJcbiAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgIHRpdGxlPSdMaWtlIHRoaXMgcG9zdCBvbiBUd2l0dGVyJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPElvSGVhcnRPdXRsaW5lIC8+XHJcbiAgICAgIDwvYT5cclxuXHJcbiAgICAgIDxhXHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucmV0d2VldH1cclxuICAgICAgICBocmVmPXtgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvcmV0d2VldD90d2VldF9pZD0ke3R3ZWV0fWB9XHJcbiAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXHJcbiAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgIHRpdGxlPSdSZXR3ZWV0IHRoaXMgcG9zdCBvbiBUd2l0dGVyJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPEFpT3V0bGluZVJldHdlZXQgLz5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJ2xpYi90eXBlcydcclxuXHJcbi8vIFRPRE86IHJlbW92ZSBkdXBsaWNhdGlvbiBiZXR3ZWVuIFBhZ2VIZWFkIGFuZCBOb3Rpb25QYWdlIEhlYWRcclxuXHJcbmV4cG9ydCBjb25zdCBQYWdlSGVhZDogUmVhY3QuRkM8dHlwZXMuUGFnZVByb3BzPiA9ICh7IHNpdGUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XHJcbiAgICAgIDxtZXRhIGh0dHBFcXVpdj0nQ29udGVudC1UeXBlJyBjb250ZW50PSd0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLTgnIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT0ndmlld3BvcnQnXHJcbiAgICAgICAgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm8nXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7c2l0ZT8uZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17c2l0ZS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PSdvZzpkZXNjcmlwdGlvbicgY29udGVudD17c2l0ZS5kZXNjcmlwdGlvbn0gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxtZXRhIG5hbWU9J3RoZW1lLWNvbG9yJyBjb250ZW50PScjRUI2MjVBJyAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT0nb2c6dHlwZScgY29udGVudD0nd2Vic2l0ZScgLz5cclxuICAgIDwvSGVhZD5cclxuICApXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFnZVNvY2lhbFwiOiBcIlBhZ2VTb2NpYWxfcGFnZVNvY2lhbF9fMldxSGxcIixcblx0XCJhY3Rpb25cIjogXCJQYWdlU29jaWFsX2FjdGlvbl9fMnpnVnRcIixcblx0XCJhY3Rpb25CZ1wiOiBcIlBhZ2VTb2NpYWxfYWN0aW9uQmdfXzNDaWdPXCIsXG5cdFwiYWN0aW9uQmdQYW5lXCI6IFwiUGFnZVNvY2lhbF9hY3Rpb25CZ1BhbmVfX2diQmtMXCIsXG5cdFwiZmFjZWJvb2tcIjogXCJQYWdlU29jaWFsX2ZhY2Vib29rX18zbzRzZlwiLFxuXHRcInR3aXR0ZXJcIjogXCJQYWdlU29jaWFsX3R3aXR0ZXJfXy1CZ0Z0XCIsXG5cdFwibGlua2VkaW5cIjogXCJQYWdlU29jaWFsX2xpbmtlZGluX19uRWxIVFwiLFxuXHRcImdpdGh1YlwiOiBcIlBhZ2VTb2NpYWxfZ2l0aHViX19zbFEwelwiLFxuXHRcIm1lZGl1bVwiOiBcIlBhZ2VTb2NpYWxfbWVkaXVtX194cXZOSlwiLFxuXHRcImVtYWlsXCI6IFwiUGFnZVNvY2lhbF9lbWFpbF9fMjJOUDVcIixcblx0XCJsaW5rc1wiOiBcIlBhZ2VTb2NpYWxfbGlua3NfXzNwQ2c2XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjcyBmcm9tICdjbGFzc25hbWVzJ1xyXG5cclxuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJ2xpYi9jb25maWcnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUGFnZVNvY2lhbC5tb2R1bGUuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFNvY2lhbExpbmsge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIHRpdGxlOiBzdHJpbmdcclxuICBpY29uOiBSZWFjdC5SZWFjdE5vZGVcclxuICBocmVmPzogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IHNvY2lhbExpbmtzOiBTb2NpYWxMaW5rW10gPSBbXHJcbiAgY29uZmlnLnR3aXR0ZXIgJiYge1xyXG4gICAgbmFtZTogJ3R3aXR0ZXInLFxyXG4gICAgaHJlZjogYGh0dHBzOi8vdHdpdHRlci5jb20vJHtjb25maWcudHdpdHRlcn1gLFxyXG4gICAgdGl0bGU6IGBUd2l0dGVyIEAke2NvbmZpZy50d2l0dGVyfWAsXHJcbiAgICBpY29uOiAoXHJcbiAgICAgIDxzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgMjQgMjQnPlxyXG4gICAgICAgIDxwYXRoIGQ9J00yMy40NCA0LjgzYy0uOC4zNy0xLjUuMzgtMi4yMi4wMi45My0uNTYuOTgtLjk2IDEuMzItMi4wMi0uODguNTItMS44Ni45LTIuOSAxLjEtLjgyLS44OC0yLTEuNDMtMy4zLTEuNDMtMi41IDAtNC41NSAyLjA0LTQuNTUgNC41NCAwIC4zNi4wMy43LjEgMS4wNC0zLjc3LS4yLTcuMTItMi05LjM2LTQuNzUtLjQuNjctLjYgMS40NS0uNiAyLjMgMCAxLjU2LjggMi45NSAyIDMuNzctLjc0LS4wMy0xLjQ0LS4yMy0yLjA1LS41N3YuMDZjMCAyLjIgMS41NiA0LjAzIDMuNjQgNC40NC0uNjcuMi0xLjM3LjItMi4wNi4wOC41OCAxLjggMi4yNiAzLjEyIDQuMjUgMy4xNkM1Ljc4IDE4LjEgMy4zNyAxOC43NCAxIDE4LjQ2YzIgMS4zIDQuNCAyLjA0IDYuOTcgMi4wNCA4LjM1IDAgMTIuOTItNi45MiAxMi45Mi0xMi45MyAwLS4yIDAtLjQtLjAyLS42LjktLjYzIDEuOTYtMS4yMiAyLjU2LTIuMTR6JyAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxuICB9LFxyXG5cclxuICBjb25maWcuZ2l0aHViICYmIHtcclxuICAgIG5hbWU6ICdnaXRodWInLFxyXG4gICAgaHJlZjogYGh0dHBzOi8vZ2l0aHViLmNvbS8ke2NvbmZpZy5naXRodWJ9YCxcclxuICAgIHRpdGxlOiBgR2l0SHViIEAke2NvbmZpZy5naXRodWJ9YCxcclxuICAgIGljb246IChcclxuICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+XHJcbiAgICAgICAgPHBhdGggZD0nTTkgMTljLTUgMS41LTUtMi41LTctM20xNCA2di0zLjg3YTMuMzcgMy4zNyAwIDAgMC0uOTQtMi42MWMzLjE0LS4zNSA2LjQ0LTEuNTQgNi40NC03QTUuNDQgNS40NCAwIDAgMCAyMCA0Ljc3IDUuMDcgNS4wNyAwIDAgMCAxOS45MSAxUzE4LjczLjY1IDE2IDIuNDhhMTMuMzggMTMuMzggMCAwIDAtNyAwQzYuMjcuNjUgNS4wOSAxIDUuMDkgMUE1LjA3IDUuMDcgMCAwIDAgNSA0Ljc3YTUuNDQgNS40NCAwIDAgMC0xLjUgMy43OGMwIDUuNDIgMy4zIDYuNjEgNi40NCA3QTMuMzcgMy4zNyAwIDAgMCA5IDE4LjEzVjIyJz48L3BhdGg+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKVxyXG4gIH0sXHJcblxyXG4gIGNvbmZpZy5saW5rZWRpbiAmJiB7XHJcbiAgICBuYW1lOiAnbGlua2VkaW4nLFxyXG4gICAgaHJlZjogYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi8ke2NvbmZpZy5saW5rZWRpbn1gLFxyXG4gICAgdGl0bGU6IGBMaW5rZWRJbiAke2NvbmZpZy5hdXRob3J9YCxcclxuICAgIGljb246IChcclxuICAgICAgPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCc+XHJcbiAgICAgICAgPHBhdGggZD0nTTYuNSAyMS41aC01di0xM2g1djEzek00IDYuNUMyLjUgNi41IDEuNSA1LjMgMS41IDRzMS0yLjQgMi41LTIuNGMxLjYgMCAyLjUgMSAyLjYgMi41IDAgMS40LTEgMi41LTIuNiAyLjV6bTExLjUgNmMtMSAwLTIgMS0yIDJ2N2gtNXYtMTNoNVYxMHMxLjYtMS41IDQtMS41YzMgMCA1IDIuMiA1IDYuM3Y2LjdoLTV2LTdjMC0xLTEtMi0yLTJ6JyAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgIClcclxuICB9XHJcbl0uZmlsdGVyKEJvb2xlYW4pXHJcblxyXG5leHBvcnQgY29uc3QgUGFnZVNvY2lhbDogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZVNvY2lhbH0+XHJcbiAgICAgIHtzb2NpYWxMaW5rcy5tYXAoKGFjdGlvbikgPT4gKFxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NzKHN0eWxlcy5hY3Rpb24sIHN0eWxlc1thY3Rpb24ubmFtZV0pfVxyXG4gICAgICAgICAgaHJlZj17YWN0aW9uLmhyZWZ9XHJcbiAgICAgICAgICBrZXk9e2FjdGlvbi5uYW1lfVxyXG4gICAgICAgICAgdGl0bGU9e2FjdGlvbi50aXRsZX1cclxuICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xyXG4gICAgICAgICAgcmVsPSdub29wZW5lciBub3JlZmVycmVyJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQmd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbkJnUGFuZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uQmd9PnthY3Rpb24uaWNvbn08L2Rpdj5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCB0eXBlIE1hcHBpbmdUeXBlID1cclxuICB8ICdwYXRobmFtZSdcclxuICB8ICd1cmwnXHJcbiAgfCAndGl0bGUnXHJcbiAgfCAnb2c6dGl0bGUnXHJcbiAgfCAnaXNzdWUtbnVtYmVyJ1xyXG4gIHwgJ2lzc3VlLXRlcm0nXHJcblxyXG5leHBvcnQgdHlwZSBUaGVtZSA9XHJcbiAgfCAnZ2l0aHViLWxpZ2h0J1xyXG4gIHwgJ2dpdGh1Yi1kYXJrJ1xyXG4gIHwgJ3ByZWZlcnJlZC1jb2xvci1zY2hlbWUnXHJcbiAgfCAnZ2l0aHViLWRhcmstb3JhbmdlJ1xyXG4gIHwgJ2ljeS1kYXJrJ1xyXG4gIHwgJ2RhcmstYmx1ZSdcclxuICB8ICdwaG90b24tZGFyaydcclxuXHJcbmludGVyZmFjZSBSZWFjdFV0dGVyYW5jZXNQcm9wcyB7XHJcbiAgcmVwbzogc3RyaW5nXHJcbiAgaXNzdWVNYXA6IE1hcHBpbmdUeXBlXHJcbiAgaXNzdWVUZXJtPzogc3RyaW5nXHJcbiAgaXNzdWVOdW1iZXI/OiBudW1iZXJcclxuICBsYWJlbD86IHN0cmluZ1xyXG4gIHRoZW1lOiBUaGVtZVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUmVhY3RVdHRlcmFuY2VzU3RhdGUge1xyXG4gIHBlbmRpbmc6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlYWN0VXR0ZXJhbmNlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcclxuICBSZWFjdFV0dGVyYW5jZXNQcm9wcyxcclxuICBSZWFjdFV0dGVyYW5jZXNTdGF0ZVxyXG4+IHtcclxuICByZWZlcmVuY2U6IFJlYWN0LlJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD5cclxuICBzY3JpcHRFbGVtZW50OiBhbnlcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFJlYWN0VXR0ZXJhbmNlc1Byb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICBpZiAocHJvcHMuaXNzdWVNYXAgPT09ICdpc3N1ZS10ZXJtJyAmJiBwcm9wcy5pc3N1ZVRlcm0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aHJvdyBFcnJvcihcclxuICAgICAgICBcIlByb3BlcnR5ICdpc3N1ZVRlcm0nIG11c3QgYmUgcHJvdmlkZWQgd2l0aCBpc3N1ZU1hcCAnaXNzdWUtdGVybSdcIlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHByb3BzLmlzc3VlTWFwID09PSAnaXNzdWUtbnVtYmVyJyAmJiBwcm9wcy5pc3N1ZU51bWJlciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRocm93IEVycm9yKFxyXG4gICAgICAgIFwiUHJvcGVydHkgJ2lzc3VlTnVtYmVyJyBtdXN0IGJlIHByb3ZpZGVkIHdpdGggaXNzdWVNYXAgJ2lzc3VlLW51bWJlcidcIlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZWZlcmVuY2UgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTERpdkVsZW1lbnQ+KClcclxuICAgIHRoaXMuc3RhdGUgPSB7IHBlbmRpbmc6IHRydWUgfVxyXG4gIH1cclxuXHJcbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMocHJvcHMpIHtcclxuICAgIC8vIHRoaXMuc2NyaXB0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgcHJvcHMudGhlbWUpXHJcbiAgICBjb25zdCBpZnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpZnJhbWUudXR0ZXJhbmNlcy1mcmFtZScpIGFzIGFueVxyXG5cclxuICAgIGlmIChpZnJhbWUpIHtcclxuICAgICAgaWZyYW1lLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoXHJcbiAgICAgICAgeyB0eXBlOiAnc2V0LXRoZW1lJywgdGhlbWU6IHByb3BzLnRoZW1lIH0sXHJcbiAgICAgICAgJ2h0dHBzOi8vdXR0ZXJhbmMuZXMvJ1xyXG4gICAgICApXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgcmVwbywgaXNzdWVNYXAsIGlzc3VlVGVybSwgaXNzdWVOdW1iZXIsIGxhYmVsLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3Qgc2NyaXB0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXHJcbiAgICBzY3JpcHRFbGVtZW50LnNyYyA9ICdodHRwczovL3V0dGVyYW5jLmVzL2NsaWVudC5qcydcclxuICAgIHNjcmlwdEVsZW1lbnQuYXN5bmMgPSB0cnVlXHJcbiAgICBzY3JpcHRFbGVtZW50LmRlZmVyID0gdHJ1ZVxyXG4gICAgc2NyaXB0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JlcG8nLCByZXBvKVxyXG4gICAgc2NyaXB0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2Nyb3Nzb3JpZ2luJywgJ2Fubm9ueW1vdXMnKVxyXG4gICAgc2NyaXB0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RoZW1lJywgdGhlbWUpXHJcbiAgICBzY3JpcHRFbGVtZW50Lm9ubG9hZCA9ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBwZW5kaW5nOiBmYWxzZSB9KVxyXG5cclxuICAgIGlmIChsYWJlbCkge1xyXG4gICAgICBzY3JpcHRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGFiZWwnLCBsYWJlbClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNzdWVNYXAgPT09ICdpc3N1ZS1udW1iZXInKSB7XHJcbiAgICAgIHNjcmlwdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpc3N1ZS1udW1iZXInLCBpc3N1ZU51bWJlci50b1N0cmluZygpKVxyXG4gICAgfSBlbHNlIGlmIChpc3N1ZU1hcCA9PT0gJ2lzc3VlLXRlcm0nKSB7XHJcbiAgICAgIHNjcmlwdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpc3N1ZS10ZXJtJywgaXNzdWVUZXJtKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2NyaXB0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lzc3VlLXRlcm0nLCBpc3N1ZU1hcClcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBDaGVjayBjdXJyZW50IGF2YWlsYWJpbGl0eVxyXG4gICAgdGhpcy5zY3JpcHRFbGVtZW50ID0gc2NyaXB0RWxlbWVudFxyXG4gICAgdGhpcy5yZWZlcmVuY2UuY3VycmVudC5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnV0dGVyYW5jZXN9IHJlZj17dGhpcy5yZWZlcmVuY2V9PlxyXG4gICAgICAgICAge3RoaXMuc3RhdGUucGVuZGluZyAmJiA8cD5Mb2FkaW5nIENvbW1lbnRzLi4uPC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vTm90aW9uUGFnZSdcclxuZXhwb3J0ICogZnJvbSAnLi9QYWdlNDA0J1xyXG5leHBvcnQgKiBmcm9tICcuL0Vycm9yUGFnZSdcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3R5bGVzX2NvbnRhaW5lcl9fMzRwck1cIixcblx0XCJsb2FkaW5nSWNvblwiOiBcInN0eWxlc19sb2FkaW5nSWNvbl9fM0tlMmJcIixcblx0XCJzcGlubmVyXCI6IFwic3R5bGVzX3NwaW5uZXJfXzMwN3hUXCIsXG5cdFwibWFpblwiOiBcInN0eWxlc19tYWluX18yaU5waVwiLFxuXHRcImVycm9ySW1hZ2VcIjogXCJzdHlsZXNfZXJyb3JJbWFnZV9fMXlPUEVcIixcblx0XCJmb290ZXJcIjogXCJzdHlsZXNfZm9vdGVyX18xcl9jNlwiLFxuXHRcImNvcHlyaWdodFwiOiBcInN0eWxlc19jb3B5cmlnaHRfXzNrV0hqXCIsXG5cdFwic2V0dGluZ3NcIjogXCJzdHlsZXNfc2V0dGluZ3NfXzFlZDhhXCIsXG5cdFwic29jaWFsXCI6IFwic3R5bGVzX3NvY2lhbF9fMjM1Z1lcIixcblx0XCJ0b2dnbGVEYXJrTW9kZVwiOiBcInN0eWxlc190b2dnbGVEYXJrTW9kZV9fMWljWGdcIixcblx0XCJ0d2l0dGVyXCI6IFwic3R5bGVzX3R3aXR0ZXJfX1d3ZmFBXCIsXG5cdFwiZ2l0aHViXCI6IFwic3R5bGVzX2dpdGh1Yl9fMzJ4SXJcIixcblx0XCJsaW5rZWRpblwiOiBcInN0eWxlc19saW5rZWRpbl9fMVhHdkJcIixcblx0XCJjb21tZW50c1wiOiBcInN0eWxlc19jb21tZW50c19fZVdTRkRcIixcblx0XCJ1dHRlcmFuY2VzXCI6IFwic3R5bGVzX3V0dGVyYW5jZXNfXzNBLTI0XCIsXG5cdFwicGFnZUFjdGlvbnNcIjogXCJzdHlsZXNfcGFnZUFjdGlvbnNfXzNBUzg5XCIsXG5cdFwibGlrZVR3ZWV0XCI6IFwic3R5bGVzX2xpa2VUd2VldF9fMU1LcnZcIixcblx0XCJyZXR3ZWV0XCI6IFwic3R5bGVzX3JldHdlZXRfXzNlbEk1XCIsXG5cdFwiZ2l0aHViQ29ybmVyXCI6IFwic3R5bGVzX2dpdGh1YkNvcm5lcl9fMVdZeU5cIixcblx0XCJvY3RvQXJtXCI6IFwic3R5bGVzX29jdG9Bcm1fX0xWY2hYXCIsXG5cdFwib2N0b2NhdC13YXZlXCI6IFwic3R5bGVzX29jdG9jYXQtd2F2ZV9fMTN6YnpcIlxufTtcbiIsImltcG9ydCB7IFBhZ2VQcm9wcyB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGFnZUFjbCh7XHJcbiAgc2l0ZSxcclxuICByZWNvcmRNYXAsXHJcbiAgcGFnZUlkXHJcbn06IFBhZ2VQcm9wcyk6IFByb21pc2U8UGFnZVByb3BzPiB7XHJcbiAgaWYgKCFzaXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcclxuICAgICAgICBtZXNzYWdlOiAnVW5hYmxlIHRvIHJlc29sdmUgbm90aW9uIHNpdGUnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICghcmVjb3JkTWFwKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjoge1xyXG4gICAgICAgIHN0YXR1c0NvZGU6IDQwNCxcclxuICAgICAgICBtZXNzYWdlOiBgVW5hYmxlIHRvIHJlc29sdmUgcGFnZSBmb3IgZG9tYWluIFwiJHtzaXRlLmRvbWFpbn1cIi4gTm90aW9uIHBhZ2UgXCIke3BhZ2VJZH1cIiBub3QgZm91bmQuYFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVjb3JkTWFwLmJsb2NrKVxyXG4gIGNvbnN0IHJvb3RLZXkgPSBrZXlzWzBdXHJcblxyXG4gIGlmICghcm9vdEtleSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IHtcclxuICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXHJcbiAgICAgICAgbWVzc2FnZTogYFVuYWJsZSB0byByZXNvbHZlIHBhZ2UgZm9yIGRvbWFpbiBcIiR7c2l0ZS5kb21haW59XCIuIE5vdGlvbiBwYWdlIFwiJHtwYWdlSWR9XCIgaW52YWxpZCBkYXRhLmBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgcm9vdFZhbHVlID0gcmVjb3JkTWFwLmJsb2NrW3Jvb3RLZXldPy52YWx1ZVxyXG4gIGNvbnN0IHJvb3RTcGFjZUlkID0gcm9vdFZhbHVlPy5zcGFjZV9pZFxyXG5cclxuICBpZiAoXHJcbiAgICByb290U3BhY2VJZCAmJlxyXG4gICAgc2l0ZS5yb290Tm90aW9uU3BhY2VJZCAmJlxyXG4gICAgcm9vdFNwYWNlSWQgIT09IHNpdGUucm9vdE5vdGlvblNwYWNlSWRcclxuICApIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOVikge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGVycm9yOiB7XHJcbiAgICAgICAgICBzdGF0dXNDb2RlOiA0MDQsXHJcbiAgICAgICAgICBtZXNzYWdlOiBgTm90aW9uIHBhZ2UgXCIke3BhZ2VJZH1cIiBkb2Vzbid0IGJlbG9uZyB0byB0aGUgTm90aW9uIHdvcmtzcGFjZSBvd25lZCBieSBcIiR7c2l0ZS5kb21haW59XCIuYFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogU2l0ZS13aWRlIGFwcCBjb25maWd1cmF0aW9uLlxyXG4gKlxyXG4gKiBUaGlzIGZpbGUgcHVsbHMgZnJvbSB0aGUgcm9vdCBcInNpdGUuY29uZmlnLmpzXCIgYXMgd2VsbCBhcyBlbnZpcm9ubWVudCB2YXJpYWJsZXNcclxuICogZm9yIG9wdGlvbmFsIGRlcGVuZW5jaWVzLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IHBhcnNlUGFnZUlkIH0gZnJvbSAnbm90aW9uLXV0aWxzJ1xyXG5pbXBvcnQgeyBnZXRTaXRlQ29uZmlnLCBnZXRFbnYgfSBmcm9tICcuL2dldC1jb25maWctdmFsdWUnXHJcbmltcG9ydCB7IFBhZ2VVcmxPdmVycmlkZXNNYXAsIFBhZ2VVcmxPdmVycmlkZXNJbnZlcnNlTWFwIH0gZnJvbSAnLi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCByb290Tm90aW9uUGFnZUlkOiBzdHJpbmcgPSBwYXJzZVBhZ2VJZChcclxuICBnZXRTaXRlQ29uZmlnKCdyb290Tm90aW9uUGFnZUlkJyksXHJcbiAgeyB1dWlkOiBmYWxzZSB9XHJcbilcclxuXHJcbmlmICghcm9vdE5vdGlvblBhZ2VJZCkge1xyXG4gIHRocm93IG5ldyBFcnJvcignQ29uZmlnIGVycm9yIGludmFsaWQgXCJyb290Tm90aW9uUGFnZUlkXCInKVxyXG59XHJcblxyXG4vLyBpZiB5b3Ugd2FudCB0byByZXN0cmljdCBwYWdlcyB0byBhIHNpbmdsZSBub3Rpb24gd29ya3NwYWNlIChvcHRpb25hbClcclxuZXhwb3J0IGNvbnN0IHJvb3ROb3Rpb25TcGFjZUlkOiBzdHJpbmcgfCBudWxsID0gcGFyc2VQYWdlSWQoXHJcbiAgZ2V0U2l0ZUNvbmZpZygncm9vdE5vdGlvblNwYWNlSWQnLCBudWxsKSxcclxuICB7IHV1aWQ6IHRydWUgfVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgcGFnZVVybE92ZXJyaWRlcyA9IGNsZWFuUGFnZVVybE1hcChcclxuICBnZXRTaXRlQ29uZmlnKCdwYWdlVXJsT3ZlcnJpZGVzJywge30pIHx8IHt9LFxyXG4gICdwYWdlVXJsT3ZlcnJpZGVzJ1xyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgaW52ZXJzZVBhZ2VVcmxPdmVycmlkZXMgPSBpbnZlcnRQYWdlVXJsT3ZlcnJpZGVzKHBhZ2VVcmxPdmVycmlkZXMpXHJcblxyXG5leHBvcnQgY29uc3QgcGFnZVVybEFkZGl0aW9ucyA9IGNsZWFuUGFnZVVybE1hcChcclxuICBnZXRTaXRlQ29uZmlnKCdwYWdlVXJsQWRkaXRpb25zJywge30pIHx8IHt9LFxyXG4gICdwYWdlVXJsQWRkaXRpb25zJ1xyXG4pXHJcblxyXG4vLyBnZW5lcmFsIHNpdGUgY29uZmlnXHJcbmV4cG9ydCBjb25zdCBuYW1lOiBzdHJpbmcgPSBnZXRTaXRlQ29uZmlnKCduYW1lJylcclxuZXhwb3J0IGNvbnN0IGF1dGhvcjogc3RyaW5nID0gZ2V0U2l0ZUNvbmZpZygnYXV0aG9yJylcclxuZXhwb3J0IGNvbnN0IGRvbWFpbjogc3RyaW5nID0gZ2V0U2l0ZUNvbmZpZygnZG9tYWluJylcclxuZXhwb3J0IGNvbnN0IGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBnZXRTaXRlQ29uZmlnKCdkZXNjcmlwdGlvbicsICdOb3Rpb24gQmxvZycpXHJcblxyXG4vLyBzb2NpYWwgYWNjb3VudHNcclxuZXhwb3J0IGNvbnN0IHR3aXR0ZXI6IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKCd0d2l0dGVyJywgbnVsbClcclxuZXhwb3J0IGNvbnN0IGdpdGh1Yjogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoJ2dpdGh1YicsIG51bGwpXHJcbmV4cG9ydCBjb25zdCBsaW5rZWRpbjogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoJ2xpbmtlZGluJywgbnVsbClcclxuXHJcbmV4cG9ydCBjb25zdCBzb2NpYWxJbWFnZVRpdGxlOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnc29jaWFsSW1hZ2VUaXRsZScsXHJcbiAgbnVsbFxyXG4pXHJcbmV4cG9ydCBjb25zdCBzb2NpYWxJbWFnZVN1YnRpdGxlOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnc29jaWFsSW1hZ2VTdWJ0aXRsZScsXHJcbiAgbnVsbFxyXG4pXHJcblxyXG4vLyBkZWZhdWx0IG5vdGlvbiB2YWx1ZXMgZm9yIHNpdGUtd2lkZSBjb25zaXN0ZW5jeSAob3B0aW9uYWw7IG1heSBiZSBvdmVycmlkZGVuIG9uIGEgcGVyLXBhZ2UgYmFzaXMpXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UGFnZUljb246IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdkZWZhdWx0UGFnZUljb24nLFxyXG4gIG51bGxcclxuKVxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhZ2VDb3Zlcjogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoXHJcbiAgJ2RlZmF1bHRQYWdlQ292ZXInLFxyXG4gIG51bGxcclxuKVxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhZ2VDb3ZlclBvc2l0aW9uOiBudW1iZXIgPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdkZWZhdWx0UGFnZUNvdmVyUG9zaXRpb24nLFxyXG4gIDAuNVxyXG4pXHJcblxyXG4vLyBPcHRpb25hbCB1dHRlcmFuYy5lcyBjb21tZW50cyB2aWEgR2l0SHViIGlzc3VlIGNvbW1lbnRzXHJcbmV4cG9ydCBjb25zdCB1dHRlcmFuY2VzR2l0SHViUmVwbzogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoXHJcbiAgJ3V0dGVyYW5jZXNHaXRIdWJSZXBvJyxcclxuICBudWxsXHJcbilcclxuXHJcbi8vIE9wdGlvbmFsIGltYWdlIENETiBob3N0IHRvIHByb3h5IGFsbCBpbWFnZSByZXF1ZXN0cyB0aHJvdWdoXHJcbmV4cG9ydCBjb25zdCBpbWFnZUNETkhvc3Q6IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKCdpbWFnZUNETkhvc3QnLCBudWxsKVxyXG5cclxuLy8gT3B0aW9uYWwgd2hldGhlciBvciBub3QgdG8gZW5hYmxlIHN1cHBvcnQgZm9yIExRSVAgcHJldmlldyBpbWFnZXNcclxuLy8gKHJlcXVpcmVzIGEgR29vZ2xlIEZpcmViYXNlIGNvbGxlY3Rpb24pXHJcbmV4cG9ydCBjb25zdCBpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkOiBib29sZWFuID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnaXNQcmV2aWV3SW1hZ2VTdXBwb3J0RW5hYmxlZCcsXHJcbiAgZmFsc2VcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzRGV2ID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB8fCAhcHJvY2Vzcy5lbnYuTk9ERV9FTlZcclxuXHJcbi8vIHdoZXJlIGl0IGFsbCBzdGFydHMgLS0gdGhlIHNpdGUncyByb290IE5vdGlvbiBwYWdlXHJcbmV4cG9ydCBjb25zdCBpbmNsdWRlTm90aW9uSWRJblVybHM6IGJvb2xlYW4gPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdpbmNsdWRlTm90aW9uSWRJblVybHMnLFxyXG4gICEhaXNEZXZcclxuKVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0ID0gZ2V0RW52KCdQT1JUJywgJzMwMDAnKVxyXG5leHBvcnQgY29uc3QgaG9zdCA9IGlzRGV2ID8gYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWAgOiBgaHR0cHM6Ly8ke2RvbWFpbn1gXHJcblxyXG5leHBvcnQgY29uc3QgYXBpQmFzZVVybCA9IGAke2hvc3R9L2FwaWBcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSB7XHJcbiAgY3JlYXRlUHJldmlld0ltYWdlOiBgJHthcGlCYXNlVXJsfS9jcmVhdGUtcHJldmlldy1pbWFnZWAsXHJcbiAgc2VhcmNoTm90aW9uOiBgJHthcGlCYXNlVXJsfS9zZWFyY2gtbm90aW9uYCxcclxuICByZW5kZXJTb2NpYWxJbWFnZTogKHBhZ2VJZCkgPT4gYCR7YXBpQmFzZVVybH0vcmVuZGVyLXNvY2lhbC1pbWFnZS8ke3BhZ2VJZH1gXHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBjb25zdCBmYXRob21JZCA9IGlzRGV2ID8gbnVsbCA6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZBVEhPTV9JRFxyXG5cclxuZXhwb3J0IGNvbnN0IGZhdGhvbUNvbmZpZyA9IGZhdGhvbUlkXHJcbiAgPyB7XHJcbiAgICAgIGV4Y2x1ZGVkRG9tYWluczogWydsb2NhbGhvc3QnLCAnbG9jYWxob3N0OjMwMDAnXVxyXG4gICAgfVxyXG4gIDogdW5kZWZpbmVkXHJcblxyXG5jb25zdCBkZWZhdWx0RW52VmFsdWVGb3JQcmV2aWV3SW1hZ2VTdXBwb3J0ID1cclxuICBpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkICYmIGlzU2VydmVyID8gdW5kZWZpbmVkIDogbnVsbFxyXG5cclxuZXhwb3J0IGNvbnN0IGdvb2dsZVByb2plY3RJZCA9IGdldEVudihcclxuICAnR0NMT1VEX1BST0pFQ1QnLFxyXG4gIGRlZmF1bHRFbnZWYWx1ZUZvclByZXZpZXdJbWFnZVN1cHBvcnRcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHMgPSBnZXRHb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzKClcclxuXHJcbmV4cG9ydCBjb25zdCBmaXJlYmFzZUNvbGxlY3Rpb25JbWFnZXMgPSBnZXRFbnYoXHJcbiAgJ0ZJUkVCQVNFX0NPTExFQ1RJT05fSU1BR0VTJyxcclxuICBkZWZhdWx0RW52VmFsdWVGb3JQcmV2aWV3SW1hZ2VTdXBwb3J0XHJcbilcclxuXHJcbi8vIHRoaXMgaGFjayBpcyBuZWNlc3NhcnkgYmVjYXVzZSB2ZXJjZWwgZG9lc24ndCBzdXBwb3J0IHNlY3JldCBmaWxlcyBzbyB3ZSBuZWVkIHRvIGVuY29kZSBvdXIgZ29vZ2xlXHJcbi8vIGNyZWRlbnRpYWxzIGEgYmFzZTY0LWVuY29kZWQgc3RyaW5nIG9mIHRoZSBKU09OLWlmaWVkIGNvbnRlbnRcclxuZnVuY3Rpb24gZ2V0R29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFscygpIHtcclxuICBpZiAoIWlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQgfHwgIWlzU2VydmVyKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHNCYXNlNjQgPSBnZXRFbnYoXHJcbiAgICAgICdHT09HTEVfQVBQTElDQVRJT05fQ1JFREVOVElBTFMnLFxyXG4gICAgICBkZWZhdWx0RW52VmFsdWVGb3JQcmV2aWV3SW1hZ2VTdXBwb3J0XHJcbiAgICApXHJcblxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoXHJcbiAgICAgIEJ1ZmZlci5mcm9tKGdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHNCYXNlNjQsICdiYXNlNjQnKS50b1N0cmluZygpXHJcbiAgICApXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAnRmlyZWJhc2UgY29uZmlnIGVycm9yOiBpbnZhbGlkIFwiR09PR0xFX0FQUExJQ0FUSU9OX0NSRURFTlRJQUxTXCIgc2hvdWxkIGJlIGJhc2U2NC1lbmNvZGVkIEpTT05cXG4nXHJcbiAgICApXHJcblxyXG4gICAgdGhyb3cgZXJyXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhblBhZ2VVcmxNYXAoXHJcbiAgcGFnZVVybE1hcDogUGFnZVVybE92ZXJyaWRlc01hcCxcclxuICBsYWJlbDogc3RyaW5nXHJcbik6IFBhZ2VVcmxPdmVycmlkZXNNYXAge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhwYWdlVXJsTWFwKS5yZWR1Y2UoKGFjYywgdXJpKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlSWQgPSBwYWdlVXJsTWFwW3VyaV1cclxuICAgIGNvbnN0IHV1aWQgPSBwYXJzZVBhZ2VJZChwYWdlSWQsIHsgdXVpZDogZmFsc2UgfSlcclxuXHJcbiAgICBpZiAoIXV1aWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkICR7bGFiZWx9IHBhZ2UgaWQgXCIke3BhZ2VJZH1cImApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1cmkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nICR7bGFiZWx9IHZhbHVlIGZvciBwYWdlIFwiJHtwYWdlSWR9XCJgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXJpLnN0YXJ0c1dpdGgoJy8nKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgYEludmFsaWQgJHtsYWJlbH0gdmFsdWUgZm9yIHBhZ2UgXCIke3BhZ2VJZH1cIjogdmFsdWUgXCIke3VyaX1cIiBzaG91bGQgYmUgYSByZWxhdGl2ZSBVUkkgdGhhdCBzdGFydHMgd2l0aCBcIi9cImBcclxuICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhdGggPSB1cmkuc2xpY2UoMSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5hY2MsXHJcbiAgICAgIFtwYXRoXTogdXVpZFxyXG4gICAgfVxyXG4gIH0sIHt9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZlcnRQYWdlVXJsT3ZlcnJpZGVzKFxyXG4gIHBhZ2VVcmxPdmVycmlkZXM6IFBhZ2VVcmxPdmVycmlkZXNNYXBcclxuKTogUGFnZVVybE92ZXJyaWRlc0ludmVyc2VNYXAge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhwYWdlVXJsT3ZlcnJpZGVzKS5yZWR1Y2UoKGFjYywgdXJpKSA9PiB7XHJcbiAgICBjb25zdCBwYWdlSWQgPSBwYWdlVXJsT3ZlcnJpZGVzW3VyaV1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5hY2MsXHJcbiAgICAgIFtwYWdlSWRdOiB1cmlcclxuICAgIH1cclxuICB9LCB7fSlcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBmaXJlc3RvcmUgZnJvbSAnQGdvb2dsZS1jbG91ZC9maXJlc3RvcmUnXHJcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxuXHJcbmV4cG9ydCBsZXQgZGI6IGZpcmVzdG9yZS5GaXJlc3RvcmUgPSBudWxsXHJcbmV4cG9ydCBsZXQgaW1hZ2VzOiBmaXJlc3RvcmUuQ29sbGVjdGlvblJlZmVyZW5jZSA9IG51bGxcclxuXHJcbmlmIChjb25maWcuaXNQcmV2aWV3SW1hZ2VTdXBwb3J0RW5hYmxlZCkge1xyXG4gIGRiID0gbmV3IGZpcmVzdG9yZS5GaXJlc3RvcmUoe1xyXG4gICAgcHJvamVjdElkOiBjb25maWcuZ29vZ2xlUHJvamVjdElkLFxyXG4gICAgY3JlZGVudGlhbHM6IGNvbmZpZy5nb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzXHJcbiAgfSlcclxuXHJcbiAgaW1hZ2VzID0gZGIuY29sbGVjdGlvbihjb25maWcuZmlyZWJhc2VDb2xsZWN0aW9uSW1hZ2VzKVxyXG59XHJcbiIsImltcG9ydCBwTWVtb2l6ZSBmcm9tICdwLW1lbW9pemUnXHJcbmltcG9ydCB7IGdldEFsbFBhZ2VzSW5TcGFjZSB9IGZyb20gJ25vdGlvbi11dGlscydcclxuXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7IGluY2x1ZGVOb3Rpb25JZEluVXJscyB9IGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgeyBub3Rpb24gfSBmcm9tICcuL25vdGlvbidcclxuaW1wb3J0IHsgZ2V0Q2Fub25pY2FsUGFnZUlkIH0gZnJvbSAnLi9nZXQtY2Fub25pY2FsLXBhZ2UtaWQnXHJcblxyXG5jb25zdCB1dWlkID0gISFpbmNsdWRlTm90aW9uSWRJblVybHNcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxQYWdlcyA9IHBNZW1vaXplKGdldEFsbFBhZ2VzSW1wbCwgeyBtYXhBZ2U6IDYwMDAwICogNSB9KVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBhZ2VzSW1wbChcclxuICByb290Tm90aW9uUGFnZUlkOiBzdHJpbmcsXHJcbiAgcm9vdE5vdGlvblNwYWNlSWQ6IHN0cmluZ1xyXG4pOiBQcm9taXNlPFBhcnRpYWw8dHlwZXMuU2l0ZU1hcD4+IHtcclxuICBjb25zdCBwYWdlTWFwID0gYXdhaXQgZ2V0QWxsUGFnZXNJblNwYWNlKFxyXG4gICAgcm9vdE5vdGlvblBhZ2VJZCxcclxuICAgIHJvb3ROb3Rpb25TcGFjZUlkLFxyXG4gICAgbm90aW9uLmdldFBhZ2UuYmluZChub3Rpb24pXHJcbiAgKVxyXG5cclxuICBjb25zdCBjYW5vbmljYWxQYWdlTWFwID0gT2JqZWN0LmtleXMocGFnZU1hcCkucmVkdWNlKFxyXG4gICAgKG1hcCwgcGFnZUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgcmVjb3JkTWFwID0gcGFnZU1hcFtwYWdlSWRdXHJcbiAgICAgIGlmICghcmVjb3JkTWFwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBsb2FkaW5nIHBhZ2UgXCIke3BhZ2VJZH1cImApXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNhbm9uaWNhbFBhZ2VJZCA9IGdldENhbm9uaWNhbFBhZ2VJZChwYWdlSWQsIHJlY29yZE1hcCwge1xyXG4gICAgICAgIHV1aWRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGlmIChtYXBbY2Fub25pY2FsUGFnZUlkXSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAnZXJyb3IgZHVwbGljYXRlIGNhbm9uaWNhbCBwYWdlIGlkJyxcclxuICAgICAgICAgIGNhbm9uaWNhbFBhZ2VJZCxcclxuICAgICAgICAgIHBhZ2VJZCxcclxuICAgICAgICAgIG1hcFtjYW5vbmljYWxQYWdlSWRdXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICByZXR1cm4gbWFwXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLm1hcCxcclxuICAgICAgICAgIFtjYW5vbmljYWxQYWdlSWRdOiBwYWdlSWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7fVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHBhZ2VNYXAsXHJcbiAgICBjYW5vbmljYWxQYWdlTWFwXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV4dGVuZGVkUmVjb3JkTWFwIH0gZnJvbSAnbm90aW9uLXR5cGVzJ1xyXG5pbXBvcnQge1xyXG4gIHBhcnNlUGFnZUlkLFxyXG4gIGdldENhbm9uaWNhbFBhZ2VJZCBhcyBnZXRDYW5vbmljYWxQYWdlSWRJbXBsXHJcbn0gZnJvbSAnbm90aW9uLXV0aWxzJ1xyXG5cclxuaW1wb3J0IHsgaW52ZXJzZVBhZ2VVcmxPdmVycmlkZXMgfSBmcm9tICcuL2NvbmZpZydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDYW5vbmljYWxQYWdlSWQoXHJcbiAgcGFnZUlkOiBzdHJpbmcsXHJcbiAgcmVjb3JkTWFwOiBFeHRlbmRlZFJlY29yZE1hcCxcclxuICB7IHV1aWQgPSB0cnVlIH06IHsgdXVpZD86IGJvb2xlYW4gfSA9IHt9XHJcbik6IHN0cmluZyB8IG51bGwge1xyXG4gIGNvbnN0IGNsZWFuUGFnZUlkID0gcGFyc2VQYWdlSWQocGFnZUlkLCB7IHV1aWQ6IGZhbHNlIH0pXHJcbiAgaWYgKCFjbGVhblBhZ2VJZCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IG92ZXJyaWRlID0gaW52ZXJzZVBhZ2VVcmxPdmVycmlkZXNbY2xlYW5QYWdlSWRdXHJcbiAgaWYgKG92ZXJyaWRlKSB7XHJcbiAgICByZXR1cm4gb3ZlcnJpZGVcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGdldENhbm9uaWNhbFBhZ2VJZEltcGwocGFnZUlkLCByZWNvcmRNYXAsIHtcclxuICAgICAgdXVpZFxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHJhd1NpdGVDb25maWcgZnJvbSAnLi4vc2l0ZS5jb25maWcnXHJcblxyXG5pZiAoIXJhd1NpdGVDb25maWcpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYENvbmZpZyBlcnJvcjogaW52YWxpZCBzaXRlLmNvbmZpZy5qc2ApXHJcbn1cclxuXHJcbi8vIFRPRE86IGFsbG93IGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBvdmVycmlkZSBzaXRlLmNvbmZpZy5qc1xyXG5sZXQgc2l0ZUNvbmZpZ092ZXJyaWRlc1xyXG5cclxudHJ5IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9DT05GSUcpIHtcclxuICAgIHNpdGVDb25maWdPdmVycmlkZXMgPSBKU09OLnBhcnNlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfQ09ORklHKVxyXG4gIH1cclxufSBjYXRjaCAoZXJyKSB7XHJcbiAgY29uc29sZS5lcnJvcignSW52YWxpZCBjb25maWcgXCJORVhUX1BVQkxJQ19TSVRFX0NPTkZJR1wiIGZhaWxlZCB0byBwYXJzZScpXHJcbiAgdGhyb3cgZXJyXHJcbn1cclxuXHJcbmNvbnN0IHNpdGVDb25maWcgPSB7XHJcbiAgLi4ucmF3U2l0ZUNvbmZpZyxcclxuICAuLi5zaXRlQ29uZmlnT3ZlcnJpZGVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXRlQ29uZmlnPFQ+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBUKTogVCB7XHJcbiAgY29uc3QgdmFsdWUgPSBzaXRlQ29uZmlnW2tleV1cclxuXHJcbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoYENvbmZpZyBlcnJvcjogbWlzc2luZyByZXF1aXJlZCBzaXRlIGNvbmZpZyB2YWx1ZSBcIiR7a2V5fVwiYClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudihcclxuICBrZXk6IHN0cmluZyxcclxuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsXHJcbiAgZW52ID0gcHJvY2Vzcy5lbnZcclxuKTogc3RyaW5nIHtcclxuICBjb25zdCB2YWx1ZSA9IGVudltrZXldXHJcblxyXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICB9XHJcblxyXG4gIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKGBDb25maWcgZXJyb3I6IG1pc3NpbmcgcmVxdWlyZWQgZW52IHZhcmlhYmxlIFwiJHtrZXl9XCJgKVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7IGdldFBhZ2VQcm9wZXJ0eSB9IGZyb20gJ25vdGlvbi11dGlscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlRGVzY3JpcHRpb24oXHJcbiAgYmxvY2s6IHR5cGVzLkJsb2NrLFxyXG4gIHJlY29yZE1hcDogdHlwZXMuRXh0ZW5kZWRSZWNvcmRNYXBcclxuKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgcmV0dXJuIGdldFBhZ2VQcm9wZXJ0eSgnRGVzY3JpcHRpb24nLCBibG9jaywgcmVjb3JkTWFwKVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7IGdldFBhZ2VQcm9wZXJ0eSB9IGZyb20gJ25vdGlvbi11dGlscydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYWdlVHdlZXQoXHJcbiAgYmxvY2s6IHR5cGVzLkJsb2NrLFxyXG4gIHJlY29yZE1hcDogdHlwZXMuRXh0ZW5kZWRSZWNvcmRNYXBcclxuKTogc3RyaW5nIHwgbnVsbCB7XHJcbiAgcmV0dXJuIGdldFBhZ2VQcm9wZXJ0eSgnVHdlZXQnLCBibG9jaywgcmVjb3JkTWFwKVxyXG59XHJcbiIsImltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJ1xyXG5pbXBvcnQgZ290IGZyb20gJ2dvdCdcclxuaW1wb3J0IHBNYXAgZnJvbSAncC1tYXAnXHJcblxyXG5pbXBvcnQgeyBhcGksIGlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQgfSBmcm9tICcuL2NvbmZpZydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuaW1wb3J0ICogYXMgZGIgZnJvbSAnLi9kYidcclxuXHJcbmZ1bmN0aW9uIHNoYTI1NihpbnB1dDogQnVmZmVyIHwgc3RyaW5nKSB7XHJcbiAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmlzQnVmZmVyKGlucHV0KSA/IGlucHV0IDogQnVmZmVyLmZyb20oaW5wdXQpXHJcbiAgcmV0dXJuIGNyeXB0by5jcmVhdGVIYXNoKCdzaGEyNTYnKS51cGRhdGUoYnVmZmVyKS5kaWdlc3QoJ2hleCcpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcmV2aWV3SW1hZ2VzKFxyXG4gIGltYWdlczogc3RyaW5nW11cclxuKTogUHJvbWlzZTx0eXBlcy5QcmV2aWV3SW1hZ2VNYXA+IHtcclxuICBpZiAoIWlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQpIHtcclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VEb2NSZWZzID0gaW1hZ2VzLm1hcCgodXJsKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IHNoYTI1Nih1cmwpXHJcbiAgICByZXR1cm4gZGIuaW1hZ2VzLmRvYyhpZClcclxuICB9KVxyXG5cclxuICBpZiAoIWltYWdlRG9jUmVmcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiB7fVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaW1hZ2VEb2NzID0gYXdhaXQgZGIuZGIuZ2V0QWxsKC4uLmltYWdlRG9jUmVmcylcclxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgcE1hcChpbWFnZURvY3MsIGFzeW5jIChtb2RlbCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChtb2RlbC5leGlzdHMpIHtcclxuICAgICAgcmV0dXJuIG1vZGVsLmRhdGEoKSBhcyB0eXBlcy5QcmV2aWV3SW1hZ2VcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGpzb24gPSB7XHJcbiAgICAgICAgdXJsOiBpbWFnZXNbaW5kZXhdLFxyXG4gICAgICAgIGlkOiBtb2RlbC5pZFxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGVQcmV2aWV3SW1hZ2Ugc2VydmVyLXNpZGUnLCBqc29uKVxyXG5cclxuICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIGZpcmUgYW5kIGZvcmdldCBoZXJlIHRvIHNwZWVkIHVwIGJ1aWxkcz9cclxuICAgICAgcmV0dXJuIGdvdFxyXG4gICAgICAgIC5wb3N0KGFwaS5jcmVhdGVQcmV2aWV3SW1hZ2UsIHsganNvbiB9KVxyXG4gICAgICAgIC5qc29uKCkgYXMgUHJvbWlzZTx0eXBlcy5QcmV2aWV3SW1hZ2U+XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHJlc3VsdHNcclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgIC5maWx0ZXIoKGltYWdlKSA9PiAhaW1hZ2UuZXJyb3IpXHJcbiAgICAucmVkdWNlKFxyXG4gICAgICAoYWNjLCByZXN1bHQpID0+ICh7XHJcbiAgICAgICAgLi4uYWNjLFxyXG4gICAgICAgIFtyZXN1bHQudXJsXTogcmVzdWx0XHJcbiAgICAgIH0pLFxyXG4gICAgICB7fVxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTaXRlRm9yRG9tYWluID0gYXN5bmMgKFxyXG4gIGRvbWFpbjogc3RyaW5nXHJcbik6IFByb21pc2U8dHlwZXMuU2l0ZSB8IG51bGw+ID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgZG9tYWluLFxyXG4gICAgbmFtZTogY29uZmlnLm5hbWUsXHJcbiAgICByb290Tm90aW9uUGFnZUlkOiBjb25maWcucm9vdE5vdGlvblBhZ2VJZCxcclxuICAgIHJvb3ROb3Rpb25TcGFjZUlkOiBjb25maWcucm9vdE5vdGlvblNwYWNlSWQsXHJcbiAgICBkZXNjcmlwdGlvbjogY29uZmlnLmRlc2NyaXB0aW9uXHJcbiAgfSBhcyB0eXBlcy5TaXRlXHJcbn1cclxuIiwiaW1wb3J0IHBNYXAgZnJvbSAncC1tYXAnXHJcblxyXG5pbXBvcnQgeyBnZXRBbGxQYWdlcyB9IGZyb20gJy4vZ2V0LWFsbC1wYWdlcydcclxuaW1wb3J0IHsgZ2V0U2l0ZXMgfSBmcm9tICcuL2dldC1zaXRlcydcclxuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi90eXBlcydcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaXRlTWFwcygpOiBQcm9taXNlPHR5cGVzLlNpdGVNYXBbXT4ge1xyXG4gIGNvbnN0IHNpdGVzID0gYXdhaXQgZ2V0U2l0ZXMoKVxyXG5cclxuICBjb25zdCBzaXRlTWFwcyA9IGF3YWl0IHBNYXAoXHJcbiAgICBzaXRlcyxcclxuICAgIGFzeW5jIChzaXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgJ2dldFNpdGVNYXAnLFxyXG4gICAgICAgICAgYCR7aW5kZXggKyAxfS8ke3NpdGVzLmxlbmd0aH1gLFxyXG4gICAgICAgICAgYCgkeygoKGluZGV4ICsgMSkgLyBzaXRlcy5sZW5ndGgpICogMTAwKSB8IDB9JSlgLFxyXG4gICAgICAgICAgc2l0ZVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHNpdGUsXHJcbiAgICAgICAgICAuLi4oYXdhaXQgZ2V0QWxsUGFnZXMoc2l0ZS5yb290Tm90aW9uUGFnZUlkLCBzaXRlLnJvb3ROb3Rpb25TcGFjZUlkKSlcclxuICAgICAgICB9IGFzIHR5cGVzLlNpdGVNYXBcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdzaXRlIGJ1aWxkIGVycm9yJywgaW5kZXgsIHNpdGUsIGVycilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29uY3VycmVuY3k6IDRcclxuICAgIH1cclxuICApXHJcblxyXG4gIHJldHVybiBzaXRlTWFwcy5maWx0ZXIoQm9vbGVhbilcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRTaXRlRm9yRG9tYWluIH0gZnJvbSAnLi9nZXQtc2l0ZS1mb3ItZG9tYWluJ1xyXG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2l0ZXMoKTogUHJvbWlzZTx0eXBlcy5TaXRlW10+IHtcclxuICByZXR1cm4gW2F3YWl0IGdldFNpdGVGb3JEb21haW4oY29uZmlnLmRvbWFpbildXHJcbn1cclxuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tICdub3Rpb24tdHlwZXMnXHJcbmltcG9ydCB7IGltYWdlQ0ROSG9zdCB9IGZyb20gJy4vY29uZmlnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcE5vdGlvbkltYWdlVXJsID0gKHVybDogc3RyaW5nLCBibG9jazogQmxvY2spID0+IHtcclxuICBpZiAoIXVybCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xyXG4gICAgcmV0dXJuIHVybFxyXG4gIH1cclxuXHJcbiAgaWYgKGltYWdlQ0ROSG9zdCAmJiB1cmwuc3RhcnRzV2l0aChpbWFnZUNETkhvc3QpKSB7XHJcbiAgICByZXR1cm4gdXJsXHJcbiAgfVxyXG5cclxuICAvLyBjb25zdCBvcmlnVXJsID0gdXJsXHJcblxyXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnL2ltYWdlcycpKSB7XHJcbiAgICB1cmwgPSBgaHR0cHM6Ly93d3cubm90aW9uLnNvJHt1cmx9YFxyXG4gIH1cclxuXHJcbiAgLy8gbW9yZSByZWNlbnQgdmVyc2lvbnMgb2Ygbm90aW9uIGRvbid0IHByb3h5IHVuc3BsYXNoIGltYWdlc1xyXG4gIGlmICghdXJsLnN0YXJ0c1dpdGgoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbScpKSB7XHJcbiAgICB1cmwgPSBgaHR0cHM6Ly93d3cubm90aW9uLnNvJHtcclxuICAgICAgdXJsLnN0YXJ0c1dpdGgoJy9pbWFnZScpID8gdXJsIDogYC9pbWFnZS8ke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWBcclxuICAgIH1gXHJcblxyXG4gICAgY29uc3Qgbm90aW9uSW1hZ2VVcmxWMiA9IG5ldyBVUkwodXJsKVxyXG4gICAgbGV0IHRhYmxlID0gYmxvY2sucGFyZW50X3RhYmxlID09PSAnc3BhY2UnID8gJ2Jsb2NrJyA6IGJsb2NrLnBhcmVudF90YWJsZVxyXG4gICAgaWYgKHRhYmxlID09PSAnY29sbGVjdGlvbicpIHtcclxuICAgICAgdGFibGUgPSAnYmxvY2snXHJcbiAgICB9XHJcbiAgICBub3Rpb25JbWFnZVVybFYyLnNlYXJjaFBhcmFtcy5zZXQoJ3RhYmxlJywgdGFibGUpXHJcbiAgICBub3Rpb25JbWFnZVVybFYyLnNlYXJjaFBhcmFtcy5zZXQoJ2lkJywgYmxvY2suaWQpXHJcbiAgICBub3Rpb25JbWFnZVVybFYyLnNlYXJjaFBhcmFtcy5zZXQoJ2NhY2hlJywgJ3YyJylcclxuXHJcbiAgICB1cmwgPSBub3Rpb25JbWFnZVVybFYyLnRvU3RyaW5nKClcclxuICB9XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKHsgdXJsLCBvcmlnVXJsIH0pXHJcbiAgcmV0dXJuIG1hcEltYWdlVXJsKHVybClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hcEltYWdlVXJsID0gKGltYWdlVXJsOiBzdHJpbmcpID0+IHtcclxuICBpZiAoaW1hZ2VVcmwuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xyXG4gICAgcmV0dXJuIGltYWdlVXJsXHJcbiAgfVxyXG5cclxuICBpZiAoaW1hZ2VDRE5Ib3N0KSB7XHJcbiAgICAvLyBPdXIgcHJveHkgdXNlcyBDbG91ZGZsYXJlJ3MgZ2xvYmFsIENETiB0byBjYWNoZSB0aGVzZSBpbWFnZSBhc3NldHNcclxuICAgIHJldHVybiBgJHtpbWFnZUNETkhvc3R9LyR7ZW5jb2RlVVJJQ29tcG9uZW50KGltYWdlVXJsKX1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBpbWFnZVVybFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFeHRlbmRlZFJlY29yZE1hcCB9IGZyb20gJ25vdGlvbi10eXBlcydcclxuaW1wb3J0IHsgdXVpZFRvSWQsIHBhcnNlUGFnZUlkIH0gZnJvbSAnbm90aW9uLXV0aWxzJ1xyXG5cclxuaW1wb3J0IHsgU2l0ZSB9IGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7IGluY2x1ZGVOb3Rpb25JZEluVXJscyB9IGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRDYW5vbmljYWxQYWdlSWQgfSBmcm9tICcuL2dldC1jYW5vbmljYWwtcGFnZS1pZCdcclxuXHJcbi8vIGluY2x1ZGUgVVVJRHMgaW4gcGFnZSBVUkxzIGR1cmluZyBsb2NhbCBkZXZlbG9wbWVudCBidXQgbm90IGluIHByb2R1Y3Rpb25cclxuLy8gKHRoZXkncmUgbmljZSBmb3IgZGVidWdnaW5nIGFuZCBzcGVlZCB1cCBsb2NhbCBkZXYpXHJcbmNvbnN0IHV1aWQgPSAhIWluY2x1ZGVOb3Rpb25JZEluVXJsc1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hcFBhZ2VVcmwgPSAoXHJcbiAgc2l0ZTogU2l0ZSxcclxuICByZWNvcmRNYXA6IEV4dGVuZGVkUmVjb3JkTWFwLFxyXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXHJcbikgPT4gKHBhZ2VJZCA9ICcnKSA9PiB7XHJcbiAgaWYgKHV1aWRUb0lkKHBhZ2VJZCkgPT09IHNpdGUucm9vdE5vdGlvblBhZ2VJZCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVVybCgnLycsIHNlYXJjaFBhcmFtcylcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVVybChcclxuICAgICAgYC8ke2dldENhbm9uaWNhbFBhZ2VJZChwYWdlSWQsIHJlY29yZE1hcCwgeyB1dWlkIH0pfWAsXHJcbiAgICAgIHNlYXJjaFBhcmFtc1xyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhbm9uaWNhbFBhZ2VVcmwgPSAoXHJcbiAgc2l0ZTogU2l0ZSxcclxuICByZWNvcmRNYXA6IEV4dGVuZGVkUmVjb3JkTWFwXHJcbikgPT4gKHBhZ2VJZCA9ICcnKSA9PiB7XHJcbiAgY29uc3QgcGFnZVV1aWQgPSBwYXJzZVBhZ2VJZChwYWdlSWQsIHsgdXVpZDogdHJ1ZSB9KVxyXG5cclxuICBpZiAodXVpZFRvSWQocGFnZUlkKSA9PT0gc2l0ZS5yb290Tm90aW9uUGFnZUlkKSB7XHJcbiAgICByZXR1cm4gYGh0dHBzOi8vJHtzaXRlLmRvbWFpbn1gXHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBgaHR0cHM6Ly8ke3NpdGUuZG9tYWlufS8ke2dldENhbm9uaWNhbFBhZ2VJZChwYWdlVXVpZCwgcmVjb3JkTWFwLCB7XHJcbiAgICAgIHV1aWRcclxuICAgIH0pfWBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVVybChwYXRoOiBzdHJpbmcsIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zKSB7XHJcbiAgcmV0dXJuIFtwYXRoLCBzZWFyY2hQYXJhbXMudG9TdHJpbmcoKV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJz8nKVxyXG59XHJcbiIsImltcG9ydCB7IE5vdGlvbkFQSSB9IGZyb20gJ25vdGlvbi1jbGllbnQnXHJcbmltcG9ydCB7IEV4dGVuZGVkUmVjb3JkTWFwLCBTZWFyY2hQYXJhbXMsIFNlYXJjaFJlc3VsdHMgfSBmcm9tICdub3Rpb24tdHlwZXMnXHJcbmltcG9ydCB7IGdldFByZXZpZXdJbWFnZXMgfSBmcm9tICcuL2dldC1wcmV2aWV3LWltYWdlcydcclxuaW1wb3J0IHsgbWFwTm90aW9uSW1hZ2VVcmwgfSBmcm9tICcuL21hcC1pbWFnZS11cmwnXHJcbmltcG9ydCB7IGZldGNoVHdlZXRBc3QgfSBmcm9tICdzdGF0aWMtdHdlZXRzJ1xyXG5pbXBvcnQgcE1hcCBmcm9tICdwLW1hcCdcclxuXHJcbmV4cG9ydCBjb25zdCBub3Rpb24gPSBuZXcgTm90aW9uQVBJKHtcclxuICBhcGlCYXNlVXJsOiBwcm9jZXNzLmVudi5OT1RJT05fQVBJX0JBU0VfVVJMXHJcbn0pXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZShwYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8RXh0ZW5kZWRSZWNvcmRNYXA+IHtcclxuICBjb25zdCByZWNvcmRNYXAgPSBhd2FpdCBub3Rpb24uZ2V0UGFnZShwYWdlSWQpXHJcbiAgY29uc3QgYmxvY2tJZHMgPSBPYmplY3Qua2V5cyhyZWNvcmRNYXAuYmxvY2spXHJcblxyXG4gIGNvbnN0IGltYWdlVXJsczogc3RyaW5nW10gPSBibG9ja0lkc1xyXG4gICAgLm1hcCgoYmxvY2tJZCkgPT4ge1xyXG4gICAgICBjb25zdCBibG9jayA9IHJlY29yZE1hcC5ibG9ja1tibG9ja0lkXT8udmFsdWVcclxuXHJcbiAgICAgIGlmIChibG9jaykge1xyXG4gICAgICAgIGlmIChibG9jay50eXBlID09PSAnaW1hZ2UnKSB7XHJcbiAgICAgICAgICBjb25zdCBzb3VyY2UgPSBibG9jay5wcm9wZXJ0aWVzPy5zb3VyY2U/LlswXT8uWzBdXHJcblxyXG4gICAgICAgICAgaWYgKHNvdXJjZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIGJsb2NrLFxyXG4gICAgICAgICAgICAgIHVybDogc291cmNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoYmxvY2suZm9ybWF0IGFzIGFueSk/LnBhZ2VfY292ZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IChibG9jay5mb3JtYXQgYXMgYW55KS5wYWdlX2NvdmVyXHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYmxvY2ssXHJcbiAgICAgICAgICAgIHVybDogc291cmNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgIC5tYXAoKHsgYmxvY2ssIHVybCB9KSA9PiBtYXBOb3Rpb25JbWFnZVVybCh1cmwsIGJsb2NrKSlcclxuICAgIC5maWx0ZXIoQm9vbGVhbilcclxuXHJcbiAgY29uc3QgdXJscyA9IEFycmF5LmZyb20obmV3IFNldChpbWFnZVVybHMpKVxyXG4gIGNvbnN0IHByZXZpZXdJbWFnZU1hcCA9IGF3YWl0IGdldFByZXZpZXdJbWFnZXModXJscylcclxuICA7KHJlY29yZE1hcCBhcyBhbnkpLnByZXZpZXdfaW1hZ2VzID0gcHJldmlld0ltYWdlTWFwXHJcblxyXG4gIGNvbnN0IHR3ZWV0SWRzOiBzdHJpbmdbXSA9IGJsb2NrSWRzXHJcbiAgICAubWFwKChibG9ja0lkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJsb2NrID0gcmVjb3JkTWFwLmJsb2NrW2Jsb2NrSWRdPy52YWx1ZVxyXG5cclxuICAgICAgaWYgKGJsb2NrKSB7XHJcbiAgICAgICAgaWYgKGJsb2NrLnR5cGUgPT09ICd0d2VldCcpIHtcclxuICAgICAgICAgIGNvbnN0IHNyYyA9IGJsb2NrLnByb3BlcnRpZXM/LnNvdXJjZT8uWzBdPy5bMF1cclxuXHJcbiAgICAgICAgICBpZiAoc3JjKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc3JjLnNwbGl0KCc/JylbMF0uc3BsaXQoJy8nKS5wb3AoKVxyXG4gICAgICAgICAgICBpZiAoaWQpIHJldHVybiBpZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIG51bGxcclxuICAgIH0pXHJcbiAgICAuZmlsdGVyKEJvb2xlYW4pXHJcblxyXG4gIGNvbnN0IHR3ZWV0QXN0cyA9IGF3YWl0IHBNYXAoXHJcbiAgICB0d2VldElkcyxcclxuICAgIGFzeW5jICh0d2VldElkKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHR3ZWV0SWQsXHJcbiAgICAgICAgICB0d2VldEFzdDogYXdhaXQgZmV0Y2hUd2VldEFzdCh0d2VldElkKVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3IgZmV0Y2hpbmcgdHdlZXQgaW5mbycsIHR3ZWV0SWQsIGVycilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgY29uY3VycmVuY3k6IDRcclxuICAgIH1cclxuICApXHJcblxyXG4gIGNvbnN0IHR3ZWV0QXN0TWFwID0gdHdlZXRBc3RzLnJlZHVjZSgoYWNjLCB7IHR3ZWV0SWQsIHR3ZWV0QXN0IH0pID0+IHtcclxuICAgIGlmICh0d2VldEFzdCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFjYyxcclxuICAgICAgICBbdHdlZXRJZF06IHR3ZWV0QXN0XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBhY2NcclxuICAgIH1cclxuICB9LCB7fSlcclxuXHJcbiAgOyhyZWNvcmRNYXAgYXMgYW55KS50d2VldEFzdE1hcCA9IHR3ZWV0QXN0TWFwXHJcblxyXG4gIHJldHVybiByZWNvcmRNYXBcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaChwYXJhbXM6IFNlYXJjaFBhcmFtcyk6IFByb21pc2U8U2VhcmNoUmVzdWx0cz4ge1xyXG4gIHJldHVybiBub3Rpb24uc2VhcmNoKHBhcmFtcylcclxufVxyXG4iLCJpbXBvcnQgeyBwYXJzZVBhZ2VJZCB9IGZyb20gJ25vdGlvbi11dGlscydcclxuaW1wb3J0IHsgRXh0ZW5kZWRSZWNvcmRNYXAgfSBmcm9tICdub3Rpb24tdHlwZXMnXHJcblxyXG5pbXBvcnQgKiBhcyBhY2wgZnJvbSAnLi9hY2wnXHJcbmltcG9ydCAqIGFzIHR5cGVzIGZyb20gJy4vdHlwZXMnXHJcbmltcG9ydCB7IHBhZ2VVcmxPdmVycmlkZXMsIHBhZ2VVcmxBZGRpdGlvbnMgfSBmcm9tICcuL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0UGFnZSB9IGZyb20gJy4vbm90aW9uJ1xyXG5pbXBvcnQgeyBnZXRTaXRlTWFwcyB9IGZyb20gJy4vZ2V0LXNpdGUtbWFwcydcclxuaW1wb3J0IHsgZ2V0U2l0ZUZvckRvbWFpbiB9IGZyb20gJy4vZ2V0LXNpdGUtZm9yLWRvbWFpbidcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNvbHZlTm90aW9uUGFnZShkb21haW46IHN0cmluZywgcmF3UGFnZUlkPzogc3RyaW5nKSB7XHJcbiAgbGV0IHNpdGU6IHR5cGVzLlNpdGVcclxuICBsZXQgcGFnZUlkOiBzdHJpbmdcclxuICBsZXQgcmVjb3JkTWFwOiBFeHRlbmRlZFJlY29yZE1hcFxyXG5cclxuICBpZiAocmF3UGFnZUlkICYmIHJhd1BhZ2VJZCAhPT0gJ2luZGV4Jykge1xyXG4gICAgcGFnZUlkID0gcGFyc2VQYWdlSWQocmF3UGFnZUlkKVxyXG5cclxuICAgIGlmICghcGFnZUlkKSB7XHJcbiAgICAgIC8vIGNoZWNrIGlmIHRoZSBzaXRlIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXMgYW4gb3ZlcnJpZGUgb2YgYSBmYWxsYmFjayBmb3JcclxuICAgICAgLy8gdGhlIHBhZ2UncyBVUklcclxuICAgICAgY29uc3Qgb3ZlcnJpZGUgPVxyXG4gICAgICAgIHBhZ2VVcmxPdmVycmlkZXNbcmF3UGFnZUlkXSB8fCBwYWdlVXJsQWRkaXRpb25zW3Jhd1BhZ2VJZF1cclxuXHJcbiAgICAgIGlmIChvdmVycmlkZSkge1xyXG4gICAgICAgIHBhZ2VJZCA9IHBhcnNlUGFnZUlkKG92ZXJyaWRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBhZ2VJZCkge1xyXG4gICAgICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgZ2V0U2l0ZUZvckRvbWFpbihkb21haW4pLFxyXG4gICAgICAgIGdldFBhZ2UocGFnZUlkKVxyXG4gICAgICBdKVxyXG5cclxuICAgICAgc2l0ZSA9IHJlc291cmNlc1swXVxyXG4gICAgICByZWNvcmRNYXAgPSByZXNvdXJjZXNbMV1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGhhbmRsZSBtYXBwaW5nIG9mIHVzZXItZnJpZW5kbHkgY2Fub25pY2FsIHBhZ2UgcGF0aHMgdG8gTm90aW9uIHBhZ2UgSURzXHJcbiAgICAgIC8vIGUuZy4sIC9kZXZlbG9wZXIteC1lbnRyZXByZW5ldXIgdmVyc3VzIC83MTIwMTYyNGIyMDQ0ODFmODYyNjMwZWEyNWNlNjJmZVxyXG4gICAgICBjb25zdCBzaXRlTWFwcyA9IGF3YWl0IGdldFNpdGVNYXBzKClcclxuICAgICAgY29uc3Qgc2l0ZU1hcCA9IHNpdGVNYXBzWzBdXHJcbiAgICAgIHBhZ2VJZCA9IHNpdGVNYXAuY2Fub25pY2FsUGFnZU1hcFtyYXdQYWdlSWRdXHJcblxyXG4gICAgICBpZiAocGFnZUlkKSB7XHJcbiAgICAgICAgLy8gVE9ETzogd2UncmUgbm90IHJlLXVzaW5nIHRoZSBzaXRlIGZyb20gc2l0ZU1hcHMgYmVjYXVzZSBpdCBpc1xyXG4gICAgICAgIC8vIGNhY2hlZCBhZ2dyZXNzaXZlbHlcclxuICAgICAgICAvLyBzaXRlID0gYXdhaXQgZ2V0U2l0ZUZvckRvbWFpbihkb21haW4pXHJcbiAgICAgICAgLy8gcmVjb3JkTWFwID0gc2l0ZU1hcC5wYWdlTWFwW3BhZ2VJZF1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2VzID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgZ2V0U2l0ZUZvckRvbWFpbihkb21haW4pLFxyXG4gICAgICAgICAgZ2V0UGFnZShwYWdlSWQpXHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgc2l0ZSA9IHJlc291cmNlc1swXVxyXG4gICAgICAgIHJlY29yZE1hcCA9IHJlc291cmNlc1sxXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBlcnJvcjoge1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBgTm90IGZvdW5kIFwiJHtyYXdQYWdlSWR9XCJgLFxyXG4gICAgICAgICAgICBzdGF0dXNDb2RlOiA0MDRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgc2l0ZSA9IGF3YWl0IGdldFNpdGVGb3JEb21haW4oZG9tYWluKVxyXG4gICAgcGFnZUlkID0gc2l0ZS5yb290Tm90aW9uUGFnZUlkXHJcblxyXG4gICAgY29uc29sZS5sb2coc2l0ZSlcclxuICAgIHJlY29yZE1hcCA9IGF3YWl0IGdldFBhZ2UocGFnZUlkKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvcHMgPSB7IHNpdGUsIHJlY29yZE1hcCwgcGFnZUlkIH1cclxuICByZXR1cm4geyAuLi5wcm9wcywgLi4uKGF3YWl0IGFjbC5wYWdlQWNsKHByb3BzKSkgfVxyXG59XHJcbiIsIi8vIGltcG9ydCBreSBmcm9tICdreSdcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHBNZW1vaXplIGZyb20gJ3AtbWVtb2l6ZSdcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4vY29uZmlnJ1xyXG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlYXJjaE5vdGlvbiA9IHBNZW1vaXplKHNlYXJjaE5vdGlvbkltcGwsIHsgbWF4QWdlOiAxMDAwMCB9KVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2VhcmNoTm90aW9uSW1wbChcclxuICBwYXJhbXM6IHR5cGVzLlNlYXJjaFBhcmFtc1xyXG4pOiBQcm9taXNlPHR5cGVzLlNlYXJjaFJlc3VsdHM+IHtcclxuICByZXR1cm4gZmV0Y2goYXBpLnNlYXJjaE5vdGlvbiwge1xyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJhbXMpLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9XHJcbiAgfSlcclxuICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG5cclxuICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgIHJldHVybiByZXNcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gY29udmVydCBub24tMnh4IEhUVFAgcmVzcG9uc2VzIGludG8gZXJyb3JzXHJcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IocmVzLnN0YXR1c1RleHQpXHJcbiAgICAgIGVycm9yLnJlc3BvbnNlID0gcmVzXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcilcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG5cclxuICAvLyByZXR1cm4ga3lcclxuICAvLyAgIC5wb3N0KGFwaS5zZWFyY2hOb3Rpb24sIHtcclxuICAvLyAgICAganNvbjogcGFyYW1zXHJcbiAgLy8gICB9KVxyXG4gIC8vICAgLmpzb24oKVxyXG59XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8VD4oXG4gIHA6IFByb21pc2U8VD4sXG4gIG1zOiBudW1iZXIsXG4gIGVycjogRXJyb3Jcbik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuXG4gICAgcC50aGVuKChyKSA9PiB7XG4gICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZXNvbHZlKHIpXG4gICAgfSkuY2F0Y2gocmVqZWN0KVxuXG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgfVxuICAgICAgfSwgbXMpXG4gICAgKVxuICB9KVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdDogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiA9IG5ldyBQcm9taXNlPFxuICAgIENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQlxuICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpID0+IHtcbiAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUISlcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVxuICAgICAgOyh7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpXG5cbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcyksXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSlcblxuICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzLFxuICAgICAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmxvY2FsZVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBmYWxzZVxuICAgICAgfSksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAoXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAhdGhpcy5pc1ByZXZpZXcgJiZcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XVxuICAgICkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAodGhpcy5zZHJbcmVzb3VyY2VLZXldKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgfVxuICAgIHJldHVybiAodGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSkpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nLCByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdChcbiAgICAgICAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAgICAgICBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzXG4gICAgICApXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoXG4gICAgICBkYXRhLFxuICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQsXG4gICAgICByZXNldFNjcm9sbFxuICAgIClcbiAgfVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgZ2xvYmFsQmFzZSA9IG5ldyBVUkwoXG4gICAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuICApXG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIGdsb2JhbEJhc2UpIDogZ2xvYmFsQmFzZVxuICBjb25zdCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMsIHNlYXJjaCwgaGFzaCwgaHJlZiwgb3JpZ2luIH0gPSBuZXcgVVJMKFxuICAgIHVybCxcbiAgICByZXNvbHZlZEJhc2VcbiAgKVxuICBpZiAob3JpZ2luICE9PSBnbG9iYWxCYXNlLm9yaWdpbikge1xuICAgIHRocm93IG5ldyBFcnJvcihgaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCwgcm91dGVyIHJlY2VpdmVkICR7dXJsfWApXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcygpIHt9XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImV4cG9ydCBpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBzY3JpcHRMb2FkZXI/OiBhbnlbXVxuICBpc1ByZXZpZXc/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBkZWZlcj86IHN0cmluZ1tdOyBlYWdlcj86IGFueVtdIH1cbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBkb21haW4gfSBmcm9tICdsaWIvY29uZmlnJ1xyXG5pbXBvcnQgeyByZXNvbHZlTm90aW9uUGFnZSB9IGZyb20gJ2xpYi9yZXNvbHZlLW5vdGlvbi1wYWdlJ1xyXG5pbXBvcnQgeyBOb3Rpb25QYWdlIH0gZnJvbSAnY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCByZXNvbHZlTm90aW9uUGFnZShkb21haW4pXHJcblxyXG4gICAgcmV0dXJuIHsgcHJvcHMsIHJldmFsaWRhdGU6IDEwIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3BhZ2UgZXJyb3InLCBkb21haW4sIGVycilcclxuXHJcbiAgICAvLyB3ZSBkb24ndCB3YW50IHRvIHB1Ymxpc2ggdGhlIGVycm9yIHZlcnNpb24gb2YgdGhpcyBwYWdlLCBzb1xyXG4gICAgLy8gbGV0IG5leHQuanMga25vdyBleHBsaWNpdGx5IHRoYXQgaW5jcmVtZW50YWwgU1NHIGZhaWxlZFxyXG4gICAgdGhyb3cgZXJyXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3Rpb25Eb21haW5QYWdlKHByb3BzKSB7XHJcbiAgcmV0dXJuIDxOb3Rpb25QYWdlIHsuLi5wcm9wc30gLz5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIC8vIHdoZXJlIGl0IGFsbCBzdGFydHMgLS0gdGhlIHNpdGUncyByb290IE5vdGlvbiBwYWdlIChyZXF1aXJlZClcclxuICAgIHJvb3ROb3Rpb25QYWdlSWQ6ICdlMzA2NjBmZjU3OTQ0Y2VmOTdiNWY0NDhhYWE0N2Q3ZicsXHJcblxyXG4gICAgLy8gaWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgcGFnZXMgdG8gYSBzaW5nbGUgbm90aW9uIHdvcmtzcGFjZSAob3B0aW9uYWwpXHJcbiAgICAvLyAodGhpcyBzaG91bGQgYmUgYSBOb3Rpb24gSUQ7IHNlZSB0aGUgZG9jcyBmb3IgaG93IHRvIGV4dHJhY3QgdGhpcylcclxuICAgIHJvb3ROb3Rpb25TcGFjZUlkOiBudWxsLFxyXG5cclxuICAgIC8vIGJhc2ljIHNpdGUgaW5mbyAocmVxdWlyZWQpXHJcbiAgICBuYW1lOiBcIkphY2sgTydSZWdhbiBLZW5ueVwiLFxyXG4gICAgZG9tYWluOiAnamFja29yZWdhbmtlbm55LmNvbScsXHJcbiAgICBhdXRob3I6IFwiSmFjayBPJ1JlZ2FuIEtlbm55XCIsXHJcblxyXG4gICAgLy8gb3BlbiBncmFwaCBtZXRhZGF0YSAob3B0aW9uYWwpXHJcbiAgICBkZXNjcmlwdGlvbjogXCJIaSBJJ20gSmFjayBhbmQgSSBidWlsZCB0aGluZ3NcIixcclxuICAgIHNvY2lhbEltYWdlVGl0bGU6IFwiSmFjayBPJ1JlZ2FuIEtlbm55XCIsXHJcbiAgICBzb2NpYWxJbWFnZVN1YnRpdGxlOiAnSSBidWlsZCBzdHVmZicsXHJcblxyXG4gICAgLy8gc29jaWFsIHVzZXJuYW1lcyAob3B0aW9uYWwpXHJcbiAgICB0d2l0dGVyOiAnamFja29yZWdhbmtlbm55JyxcclxuICAgIGdpdGh1YjogJ2phY2tvcmVnYW5rZW5ueScsXHJcbiAgICBsaW5rZWRpbjogJ2phY2tvcmVnYW5rZW5ueScsXHJcbiAgICBlbWFpbDogJ21haWx0bzpqYWNrb3JlZ2Fua2VubnlAZ21haWwuY29tJyxcclxuXHJcbiAgICAvLyBkZWZhdWx0IG5vdGlvbiBpY29uIGFuZCBjb3ZlciBpbWFnZXMgZm9yIHNpdGUtd2lkZSBjb25zaXN0ZW5jeSAob3B0aW9uYWwpXHJcbiAgICAvLyBwYWdlLXNwZWNpZmljIHZhbHVlcyB3aWxsIG92ZXJyaWRlIHRoZXNlIHNpdGUtd2lkZSBkZWZhdWx0c1xyXG4gICAgZGVmYXVsdFBhZ2VJY29uOiBudWxsLFxyXG4gICAgZGVmYXVsdFBhZ2VDb3ZlcjogbnVsbCxcclxuICAgIGRlZmF1bHRQYWdlQ292ZXJQb3NpdGlvbjogMC41LFxyXG5cclxuICAgIC8vIGltYWdlIENETiBob3N0IHRvIHByb3h5IGFsbCBpbWFnZSByZXF1ZXN0cyB0aHJvdWdoIChvcHRpb25hbClcclxuICAgIC8vIE5PVEU6IHRoaXMgcmVxdWlyZXMgeW91IHRvIHNldCB1cCBhbiBleHRlcm5hbCBpbWFnZSBwcm94eVxyXG4gICAgaW1hZ2VDRE5Ib3N0OiBudWxsLFxyXG5cclxuICAgIC8vIFV0dGVyYW5jLmVzIGNvbW1lbnRzIHZpYSBHaXRIdWIgaXNzdWUgY29tbWVudHMgKG9wdGlvbmFsKVxyXG4gICAgdXR0ZXJhbmNlc0dpdEh1YlJlcG86IG51bGwsXHJcblxyXG4gICAgLy8gd2hldGhlciBvciBub3QgdG8gZW5hYmxlIHN1cHBvcnQgZm9yIExRSVAgcHJldmlldyBpbWFnZXMgKG9wdGlvbmFsKVxyXG4gICAgLy8gTk9URTogdGhpcyByZXF1aXJlcyB5b3UgdG8gc2V0IHVwIEdvb2dsZSBGaXJlYmFzZSBhbmQgYWRkIHRoZSBlbnZpcm9ubWVudFxyXG4gICAgLy8gdmFyaWFibGVzIHNwZWNpZmllZCBpbiAuZW52LmV4YW1wbGVcclxuICAgIGlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQ6IGZhbHNlLFxyXG5cclxuICAgIC8vIG1hcCBvZiBub3Rpb24gcGFnZSBJRHMgdG8gVVJMIHBhdGhzIChvcHRpb25hbClcclxuICAgIC8vIGFueSBwYWdlcyBkZWZpbmVkIGhlcmUgd2lsbCBvdmVycmlkZSB0aGVpciBkZWZhdWx0IFVSTCBwYXRoc1xyXG4gICAgLy8gZXhhbXBsZTpcclxuICAgIC8vXHJcbiAgICAvLyBwYWdlVXJsT3ZlcnJpZGVzOiB7XHJcbiAgICAvLyAgICcvZm9vJzogJzA2N2RkNzE5YTkxMjQ3MWVhOWEzYWMxMDcxMGU3ZmRmJyxcclxuICAgIC8vICAgJy9iYXInOiAnMGJlNmVmY2U5ZGFmNDI2ODhmNjVjNzZiODlmOGViMjcnXHJcbiAgICAvLyB9XHJcbiAgICBwYWdlVXJsT3ZlcnJpZGVzOiBudWxsXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ29vZ2xlLWNsb3VkL2ZpcmVzdG9yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYW5nZXJvdXNseS1zZXQtaHRtbC1jb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3Rpb24tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlvbi11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwLW1hcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwLW1lbW9pemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9keS1jbGFzc25hbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW81XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW5vdGlvbi14XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0YXRpYy10d2VldHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdGF0aWMtdHdlZXRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVzZS1kYXJrLW1vZGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==