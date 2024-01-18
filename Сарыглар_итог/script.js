const slider = document.querySelector('.slides');
let counter = 0;

function slide() {
    if (counter < 2) {
        counter++;
    } else {
        counter = 0;
    }
    slider.style.transform = `translateX(-${counter * 33.33}%)`;
}

setInterval(slide, 3000);