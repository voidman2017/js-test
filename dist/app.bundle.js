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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* import jsonp from './js/jsonp'
import { commonParams, opts } from './js/config'


export function getRankList() {
    let url = 'https://ad.3.cn/ads/mgets?&callback=jQuery7115612&my=list_adWords&source=JDList&skuids=AD_6494556%2CAD_6558982%2CAD_6558984%2CAD_6584944%2CAD_6631219%2CAD_6703015%2CAD_6703337%2CAD_6798317%2CAD_6798333%2CAD_10941037481%2CAD_12261336038%2CAD_11126974481%2CAD_11476089321%2CAD_12518216072%2CAD_12634454898%2CAD_11384443267%2CAD_11384443265%2CAD_11563638243%2CAD_10932167750%2CAD_11955374462%2CAD_12613550298%2CAD_12613550299%2CAD_14735550212%2CAD_14735550210%2CAD_11384308346%2CAD_11384308350%2CAD_11318073522%2CAD_12648389635%2CAD_19956879813%2CAD_12068833826%2CAD_12068833828%2CAD_10941037480%2CAD_11384140981%2CAD_10932167751%2CAD_12613550297%2CAD_14735550211%2CAD_11572858829%2CAD_11960714890%2CAD_25724677901%2CAD_25930041096%2CAD_25790371341'
    let data = Object.assign({}, commonParams, {
      uin: 0,
      format: 'h5',
      needNewCode: 1
    })
    return jsonp(url, data, opts)
  }
  console.log(getRankList()) */
var a = 'outer';
var Fn = function Fn() {
  var a = 1;
  this.say = function () {
    console.log(a);
  };
  this.change = function () {
    ++a;
  };
  this.c = 1;
  this.changeC = function () {
    this.c++;
  };
  this.sayC = function () {
    console.log(this.c);
  };
};

var f = new Fn();
f.change();
f.changeC();
var b = new Fn();
f.say();
b.say();
f.sayC();
b.sayC();
console.log(f);
console.log(b);

/***/ })
/******/ ]);