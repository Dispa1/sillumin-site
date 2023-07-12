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
  let response = await fetch('http://localhost:5001/news')
  let content = await response.json()
  let news = document.querySelector('.newsContent')
  let key;
  for (key in content) {
    console.log(content[key])
    news.innerHTML += `
      <div class="news">
            <div class="newsImg">
            <img src="http://localhost:5001/${content[key].image}" alt="1" >
            </div>
            <div class="newsText effect-to-bottom">
                <div class="h2Body">
                <h2 class="newsName">${content[key].title}</h2>
                </div>
                <a href="#">
                    <div class="aBody">
                    Перейти
                    </div>
                    </a>
            </div>
    `
  }
}

getResponse()