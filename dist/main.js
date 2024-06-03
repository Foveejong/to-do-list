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
    top: -20px;
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
    top: -20px;
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
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,oGAAoG;IACpG,2BAA2B;AAC/B;;AAEA;IACI,qCAAqC;IACrC,uBAAuB;IACvB,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,mCAAmC;AACvC;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,gBAAgB;IAChB,iBAAiB;IACjB,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,0CAA0C;IAC1C,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,mCAAmC;IACnC,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;IACpC,gBAAgB;IAChB,eAAe;IACf;QACI,6FAA6F;IACjG;AACJ;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,OAAO;IACP,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;IACxC,iBAAiB;IACjB,aAAa;IACb,kCAAkC;IAClC,mBAAmB;AACvB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,cAAc;IACd,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,UAAU;IACV,SAAS;IACT,6BAA6B;IAC7B,kCAAkC;IAClC,mCAAmC;EACrC;;EAEA;IACE,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,qBAAqB;IACrB,UAAU;IACV,0BAA0B;IAC1B,kCAAkC;IAClC,mCAAmC;EACrC;;AAEF;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gBAAgB;IAChB,gCAAgC;IAChC,mBAAmB;IACnB,YAAY;IACZ,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,WAAW;AACf;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,uBAAuB;IACvB,aAAa;AACjB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,2CAA2C;IAC3C,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,WAAW;IACX,2BAA2B;IAC3B,WAAW;IACX,WAAW;IACX,cAAc;IACd,oBAAoB;EACtB;;AAEF;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n    /* border: 1px red solid; */\n}\n\n:root {\n    --sidebar-item-inner-padding: 8px 5px;\n    --svg-words-gap: 0.5rem;\n    --light-grey: rgb(246, 246, 246);\n}\n\n.container {\n    display: flex;\n}\n\n.profilebar {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.profile-container {\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n}\n\n.profilepic {\n    max-height: 2rem;\n    width: 1rem;\n}\n\n.add-task {\n    min-width: 2rem;\n    border-radius: 10px;\n    padding: 8px 10px;\n    text-align: center;\n    border-style: none;\n    color: orangered;\n    background-color: var(--light-grey);\n}\n\n.add-task:hover {\n    background-color: rgb(255, 255, 214);\n    cursor: pointer;\n    color: orangered;\n}\n\n.sidebar-container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    min-width: 250px;\n    min-height: 100vh;\n    background-color: var(--light-grey);\n    padding: 1rem;\n}\n\n.sidebar-item {\n    padding: var(--sidebar-item-inner-padding);\n    display: flex;\n    align-items: center;\n    gap: var(--svg-words-gap);\n    border-radius: 10px;\n}\n\nbutton.sidebar-item {\n    width: 100%;\n    background-color: var(--light-grey);\n    border-style: none;\n}\n\n.mainbar > .sidebar-item:hover, .categories > .sidebar-item:hover {\n    background-color: rgb(255, 255, 214);\n    color: orangered;\n    cursor: pointer;\n    .svg {\n        filter: invert(50%) sepia(150%) hue-rotate(-50deg) contrast(150%) saturate(6) brightness(90%);\n    }\n}\n\n.svg, .list-marker {\n    width: 1rem;\n    max-height: 1.2rem; \n    text-align: center;\n}\n\n.task > input.svg {\n    width: 1.5rem;\n    min-height: 1.5rem;\n}\n\n.subheader {\n    font-size: 1.2rem;\n}\n\n.content-container {\n    flex: 4;\n    padding: 5rem 7rem;\n}\n\n.projects .title {\n    margin-bottom: 2rem;\n}\n\n.projects .subtitle {\n    margin-bottom: 1rem;\n}\n\n.tasks {\n    border-top: rgb(205, 205, 205) solid 1px;\n    padding: 1.5rem 0;\n    display: grid;\n    grid-template-columns: 1fr 5fr 3fr;\n    align-items: center;\n}\n\n.tasks > :last-child {\n    text-align: end;\n}\n\ninput[type=\"checkbox\"] {\n    width: 1.2rem;\n    height: 1.2rem;\n    accent-color: orangered;\n}\n\n.task {\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n\n.task-content {\n    display: flex;\n    flex-direction: column;\n    width: clamp(30vw, 300px, 45vw);\n}\n\n.description-space {\n    display: none;\n    margin-top: 1rem;\n}\n\n.caret {\n    position: relative;\n}\n\n.caret::before {\n    cursor: pointer;\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 96%;\n    border-top: 7px solid #0a0707;\n    border-left: 7px solid transparent;\n    border-right: 7px solid transparent;\n  }\n  \n  .caret::after {\n    cursor: pointer;\n    content: '';\n    position: absolute;\n    left: calc(96% + 1px);\n    top: -20px;\n    border-top: 6px solid #fff;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n  }\n\n.dialog {\n    position: absolute;\n    top: 15%;\n    left: 35%;\n    min-height: 45vh;\n    width: clamp(200px, 33vw, 500px);\n    border-radius: 20px;\n    border: none;\n    background-color: rgba(255, 255, 255, 0.9);\n}\n\n.dialog-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    padding: 3rem 1rem;\n}\n\n.dialog::backdrop {\n    backdrop-filter: blur(3px);\n}\n\n.input-container{\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n}   \n\n.input-container > label {\n    width: 6rem;\n}\n\nfieldset {\n    border: none;\n    display: flex;\n    flex-direction: column;\n    gap: 0.8rem;\n}\n\nlegend {\n    margin-bottom: 0.5rem;\n}\n\nfieldset > .input-container {\n    padding-left: 1rem;\n}\n\ninput[type=\"text\"], input[type=\"date\"],input[type=\"time\"], textarea {\n    padding: 5px;\n    border-radius: 5px;\n    outline: none;\n    border: solid black 1px;\n    width: 25ch;\n}\n\ntextarea {\n    resize: none;\n}\n\ninput:focus {\n    border-color: orangered;\n    outline: none;\n}\n\ninput[type=\"radio\"] {\n    accent-color: orangered;\n}\n\nbutton[type=\"submit\"] {\n    align-self: center;\n    min-width: 10rem;\n    padding: 10px 20px;\n    border-radius: 15px;\n    border-style: none;\n}\n\nbutton[type=\"submit\"]:hover {\n    background-color: rgba(216, 216, 216, 0.86);\n    cursor: pointer;\n}\n\n.finished {\n    opacity: 0.5;\n    position: relative;\n}\n\n.finished:after {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    height: 1px;\n    background: rgb(85, 85, 85);\n    content: \"\";\n    width: 100%;\n    display: block;\n    pointer-events: none;\n  }\n\n.priority {\n    font-size: 1.5rem;\n    min-width: 2rem;\n}\n\n.high {\n    color: rgb(255, 0, 0);\n}\n\n.middle {\n    color: rgb(255, 149, 0);\n}\n\n.low {\n    color: rgb(15, 175, 0);\n}\n"],"sourceRoot":""}]);
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
        this.list = this.list.filter(task => task.index !== index)
    }

    findTask = (index) => {
        const taskArr = this.list.filter((task) => +task.index === +index);
        return taskArr[0]
    }

    arrangePriority = () => {
        this.list.sort((a, b) => {
            return b.convertPriority(b.priority).length - a.convertPriority(a.priority).length
        })
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
    initAddButton();

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
    const task = (0,_logic__WEBPACK_IMPORTED_MODULE_2__.createNewTask)(
        form.taskname.value, 
        form.taskcategory.value, 
        form.description.value,
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
    // sort list first then display list
    toDoList.arrangePriority()
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

    caret.addEventListener("click", e => {
        descriptionSpace.style.display = (descriptionSpace.style.display === "block") ? "none" : "block";
    })

    // init delete buttons
    initDeleteButton(toDoList, task.index, dustbinBtn);
    initEditButton(task.index, pencilBtn);
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
        // change data attr of form to reflect task being changed
        form.setAttribute("data", index);
        // show modal to input details 
        displayEditTaskModal();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZ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QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzNCTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDOEI7QUFDQTtBQUNVO0FBQ0Q7QUFDWTs7QUFFbkQ7QUFDQSx5QkFBeUIsdUNBQUk7QUFDN0I7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQWE7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsbUJBQW1CO0FBQ3JEO0FBQ0EscUJBQXFCLHVEQUFPO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNENBQU07QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQzVMc0I7QUFDMEI7O0FBRWhELDZEQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNIaUI7O0FBRTlCO0FBQ0EsZUFBZSx1Q0FBSTtBQUNuQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9naWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6J1RyZWJ1Y2hldCBNUycsICdMdWNpZGEgU2FucyBVbmljb2RlJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXG59XG5cbjpyb290IHtcbiAgICAtLXNpZGViYXItaXRlbS1pbm5lci1wYWRkaW5nOiA4cHggNXB4O1xuICAgIC0tc3ZnLXdvcmRzLWdhcDogMC41cmVtO1xuICAgIC0tbGlnaHQtZ3JleTogcmdiKDI0NiwgMjQ2LCAyNDYpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucHJvZmlsZWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvZmlsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IHZhcigtLXN2Zy13b3Jkcy1nYXApO1xufVxuXG4ucHJvZmlsZXBpYyB7XG4gICAgbWF4LWhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMXJlbTtcbn1cblxuLmFkZC10YXNrIHtcbiAgICBtaW4td2lkdGg6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XG59XG5cbi5hZGQtdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyMTQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogb3JhbmdlcmVkO1xufVxuXG4uc2lkZWJhci1jb250YWluZXIge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMnJlbTtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICAgIHBhZGRpbmc6IHZhcigtLXNpZGViYXItaXRlbS1pbm5lci1wYWRkaW5nKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5idXR0b24uc2lkZWJhci1pdGVtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5tYWluYmFyID4gLnNpZGViYXItaXRlbTpob3ZlciwgLmNhdGVnb3JpZXMgPiAuc2lkZWJhci1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XG4gICAgY29sb3I6IG9yYW5nZXJlZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLnN2ZyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDUwJSkgc2VwaWEoMTUwJSkgaHVlLXJvdGF0ZSgtNTBkZWcpIGNvbnRyYXN0KDE1MCUpIHNhdHVyYXRlKDYpIGJyaWdodG5lc3MoOTAlKTtcbiAgICB9XG59XG5cbi5zdmcsIC5saXN0LW1hcmtlciB7XG4gICAgd2lkdGg6IDFyZW07XG4gICAgbWF4LWhlaWdodDogMS4ycmVtOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrID4gaW5wdXQuc3ZnIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnN1YmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jb250ZW50LWNvbnRhaW5lciB7XG4gICAgZmxleDogNDtcbiAgICBwYWRkaW5nOiA1cmVtIDdyZW07XG59XG5cbi5wcm9qZWN0cyAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5wcm9qZWN0cyAuc3VidGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50YXNrcyB7XG4gICAgYm9yZGVyLXRvcDogcmdiKDIwNSwgMjA1LCAyMDUpIHNvbGlkIDFweDtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAzZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tzID4gOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICB3aWR0aDogMS4ycmVtO1xuICAgIGhlaWdodDogMS4ycmVtO1xuICAgIGFjY2VudC1jb2xvcjogb3JhbmdlcmVkO1xufVxuXG4udGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2stY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiBjbGFtcCgzMHZ3LCAzMDBweCwgNDV2dyk7XG59XG5cbi5kZXNjcmlwdGlvbi1zcGFjZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uY2FyZXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmV0OjpiZWZvcmUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBsZWZ0OiA5NiU7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkICMwYTA3MDc7XG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmNhcmV0OjphZnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKDk2JSArIDFweCk7XG4gICAgdG9wOiAtMjBweDtcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbi5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiAzNSU7XG4gICAgbWluLWhlaWdodDogNDV2aDtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDMzdncsIDUwMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG59XG5cbi5kaWFsb2ctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDFyZW07XG4gICAgcGFkZGluZzogM3JlbSAxcmVtO1xufVxuXG4uZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5pbnB1dC1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0gICBcblxuLmlucHV0LWNvbnRhaW5lciA+IGxhYmVsIHtcbiAgICB3aWR0aDogNnJlbTtcbn1cblxuZmllbGRzZXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjhyZW07XG59XG5cbmxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG5maWVsZHNldCA+IC5pbnB1dC1jb250YWluZXIge1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdLGlucHV0W3R5cGU9XCJ0aW1lXCJdLCB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIHdpZHRoOiAyNWNoO1xufVxuXG50ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQ7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcbiAgICBhY2NlbnQtY29sb3I6IG9yYW5nZXJlZDtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE2LCAyMTYsIDIxNiwgMC44Nik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZmluaXNoZWQge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5maW5pc2hlZDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiKDg1LCA4NSwgODUpO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuLnByaW9yaXR5IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtaW4td2lkdGg6IDJyZW07XG59XG5cbi5oaWdoIHtcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG59XG5cbi5taWRkbGUge1xuICAgIGNvbG9yOiByZ2IoMjU1LCAxNDksIDApO1xufVxuXG4ubG93IHtcbiAgICBjb2xvcjogcmdiKDE1LCAxNzUsIDApO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVz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QkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7RUFDdEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTonVHJlYnVjaGV0IE1TJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucycsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICAvKiBib3JkZXI6IDFweCByZWQgc29saWQ7ICovXFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZzogOHB4IDVweDtcXG4gICAgLS1zdmctd29yZHMtZ2FwOiAwLjVyZW07XFxuICAgIC0tbGlnaHQtZ3JleTogcmdiKDI0NiwgMjQ2LCAyNDYpO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2ZpbGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2ZpbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiB2YXIoLS1zdmctd29yZHMtZ2FwKTtcXG59XFxuXFxuLnByb2ZpbGVwaWMge1xcbiAgICBtYXgtaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMXJlbTtcXG59XFxuXFxuLmFkZC10YXNrIHtcXG4gICAgbWluLXdpZHRoOiAycmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbn1cXG5cXG4uYWRkLXRhc2s6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLnNpZGViYXItY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycmVtO1xcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zaWRlYmFyLWl0ZW0taW5uZXItcGFkZGluZyk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogdmFyKC0tc3ZnLXdvcmRzLWdhcCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbmJ1dHRvbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1haW5iYXIgPiAuc2lkZWJhci1pdGVtOmhvdmVyLCAuY2F0ZWdvcmllcyA+IC5zaWRlYmFyLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDIxNCk7XFxuICAgIGNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLnN2ZyB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg1MCUpIHNlcGlhKDE1MCUpIGh1ZS1yb3RhdGUoLTUwZGVnKSBjb250cmFzdCgxNTAlKSBzYXR1cmF0ZSg2KSBicmlnaHRuZXNzKDkwJSk7XFxuICAgIH1cXG59XFxuXFxuLnN2ZywgLmxpc3QtbWFya2VyIHtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIG1heC1oZWlnaHQ6IDEuMnJlbTsgXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgPiBpbnB1dC5zdmcge1xcbiAgICB3aWR0aDogMS41cmVtO1xcbiAgICBtaW4taGVpZ2h0OiAxLjVyZW07XFxufVxcblxcbi5zdWJoZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgZmxleDogNDtcXG4gICAgcGFkZGluZzogNXJlbSA3cmVtO1xcbn1cXG5cXG4ucHJvamVjdHMgLnRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXFxuLnByb2plY3RzIC5zdWJ0aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi50YXNrcyB7XFxuICAgIGJvcmRlci10b3A6IHJnYigyMDUsIDIwNSwgMjA1KSBzb2xpZCAxcHg7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgM2ZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3MgPiA6bGFzdC1jaGlsZCB7XFxuICAgIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICBhY2NlbnQtY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuLnRhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJyZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogY2xhbXAoMzB2dywgMzAwcHgsIDQ1dncpO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tc3BhY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG5cXG4uY2FyZXQge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jYXJldDo6YmVmb3JlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBsZWZ0OiA5NiU7XFxuICAgIGJvcmRlci10b3A6IDdweCBzb2xpZCAjMGEwNzA3O1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIFxcbiAgLmNhcmV0OjphZnRlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogY2FsYyg5NiUgKyAxcHgpO1xcbiAgICB0b3A6IC0yMHB4O1xcbiAgICBib3JkZXItdG9wOiA2cHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICB9XFxuXFxuLmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxNSU7XFxuICAgIGxlZnQ6IDM1JTtcXG4gICAgbWluLWhlaWdodDogNDV2aDtcXG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCAzM3Z3LCA1MDBweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG4uZGlhbG9nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogM3JlbSAxcmVtO1xcbn1cXG5cXG4uZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSAgIFxcblxcbi5pbnB1dC1jb250YWluZXIgPiBsYWJlbCB7XFxuICAgIHdpZHRoOiA2cmVtO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjhyZW07XFxufVxcblxcbmxlZ2VuZCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuZmllbGRzZXQgPiAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSxpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl0sIHRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICB3aWR0aDogMjVjaDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmlucHV0OmZvY3VzIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBvcmFuZ2VyZWQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBhY2NlbnQtY29sb3I6IG9yYW5nZXJlZDtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtaW4td2lkdGg6IDEwcmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTYsIDIxNiwgMjE2LCAwLjg2KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZmluaXNoZWQge1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZpbmlzaGVkOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYig4NSwgODUsIDg1KTtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB9XFxuXFxuLnByaW9yaXR5IHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1pbi13aWR0aDogMnJlbTtcXG59XFxuXFxuLmhpZ2gge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxufVxcblxcbi5taWRkbGUge1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMTQ5LCAwKTtcXG59XFxuXFxuLmxvdyB7XFxuICAgIGNvbG9yOiByZ2IoMTUsIDE3NSwgMCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5jbGFzcyBMaXN0IHtcbiAgICAvLyByZXNwb25zaWJpbGl0aWVzIHJlbGF0ZWQgdG8gbGlzdCBvbmx5XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xuICAgIH1cbiAgICBcbiAgICBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICAgICAgdGhpcy5saXN0LnB1c2godGFzayk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmxpc3QuZmlsdGVyKHRhc2sgPT4gdGFzay5pbmRleCAhPT0gaW5kZXgpXG4gICAgfVxuXG4gICAgZmluZFRhc2sgPSAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza0FyciA9IHRoaXMubGlzdC5maWx0ZXIoKHRhc2spID0+ICt0YXNrLmluZGV4ID09PSAraW5kZXgpO1xuICAgICAgICByZXR1cm4gdGFza0FyclswXVxuICAgIH1cblxuICAgIGFycmFuZ2VQcmlvcml0eSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5saXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiLmNvbnZlcnRQcmlvcml0eShiLnByaW9yaXR5KS5sZW5ndGggLSBhLmNvbnZlcnRQcmlvcml0eShhLnByaW9yaXR5KS5sZW5ndGhcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7IExpc3QgfSIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXNrbmFtZSwgdGFza2NhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHksIGluZGV4LCBjb21wbGV0ZSkge1xuICAgICAgICB0aGlzLnRhc2tuYW1lID0gdGFza25hbWU7XG4gICAgICAgIHRoaXMudGFza2NhdGVnb3J5ID0gdGFza2NhdGVnb3J5O1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuZHVlVGltZSA9IGR1ZVRpbWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGU7XG4gICAgfVxuXG4gICAgZWRpdFRhc2sodGFza25hbWUsIHRhc2tjYXRlZ29yeSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGFza25hbWUgPSB0YXNrbmFtZTtcbiAgICAgICAgdGhpcy50YXNrY2F0ZWdvcnkgPSB0YXNrY2F0ZWdvcnk7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kdWVUaW1lID0gZHVlVGltZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH1cblxuICAgIGNvbnZlcnRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICBpZiAocHJpb3JpdHkgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhISFcIlxuICAgICAgICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSBcIm1pZGRsZVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhIVwiXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCIhXCJcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUNvbXBsZXRlKGJvb2wpIHtcbiAgICAgICAgcmV0dXJuIChib29sKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL0xpc3RcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCBwZW5jaWwgZnJvbSBcIi4uL3N2Zy9wZW5jaWwuc3ZnXCI7XG5pbXBvcnQgZHVzdGJpbiBmcm9tIFwiLi4vc3ZnL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuXG5mdW5jdGlvbiBkb21Db250cm9sbGVyKCkge1xuICAgIGNvbnN0IHRvRG9MaXN0ID0gbmV3IExpc3QoKTtcbiAgICBpbml0QWRkQnV0dG9uKCk7XG5cbiAgICAvLyBpbml0aWFsIHJlbmRlclxuICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG5cbiAgICBpbml0QWRkVGFza0Zvcm0odG9Eb0xpc3QpO1xuXG4gICAgaW5pdEVkaXRUYXNrRm9ybSh0b0RvTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGluaXRBZGRUYXNrRm9ybSh0b0RvTGlzdCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrLWZvcm1cIik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4gYWRkVGFza0RvbSh0b0RvTGlzdCkpXG59XG5cbmZ1bmN0aW9uIGluaXRFZGl0VGFza0Zvcm0odG9Eb0xpc3QpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2stZm9ybVwiKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gICAgICAgIC8vIGdldCBkYXRhIGF0dHIgb2YgZm9ybSwgd2hpY2ggcmVmbGVjdHMgaXRlbSBiZWluZyBjaGFuZ2VkXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0b0RvTGlzdC5maW5kVGFzayhmb3JtLmdldEF0dHJpYnV0ZShcImRhdGFcIikpO1xuICAgICAgICB0YXNrLmVkaXRUYXNrKGZvcm0udGFza25hbWVFZGl0LnZhbHVlLCBcbiAgICAgICAgICAgIGZvcm0udGFza2NhdGVnb3J5RWRpdC52YWx1ZSwgXG4gICAgICAgICAgICBmb3JtLmRlc2NyaXB0aW9uRWRpdC52YWx1ZSxcbiAgICAgICAgICAgIGZvcm0uZHVlRGF0ZUVkaXQudmFsdWUsIFxuICAgICAgICAgICAgZm9ybS5kdWVUaW1lRWRpdC52YWx1ZSwgXG4gICAgICAgICAgICBmb3JtLnByaW9yaXR5RWRpdC52YWx1ZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICByZXNldFRhc2tEaXNwbGF5KCk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gYWRkVGFza0RvbSh0b0RvTGlzdCkge1xuICAgIC8vIGNyZWF0ZSB0YXNrXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2stZm9ybVwiKTtcbiAgICBjb25zdCB0YXNrID0gY3JlYXRlTmV3VGFzayhcbiAgICAgICAgZm9ybS50YXNrbmFtZS52YWx1ZSwgXG4gICAgICAgIGZvcm0udGFza2NhdGVnb3J5LnZhbHVlLCBcbiAgICAgICAgZm9ybS5kZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgZm9ybS5kdWVEYXRlLnZhbHVlLCBcbiAgICAgICAgZm9ybS5kdWVUaW1lLnZhbHVlLCBcbiAgICAgICAgZm9ybS5wcmlvcml0eS52YWx1ZSwgXG4gICAgICAgIHRvRG9MaXN0Lmxpc3QubGVuZ3RoLCBcbiAgICAgICAgZmFsc2UpXG4gICAgXG4gICAgLy9yZXNldCBmb3JtIFxuICAgIGZvcm0ucmVzZXQoKVxuXG4gICAgLy8gYXBwZW5kIHRhc2sgdG8gbGlzdFxuICAgIHRvRG9MaXN0LmFkZFRhc2sodGFzayk7XG4gICAgXG4gICAgcmVzZXRUYXNrRGlzcGxheSgpO1xuICAgICAgICBcbiAgICAvL3Jlc2V0IHBhZ2UgZmlyc3QgdGhlbiBkaXNwbGF5IGFsbFxuICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdClcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRhc2tzKHRvRG9MaXN0KSB7XG4gICAgLy8gc29ydCBsaXN0IGZpcnN0IHRoZW4gZGlzcGxheSBsaXN0XG4gICAgdG9Eb0xpc3QuYXJyYW5nZVByaW9yaXR5KClcbiAgICB0b0RvTGlzdC5saXN0LmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY3JlYXRlVGFza0RvbSh0b0RvTGlzdCwgdGFzayk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRUYXNrTW9kYWwoKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFzay1kaWFsb2dcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RWRpdFRhc2tNb2RhbCgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1kaWFsb2dcIik7XG4gICAgZGlhbG9nLnNob3dNb2RhbCgpO1xufVxuXG5mdW5jdGlvbiByZXNldFRhc2tEaXNwbGF5KCkge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jYXJkc1wiKTtcbiAgICBwcm9qZWN0Q2FyZHMudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuIFxuZnVuY3Rpb24gY3JlYXRlVGFza0RvbSh0b0RvTGlzdCwgdGFzaykge1xuICAgIGNvbnN0IHByb2plY3RDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jYXJkc1wiKVxuXG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0YXNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjb25zdCB0YXNrQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBjYXJldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25TcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IGR1c3RiaW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY29uc3QgcGVuY2lsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGNvbnN0IHRhc2tDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuICAgIHRhc2tzLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgdGFzay5pbmRleCk7XG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIsIGAke3Rhc2sucHJpb3JpdHl9YCk7XG4gICAgdGFza2JveC5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgZHVzdGJpbkJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiaW1hZ2VcIik7XG4gICAgcGVuY2lsQnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbWFnZVwiKTtcbiAgICB0YXNrQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250ZW50XCIpO1xuICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZChcImRldGFpbHNcIik7XG4gICAgZGVzY3JpcHRpb25TcGFjZS5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24tc3BhY2VcIik7XG4gICAgY2FyZXQuY2xhc3NMaXN0LmFkZChcImNhcmV0XCIpO1xuXG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSB0YXNrLmNvbnZlcnRQcmlvcml0eSh0YXNrLnByaW9yaXR5KTtcbiAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRhc2sudGFza25hbWU7XG4gICAgZGVzY3JpcHRpb25TcGFjZS50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gXCJEdWU6IFwiICsgdGFzay5kdWVEYXRlICsgXCIgXCIgKyB0YXNrLmR1ZVRpbWU7XG4gICAgdGFza0NhdGVnb3J5LnRleHRDb250ZW50ID0gYCR7dGFzay50YXNrY2F0ZWdvcnl9ICNgO1xuICAgIFxuICAgIGR1c3RiaW5CdG4uc3JjID0gZHVzdGJpbjtcbiAgICBkdXN0YmluQnRuLm5hbWUgPSBcImRlbGV0ZVwiO1xuICAgIGR1c3RiaW5CdG4uaWQgPSBcImRlbGV0ZVwiO1xuICAgIGR1c3RiaW5CdG4uY2xhc3NMaXN0LmFkZChcInN2Z1wiLCBcImRlbGV0ZVwiKTtcblxuICAgIHBlbmNpbEJ0bi5zcmMgPSBwZW5jaWw7XG4gICAgcGVuY2lsQnRuLm5hbWUgPSBcImVkaXRcIjtcbiAgICBwZW5jaWxCdG4uaWQgPSBcImVkaXRcIjtcbiAgICBwZW5jaWxCdG4uY2xhc3NMaXN0LmFkZChcInN2Z1wiLCBcImVkaXRcIik7XG5cbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoY2FyZXQpO1xuICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TcGFjZSk7XG5cbiAgICB0YXNrQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrTmFtZSk7XG4gICAgdGFza0NvbnRlbnQuYXBwZW5kQ2hpbGQoZGV0YWlscyk7XG5cbiAgICB0YXNrYm94LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICB0YXNrYm94LmFwcGVuZENoaWxkKHRhc2tDb250ZW50KTtcbiAgICB0YXNrYm94LmFwcGVuZENoaWxkKGR1c3RiaW5CdG4pO1xuICAgIHRhc2tib3guYXBwZW5kQ2hpbGQocGVuY2lsQnRuKTtcbiAgICBcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza2JveCk7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0NhdGVnb3J5KTtcblxuICAgIHByb2plY3RDYXJkcy5hcHBlbmRDaGlsZCh0YXNrcyk7XG5cbiAgICBjYXJldC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uU3BhY2Uuc3R5bGUuZGlzcGxheSA9IChkZXNjcmlwdGlvblNwYWNlLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICB9KVxuXG4gICAgLy8gaW5pdCBkZWxldGUgYnV0dG9uc1xuICAgIGluaXREZWxldGVCdXR0b24odG9Eb0xpc3QsIHRhc2suaW5kZXgsIGR1c3RiaW5CdG4pO1xuICAgIGluaXRFZGl0QnV0dG9uKHRhc2suaW5kZXgsIHBlbmNpbEJ0bik7XG59XG5cbmZ1bmN0aW9uIGluaXRBZGRCdXR0b24oKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZGRUYXNrTW9kYWwpO1xufVxuXG5mdW5jdGlvbiBpbml0RGVsZXRlQnV0dG9uKHRvRG9MaXN0LCBpbmRleCwgYnRuKSB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgLy8gZGVsZXRlIGVsZW1lbnRcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50YXNrc1wiKS5yZW1vdmUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSB0b0RvTGlzdCBhcnJcbiAgICAgICAgdG9Eb0xpc3QuZGVsZXRlVGFzayhpbmRleCk7XG5cbiAgICAgICAgcmVzZXRUYXNrRGlzcGxheSgpO1xuXG4gICAgICAgIGRpc3BsYXlUYXNrcyh0b0RvTGlzdCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdEVkaXRCdXR0b24oaW5kZXgsIGJ0bikge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtdGFzay1mb3JtXCIpO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIC8vIGNoYW5nZSBkYXRhIGF0dHIgb2YgZm9ybSB0byByZWZsZWN0IHRhc2sgYmVpbmcgY2hhbmdlZFxuICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZShcImRhdGFcIiwgaW5kZXgpO1xuICAgICAgICAvLyBzaG93IG1vZGFsIHRvIGlucHV0IGRldGFpbHMgXG4gICAgICAgIGRpc3BsYXlFZGl0VGFza01vZGFsKCk7XG4gICAgfSlcbn1cblxuZXhwb3J0IHsgZG9tQ29udHJvbGxlciB9IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBkb21Db250cm9sbGVyIH0gZnJvbSBcIi4vZG9tQ29udHJvbGxlclwiO1xuXG5kb21Db250cm9sbGVyKCkiLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVOZXdUYXNrKG5hbWUsIGNhdGVnb3J5LCBkZXNjcmlwdGlvbiwgZGF0ZSwgdGltZSwgcHJpb3JpdHksIGluZGV4LCBjb21wbGV0ZWQpIHtcbiAgICByZXR1cm4gbmV3IFRhc2sobmFtZSwgY2F0ZWdvcnksIGRlc2NyaXB0aW9uLCBkYXRlLCB0aW1lLCBwcmlvcml0eSwgaW5kZXgsIGNvbXBsZXRlZClcbn1cblxuZXhwb3J0IHsgY3JlYXRlTmV3VGFzayB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9