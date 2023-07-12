/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("const slider = document.querySelector('.slider');\r\nconst slides = slider.querySelector('.slides');\r\nconst prevBtn = slider.querySelector('.prev');\r\nconst nextBtn = slider.querySelector('.next');\r\nlet slideWidth = slider.offsetWidth;\r\nlet slideIndex = 0;\r\nlet autoPlayInterval;\r\n\r\nprevBtn.addEventListener('click', () => {\r\n  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;\r\n  updateSlidePosition();\r\n});\r\n\r\nnextBtn.addEventListener('click', () => {\r\n  slideIndex = (slideIndex + 1) % slides.children.length;\r\n  updateSlidePosition();\r\n});\r\n\r\nfunction updateSlidePosition() {\r\n  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;\r\n}\r\n\r\nwindow.addEventListener('resize', () => {\r\n  slideWidth = slider.offsetWidth;\r\n  updateSlidePosition();\r\n});\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  slideWidth = slider.offsetWidth;\r\n  slides.style.width = `${slideWidth * slides.children.length}px`;\r\n  updateSlidePosition();\r\n  startAutoPlay();\r\n});\r\n\r\nfunction startAutoPlay() {\r\n  autoPlayInterval = setInterval(() => {\r\n    slideIndex = (slideIndex + 1) % slides.children.length;\r\n    updateSlidePosition();\r\n  }, 10000);\r\n}\r\n\r\nfunction stopAutoPlay() {\r\n  clearInterval(autoPlayInterval);\r\n}\r\n\r\n\r\nasync function getResponse() {\r\n  let response = await fetch('http://localhost:5001/news')\r\n  let content = await response.json()\r\n  let news = document.querySelector('.newsContent')\r\n  let key;\r\n  for (key in content) {\r\n    console.log(content[key])\r\n    news.innerHTML += `\r\n      <div class=\"news\">\r\n            <div class=\"newsImg\">\r\n            <img src=\"http://localhost:5001/${content[key].image}\" alt=\"1\" >\r\n            </div>\r\n            <div class=\"newsText effect-to-bottom\">\r\n                <div class=\"h2Body\">\r\n                <h2 class=\"newsName\">${content[key].title}</h2>\r\n                </div>\r\n                <a href=\"#\">\r\n                    <div class=\"aBody\">\r\n                    Перейти\r\n                    </div>\r\n                    </a>\r\n            </div>\r\n    `\r\n  }\r\n}\r\n\r\ngetResponse()\n\n//# sourceURL=webpack://gulp4-starter/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;