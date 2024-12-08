const sliderTrack = document.querySelector('.slider-track');
const imageWidth = sliderTrack.children[0].offsetWidth;
const arrows = document.querySelector('.slider-arrows');
let currentPosition = 0;
let idInterval;

changeImage = (direction) => {
    isRignt = direction ? -1 : 1;
    currentPosition += imageWidth * isRignt;
    if (currentPosition <= -imageWidth * 3) {
      currentPosition = 0;
    } else if (currentPosition > 0) {
      currentPosition = -imageWidth * 2;
    }

    sliderTrack.style.transform = `translateX(${currentPosition}px)`;
}

idInterval = setInterval(changeImage, 4000, true);



arrows.addEventListener('click', (event) => {
    let target = event.target;
  
    if (target === arrows.children[0]) {
      changeImage(false);
    } else if (target === arrows.children[1]) {
      changeImage(true);
    } else {
      return;
    }
    clearInterval(idInterval);
    idInterval = setInterval(changeImage, 4000, true);
})