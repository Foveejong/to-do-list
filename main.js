/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

:root {
    --sidebar-item-inner-padding: 8px 5px;
    --svg-words-gap: 0.5rem;
    --light-grey: rgb(246, 246, 246);
}

.container {
    display: flex;
}

.profilebar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.profile-container {
    display: flex;
    align-items: center;
    gap: var(--svg-words-gap);
}

.profilepic {
    max-height: 2rem;
    width: 1rem;
}

.add-task {
    min-width: 2rem;
    border-radius: 10px;
    padding: 8px 10px;
    text-align: center;
    border-style: none;
    color: orangered;
    background-color: var(--light-grey);
}

.add-task:hover {
    background-color: rgb(255, 255, 214);
    cursor: pointer;
    color: orangered;
}

.sidebar-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    min-width: 250px;
    min-height: 100vh;
    background-color: var(--light-grey);
    padding: 1rem;
}

.sidebar-item {
    padding: var(--sidebar-item-inner-padding);
    display: flex;
    align-items: center;
    gap: var(--svg-words-gap);
    border-radius: 10px;
}

button.sidebar-item {
    width: 100%;
    background-color: var(--light-grey);
    border-style: none;
}

.mainbar > .sidebar-item:hover, .categories > .sidebar-item:hover {
    background-color: rgb(255, 255, 214);
    color: orangered;
    cursor: pointer;
    .svg {
        filter: invert(50%) sepia(150%) hue-rotate(-50deg) contrast(150%) saturate(6) brightness(90%);
    }
}

.svg, .list-marker {
    width: 1rem;
    max-height: 1.2rem; 
    text-align: center;
}

.task > input.svg {
    width: 1.5rem;
    min-height: 1.5rem;
}

.subheader {
    font-size: 1.2rem;
}

.content-container {
    flex: 4;
    padding: 5rem 7rem;
}

.projects .title {
    margin-bottom: 2rem;
}

.projects .subtitle {
    margin-bottom: 1rem;
}

.tasks {
    border-top: rgb(205, 205, 205) solid 1px;
    padding: 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 5fr 3fr;
    align-items: center;
}

.tasks > :last-child {
    text-align: end;
}

input[type="checkbox"] {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    accent-color: orangered;
}

.task {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.task-content {
    display: flex;
    flex-direction: column;
    width: clamp(30vw, 300px, 45vw);
}

.description-space {
    display: none;
    margin-top: 1rem;
}

.caret {
    position: relative;
}

.caret::before {
    cursor: pointer;
    content: '';
    position: absolute;
    top: -15px;
    left: 96%;
    border-top: 7px solid #0a0707;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }
  
  .caret::after {
    cursor: pointer;
    content: '';
    position: absolute;
    left: calc(96% + 1px);
    top: -15px;
    border-top: 6px solid #fff;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }

.dialog {
    position: absolute;
    top: 15%;
    left: 35%;
    min-height: 45vh;
    width: clamp(200px, 33vw, 500px);
    border-radius: 20px;
    border: none;
    background-color: rgba(255, 255, 255, 0.9);
}

.dialog-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 3rem 1rem;
}

.dialog::backdrop {
    backdrop-filter: blur(3px);
}

.input-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}   

.input-container > label {
    width: 6rem;
}

fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

legend {
    margin-bottom: 0.5rem;
}

fieldset > .input-container {
    padding-left: 1rem;
}

input[type="text"], input[type="date"],input[type="time"], textarea {
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: solid black 1px;
    width: 25ch;
}

textarea {
    resize: none;
}

input:focus {
    border-color: orangered;
    outline: none;
}

input[type="radio"] {
    accent-color: orangered;
}

button[type="submit"] {
    align-self: center;
    min-width: 10rem;
    padding: 10px 20px;
    border-radius: 15px;
    border-style: none;
}

button[type="submit"]:hover {
    background-color: rgba(216, 216, 216, 0.86);
    cursor: pointer;
}

.finished {
    opacity: 0.5;
    position: relative;
}

.finished:after {
    position: absolute;
    left: 0;
    top: 50%;
    height: 1px;
    background: rgb(85, 85, 85);
    content: "";
    width: 100%;
    display: block;
    pointer-events: none;
  }

.priority {
    font-size: 1.5rem;
    min-width: 2rem;
}

.high {
    color: rgb(255, 0, 0);
}

.middle {
    color: rgb(255, 149, 0);
}

.low {
    color: rgb(15, 175, 0);
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\n:root {\n    --sidebar-item-inner-padding: 8px 5px;\n    --svg-words-gap: 0.5rem;\n    --light-grey: rgb(246, 246, 246);\n}\n\n.container {\n    display: flex;\n}\n\n.profilebar {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n}\n\n.profilepic {\n    max-height: 2rem;\n    width: 1rem;\n}\n\n.add-task {\n    min-width: 2rem;\n    border-radius: 10px;\n    padding: 8px 10px;\n    text-align: center;\n    border-style: none;\n    color: orangered;\n    background-color: var(--light-grey);\n}\n\n.add-task:hover {\n    background-color: rgb(255, 255, 214);\n    cursor: pointer;\n    color: orangered;\n}\n\n.sidebar-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    min-width: 250px;\n    min-height: 100vh;\n    background-color: var(--light-grey);\n    padding: 1rem;\n}\n\n.sidebar-item {\n    padding: var(--sidebar-item-inner-padding);\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n    border-radius: 10px;\n}\n\nbutton.sidebar-item {\n    width: 100%;\n    background-color: var(--light-grey);\n    border-style: none;\n}\n\n.mainbar > .sidebar-item:hover, .categories > .sidebar-item:hover {\n    background-color: rgb(255, 255, 214);\n    color: orangered;\n    cursor: pointer;\n    .svg {\n        filter: invert(50%) sepia(150%) hue-rotate(-50deg) contrast(150%) saturate(6) brightness(90%);\n    }\n}\n\n.svg, .list-marker {\n    width: 1rem;\n    max-height: 1.2rem; \n    text-align: center;\n}\n\n.task > input.svg {\n    width: 1.5rem;\n    min-height: 1.5rem;\n}\n\n.subheader {\n    font-size: 1.2rem;\n}\n\n.content-container {\n    flex: 4;\n    padding: 5rem 7rem;\n}\n\n.projects .title {\n    margin-bottom: 2rem;\n}\n\n.projects .subtitle {\n    margin-bottom: 1rem;\n}\n\n.tasks {\n    border-top: rgb(205, 205, 205) solid 1px;\n    padding: 1.5rem 0;\n    display: grid;\n    grid-template-columns: 1fr 5fr 3fr;\n    align-items: center;\n}\n\n.tasks > :last-child {\n    text-align: end;\n}\n\ninput[type=\"checkbox\"] {\n    cursor: pointer;\n    width: 1.2rem;\n    height: 1.2rem;\n    accent-color: orangered;\n}\n\n.task {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.task-content {\n    display: flex;\n    flex-direction: column;\n    width: clamp(30vw, 300px, 45vw);\n}\n\n.description-space {\n    display: none;\n    margin-top: 1rem;\n}\n\n.caret {\n    position: relative;\n}\n\n.caret::before {\n    cursor: pointer;\n    content: '';\n    position: absolute;\n    top: -15px;\n    left: 96%;\n    border-top: 7px solid #0a0707;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n  }\n  \n  .caret::after {\n    cursor: pointer;\n    content: '';\n    position: absolute;\n    left: calc(96% + 1px);\n    top: -15px;\n    border-top: 6px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n  }\n\n.dialog {\n    position: absolute;\n    top: 15%;\n    left: 35%;\n    min-height: 45vh;\n    width: clamp(200px, 33vw, 500px);\n    border-radius: 20px;\n    border: none;\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.dialog-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding: 3rem 1rem;\n}\n\n.dialog::backdrop {\n    backdrop-filter: blur(3px);\n}\n\n.input-container{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}   \n\n.input-container > label {\n    width: 6rem;\n}\n\nfieldset {\n    border: none;\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\nlegend {\n    margin-bottom: 0.5rem;\n}\n\nfieldset > .input-container {\n    padding-left: 1rem;\n}\n\ninput[type=\"text\"], input[type=\"date\"],input[type=\"time\"], textarea {\n    padding: 5px;\n    border-radius: 5px;\n    outline: none;\n    border: solid black 1px;\n    width: 25ch;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput:focus {\n    border-color: orangered;\n    outline: none;\n}\n\ninput[type=\"radio\"] {\n    accent-color: orangered;\n}\n\nbutton[type=\"submit\"] {\n    align-self: center;\n    min-width: 10rem;\n    padding: 10px 20px;\n    border-radius: 15px;\n    border-style: none;\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgba(216, 216, 216, 0.86);\n    cursor: pointer;\n}\n\n.finished {\n    opacity: 0.5;\n    position: relative;\n}\n\n.finished:after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 1px;\n    background: rgb(85, 85, 85);\n    content: \"\";\n    width: 100%;\n    display: block;\n    pointer-events: none;\n  }\n\n.priority {\n    font-size: 1.5rem;\n    min-width: 2rem;\n}\n\n.high {\n    color: rgb(255, 0, 0);\n}\n\n.middle {\n    color: rgb(255, 149, 0);\n}\n\n.low {\n    color: rgb(15, 175, 0);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/List.js":
/*!*********************!*\
  !*** ./src/List.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   List: () => (/* binding */ List)
/* harmony export */ });
class List {
    // responsibilities related to list only
    
    constructor() {
        this.list = [];
        this.categoryList = []
    }
    
    addTask = (task) => {
        this.list.push(task);
    }

    deleteTask = (uuid) => {
        this.list = this.list.filter(task => task.uuid !== uuid)
    }

    findTask = (uuid) => {
        const taskArr = this.list.filter((task) => task.uuid === uuid);
        return taskArr[0]
    }

    shiftFinished = () => {
        const finished = [];
        const active = [];
        // go to first finished item and delete finished items
        this.list.forEach((task) => {
            if (task.complete) {
                finished.push(task);
            } else {
                active.push(task)
            }
        }) 
        this.list = active.concat(finished);
    }

    activeTasks = () => {
        return this.list.filter((task) => !task.complete)
    }

    arrangeActiveTasks = () => {
        let active = this.activeTasks();
        const sliced = this.list.slice(active.length, this.list.length)


        // sort active array
        active.sort((a, b) => {
            return b.convertPriority(b.priority).length - a.convertPriority(a.priority).length
        })  

        // slice to find completed array and concat to active list
        this.list = active.concat(sliced)
    }

    // check if tasks are part of clicked category
    sortCategory = (category) => {
        const categorised = [];
        const notCategorised = [];
        this.list.forEach((task) => {
            if (task.taskcategory.toLowerCase() === category.toLowerCase()) {
                task.display = true;
                categorised.push(task);
            } else {
                task.display = false;
                notCategorised.push(task);
            }
        }) 
        this.list = categorised.concat(notCategorised)
    }

    getRemainingCategories = () => {
        const remaining = [];
        this.list.forEach((task) => {
            if (!remaining.includes(task.taskcategory)) remaining.push(task.taskcategory);
        })
        this.categoryList = remaining;
    }

    addCategory = (category) => {
        this.categoryList.push(category);
    }

    sortToday = () => {
        const currentDate = new Date()
        const todayArr = [];
        const notTodayArr = [];
        this.list.forEach((task) => {
            // set hours to the same so that solely date is compared
            const date = new Date(task.dueDate);
            if (date.setHours(0, 0, 0, 0) === currentDate.setHours(0, 0, 0, 0)) {
                task.display = true;
                todayArr.push(task);
            } else {
                task.display = false;
                notTodayArr.push(task);
            }
        }) 
        this.list = todayArr.concat(notTodayArr);
    }

    removeEmptyCategory = (category) => {
        if (!this.categoryList.includes(category)) {
            const element = document.querySelector("." + `${category}`)
            element.remove();
        }
    }
}



/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Storage: () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/List.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");



class Storage { 
  static storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

  static getTaskList() {
    const todolist = Object.assign(new _List__WEBPACK_IMPORTED_MODULE_0__.List(), JSON.parse(localStorage.getItem("todolist")));

    // use map instead of foreach because foreach ALWAYS returns undefined, unlike map, which returns a new array with changes
    todolist.list = todolist.list.map(task => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__.Task(), task));

    return todolist
  }

  static updateTaskList(newtodolist) {
    localStorage.setItem("todolist", JSON.stringify(newtodolist))
  }
}


  

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
    constructor(taskname, taskcategory, description, dueDate, dueTime, priority, uuid, complete, display) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.uuid = uuid;
        this.complete = complete;
        this.display = display;
    }

    editTask(taskname, taskcategory, description, dueDate, dueTime, priority) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
    }

    convertPriority(priority) {
        if (priority === "high") {
            return "!!!"
        } else if (priority === "middle") {
            return "!!"
        } else {
            return "!"
        }
    }

    completeTask(btn) {
        this.complete = true;

        // disable the checkbox
        btn.disabled = true;
    }

    resetDisplay() {
        this.display = true;
    }
}

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domController: () => (/* binding */ domController)
/* harmony export */ });
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List */ "./src/List.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _svg_pencil_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/pencil.svg */ "./svg/pencil.svg");
/* harmony import */ var _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/trash-can-outline.svg */ "./svg/trash-can-outline.svg");
/* harmony import */ var _svg_format_list_text_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../svg/format-list-text.svg */ "./svg/format-list-text.svg");








function domController() {
    let toDoList;
    if (_Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.storageAvailable("localStorage") && localStorage.getItem("todolist")) {
        // overwrite List's tasklist and categorylist
        toDoList = _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.getTaskList();
    } else {
        toDoList = new _List__WEBPACK_IMPORTED_MODULE_0__.List();
        _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.updateTaskList("todolist", JSON.stringify(toDoList));
    }


    initPermanentButtons();
    initAddButton();
    initAllTasksButton(toDoList);
    initToday(toDoList);

    // initial render
    displayAll(toDoList);

    initAddTaskForm(toDoList);

    initEditTaskForm(toDoList);
}

function initAddTaskForm(toDoList) {
    const form = document.querySelector(".add-task-form");
    form.addEventListener("submit", e => addTaskDom(toDoList))
}

function initEditTaskForm(toDoList) {
    const form = document.querySelector(".edit-task-form");
    form.addEventListener("submit", e => {
        // get data attr of form, which reflects item being changed
        const task = toDoList.findTask(form.getAttribute("data"));
        const oldCategory = task.taskcategory;
        
        task.editTask(form.tasknameEdit.value, 
            form.taskcategoryEdit.value, 
            form.descriptionEdit.value,
            form.dueDateEdit.value, 
            form.dueTimeEdit.value, 
            form.priorityEdit.value);

        // if old list does not include new category, include it
        if (!toDoList.categoryList.includes(form.taskcategoryEdit.value)) {
            toDoList.addCategory(form.taskcategoryEdit.value);
            initCategories(form.taskcategoryEdit.value, toDoList);
        }

        // if category changed, remove it
        toDoList.getRemainingCategories();
        toDoList.removeEmptyCategory(oldCategory)

        // update Storage
        _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.updateTaskList(toDoList);
            
        form.reset();
        resetAllDisplay();
        displayAll(toDoList);
    })
}

function addTaskDom(toDoList) {
    // create task
    const form = document.querySelector(".add-task-form");
    const task = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createNewTask)(
        form.taskname.value, 
        form.taskcategory.value, 
        form.description.value,
        form.dueDate.value, 
        form.dueTime.value, 
        form.priority.value, 
        crypto.randomUUID(), 
        false,
        true);

    // check if categories in sections, if not in, add and display
    if (!toDoList.categoryList.includes(form.taskcategory.value)) {
        toDoList.addCategory(form.taskcategory.value);
        initCategories(form.taskcategory.value, toDoList);
    }
    
    //reset form 
    form.reset()

    // append task to list
    toDoList.addTask(task);

    // update Storage
    _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.updateTaskList(toDoList);
    
    resetAllDisplay();
    displayAll(toDoList);
}

function displayAll(toDoList) {
    // sort list first then display list
    toDoList.shiftFinished();
    toDoList.arrangeActiveTasks();

    toDoList.list.forEach((task) => {
        createTaskDom(toDoList, task);
    });

    toDoList.categoryList.forEach((category) => {
        initCategories(category, toDoList);
    });
}

function displayAddTaskModal() {
    const dialog = document.querySelector(".add-task-dialog");
    dialog.showModal();
}

function displayEditTaskModal() {
    const dialog = document.querySelector(".edit-task-dialog");
    dialog.showModal();
}

function resetAllDisplay() {
    const projectCards = document.querySelector(".project-cards");
    const categoryBtns = document.querySelector(".categories");
    projectCards.textContent = "";
    categoryBtns.textContent = "";
}
 
function createTaskDom(toDoList, task) {
    const projectCards = document.querySelector(".project-cards")

    const tasks = document.createElement("div");
    const priority = document.createElement("div");
    const taskbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskContent = document.createElement("div");
    const taskName = document.createElement("p");
    const caret = document.createElement("div");
    const descriptionSpace = document.createElement("div");
    const details = document.createElement("div");
    const dueDate = document.createElement("span");
    const dustbinBtn = document.createElement("input");
    const pencilBtn = document.createElement("input");
    const taskCategory = document.createElement("p");

    tasks.classList.add("tasks");
    tasks.setAttribute("data", task.uuid);
    priority.classList.add("priority", `${task.priority}`);
    taskbox.classList.add("task");
    checkbox.setAttribute("type", "checkbox");
    dustbinBtn.setAttribute("type", "image");
    pencilBtn.setAttribute("type", "image");
    taskContent.classList.add("task-content");
    details.classList.add("details");
    descriptionSpace.classList.add("description-space");
    caret.classList.add("caret");

    priority.textContent = task.convertPriority(task.priority);
    taskName.textContent = task.taskname;
    descriptionSpace.textContent = "Description: " + task.description;
    dueDate.textContent = "Due: " + task.dueDate + " " + task.dueTime;
    taskCategory.textContent = `${task.taskcategory} #`;

    // check completed
    if (task.complete) {
        tasks.classList.add("finished");
        checkbox.checked = true;
        checkbox.disabled = true;
        pencilBtn.disabled = true;
    }

    if (!task.display) {
        tasks.style.display = "none";
    }
    
    dustbinBtn.src = _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
    dustbinBtn.name = "delete";
    dustbinBtn.id = "delete";
    dustbinBtn.classList.add("svg", "delete");

    pencilBtn.src = _svg_pencil_svg__WEBPACK_IMPORTED_MODULE_3__;
    pencilBtn.name = "edit";
    pencilBtn.id = "edit";
    pencilBtn.classList.add("svg", "edit");

    details.appendChild(dueDate);
    details.appendChild(caret);
    details.appendChild(descriptionSpace);

    taskContent.appendChild(taskName);
    taskContent.appendChild(details);

    taskbox.appendChild(checkbox);
    taskbox.appendChild(taskContent);
    taskbox.appendChild(dustbinBtn);
    taskbox.appendChild(pencilBtn);
    
    tasks.appendChild(priority);
    tasks.appendChild(taskbox);
    tasks.appendChild(taskCategory);

    projectCards.appendChild(tasks);

    // init buttons
    initDeleteButton(toDoList, task.uuid, task, dustbinBtn);
    initEditButton(task.uuid, pencilBtn);
    initCaret(caret, descriptionSpace);
    initCheckBox(toDoList, task.uuid, checkbox);
}

function initPermanentButtons() {
    const alltasks = document.querySelector(".all-tasks-img");
    const today = document.querySelector(".today-img");

    alltasks.src = _svg_format_list_text_svg__WEBPACK_IMPORTED_MODULE_5__;
    today.src = _svg_format_list_text_svg__WEBPACK_IMPORTED_MODULE_5__;
}

function initAllTasksButton(toDoList) {
    const btn = document.querySelector("#all-tasks");
    const title = document.querySelector(".subtitle");
    btn.addEventListener("click", e => {
        (0,_logic__WEBPACK_IMPORTED_MODULE_2__.resetDisplayProperties)(toDoList);
        title.textContent = "All Tasks";

        resetAllDisplay();
        displayAll(toDoList);
    });
}

function initAddButton() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", displayAddTaskModal);
}

function initDeleteButton(toDoList, uuid, task, btn) {
    btn.addEventListener("click", e => {
        // delete element
        e.target.closest(".tasks").remove();
        
        // update toDoList arr
        toDoList.deleteTask(uuid);

        // get the remaining categories
        toDoList.getRemainingCategories()
        toDoList.removeEmptyCategory(task.taskcategory)

        // update Storage
        _Storage__WEBPACK_IMPORTED_MODULE_1__.Storage.updateTaskList(toDoList);

        resetAllDisplay();

        displayAll(toDoList);
    })
}

function initEditButton(uuid, btn) {
    const form = document.querySelector(".edit-task-form");
    btn.addEventListener("click", e => {
        // change data attr of form to reflect task being changed
        form.setAttribute("data", uuid);
        // show modal to input details
        displayEditTaskModal();
    })
}

function initCaret(caret, description) {
    caret.addEventListener("click", e => {
        description.style.display = (description.style.display === "block") ? "none" : "block";
    })
}

function initCheckBox(toDoList, uuid, btn) {
    btn.addEventListener("click", e => {
        // DOM strike through
        const closestTaskElement = e.target.closest(".tasks");
        closestTaskElement.classList.add("finished");

        // find task and update complete
        const task = toDoList.findTask(uuid);
        task.completeTask(btn);

        resetAllDisplay();

        displayAll(toDoList);
    })
}

function initCategories(category, toDoList) {
    const categories = document.querySelector(".categories");
    const title = document.querySelector(".subtitle");

    // create button and append to the categories list
    const button = document.createElement("button");
    const span = document.createElement("span");
    const p = document.createElement("p");

    button.classList.add("categories-item");
    button.classList.add("sidebar-item");
    button.classList.add(category);
    span.classList.add("list-marker");
    p.classList.add("subheader");

    span.textContent = "#";
    p.textContent = category;

    button.appendChild(span);
    button.appendChild(p);

    categories.appendChild(button)

    // addeventlistener to sort categories
    button.addEventListener("click", e => {
        toDoList.sortCategory(category);
        title.textContent = category;

        resetAllDisplay();
        displayAll(toDoList);
    });
}

function initToday(toDoList) {
    const todayBtn = document.querySelector("#today");
    const title = document.querySelector(".subtitle");
    todayBtn.addEventListener("click", (e) => {
        toDoList.sortToday();
        title.textContent = "Today";
        resetAllDisplay();
        displayAll(toDoList);
    })
}



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTask: () => (/* binding */ createNewTask),
/* harmony export */   resetDisplayProperties: () => (/* binding */ resetDisplayProperties)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


function createNewTask(name, category, description, date, time, priority, uuid, completed, display) {
    return new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(name, category, description, date, time, priority, uuid, completed, display)
}

function resetDisplayProperties(toDoList) {
    toDoList.list.forEach(task => {
        task.resetDisplay()
    });
}



/***/ }),

/***/ "./svg/format-list-text.svg":
/*!**********************************!*\
  !*** ./svg/format-list-text.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97963af6576b90dbd918.svg";

/***/ }),

/***/ "./svg/pencil.svg":
/*!************************!*\
  !*** ./svg/pencil.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3db7d7e1a3403b9767c3.svg";

/***/ }),

/***/ "./svg/trash-can-outline.svg":
/*!***********************************!*\
  !*** ./svg/trash-can-outline.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcf8d6ff346603c8a51a.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/domController.js");



(0,_domController__WEBPACK_IMPORTED_MODULE_1__.domController)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDREQUE0RCxTQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RzhCO0FBQ0E7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXVDLHVDQUFJOztBQUUzQztBQUNB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LEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoVjhCOztBQUU5QjtBQUNBLGVBQWUsdUNBQUk7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUMwQjs7QUFFaEQsNkRBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbjpyb290IHtcbiAgICAtLXNpZGViYXItaXRlbS1pbm5lci1wYWRkaW5nOiA4cHggNXB4O1xuICAgIC0tc3ZnLXdvcmRzLWdhcDogMC41cmVtO1xuICAgIC0tbGlnaHQtZ3JleTogcmdiKDI0NiwgMjQ2LCAyNDYpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvZmlsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXN2Zy13b3Jkcy1nYXApO1xufVxuXG4ucHJvZmlsZXBpYyB7XG4gICAgbWF4LWhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMXJlbTtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG59XG5cbi5hZGQtdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyMTQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICAgIHBhZGRpbmc6IHZhcigtLXNpZGViYXItaXRlbS1pbm5lci1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24uc2lkZWJhci1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5tYWluYmFyID4gLnNpZGViYXItaXRlbTpob3ZlciwgLmNhdGVnb3JpZXMgPiAuc2lkZWJhci1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnN2ZyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDUwJSkgc2VwaWEoMTUwJSkgaHVlLXJvdGF0ZSgtNTBkZWcpIGNvbnRyYXN0KDE1MCUpIHNhdHVyYXRlKDYpIGJyaWdodG5lc3MoOTAlKTtcbiAgICB9XG59XG5cbi5zdmcsIC5saXN0LW1hcmtlciB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgbWF4LWhlaWdodDogMS4ycmVtOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrID4gaW5wdXQuc3ZnIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZmxleDogNDtcbiAgICBwYWRkaW5nOiA1cmVtIDdyZW07XG59XG5cbi5wcm9qZWN0cyAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5wcm9qZWN0cyAuc3VidGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50YXNrcyB7XG4gICAgYm9yZGVyLXRvcDogcmdiKDIwNSwgMjA1LCAyMDUpIHNvbGlkIDFweDtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAzZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tzID4gOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICBhY2NlbnQtY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogY2xhbXAoMzB2dywgMzAwcHgsIDQ1dncpO1xufVxuXG4uZGVzY3JpcHRpb24tc3BhY2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNhcmV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJldDo6YmVmb3JlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTE1cHg7XG4gICAgbGVmdDogOTYlO1xuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMGEwNzA3O1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5jYXJldDo6YWZ0ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYyg5NiUgKyAxcHgpO1xuICAgIHRvcDogLTE1cHg7XG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNmZmY7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4uZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogMzUlO1xuICAgIG1pbi1oZWlnaHQ6IDQ1dmg7XG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCAzM3Z3LCA1MDBweCk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4uZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDNyZW0gMXJlbTtcbn1cblxuLmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4uaW5wdXQtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59ICAgXG5cbi5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XG4gICAgd2lkdGg6IDZyZW07XG59XG5cbmZpZWxkc2V0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC44cmVtO1xufVxuXG5sZWdlbmQge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuZmllbGRzZXQgPiAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxpbnB1dFt0eXBlPVwidGltZVwiXSwgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcbiAgICB3aWR0aDogMjVjaDtcbn1cblxudGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlcmVkO1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYWNjZW50LWNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAxMHJlbTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjE2LCAyMTYsIDAuODYpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbmlzaGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZmluaXNoZWQ6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJhY2tncm91bmQ6IHJnYig4NSwgODUsIDg1KTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbi5wcmlvcml0eSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWluLXdpZHRoOiAycmVtO1xufVxuXG4uaGlnaCB7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4ubWlkZGxlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMTQ5LCAwKTtcbn1cblxuLmxvdyB7XG4gICAgY29sb3I6IHJnYigxNSwgMTc1LCAwKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvR0FBb0c7QUFDeEc7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lB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QjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNpZGViYXItaXRlbS1pbm5lci1wYWRkaW5nOiA4cHggNXB4O1xcbiAgICAtLXN2Zy13b3Jkcy1nYXA6IDAuNXJlbTtcXG4gICAgLS1saWdodC1ncmV5OiByZ2IoMjQ2LCAyNDYsIDI0Nik7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvZmlsZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJvZmlsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IHZhcigtLXN2Zy13b3Jkcy1nYXApO1xcbn1cXG5cXG4ucHJvZmlsZXBpYyB7XFxuICAgIG1heC1oZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRhc2sge1xcbiAgICBtaW4td2lkdGg6IDJyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxufVxcblxcbi5hZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjE0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJyZW07XFxuICAgIG1pbi13aWR0aDogMjUwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNpZGViYXItaXRlbS1pbm5lci1wYWRkaW5nKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuYnV0dG9uLnNpZGViYXItaXRlbSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWFpbmJhciA+IC5zaWRlYmFyLWl0ZW06aG92ZXIsIC5jYXRlZ29yaWVzID4gLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjE0KTtcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAuc3ZnIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDUwJSkgc2VwaWEoMTUwJSkgaHVlLXJvdGF0ZSgtNTBkZWcpIGNvbnRyYXN0KDE1MCUpIHNhdHVyYXRlKDYpIGJyaWdodG5lc3MoOTAlKTtcXG4gICAgfVxcbn1cXG5cXG4uc3ZnLCAubGlzdC1tYXJrZXIge1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgbWF4LWhlaWdodDogMS4ycmVtOyBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzayA+IGlucHV0LnN2ZyB7XFxuICAgIHdpZHRoOiAxLjVyZW07XFxuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnN1YmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgICBmbGV4OiA0O1xcbiAgICBwYWRkaW5nOiA1cmVtIDdyZW07XFxufVxcblxcbi5wcm9qZWN0cyAudGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgLnN1YnRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgYm9yZGVyLXRvcDogcmdiKDIwNSwgMjA1LCAyMDUpIHNvbGlkIDFweDtcXG4gICAgcGFkZGluZzogMS41cmVtIDA7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAzZnI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrcyA+IDpsYXN0LWNoaWxkIHtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBoZWlnaHQ6IDEuMnJlbTtcXG4gICAgYWNjZW50LWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzay1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IGNsYW1wKDMwdncsIDMwMHB4LCA0NXZ3KTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXNwYWNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuXFxuLmNhcmV0IHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2FyZXQ6OmJlZm9yZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAtMTVweDtcXG4gICAgbGVmdDogOTYlO1xcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzBhMDcwNztcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuICBcXG4gIC5jYXJldDo6YWZ0ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IGNhbGMoOTYlICsgMXB4KTtcXG4gICAgdG9wOiAtMTVweDtcXG4gICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNmZmY7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbi5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTUlO1xcbiAgICBsZWZ0OiAzNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMzN2dywgNTAwcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDNyZW0gMXJlbTtcXG59XFxuXFxuLmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn0gICBcXG5cXG4uaW5wdXQtY29udGFpbmVyID4gbGFiZWwge1xcbiAgICB3aWR0aDogNnJlbTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC44cmVtO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbmZpZWxkc2V0ID4gLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0saW5wdXRbdHlwZT1cXFwidGltZVxcXCJdLCB0ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgd2lkdGg6IDI1Y2g7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5pbnB1dDpmb2N1cyB7XFxuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlcmVkO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gICAgYWNjZW50LWNvbG9yOiBvcmFuZ2VyZWQ7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWluLXdpZHRoOiAxMHJlbTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC44Nik7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZpbmlzaGVkIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5maW5pc2hlZDphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODUsIDg1LCA4NSk7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgfVxcblxcbi5wcmlvcml0eSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBtaW4td2lkdGg6IDJyZW07XFxufVxcblxcbi5oaWdoIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbn1cXG5cXG4ubWlkZGxlIHtcXG4gICAgY29sb3I6IHJnYigyNTUsIDE0OSwgMCk7XFxufVxcblxcbi5sb3cge1xcbiAgICBjb2xvcjogcmdiKDE1LCAxNzUsIDApO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgTGlzdCB7XG4gICAgLy8gcmVzcG9uc2liaWxpdGllcyByZWxhdGVkIHRvIGxpc3Qgb25seVxuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jYXRlZ29yeUxpc3QgPSBbXVxuICAgIH1cbiAgICBcbiAgICBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayA9ICh1dWlkKSA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLnV1aWQgIT09IHV1aWQpXG4gICAgfVxuXG4gICAgZmluZFRhc2sgPSAodXVpZCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQXJyID0gdGhpcy5saXN0LmZpbHRlcigodGFzaykgPT4gdGFzay51dWlkID09PSB1dWlkKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJbMF1cbiAgICB9XG5cbiAgICBzaGlmdEZpbmlzaGVkID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaW5pc2hlZCA9IFtdO1xuICAgICAgICBjb25zdCBhY3RpdmUgPSBbXTtcbiAgICAgICAgLy8gZ28gdG8gZmlyc3QgZmluaXNoZWQgaXRlbSBhbmQgZGVsZXRlIGZpbmlzaGVkIGl0ZW1zXG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIGZpbmlzaGVkLnB1c2godGFzayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZS5wdXNoKHRhc2spXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIFxuICAgICAgICB0aGlzLmxpc3QgPSBhY3RpdmUuY29uY2F0KGZpbmlzaGVkKTtcbiAgICB9XG5cbiAgICBhY3RpdmVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdC5maWx0ZXIoKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlKVxuICAgIH1cblxuICAgIGFycmFuZ2VBY3RpdmVUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IGFjdGl2ZSA9IHRoaXMuYWN0aXZlVGFza3MoKTtcbiAgICAgICAgY29uc3Qgc2xpY2VkID0gdGhpcy5saXN0LnNsaWNlKGFjdGl2ZS5sZW5ndGgsIHRoaXMubGlzdC5sZW5ndGgpXG5cblxuICAgICAgICAvLyBzb3J0IGFjdGl2ZSBhcnJheVxuICAgICAgICBhY3RpdmUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGIuY29udmVydFByaW9yaXR5KGIucHJpb3JpdHkpLmxlbmd0aCAtIGEuY29udmVydFByaW9yaXR5KGEucHJpb3JpdHkpLmxlbmd0aFxuICAgICAgICB9KSAgXG5cbiAgICAgICAgLy8gc2xpY2UgdG8gZmluZCBjb21wbGV0ZWQgYXJyYXkgYW5kIGNvbmNhdCB0byBhY3RpdmUgbGlzdFxuICAgICAgICB0aGlzLmxpc3QgPSBhY3RpdmUuY29uY2F0KHNsaWNlZClcbiAgICB9XG5cbiAgICAvLyBjaGVjayBpZiB0YXNrcyBhcmUgcGFydCBvZiBjbGlja2VkIGNhdGVnb3J5XG4gICAgc29ydENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3Jpc2VkID0gW107XG4gICAgICAgIGNvbnN0IG5vdENhdGVnb3Jpc2VkID0gW107XG4gICAgICAgIHRoaXMubGlzdC5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay50YXNrY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgIHRhc2suZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmlzZWQucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFzay5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm90Q2F0ZWdvcmlzZWQucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgICAgIHRoaXMubGlzdCA9IGNhdGVnb3Jpc2VkLmNvbmNhdChub3RDYXRlZ29yaXNlZClcbiAgICB9XG5cbiAgICBnZXRSZW1haW5pbmdDYXRlZ29yaWVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICghcmVtYWluaW5nLmluY2x1ZGVzKHRhc2sudGFza2NhdGVnb3J5KSkgcmVtYWluaW5nLnB1c2godGFzay50YXNrY2F0ZWdvcnkpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmNhdGVnb3J5TGlzdCA9IHJlbWFpbmluZztcbiAgICB9XG5cbiAgICBhZGRDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICB0aGlzLmNhdGVnb3J5TGlzdC5wdXNoKGNhdGVnb3J5KTtcbiAgICB9XG5cbiAgICBzb3J0VG9kYXkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgICAgICBjb25zdCB0b2RheUFyciA9IFtdO1xuICAgICAgICBjb25zdCBub3RUb2RheUFyciA9IFtdO1xuICAgICAgICB0aGlzLmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgLy8gc2V0IGhvdXJzIHRvIHRoZSBzYW1lIHNvIHRoYXQgc29sZWx5IGRhdGUgaXMgY29tcGFyZWRcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZURhdGUpO1xuICAgICAgICAgICAgaWYgKGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCkgPT09IGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApKSB7XG4gICAgICAgICAgICAgICAgdGFzay5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0b2RheUFyci5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXNrLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBub3RUb2RheUFyci5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSBcbiAgICAgICAgdGhpcy5saXN0ID0gdG9kYXlBcnIuY29uY2F0KG5vdFRvZGF5QXJyKTtcbiAgICB9XG5cbiAgICByZW1vdmVFbXB0eUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5jYXRlZ29yeUxpc3QuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGAke2NhdGVnb3J5fWApXG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBMaXN0IH0iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tcIjtcblxuY2xhc3MgU3RvcmFnZSB7IFxuICBzdGF0aWMgc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0VGFza0xpc3QoKSB7XG4gICAgY29uc3QgdG9kb2xpc3QgPSBPYmplY3QuYXNzaWduKG5ldyBMaXN0KCksIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2RvbGlzdFwiKSkpO1xuXG4gICAgLy8gdXNlIG1hcCBpbnN0ZWFkIG9mIGZvcmVhY2ggYmVjYXVzZSBmb3JlYWNoIEFMV0FZUyByZXR1cm5zIHVuZGVmaW5lZCwgdW5saWtlIG1hcCwgd2hpY2ggcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIGNoYW5nZXNcbiAgICB0b2RvbGlzdC5saXN0ID0gdG9kb2xpc3QubGlzdC5tYXAodGFzayA9PiBPYmplY3QuYXNzaWduKG5ldyBUYXNrKCksIHRhc2spKTtcblxuICAgIHJldHVybiB0b2RvbGlzdFxuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRhc2tMaXN0KG5ld3RvZG9saXN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvbGlzdFwiLCBKU09OLnN0cmluZ2lmeShuZXd0b2RvbGlzdCkpXG4gIH1cbn1cblxuZXhwb3J0IHsgU3RvcmFnZSB9XG4gICIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrbmFtZSwgdGFza2NhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHksIHV1aWQsIGNvbXBsZXRlLCBkaXNwbGF5KSB7XG4gICAgICAgIHRoaXMudGFza25hbWUgPSB0YXNrbmFtZTtcbiAgICAgICAgdGhpcy50YXNrY2F0ZWdvcnkgPSB0YXNrY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLnV1aWQgPSB1dWlkO1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IGRpc3BsYXk7XG4gICAgfVxuXG4gICAgZWRpdFRhc2sodGFza25hbWUsIHRhc2tjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGFza25hbWUgPSB0YXNrbmFtZTtcbiAgICAgICAgdGhpcy50YXNrY2F0ZWdvcnkgPSB0YXNrY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnZlcnRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhISFcIlxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSBcIm1pZGRsZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhIVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlVGFzayhidG4pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgY2hlY2tib3hcbiAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXNldERpc3BsYXkoKSB7XG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9MaXN0XCI7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSBcIi4vU3RvcmFnZVwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3VGFzaywgcmVzZXREaXNwbGF5UHJvcGVydGllcyB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgcGVuY2lsIGZyb20gXCIuLi9zdmcvcGVuY2lsLnN2Z1wiO1xuaW1wb3J0IGR1c3RiaW4gZnJvbSBcIi4uL3N2Zy90cmFzaC1jYW4tb3V0bGluZS5zdmdcIjtcbmltcG9ydCBzaWduIGZyb20gXCIuLi9zdmcvZm9ybWF0LWxpc3QtdGV4dC5zdmdcIjtcblxuXG5mdW5jdGlvbiBkb21Db250cm9sbGVyKCkge1xuICAgIGxldCB0b0RvTGlzdDtcbiAgICBpZiAoU3RvcmFnZS5zdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb2xpc3RcIikpIHtcbiAgICAgICAgLy8gb3ZlcndyaXRlIExpc3QncyB0YXNrbGlzdCBhbmQgY2F0ZWdvcnlsaXN0XG4gICAgICAgIHRvRG9MaXN0ID0gU3RvcmFnZS5nZXRUYXNrTGlzdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvRG9MaXN0ID0gbmV3IExpc3QoKTtcbiAgICAgICAgU3RvcmFnZS51cGRhdGVUYXNrTGlzdChcInRvZG9saXN0XCIsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG4gICAgfVxuXG5cbiAgICBpbml0UGVybWFuZW50QnV0dG9ucygpO1xuICAgIGluaXRBZGRCdXR0b24oKTtcbiAgICBpbml0QWxsVGFza3NCdXR0b24odG9Eb0xpc3QpO1xuICAgIGluaXRUb2RheSh0b0RvTGlzdCk7XG5cbiAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgIGRpc3BsYXlBbGwodG9Eb0xpc3QpO1xuXG4gICAgaW5pdEFkZFRhc2tGb3JtKHRvRG9MaXN0KTtcblxuICAgIGluaXRFZGl0VGFza0Zvcm0odG9Eb0xpc3QpO1xufVxuXG5mdW5jdGlvbiBpbml0QWRkVGFza0Zvcm0odG9Eb0xpc3QpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1mb3JtXCIpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IGFkZFRhc2tEb20odG9Eb0xpc3QpKVxufVxuXG5mdW5jdGlvbiBpbml0RWRpdFRhc2tGb3JtKHRvRG9MaXN0KSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xuICAgICAgICAvLyBnZXQgZGF0YSBhdHRyIG9mIGZvcm0sIHdoaWNoIHJlZmxlY3RzIGl0ZW0gYmVpbmcgY2hhbmdlZFxuICAgICAgICBjb25zdCB0YXNrID0gdG9Eb0xpc3QuZmluZFRhc2soZm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhXCIpKTtcbiAgICAgICAgY29uc3Qgb2xkQ2F0ZWdvcnkgPSB0YXNrLnRhc2tjYXRlZ29yeTtcbiAgICAgICAgXG4gICAgICAgIHRhc2suZWRpdFRhc2soZm9ybS50YXNrbmFtZUVkaXQudmFsdWUsIFxuICAgICAgICAgICAgZm9ybS50YXNrY2F0ZWdvcnlFZGl0LnZhbHVlLCBcbiAgICAgICAgICAgIGZvcm0uZGVzY3JpcHRpb25FZGl0LnZhbHVlLFxuICAgICAgICAgICAgZm9ybS5kdWVEYXRlRWRpdC52YWx1ZSwgXG4gICAgICAgICAgICBmb3JtLmR1ZVRpbWVFZGl0LnZhbHVlLCBcbiAgICAgICAgICAgIGZvcm0ucHJpb3JpdHlFZGl0LnZhbHVlKTtcblxuICAgICAgICAvLyBpZiBvbGQgbGlzdCBkb2VzIG5vdCBpbmNsdWRlIG5ldyBjYXRlZ29yeSwgaW5jbHVkZSBpdFxuICAgICAgICBpZiAoIXRvRG9MaXN0LmNhdGVnb3J5TGlzdC5pbmNsdWRlcyhmb3JtLnRhc2tjYXRlZ29yeUVkaXQudmFsdWUpKSB7XG4gICAgICAgICAgICB0b0RvTGlzdC5hZGRDYXRlZ29yeShmb3JtLnRhc2tjYXRlZ29yeUVkaXQudmFsdWUpO1xuICAgICAgICAgICAgaW5pdENhdGVnb3JpZXMoZm9ybS50YXNrY2F0ZWdvcnlFZGl0LnZhbHVlLCB0b0RvTGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBjYXRlZ29yeSBjaGFuZ2VkLCByZW1vdmUgaXRcbiAgICAgICAgdG9Eb0xpc3QuZ2V0UmVtYWluaW5nQ2F0ZWdvcmllcygpO1xuICAgICAgICB0b0RvTGlzdC5yZW1vdmVFbXB0eUNhdGVnb3J5KG9sZENhdGVnb3J5KVxuXG4gICAgICAgIC8vIHVwZGF0ZSBTdG9yYWdlXG4gICAgICAgIFN0b3JhZ2UudXBkYXRlVGFza0xpc3QodG9Eb0xpc3QpO1xuICAgICAgICAgICAgXG4gICAgICAgIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgcmVzZXRBbGxEaXNwbGF5KCk7XG4gICAgICAgIGRpc3BsYXlBbGwodG9Eb0xpc3QpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFRhc2tEb20odG9Eb0xpc3QpIHtcbiAgICAvLyBjcmVhdGUgdGFza1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gICAgY29uc3QgdGFzayA9IGNyZWF0ZU5ld1Rhc2soXG4gICAgICAgIGZvcm0udGFza25hbWUudmFsdWUsIFxuICAgICAgICBmb3JtLnRhc2tjYXRlZ29yeS52YWx1ZSwgXG4gICAgICAgIGZvcm0uZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIGZvcm0uZHVlRGF0ZS52YWx1ZSwgXG4gICAgICAgIGZvcm0uZHVlVGltZS52YWx1ZSwgXG4gICAgICAgIGZvcm0ucHJpb3JpdHkudmFsdWUsIFxuICAgICAgICBjcnlwdG8ucmFuZG9tVVVJRCgpLCBcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRydWUpO1xuXG4gICAgLy8gY2hlY2sgaWYgY2F0ZWdvcmllcyBpbiBzZWN0aW9ucywgaWYgbm90IGluLCBhZGQgYW5kIGRpc3BsYXlcbiAgICBpZiAoIXRvRG9MaXN0LmNhdGVnb3J5TGlzdC5pbmNsdWRlcyhmb3JtLnRhc2tjYXRlZ29yeS52YWx1ZSkpIHtcbiAgICAgICAgdG9Eb0xpc3QuYWRkQ2F0ZWdvcnkoZm9ybS50YXNrY2F0ZWdvcnkudmFsdWUpO1xuICAgICAgICBpbml0Q2F0ZWdvcmllcyhmb3JtLnRhc2tjYXRlZ29yeS52YWx1ZSwgdG9Eb0xpc3QpO1xuICAgIH1cbiAgICBcbiAgICAvL3Jlc2V0IGZvcm0gXG4gICAgZm9ybS5yZXNldCgpXG5cbiAgICAvLyBhcHBlbmQgdGFzayB0byBsaXN0XG4gICAgdG9Eb0xpc3QuYWRkVGFzayh0YXNrKTtcblxuICAgIC8vIHVwZGF0ZSBTdG9yYWdlXG4gICAgU3RvcmFnZS51cGRhdGVUYXNrTGlzdCh0b0RvTGlzdCk7XG4gICAgXG4gICAgcmVzZXRBbGxEaXNwbGF5KCk7XG4gICAgZGlzcGxheUFsbCh0b0RvTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBbGwodG9Eb0xpc3QpIHtcbiAgICAvLyBzb3J0IGxpc3QgZmlyc3QgdGhlbiBkaXNwbGF5IGxpc3RcbiAgICB0b0RvTGlzdC5zaGlmdEZpbmlzaGVkKCk7XG4gICAgdG9Eb0xpc3QuYXJyYW5nZUFjdGl2ZVRhc2tzKCk7XG5cbiAgICB0b0RvTGlzdC5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY3JlYXRlVGFza0RvbSh0b0RvTGlzdCwgdGFzayk7XG4gICAgfSk7XG5cbiAgICB0b0RvTGlzdC5jYXRlZ29yeUxpc3QuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaW5pdENhdGVnb3JpZXMoY2F0ZWdvcnksIHRvRG9MaXN0KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWRpYWxvZ1wiKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0VGFza01vZGFsKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWRpYWxvZ1wiKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0QWxsRGlzcGxheSgpIHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FyZHNcIik7XG4gICAgY29uc3QgY2F0ZWdvcnlCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yaWVzXCIpO1xuICAgIHByb2plY3RDYXJkcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY2F0ZWdvcnlCdG5zLnRleHRDb250ZW50ID0gXCJcIjtcbn1cbiBcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEb20odG9Eb0xpc3QsIHRhc2spIHtcbiAgICBjb25zdCBwcm9qZWN0Q2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY2FyZHNcIilcblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGFza0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY2FyZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uU3BhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBkdXN0YmluQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHBlbmNpbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoXCJ0YXNrc1wiKTtcbiAgICB0YXNrcy5zZXRBdHRyaWJ1dGUoXCJkYXRhXCIsIHRhc2sudXVpZCk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIsIGAke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgdGFza2JveC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgZHVzdGJpbkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XG4gICAgcGVuY2lsQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgZGVzY3JpcHRpb25TcGFjZS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tc3BhY2VcIik7XG4gICAgY2FyZXQuY2xhc3NMaXN0LmFkZChcImNhcmV0XCIpO1xuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmNvbnZlcnRQcmlvcml0eSh0YXNrLnByaW9yaXR5KTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGFza25hbWU7XG4gICAgZGVzY3JpcHRpb25TcGFjZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWU6IFwiICsgdGFzay5kdWVEYXRlICsgXCIgXCIgKyB0YXNrLmR1ZVRpbWU7XG4gICAgdGFza0NhdGVnb3J5LnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrY2F0ZWdvcnl9ICNgO1xuXG4gICAgLy8gY2hlY2sgY29tcGxldGVkXG4gICAgaWYgKHRhc2suY29tcGxldGUpIHtcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZChcImZpbmlzaGVkXCIpO1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgY2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwZW5jaWxCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghdGFzay5kaXNwbGF5KSB7XG4gICAgICAgIHRhc2tzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgXG4gICAgZHVzdGJpbkJ0bi5zcmMgPSBkdXN0YmluO1xuICAgIGR1c3RiaW5CdG4ubmFtZSA9IFwiZGVsZXRlXCI7XG4gICAgZHVzdGJpbkJ0bi5pZCA9IFwiZGVsZXRlXCI7XG4gICAgZHVzdGJpbkJ0bi5jbGFzc0xpc3QuYWRkKFwic3ZnXCIsIFwiZGVsZXRlXCIpO1xuXG4gICAgcGVuY2lsQnRuLnNyYyA9IHBlbmNpbDtcbiAgICBwZW5jaWxCdG4ubmFtZSA9IFwiZWRpdFwiO1xuICAgIHBlbmNpbEJ0bi5pZCA9IFwiZWRpdFwiO1xuICAgIHBlbmNpbEJ0bi5jbGFzc0xpc3QuYWRkKFwic3ZnXCIsIFwiZWRpdFwiKTtcblxuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChjYXJldCk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblNwYWNlKTtcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQoZHVzdGJpbkJ0bik7XG4gICAgdGFza2JveC5hcHBlbmRDaGlsZChwZW5jaWxCdG4pO1xuICAgIFxuICAgIHRhc2tzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrYm94KTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnkpO1xuXG4gICAgcHJvamVjdENhcmRzLmFwcGVuZENoaWxkKHRhc2tzKTtcblxuICAgIC8vIGluaXQgYnV0dG9uc1xuICAgIGluaXREZWxldGVCdXR0b24odG9Eb0xpc3QsIHRhc2sudXVpZCwgdGFzaywgZHVzdGJpbkJ0bik7XG4gICAgaW5pdEVkaXRCdXR0b24odGFzay51dWlkLCBwZW5jaWxCdG4pO1xuICAgIGluaXRDYXJldChjYXJldCwgZGVzY3JpcHRpb25TcGFjZSk7XG4gICAgaW5pdENoZWNrQm94KHRvRG9MaXN0LCB0YXNrLnV1aWQsIGNoZWNrYm94KTtcbn1cblxuZnVuY3Rpb24gaW5pdFBlcm1hbmVudEJ1dHRvbnMoKSB7XG4gICAgY29uc3QgYWxsdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFsbC10YXNrcy1pbWdcIik7XG4gICAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWltZ1wiKTtcblxuICAgIGFsbHRhc2tzLnNyYyA9IHNpZ247XG4gICAgdG9kYXkuc3JjID0gc2lnbjtcbn1cblxuZnVuY3Rpb24gaW5pdEFsbFRhc2tzQnV0dG9uKHRvRG9MaXN0KSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhbGwtdGFza3NcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YnRpdGxlXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIHJlc2V0RGlzcGxheVByb3BlcnRpZXModG9Eb0xpc3QpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cbiAgICAgICAgcmVzZXRBbGxEaXNwbGF5KCk7XG4gICAgICAgIGRpc3BsYXlBbGwodG9Eb0xpc3QpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbml0QWRkQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWRkVGFza01vZGFsKTtcbn1cblxuZnVuY3Rpb24gaW5pdERlbGV0ZUJ1dHRvbih0b0RvTGlzdCwgdXVpZCwgdGFzaywgYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gZGVsZXRlIGVsZW1lbnRcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YXNrc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSB0b0RvTGlzdCBhcnJcbiAgICAgICAgdG9Eb0xpc3QuZGVsZXRlVGFzayh1dWlkKTtcblxuICAgICAgICAvLyBnZXQgdGhlIHJlbWFpbmluZyBjYXRlZ29yaWVzXG4gICAgICAgIHRvRG9MaXN0LmdldFJlbWFpbmluZ0NhdGVnb3JpZXMoKVxuICAgICAgICB0b0RvTGlzdC5yZW1vdmVFbXB0eUNhdGVnb3J5KHRhc2sudGFza2NhdGVnb3J5KVxuXG4gICAgICAgIC8vIHVwZGF0ZSBTdG9yYWdlXG4gICAgICAgIFN0b3JhZ2UudXBkYXRlVGFza0xpc3QodG9Eb0xpc3QpO1xuXG4gICAgICAgIHJlc2V0QWxsRGlzcGxheSgpO1xuXG4gICAgICAgIGRpc3BsYXlBbGwodG9Eb0xpc3QpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRFZGl0QnV0dG9uKHV1aWQsIGJ0bikge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIC8vIGNoYW5nZSBkYXRhIGF0dHIgb2YgZm9ybSB0byByZWZsZWN0IHRhc2sgYmVpbmcgY2hhbmdlZFxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgdXVpZCk7XG4gICAgICAgIC8vIHNob3cgbW9kYWwgdG8gaW5wdXQgZGV0YWlsc1xuICAgICAgICBkaXNwbGF5RWRpdFRhc2tNb2RhbCgpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRDYXJldChjYXJldCwgZGVzY3JpcHRpb24pIHtcbiAgICBjYXJldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSAoZGVzY3JpcHRpb24uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRDaGVja0JveCh0b0RvTGlzdCwgdXVpZCwgYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gRE9NIHN0cmlrZSB0aHJvdWdoXG4gICAgICAgIGNvbnN0IGNsb3Nlc3RUYXNrRWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza3NcIik7XG4gICAgICAgIGNsb3Nlc3RUYXNrRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZmluaXNoZWRcIik7XG5cbiAgICAgICAgLy8gZmluZCB0YXNrIGFuZCB1cGRhdGUgY29tcGxldGVcbiAgICAgICAgY29uc3QgdGFzayA9IHRvRG9MaXN0LmZpbmRUYXNrKHV1aWQpO1xuICAgICAgICB0YXNrLmNvbXBsZXRlVGFzayhidG4pO1xuXG4gICAgICAgIHJlc2V0QWxsRGlzcGxheSgpO1xuXG4gICAgICAgIGRpc3BsYXlBbGwodG9Eb0xpc3QpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRDYXRlZ29yaWVzKGNhdGVnb3J5LCB0b0RvTGlzdCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3JpZXNcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1YnRpdGxlXCIpO1xuXG4gICAgLy8gY3JlYXRlIGJ1dHRvbiBhbmQgYXBwZW5kIHRvIHRoZSBjYXRlZ29yaWVzIGxpc3RcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNhdGVnb3JpZXMtaXRlbVwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChjYXRlZ29yeSk7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1tYXJrZXJcIik7XG4gICAgcC5jbGFzc0xpc3QuYWRkKFwic3ViaGVhZGVyXCIpO1xuXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiI1wiO1xuICAgIHAudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcblxuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBidXR0b24uYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGJ1dHRvbilcblxuICAgIC8vIGFkZGV2ZW50bGlzdGVuZXIgdG8gc29ydCBjYXRlZ29yaWVzXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgdG9Eb0xpc3Quc29ydENhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcblxuICAgICAgICByZXNldEFsbERpc3BsYXkoKTtcbiAgICAgICAgZGlzcGxheUFsbCh0b0RvTGlzdCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRUb2RheSh0b0RvTGlzdCkge1xuICAgIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheVwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VidGl0bGVcIik7XG4gICAgdG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIHRvRG9MaXN0LnNvcnRUb2RheSgpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICAgICAgcmVzZXRBbGxEaXNwbGF5KCk7XG4gICAgICAgIGRpc3BsYXlBbGwodG9Eb0xpc3QpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7IGRvbUNvbnRyb2xsZXIgfSIsImltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9UYXNrXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sobmFtZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBwcmlvcml0eSwgdXVpZCwgY29tcGxldGVkLCBkaXNwbGF5KSB7XG4gICAgcmV0dXJuIG5ldyBUYXNrKG5hbWUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIHV1aWQsIGNvbXBsZXRlZCwgZGlzcGxheSlcbn1cblxuZnVuY3Rpb24gcmVzZXREaXNwbGF5UHJvcGVydGllcyh0b0RvTGlzdCkge1xuICAgIHRvRG9MaXN0Lmxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgdGFzay5yZXNldERpc3BsYXkoKVxuICAgIH0pO1xufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdUYXNrLCByZXNldERpc3BsYXlQcm9wZXJ0aWVzIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkb21Db250cm9sbGVyIH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuXG5kb21Db250cm9sbGVyKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=