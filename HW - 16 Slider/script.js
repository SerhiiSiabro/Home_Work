const caruselInner = document.querySelector('.carusel-inner');
const caruselButtonNext = document.getElementById('carusel-button-next');
const caruselButtonPrev = document.getElementById('carusel-button-prev');
let i = 1;

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

