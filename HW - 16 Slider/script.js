const caruselInner = document.getElementById('carusel-inner');

const caruselButtonNext = document.getElementById('carusel-button-next');
const caruselButtonPrev = document.getElementById('carusel-button-prev');
const caruselButtonFirstSlide = document.getElementById('carusel-button-first-slide');
const caruselButtonLastSlide = document.getElementById('carusel-button-last-slide');
const caruselButtonDeleteLastSlide = document.querySelector('.carusel-control-delete-last-slide button')
const caruselButtonAddSlide = document.getElementById('carusel-button-add-sliade');
const caruselButtonOpenSlideByIndex = document.getElementById('carusel-control-open-slide-button')

let notActiveSlide;
let i = 1;
let counterNamberOfSlides = document.getElementsByClassName('carusel-item').length;
let currentSlide = document.getElementsByClassName('active')

let caruselInputHeaderText = document.getElementById('carusel-input-header');
let caruselInputTextWords = document.getElementById('carusel-input-text');

// let number;
// let openSlideInput = document.getElementById('carusel-control-open-slide-number')
// openSlideInput.addEventListener('input', () => {
//     number = openSlideInput.value;
//     console.log(number)
// })

class Slider {
    constructor(numberOfSlide) {
        let numberOfSlide = document.getElementsByClassName('.carusel-control-open-slide-number');
    }
    nextSlide() {
        if (i !== caruselInner.children.length && notActiveSlide !== null) {
            notActiveSlide = document.querySelector('.carusel-item.active').nextElementSibling;
            let classActive = document.querySelector('.carusel-item.active');
            classActive.classList.remove('active');
            notActiveSlide.classList.add('active');
            i++;
        } else if (i = 1) {
            let firstSlide = caruselInner.firstElementChild;
            let lastSlide = caruselInner.lastElementChild;
            firstSlide.classList.add('active');
            lastSlide.classList.remove('active');
        } else {
            caruselInner.firstElementChild.classList.add('active')
        }
    }
    prevSlide() {
        if (i !== 1 && notActiveSlide !== null) {
            notActiveSlide = document.querySelector('.carusel-item.active').previousElementSibling;
            let classActive = document.querySelector('.carusel-item.active');
            classActive.classList.remove('active');
            notActiveSlide.classList.add('active');
            i--;
        } else if (i = caruselInner.children.length) {
            let firstSlide = caruselInner.firstElementChild;
            let lastSlide = caruselInner.lastElementChild;
            firstSlide.classList.remove('active');
            lastSlide.classList.add('active');
        } else {
            caruselInner.firstElementChild.classList.add('active')
        }
    }
    firstSlide() {
        i = 1;
        currentSlide[0].classList.remove('active')
        caruselInner.firstElementChild.classList.add('active')
    }
    lastSlide() {
        i = caruselInner.children.length;
        currentSlide[0].classList.remove('active')
        caruselInner.lastElementChild.classList.add('active')
    }
    addSlide() {
        const header = document.createElement('h1');
        const caruselInputHeader = caruselInputHeaderText.value;
        header.innerText = caruselInputHeader;
        caruselInputHeaderText.value = '';
        
        const p = document.createElement('p')
        const caruselInputText = caruselInputTextWords.value;
        p.innerText = caruselInputText;
        caruselInputTextWords.value = '';

        const sliderEl = document.createElement('div')
        sliderEl.classList.add('carusel-item')

        const caruselInner = document.getElementsByClassName('carusel-inner')[0];

        caruselInner.insertAdjacentElement('beforeend', sliderEl)

        sliderEl.insertAdjacentElement('beforeend', header)
        sliderEl.insertAdjacentElement('beforeend', p)
        counterNamberOfSlides += 1;
        slider.lastSlide()
    };
    removeLastSlide() {
        currentSlide[0].classList.remove('active')
        const lastSlide = caruselInner.lastElementChild;
        lastSlide.remove();
        caruselInner.lastElementChild.classList.add('active');
        i = caruselInner.children.length;
    }
    openSlideByIndex() {
        console.log(numberOfSlide)
        // currentSlide[0].classList.remove('active')
        // // caruselInner[this.number].classList.add('active');
        // let slideIndex = this.number;
        // // console.dir(caruselInner.children[slideIndex])
        // i = caruselInner.children.length;
    }
    // // removeSlide(number) {

    // // }
    // // insertSlide(number, title, description) {

    // // }
}

const slider = new Slider(numberOfSlide);

caruselButtonNext.addEventListener('click', slider.nextSlide);
caruselButtonPrev.addEventListener('click', slider.prevSlide);
caruselButtonFirstSlide.addEventListener('click', slider.firstSlide);
caruselButtonLastSlide.addEventListener('click', slider.lastSlide);
caruselButtonDeleteLastSlide.addEventListener('click', slider.removeLastSlide)
caruselButtonAddSlide.addEventListener('click', slider.addSlide);
caruselButtonOpenSlideByIndex.addEventListener('click', slider.openSlideByIndex)

// removeSlide(number)
// insertSlide(number, title, description)