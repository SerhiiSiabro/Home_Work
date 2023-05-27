const text = document.getElementById('text');
const hideBtn = document.getElementById('button-visability');
const increaseBtn = document.getElementById('button-increase');
const decreaseBtn = document.getElementById('button-decrease');

let fontSize = 16;

hideBtn.onclick = function() {
  text.classList.toggle('hidden');

  if (hideBtn.textContent === 'Сховати текст') {
    hideBtn.textContent = 'Показати текст';
    hideBtn.style.backgroundColor = 'green';
  } else {
  hideBtn.textContent = 'Сховати текст';
  hideBtn.style.backgroundColor = 'brown';
  }
}

increaseBtn.addEventListener('click', function() {
  fontSize++;
  text.style.fontSize = `${fontSize}px`;
});

decreaseBtn.addEventListener('click', function() {
  fontSize--;
  text.style.fontSize = `${fontSize}px`;
});