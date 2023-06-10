const caruselInner = document.querySelector('.carusel-inner');
const caruselButtonNext = document.getElementById('carusel-button-next');
const caruselButtonPrev = document.getElementById('carusel-button-prev');
const caruselButtonNewSlide = document.getElementById('carusel-button-new-sliade');
let i = 1;
let counterNamberOfSlides = document.getElementsByClassName('carusel-item').length;

const caruselInputHeaderText = document.getElementById('carusel-input-header');
const caruselInputTextWords = document.getElementById('carusel-input-text');
console.log(caruselInputHeaderText.value)

caruselButtonNext.addEventListener('click', function  () {
    let nomberOfSlides = caruselInner.children.length;
    if (i !== nomberOfSlides) {
        let notActiveSlide = document.querySelector('.carusel-item.active').nextElementSibling;
        let classActive = document.querySelector('.carusel-item.active');
        classActive.classList.remove('active');
        notActiveSlide.classList.add('active');
        i++;
    } else {
        i = 1;
        let firstSlide = caruselInner.firstElementChild;
        let lastSlide = caruselInner.lastElementChild;
        firstSlide.classList.add('active');
        lastSlide.classList.remove('active');
    }
});

caruselButtonPrev.addEventListener('click', function  () {
    let nomberOfSlides = caruselInner.children.length;
    if (i !== 1) {
        let notActiveSlide = document.querySelector('.carusel-item.active').previousElementSibling;
        let classActive = document.querySelector('.carusel-item.active');
        classActive.classList.remove('active');
        notActiveSlide.classList.add('active');
        i--;
    } else {
        i = nomberOfSlides;
        let firstSlide = caruselInner.firstElementChild;
        let lastSlide = caruselInner.lastElementChild;
        firstSlide.classList.remove('active');
        lastSlide.classList.add('active');
    }
});

class Slider {
    constructor (number) {
        this.number = number;
        this.slides = caruselInner.length;
    }
    addNewSlide () {
        const header = document.createElement('h1');
        const caruselInputHeader = caruselInputHeaderText.value;
        header.innerText = caruselInputHeader;

        const p = document.createElement('p')
        const caruselInputText = caruselInputTextWords.value;
        p.innerText = caruselInputText;

        const sliderEl = document.createElement('div')
        sliderEl.classList.add('carusel-item')

        const caruselInner = document.getElementsByClassName('carusel-inner')[0];

        caruselInner.insertAdjacentElement('beforeend', sliderEl)

        sliderEl.insertAdjacentElement('beforeend', header)
        sliderEl.insertAdjacentElement('beforeend', p)
        counterNamberOfSlides += 1;
    }

}
let sliderEl = '';
const slider = new Slider(sliderEl);

caruselButtonNewSlide.addEventListener('click', slider.addNewSlide);