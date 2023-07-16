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

eval("const slider = document.querySelector('.slider');\r\nconst slides = slider.querySelector('.slides');\r\nconst prevBtn = slider.querySelector('.prev');\r\nconst nextBtn = slider.querySelector('.next');\r\nlet slideWidth = slider.offsetWidth;\r\nlet slideIndex = 0;\r\nlet autoPlayInterval;\r\n\r\nprevBtn.addEventListener('click', () => {\r\n  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;\r\n  updateSlidePosition();\r\n});\r\n\r\nnextBtn.addEventListener('click', () => {\r\n  slideIndex = (slideIndex + 1) % slides.children.length;\r\n  updateSlidePosition();\r\n});\r\n\r\nfunction updateSlidePosition() {\r\n  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;\r\n}\r\n\r\nwindow.addEventListener('resize', () => {\r\n  slideWidth = slider.offsetWidth;\r\n  updateSlidePosition();\r\n});\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  slideWidth = slider.offsetWidth;\r\n  slides.style.width = `${slideWidth * slides.children.length}px`;\r\n  updateSlidePosition();\r\n  startAutoPlay();\r\n});\r\n\r\nfunction startAutoPlay() {\r\n  autoPlayInterval = setInterval(() => {\r\n    slideIndex = (slideIndex + 1) % slides.children.length;\r\n    updateSlidePosition();\r\n  }, 10000);\r\n}\r\n\r\nfunction stopAutoPlay() {\r\n  clearInterval(autoPlayInterval);\r\n}\r\n\r\n\r\nasync function getResponse() {\r\n  try {\r\n    const response = await fetch('http://localhost:5001/news');\r\n    if (!response.ok) {\r\n      throw new Error('Network response was not ok');\r\n    }\r\n\r\n    // Получаем данные в формате JSON из ответа сервера\r\n    const content = await response.json();\r\n    const newsContainer = document.querySelector('.newsContent');\r\n    newsContainer.innerHTML = ''; // Очищаем контейнер перед обновлением\r\n\r\n    const newsLimit = 3; // Ограничение на количество получаемых новостей\r\n    for (let i = 0; i < Math.min(content.length, newsLimit); i++) {\r\n      const news = content[i]; // Получаем текущую новость из массива\r\n      const newsDiv = document.createElement('div');\r\n      newsDiv.classList.add('news');\r\n\r\n      const newsImgDiv = document.createElement('div');\r\n      newsImgDiv.classList.add('newsImg');\r\n\r\n      // Создаем изображение и устанавливаем атрибуты src и alt\r\n      const img = document.createElement('img');\r\n      img.src = `http://localhost:5001/${encodeURIComponent(news.image)}`;\r\n      img.alt = \"1\";\r\n      newsImgDiv.appendChild(img);\r\n\r\n      const newsTextDiv = document.createElement('div');\r\n      newsTextDiv.classList.add('newsText', 'effect-to-bottom');\r\n\r\n      const h2BodyDiv = document.createElement('div');\r\n      h2BodyDiv.classList.add('h2Body');\r\n\r\n      // Создаем заголовок h2 и устанавливаем текст новости\r\n      const h2 = document.createElement('h2');\r\n      h2.classList.add('newsName');\r\n      h2.textContent = news.title;\r\n      h2BodyDiv.appendChild(h2);\r\n\r\n      const a = document.createElement('a');\r\n      a.href = \"#\";\r\n      a.classList.add('aBody');\r\n      a.textContent = \"Перейти\";\r\n\r\n      newsTextDiv.appendChild(h2BodyDiv);\r\n      newsTextDiv.appendChild(a);\r\n\r\n      newsDiv.appendChild(newsImgDiv);\r\n      newsDiv.appendChild(newsTextDiv);\r\n\r\n      newsContainer.appendChild(newsDiv); // Добавляем сформированную новость в контейнер\r\n    }\r\n  } catch (error) {\r\n    console.error('Error fetching data:', error);\r\n  }\r\n}\r\n\r\ngetResponse();\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp4-starter/./src/js/main.js?");

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