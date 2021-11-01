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

/***/ "./lib/bootstrap-client.ts":
/*!*********************************!*\
  !*** ./lib/bootstrap-client.ts ***!
  \*********************************/
/*! exports provided: bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
function bootstrap() {
  console.log(`

████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗████████╗██╗██╗   ██╗███████╗    ██████╗ ███████╗
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║╚══██╔══╝██║██║   ██║██╔════╝    ██╔══██╗██╔════╝
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║   ██║   ██║██║   ██║█████╗      ██████╔╝███████╗
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║   ██║   ██║╚██╗ ██╔╝██╔══╝      ██╔══██╗╚════██║
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║   ██║   ██║ ╚████╔╝ ███████╗    ██████╔╝███████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝   ╚═╝   ╚═╝  ╚═══╝  ╚══════╝    ╚═════╝ ╚══════╝
                                                                                               
   This site is built using Notion, Next.js, and https://github.com/NotionX/react-notion-x.
`);
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

/***/ "./node_modules/prismjs/themes/prism-coy.css":
/*!***************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-coy.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-notion-x/src/styles.css":
/*!****************************************************!*\
  !*** ./node_modules/react-notion-x/src/styles.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-static-tweets/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-static-tweets/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/global.css */ "./styles/global.css");
/* harmony import */ var styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_global_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notion-x/src/styles.css */ "./node_modules/react-notion-x/src/styles.css");
/* harmony import */ var react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notion_x_src_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs_themes_prism_coy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs/themes/prism-coy.css */ "./node_modules/prismjs/themes/prism-coy.css");
/* harmony import */ var prismjs_themes_prism_coy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_coy_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_static_tweets_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-static-tweets/styles.css */ "./node_modules/react-static-tweets/styles.css");
/* harmony import */ var react_static_tweets_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_static_tweets_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styles_notion_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/notion.css */ "./styles/notion.css");
/* harmony import */ var styles_notion_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styles_notion_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/prism-theme.css */ "./styles/prism-theme.css");
/* harmony import */ var styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-markup */ "prismjs/components/prism-markup");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "prismjs/components/prism-javascript");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "prismjs/components/prism-typescript");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-bash */ "prismjs/components/prism-bash");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lib_bootstrap_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/bootstrap-client */ "./lib/bootstrap-client.ts");
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/config */ "./lib/config.ts");
/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! fathom-client */ "fathom-client");
/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(fathom_client__WEBPACK_IMPORTED_MODULE_16__);

var _jsxFileName = "B:\\jacko\\Documents\\GitHub\\notionsite\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// global styles shared across the entire site
 // core styles shared by all of react-notion-x (required)

 // used for code syntax highlighting (optional)

 // this might be better for dark mode
// import 'prismjs/themes/prism-okaidia.css'
// used for collection views selector (optional)
// TODO: re-add if we enable collection view dropdowns
// import 'rc-dropdown/assets/index.css'
// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'
// core styles for static tweet renderer (optional)

 // global style overrides for notion

 // global style overrides for prism theme (optional)

 // here we're bringing in any languages we want to support for
// syntax highlighting via Notion's Code block












if (false) {}

function App({
  Component,
  pageProps
}) {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  react__WEBPACK_IMPORTED_MODULE_12___default.a.useEffect(() => {
    if (lib_config__WEBPACK_IMPORTED_MODULE_15__["fathomId"]) {
      fathom_client__WEBPACK_IMPORTED_MODULE_16__["load"](lib_config__WEBPACK_IMPORTED_MODULE_15__["fathomId"], lib_config__WEBPACK_IMPORTED_MODULE_15__["fathomConfig"]);

      function onRouteChangeComplete() {
        fathom_client__WEBPACK_IMPORTED_MODULE_16__["trackPageview"]();
      }

      router.events.on('routeChangeComplete', onRouteChangeComplete);
      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete);
      };
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
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

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/notion.css":
/*!***************************!*\
  !*** ./styles/notion.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/prism-theme.css":
/*!********************************!*\
  !*** ./styles/prism-theme.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "fathom-client":
/*!********************************!*\
  !*** external "fathom-client" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fathom-client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "notion-utils":
/*!*******************************!*\
  !*** external "notion-utils" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("notion-utils");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/components/prism-bash":
/*!************************************************!*\
  !*** external "prismjs/components/prism-bash" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-bash");

/***/ }),

/***/ "prismjs/components/prism-javascript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-javascript" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ "prismjs/components/prism-markup":
/*!**************************************************!*\
  !*** external "prismjs/components/prism-markup" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ "prismjs/components/prism-typescript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-typescript" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-typescript");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2Jvb3RzdHJhcC1jbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9saWIvZ2V0LWNvbmZpZy12YWx1ZS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9zaXRlLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXRob20tY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub3Rpb24tdXRpbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsInJvb3ROb3Rpb25QYWdlSWQiLCJwYXJzZVBhZ2VJZCIsImdldFNpdGVDb25maWciLCJ1dWlkIiwiRXJyb3IiLCJyb290Tm90aW9uU3BhY2VJZCIsInBhZ2VVcmxPdmVycmlkZXMiLCJjbGVhblBhZ2VVcmxNYXAiLCJpbnZlcnNlUGFnZVVybE92ZXJyaWRlcyIsImludmVydFBhZ2VVcmxPdmVycmlkZXMiLCJwYWdlVXJsQWRkaXRpb25zIiwibmFtZSIsImF1dGhvciIsImRvbWFpbiIsImRlc2NyaXB0aW9uIiwidHdpdHRlciIsImdpdGh1YiIsImxpbmtlZGluIiwic29jaWFsSW1hZ2VUaXRsZSIsInNvY2lhbEltYWdlU3VidGl0bGUiLCJkZWZhdWx0UGFnZUljb24iLCJkZWZhdWx0UGFnZUNvdmVyIiwiZGVmYXVsdFBhZ2VDb3ZlclBvc2l0aW9uIiwidXR0ZXJhbmNlc0dpdEh1YlJlcG8iLCJpbWFnZUNETkhvc3QiLCJpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkIiwiaXNEZXYiLCJpbmNsdWRlTm90aW9uSWRJblVybHMiLCJpc1NlcnZlciIsInBvcnQiLCJnZXRFbnYiLCJob3N0IiwiYXBpQmFzZVVybCIsImFwaSIsImNyZWF0ZVByZXZpZXdJbWFnZSIsInNlYXJjaE5vdGlvbiIsInJlbmRlclNvY2lhbEltYWdlIiwicGFnZUlkIiwiZmF0aG9tSWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRkFUSE9NX0lEIiwiZmF0aG9tQ29uZmlnIiwiZXhjbHVkZWREb21haW5zIiwidW5kZWZpbmVkIiwiZGVmYXVsdEVudlZhbHVlRm9yUHJldmlld0ltYWdlU3VwcG9ydCIsImdvb2dsZVByb2plY3RJZCIsImdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHMiLCJnZXRHb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzIiwiZmlyZWJhc2VDb2xsZWN0aW9uSW1hZ2VzIiwiZ29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFsc0Jhc2U2NCIsIkpTT04iLCJwYXJzZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicGFnZVVybE1hcCIsImxhYmVsIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjYyIsInVyaSIsInN0YXJ0c1dpdGgiLCJwYXRoIiwic2xpY2UiLCJyYXdTaXRlQ29uZmlnIiwic2l0ZUNvbmZpZ092ZXJyaWRlcyIsIk5FWFRfUFVCTElDX1NJVEVfQ09ORklHIiwic2l0ZUNvbmZpZyIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJGYXRob20iLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJldmVudHMiLCJvbiIsIm9mZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQU8sU0FBU0EsU0FBVCxHQUFxQjtBQUMxQkMsU0FBTyxDQUFDQyxHQUFSLENBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZFO0FBV0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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ZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcclxuICBjb25zb2xlLmxvZyhgXHJcblxyXG7ilojilojilojilojilojilojilojilojilZfilojilojilojilojilojilojilZcgIOKWiOKWiOKWiOKWiOKWiOKVlyDilojilojilojilZcgICDilojilojilZfilojilojilojilojilojilojilojilZfilojilojilZfilojilojilojilojilojilojilojilojilZfilojilojilZfilojilojilZcgICDilojilojilZfilojilojilojilojilojilojilojilZcgICAg4paI4paI4paI4paI4paI4paI4pWXIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl1xyXG7ilZrilZDilZDilojilojilZTilZDilZDilZ3ilojilojilZTilZDilZDilojilojilZfilojilojilZTilZDilZDilojilojilZfilojilojilojilojilZcgIOKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVneKWiOKWiOKVkeKVmuKVkOKVkOKWiOKWiOKVlOKVkOKVkOKVneKWiOKWiOKVkeKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVnSAgICDilojilojilZTilZDilZDilojilojilZfilojilojilZTilZDilZDilZDilZDilZ1cclxuICAg4paI4paI4pWRICAg4paI4paI4paI4paI4paI4paI4pWU4pWd4paI4paI4paI4paI4paI4paI4paI4pWR4paI4paI4pWU4paI4paI4pWXIOKWiOKWiOKVkeKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWiOKWiOKVkSAgIOKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKWiOKWiOKWiOKVlyAgICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl1xyXG4gICDilojilojilZEgICDilojilojilZTilZDilZDilojilojilZfilojilojilZTilZDilZDilojilojilZHilojilojilZHilZrilojilojilZfilojilojilZHilZrilZDilZDilZDilZDilojilojilZHilojilojilZEgICDilojilojilZEgICDilojilojilZHilZrilojilojilZcg4paI4paI4pWU4pWd4paI4paI4pWU4pWQ4pWQ4pWdICAgICAg4paI4paI4pWU4pWQ4pWQ4paI4paI4pWX4pWa4pWQ4pWQ4pWQ4pWQ4paI4paI4pWRXHJcbiAgIOKWiOKWiOKVkSAgIOKWiOKWiOKVkSAg4paI4paI4pWR4paI4paI4pWRICDilojilojilZHilojilojilZEg4pWa4paI4paI4paI4paI4pWR4paI4paI4paI4paI4paI4paI4paI4pWR4paI4paI4pWRICAg4paI4paI4pWRICAg4paI4paI4pWRIOKVmuKWiOKWiOKWiOKWiOKVlOKVnSDilojilojilojilojilojilojilojilZcgICAg4paI4paI4paI4paI4paI4paI4pWU4pWd4paI4paI4paI4paI4paI4paI4paI4pWRXHJcbiAgIOKVmuKVkOKVnSAgIOKVmuKVkOKVnSAg4pWa4pWQ4pWd4pWa4pWQ4pWdICDilZrilZDilZ3ilZrilZDilZ0gIOKVmuKVkOKVkOKVkOKVneKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVneKVmuKVkOKVnSAgIOKVmuKVkOKVnSAgIOKVmuKVkOKVnSAg4pWa4pWQ4pWQ4pWQ4pWdICDilZrilZDilZDilZDilZDilZDilZDilZ0gICAg4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWdIOKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVnVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICBUaGlzIHNpdGUgaXMgYnVpbHQgdXNpbmcgTm90aW9uLCBOZXh0LmpzLCBhbmQgaHR0cHM6Ly9naXRodWIuY29tL05vdGlvblgvcmVhY3Qtbm90aW9uLXguXHJcbmApXHJcbn1cclxuIiwiLyoqXHJcbiAqIFNpdGUtd2lkZSBhcHAgY29uZmlndXJhdGlvbi5cclxuICpcclxuICogVGhpcyBmaWxlIHB1bGxzIGZyb20gdGhlIHJvb3QgXCJzaXRlLmNvbmZpZy5qc1wiIGFzIHdlbGwgYXMgZW52aXJvbm1lbnQgdmFyaWFibGVzXHJcbiAqIGZvciBvcHRpb25hbCBkZXBlbmVuY2llcy5cclxuICovXHJcblxyXG5pbXBvcnQgeyBwYXJzZVBhZ2VJZCB9IGZyb20gJ25vdGlvbi11dGlscydcclxuaW1wb3J0IHsgZ2V0U2l0ZUNvbmZpZywgZ2V0RW52IH0gZnJvbSAnLi9nZXQtY29uZmlnLXZhbHVlJ1xyXG5pbXBvcnQgeyBQYWdlVXJsT3ZlcnJpZGVzTWFwLCBQYWdlVXJsT3ZlcnJpZGVzSW52ZXJzZU1hcCB9IGZyb20gJy4vdHlwZXMnXHJcblxyXG5leHBvcnQgY29uc3Qgcm9vdE5vdGlvblBhZ2VJZDogc3RyaW5nID0gcGFyc2VQYWdlSWQoXHJcbiAgZ2V0U2l0ZUNvbmZpZygncm9vdE5vdGlvblBhZ2VJZCcpLFxyXG4gIHsgdXVpZDogZmFsc2UgfVxyXG4pXHJcblxyXG5pZiAoIXJvb3ROb3Rpb25QYWdlSWQpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0NvbmZpZyBlcnJvciBpbnZhbGlkIFwicm9vdE5vdGlvblBhZ2VJZFwiJylcclxufVxyXG5cclxuLy8gaWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgcGFnZXMgdG8gYSBzaW5nbGUgbm90aW9uIHdvcmtzcGFjZSAob3B0aW9uYWwpXHJcbmV4cG9ydCBjb25zdCByb290Tm90aW9uU3BhY2VJZDogc3RyaW5nIHwgbnVsbCA9IHBhcnNlUGFnZUlkKFxyXG4gIGdldFNpdGVDb25maWcoJ3Jvb3ROb3Rpb25TcGFjZUlkJywgbnVsbCksXHJcbiAgeyB1dWlkOiB0cnVlIH1cclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VVcmxPdmVycmlkZXMgPSBjbGVhblBhZ2VVcmxNYXAoXHJcbiAgZ2V0U2l0ZUNvbmZpZygncGFnZVVybE92ZXJyaWRlcycsIHt9KSB8fCB7fSxcclxuICAncGFnZVVybE92ZXJyaWRlcydcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGludmVyc2VQYWdlVXJsT3ZlcnJpZGVzID0gaW52ZXJ0UGFnZVVybE92ZXJyaWRlcyhwYWdlVXJsT3ZlcnJpZGVzKVxyXG5cclxuZXhwb3J0IGNvbnN0IHBhZ2VVcmxBZGRpdGlvbnMgPSBjbGVhblBhZ2VVcmxNYXAoXHJcbiAgZ2V0U2l0ZUNvbmZpZygncGFnZVVybEFkZGl0aW9ucycsIHt9KSB8fCB7fSxcclxuICAncGFnZVVybEFkZGl0aW9ucydcclxuKVxyXG5cclxuLy8gZ2VuZXJhbCBzaXRlIGNvbmZpZ1xyXG5leHBvcnQgY29uc3QgbmFtZTogc3RyaW5nID0gZ2V0U2l0ZUNvbmZpZygnbmFtZScpXHJcbmV4cG9ydCBjb25zdCBhdXRob3I6IHN0cmluZyA9IGdldFNpdGVDb25maWcoJ2F1dGhvcicpXHJcbmV4cG9ydCBjb25zdCBkb21haW46IHN0cmluZyA9IGdldFNpdGVDb25maWcoJ2RvbWFpbicpXHJcbmV4cG9ydCBjb25zdCBkZXNjcmlwdGlvbjogc3RyaW5nID0gZ2V0U2l0ZUNvbmZpZygnZGVzY3JpcHRpb24nLCAnTm90aW9uIEJsb2cnKVxyXG5cclxuLy8gc29jaWFsIGFjY291bnRzXHJcbmV4cG9ydCBjb25zdCB0d2l0dGVyOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZygndHdpdHRlcicsIG51bGwpXHJcbmV4cG9ydCBjb25zdCBnaXRodWI6IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKCdnaXRodWInLCBudWxsKVxyXG5leHBvcnQgY29uc3QgbGlua2VkaW46IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKCdsaW5rZWRpbicsIG51bGwpXHJcblxyXG5leHBvcnQgY29uc3Qgc29jaWFsSW1hZ2VUaXRsZTogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoXHJcbiAgJ3NvY2lhbEltYWdlVGl0bGUnLFxyXG4gIG51bGxcclxuKVxyXG5leHBvcnQgY29uc3Qgc29jaWFsSW1hZ2VTdWJ0aXRsZTogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoXHJcbiAgJ3NvY2lhbEltYWdlU3VidGl0bGUnLFxyXG4gIG51bGxcclxuKVxyXG5cclxuLy8gZGVmYXVsdCBub3Rpb24gdmFsdWVzIGZvciBzaXRlLXdpZGUgY29uc2lzdGVuY3kgKG9wdGlvbmFsOyBtYXkgYmUgb3ZlcnJpZGRlbiBvbiBhIHBlci1wYWdlIGJhc2lzKVxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFBhZ2VJY29uOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnZGVmYXVsdFBhZ2VJY29uJyxcclxuICBudWxsXHJcbilcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYWdlQ292ZXI6IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdkZWZhdWx0UGFnZUNvdmVyJyxcclxuICBudWxsXHJcbilcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYWdlQ292ZXJQb3NpdGlvbjogbnVtYmVyID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnZGVmYXVsdFBhZ2VDb3ZlclBvc2l0aW9uJyxcclxuICAwLjVcclxuKVxyXG5cclxuLy8gT3B0aW9uYWwgdXR0ZXJhbmMuZXMgY29tbWVudHMgdmlhIEdpdEh1YiBpc3N1ZSBjb21tZW50c1xyXG5leHBvcnQgY29uc3QgdXR0ZXJhbmNlc0dpdEh1YlJlcG86IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKFxyXG4gICd1dHRlcmFuY2VzR2l0SHViUmVwbycsXHJcbiAgbnVsbFxyXG4pXHJcblxyXG4vLyBPcHRpb25hbCBpbWFnZSBDRE4gaG9zdCB0byBwcm94eSBhbGwgaW1hZ2UgcmVxdWVzdHMgdGhyb3VnaFxyXG5leHBvcnQgY29uc3QgaW1hZ2VDRE5Ib3N0OiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZygnaW1hZ2VDRE5Ib3N0JywgbnVsbClcclxuXHJcbi8vIE9wdGlvbmFsIHdoZXRoZXIgb3Igbm90IHRvIGVuYWJsZSBzdXBwb3J0IGZvciBMUUlQIHByZXZpZXcgaW1hZ2VzXHJcbi8vIChyZXF1aXJlcyBhIEdvb2dsZSBGaXJlYmFzZSBjb2xsZWN0aW9uKVxyXG5leHBvcnQgY29uc3QgaXNQcmV2aWV3SW1hZ2VTdXBwb3J0RW5hYmxlZDogYm9vbGVhbiA9IGdldFNpdGVDb25maWcoXHJcbiAgJ2lzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQnLFxyXG4gIGZhbHNlXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBpc0RldiA9XHJcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgIXByb2Nlc3MuZW52Lk5PREVfRU5WXHJcblxyXG4vLyB3aGVyZSBpdCBhbGwgc3RhcnRzIC0tIHRoZSBzaXRlJ3Mgcm9vdCBOb3Rpb24gcGFnZVxyXG5leHBvcnQgY29uc3QgaW5jbHVkZU5vdGlvbklkSW5VcmxzOiBib29sZWFuID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnaW5jbHVkZU5vdGlvbklkSW5VcmxzJyxcclxuICAhIWlzRGV2XHJcbilcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmV4cG9ydCBjb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnXHJcblxyXG5leHBvcnQgY29uc3QgcG9ydCA9IGdldEVudignUE9SVCcsICczMDAwJylcclxuZXhwb3J0IGNvbnN0IGhvc3QgPSBpc0RldiA/IGBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH1gIDogYGh0dHBzOi8vJHtkb21haW59YFxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaUJhc2VVcmwgPSBgJHtob3N0fS9hcGlgXHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0ge1xyXG4gIGNyZWF0ZVByZXZpZXdJbWFnZTogYCR7YXBpQmFzZVVybH0vY3JlYXRlLXByZXZpZXctaW1hZ2VgLFxyXG4gIHNlYXJjaE5vdGlvbjogYCR7YXBpQmFzZVVybH0vc2VhcmNoLW5vdGlvbmAsXHJcbiAgcmVuZGVyU29jaWFsSW1hZ2U6IChwYWdlSWQpID0+IGAke2FwaUJhc2VVcmx9L3JlbmRlci1zb2NpYWwtaW1hZ2UvJHtwYWdlSWR9YFxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgZmF0aG9tSWQgPSBpc0RldiA/IG51bGwgOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GQVRIT01fSURcclxuXHJcbmV4cG9ydCBjb25zdCBmYXRob21Db25maWcgPSBmYXRob21JZFxyXG4gID8ge1xyXG4gICAgICBleGNsdWRlZERvbWFpbnM6IFsnbG9jYWxob3N0JywgJ2xvY2FsaG9zdDozMDAwJ11cclxuICAgIH1cclxuICA6IHVuZGVmaW5lZFxyXG5cclxuY29uc3QgZGVmYXVsdEVudlZhbHVlRm9yUHJldmlld0ltYWdlU3VwcG9ydCA9XHJcbiAgaXNQcmV2aWV3SW1hZ2VTdXBwb3J0RW5hYmxlZCAmJiBpc1NlcnZlciA/IHVuZGVmaW5lZCA6IG51bGxcclxuXHJcbmV4cG9ydCBjb25zdCBnb29nbGVQcm9qZWN0SWQgPSBnZXRFbnYoXHJcbiAgJ0dDTE9VRF9QUk9KRUNUJyxcclxuICBkZWZhdWx0RW52VmFsdWVGb3JQcmV2aWV3SW1hZ2VTdXBwb3J0XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBnb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzID0gZ2V0R29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFscygpXHJcblxyXG5leHBvcnQgY29uc3QgZmlyZWJhc2VDb2xsZWN0aW9uSW1hZ2VzID0gZ2V0RW52KFxyXG4gICdGSVJFQkFTRV9DT0xMRUNUSU9OX0lNQUdFUycsXHJcbiAgZGVmYXVsdEVudlZhbHVlRm9yUHJldmlld0ltYWdlU3VwcG9ydFxyXG4pXHJcblxyXG4vLyB0aGlzIGhhY2sgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgdmVyY2VsIGRvZXNuJ3Qgc3VwcG9ydCBzZWNyZXQgZmlsZXMgc28gd2UgbmVlZCB0byBlbmNvZGUgb3VyIGdvb2dsZVxyXG4vLyBjcmVkZW50aWFscyBhIGJhc2U2NC1lbmNvZGVkIHN0cmluZyBvZiB0aGUgSlNPTi1pZmllZCBjb250ZW50XHJcbmZ1bmN0aW9uIGdldEdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHMoKSB7XHJcbiAgaWYgKCFpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkIHx8ICFpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBnb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzQmFzZTY0ID0gZ2V0RW52KFxyXG4gICAgICAnR09PR0xFX0FQUExJQ0FUSU9OX0NSRURFTlRJQUxTJyxcclxuICAgICAgZGVmYXVsdEVudlZhbHVlRm9yUHJldmlld0ltYWdlU3VwcG9ydFxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiBKU09OLnBhcnNlKFxyXG4gICAgICBCdWZmZXIuZnJvbShnb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzQmFzZTY0LCAnYmFzZTY0JykudG9TdHJpbmcoKVxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihcclxuICAgICAgJ0ZpcmViYXNlIGNvbmZpZyBlcnJvcjogaW52YWxpZCBcIkdPT0dMRV9BUFBMSUNBVElPTl9DUkVERU5USUFMU1wiIHNob3VsZCBiZSBiYXNlNjQtZW5jb2RlZCBKU09OXFxuJ1xyXG4gICAgKVxyXG5cclxuICAgIHRocm93IGVyclxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5QYWdlVXJsTWFwKFxyXG4gIHBhZ2VVcmxNYXA6IFBhZ2VVcmxPdmVycmlkZXNNYXAsXHJcbiAgbGFiZWw6IHN0cmluZ1xyXG4pOiBQYWdlVXJsT3ZlcnJpZGVzTWFwIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMocGFnZVVybE1hcCkucmVkdWNlKChhY2MsIHVyaSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUlkID0gcGFnZVVybE1hcFt1cmldXHJcbiAgICBjb25zdCB1dWlkID0gcGFyc2VQYWdlSWQocGFnZUlkLCB7IHV1aWQ6IGZhbHNlIH0pXHJcblxyXG4gICAgaWYgKCF1dWlkKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCAke2xhYmVsfSBwYWdlIGlkIFwiJHtwYWdlSWR9XCJgKVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdXJpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyAke2xhYmVsfSB2YWx1ZSBmb3IgcGFnZSBcIiR7cGFnZUlkfVwiYClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVyaS5zdGFydHNXaXRoKCcvJykpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgIGBJbnZhbGlkICR7bGFiZWx9IHZhbHVlIGZvciBwYWdlIFwiJHtwYWdlSWR9XCI6IHZhbHVlIFwiJHt1cml9XCIgc2hvdWxkIGJlIGEgcmVsYXRpdmUgVVJJIHRoYXQgc3RhcnRzIHdpdGggXCIvXCJgXHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXRoID0gdXJpLnNsaWNlKDEpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYWNjLFxyXG4gICAgICBbcGF0aF06IHV1aWRcclxuICAgIH1cclxuICB9LCB7fSlcclxufVxyXG5cclxuZnVuY3Rpb24gaW52ZXJ0UGFnZVVybE92ZXJyaWRlcyhcclxuICBwYWdlVXJsT3ZlcnJpZGVzOiBQYWdlVXJsT3ZlcnJpZGVzTWFwXHJcbik6IFBhZ2VVcmxPdmVycmlkZXNJbnZlcnNlTWFwIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMocGFnZVVybE92ZXJyaWRlcykucmVkdWNlKChhY2MsIHVyaSkgPT4ge1xyXG4gICAgY29uc3QgcGFnZUlkID0gcGFnZVVybE92ZXJyaWRlc1t1cmldXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4uYWNjLFxyXG4gICAgICBbcGFnZUlkXTogdXJpXHJcbiAgICB9XHJcbiAgfSwge30pXHJcbn1cclxuIiwiaW1wb3J0IHJhd1NpdGVDb25maWcgZnJvbSAnLi4vc2l0ZS5jb25maWcnXHJcblxyXG5pZiAoIXJhd1NpdGVDb25maWcpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYENvbmZpZyBlcnJvcjogaW52YWxpZCBzaXRlLmNvbmZpZy5qc2ApXHJcbn1cclxuXHJcbi8vIFRPRE86IGFsbG93IGVudmlyb25tZW50IHZhcmlhYmxlcyB0byBvdmVycmlkZSBzaXRlLmNvbmZpZy5qc1xyXG5sZXQgc2l0ZUNvbmZpZ092ZXJyaWRlc1xyXG5cclxudHJ5IHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0lURV9DT05GSUcpIHtcclxuICAgIHNpdGVDb25maWdPdmVycmlkZXMgPSBKU09OLnBhcnNlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfQ09ORklHKVxyXG4gIH1cclxufSBjYXRjaCAoZXJyKSB7XHJcbiAgY29uc29sZS5lcnJvcignSW52YWxpZCBjb25maWcgXCJORVhUX1BVQkxJQ19TSVRFX0NPTkZJR1wiIGZhaWxlZCB0byBwYXJzZScpXHJcbiAgdGhyb3cgZXJyXHJcbn1cclxuXHJcbmNvbnN0IHNpdGVDb25maWcgPSB7XHJcbiAgLi4ucmF3U2l0ZUNvbmZpZyxcclxuICAuLi5zaXRlQ29uZmlnT3ZlcnJpZGVzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaXRlQ29uZmlnPFQ+KGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBUKTogVCB7XHJcbiAgY29uc3QgdmFsdWUgPSBzaXRlQ29uZmlnW2tleV1cclxuXHJcbiAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlXHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoYENvbmZpZyBlcnJvcjogbWlzc2luZyByZXF1aXJlZCBzaXRlIGNvbmZpZyB2YWx1ZSBcIiR7a2V5fVwiYClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEVudihcclxuICBrZXk6IHN0cmluZyxcclxuICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcsXHJcbiAgZW52ID0gcHJvY2Vzcy5lbnZcclxuKTogc3RyaW5nIHtcclxuICBjb25zdCB2YWx1ZSA9IGVudltrZXldXHJcblxyXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICB9XHJcblxyXG4gIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKGBDb25maWcgZXJyb3I6IG1pc3NpbmcgcmVxdWlyZWQgZW52IHZhcmlhYmxlIFwiJHtrZXl9XCJgKVxyXG59XHJcbiIsIi8vIGdsb2JhbCBzdHlsZXMgc2hhcmVkIGFjcm9zcyB0aGUgZW50aXJlIHNpdGVcclxuaW1wb3J0ICdzdHlsZXMvZ2xvYmFsLmNzcydcclxuXHJcbi8vIGNvcmUgc3R5bGVzIHNoYXJlZCBieSBhbGwgb2YgcmVhY3Qtbm90aW9uLXggKHJlcXVpcmVkKVxyXG5pbXBvcnQgJ3JlYWN0LW5vdGlvbi14L3NyYy9zdHlsZXMuY3NzJ1xyXG5cclxuLy8gdXNlZCBmb3IgY29kZSBzeW50YXggaGlnaGxpZ2h0aW5nIChvcHRpb25hbClcclxuaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS1jb3kuY3NzJ1xyXG5cclxuLy8gdGhpcyBtaWdodCBiZSBiZXR0ZXIgZm9yIGRhcmsgbW9kZVxyXG4vLyBpbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLW9rYWlkaWEuY3NzJ1xyXG5cclxuLy8gdXNlZCBmb3IgY29sbGVjdGlvbiB2aWV3cyBzZWxlY3RvciAob3B0aW9uYWwpXHJcbi8vIFRPRE86IHJlLWFkZCBpZiB3ZSBlbmFibGUgY29sbGVjdGlvbiB2aWV3IGRyb3Bkb3duc1xyXG4vLyBpbXBvcnQgJ3JjLWRyb3Bkb3duL2Fzc2V0cy9pbmRleC5jc3MnXHJcblxyXG4vLyB1c2VkIGZvciByZW5kZXJpbmcgZXF1YXRpb25zIChvcHRpb25hbClcclxuLy8gaW1wb3J0ICdrYXRleC9kaXN0L2thdGV4Lm1pbi5jc3MnXHJcblxyXG4vLyBjb3JlIHN0eWxlcyBmb3Igc3RhdGljIHR3ZWV0IHJlbmRlcmVyIChvcHRpb25hbClcclxuaW1wb3J0ICdyZWFjdC1zdGF0aWMtdHdlZXRzL3N0eWxlcy5jc3MnXHJcblxyXG4vLyBnbG9iYWwgc3R5bGUgb3ZlcnJpZGVzIGZvciBub3Rpb25cclxuaW1wb3J0ICdzdHlsZXMvbm90aW9uLmNzcydcclxuXHJcbi8vIGdsb2JhbCBzdHlsZSBvdmVycmlkZXMgZm9yIHByaXNtIHRoZW1lIChvcHRpb25hbClcclxuaW1wb3J0ICdzdHlsZXMvcHJpc20tdGhlbWUuY3NzJ1xyXG5cclxuLy8gaGVyZSB3ZSdyZSBicmluZ2luZyBpbiBhbnkgbGFuZ3VhZ2VzIHdlIHdhbnQgdG8gc3VwcG9ydCBmb3JcclxuLy8gc3ludGF4IGhpZ2hsaWdodGluZyB2aWEgTm90aW9uJ3MgQ29kZSBibG9ja1xyXG5pbXBvcnQgJ3ByaXNtanMnXHJcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLW1hcmt1cCdcclxuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdCdcclxuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tdHlwZXNjcmlwdCdcclxuaW1wb3J0ICdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYmFzaCdcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ2xpYi9ib290c3RyYXAtY2xpZW50J1xyXG5pbXBvcnQgeyBmYXRob21JZCwgZmF0aG9tQ29uZmlnIH0gZnJvbSAnbGliL2NvbmZpZydcclxuaW1wb3J0ICogYXMgRmF0aG9tIGZyb20gJ2ZhdGhvbS1jbGllbnQnXHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBib290c3RyYXAoKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChmYXRob21JZCkge1xyXG4gICAgICBGYXRob20ubG9hZChmYXRob21JZCwgZmF0aG9tQ29uZmlnKVxyXG5cclxuICAgICAgZnVuY3Rpb24gb25Sb3V0ZUNoYW5nZUNvbXBsZXRlKCkge1xyXG4gICAgICAgIEZhdGhvbS50cmFja1BhZ2V2aWV3KClcclxuICAgICAgfVxyXG5cclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIG9uUm91dGVDaGFuZ2VDb21wbGV0ZSlcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBvblJvdXRlQ2hhbmdlQ29tcGxldGUpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIC8vIHdoZXJlIGl0IGFsbCBzdGFydHMgLS0gdGhlIHNpdGUncyByb290IE5vdGlvbiBwYWdlIChyZXF1aXJlZClcclxuICAgIHJvb3ROb3Rpb25QYWdlSWQ6ICdlMzA2NjBmZjU3OTQ0Y2VmOTdiNWY0NDhhYWE0N2Q3ZicsXHJcblxyXG4gICAgLy8gaWYgeW91IHdhbnQgdG8gcmVzdHJpY3QgcGFnZXMgdG8gYSBzaW5nbGUgbm90aW9uIHdvcmtzcGFjZSAob3B0aW9uYWwpXHJcbiAgICAvLyAodGhpcyBzaG91bGQgYmUgYSBOb3Rpb24gSUQ7IHNlZSB0aGUgZG9jcyBmb3IgaG93IHRvIGV4dHJhY3QgdGhpcylcclxuICAgIHJvb3ROb3Rpb25TcGFjZUlkOiBudWxsLFxyXG5cclxuICAgIC8vIGJhc2ljIHNpdGUgaW5mbyAocmVxdWlyZWQpXHJcbiAgICBuYW1lOiBcIkphY2sgTydSZWdhbiBLZW5ueVwiLFxyXG4gICAgZG9tYWluOiAnamFja29yZWdhbmtlbm55LmNvbScsXHJcbiAgICBhdXRob3I6IFwiSmFjayBPJ1JlZ2FuIEtlbm55XCIsXHJcblxyXG4gICAgLy8gb3BlbiBncmFwaCBtZXRhZGF0YSAob3B0aW9uYWwpXHJcbiAgICBkZXNjcmlwdGlvbjogXCJIaSBJJ20gSmFjayBhbmQgSSBidWlsZCB0aGluZ3NcIixcclxuICAgIHNvY2lhbEltYWdlVGl0bGU6IFwiSmFjayBPJ1JlZ2FuIEtlbm55XCIsXHJcbiAgICBzb2NpYWxJbWFnZVN1YnRpdGxlOiAnSSBidWlsZCBzdHVmZicsXHJcblxyXG4gICAgLy8gc29jaWFsIHVzZXJuYW1lcyAob3B0aW9uYWwpXHJcbiAgICB0d2l0dGVyOiAnamFja29yZWdhbmtlbm55JyxcclxuICAgIGdpdGh1YjogJ2phY2tvcmVnYW5rZW5ueScsXHJcbiAgICBsaW5rZWRpbjogJ2phY2tvcmVnYW5rZW5ueScsXHJcbiAgICBlbWFpbDogJ21haWx0bzpqYWNrb3JlZ2Fua2VubnlAZ21haWwuY29tJyxcclxuXHJcbiAgICAvLyBkZWZhdWx0IG5vdGlvbiBpY29uIGFuZCBjb3ZlciBpbWFnZXMgZm9yIHNpdGUtd2lkZSBjb25zaXN0ZW5jeSAob3B0aW9uYWwpXHJcbiAgICAvLyBwYWdlLXNwZWNpZmljIHZhbHVlcyB3aWxsIG92ZXJyaWRlIHRoZXNlIHNpdGUtd2lkZSBkZWZhdWx0c1xyXG4gICAgZGVmYXVsdFBhZ2VJY29uOiBudWxsLFxyXG4gICAgZGVmYXVsdFBhZ2VDb3ZlcjogbnVsbCxcclxuICAgIGRlZmF1bHRQYWdlQ292ZXJQb3NpdGlvbjogMC41LFxyXG5cclxuICAgIC8vIGltYWdlIENETiBob3N0IHRvIHByb3h5IGFsbCBpbWFnZSByZXF1ZXN0cyB0aHJvdWdoIChvcHRpb25hbClcclxuICAgIC8vIE5PVEU6IHRoaXMgcmVxdWlyZXMgeW91IHRvIHNldCB1cCBhbiBleHRlcm5hbCBpbWFnZSBwcm94eVxyXG4gICAgaW1hZ2VDRE5Ib3N0OiBudWxsLFxyXG5cclxuICAgIC8vIFV0dGVyYW5jLmVzIGNvbW1lbnRzIHZpYSBHaXRIdWIgaXNzdWUgY29tbWVudHMgKG9wdGlvbmFsKVxyXG4gICAgdXR0ZXJhbmNlc0dpdEh1YlJlcG86IG51bGwsXHJcblxyXG4gICAgLy8gd2hldGhlciBvciBub3QgdG8gZW5hYmxlIHN1cHBvcnQgZm9yIExRSVAgcHJldmlldyBpbWFnZXMgKG9wdGlvbmFsKVxyXG4gICAgLy8gTk9URTogdGhpcyByZXF1aXJlcyB5b3UgdG8gc2V0IHVwIEdvb2dsZSBGaXJlYmFzZSBhbmQgYWRkIHRoZSBlbnZpcm9ubWVudFxyXG4gICAgLy8gdmFyaWFibGVzIHNwZWNpZmllZCBpbiAuZW52LmV4YW1wbGVcclxuICAgIGlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQ6IGZhbHNlLFxyXG5cclxuICAgIC8vIG1hcCBvZiBub3Rpb24gcGFnZSBJRHMgdG8gVVJMIHBhdGhzIChvcHRpb25hbClcclxuICAgIC8vIGFueSBwYWdlcyBkZWZpbmVkIGhlcmUgd2lsbCBvdmVycmlkZSB0aGVpciBkZWZhdWx0IFVSTCBwYXRoc1xyXG4gICAgLy8gZXhhbXBsZTpcclxuICAgIC8vXHJcbiAgICAvLyBwYWdlVXJsT3ZlcnJpZGVzOiB7XHJcbiAgICAvLyAgICcvZm9vJzogJzA2N2RkNzE5YTkxMjQ3MWVhOWEzYWMxMDcxMGU3ZmRmJyxcclxuICAgIC8vICAgJy9iYXInOiAnMGJlNmVmY2U5ZGFmNDI2ODhmNjVjNzZiODlmOGViMjcnXHJcbiAgICAvLyB9XHJcbiAgICBwYWdlVXJsT3ZlcnJpZGVzOiBudWxsXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXRob20tY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlvbi11dGlsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1iYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1qYXZhc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=