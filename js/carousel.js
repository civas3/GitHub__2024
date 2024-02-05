let currentIndex = 0;
let intervalId;
const carouselImages = document.querySelectorAll('.carousel-image');
const contentBoxes = document.querySelectorAll('.carousel-content-box');
const navigationDots = document.querySelectorAll('.carousel-navigation__dot');
const prevBtn = document.getElementById('prevBtn');
const pauseBtn = document.getElementById('pauseBtn');
const nextBtn = document.getElementById('nextBtn');


function showSlide(index) {
  // Reset all elements to initial state
  for (let i = 0; i < carouselImages.length; i++) {
    carouselImages[i].classList.remove('carousel-active');
    contentBoxes[i].style.display = 'none';
    navigationDots[i].classList.remove('carousel-active');
  }

  // Set current slide to carousel-active
  carouselImages[index].classList.add('carousel-active');
  contentBoxes[index].style.display = 'block';
  navigationDots[index].classList.add('carousel-active');
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselImages.length - 1;
  }
  showSlide(currentIndex);
}

function startCarousel() {
  intervalId = setInterval(nextSlide, 3000);
}

function pauseCarousel() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    pauseBtn.innerHTML = '<i class="fa fa-play" style="font-size:12px; padding-right: 10px; padding-top: 15px;"></i>Play';
  } else {
    startCarousel();
    pauseBtn.innerHTML = '<i class="fa fa-pause" style="font-size:12px; padding-right: 10px; padding-top: 15px;"></i>Pause';
  }
}

function dotClick(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
pauseBtn.addEventListener('click', pauseCarousel);
nextBtn.addEventListener('click', nextSlide);

for (let i = 0; i < navigationDots.length; i++) {
  navigationDots[i].addEventListener('click', dotClick.bind(null, i));
}

// Start the carousel
// startCarousel();

