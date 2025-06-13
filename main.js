/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    background-color: #679fd9;\r\n    /* We'll let #todo-div handle its specific grid areas */\r\n    /* Keeping this for overall layout if you have other elements */\r\n    display: grid;\r\n    grid-template-rows: auto auto 1fr; /* For header, new project button, and content */\r\n    grid-template-areas:\r\n        \"header header\"\r\n        \"new-project-button new-project-button\"\r\n        \"main-content main-content\"; /* A new area for your todo-div */\r\n    height: 100vh;\r\n    font-family: Inter, sans-serif\r\n    /* Make sure body takes full height for grid to work well */\r\n}\r\n\r\n#header  {\r\n    grid-area: header;\r\n    font-size: 3rem;\r\n}\r\n#open-new-project-modal {\r\n    grid-area: new-project-button;\r\n    height: 4rem;\r\n    background-color: green;\r\n    border-radius: 2rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n#todo-div {\r\n    grid-area: main-content; /* Assign todo-div to the main-content area */\r\n    display: grid; /* Make todo-div a grid container */\r\n    grid-template-columns: 1fr 1fr; /* Two columns, equal width for projects and tasks */\r\n    /* No need for grid-template-areas here if we're just putting items directly */\r\n    /* We'll rely on grid's auto-placement or direct assignment */\r\n    gap: 20px; /* Give some space between your columns, for real! */\r\n    padding: 20px; /* A little padding so stuff isn't hugging the edges */\r\n}\r\n\r\n/* This is the key fix for project-item */\r\n.project-item {\r\n    /* No grid-area needed here, grid will auto-place them in the first column */\r\n    /* or you could explicitly place them if you wanted more complex layout */\r\n    /* For simple side-by-side, auto-placement in the first column works */\r\n    padding: 4rem;\r\n    background-color: #9cc1ec;\r\n    height: 50%;\r\n    font-size: 2rem;\r\n    border-radius: 1rem ;\r\n\r\n}\r\n\r\n.task-item {\r\n    /* No grid-area needed here either, grid will auto-place them in the second column */\r\n    padding: 4rem;\r\n    background-color: #9cc1ec;\r\n    height: 35%;\r\n    border-radius: 1rem;\r\n}\r\n\r\n\r\n/* Your existing modal styles are looking good! */\r\n.modal {\r\n    display: none;\r\n    position: fixed; /* Stays in the same spot on the screen */\r\n    z-index: 1000; /* Sits on top of everything else */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto; /* Enable scroll if content is too long */\r\n    background-color: rgba(0,0,0,0.4); /* Black background with opacity */\r\n\r\n    /* Flexbox properties to center the content */\r\n    justify-content: center;\r\n    align-items: center; /* Use 'center' to vertically center it */\r\n}\r\n\r\n.modal-content {\r\n    background: #F1E2E2;\r\n    padding: 5rem;\r\n    border-radius: 8px;\r\n    width: 70%; /* Or a fixed width like 500px */\r\n    max-width: 600px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    text-align: left; /* You already have this, perfect! */\r\n    font-size: 3rem;\r\n    line-height: 2rem;\r\n    word-spacing: 0.5rem;\r\n}\r\n\r\n.modal.active {\r\n    display: flex;\r\n}\r\n\r\n\r\ninput {\r\n    padding: 2rem;\r\n}\r\n\r\nbutton.delete-project-button {\r\n    background-color: #d01414;\r\n    padding: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n}\r\n\r\nbutton.delete-task-button {\r\n    background-color: #d01414;\r\n    padding: 1.5rem;\r\n    border-radius: 1rem;\r\n    cursor: pointer;\r\n    font-size: 2rem;\r\n}\r\nbutton.new-task-button {\r\n    padding: 1.5rem;\r\n    border-radius: 15rem;\r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#save-project-button {\r\n    padding: 1.5rem;\r\n    background-color: green;\r\n    font-size: 2rem;\r\n}\r\n\r\n#save-task-button {\r\n    padding: 1.5rem;\r\n    background-color: green;\r\n    font-size: 2rem;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app-V2/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app-V2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/domRenderer.js":
/*!*******************************!*\
  !*** ./src/js/domRenderer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanProjectInputBoxesValue: () => (/* binding */ cleanProjectInputBoxesValue),\n/* harmony export */   cleanTasksInputBoxesValue: () => (/* binding */ cleanTasksInputBoxesValue),\n/* harmony export */   displayProjectOnPage: () => (/* binding */ displayProjectOnPage),\n/* harmony export */   displayTaskOnPage: () => (/* binding */ displayTaskOnPage)\n/* harmony export */ });\n//todo someday: reactivate the edit buttons and made the edit function\r\n\r\nfunction displayProjectOnPage(project, taskModal, deleteProjectCallback) {\r\n\r\n\r\n    const projectDiv = document.createElement('div');\r\n    projectDiv.classList.add('project-item');\r\n    projectDiv.setAttribute('data-project-id', project.id);\r\n\r\n    const name = document.createElement('h2');\r\n    name.textContent = project.name;\r\n    const description = document.createElement('p');\r\n    description.textContent = project.description;\r\n\r\n    // const editButton = document.createElement('button');\r\n    // editButton.textContent = \"Edit Project\";\r\n\r\n    const deleteButton = document.createElement('button');\r\n    deleteButton.textContent = \"Delete Project\";\r\n    deleteButton.classList.add('delete-project-button');\r\n    deleteButton.addEventListener('click', () => deleteProjectCallback(project.id));\r\n\r\n    const taskButton = document.createElement('button');\r\n    taskButton.textContent = 'New Task';\r\n    taskButton.classList.add('new-task-button')\r\n    taskButton.addEventListener('click', () => {\r\n        taskModal.open();\r\n        taskModal.currentProjectId = project.id;\r\n        console.log(`Opening task modal for project: ${taskModal.currentProjectId}`);\r\n    });\r\n\r\n    projectDiv.append(name, description, taskButton, deleteButton);\r\n    document.getElementById('todo-div').appendChild(projectDiv);\r\n}\r\n\r\nfunction displayTaskOnPage(task, deleteTaskCallback) {\r\n    const taskDiv = document.createElement('div')\r\n    taskDiv.classList.add('task-item');\r\n    taskDiv.setAttribute('data-task-id', task.id)\r\n\r\n    const taskNameElement = document.createElement('h2')\r\n    taskNameElement.textContent = task.name\r\n\r\n    const taskDescriptionElement = document.createElement('p')\r\n    taskDescriptionElement.textContent = task.description\r\n\r\n    const taskDateElement = document.createElement('p')\r\n    taskDateElement.textContent = task.date\r\n\r\n    const taskPriorityElement = document.createElement('p')\r\n    taskPriorityElement.textContent = task.priority\r\n\r\n    //const editTaskButton = document.createElement('button')\r\n    //editTaskButton.textContent = 'Edit Task'\r\n\r\n    const deleteTaskButton = document.createElement('button')\r\n    deleteTaskButton.textContent = 'Delete Task'\r\n    deleteTaskButton.classList.add('delete-task-button')\r\n    deleteTaskButton.addEventListener('click', () => deleteTaskCallback(task.id));\r\n\r\n    taskDiv.appendChild(taskNameElement)\r\n    taskDiv.appendChild(taskDescriptionElement)\r\n    taskDiv.appendChild(taskDateElement)\r\n    taskDiv.appendChild(taskPriorityElement)\r\n    // taskDiv.appendChild(editTaskButton)\r\n    taskDiv.appendChild(deleteTaskButton)\r\n\r\n    const Container = document.getElementById('todo-div');\r\n    Container.appendChild(taskDiv);\r\n}\r\n\r\n\r\nfunction cleanProjectInputBoxesValue() {\r\n    document.getElementById(\"question-project-name\").value = \"\";\r\n    document.getElementById(\"question-project-description\").value = \"\";\r\n}\r\n\r\nfunction cleanTasksInputBoxesValue() {\r\n    document.getElementById(\"question-task-name\").value = \"\";\r\n    document.getElementById(\"question-task-description\").value = \"\";\r\n    document.getElementById(\"question-task-date\").value = \"\";\r\n    document.getElementById(\"question-task-priority\").value = \"\";\r\n}\r\n\n\n//# sourceURL=webpack://todo-app-V2/./src/js/domRenderer.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modalFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalFactory.js */ \"./src/js/modalFactory.js\");\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectManager.js */ \"./src/js/projectManager.js\");\n/* harmony import */ var _taskManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskManager.js */ \"./src/js/taskManager.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n/* harmony import */ var _domRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domRenderer.js */ \"./src/js/domRenderer.js\");\nconsole.log('Happy developing ✨')\r\n;\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet allTasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.loadFromLocalStorage)('tasks');\r\n// Crear modales\r\nlet allProjects = (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.loadFromLocalStorage)('projects');\r\nconst projectModalConfig = { // Renamed for clarity\r\n    modalId: \"new-project-modal\",\r\n    openButtonId: \"open-new-project-modal\",\r\n    closeButtonSelector: \"close-new-project-modal\",\r\n};\r\n\r\n// Configuration for the task modal (without an initial openButtonId)\r\nconst taskModalConfig = {\r\n    modalId: \"new-task-modal\",\r\n    // We won't provide an openButtonId here because the button will be created dynamically per project\r\n    closeButtonSelector: \"close-new-task-modal\",\r\n};\r\n\r\n// Create instance of the modals\r\nconst projectModal = (0,_modalFactory_js__WEBPACK_IMPORTED_MODULE_1__.createModal)(projectModalConfig);\r\nconst taskModal = (0,_modalFactory_js__WEBPACK_IMPORTED_MODULE_1__.createModal)(taskModalConfig); // This instance doesn't have an initial button\r\n\r\n// Initialize the project modal\r\nprojectModal.initEventListeners();\r\n// Renderizar proyectos y tareas existentes\r\nallProjects.forEach(project => {\r\n    (0,_domRenderer_js__WEBPACK_IMPORTED_MODULE_5__.displayProjectOnPage)(project, taskModal, deleteProject);\r\n});\r\nallTasks.forEach(task => {\r\n    (0,_domRenderer_js__WEBPACK_IMPORTED_MODULE_5__.displayTaskOnPage)(task, deleteTask);\r\n});\r\n\r\n// Agregar nuevo proyecto\r\nconst saveProjectButton = document.getElementById(\"save-project-button\"); // Renamed for clarity\r\n\r\n// Add an event listener to the save project button\r\nsaveProjectButton?.addEventListener(\"click\", (e) => {\r\n    e.preventDefault(); // Prevents the form from submitting and refreshing the page\r\n\r\n    const newProject = (0,_projectManager_js__WEBPACK_IMPORTED_MODULE_2__.RetrieveProjectInfo)();\r\n    if (newProject) {\r\n        allProjects.push(newProject);\r\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)('projects', allProjects); // 🔥 Aquí lo guardás\r\n        console.log(\"Project created:\", newProject);\r\n        console.log(\"All current projects:\", allProjects);\r\n        (0,_domRenderer_js__WEBPACK_IMPORTED_MODULE_5__.displayProjectOnPage)(newProject, taskModal, deleteProject);\r\n        (0,_domRenderer_js__WEBPACK_IMPORTED_MODULE_5__.cleanProjectInputBoxesValue)();\r\n        projectModal.close();\r\n    }\r\n    else {\r\n        console.log(\"Failed to create project. Check input values.\");\r\n    }\r\n});\r\n\r\n// Agregar nueva tarea\r\nconst saveTaskButton = document.getElementById('save-task-button')\r\nsaveTaskButton?.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    const associatedProjectId = taskModal.currentProjectId;\r\n    console.log('Project ID when saving task:', associatedProjectId); // Para depurar\r\n\r\n    const newTask = (0,_taskManager_js__WEBPACK_IMPORTED_MODULE_3__.retrieveTaskInfo)(associatedProjectId)\r\n    if (newTask) {\r\n        console.log(\"Task Created\", newTask)\r\n        allTasks.push(newTask);\r\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)('tasks', allTasks);\r\n        taskModal.close();\r\n        (0,_domRenderer_js__WEBPACK_IMPORTED_MODULE_5__.displayTaskOnPage)(newTask,  deleteTask);\r\n        taskModal.currentProjectId = null;\r\n        (0,_domRenderer_js__WEBPACK_IMPORTED_MODULE_5__.cleanTasksInputBoxesValue)();\r\n    } else {\r\n        console.log(\"Failed to create task\")\r\n    }\r\n});\r\n\r\n// Eliminar proyecto y sus tareas\r\nfunction deleteProject(projectId) {\r\n    const projectElement = document.querySelector(`.project-item[data-project-id=\"${projectId}\"]`);\r\n\r\n    if (projectElement) {\r\n        projectElement.remove();\r\n        console.log(`Project with ID ${projectId} visually removed.`);\r\n    } else {\r\n        console.warn(`Project with ID ${projectId} not found in the DOM.`);\r\n    }\r\n\r\n    // 💥 Remove project from allProjects\r\n    allProjects = allProjects.filter(p => p.id !== projectId);\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)(\"projects\", allProjects);\r\n    console.log(`Project with ID ${projectId} removed from allProjects and saved.`);\r\n\r\n    // 💥 Delete all tasks associated with the project using deleteTask\r\n    const associatedTasks = allTasks.filter(task => task.projectId === projectId);\r\n\r\n    if (associatedTasks.length > 0) {\r\n        associatedTasks.forEach(task => deleteTask(task.id));\r\n        console.log(`Removed ${associatedTasks.length} tasks associated with project ${projectId}.`);\r\n    } else {\r\n        console.log(`No tasks found for project ${projectId} to remove.`);\r\n    }\r\n}\r\n\r\n// Eliminar tarea\r\nfunction deleteTask(taskId) {\r\n    allTasks = allTasks.filter(task => task.id !== taskId);\r\n\r\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)(\"tasks\", allTasks);\r\n    const taskElement = document.querySelector(`[data-task-id=\"${taskId}\"]`);\r\n    if (taskElement) {\r\n        taskElement.remove();\r\n        console.log(`Task with ID ${taskId} visually removed.`);\r\n    } else {\r\n        console.warn(`Task with ID ${taskId} not found in the DOM.`);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo-app-V2/./src/js/index.js?");

/***/ }),

/***/ "./src/js/modalFactory.js":
/*!********************************!*\
  !*** ./src/js/modalFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createModal: () => (/* binding */ createModal)\n/* harmony export */ });\nconst createModal = (config) => {\r\n    const elements = {\r\n        modal: document.getElementById(config.modalId),\r\n        openButton: config.openButtonId ? document.getElementById(config.openButtonId) : null, // Make openButton optional for dynamic buttons\r\n        closeButton: document.getElementById(config.closeButtonSelector),\r\n    };\r\n\r\n    // Private methods (separated responsibilities)\r\n    const open = () => elements.modal.classList.add(\"active\");\r\n    const close = () => elements.modal.classList.remove(\"active\");\r\n    const handleOutsideClick = (e) => e.target === elements.modal && close();\r\n\r\n    // Initialization of events (single responsibility)\r\n    const initEventListeners = (dynamicButton = null) => {\r\n        // If an openButtonId is provided in config, use that for the initial setup\r\n        if (elements.openButton) {\r\n            elements.openButton.addEventListener(\"click\", open);\r\n        }\r\n        // If a dynamicButton is passed, attach the event listener to it\r\n        if (dynamicButton) {\r\n            dynamicButton.addEventListener(\"click\", open);\r\n        }\r\n        elements.closeButton.addEventListener(\"click\", close);\r\n        window.addEventListener(\"click\", handleOutsideClick);\r\n    };\r\n\r\n    // Expose only what's necessary (abstraction)\r\n    return { initEventListeners, close, open };\r\n};\n\n//# sourceURL=webpack://todo-app-V2/./src/js/modalFactory.js?");

/***/ }),

/***/ "./src/js/projectManager.js":
/*!**********************************!*\
  !*** ./src/js/projectManager.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   RetrieveProjectInfo: () => (/* binding */ RetrieveProjectInfo)\n/* harmony export */ });\nlet globalProjectIdCounter = 0;\r\n\r\nfunction Project(id, name, description) {\r\n    this.id = id;\r\n    this.name = name;\r\n    this.description = description;\r\n}\r\n\r\nfunction RetrieveProjectInfo() {\r\n    globalProjectIdCounter++;\r\n    const name = document.getElementById(\"question-project-name\").value;\r\n    const description = document.getElementById(\"question-project-description\").value;\r\n    return new Project(\"Project\" + globalProjectIdCounter, name, description);\r\n}\n\n//# sourceURL=webpack://todo-app-V2/./src/js/projectManager.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadFromLocalStorage: () => (/* binding */ loadFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\nconst saveToLocalStorage = (key, data) => {\r\n    localStorage.setItem(key, JSON.stringify(data));\r\n};\r\n\r\nconst loadFromLocalStorage = (key) => {\r\n    const data = localStorage.getItem(key);\r\n    return data ? JSON.parse(data) : [];\r\n};\n\n//# sourceURL=webpack://todo-app-V2/./src/js/storage.js?");

/***/ }),

/***/ "./src/js/taskManager.js":
/*!*******************************!*\
  !*** ./src/js/taskManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   retrieveTaskInfo: () => (/* binding */ retrieveTaskInfo)\n/* harmony export */ });\nlet globalTaskIdCounter = 0;\r\n\r\nfunction Task(id, name, description, date, priority, projectId) {\r\n    this.id = id;\r\n    this.name = name;\r\n    this.description = description;\r\n    this.date = date;\r\n    this.priority = priority;\r\n    this.projectId = projectId;\r\n}\r\n\r\nfunction retrieveTaskInfo(currentProjectId) {\r\n    globalTaskIdCounter++;\r\n    const name = document.getElementById('question-task-name').value;\r\n    const description = document.getElementById('question-task-description').value;\r\n    const date = document.getElementById('question-task-date').value;\r\n    const priority = document.getElementById('question-task-priority').value;\r\n    return new Task(\"Task\" + globalTaskIdCounter, name, description, date, priority, currentProjectId);\r\n}\r\n\n\n//# sourceURL=webpack://todo-app-V2/./src/js/taskManager.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app-V2/./src/styles.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;