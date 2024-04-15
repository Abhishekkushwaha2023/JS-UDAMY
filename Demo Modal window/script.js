'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModelbtn = document.querySelector('.close-modal');
const showModelbtn = document.querySelectorAll('.show-modal');
console.log(showModelbtn);

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showModelbtn.length; i++) {
  console.log(showModelbtn[i].addEventListener('click', openModal));
}

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModelbtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// event and how they work
// keyup when we lift our hand off any key on the keyboard
// keypress when we keep press any key on the keyboard
// keydown when we press any key on the keyboard

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  //   if (e.key === 'Escape') {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
