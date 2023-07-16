const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
let slideWidth = slider.offsetWidth;
let slideIndex = 0;
let autoPlayInterval;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.children.length) % slides.children.length;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.children.length;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

window.addEventListener('resize', () => {
  slideWidth = slider.offsetWidth;
  updateSlidePosition();
});


window.addEventListener('load', () => {
  slideWidth = slider.offsetWidth;
  slides.style.width = `${slideWidth * slides.children.length}px`;
  updateSlidePosition();
  startAutoPlay();
});

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % slides.children.length;
    updateSlidePosition();
  }, 10000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}


async function getResponse() {
  try {
    const response = await fetch('http://localhost:5001/news');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Получаем данные в формате JSON из ответа сервера
    const content = await response.json();
    const newsContainer = document.querySelector('.newsContent');
    newsContainer.innerHTML = ''; // Очищаем контейнер перед обновлением

    const newsLimit = 3; // Ограничение на количество получаемых новостей
    for (let i = 0; i < Math.min(content.length, newsLimit); i++) {
      const news = content[i]; // Получаем текущую новость из массива
      const newsDiv = document.createElement('div');
      newsDiv.classList.add('news');

      const newsImgDiv = document.createElement('div');
      newsImgDiv.classList.add('newsImg');

      // Создаем изображение и устанавливаем атрибуты src и alt
      const img = document.createElement('img');
      img.src = `http://localhost:5001/${encodeURIComponent(news.image)}`;
      img.alt = "1";
      newsImgDiv.appendChild(img);

      const newsTextDiv = document.createElement('div');
      newsTextDiv.classList.add('newsText', 'effect-to-bottom');

      const h2BodyDiv = document.createElement('div');
      h2BodyDiv.classList.add('h2Body');

      // Создаем заголовок h2 и устанавливаем текст новости
      const h2 = document.createElement('h2');
      h2.classList.add('newsName');
      h2.textContent = news.title;
      h2BodyDiv.appendChild(h2);

      const a = document.createElement('a');
      a.href = "#";
      a.classList.add('aBody');
      a.textContent = "Перейти";

      newsTextDiv.appendChild(h2BodyDiv);
      newsTextDiv.appendChild(a);

      newsDiv.appendChild(newsImgDiv);
      newsDiv.appendChild(newsTextDiv);

      newsContainer.appendChild(newsDiv); // Добавляем сформированную новость в контейнер
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getResponse();


