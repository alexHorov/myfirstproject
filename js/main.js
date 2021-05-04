let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__bottom');

document.querySelector('.btn_next').addEventListener('click', () => {
    offset = offset + 290; //offset +=  290;
    sliderLine.style.left = -offset + 'px';
})