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
    grid-template-columns: 1fr 5fr 1fr;
    align-items: center;
}

.tasks > :last-child {
    text-align: end;
}

input[type="checkbox"] {
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
    min-width: 55ch;
}

.dialog {
    position: absolute;
    top: 25%;
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
    padding: 2rem;
}

.dialog::backdrop {
    background-color: grey;
    filter: blur(100rem);
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

input[type="text"], input[type="date"],input[type="time"] {
    padding: 5px;
    border-radius: 5px;
    outline: none;
    border: solid black 1px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oGAAoG;IACpG,2BAA2B;AAC/B;;AAEA;IACI,qCAAqC;IACrC,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,iBAAiB;IACjB,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf;QACI,6FAA6F;IACjG;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;IACxC,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,gCAAgC;IAChC,mBAAmB;IACnB,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,WAAW;IACX,2BAA2B;IAC3B,WAAW;IACX,WAAW;IACX,cAAc;IACd,oBAAoB;EACtB;;AAEF;IACI,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    /* border: 1px red solid; */\n}\n\n:root {\n    --sidebar-item-inner-padding: 8px 5px;\n    --svg-words-gap: 0.5rem;\n    --light-grey: rgb(246, 246, 246);\n}\n\n.container {\n    display: flex;\n}\n\n.profilebar {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n}\n\n.profilepic {\n    max-height: 2rem;\n    width: 1rem;\n}\n\n.add-task {\n    min-width: 2rem;\n    border-radius: 10px;\n    padding: 8px 10px;\n    text-align: center;\n    border-style: none;\n    color: orangered;\n    background-color: var(--light-grey);\n}\n\n.add-task:hover {\n    background-color: rgb(255, 255, 214);\n    cursor: pointer;\n    color: orangered;\n}\n\n.sidebar-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    min-width: 250px;\n    min-height: 100vh;\n    background-color: var(--light-grey);\n    padding: 1rem;\n}\n\n.sidebar-item {\n    padding: var(--sidebar-item-inner-padding);\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n    border-radius: 10px;\n}\n\nbutton.sidebar-item {\n    width: 100%;\n    background-color: var(--light-grey);\n    border-style: none;\n}\n\n.mainbar > .sidebar-item:hover, .categories > .sidebar-item:hover {\n    background-color: rgb(255, 255, 214);\n    color: orangered;\n    cursor: pointer;\n    .svg {\n        filter: invert(50%) sepia(150%) hue-rotate(-50deg) contrast(150%) saturate(6) brightness(90%);\n    }\n}\n\n.svg, .list-marker {\n    width: 1rem;\n    max-height: 1.2rem; \n    text-align: center;\n}\n\n.task > input.svg {\n    width: 1.5rem;\n    min-height: 1.5rem;\n}\n\n.subheader {\n    font-size: 1.2rem;\n}\n\n.content-container {\n    flex: 4;\n    padding: 5rem 7rem;\n}\n\n.projects .title {\n    margin-bottom: 2rem;\n}\n\n.projects .subtitle {\n    margin-bottom: 1rem;\n}\n\n.tasks {\n    border-top: rgb(205, 205, 205) solid 1px;\n    padding: 1.5rem 0;\n    display: grid;\n    grid-template-columns: 1fr 5fr 1fr;\n    align-items: center;\n}\n\n.tasks > :last-child {\n    text-align: end;\n}\n\ninput[type=\"checkbox\"] {\n    width: 1.2rem;\n    height: 1.2rem;\n    accent-color: orangered;\n}\n\n.task {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.task-content {\n    display: flex;\n    flex-direction: column;\n    min-width: 55ch;\n}\n\n.dialog {\n    position: absolute;\n    top: 25%;\n    left: 35%;\n    min-height: 45vh;\n    width: clamp(200px, 33vw, 500px);\n    border-radius: 20px;\n    border: none;\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.dialog-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding: 2rem;\n}\n\n.dialog::backdrop {\n    background-color: grey;\n    filter: blur(100rem);\n}\n\n.input-container{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}   \n\n.input-container > label {\n    width: 6rem;\n}\n\nfieldset {\n    border: none;\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\nlegend {\n    margin-bottom: 0.5rem;\n}\n\nfieldset > .input-container {\n    padding-left: 1rem;\n}\n\ninput[type=\"text\"], input[type=\"date\"],input[type=\"time\"] {\n    padding: 5px;\n    border-radius: 5px;\n    outline: none;\n    border: solid black 1px;\n}\n\ninput:focus {\n    border-color: orangered;\n    outline: none;\n}\n\ninput[type=\"radio\"] {\n    accent-color: orangered;\n}\n\nbutton[type=\"submit\"] {\n    align-self: center;\n    min-width: 10rem;\n    padding: 10px 20px;\n    border-radius: 15px;\n    border-style: none;\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgba(216, 216, 216, 0.86);\n    cursor: pointer;\n}\n\n.finished {\n    opacity: 0.5;\n    position: relative;\n}\n\n.finished:after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 1px;\n    background: rgb(85, 85, 85);\n    content: \"\";\n    width: 100%;\n    display: block;\n    pointer-events: none;\n  }\n\n.priority {\n    font-size: 1.5rem;\n}\n\n.high {\n    color: rgb(255, 0, 0);\n}\n\n.middle {\n    color: rgb(255, 149, 0);\n}\n\n.low {\n    color: rgb(15, 175, 0);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");


class List {
    // responsibilities related to list only
    constructor() {
        this.list = [];
    }
    
    addTask = (task) => {
        this.list.push(task);
        console.log(this.list);
    }

    deleteTask = (index) => {
        this.list.splice(index, 1);
        console.log(this.list);
    }

    findTask = (index) => {
        const taskArr = this.list.filter((task) => task.index === index);
        return taskArr[0]
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
    constructor(taskname, taskcategory, dueDate, dueTime, priority, index, complete) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
        this.dueDate = dueDate;
        this.dueTime = dueTime;
        this.priority = priority;
        this.index = index;
        this.complete = complete;
    }

    editTask(taskname, taskcategory, dueDate, dueTime, priority) {
        this.taskname = taskname;
        this.taskcategory = taskcategory;
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

    toggleComplete(bool) {
        return (bool) ? false : true;
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
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _svg_pencil_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../svg/pencil.svg */ "./svg/pencil.svg");
/* harmony import */ var _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../svg/trash-can-outline.svg */ "./svg/trash-can-outline.svg");






function domController() {
    const toDoList = new _List__WEBPACK_IMPORTED_MODULE_0__.List();
    initAddButton()

    // initial render
    displayTasks(toDoList)

    initAddTaskForm(toDoList)
}

function initAddTaskForm(toDoList) {
    const form = document.querySelector(".add-task-form");
    form.addEventListener("submit", e => addTaskDom(toDoList))
}

function initEditTaskForm(toDoList, task) {
    const form = document.querySelector(".edit-task-form");
    form.addEventListener("submit", e => {
        task.editTask(form.tasknameEdit.value, 
            form.taskcategoryEdit.value, 
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
    const task = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createNewTask)(
        form.taskname.value, 
        form.taskcategory.value, 
        form.dueDate.value, 
        form.dueTime.value, 
        form.priority.value, 
        toDoList.list.length, 
        false)
    
    //reset form 
    form.reset()

    // append task to list
    toDoList.addTask(task);
    
    resetTaskDisplay();
        
    //reset page first then display all
    displayTasks(toDoList)
}

function displayTasks(toDoList) {
    toDoList.list.forEach((task, index) => {
        createTaskDom(toDoList, task, index);
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
 
function createTaskDom(toDoList, task, index) {
    const projectCards = document.querySelector(".project-cards")

    const tasks = document.createElement("div");
    const priority = document.createElement("div");
    const taskbox = document.createElement("div");
    const checkbox = document.createElement("input");
    const taskContent = document.createElement("div");
    const taskName = document.createElement("p");
    const details = document.createElement("div");
    const dueDate = document.createElement("span");
    const dustbinBtn = document.createElement("input");
    const pencilBtn = document.createElement("input");
    const taskCategory = document.createElement("p");

    tasks.classList.add("tasks");
    tasks.setAttribute("data", index);
    priority.classList.add("priority", `${task.priority}`);
    taskbox.classList.add("task");
    checkbox.setAttribute("type", "checkbox");
    dustbinBtn.setAttribute("type", "image");
    pencilBtn.setAttribute("type", "image");
    taskContent.classList.add("task-content")
    details.classList.add("details")

    priority.textContent = task.convertPriority(task.priority);
    taskName.textContent = task.taskname;
    dueDate.textContent = "Due: " + task.dueDate;
    taskCategory.textContent = task.taskcategory + " #";
    
    dustbinBtn.src = _svg_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_4__;
    dustbinBtn.name = "delete";
    dustbinBtn.id = "delete";
    dustbinBtn.classList.add("svg", "delete");

    pencilBtn.src = _svg_pencil_svg__WEBPACK_IMPORTED_MODULE_3__;
    pencilBtn.name = "edit";
    pencilBtn.id = "edit";
    pencilBtn.classList.add("svg", "edit");

    details.appendChild(dueDate);

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

    // init delete buttons
    initDeleteButton(toDoList, index, dustbinBtn);
    initEditButton(toDoList, index, pencilBtn);
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
        console.log(toDoList.list)
    })
}

function initEditButton(toDoList, index, btn) {
    const task = toDoList.findTask(index);
    console.log(task)
    btn.addEventListener("click", e => {        
        // show modal to input details 
        displayEditTaskModal();
        initEditTaskForm(toDoList, task)
    })
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


function createNewTask(name, category, date, time, priority, index, completed) {
    return new _Task__WEBPACK_IMPORTED_MODULE_0__.Task(name, category, date, time, priority, index, completed)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUs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IndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9MaXN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OidUcmVidWNoZXQgTVMnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zJywgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgLyogYm9yZGVyOiAxcHggcmVkIHNvbGlkOyAqL1xufVxuXG46cm9vdCB7XG4gICAgLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZzogOHB4IDVweDtcbiAgICAtLXN2Zy13b3Jkcy1nYXA6IDAuNXJlbTtcbiAgICAtLWxpZ2h0LWdyZXk6IHJnYigyNDYsIDI0NiwgMjQ2KTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnByb2ZpbGViYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcbn1cblxuLnByb2ZpbGVwaWMge1xuICAgIG1heC1oZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDFyZW07XG59XG5cbi5hZGQtdGFzayB7XG4gICAgbWluLXdpZHRoOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xufVxuXG4uYWRkLXRhc2s6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjE0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uc2lkZWJhci1pdGVtIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogdmFyKC0tc3ZnLXdvcmRzLWdhcCk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuYnV0dG9uLnNpZGViYXItaXRlbSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4ubWFpbmJhciA+IC5zaWRlYmFyLWl0ZW06aG92ZXIsIC5jYXRlZ29yaWVzID4gLnNpZGViYXItaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyMTQpO1xuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5zdmcge1xuICAgICAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDE1MCUpIGh1ZS1yb3RhdGUoLTUwZGVnKSBjb250cmFzdCgxNTAlKSBzYXR1cmF0ZSg2KSBicmlnaHRuZXNzKDkwJSk7XG4gICAgfVxufVxuXG4uc3ZnLCAubGlzdC1tYXJrZXIge1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIG1heC1oZWlnaHQ6IDEuMnJlbTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFzayA+IGlucHV0LnN2ZyB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XG59XG5cbi5zdWJoZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uY29udGVudC1jb250YWluZXIge1xuICAgIGZsZXg6IDQ7XG4gICAgcGFkZGluZzogNXJlbSA3cmVtO1xufVxuXG4ucHJvamVjdHMgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ucHJvamVjdHMgLnN1YnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udGFza3Mge1xuICAgIGJvcmRlci10b3A6IHJnYigyMDUsIDIwNSwgMjA1KSBzb2xpZCAxcHg7XG4gICAgcGFkZGluZzogMS41cmVtIDA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrcyA+IDpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDEuMnJlbTtcbiAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICBhY2NlbnQtY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDU1Y2g7XG59XG5cbi5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1JTtcbiAgICBsZWZ0OiAzNSU7XG4gICAgbWluLWhlaWdodDogNDV2aDtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDMzdncsIDUwMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogMnJlbTtcbn1cblxuLmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gICAgZmlsdGVyOiBibHVyKDEwMHJlbSk7XG59XG5cbi5pbnB1dC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gICBcblxuLmlucHV0LWNvbnRhaW5lciA+IGxhYmVsIHtcbiAgICB3aWR0aDogNnJlbTtcbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjhyZW07XG59XG5cbmxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5maWVsZHNldCA+IC5pbnB1dC1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdLGlucHV0W3R5cGU9XCJ0aW1lXCJdIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZXJlZDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlcmVkO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTByZW07XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5idXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxNiwgMjE2LCAwLjg2KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maW5pc2hlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmZpbmlzaGVkOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODUsIDg1LCA4NSk7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4ucHJpb3JpdHkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uaGlnaCB7XG4gICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xufVxuXG4ubWlkZGxlIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMTQ5LCAwKTtcbn1cblxuLmxvdyB7XG4gICAgY29sb3I6IHJnYigxNSwgMTc1LCAwKTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixvR0FBb0c7SUFDcEcsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLHVCQUF1QjtJQUN2QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Y7UUFDSSw2RkFBNkY7SUFDakc7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLE9BQU87SUFDUCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtFQUN0Qjs7QUFFRjtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZzogOHB4IDVweDtcXG4gICAgLS1zdmctd29yZHMtZ2FwOiAwLjVyZW07XFxuICAgIC0tbGlnaHQtZ3JleTogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2ZpbGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2ZpbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcXG59XFxuXFxuLnByb2ZpbGVwaWMge1xcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgbWluLXdpZHRoOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3ZnLXdvcmRzLWdhcCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1haW5iYXIgPiAuc2lkZWJhci1pdGVtOmhvdmVyLCAuY2F0ZWdvcmllcyA+IC5zaWRlYmFyLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLnN2ZyB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDE1MCUpIGh1ZS1yb3RhdGUoLTUwZGVnKSBjb250cmFzdCgxNTAlKSBzYXR1cmF0ZSg2KSBicmlnaHRuZXNzKDkwJSk7XFxuICAgIH1cXG59XFxuXFxuLnN2ZywgLmxpc3QtbWFya2VyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuMnJlbTsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgPiBpbnB1dC5zdmcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5zdWJoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogNDtcXG4gICAgcGFkZGluZzogNXJlbSA3cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgLnRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIC5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHJnYigyMDUsIDIwNSwgMjA1KSBzb2xpZCAxcHg7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgPiA6bGFzdC1jaGlsZCB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICBhY2NlbnQtY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDU1Y2g7XFxufVxcblxcbi5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMjUlO1xcbiAgICBsZWZ0OiAzNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDQ1dmg7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMzN2dywgNTAwcHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuLmRpYWxvZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxufVxcblxcbi5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gICAgZmlsdGVyOiBibHVyKDEwMHJlbSk7XFxufVxcblxcbi5pbnB1dC1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59ICAgXFxuXFxuLmlucHV0LWNvbnRhaW5lciA+IGxhYmVsIHtcXG4gICAgd2lkdGg6IDZyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuOHJlbTtcXG59XFxuXFxubGVnZW5kIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG5maWVsZHNldCA+IC5pbnB1dC1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSwgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdLGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZXJlZDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlcmVkO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogMTByZW07XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNiwgMjE2LCAyMTYsIDAuODYpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5maW5pc2hlZCB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uZmluaXNoZWQ6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogNTAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIH1cXG5cXG4ucHJpb3JpdHkge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5taWRkbGUge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMTQ5LCAwKTtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGNvbG9yOiByZ2IoMTUsIDE3NSwgMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5jbGFzcyBMaXN0IHtcbiAgICAvLyByZXNwb25zaWJpbGl0aWVzIHJlbGF0ZWQgdG8gbGlzdCBvbmx5XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcbiAgICB9XG5cbiAgICBmaW5kVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrQXJyID0gdGhpcy5saXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaW5kZXgpO1xuICAgICAgICByZXR1cm4gdGFza0FyclswXVxuICAgIH1cbn1cblxuZXhwb3J0IHsgTGlzdCB9IiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKHRhc2tuYW1lLCB0YXNrY2F0ZWdvcnksIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5LCBpbmRleCwgY29tcGxldGUpIHtcbiAgICAgICAgdGhpcy50YXNrbmFtZSA9IHRhc2tuYW1lO1xuICAgICAgICB0aGlzLnRhc2tjYXRlZ29yeSA9IHRhc2tjYXRlZ29yeTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICB9XG5cbiAgICBlZGl0VGFzayh0YXNrbmFtZSwgdGFza2NhdGVnb3J5LCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRhc2tuYW1lID0gdGFza25hbWU7XG4gICAgICAgIHRoaXMudGFza2NhdGVnb3J5ID0gdGFza2NhdGVnb3J5O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmR1ZVRpbWUgPSBkdWVUaW1lO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgY29udmVydFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgICAgIGlmIChwcmlvcml0eSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIiEhIVwiXG4gICAgICAgIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09IFwibWlkZGxlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBcIiEhXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcIiFcIlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQ29tcGxldGUoYm9vbCkge1xuICAgICAgICByZXR1cm4gKGJvb2wpID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBMaXN0IH0gZnJvbSBcIi4vTGlzdFwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi9sb2dpY1wiO1xuaW1wb3J0IHBlbmNpbCBmcm9tIFwiLi4vc3ZnL3BlbmNpbC5zdmdcIjtcbmltcG9ydCBkdXN0YmluIGZyb20gXCIuLi9zdmcvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5cbmZ1bmN0aW9uIGRvbUNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgdG9Eb0xpc3QgPSBuZXcgTGlzdCgpO1xuICAgIGluaXRBZGRCdXR0b24oKVxuXG4gICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICBkaXNwbGF5VGFza3ModG9Eb0xpc3QpXG5cbiAgICBpbml0QWRkVGFza0Zvcm0odG9Eb0xpc3QpXG59XG5cbmZ1bmN0aW9uIGluaXRBZGRUYXNrRm9ybSh0b0RvTGlzdCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4gYWRkVGFza0RvbSh0b0RvTGlzdCkpXG59XG5cbmZ1bmN0aW9uIGluaXRFZGl0VGFza0Zvcm0odG9Eb0xpc3QsIHRhc2spIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gICAgICAgIHRhc2suZWRpdFRhc2soZm9ybS50YXNrbmFtZUVkaXQudmFsdWUsIFxuICAgICAgICAgICAgZm9ybS50YXNrY2F0ZWdvcnlFZGl0LnZhbHVlLCBcbiAgICAgICAgICAgIGZvcm0uZHVlRGF0ZUVkaXQudmFsdWUsIFxuICAgICAgICAgICAgZm9ybS5kdWVUaW1lRWRpdC52YWx1ZSwgXG4gICAgICAgICAgICBmb3JtLnByaW9yaXR5RWRpdC52YWx1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZXNldFRhc2tEaXNwbGF5KCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkVGFza0RvbSh0b0RvTGlzdCkge1xuICAgIC8vIGNyZWF0ZSB0YXNrXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlTmV3VGFzayhcbiAgICAgICAgZm9ybS50YXNrbmFtZS52YWx1ZSwgXG4gICAgICAgIGZvcm0udGFza2NhdGVnb3J5LnZhbHVlLCBcbiAgICAgICAgZm9ybS5kdWVEYXRlLnZhbHVlLCBcbiAgICAgICAgZm9ybS5kdWVUaW1lLnZhbHVlLCBcbiAgICAgICAgZm9ybS5wcmlvcml0eS52YWx1ZSwgXG4gICAgICAgIHRvRG9MaXN0Lmxpc3QubGVuZ3RoLCBcbiAgICAgICAgZmFsc2UpXG4gICAgXG4gICAgLy9yZXNldCBmb3JtIFxuICAgIGZvcm0ucmVzZXQoKVxuXG4gICAgLy8gYXBwZW5kIHRhc2sgdG8gbGlzdFxuICAgIHRvRG9MaXN0LmFkZFRhc2sodGFzayk7XG4gICAgXG4gICAgcmVzZXRUYXNrRGlzcGxheSgpO1xuICAgICAgICBcbiAgICAvL3Jlc2V0IHBhZ2UgZmlyc3QgdGhlbiBkaXNwbGF5IGFsbFxuICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHRvRG9MaXN0KSB7XG4gICAgdG9Eb0xpc3QubGlzdC5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xuICAgICAgICBjcmVhdGVUYXNrRG9tKHRvRG9MaXN0LCB0YXNrLCBpbmRleCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRUYXNrTW9kYWwoKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1kaWFsb2dcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1kaWFsb2dcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tEaXNwbGF5KCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jYXJkc1wiKTtcblxuICAgIHByb2plY3RDYXJkcy50ZXh0Q29udGVudCA9IFwiXCI7XG59XG4gXG5mdW5jdGlvbiBjcmVhdGVUYXNrRG9tKHRvRG9MaXN0LCB0YXNrLCBpbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jYXJkc1wiKVxuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgZHVzdGJpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCBwZW5jaWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgdGFza0NhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG4gICAgdGFza3Muc2V0QXR0cmlidXRlKFwiZGF0YVwiLCBpbmRleCk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIsIGAke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgdGFza2JveC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgZHVzdGJpbkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XG4gICAgcGVuY2lsQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpXG4gICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKFwiZGV0YWlsc1wiKVxuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmNvbnZlcnRQcmlvcml0eSh0YXNrLnByaW9yaXR5KTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGFza25hbWU7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IFwiRHVlOiBcIiArIHRhc2suZHVlRGF0ZTtcbiAgICB0YXNrQ2F0ZWdvcnkudGV4dENvbnRlbnQgPSB0YXNrLnRhc2tjYXRlZ29yeSArIFwiICNcIjtcbiAgICBcbiAgICBkdXN0YmluQnRuLnNyYyA9IGR1c3RiaW47XG4gICAgZHVzdGJpbkJ0bi5uYW1lID0gXCJkZWxldGVcIjtcbiAgICBkdXN0YmluQnRuLmlkID0gXCJkZWxldGVcIjtcbiAgICBkdXN0YmluQnRuLmNsYXNzTGlzdC5hZGQoXCJzdmdcIiwgXCJkZWxldGVcIik7XG5cbiAgICBwZW5jaWxCdG4uc3JjID0gcGVuY2lsO1xuICAgIHBlbmNpbEJ0bi5uYW1lID0gXCJlZGl0XCI7XG4gICAgcGVuY2lsQnRuLmlkID0gXCJlZGl0XCI7XG4gICAgcGVuY2lsQnRuLmNsYXNzTGlzdC5hZGQoXCJzdmdcIiwgXCJlZGl0XCIpO1xuXG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIHRhc2tDb250ZW50LmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZChkZXRhaWxzKTtcblxuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQodGFza0NvbnRlbnQpO1xuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQoZHVzdGJpbkJ0bik7XG4gICAgdGFza2JveC5hcHBlbmRDaGlsZChwZW5jaWxCdG4pO1xuICAgIFxuICAgIHRhc2tzLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrYm94KTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrQ2F0ZWdvcnkpO1xuXG4gICAgcHJvamVjdENhcmRzLmFwcGVuZENoaWxkKHRhc2tzKTtcblxuICAgIC8vIGluaXQgZGVsZXRlIGJ1dHRvbnNcbiAgICBpbml0RGVsZXRlQnV0dG9uKHRvRG9MaXN0LCBpbmRleCwgZHVzdGJpbkJ0bik7XG4gICAgaW5pdEVkaXRCdXR0b24odG9Eb0xpc3QsIGluZGV4LCBwZW5jaWxCdG4pO1xufVxuXG5mdW5jdGlvbiBpbml0QWRkQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWRkVGFza01vZGFsKTtcbn1cblxuZnVuY3Rpb24gaW5pdERlbGV0ZUJ1dHRvbih0b0RvTGlzdCwgaW5kZXgsIGJ0bikge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIC8vIGRlbGV0ZSBlbGVtZW50XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudGFza3NcIikucmVtb3ZlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgdG9Eb0xpc3QgYXJyXG4gICAgICAgIHRvRG9MaXN0LmRlbGV0ZVRhc2soaW5kZXgpO1xuXG4gICAgICAgIHJlc2V0VGFza0Rpc3BsYXkoKTtcblxuICAgICAgICBkaXNwbGF5VGFza3ModG9Eb0xpc3QpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvTGlzdC5saXN0KVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRFZGl0QnV0dG9uKHRvRG9MaXN0LCBpbmRleCwgYnRuKSB7XG4gICAgY29uc3QgdGFzayA9IHRvRG9MaXN0LmZpbmRUYXNrKGluZGV4KTtcbiAgICBjb25zb2xlLmxvZyh0YXNrKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7ICAgICAgICBcbiAgICAgICAgLy8gc2hvdyBtb2RhbCB0byBpbnB1dCBkZXRhaWxzIFxuICAgICAgICBkaXNwbGF5RWRpdFRhc2tNb2RhbCgpO1xuICAgICAgICBpbml0RWRpdFRhc2tGb3JtKHRvRG9MaXN0LCB0YXNrKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGRvbUNvbnRyb2xsZXIgfSIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgZG9tQ29udHJvbGxlciB9IGZyb20gXCIuL2RvbUNvbnRyb2xsZXJcIjtcblxuZG9tQ29udHJvbGxlcigpIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL1Rhc2tcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayhuYW1lLCBjYXRlZ29yeSwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIGluZGV4LCBjb21wbGV0ZWQpIHtcbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgY2F0ZWdvcnksIGRhdGUsIHRpbWUsIHByaW9yaXR5LCBpbmRleCwgY29tcGxldGVkKVxufVxuXG5leHBvcnQgeyBjcmVhdGVOZXdUYXNrIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=