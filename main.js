"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

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
    /* border: 1px red solid; */
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    /* border: 1px red solid; */\n}\n\n:root {\n    --sidebar-item-inner-padding: 8px 5px;\n    --svg-words-gap: 0.5rem;\n    --light-grey: rgb(246, 246, 246);\n}\n\n.container {\n    display: flex;\n}\n\n.profilebar {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n}\n\n.profilepic {\n    max-height: 2rem;\n    width: 1rem;\n}\n\n.add-task {\n    min-width: 2rem;\n    border-radius: 10px;\n    padding: 8px 10px;\n    text-align: center;\n    border-style: none;\n    color: orangered;\n    background-color: var(--light-grey);\n}\n\n.add-task:hover {\n    background-color: rgb(255, 255, 214);\n    cursor: pointer;\n    color: orangered;\n}\n\n.sidebar-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    min-width: 250px;\n    min-height: 100vh;\n    background-color: var(--light-grey);\n    padding: 1rem;\n}\n\n.sidebar-item {\n    padding: var(--sidebar-item-inner-padding);\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n    border-radius: 10px;\n}\n\nbutton.sidebar-item {\n    width: 100%;\n    background-color: var(--light-grey);\n    border-style: none;\n}\n\n.mainbar > .sidebar-item:hover, .categories > .sidebar-item:hover {\n    background-color: rgb(255, 255, 214);\n    color: orangered;\n    cursor: pointer;\n    .svg {\n        filter: invert(50%) sepia(150%) hue-rotate(-50deg) contrast(150%) saturate(6) brightness(90%);\n    }\n}\n\n.svg, .list-marker {\n    width: 1rem;\n    max-height: 1.2rem; \n    text-align: center;\n}\n\n.task > input.svg {\n    width: 1.5rem;\n    min-height: 1.5rem;\n}\n\n.subheader {\n    font-size: 1.2rem;\n}\n\n.content-container {\n    flex: 4;\n    padding: 5rem 7rem;\n}\n\n.projects .title {\n    margin-bottom: 2rem;\n}\n\n.projects .subtitle {\n    margin-bottom: 1rem;\n}\n\n.tasks {\n    border-top: rgb(205, 205, 205) solid 1px;\n    padding: 1.5rem 0;\n    display: grid;\n    grid-template-columns: 1fr 5fr 3fr;\n    align-items: center;\n}\n\n.tasks > :last-child {\n    text-align: end;\n}\n\ninput[type=\"checkbox\"] {\n    cursor: pointer;\n    width: 1.2rem;\n    height: 1.2rem;\n    accent-color: orangered;\n}\n\n.task {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.task-content {\n    display: flex;\n    flex-direction: column;\n    width: clamp(30vw, 300px, 45vw);\n}\n\n.description-space {\n    display: none;\n    margin-top: 1rem;\n}\n\n.caret {\n    position: relative;\n}\n\n.caret::before {\n    cursor: pointer;\n    content: '';\n    position: absolute;\n    top: -15px;\n    left: 96%;\n    border-top: 7px solid #0a0707;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n  }\n  \n  .caret::after {\n    cursor: pointer;\n    content: '';\n    position: absolute;\n    left: calc(96% + 1px);\n    top: -15px;\n    border-top: 6px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n  }\n\n.dialog {\n    position: absolute;\n    top: 15%;\n    left: 35%;\n    min-height: 45vh;\n    width: clamp(200px, 33vw, 500px);\n    border-radius: 20px;\n    border: none;\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.dialog-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding: 3rem 1rem;\n}\n\n.dialog::backdrop {\n    backdrop-filter: blur(3px);\n}\n\n.input-container{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}   \n\n.input-container > label {\n    width: 6rem;\n}\n\nfieldset {\n    border: none;\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\nlegend {\n    margin-bottom: 0.5rem;\n}\n\nfieldset > .input-container {\n    padding-left: 1rem;\n}\n\ninput[type=\"text\"], input[type=\"date\"],input[type=\"time\"], textarea {\n    padding: 5px;\n    border-radius: 5px;\n    outline: none;\n    border: solid black 1px;\n    width: 25ch;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput:focus {\n    border-color: orangered;\n    outline: none;\n}\n\ninput[type=\"radio\"] {\n    accent-color: orangered;\n}\n\nbutton[type=\"submit\"] {\n    align-self: center;\n    min-width: 10rem;\n    padding: 10px 20px;\n    border-radius: 15px;\n    border-style: none;\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgba(216, 216, 216, 0.86);\n    cursor: pointer;\n}\n\n.finished {\n    opacity: 0.5;\n    position: relative;\n}\n\n.finished:after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 1px;\n    background: rgb(85, 85, 85);\n    content: \"\";\n    width: 100%;\n    display: block;\n    pointer-events: none;\n  }\n\n.priority {\n    font-size: 1.5rem;\n    min-width: 2rem;\n}\n\n.high {\n    color: rgb(255, 0, 0);\n}\n\n.middle {\n    color: rgb(255, 149, 0);\n}\n\n.low {\n    color: rgb(15, 175, 0);\n}\n"],"sourceRoot":""}]);
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
    }
    
    addTask = (task) => {
        this.list.push(task);
    }

    deleteTask = (index) => {
        this.list = this.list.filter(task => task.index !== index)
    }

    findTask = (index) => {
        const taskArr = this.list.filter((task) => task.index === index);
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

    sortCategory = (category) => {
        return this.list.filter(task => task.taskcategory === category)
    }

    sortDueDate = (dueDate) => {

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
    constructor(taskname, taskcategory, description, dueDate, dueTime, priority, index, complete) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.description = description;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.index = index;
        this.complete = complete;
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
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _svg_pencil_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/pencil.svg */ "./svg/pencil.svg");
/* harmony import */ var _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/trash-can-outline.svg */ "./svg/trash-can-outline.svg");






function domController() {
    const toDoList = new _List__WEBPACK_IMPORTED_MODULE_0__.List();
    initAddButton();
    initCategories("fitness", toDoList);

    // initial render
    displayTasks(toDoList);

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
        task.editTask(form.tasknameEdit.value, 
            form.taskcategoryEdit.value, 
            form.descriptionEdit.value,
            form.dueDateEdit.value, 
            form.dueTimeEdit.value, 
            form.priorityEdit.value);

        form.reset();
        resetTaskDisplay();
        displayTasks(toDoList);
    })
}

function addTaskDom(toDoList) {
    // create task
    const form = document.querySelector(".add-task-form");
    const task = (0,_logic__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(
        form.taskname.value, 
        form.taskcategory.value, 
        form.description.value,
        form.dueDate.value, 
        form.dueTime.value, 
        form.priority.value, 
        crypto.randomUUID(), 
        false);
    
    //reset form 
    form.reset()

    // append task to list
    toDoList.addTask(task);
    
    resetTaskDisplay();
    displayTasks(toDoList);
}

function displayTasks(toDoList) {
    // sort list first then display list
    toDoList.shiftFinished();
    toDoList.arrangeActiveTasks();

    toDoList.list.forEach((task) => {
        createTaskDom(toDoList, task);
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

function resetTaskDisplay() {
    const projectCards = document.querySelector(".project-cards");
    projectCards.textContent = "";
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
    tasks.setAttribute("data", task.index);
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
    
    dustbinBtn.src = _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_3__;
    dustbinBtn.name = "delete";
    dustbinBtn.id = "delete";
    dustbinBtn.classList.add("svg", "delete");

    pencilBtn.src = _svg_pencil_svg__WEBPACK_IMPORTED_MODULE_2__;
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
    initDeleteButton(toDoList, task.index, dustbinBtn);
    initEditButton(task.index, pencilBtn);
    initCaret(caret, descriptionSpace);
    initCheckBox(toDoList, task.index, checkbox);
}

function initAddButton() {
    const btn = document.querySelector(".add-task");
    btn.addEventListener("click", displayAddTaskModal);
}

function initDeleteButton(toDoList, index, btn) {
    btn.addEventListener("click", e => {
        // delete element
        e.target.closest(".tasks").remove();
        
        // update toDoList arr
        toDoList.deleteTask(index);

        resetTaskDisplay();

        displayTasks(toDoList);
    })
}

function initEditButton(index, btn) {
    const form = document.querySelector(".edit-task-form");
    btn.addEventListener("click", e => {
        console.log(index);
        // change data attr of form to reflect task being changed
        form.setAttribute("data", index);
        // show modal to input details 
        displayEditTaskModal();
    })
}

function initCaret(caret, description) {
    caret.addEventListener("click", e => {
        description.style.display = (description.style.display === "block") ? "none" : "block";
    })
}

function initCheckBox(toDoList, index, btn) {
    btn.addEventListener("click", e => {
        // DOM strike through
        const closestTaskElement = e.target.closest(".tasks");
        closestTaskElement.classList.add("finished");

        // find task and update complete
        const task = toDoList.findTask(index);
        task.completeTask(btn);

        resetTaskDisplay();

        displayTasks(toDoList);
    })
}

function initCategories(category, toDoList) {
    const categories = document.querySelector(".categories")

    // create button and append to the categories list
    const button = document.createElement("button");
    const span = document.createElement("span");
    const p = document.createElement("p");

    button.classList.add("categories-item");
    button.classList.add("sidebar-item");
    span.classList.add("list-marker");
    p.classList.add("subheader");

    span.textContent = "#";
    p.textContent = `${category}`;

    button.appendChild(span);
    button.appendChild(p);

    categories.appendChild(button)

    // addeventlistener to sort categories
    button.addEventListener("click", e => {
        const sorted = toDoList.sortCategory(category);

    });
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _domController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domController */ "./src/domController.js");



(0,_domController__WEBPACK_IMPORTED_MODULE_1__.domController)()

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewTask: () => (/* binding */ createNewTask)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


function createNewTask(name, category, description, date, time, priority, index, completed) {
    return new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(name, category, description, date, time, priority, index, completed)
}



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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxV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O0FBRUE7QUFDQSx1QkFBdUIsU0FBUzs7QUFFaEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN0UHNCO0FBQzBCOztBQUVoRCw2REFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDSGlCOztBQUU5QjtBQUNBLGVBQWUsdUNBQUk7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xufVxuXG46cm9vdCB7XG4gICAgLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZzogOHB4IDVweDtcbiAgICAtLXN2Zy13b3Jkcy1nYXA6IDAuNXJlbTtcbiAgICAtLWxpZ2h0LWdyZXk6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2ZpbGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcbn1cblxuLnByb2ZpbGVwaWMge1xuICAgIG1heC1oZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDFyZW07XG59XG5cbi5hZGQtdGFzayB7XG4gICAgbWluLXdpZHRoOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xufVxuXG4uYWRkLXRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjE0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uc2lkZWJhci1pdGVtIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3ZnLXdvcmRzLWdhcCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uLnNpZGViYXItaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4ubWFpbmJhciA+IC5zaWRlYmFyLWl0ZW06aG92ZXIsIC5jYXRlZ29yaWVzID4gLnNpZGViYXItaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyMTQpO1xuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5zdmcge1xuICAgICAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDE1MCUpIGh1ZS1yb3RhdGUoLTUwZGVnKSBjb250cmFzdCgxNTAlKSBzYXR1cmF0ZSg2KSBicmlnaHRuZXNzKDkwJSk7XG4gICAgfVxufVxuXG4uc3ZnLCAubGlzdC1tYXJrZXIge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIG1heC1oZWlnaHQ6IDEuMnJlbTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzayA+IGlucHV0LnN2ZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XG59XG5cbi5zdWJoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIGZsZXg6IDQ7XG4gICAgcGFkZGluZzogNXJlbSA3cmVtO1xufVxuXG4ucHJvamVjdHMgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ucHJvamVjdHMgLnN1YnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGFza3Mge1xuICAgIGJvcmRlci10b3A6IHJnYigyMDUsIDIwNSwgMjA1KSBzb2xpZCAxcHg7XG4gICAgcGFkZGluZzogMS41cmVtIDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgM2ZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrcyA+IDpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiAxLjJyZW07XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgYWNjZW50LWNvbG9yOiBvcmFuZ2VyZWQ7XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGFzay1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IGNsYW1wKDMwdncsIDMwMHB4LCA0NXZ3KTtcbn1cblxuLmRlc2NyaXB0aW9uLXNwYWNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jYXJldCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZXQ6OmJlZm9yZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGxlZnQ6IDk2JTtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgIzBhMDcwNztcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAuY2FyZXQ6OmFmdGVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IGNhbGMoOTYlICsgMXB4KTtcbiAgICB0b3A6IC0xNXB4O1xuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuLmRpYWxvZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUlO1xuICAgIGxlZnQ6IDM1JTtcbiAgICBtaW4taGVpZ2h0OiA0NXZoO1xuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMzN2dywgNTAwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbn1cblxuLmRpYWxvZy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW07XG59XG5cbi5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLmlucHV0LWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAgIFxuXG4uaW5wdXQtY29udGFpbmVyID4gbGFiZWwge1xuICAgIHdpZHRoOiA2cmVtO1xufVxuXG5maWVsZHNldCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDAuOHJlbTtcbn1cblxubGVnZW5kIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbmZpZWxkc2V0ID4gLmlucHV0LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgaW5wdXRbdHlwZT1cImRhdGVcIl0saW5wdXRbdHlwZT1cInRpbWVcIl0sIHRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG4gICAgd2lkdGg6IDI1Y2g7XG59XG5cbnRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZXJlZDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlcmVkO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTByZW07XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxNiwgMjE2LCAwLjg2KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maW5pc2hlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbmlzaGVkOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODUsIDg1LCA4NSk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4ucHJpb3JpdHkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1pbi13aWR0aDogMnJlbTtcbn1cblxuLmhpZ2gge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbn1cblxuLm1pZGRsZSB7XG4gICAgY29sb3I6IHJnYigyNTUsIDE0OSwgMCk7XG59XG5cbi5sb3cge1xuICAgIGNvbG9yOiByZ2IoMTUsIDE3NSwgMCk7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsb0dBQW9HO0lBQ3BHLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyx1QkFBdUI7SUFDdkIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNi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QUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZzogOHB4IDVweDtcXG4gICAgLS1zdmctd29yZHMtZ2FwOiAwLjVyZW07XFxuICAgIC0tbGlnaHQtZ3JleTogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2ZpbGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2ZpbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcXG59XFxuXFxuLnByb2ZpbGVwaWMge1xcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgbWluLXdpZHRoOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3ZnLXdvcmRzLWdhcCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1haW5iYXIgPiAuc2lkZWJhci1pdGVtOmhvdmVyLCAuY2F0ZWdvcmllcyA+IC5zaWRlYmFyLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLnN2ZyB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDE1MCUpIGh1ZS1yb3RhdGUoLTUwZGVnKSBjb250cmFzdCgxNTAlKSBzYXR1cmF0ZSg2KSBicmlnaHRuZXNzKDkwJSk7XFxuICAgIH1cXG59XFxuXFxuLnN2ZywgLmxpc3QtbWFya2VyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuMnJlbTsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgPiBpbnB1dC5zdmcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5zdWJoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogNDtcXG4gICAgcGFkZGluZzogNXJlbSA3cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgLnRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIC5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHJnYigyMDUsIDIwNSwgMjA1KSBzb2xpZCAxcHg7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgM2ZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgPiA6bGFzdC1jaGlsZCB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiBjbGFtcCgzMHZ3LCAzMDBweCwgNDV2dyk7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1zcGFjZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxufVxcblxcbi5jYXJldCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNhcmV0OjpiZWZvcmUge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTE1cHg7XFxuICAgIGxlZnQ6IDk2JTtcXG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMwYTA3MDc7XFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgXFxuICAuY2FyZXQ6OmFmdGVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiBjYWxjKDk2JSArIDFweCk7XFxuICAgIHRvcDogLTE1cHg7XFxuICAgIGJvcmRlci10b3A6IDZweCBzb2xpZCAjZmZmO1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIH1cXG5cXG4uZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDE1JTtcXG4gICAgbGVmdDogMzUlO1xcbiAgICBtaW4taGVpZ2h0OiA0NXZoO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDMzdncsIDUwMHB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxufVxcblxcbi5kaWFsb2ctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAzcmVtIDFyZW07XFxufVxcblxcbi5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICAgXFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuOHJlbTtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5maWVsZHNldCA+IC5pbnB1dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSwgdGV4dGFyZWEge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIHdpZHRoOiAyNWNoO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjE2LCAyMTYsIDAuODYpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maW5pc2hlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmluaXNoZWQ6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNTAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWluLXdpZHRoOiAycmVtO1xcbn1cXG5cXG4uaGlnaCB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG59XFxuXFxuLm1pZGRsZSB7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAxNDksIDApO1xcbn1cXG5cXG4ubG93IHtcXG4gICAgY29sb3I6IHJnYigxNSwgMTc1LCAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIExpc3Qge1xuICAgIC8vIHJlc3BvbnNpYmlsaXRpZXMgcmVsYXRlZCB0byBsaXN0IG9ubHlcbiAgICBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ID0gW107XG4gICAgfVxuICAgIFxuICAgIGFkZFRhc2sgPSAodGFzaykgPT4ge1xuICAgICAgICB0aGlzLmxpc3QucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMubGlzdC5maWx0ZXIodGFzayA9PiB0YXNrLmluZGV4ICE9PSBpbmRleClcbiAgICB9XG5cbiAgICBmaW5kVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQXJyID0gdGhpcy5saXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaW5kZXgpO1xuICAgICAgICByZXR1cm4gdGFza0FyclswXVxuICAgIH1cblxuICAgIHNoaWZ0RmluaXNoZWQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmlzaGVkID0gW107XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9IFtdO1xuICAgICAgICAvLyBnbyB0byBmaXJzdCBmaW5pc2hlZCBpdGVtIGFuZCBkZWxldGUgZmluaXNoZWQgaXRlbXNcbiAgICAgICAgdGhpcy5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgZmluaXNoZWQucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlLnB1c2godGFzaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkgXG4gICAgICAgIHRoaXMubGlzdCA9IGFjdGl2ZS5jb25jYXQoZmluaXNoZWQpO1xuICAgIH1cblxuICAgIGFjdGl2ZVRhc2tzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpXG4gICAgfVxuXG4gICAgYXJyYW5nZUFjdGl2ZVRhc2tzID0gKCkgPT4ge1xuICAgICAgICBsZXQgYWN0aXZlID0gdGhpcy5hY3RpdmVUYXNrcygpO1xuICAgICAgICBjb25zdCBzbGljZWQgPSB0aGlzLmxpc3Quc2xpY2UoYWN0aXZlLmxlbmd0aCwgdGhpcy5saXN0Lmxlbmd0aClcblxuXG4gICAgICAgIC8vIHNvcnQgYWN0aXZlIGFycmF5XG4gICAgICAgIGFjdGl2ZS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYi5jb252ZXJ0UHJpb3JpdHkoYi5wcmlvcml0eSkubGVuZ3RoIC0gYS5jb252ZXJ0UHJpb3JpdHkoYS5wcmlvcml0eSkubGVuZ3RoXG4gICAgICAgIH0pICBcblxuICAgICAgICAvLyBzbGljZSB0byBmaW5kIGNvbXBsZXRlZCBhcnJheSBhbmQgY29uY2F0IHRvIGFjdGl2ZSBsaXN0XG4gICAgICAgIHRoaXMubGlzdCA9IGFjdGl2ZS5jb25jYXQoc2xpY2VkKVxuICAgIH1cblxuICAgIHNvcnRDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0LmZpbHRlcih0YXNrID0+IHRhc2sudGFza2NhdGVnb3J5ID09PSBjYXRlZ29yeSlcbiAgICB9XG5cbiAgICBzb3J0RHVlRGF0ZSA9IChkdWVEYXRlKSA9PiB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCB7IExpc3QgfSIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrbmFtZSwgdGFza2NhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHksIGluZGV4LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRhc2tuYW1lID0gdGFza25hbWU7XG4gICAgICAgIHRoaXMudGFza2NhdGVnb3J5ID0gdGFza2NhdGVnb3J5O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgZWRpdFRhc2sodGFza25hbWUsIHRhc2tjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGFza25hbWUgPSB0YXNrbmFtZTtcbiAgICAgICAgdGhpcy50YXNrY2F0ZWdvcnkgPSB0YXNrY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnZlcnRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhISFcIlxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSBcIm1pZGRsZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhIVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBsZXRlVGFzayhidG4pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG5cbiAgICAgICAgLy8gZGlzYWJsZSB0aGUgY2hlY2tib3hcbiAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHBlbmNpbCBmcm9tIFwiLi4vc3ZnL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBkdXN0YmluIGZyb20gXCIuLi9zdmcvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5cblxuZnVuY3Rpb24gZG9tQ29udHJvbGxlcigpIHtcbiAgICBjb25zdCB0b0RvTGlzdCA9IG5ldyBMaXN0KCk7XG4gICAgaW5pdEFkZEJ1dHRvbigpO1xuICAgIGluaXRDYXRlZ29yaWVzKFwiZml0bmVzc1wiLCB0b0RvTGlzdCk7XG5cbiAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG5cbiAgICBpbml0QWRkVGFza0Zvcm0odG9Eb0xpc3QpO1xuXG4gICAgaW5pdEVkaXRUYXNrRm9ybSh0b0RvTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGluaXRBZGRUYXNrRm9ybSh0b0RvTGlzdCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4gYWRkVGFza0RvbSh0b0RvTGlzdCkpXG59XG5cbmZ1bmN0aW9uIGluaXRFZGl0VGFza0Zvcm0odG9Eb0xpc3QpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gICAgICAgIC8vIGdldCBkYXRhIGF0dHIgb2YgZm9ybSwgd2hpY2ggcmVmbGVjdHMgaXRlbSBiZWluZyBjaGFuZ2VkXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0b0RvTGlzdC5maW5kVGFzayhmb3JtLmdldEF0dHJpYnV0ZShcImRhdGFcIikpO1xuICAgICAgICB0YXNrLmVkaXRUYXNrKGZvcm0udGFza25hbWVFZGl0LnZhbHVlLCBcbiAgICAgICAgICAgIGZvcm0udGFza2NhdGVnb3J5RWRpdC52YWx1ZSwgXG4gICAgICAgICAgICBmb3JtLmRlc2NyaXB0aW9uRWRpdC52YWx1ZSxcbiAgICAgICAgICAgIGZvcm0uZHVlRGF0ZUVkaXQudmFsdWUsIFxuICAgICAgICAgICAgZm9ybS5kdWVUaW1lRWRpdC52YWx1ZSwgXG4gICAgICAgICAgICBmb3JtLnByaW9yaXR5RWRpdC52YWx1ZSk7XG5cbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZXNldFRhc2tEaXNwbGF5KCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkVGFza0RvbSh0b0RvTGlzdCkge1xuICAgIC8vIGNyZWF0ZSB0YXNrXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlTmV3VGFzayhcbiAgICAgICAgZm9ybS50YXNrbmFtZS52YWx1ZSwgXG4gICAgICAgIGZvcm0udGFza2NhdGVnb3J5LnZhbHVlLCBcbiAgICAgICAgZm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgZm9ybS5kdWVEYXRlLnZhbHVlLCBcbiAgICAgICAgZm9ybS5kdWVUaW1lLnZhbHVlLCBcbiAgICAgICAgZm9ybS5wcmlvcml0eS52YWx1ZSwgXG4gICAgICAgIGNyeXB0by5yYW5kb21VVUlEKCksIFxuICAgICAgICBmYWxzZSk7XG4gICAgXG4gICAgLy9yZXNldCBmb3JtIFxuICAgIGZvcm0ucmVzZXQoKVxuXG4gICAgLy8gYXBwZW5kIHRhc2sgdG8gbGlzdFxuICAgIHRvRG9MaXN0LmFkZFRhc2sodGFzayk7XG4gICAgXG4gICAgcmVzZXRUYXNrRGlzcGxheSgpO1xuICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCkge1xuICAgIC8vIHNvcnQgbGlzdCBmaXJzdCB0aGVuIGRpc3BsYXkgbGlzdFxuICAgIHRvRG9MaXN0LnNoaWZ0RmluaXNoZWQoKTtcbiAgICB0b0RvTGlzdC5hcnJhbmdlQWN0aXZlVGFza3MoKTtcblxuICAgIHRvRG9MaXN0Lmxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrRG9tKHRvRG9MaXN0LCB0YXNrKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFkZFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWRpYWxvZ1wiKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFZGl0VGFza01vZGFsKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWRpYWxvZ1wiKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0VGFza0Rpc3BsYXkoKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNhcmRzXCIpO1xuICAgIHByb2plY3RDYXJkcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG4gXG5mdW5jdGlvbiBjcmVhdGVUYXNrRG9tKHRvRG9MaXN0LCB0YXNrKSB7XG4gICAgY29uc3QgcHJvamVjdENhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWNhcmRzXCIpXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHRhc2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGNhcmV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvblNwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgZHVzdGJpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBwZW5jaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG4gICAgdGFza3Muc2V0QXR0cmlidXRlKFwiZGF0YVwiLCB0YXNrLmluZGV4KTtcbiAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIiwgYCR7dGFzay5wcmlvcml0eX1gKTtcbiAgICB0YXNrYm94LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICBkdXN0YmluQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcbiAgICBwZW5jaWxCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltYWdlXCIpO1xuICAgIHRhc2tDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWNvbnRlbnRcIik7XG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKTtcbiAgICBkZXNjcmlwdGlvblNwYWNlLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1zcGFjZVwiKTtcbiAgICBjYXJldC5jbGFzc0xpc3QuYWRkKFwiY2FyZXRcIik7XG5cbiAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IHRhc2suY29udmVydFByaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50YXNrbmFtZTtcbiAgICBkZXNjcmlwdGlvblNwYWNlLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjogXCIgKyB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBcIkR1ZTogXCIgKyB0YXNrLmR1ZURhdGUgKyBcIiBcIiArIHRhc2suZHVlVGltZTtcbiAgICB0YXNrQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSBgJHt0YXNrLnRhc2tjYXRlZ29yeX0gI2A7XG5cbiAgICAvLyBjaGVjayBjb21wbGV0ZWRcbiAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwiZmluaXNoZWRcIik7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBlbmNpbEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICAgIFxuICAgIGR1c3RiaW5CdG4uc3JjID0gZHVzdGJpbjtcbiAgICBkdXN0YmluQnRuLm5hbWUgPSBcImRlbGV0ZVwiO1xuICAgIGR1c3RiaW5CdG4uaWQgPSBcImRlbGV0ZVwiO1xuICAgIGR1c3RiaW5CdG4uY2xhc3NMaXN0LmFkZChcInN2Z1wiLCBcImRlbGV0ZVwiKTtcblxuICAgIHBlbmNpbEJ0bi5zcmMgPSBwZW5jaWw7XG4gICAgcGVuY2lsQnRuLm5hbWUgPSBcImVkaXRcIjtcbiAgICBwZW5jaWxCdG4uaWQgPSBcImVkaXRcIjtcbiAgICBwZW5jaWxCdG4uY2xhc3NMaXN0LmFkZChcInN2Z1wiLCBcImVkaXRcIik7XG5cbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoY2FyZXQpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TcGFjZSk7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgICB0YXNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrYm94LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICB0YXNrYm94LmFwcGVuZENoaWxkKGR1c3RiaW5CdG4pO1xuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQocGVuY2lsQnRuKTtcbiAgICBcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza2JveCk7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5KTtcblxuICAgIHByb2plY3RDYXJkcy5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgICAvLyBpbml0IGJ1dHRvbnNcbiAgICBpbml0RGVsZXRlQnV0dG9uKHRvRG9MaXN0LCB0YXNrLmluZGV4LCBkdXN0YmluQnRuKTtcbiAgICBpbml0RWRpdEJ1dHRvbih0YXNrLmluZGV4LCBwZW5jaWxCdG4pO1xuICAgIGluaXRDYXJldChjYXJldCwgZGVzY3JpcHRpb25TcGFjZSk7XG4gICAgaW5pdENoZWNrQm94KHRvRG9MaXN0LCB0YXNrLmluZGV4LCBjaGVja2JveCk7XG59XG5cbmZ1bmN0aW9uIGluaXRBZGRCdXR0b24oKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRUYXNrTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBpbml0RGVsZXRlQnV0dG9uKHRvRG9MaXN0LCBpbmRleCwgYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gZGVsZXRlIGVsZW1lbnRcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YXNrc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSB0b0RvTGlzdCBhcnJcbiAgICAgICAgdG9Eb0xpc3QuZGVsZXRlVGFzayhpbmRleCk7XG5cbiAgICAgICAgcmVzZXRUYXNrRGlzcGxheSgpO1xuXG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdEVkaXRCdXR0b24oaW5kZXgsIGJ0bikge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgLy8gY2hhbmdlIGRhdGEgYXR0ciBvZiBmb3JtIHRvIHJlZmxlY3QgdGFzayBiZWluZyBjaGFuZ2VkXG4gICAgICAgIGZvcm0uc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBpbmRleCk7XG4gICAgICAgIC8vIHNob3cgbW9kYWwgdG8gaW5wdXQgZGV0YWlscyBcbiAgICAgICAgZGlzcGxheUVkaXRUYXNrTW9kYWwoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbml0Q2FyZXQoY2FyZXQsIGRlc2NyaXB0aW9uKSB7XG4gICAgY2FyZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gKGRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBpbml0Q2hlY2tCb3godG9Eb0xpc3QsIGluZGV4LCBidG4pIHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAvLyBET00gc3RyaWtlIHRocm91Z2hcbiAgICAgICAgY29uc3QgY2xvc2VzdFRhc2tFbGVtZW50ID0gZS50YXJnZXQuY2xvc2VzdChcIi50YXNrc1wiKTtcbiAgICAgICAgY2xvc2VzdFRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJmaW5pc2hlZFwiKTtcblxuICAgICAgICAvLyBmaW5kIHRhc2sgYW5kIHVwZGF0ZSBjb21wbGV0ZVxuICAgICAgICBjb25zdCB0YXNrID0gdG9Eb0xpc3QuZmluZFRhc2soaW5kZXgpO1xuICAgICAgICB0YXNrLmNvbXBsZXRlVGFzayhidG4pO1xuXG4gICAgICAgIHJlc2V0VGFza0Rpc3BsYXkoKTtcblxuICAgICAgICBkaXNwbGF5VGFza3ModG9Eb0xpc3QpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRDYXRlZ29yaWVzKGNhdGVnb3J5LCB0b0RvTGlzdCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3JpZXNcIilcblxuICAgIC8vIGNyZWF0ZSBidXR0b24gYW5kIGFwcGVuZCB0byB0aGUgY2F0ZWdvcmllcyBsaXN0XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yaWVzLWl0ZW1cIik7XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1tYXJrZXJcIik7XG4gICAgcC5jbGFzc0xpc3QuYWRkKFwic3ViaGVhZGVyXCIpO1xuXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiI1wiO1xuICAgIHAudGV4dENvbnRlbnQgPSBgJHtjYXRlZ29yeX1gO1xuXG4gICAgYnV0dG9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChwKTtcblxuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoYnV0dG9uKVxuXG4gICAgLy8gYWRkZXZlbnRsaXN0ZW5lciB0byBzb3J0IGNhdGVnb3JpZXNcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICBjb25zdCBzb3J0ZWQgPSB0b0RvTGlzdC5zb3J0Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuXG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGRvbUNvbnRyb2xsZXIgfSIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZG9tQ29udHJvbGxlciB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcblxuZG9tQ29udHJvbGxlcigpIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhuYW1lLCBjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBpbmRleCwgY29tcGxldGVkKSB7XG4gICAgcmV0dXJuIG5ldyBUYXNrKG5hbWUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIGluZGV4LCBjb21wbGV0ZWQpXG59XG5cbmV4cG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==