webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	var browser_1 = __webpack_require__(6);
	var app_1 = __webpack_require__(226);
	browser_1.bootstrap(app_1.App);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./todomvc.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./todomvc.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "html,\nbody {\n    margin: 0;\n    padding: 0;\n}\n\nbutton {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n}\n\nbody {\n    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    line-height: 1.4em;\n    background: #eaeaea url(" + __webpack_require__(4) + ");\n    color: #4d4d4d;\n    width: 550px;\n    margin: 0 auto;\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n    -o-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n    outline: none;\n}\n\n#todoapp {\n    overflow: hidden;\n    background: #fff;\n    background: rgba(255, 255, 255, 0.9);\n    margin: 0 0 40px 0;\n    border: 1px solid #ccc;\n    position: relative;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2),\n    0 25px 50px 0 rgba(0, 0, 0, 0.15);\n}\n\n#todoapp:before {\n    content: '';\n    border-left: 1px solid #f5d6d6;\n    border-right: 1px solid #f5d6d6;\n    width: 2px;\n    position: absolute;\n    top: 30px;\n    left: 40px;\n    height: 100%;\n}\n\n#todoapp input::-webkit-input-placeholder {\n    font-style: italic;\n}\n\n#todoapp input::-moz-placeholder {\n    font-style: italic;\n    color: #a9a9a9;\n}\n\n.title {\n    width: 100%;\n    font-size: 70px;\n    font-weight: bold;\n    text-align: center;\n    color: #b3b3b3;\n    color: rgba(255, 255, 255, 0.3);\n    text-shadow: -1px -1px rgba(0, 0, 0, 0.2);\n    -webkit-text-rendering: optimizeLegibility;\n    -moz-text-rendering: optimizeLegibility;\n    -ms-text-rendering: optimizeLegibility;\n    -o-text-rendering: optimizeLegibility;\n    text-rendering: optimizeLegibility;\n}\n\n#header {\n    padding-top: 15px;\n    border-radius: inherit;\n}\n\n/*\n#header:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    height: 15px;\n    z-index: 2;\n    border-bottom: 1px solid #6c615c;\n    background: #8d7d77;\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(132, 110, 100, 0.8)),to(rgba(101, 84, 76, 0.8)));\n    background: -webkit-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));\n    background: linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));\n    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#9d8b83', EndColorStr='#847670');\n    border-top-left-radius: 1px;\n    border-top-right-radius: 1px;\n}\n*/\n\n#new-todo,\n.edit {\n    position: relative;\n    margin: 0;\n    width: 100%;\n    font-size: 24px;\n    font-family: inherit;\n    line-height: 1.4em;\n    border: 0;\n    outline: none;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    -o-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-font-smoothing: antialiased;\n    -ms-font-smoothing: antialiased;\n    -o-font-smoothing: antialiased;\n    font-smoothing: antialiased;\n}\n\n#new-todo {\n    padding: 25px 16px 16px 60px;\n    border: none;\n    background: rgba(0, 0, 0, 0.02);\n    box-shadow: none;\n}\n\n#main {\n    position: relative;\n    z-index: 2;\n    border-top: 1px dotted #adadad;\n}\n\nlabel[for='toggle-all'] {\n    display: none;\n}\n\n#toggle-all {\n    position: absolute;\n    top: -42px;\n    left: -4px;\n    width: 40px;\n    text-align: center;\n    /* Mobile Safari */\n    border: none;\n}\n\n#toggle-all:before {\n    content: '\\BB';\n    font-size: 28px;\n    color: #d9d9d9;\n    padding: 0 25px 7px;\n}\n\n#toggle-all:checked:before {\n    color: #737373;\n}\n\n#todo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n#todo-list li {\n    position: relative;\n    font-size: 24px;\n    border-bottom: 1px dotted #ccc;\n}\n\n#todo-list li:last-child {\n    border-bottom: none;\n}\n\n#todo-list li.editing {\n    border-bottom: none;\n    padding: 0;\n}\n\n#todo-list li.editing .edit {\n    display: block;\n    width: 506px;\n    padding: 13px 17px 12px 17px;\n    margin: 0 0 0 43px;\n}\n\n#todo-list li.editing .view {\n    display: none;\n}\n\n#todo-list li .toggle {\n    text-align: center;\n    width: 40px;\n    /* auto, since non-WebKit browsers doesn't support input styling */\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    /* Mobile Safari */\n    border: none;\n    -webkit-appearance: none;\n    -ms-appearance: none;\n    -o-appearance: none;\n    appearance: none;\n}\n\n#todo-list li .toggle:after {\n    content: '\\2714';\n    /* 40 + a couple of pixels visual adjustment */\n    line-height: 43px;\n    font-size: 20px;\n    color: #d9d9d9;\n    text-shadow: 0 -1px 0 #bfbfbf;\n}\n\n#todo-list li .toggle:checked:after {\n    color: #85ada7;\n    text-shadow: 0 1px 0 #669991;\n    bottom: 1px;\n    position: relative;\n}\n\n#todo-list li label {\n    white-space: pre;\n    word-break: break-word;\n    padding: 15px 60px 15px 15px;\n    margin-left: 45px;\n    display: block;\n    line-height: 1.2;\n    -webkit-transition: color 0.4s;\n    transition: color 0.4s;\n}\n\n#todo-list li.completed label {\n    color: #a9a9a9;\n    text-decoration: line-through;\n}\n\n#todo-list li .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 22px;\n    color: #a88a8a;\n    -webkit-transition: all 0.2s;\n    transition: all 0.2s;\n}\n\n#todo-list li .destroy:hover {\n    text-shadow: 0 0 1px #000,\n    0 0 10px rgba(199, 107, 107, 0.8);\n    -webkit-transform: scale(1.3);\n    -ms-transform: scale(1.3);\n    transform: scale(1.3);\n}\n\n#todo-list li .destroy:after {\n    content: '\\2716';\n}\n\n#todo-list li:hover .destroy {\n    display: block;\n}\n\n#todo-list li .edit {\n    display: none;\n}\n\n#todo-list li.editing:last-child {\n    margin-bottom: -1px;\n}\n\n#menubar {\n    /*color: #777;*/\n    color: #fff;\n    padding: 0 15px;\n    /*position: absolute;*/\n    right: 0;\n    /*bottom: -31px;*/\n    /*left: 0;*/\n    height: 30px;\n    /*z-index: 1;*/\n    text-align: center;\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 2;\n    border-bottom: 1px solid #6c615c;\n    background: #8d7d77;\n    background: -webkit-gradient(linear, left top, left bottom, from(rgba(132, 110, 100, 0.8)),to(rgba(101, 84, 76, 0.8)));\n    background: -webkit-linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));\n    background: linear-gradient(top, rgba(132, 110, 100, 0.8), rgba(101, 84, 76, 0.8));\n    filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#9d8b83', EndColorStr='#847670');\n    border-top-left-radius: 1px;\n    border-top-right-radius: 1px;\n}\n\n/*\n#footer:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 31px;\n    left: 0;\n    height: 50px;\n    z-index: -1;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3),\n    0 6px 0 -3px rgba(255, 255, 255, 0.8),\n    0 7px 1px -3px rgba(0, 0, 0, 0.3),\n    0 43px 0 -6px rgba(255, 255, 255, 0.8),\n    0 44px 2px -6px rgba(0, 0, 0, 0.2);\n}\n*/\n\n#todo-count {\n    float: left;\n    text-align: left;\n}\n\n#filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n#filters li {\n    display: inline;\n}\n\n#filters li a {\n    color: #83756f;\n    margin: 2px;\n    text-decoration: none;\n}\n\n#filters li a.selected {\n    font-weight: bold;\n}\n\n#clear-completed {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    background: rgba(0, 0, 0, 0.1);\n    font-size: 11px;\n    padding: 0 10px;\n    border-radius: 3px;\n    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.2);\n}\n\n#clear-completed:hover {\n    background: rgba(0, 0, 0, 0.15);\n    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.3);\n}\n\n#info {\n    margin: 65px auto 0;\n    color: #a6a6a6;\n    font-size: 12px;\n    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);\n    text-align: center;\n}\n\n#info a {\n    color: inherit;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox and Opera\n*/\n\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n    #toggle-all,\n    #todo-list li .toggle {\n        background: none;\n    }\n\n    #todo-list li .toggle {\n        height: 40px;\n    }\n\n    #toggle-all {\n        top: -56px;\n        left: -15px;\n        width: 65px;\n        height: 41px;\n        -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n        transform: rotate(90deg);\n        -webkit-appearance: none;\n        appearance: none;\n    }\n}\n\n.hidden {\n    display: none;\n}\n\nhr {\n    margin: 20px 0;\n    border: 0;\n    border-top: 1px dashed #C5C5C5;\n    border-bottom: 1px dashed #F7F7F7;\n}\n\n.learn a {\n    font-weight: normal;\n    text-decoration: none;\n    color: #b83f45;\n}\n\n.learn a:hover {\n    text-decoration: underline;\n    color: #787e7e;\n}\n\n.learn h3,\n.learn h4,\n.learn h5 {\n    margin: 10px 0;\n    font-weight: 500;\n    line-height: 1.2;\n    color: #000;\n}\n\n.learn h3 {\n    font-size: 24px;\n}\n\n.learn h4 {\n    font-size: 18px;\n}\n\n.learn h5 {\n    margin-bottom: 0;\n    font-size: 14px;\n}\n\n.learn ul {\n    padding: 0;\n    margin: 0 0 30px 25px;\n}\n\n.learn li {\n    line-height: 20px;\n}\n\n.learn p {\n    font-size: 15px;\n    font-weight: 300;\n    line-height: 1.3;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n\n.quote {\n    border: none;\n    margin: 20px 0 60px 0;\n}\n\n.quote p {\n    font-style: italic;\n}\n\n.quote p:before {\n    content: '\\201C';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    top: -20px;\n    left: 3px;\n}\n\n.quote p:after {\n    content: '\\201D';\n    font-size: 50px;\n    opacity: .15;\n    position: absolute;\n    bottom: -42px;\n    right: 3px;\n}\n\n.quote footer {\n    position: absolute;\n    bottom: -40px;\n    right: 0;\n}\n\n.quote footer img {\n    border-radius: 3px;\n}\n\n.quote footer a {\n    margin-left: 5px;\n    vertical-align: middle;\n}\n\n.speech-bubble {\n    position: relative;\n    padding: 10px;\n    background: rgba(0, 0, 0, .04);\n    border-radius: 5px;\n}\n\n.speech-bubble:after {\n    content: '';\n    position: absolute;\n    top: 100%;\n    right: 30px;\n    border: 13px solid transparent;\n    border-top-color: rgba(0, 0, 0, .04);\n}\n\n.learn-bar > .learn {\n    position: absolute;\n    width: 272px;\n    top: 8px;\n    left: -300px;\n    padding: 10px;\n    border-radius: 5px;\n    background-color: rgba(255, 255, 255, .6);\n    -webkit-transition-property: left;\n    transition-property: left;\n    -webkit-transition-duration: 500ms;\n    transition-duration: 500ms;\n}\n\n@media (min-width: 899px) {\n    .learn-bar {\n        width: auto;\n        margin: 0 0 0 300px;\n    }\n\n    .learn-bar > .learn {\n        left: 8px;\n    }\n\n    .learn-bar #todoapp {\n        width: 550px;\n        margin: 130px auto 40px auto;\n    }\n}\n", ""]);

	// exports


/***/ },

/***/ 3:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 4:
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var todo_service_1 = __webpack_require__(227);
	var todo_list_1 = __webpack_require__(230);
	var index_1 = __webpack_require__(228);
	var menubar_1 = __webpack_require__(234);
	var App = (function () {
	    function App(_todoService) {
	        this._todoService = _todoService;
	        this.todo = new index_1.Todo('');
	    }
	    App.prototype.addTodo = function () {
	        if (this.todo.text.trim() === '')
	            return;
	        this._todoService.addTodo(this.todo);
	        this.todo = new index_1.Todo('');
	    };
	    App.prototype.toggleTodos = function () {
	        this._todoService.toggleTodos();
	    };
	    App = __decorate([
	        core_1.Component({
	            selector: 'app',
	            template: "\n      <h1 class=\"title\">Todo App</h1>\n      <section id=\"todoapp\">\n        <menubar></menubar>\n        <div>\n          <header id=\"header\">\n            <input type=\"text\" id=\"new-todo\" placeholder=\"What needs to be done?\" [(ngModel)]=\"todo.text\" (keyup.enter)=\"addTodo()\">\n          </header>\n          <section id=\"main\">\n            <input type=\"checkbox\" id=\"toggle-all\" (click)=\"toggleTodos()\">\n            <todo-list></todo-list>\n          </section>\n        </div>\n      </section>\n      <footer id=\"info\">\n        <p>Double-click to edit a todo</p>\n        <p>Created by <a href=\"http://kgosse.github.io/resumecard\" target=\"_blank\">kgosse</a></p>\n        <p>Based on <a href=\"http://todomvc.com\" target=\"_blank\">TodoMVC</a></p>\n      </footer>\n    ",
	            providers: [
	                todo_service_1.TodoService
	            ],
	            directives: [
	                todo_list_1.TodoList,
	                menubar_1.Menubar
	            ]
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService])
	    ], App);
	    return App;
	}());
	exports.App = App;


/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var store_1 = __webpack_require__(228);
	var ActionTypes_1 = __webpack_require__(229);
	var TodoService = (function () {
	    function TodoService() {
	        this._todoStore = new store_1.TodoStore();
	        this.todoEvent = new core_1.EventEmitter();
	    }
	    TodoService.prototype.getTodos = function () {
	        return Promise.resolve(this._todoStore.todos);
	    };
	    TodoService.prototype.addTodo = function (todo) {
	        this._todoStore.add(todo);
	    };
	    TodoService.prototype.getTodosLength = function () {
	        return this._todoStore.todos.length;
	    };
	    TodoService.prototype.getRemainingTasksLength = function () {
	        return this._todoStore.getRemaining().length;
	    };
	    TodoService.prototype.archive = function () {
	        this._todoStore.removeDoneTasks();
	        this.todoEvent.emit({
	            type: ActionTypes_1.ARCHIVE
	        });
	    };
	    TodoService.prototype.toggleTodos = function () {
	        this._todoStore.toggleAll();
	    };
	    TodoService.prototype.removeTodo = function (todo) {
	        this._todoStore.remove(todo);
	    };
	    TodoService.prototype.saveTodos = function () {
	        this._todoStore.updateStore();
	    };
	    TodoService.prototype.statusChange = function (val) {
	        this.todoEvent.emit({
	            type: ActionTypes_1.STATUS_CHANGE,
	            payload: val
	        });
	    };
	    TodoService.prototype.textChange = function (val) {
	        this.todoEvent.emit({
	            type: ActionTypes_1.TEXT_CHANGE,
	            payload: val.trim()
	        });
	    };
	    TodoService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TodoService);
	    return TodoService;
	}());
	exports.TodoService = TodoService;


/***/ },

/***/ 228:
/***/ function(module, exports) {

	"use strict";
	var Todo = (function () {
	    function Todo(text) {
	        this.done = false;
	        this.editing = false;
	        this.text = text.trim();
	    }
	    Object.defineProperty(Todo.prototype, "text", {
	        get: function () {
	            return this._text;
	        },
	        set: function (value) {
	            this._text = value.trim();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Todo;
	}());
	exports.Todo = Todo;
	var TodoStore = (function () {
	    function TodoStore() {
	        var persistedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
	        // Normalize back into classes
	        this.todos = persistedTodos.map(function (todo) {
	            var ret = new Todo(todo._text);
	            ret.done = todo.done;
	            return ret;
	        });
	    }
	    TodoStore.prototype.getTasks = function (done) {
	        return this.todos.filter(function (todo) { return todo.done === done; });
	    };
	    TodoStore.prototype.updateStore = function () {
	        localStorage.setItem('todos', JSON.stringify(this.todos));
	    };
	    TodoStore.prototype.removeDoneTasks = function () {
	        this.todos = this.getTasks(false);
	        this.updateStore();
	    };
	    TodoStore.prototype.getRemaining = function () {
	        return this.getTasks(false);
	    };
	    TodoStore.prototype.getDoneTasks = function () {
	        return this.getTasks(true);
	    };
	    TodoStore.prototype.toggleTask = function (todo) {
	        todo.done = !todo.done;
	        this.updateStore();
	    };
	    TodoStore.prototype.add = function (todo) {
	        this.todos.push(todo);
	        this.updateStore();
	    };
	    TodoStore.prototype.toggleAll = function () {
	        for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
	            var todo = _a[_i];
	            todo.done = !todo.done;
	        }
	        this.updateStore();
	    };
	    TodoStore.prototype.remove = function (todo) {
	        this.todos.splice(this.todos.indexOf(todo), 1);
	        this.updateStore();
	    };
	    return TodoStore;
	}());
	exports.TodoStore = TodoStore;


/***/ },

/***/ 229:
/***/ function(module, exports) {

	"use strict";
	exports.ARCHIVE = "archive";
	exports.STATUS_CHANGE = "status_change";
	exports.TEXT_CHANGE = "text_change";


/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var todo_service_1 = __webpack_require__(227);
	var ActionTypes_1 = __webpack_require__(229);
	var Statuses_1 = __webpack_require__(231);
	var status_pipe_1 = __webpack_require__(232);
	var text_pipe_1 = __webpack_require__(233);
	var TodoList = (function () {
	    function TodoList(_todoService) {
	        var _this = this;
	        this._todoService = _todoService;
	        this._todoService.todoEvent.subscribe(function (action) {
	            switch (action.type) {
	                case ActionTypes_1.ARCHIVE:
	                    _this.getTodos();
	                    break;
	                case ActionTypes_1.STATUS_CHANGE:
	                    if (action.payload === Statuses_1.ALL)
	                        _this.getTodos();
	                    _this.status = action.payload;
	                    break;
	                case ActionTypes_1.TEXT_CHANGE:
	                    _this.text = action.payload;
	                    break;
	            }
	        });
	    }
	    TodoList.prototype.stopEditing = function (todo, editedTitle) {
	        todo.text = editedTitle;
	        todo.editing = false;
	    };
	    TodoList.prototype.cancelEditingTodo = function (todo) {
	        todo.editing = false;
	    };
	    TodoList.prototype.updateEditingTodo = function (todo, editedTitle) {
	        editedTitle = editedTitle.trim();
	        todo.editing = false;
	        if (editedTitle.length === 0) {
	            return this.removeTodo(todo);
	        }
	        todo.text = editedTitle;
	        this._todoService.saveTodos();
	    };
	    TodoList.prototype.editTodo = function (todo) {
	        todo.editing = true;
	    };
	    TodoList.prototype.getTodos = function () {
	        var _this = this;
	        this._todoService.getTodos().then(function (todos) { return _this.todos = todos; });
	    };
	    TodoList.prototype.toggleCheck = function (todo) {
	        todo.done = !todo.done;
	        this._todoService.saveTodos();
	    };
	    TodoList.prototype.removeTodo = function (todo) {
	        this._todoService.removeTodo(todo);
	    };
	    TodoList.prototype.ngOnInit = function () {
	        this.getTodos();
	    };
	    TodoList = __decorate([
	        core_1.Component({
	            selector: 'todo-list',
	            pipes: [status_pipe_1.StatusPipe, text_pipe_1.TextPipe],
	            template: "\n            <ul id=\"todo-list\">\n              <li *ngFor=\"#todo of (todos | status: status) | text: text\" [class.completed]=\"todo.done\" [class.editing]=\"todo.editing\">\n                <div class=\"view\">\n                  <input type=\"checkbox\" class=\"toggle\" [checked]=\"todo.done\" (click)=\"toggleCheck(todo)\">\n                  <label (dblclick)=\"editTodo(todo)\">{{todo.text}}</label>\n                  <button class=\"destroy\" (click)=\"removeTodo(todo)\"></button>\n                </div>\n                <input class=\"edit\" *ngIf=\"todo.editing\" [value]=\"todo.text\" #editedtodo (blur)=\"stopEditing(todo, editedtodo.value)\" (keyup.enter)=\"updateEditingTodo(todo, editedtodo.value)\" (keyup.escape)=\"cancelEditingTodo(todo)\">\n              </li>\n            </ul>\n            "
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService])
	    ], TodoList);
	    return TodoList;
	}());
	exports.TodoList = TodoList;


/***/ },

/***/ 231:
/***/ function(module, exports) {

	"use strict";
	exports.ALL = "All";
	exports.IN_PROGRESS = "In Progress";
	exports.DONE = "Done";


/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var Statuses_1 = __webpack_require__(231);
	var StatusPipe = (function () {
	    function StatusPipe() {
	    }
	    StatusPipe.prototype.transform = function (values, _a) {
	        var status = _a[0];
	        if (status === Statuses_1.IN_PROGRESS)
	            return values.filter(function (todo) { return !todo.done; });
	        else if (status === Statuses_1.DONE)
	            return values.filter(function (todo) { return todo.done; });
	        return values;
	    };
	    StatusPipe = __decorate([
	        core_1.Pipe({ name: 'status' }), 
	        __metadata('design:paramtypes', [])
	    ], StatusPipe);
	    return StatusPipe;
	}());
	exports.StatusPipe = StatusPipe;


/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var TextPipe = (function () {
	    function TextPipe() {
	    }
	    TextPipe.prototype.transform = function (values, _a) {
	        var text = _a[0];
	        if (!text || text === "")
	            return values;
	        return values.filter(function (todo) { return todo.text.toLowerCase().indexOf(text.toLowerCase()) !== -1; });
	    };
	    TextPipe = __decorate([
	        core_1.Pipe({ name: 'text' }), 
	        __metadata('design:paramtypes', [])
	    ], TextPipe);
	    return TextPipe;
	}());
	exports.TextPipe = TextPipe;


/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var todo_service_1 = __webpack_require__(227);
	var status_selector_1 = __webpack_require__(235);
	var Menubar = (function () {
	    function Menubar(_todoService) {
	        var _this = this;
	        this._todoService = _todoService;
	        this.getTodosLength = function () { return _this._todoService.getTodosLength(); };
	        this.getRemainingTasksLength = function () { return _this._todoService.getRemainingTasksLength(); };
	    }
	    Menubar.prototype.archive = function () {
	        this._todoService.archive();
	    };
	    Menubar.prototype.textChange = function (val) {
	        console.log('oninput');
	        this._todoService.textChange(val);
	    };
	    Menubar = __decorate([
	        core_1.Component({
	            selector: 'menubar',
	            directives: [status_selector_1.StatusSelector],
	            template: "\n      <style>\n        .archive {\n          text-decoration: none;\n          color: #fff;\n        }\n        .archive:hover {\n          cursor: pointer;\n          text-decoration: underline;\n        }\n      </style>\n      <div id=\"menubar\">\n        <span id=\"todo-count\">\n          <strong>{{getRemainingTasksLength()}}</strong> of <strong>{{getTodosLength()}} </strong>remaining\n        </span>\n        <div>\n          <input type=\"text\" placeholder=\"Filter by text\" #text (input)=\"textChange(text.value)\"> &nbsp;&nbsp;\n          <status-selector></status-selector>\n        </div>\n        <a href=\"#\" (click)=\"archive()\" class=\"archive\">Archive (<strong>{{getTodosLength() - getRemainingTasksLength()}}</strong>)</a>\n      </div>\n    "
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService])
	    ], Menubar);
	    return Menubar;
	}());
	exports.Menubar = Menubar;


/***/ },

/***/ 235:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by kevin on 05/05/2016.
	 */
	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(27);
	var todo_service_1 = __webpack_require__(227);
	var Statuses = __webpack_require__(231);
	var StatusSelector = (function () {
	    function StatusSelector(_todoService) {
	        this._todoService = _todoService;
	        this.statuses = [];
	    }
	    StatusSelector.prototype.statusChange = function (val) {
	        this._todoService.statusChange(val);
	    };
	    StatusSelector.prototype.ngOnInit = function () {
	        for (var status_1 in Statuses)
	            this.statuses.push(Statuses[status_1]);
	        this.statusChange(this.statuses[0]);
	    };
	    StatusSelector = __decorate([
	        core_1.Component({
	            selector: 'status-selector',
	            template: "\n        <select #sel (change)=\"statusChange(sel.value)\">\n            <option *ngFor=\"#status of statuses\">\n                {{status}}\n            </option>\n        </select>\n    "
	        }), 
	        __metadata('design:paramtypes', [todo_service_1.TodoService])
	    ], StatusSelector);
	    return StatusSelector;
	}());
	exports.StatusSelector = StatusSelector;


/***/ }

});