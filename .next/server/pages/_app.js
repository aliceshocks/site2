(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/bootstrap-client.ts":
/*!*********************************!*\
  !*** ./lib/bootstrap-client.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bootstrap": () => (/* binding */ bootstrap)
/* harmony export */ });
function bootstrap() {
  console.log(`
  ░░░░░██╗░█████╗░░█████╗░██╗░░██╗  ░█████╗░██╗██████╗░███████╗░██████╗░░█████╗░███╗░░██╗
  ░░░░░██║██╔══██╗██╔══██╗██║░██╔╝  ██╔══██╗╚█║██╔══██╗██╔════╝██╔════╝░██╔══██╗████╗░██║
  ░░░░░██║███████║██║░░╚═╝█████═╝░  ██║░░██║░╚╝██████╔╝█████╗░░██║░░██╗░███████║██╔██╗██║
  ██╗░░██║██╔══██║██║░░██╗██╔═██╗░  ██║░░██║░░░██╔══██╗██╔══╝░░██║░░╚██╗██╔══██║██║╚████║
  ╚█████╔╝██║░░██║╚█████╔╝██║░╚██╗  ╚█████╔╝░░░██║░░██║███████╗╚██████╔╝██║░░██║██║░╚███║
  ░╚════╝░╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝  ░╚════╝░░░░╚═╝░░╚═╝╚══════╝░╚═════╝░╚═╝░░╚═╝╚═╝░░╚══╝
  
  ██╗░░██╗███████╗███╗░░██╗███╗░░██╗██╗░░░██╗
  ██║░██╔╝██╔════╝████╗░██║████╗░██║╚██╗░██╔╝
  █████═╝░█████╗░░██╔██╗██║██╔██╗██║░╚████╔╝░
  ██╔═██╗░██╔══╝░░██║╚████║██║╚████║░░╚██╔╝░░
  ██║░╚██╗███████╗██║░╚███║██║░╚███║░░░██║░░░
  ╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝╚═╝░░╚══╝░░░╚═╝░░░
`);
}

/***/ }),

/***/ "./lib/config.ts":
/*!***********************!*\
  !*** ./lib/config.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootNotionPageId": () => (/* binding */ rootNotionPageId),
/* harmony export */   "rootNotionSpaceId": () => (/* binding */ rootNotionSpaceId),
/* harmony export */   "pageUrlOverrides": () => (/* binding */ pageUrlOverrides),
/* harmony export */   "inversePageUrlOverrides": () => (/* binding */ inversePageUrlOverrides),
/* harmony export */   "pageUrlAdditions": () => (/* binding */ pageUrlAdditions),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "author": () => (/* binding */ author),
/* harmony export */   "domain": () => (/* binding */ domain),
/* harmony export */   "description": () => (/* binding */ description),
/* harmony export */   "twitter": () => (/* binding */ twitter),
/* harmony export */   "github": () => (/* binding */ github),
/* harmony export */   "linkedin": () => (/* binding */ linkedin),
/* harmony export */   "socialImageTitle": () => (/* binding */ socialImageTitle),
/* harmony export */   "socialImageSubtitle": () => (/* binding */ socialImageSubtitle),
/* harmony export */   "defaultPageIcon": () => (/* binding */ defaultPageIcon),
/* harmony export */   "defaultPageCover": () => (/* binding */ defaultPageCover),
/* harmony export */   "defaultPageCoverPosition": () => (/* binding */ defaultPageCoverPosition),
/* harmony export */   "utterancesGitHubRepo": () => (/* binding */ utterancesGitHubRepo),
/* harmony export */   "imageCDNHost": () => (/* binding */ imageCDNHost),
/* harmony export */   "isPreviewImageSupportEnabled": () => (/* binding */ isPreviewImageSupportEnabled),
/* harmony export */   "isDev": () => (/* binding */ isDev),
/* harmony export */   "includeNotionIdInUrls": () => (/* binding */ includeNotionIdInUrls),
/* harmony export */   "isServer": () => (/* binding */ isServer),
/* harmony export */   "port": () => (/* binding */ port),
/* harmony export */   "host": () => (/* binding */ host),
/* harmony export */   "apiBaseUrl": () => (/* binding */ apiBaseUrl),
/* harmony export */   "api": () => (/* binding */ api),
/* harmony export */   "fathomId": () => (/* binding */ fathomId),
/* harmony export */   "fathomConfig": () => (/* binding */ fathomConfig),
/* harmony export */   "googleProjectId": () => (/* binding */ googleProjectId),
/* harmony export */   "googleApplicationCredentials": () => (/* binding */ googleApplicationCredentials),
/* harmony export */   "firebaseCollectionImages": () => (/* binding */ firebaseCollectionImages)
/* harmony export */ });
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notion-utils */ "notion-utils");
/* harmony import */ var notion_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(notion_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _get_config_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-config-value */ "./lib/get-config-value.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Site-wide app configuration.
 *
 * This file pulls from the root "site.config.js" as well as environment variables
 * for optional depenencies.
 */


const rootNotionPageId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('rootNotionPageId'), {
  uuid: false
});

if (!rootNotionPageId) {
  throw new Error('Config error invalid "rootNotionPageId"');
} // if you want to restrict pages to a single notion workspace (optional)


const rootNotionSpaceId = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('rootNotionSpaceId', null), {
  uuid: true
});
const pageUrlOverrides = cleanPageUrlMap((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('pageUrlOverrides', {}) || {}, 'pageUrlOverrides');
const inversePageUrlOverrides = invertPageUrlOverrides(pageUrlOverrides);
const pageUrlAdditions = cleanPageUrlMap((0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('pageUrlAdditions', {}) || {}, 'pageUrlAdditions'); // general site config

const name = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('name');
const author = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('author');
const domain = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('domain');
const description = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('description', 'Notion Blog'); // social accounts

const twitter = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('twitter', null);
const github = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('github', null);
const linkedin = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('linkedin', null);
const socialImageTitle = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('socialImageTitle', null);
const socialImageSubtitle = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('socialImageSubtitle', null); // default notion values for site-wide consistency (optional; may be overridden on a per-page basis)

const defaultPageIcon = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('defaultPageIcon', null);
const defaultPageCover = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('defaultPageCover', null);
const defaultPageCoverPosition = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('defaultPageCoverPosition', 0.5); // Optional utteranc.es comments via GitHub issue comments

const utterancesGitHubRepo = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('utterancesGitHubRepo', null); // Optional image CDN host to proxy all image requests through

const imageCDNHost = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('imageCDNHost', null); // Optional whether or not to enable support for LQIP preview images
// (requires a Google Firebase collection)

const isPreviewImageSupportEnabled = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('isPreviewImageSupportEnabled', false);
const isDev =  true || 0; // where it all starts -- the site's root Notion page

const includeNotionIdInUrls = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getSiteConfig)('includeNotionIdInUrls', !!isDev); // ----------------------------------------------------------------------------

const isServer = true;
const port = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getEnv)('PORT', '3000');
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
const googleProjectId = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getEnv)('GCLOUD_PROJECT', defaultEnvValueForPreviewImageSupport);
const googleApplicationCredentials = getGoogleApplicationCredentials();
const firebaseCollectionImages = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getEnv)('FIREBASE_COLLECTION_IMAGES', defaultEnvValueForPreviewImageSupport); // this hack is necessary because vercel doesn't support secret files so we need to encode our google
// credentials a base64-encoded string of the JSON-ified content

function getGoogleApplicationCredentials() {
  if (!isPreviewImageSupportEnabled || !isServer) {
    return null;
  }

  try {
    const googleApplicationCredentialsBase64 = (0,_get_config_value__WEBPACK_IMPORTED_MODULE_1__.getEnv)('GOOGLE_APPLICATION_CREDENTIALS', defaultEnvValueForPreviewImageSupport);
    return JSON.parse(Buffer.from(googleApplicationCredentialsBase64, 'base64').toString());
  } catch (err) {
    console.error('Firebase config error: invalid "GOOGLE_APPLICATION_CREDENTIALS" should be base64-encoded JSON\n');
    throw err;
  }
}

function cleanPageUrlMap(pageUrlMap, label) {
  return Object.keys(pageUrlMap).reduce((acc, uri) => {
    const pageId = pageUrlMap[uri];
    const uuid = (0,notion_utils__WEBPACK_IMPORTED_MODULE_0__.parsePageId)(pageId, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSiteConfig": () => (/* binding */ getSiteConfig),
/* harmony export */   "getEnv": () => (/* binding */ getEnv)
/* harmony export */ });
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../site.config */ "./site.config.js");
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



if (!(_site_config__WEBPACK_IMPORTED_MODULE_0___default())) {
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

const siteConfig = _objectSpread(_objectSpread({}, (_site_config__WEBPACK_IMPORTED_MODULE_0___default())), siteConfigOverrides);

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styles/global.css */ "./styles/global.css");
/* harmony import */ var styles_global_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styles_global_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismjs_themes_prism_coy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/themes/prism-coy.css */ "./node_modules/prismjs/themes/prism-coy.css");
/* harmony import */ var prismjs_themes_prism_coy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_coy_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static_tweets_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-static-tweets/styles.css */ "./node_modules/react-static-tweets/styles.css");
/* harmony import */ var react_static_tweets_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static_tweets_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styles_notion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles/notion.css */ "./styles/notion.css");
/* harmony import */ var styles_notion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles_notion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/prism-theme.css */ "./styles/prism-theme.css");
/* harmony import */ var styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styles_prism_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs */ "prismjs");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-markup */ "prismjs/components/prism-markup");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "prismjs/components/prism-javascript");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "prismjs/components/prism-typescript");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-bash */ "prismjs/components/prism-bash");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lib_bootstrap_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/bootstrap-client */ "./lib/bootstrap-client.ts");
/* harmony import */ var lib_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/config */ "./lib/config.ts");
/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! fathom-client */ "fathom-client");
/* harmony import */ var fathom_client__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fathom_client__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "B:\\jacko\\Documents\\GitHub\\site2\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
  react__WEBPACK_IMPORTED_MODULE_10___default().useEffect(() => {
    if (lib_config__WEBPACK_IMPORTED_MODULE_13__.fathomId) {
      fathom_client__WEBPACK_IMPORTED_MODULE_14__.load(lib_config__WEBPACK_IMPORTED_MODULE_13__.fathomId, lib_config__WEBPACK_IMPORTED_MODULE_13__.fathomConfig);

      function onRouteChangeComplete() {
        fathom_client__WEBPACK_IMPORTED_MODULE_14__.trackPageview();
      }

      router.events.on('routeChangeComplete', onRouteChangeComplete);
      return () => {
        router.events.off('routeChangeComplete', onRouteChangeComplete);
      };
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
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
/***/ ((module) => {

module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '7992ab56634e4c0181be4d6b8d1d9064',
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID;     see the docs for how to extract this)
  rootNotionSpaceId: null,
  // basic site info (required)
  name: "Alice Shaughnessy",
  domain: 'alicecshocks.com',
  author: "Jack O'Regan Kenny",
  // open graph metadata (optional)
  description: "Alice Shaughnessy",
  socialImageTitle: "AliceShaughnessy",
  socialImageSubtitle: 'I build stuff',
  // social usernames (optional)
  twitter: 'AliceShaugh',
  github: '',
  linkedin: 'aliceshaughnessy',
  email: 'mailto:shocks.alice@gmail.com',
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

/***/ "./node_modules/prismjs/themes/prism-coy.css":
/*!***************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-coy.css ***!
  \***************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-static-tweets/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-static-tweets/styles.css ***!
  \*****************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/notion.css":
/*!***************************!*\
  !*** ./styles/notion.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "./styles/prism-theme.css":
/*!********************************!*\
  !*** ./styles/prism-theme.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "fathom-client":
/*!********************************!*\
  !*** external "fathom-client" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fathom-client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "notion-utils":
/*!*******************************!*\
  !*** external "notion-utils" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("notion-utils");

/***/ }),

/***/ "prismjs":
/*!**************************!*\
  !*** external "prismjs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs");

/***/ }),

/***/ "prismjs/components/prism-bash":
/*!************************************************!*\
  !*** external "prismjs/components/prism-bash" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/components/prism-bash");

/***/ }),

/***/ "prismjs/components/prism-javascript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-javascript" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ "prismjs/components/prism-markup":
/*!**************************************************!*\
  !*** external "prismjs/components/prism-markup" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/components/prism-markup");

/***/ }),

/***/ "prismjs/components/prism-typescript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-typescript" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("prismjs/components/prism-typescript");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBRSxFQUFBQSw0QkFBNEIsRUFBRSxLQXhDakI7QUEwQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBbkIsRUFBQUEsZ0JBQWdCLEVBQUU7QUFsREwsQ0FBakI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QU1BQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGlvbnNpdGUvLi9saWIvYm9vdHN0cmFwLWNsaWVudC50cyIsIndlYnBhY2s6Ly9ub3Rpb25zaXRlLy4vbGliL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9ub3Rpb25zaXRlLy4vbGliL2dldC1jb25maWctdmFsdWUudHMiLCJ3ZWJwYWNrOi8vbm90aW9uc2l0ZS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL25vdGlvbnNpdGUvLi9zaXRlLmNvbmZpZy5qcyIsIndlYnBhY2s6Ly9ub3Rpb25zaXRlLy4vbm9kZV9tb2R1bGVzL3ByaXNtanMvdGhlbWVzL3ByaXNtLWNveS5jc3MiLCJ3ZWJwYWNrOi8vbm90aW9uc2l0ZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGF0aWMtdHdlZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vbm90aW9uc2l0ZS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL25vdGlvbnNpdGUvLi9zdHlsZXMvbm90aW9uLmNzcyIsIndlYnBhY2s6Ly9ub3Rpb25zaXRlLy4vc3R5bGVzL3ByaXNtLXRoZW1lLmNzcyIsIndlYnBhY2s6Ly9ub3Rpb25zaXRlL2V4dGVybmFsIFwiZmF0aG9tLWNsaWVudFwiIiwid2VicGFjazovL25vdGlvbnNpdGUvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25vdGlvbnNpdGUvZXh0ZXJuYWwgXCJub3Rpb24tdXRpbHNcIiIsIndlYnBhY2s6Ly9ub3Rpb25zaXRlL2V4dGVybmFsIFwicHJpc21qc1wiIiwid2VicGFjazovL25vdGlvbnNpdGUvZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYmFzaFwiIiwid2VicGFjazovL25vdGlvbnNpdGUvZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiIiwid2VicGFjazovL25vdGlvbnNpdGUvZXh0ZXJuYWwgXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwXCIiLCJ3ZWJwYWNrOi8vbm90aW9uc2l0ZS9leHRlcm5hbCBcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vbm90aW9uc2l0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbm90aW9uc2l0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgY29uc29sZS5sb2coYFxyXG4gIOKWkeKWkeKWkeKWkeKWkeKWiOKWiOKVl+KWkeKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVl+KAg+KAg+KWkeKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVl1xyXG4gIOKWkeKWkeKWkeKWkeKWkeKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVl+KWiOKWiOKVlOKVkOKVkOKWiOKWiOKVl+KWiOKWiOKVkeKWkeKWiOKWiOKVlOKVneKAg+KAg+KWiOKWiOKVlOKVkOKVkOKWiOKWiOKVl+KVmuKWiOKVkeKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVl+KWiOKWiOKVlOKVkOKVkOKVkOKVkOKVneKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVneKWkeKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVl+KWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKVkVxyXG4gIOKWkeKWkeKWkeKWkeKWkeKWiOKWiOKVkeKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVkeKWiOKWiOKVkeKWkeKWkeKVmuKVkOKVneKWiOKWiOKWiOKWiOKWiOKVkOKVneKWkeKAg+KAg+KWiOKWiOKVkeKWkeKWkeKWiOKWiOKVkeKWkeKVmuKVneKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVkeKWkeKWkeKWiOKWiOKVl+KWkeKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVkeKWiOKWiOKVlOKWiOKWiOKVl+KWiOKWiOKVkVxyXG4gIOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVkeKWiOKWiOKVkeKWkeKWkeKWiOKWiOKVl+KWiOKWiOKVlOKVkOKWiOKWiOKVl+KWkeKAg+KAg+KWiOKWiOKVkeKWkeKWkeKWiOKWiOKVkeKWkeKWkeKWkeKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVl+KWiOKWiOKVlOKVkOKVkOKVneKWkeKWkeKWiOKWiOKVkeKWkeKWkeKVmuKWiOKWiOKVl+KWiOKWiOKVlOKVkOKVkOKWiOKWiOKVkeKWiOKWiOKVkeKVmuKWiOKWiOKWiOKWiOKVkVxyXG4gIOKVmuKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVkeKWkeKWkeKWiOKWiOKVkeKVmuKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVkeKWkeKVmuKWiOKWiOKVl+KAg+KAg+KVmuKWiOKWiOKWiOKWiOKWiOKVlOKVneKWkeKWkeKWkeKWiOKWiOKVkeKWkeKWkeKWiOKWiOKVkeKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KVmuKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVneKWiOKWiOKVkeKWkeKWkeKWiOKWiOKVkeKWiOKWiOKVkeKWkeKVmuKWiOKWiOKWiOKVkVxyXG4gIOKWkeKVmuKVkOKVkOKVkOKVkOKVneKWkeKVmuKVkOKVneKWkeKWkeKVmuKVkOKVneKWkeKVmuKVkOKVkOKVkOKVkOKVneKWkeKVmuKVkOKVneKWkeKWkeKVmuKVkOKVneKAg+KAg+KWkeKVmuKVkOKVkOKVkOKVkOKVneKWkeKWkeKWkeKWkeKVmuKVkOKVneKWkeKWkeKVmuKVkOKVneKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVneKWkeKVmuKVkOKVkOKVkOKVkOKVkOKVneKWkeKVmuKVkOKVneKWkeKWkeKVmuKVkOKVneKVmuKVkOKVneKWkeKWkeKVmuKVkOKVkOKVnVxyXG4gIFxyXG4gIOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVl+KWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVl+KWiOKWiOKVl+KWkeKWkeKWkeKWiOKWiOKVl1xyXG4gIOKWiOKWiOKVkeKWkeKWiOKWiOKVlOKVneKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVneKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKVkeKWiOKWiOKWiOKWiOKVl+KWkeKWiOKWiOKVkeKVmuKWiOKWiOKVl+KWkeKWiOKWiOKVlOKVnVxyXG4gIOKWiOKWiOKWiOKWiOKWiOKVkOKVneKWkeKWiOKWiOKWiOKWiOKWiOKVl+KWkeKWkeKWiOKWiOKVlOKWiOKWiOKVl+KWiOKWiOKVkeKWiOKWiOKVlOKWiOKWiOKVl+KWiOKWiOKVkeKWkeKVmuKWiOKWiOKWiOKWiOKVlOKVneKWkVxyXG4gIOKWiOKWiOKVlOKVkOKWiOKWiOKVl+KWkeKWiOKWiOKVlOKVkOKVkOKVneKWkeKWkeKWiOKWiOKVkeKVmuKWiOKWiOKWiOKWiOKVkeKWiOKWiOKVkeKVmuKWiOKWiOKWiOKWiOKVkeKWkeKWkeKVmuKWiOKWiOKVlOKVneKWkeKWkVxyXG4gIOKWiOKWiOKVkeKWkeKVmuKWiOKWiOKVl+KWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl+KWiOKWiOKVkeKWkeKVmuKWiOKWiOKWiOKVkeKWiOKWiOKVkeKWkeKVmuKWiOKWiOKWiOKVkeKWkeKWkeKWkeKWiOKWiOKVkeKWkeKWkeKWkVxyXG4gIOKVmuKVkOKVneKWkeKWkeKVmuKVkOKVneKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVneKVmuKVkOKVneKWkeKWkeKVmuKVkOKVkOKVneKVmuKVkOKVneKWkeKWkeKVmuKVkOKVkOKVneKWkeKWkeKWkeKVmuKVkOKVneKWkeKWkeKWkVxyXG5gKVxyXG59XHJcbiIsIi8qKlxyXG4gKiBTaXRlLXdpZGUgYXBwIGNvbmZpZ3VyYXRpb24uXHJcbiAqXHJcbiAqIFRoaXMgZmlsZSBwdWxscyBmcm9tIHRoZSByb290IFwic2l0ZS5jb25maWcuanNcIiBhcyB3ZWxsIGFzIGVudmlyb25tZW50IHZhcmlhYmxlc1xyXG4gKiBmb3Igb3B0aW9uYWwgZGVwZW5lbmNpZXMuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgcGFyc2VQYWdlSWQgfSBmcm9tICdub3Rpb24tdXRpbHMnXHJcbmltcG9ydCB7IGdldFNpdGVDb25maWcsIGdldEVudiB9IGZyb20gJy4vZ2V0LWNvbmZpZy12YWx1ZSdcclxuaW1wb3J0IHsgUGFnZVVybE92ZXJyaWRlc01hcCwgUGFnZVVybE92ZXJyaWRlc0ludmVyc2VNYXAgfSBmcm9tICcuL3R5cGVzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvb3ROb3Rpb25QYWdlSWQ6IHN0cmluZyA9IHBhcnNlUGFnZUlkKFxyXG4gIGdldFNpdGVDb25maWcoJ3Jvb3ROb3Rpb25QYWdlSWQnKSxcclxuICB7IHV1aWQ6IGZhbHNlIH1cclxuKVxyXG5cclxuaWYgKCFyb290Tm90aW9uUGFnZUlkKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdDb25maWcgZXJyb3IgaW52YWxpZCBcInJvb3ROb3Rpb25QYWdlSWRcIicpXHJcbn1cclxuXHJcbi8vIGlmIHlvdSB3YW50IHRvIHJlc3RyaWN0IHBhZ2VzIHRvIGEgc2luZ2xlIG5vdGlvbiB3b3Jrc3BhY2UgKG9wdGlvbmFsKVxyXG5leHBvcnQgY29uc3Qgcm9vdE5vdGlvblNwYWNlSWQ6IHN0cmluZyB8IG51bGwgPSBwYXJzZVBhZ2VJZChcclxuICBnZXRTaXRlQ29uZmlnKCdyb290Tm90aW9uU3BhY2VJZCcsIG51bGwpLFxyXG4gIHsgdXVpZDogdHJ1ZSB9XHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlVXJsT3ZlcnJpZGVzID0gY2xlYW5QYWdlVXJsTWFwKFxyXG4gIGdldFNpdGVDb25maWcoJ3BhZ2VVcmxPdmVycmlkZXMnLCB7fSkgfHwge30sXHJcbiAgJ3BhZ2VVcmxPdmVycmlkZXMnXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBpbnZlcnNlUGFnZVVybE92ZXJyaWRlcyA9IGludmVydFBhZ2VVcmxPdmVycmlkZXMocGFnZVVybE92ZXJyaWRlcylcclxuXHJcbmV4cG9ydCBjb25zdCBwYWdlVXJsQWRkaXRpb25zID0gY2xlYW5QYWdlVXJsTWFwKFxyXG4gIGdldFNpdGVDb25maWcoJ3BhZ2VVcmxBZGRpdGlvbnMnLCB7fSkgfHwge30sXHJcbiAgJ3BhZ2VVcmxBZGRpdGlvbnMnXHJcbilcclxuXHJcbi8vIGdlbmVyYWwgc2l0ZSBjb25maWdcclxuZXhwb3J0IGNvbnN0IG5hbWU6IHN0cmluZyA9IGdldFNpdGVDb25maWcoJ25hbWUnKVxyXG5leHBvcnQgY29uc3QgYXV0aG9yOiBzdHJpbmcgPSBnZXRTaXRlQ29uZmlnKCdhdXRob3InKVxyXG5leHBvcnQgY29uc3QgZG9tYWluOiBzdHJpbmcgPSBnZXRTaXRlQ29uZmlnKCdkb21haW4nKVxyXG5leHBvcnQgY29uc3QgZGVzY3JpcHRpb246IHN0cmluZyA9IGdldFNpdGVDb25maWcoJ2Rlc2NyaXB0aW9uJywgJ05vdGlvbiBCbG9nJylcclxuXHJcbi8vIHNvY2lhbCBhY2NvdW50c1xyXG5leHBvcnQgY29uc3QgdHdpdHRlcjogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoJ3R3aXR0ZXInLCBudWxsKVxyXG5leHBvcnQgY29uc3QgZ2l0aHViOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZygnZ2l0aHViJywgbnVsbClcclxuZXhwb3J0IGNvbnN0IGxpbmtlZGluOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZygnbGlua2VkaW4nLCBudWxsKVxyXG5cclxuZXhwb3J0IGNvbnN0IHNvY2lhbEltYWdlVGl0bGU6IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdzb2NpYWxJbWFnZVRpdGxlJyxcclxuICBudWxsXHJcbilcclxuZXhwb3J0IGNvbnN0IHNvY2lhbEltYWdlU3VidGl0bGU6IHN0cmluZyB8IG51bGwgPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdzb2NpYWxJbWFnZVN1YnRpdGxlJyxcclxuICBudWxsXHJcbilcclxuXHJcbi8vIGRlZmF1bHQgbm90aW9uIHZhbHVlcyBmb3Igc2l0ZS13aWRlIGNvbnNpc3RlbmN5IChvcHRpb25hbDsgbWF5IGJlIG92ZXJyaWRkZW4gb24gYSBwZXItcGFnZSBiYXNpcylcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRQYWdlSWNvbjogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoXHJcbiAgJ2RlZmF1bHRQYWdlSWNvbicsXHJcbiAgbnVsbFxyXG4pXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UGFnZUNvdmVyOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAnZGVmYXVsdFBhZ2VDb3ZlcicsXHJcbiAgbnVsbFxyXG4pXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UGFnZUNvdmVyUG9zaXRpb246IG51bWJlciA9IGdldFNpdGVDb25maWcoXHJcbiAgJ2RlZmF1bHRQYWdlQ292ZXJQb3NpdGlvbicsXHJcbiAgMC41XHJcbilcclxuXHJcbi8vIE9wdGlvbmFsIHV0dGVyYW5jLmVzIGNvbW1lbnRzIHZpYSBHaXRIdWIgaXNzdWUgY29tbWVudHNcclxuZXhwb3J0IGNvbnN0IHV0dGVyYW5jZXNHaXRIdWJSZXBvOiBzdHJpbmcgfCBudWxsID0gZ2V0U2l0ZUNvbmZpZyhcclxuICAndXR0ZXJhbmNlc0dpdEh1YlJlcG8nLFxyXG4gIG51bGxcclxuKVxyXG5cclxuLy8gT3B0aW9uYWwgaW1hZ2UgQ0ROIGhvc3QgdG8gcHJveHkgYWxsIGltYWdlIHJlcXVlc3RzIHRocm91Z2hcclxuZXhwb3J0IGNvbnN0IGltYWdlQ0ROSG9zdDogc3RyaW5nIHwgbnVsbCA9IGdldFNpdGVDb25maWcoJ2ltYWdlQ0ROSG9zdCcsIG51bGwpXHJcblxyXG4vLyBPcHRpb25hbCB3aGV0aGVyIG9yIG5vdCB0byBlbmFibGUgc3VwcG9ydCBmb3IgTFFJUCBwcmV2aWV3IGltYWdlc1xyXG4vLyAocmVxdWlyZXMgYSBHb29nbGUgRmlyZWJhc2UgY29sbGVjdGlvbilcclxuZXhwb3J0IGNvbnN0IGlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQ6IGJvb2xlYW4gPSBnZXRTaXRlQ29uZmlnKFxyXG4gICdpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkJyxcclxuICBmYWxzZVxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgaXNEZXYgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8ICFwcm9jZXNzLmVudi5OT0RFX0VOVlxyXG5cclxuLy8gd2hlcmUgaXQgYWxsIHN0YXJ0cyAtLSB0aGUgc2l0ZSdzIHJvb3QgTm90aW9uIHBhZ2VcclxuZXhwb3J0IGNvbnN0IGluY2x1ZGVOb3Rpb25JZEluVXJsczogYm9vbGVhbiA9IGdldFNpdGVDb25maWcoXHJcbiAgJ2luY2x1ZGVOb3Rpb25JZEluVXJscycsXHJcbiAgISFpc0RldlxyXG4pXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5leHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHBvcnQgPSBnZXRFbnYoJ1BPUlQnLCAnMzAwMCcpXHJcbmV4cG9ydCBjb25zdCBob3N0ID0gaXNEZXYgPyBgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCA6IGBodHRwczovLyR7ZG9tYWlufWBcclxuXHJcbmV4cG9ydCBjb25zdCBhcGlCYXNlVXJsID0gYCR7aG9zdH0vYXBpYFxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IHtcclxuICBjcmVhdGVQcmV2aWV3SW1hZ2U6IGAke2FwaUJhc2VVcmx9L2NyZWF0ZS1wcmV2aWV3LWltYWdlYCxcclxuICBzZWFyY2hOb3Rpb246IGAke2FwaUJhc2VVcmx9L3NlYXJjaC1ub3Rpb25gLFxyXG4gIHJlbmRlclNvY2lhbEltYWdlOiAocGFnZUlkKSA9PiBgJHthcGlCYXNlVXJsfS9yZW5kZXItc29jaWFsLWltYWdlLyR7cGFnZUlkfWBcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGNvbnN0IGZhdGhvbUlkID0gaXNEZXYgPyBudWxsIDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRkFUSE9NX0lEXHJcblxyXG5leHBvcnQgY29uc3QgZmF0aG9tQ29uZmlnID0gZmF0aG9tSWRcclxuICA/IHtcclxuICAgICAgZXhjbHVkZWREb21haW5zOiBbJ2xvY2FsaG9zdCcsICdsb2NhbGhvc3Q6MzAwMCddXHJcbiAgICB9XHJcbiAgOiB1bmRlZmluZWRcclxuXHJcbmNvbnN0IGRlZmF1bHRFbnZWYWx1ZUZvclByZXZpZXdJbWFnZVN1cHBvcnQgPVxyXG4gIGlzUHJldmlld0ltYWdlU3VwcG9ydEVuYWJsZWQgJiYgaXNTZXJ2ZXIgPyB1bmRlZmluZWQgOiBudWxsXHJcblxyXG5leHBvcnQgY29uc3QgZ29vZ2xlUHJvamVjdElkID0gZ2V0RW52KFxyXG4gICdHQ0xPVURfUFJPSkVDVCcsXHJcbiAgZGVmYXVsdEVudlZhbHVlRm9yUHJldmlld0ltYWdlU3VwcG9ydFxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgZ29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFscyA9IGdldEdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHMoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQ29sbGVjdGlvbkltYWdlcyA9IGdldEVudihcclxuICAnRklSRUJBU0VfQ09MTEVDVElPTl9JTUFHRVMnLFxyXG4gIGRlZmF1bHRFbnZWYWx1ZUZvclByZXZpZXdJbWFnZVN1cHBvcnRcclxuKVxyXG5cclxuLy8gdGhpcyBoYWNrIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHZlcmNlbCBkb2Vzbid0IHN1cHBvcnQgc2VjcmV0IGZpbGVzIHNvIHdlIG5lZWQgdG8gZW5jb2RlIG91ciBnb29nbGVcclxuLy8gY3JlZGVudGlhbHMgYSBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgb2YgdGhlIEpTT04taWZpZWQgY29udGVudFxyXG5mdW5jdGlvbiBnZXRHb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzKCkge1xyXG4gIGlmICghaXNQcmV2aWV3SW1hZ2VTdXBwb3J0RW5hYmxlZCB8fCAhaXNTZXJ2ZXIpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgZ29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFsc0Jhc2U2NCA9IGdldEVudihcclxuICAgICAgJ0dPT0dMRV9BUFBMSUNBVElPTl9DUkVERU5USUFMUycsXHJcbiAgICAgIGRlZmF1bHRFbnZWYWx1ZUZvclByZXZpZXdJbWFnZVN1cHBvcnRcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4gSlNPTi5wYXJzZShcclxuICAgICAgQnVmZmVyLmZyb20oZ29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFsc0Jhc2U2NCwgJ2Jhc2U2NCcpLnRvU3RyaW5nKClcclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICdGaXJlYmFzZSBjb25maWcgZXJyb3I6IGludmFsaWQgXCJHT09HTEVfQVBQTElDQVRJT05fQ1JFREVOVElBTFNcIiBzaG91bGQgYmUgYmFzZTY0LWVuY29kZWQgSlNPTlxcbidcclxuICAgIClcclxuXHJcbiAgICB0aHJvdyBlcnJcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuUGFnZVVybE1hcChcclxuICBwYWdlVXJsTWFwOiBQYWdlVXJsT3ZlcnJpZGVzTWFwLFxyXG4gIGxhYmVsOiBzdHJpbmdcclxuKTogUGFnZVVybE92ZXJyaWRlc01hcCB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBhZ2VVcmxNYXApLnJlZHVjZSgoYWNjLCB1cmkpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VJZCA9IHBhZ2VVcmxNYXBbdXJpXVxyXG4gICAgY29uc3QgdXVpZCA9IHBhcnNlUGFnZUlkKHBhZ2VJZCwgeyB1dWlkOiBmYWxzZSB9KVxyXG5cclxuICAgIGlmICghdXVpZCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgJHtsYWJlbH0gcGFnZSBpZCBcIiR7cGFnZUlkfVwiYClcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXVyaSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgJHtsYWJlbH0gdmFsdWUgZm9yIHBhZ2UgXCIke3BhZ2VJZH1cImApXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF1cmkuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICBgSW52YWxpZCAke2xhYmVsfSB2YWx1ZSBmb3IgcGFnZSBcIiR7cGFnZUlkfVwiOiB2YWx1ZSBcIiR7dXJpfVwiIHNob3VsZCBiZSBhIHJlbGF0aXZlIFVSSSB0aGF0IHN0YXJ0cyB3aXRoIFwiL1wiYFxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGF0aCA9IHVyaS5zbGljZSgxKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmFjYyxcclxuICAgICAgW3BhdGhdOiB1dWlkXHJcbiAgICB9XHJcbiAgfSwge30pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGludmVydFBhZ2VVcmxPdmVycmlkZXMoXHJcbiAgcGFnZVVybE92ZXJyaWRlczogUGFnZVVybE92ZXJyaWRlc01hcFxyXG4pOiBQYWdlVXJsT3ZlcnJpZGVzSW52ZXJzZU1hcCB7XHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKHBhZ2VVcmxPdmVycmlkZXMpLnJlZHVjZSgoYWNjLCB1cmkpID0+IHtcclxuICAgIGNvbnN0IHBhZ2VJZCA9IHBhZ2VVcmxPdmVycmlkZXNbdXJpXVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLmFjYyxcclxuICAgICAgW3BhZ2VJZF06IHVyaVxyXG4gICAgfVxyXG4gIH0sIHt9KVxyXG59XHJcbiIsImltcG9ydCByYXdTaXRlQ29uZmlnIGZyb20gJy4uL3NpdGUuY29uZmlnJ1xyXG5cclxuaWYgKCFyYXdTaXRlQ29uZmlnKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKGBDb25maWcgZXJyb3I6IGludmFsaWQgc2l0ZS5jb25maWcuanNgKVxyXG59XHJcblxyXG4vLyBUT0RPOiBhbGxvdyBlbnZpcm9ubWVudCB2YXJpYWJsZXMgdG8gb3ZlcnJpZGUgc2l0ZS5jb25maWcuanNcclxubGV0IHNpdGVDb25maWdPdmVycmlkZXNcclxuXHJcbnRyeSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfQ09ORklHKSB7XHJcbiAgICBzaXRlQ29uZmlnT3ZlcnJpZGVzID0gSlNPTi5wYXJzZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TSVRFX0NPTkZJRylcclxuICB9XHJcbn0gY2F0Y2ggKGVycikge1xyXG4gIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY29uZmlnIFwiTkVYVF9QVUJMSUNfU0lURV9DT05GSUdcIiBmYWlsZWQgdG8gcGFyc2UnKVxyXG4gIHRocm93IGVyclxyXG59XHJcblxyXG5jb25zdCBzaXRlQ29uZmlnID0ge1xyXG4gIC4uLnJhd1NpdGVDb25maWcsXHJcbiAgLi4uc2l0ZUNvbmZpZ092ZXJyaWRlc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2l0ZUNvbmZpZzxUPihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogVCk6IFQge1xyXG4gIGNvbnN0IHZhbHVlID0gc2l0ZUNvbmZpZ1trZXldXHJcblxyXG4gIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gdmFsdWVcclxuICB9XHJcblxyXG4gIGlmIChkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZVxyXG4gIH1cclxuXHJcbiAgdGhyb3cgbmV3IEVycm9yKGBDb25maWcgZXJyb3I6IG1pc3NpbmcgcmVxdWlyZWQgc2l0ZSBjb25maWcgdmFsdWUgXCIke2tleX1cImApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbnYoXHJcbiAga2V5OiBzdHJpbmcsXHJcbiAgZGVmYXVsdFZhbHVlPzogc3RyaW5nLFxyXG4gIGVudiA9IHByb2Nlc3MuZW52XHJcbik6IHN0cmluZyB7XHJcbiAgY29uc3QgdmFsdWUgPSBlbnZba2V5XVxyXG5cclxuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHZhbHVlXHJcbiAgfVxyXG5cclxuICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBkZWZhdWx0VmFsdWVcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcihgQ29uZmlnIGVycm9yOiBtaXNzaW5nIHJlcXVpcmVkIGVudiB2YXJpYWJsZSBcIiR7a2V5fVwiYClcclxufVxyXG4iLCIvLyBnbG9iYWwgc3R5bGVzIHNoYXJlZCBhY3Jvc3MgdGhlIGVudGlyZSBzaXRlXHJcbmltcG9ydCAnc3R5bGVzL2dsb2JhbC5jc3MnXHJcblxyXG4vLyBjb3JlIHN0eWxlcyBzaGFyZWQgYnkgYWxsIG9mIHJlYWN0LW5vdGlvbi14IChyZXF1aXJlZClcclxuaW1wb3J0ICdyZWFjdC1ub3Rpb24teC9zcmMvc3R5bGVzLmNzcydcclxuXHJcbi8vIHVzZWQgZm9yIGNvZGUgc3ludGF4IGhpZ2hsaWdodGluZyAob3B0aW9uYWwpXHJcbmltcG9ydCAncHJpc21qcy90aGVtZXMvcHJpc20tY295LmNzcydcclxuXHJcbi8vIHRoaXMgbWlnaHQgYmUgYmV0dGVyIGZvciBkYXJrIG1vZGVcclxuLy8gaW1wb3J0ICdwcmlzbWpzL3RoZW1lcy9wcmlzbS1va2FpZGlhLmNzcydcclxuXHJcbi8vIHVzZWQgZm9yIGNvbGxlY3Rpb24gdmlld3Mgc2VsZWN0b3IgKG9wdGlvbmFsKVxyXG4vLyBUT0RPOiByZS1hZGQgaWYgd2UgZW5hYmxlIGNvbGxlY3Rpb24gdmlldyBkcm9wZG93bnNcclxuLy8gaW1wb3J0ICdyYy1kcm9wZG93bi9hc3NldHMvaW5kZXguY3NzJ1xyXG5cclxuLy8gdXNlZCBmb3IgcmVuZGVyaW5nIGVxdWF0aW9ucyAob3B0aW9uYWwpXHJcbi8vIGltcG9ydCAna2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzJ1xyXG5cclxuLy8gY29yZSBzdHlsZXMgZm9yIHN0YXRpYyB0d2VldCByZW5kZXJlciAob3B0aW9uYWwpXHJcbmltcG9ydCAncmVhY3Qtc3RhdGljLXR3ZWV0cy9zdHlsZXMuY3NzJ1xyXG5cclxuLy8gZ2xvYmFsIHN0eWxlIG92ZXJyaWRlcyBmb3Igbm90aW9uXHJcbmltcG9ydCAnc3R5bGVzL25vdGlvbi5jc3MnXHJcblxyXG4vLyBnbG9iYWwgc3R5bGUgb3ZlcnJpZGVzIGZvciBwcmlzbSB0aGVtZSAob3B0aW9uYWwpXHJcbmltcG9ydCAnc3R5bGVzL3ByaXNtLXRoZW1lLmNzcydcclxuXHJcbi8vIGhlcmUgd2UncmUgYnJpbmdpbmcgaW4gYW55IGxhbmd1YWdlcyB3ZSB3YW50IHRvIHN1cHBvcnQgZm9yXHJcbi8vIHN5bnRheCBoaWdobGlnaHRpbmcgdmlhIE5vdGlvbidzIENvZGUgYmxvY2tcclxuaW1wb3J0ICdwcmlzbWpzJ1xyXG5pbXBvcnQgJ3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1tYXJrdXAnXHJcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWphdmFzY3JpcHQnXHJcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLXR5cGVzY3JpcHQnXHJcbmltcG9ydCAncHJpc21qcy9jb21wb25lbnRzL3ByaXNtLWJhc2gnXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBib290c3RyYXAgfSBmcm9tICdsaWIvYm9vdHN0cmFwLWNsaWVudCdcclxuaW1wb3J0IHsgZmF0aG9tSWQsIGZhdGhvbUNvbmZpZyB9IGZyb20gJ2xpYi9jb25maWcnXHJcbmltcG9ydCAqIGFzIEZhdGhvbSBmcm9tICdmYXRob20tY2xpZW50J1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgYm9vdHN0cmFwKClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZmF0aG9tSWQpIHtcclxuICAgICAgRmF0aG9tLmxvYWQoZmF0aG9tSWQsIGZhdGhvbUNvbmZpZylcclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uUm91dGVDaGFuZ2VDb21wbGV0ZSgpIHtcclxuICAgICAgICBGYXRob20udHJhY2tQYWdldmlldygpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBvblJvdXRlQ2hhbmdlQ29tcGxldGUpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgb25Sb3V0ZUNoYW5nZUNvbXBsZXRlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAvLyB3aGVyZSBpdCBhbGwgc3RhcnRzIC0tIHRoZSBzaXRlJ3Mgcm9vdCBOb3Rpb24gcGFnZSAocmVxdWlyZWQpXHJcbiAgICByb290Tm90aW9uUGFnZUlkOiAnNzk5MmFiNTY2MzRlNGMwMTgxYmU0ZDZiOGQxZDkwNjQnLFxyXG5cclxuICAgIC8vIGlmIHlvdSB3YW50IHRvIHJlc3RyaWN0IHBhZ2VzIHRvIGEgc2luZ2xlIG5vdGlvbiB3b3Jrc3BhY2UgKG9wdGlvbmFsKVxyXG4gICAgLy8gKHRoaXMgc2hvdWxkIGJlIGEgTm90aW9uIElEOyAgICAgc2VlIHRoZSBkb2NzIGZvciBob3cgdG8gZXh0cmFjdCB0aGlzKVxyXG4gICAgcm9vdE5vdGlvblNwYWNlSWQ6IG51bGwsXHJcblxyXG4gICAgLy8gYmFzaWMgc2l0ZSBpbmZvIChyZXF1aXJlZClcclxuICAgIG5hbWU6IFwiQWxpY2UgU2hhdWdobmVzc3lcIixcclxuICAgIGRvbWFpbjogJ2FsaWNlY3Nob2Nrcy5jb20nLFxyXG4gICAgYXV0aG9yOiBcIkphY2sgTydSZWdhbiBLZW5ueVwiLFxyXG5cclxuICAgIC8vIG9wZW4gZ3JhcGggbWV0YWRhdGEgKG9wdGlvbmFsKVxyXG4gICAgZGVzY3JpcHRpb246IFwiQWxpY2UgU2hhdWdobmVzc3lcIixcclxuICAgIHNvY2lhbEltYWdlVGl0bGU6IFwiQWxpY2VTaGF1Z2huZXNzeVwiLFxyXG4gICAgc29jaWFsSW1hZ2VTdWJ0aXRsZTogJ0kgYnVpbGQgc3R1ZmYnLFxyXG5cclxuICAgIC8vIHNvY2lhbCB1c2VybmFtZXMgKG9wdGlvbmFsKVxyXG4gICAgdHdpdHRlcjogJ0FsaWNlU2hhdWdoJyxcclxuICAgIGdpdGh1YjogJycsXHJcbiAgICBsaW5rZWRpbjogJ2FsaWNlc2hhdWdobmVzc3knLFxyXG4gICAgZW1haWw6ICdtYWlsdG86c2hvY2tzLmFsaWNlQGdtYWlsLmNvbScsXHJcblxyXG4gICAgLy8gZGVmYXVsdCBub3Rpb24gaWNvbiBhbmQgY292ZXIgaW1hZ2VzIGZvciBzaXRlLXdpZGUgY29uc2lzdGVuY3kgKG9wdGlvbmFsKVxyXG4gICAgLy8gcGFnZS1zcGVjaWZpYyB2YWx1ZXMgd2lsbCBvdmVycmlkZSB0aGVzZSBzaXRlLXdpZGUgZGVmYXVsdHNcclxuICAgIGRlZmF1bHRQYWdlSWNvbjogbnVsbCxcclxuICAgIGRlZmF1bHRQYWdlQ292ZXI6IG51bGwsXHJcbiAgICBkZWZhdWx0UGFnZUNvdmVyUG9zaXRpb246IDAuNSxcclxuXHJcbiAgICAvLyBpbWFnZSBDRE4gaG9zdCB0byBwcm94eSBhbGwgaW1hZ2UgcmVxdWVzdHMgdGhyb3VnaCAob3B0aW9uYWwpXHJcbiAgICAvLyBOT1RFOiB0aGlzIHJlcXVpcmVzIHlvdSB0byBzZXQgdXAgYW4gZXh0ZXJuYWwgaW1hZ2UgcHJveHlcclxuICAgIGltYWdlQ0ROSG9zdDogbnVsbCxcclxuXHJcbiAgICAvLyBVdHRlcmFuYy5lcyBjb21tZW50cyB2aWEgR2l0SHViIGlzc3VlIGNvbW1lbnRzIChvcHRpb25hbClcclxuICAgIHV0dGVyYW5jZXNHaXRIdWJSZXBvOiBudWxsLFxyXG5cclxuICAgIC8vIHdoZXRoZXIgb3Igbm90IHRvIGVuYWJsZSBzdXBwb3J0IGZvciBMUUlQIHByZXZpZXcgaW1hZ2VzIChvcHRpb25hbClcclxuICAgIC8vIE5PVEU6IHRoaXMgcmVxdWlyZXMgeW91IHRvIHNldCB1cCBHb29nbGUgRmlyZWJhc2UgYW5kIGFkZCB0aGUgZW52aXJvbm1lbnRcclxuICAgIC8vIHZhcmlhYmxlcyBzcGVjaWZpZWQgaW4gLmVudi5leGFtcGxlXHJcbiAgICBpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkOiBmYWxzZSxcclxuXHJcbiAgICAvLyBtYXAgb2Ygbm90aW9uIHBhZ2UgSURzIHRvIFVSTCBwYXRocyAob3B0aW9uYWwpXHJcbiAgICAvLyBhbnkgcGFnZXMgZGVmaW5lZCBoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlaXIgZGVmYXVsdCBVUkwgcGF0aHNcclxuICAgIC8vIGV4YW1wbGU6XHJcbiAgICAvL1xyXG4gICAgLy8gcGFnZVVybE92ZXJyaWRlczoge1xyXG4gICAgLy8gICAnL2Zvbyc6ICcwNjdkZDcxOWE5MTI0NzFlYTlhM2FjMTA3MTBlN2ZkZicsXHJcbiAgICAvLyAgICcvYmFyJzogJzBiZTZlZmNlOWRhZjQyNjg4ZjY1Yzc2Yjg5ZjhlYjI3J1xyXG4gICAgLy8gfVxyXG4gICAgcGFnZVVybE92ZXJyaWRlczogbnVsbFxyXG59IiwiIiwiIiwiIiwiIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF0aG9tLWNsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3Rpb24tdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJpc21qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tYmFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tamF2YXNjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tbWFya3VwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByaXNtanMvY29tcG9uZW50cy9wcmlzbS10eXBlc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiYm9vdHN0cmFwIiwiY29uc29sZSIsImxvZyIsInBhcnNlUGFnZUlkIiwiZ2V0U2l0ZUNvbmZpZyIsImdldEVudiIsInJvb3ROb3Rpb25QYWdlSWQiLCJ1dWlkIiwiRXJyb3IiLCJyb290Tm90aW9uU3BhY2VJZCIsInBhZ2VVcmxPdmVycmlkZXMiLCJjbGVhblBhZ2VVcmxNYXAiLCJpbnZlcnNlUGFnZVVybE92ZXJyaWRlcyIsImludmVydFBhZ2VVcmxPdmVycmlkZXMiLCJwYWdlVXJsQWRkaXRpb25zIiwibmFtZSIsImF1dGhvciIsImRvbWFpbiIsImRlc2NyaXB0aW9uIiwidHdpdHRlciIsImdpdGh1YiIsImxpbmtlZGluIiwic29jaWFsSW1hZ2VUaXRsZSIsInNvY2lhbEltYWdlU3VidGl0bGUiLCJkZWZhdWx0UGFnZUljb24iLCJkZWZhdWx0UGFnZUNvdmVyIiwiZGVmYXVsdFBhZ2VDb3ZlclBvc2l0aW9uIiwidXR0ZXJhbmNlc0dpdEh1YlJlcG8iLCJpbWFnZUNETkhvc3QiLCJpc1ByZXZpZXdJbWFnZVN1cHBvcnRFbmFibGVkIiwiaXNEZXYiLCJpbmNsdWRlTm90aW9uSWRJblVybHMiLCJpc1NlcnZlciIsInBvcnQiLCJob3N0IiwiYXBpQmFzZVVybCIsImFwaSIsImNyZWF0ZVByZXZpZXdJbWFnZSIsInNlYXJjaE5vdGlvbiIsInJlbmRlclNvY2lhbEltYWdlIiwicGFnZUlkIiwiZmF0aG9tSWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRkFUSE9NX0lEIiwiZmF0aG9tQ29uZmlnIiwiZXhjbHVkZWREb21haW5zIiwidW5kZWZpbmVkIiwiZGVmYXVsdEVudlZhbHVlRm9yUHJldmlld0ltYWdlU3VwcG9ydCIsImdvb2dsZVByb2plY3RJZCIsImdvb2dsZUFwcGxpY2F0aW9uQ3JlZGVudGlhbHMiLCJnZXRHb29nbGVBcHBsaWNhdGlvbkNyZWRlbnRpYWxzIiwiZmlyZWJhc2VDb2xsZWN0aW9uSW1hZ2VzIiwiZ29vZ2xlQXBwbGljYXRpb25DcmVkZW50aWFsc0Jhc2U2NCIsIkpTT04iLCJwYXJzZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsImVyciIsImVycm9yIiwicGFnZVVybE1hcCIsImxhYmVsIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsImFjYyIsInVyaSIsInN0YXJ0c1dpdGgiLCJwYXRoIiwic2xpY2UiLCJyYXdTaXRlQ29uZmlnIiwic2l0ZUNvbmZpZ092ZXJyaWRlcyIsIk5FWFRfUFVCTElDX1NJVEVfQ09ORklHIiwic2l0ZUNvbmZpZyIsImtleSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJGYXRob20iLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJ1c2VFZmZlY3QiLCJsb2FkIiwib25Sb3V0ZUNoYW5nZUNvbXBsZXRlIiwidHJhY2tQYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIiwibW9kdWxlIiwiZXhwb3J0cyIsImVtYWlsIl0sInNvdXJjZVJvb3QiOiIifQ==