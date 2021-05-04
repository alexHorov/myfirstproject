let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider__bottom');

document.querySelector('.btn_next').addEventListener('click', () => {
    offset = offset + 290; //offset +=  290;
    if (offset > 870) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
})
document.querySelector('.btn_prev').addEventListener('click', () => {
    offset = offset - 290; //offset -=  290;
    if (offset < 0) {
        offset = 870;
    }
    sliderLine.style.left = -offset + 'px';
})