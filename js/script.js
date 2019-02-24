
var linkWriteUs = document.querySelector('.write-us-link');
var modal = document.querySelector('.modal-write-us');
var modalClose = modal.querySelector('.cross');
var form = modal.querySelector("form");
var name = modal.querySelector('.write-name');
var email = modal.querySelector('.write-pass');
var commt = modal.querySelector('textarea');
var storage = localStorage.getItem('login');
var slideButtonOne = document.querySelector('.slider-controls label:nth-child(1)');
var slideButtonTwo = document.querySelector('.slider-controls label:nth-child(2)');
var slideButtonThree = document.querySelector('.slider-controls label:nth-child(3)');
var slideOne = document.querySelector('.slider-list li:nth-child(1)');
var slideTwo = document.querySelector('.slider-list li:nth-child(2)');
var slideThree = document.querySelector('.slider-list li:nth-child(3)');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem ('login');
} catch (err) {
  isStorageSupport = false;
}

linkWriteUs.addEventListener('click', function (ent) {
  ent.preventDefault();
  modal.classList.add('modal-show');
  name.focus();
    if (storage) {
      login.value = storage;
      email.focus ();
    } else {
      login.focus ();
  }
});


modalClose.addEventListener('click', function (ent) {
  ent.preventDefault ();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

form.addEventListener('submit', function (ent) {
  if (!name.value || !email.value || !commt.value) {
    ent.preventDefault ();
    console.log('Нужно ввести логин и пароль')
    modal.classList.toggle('modal-error');
    } else {
    if (isStorageSupport) {
      localStorage.setItem('login', name.value);
    }
  }
});

slideButtonOne.addEventListener('click', function (ent) {
        ent.preventDefault();
        slideOne.classList.add('slide-show');
        slideTwo.classList.remove('slide-show');
        slideThree.classList.remove('slide-show');
});

slideButtonTwo.addEventListener('click', function (ent) {
        ent.preventDefault ();
        slideTwo.classList.add('slide-show');
        slideOne.classList.remove('slide-show');
        slideThree.classList.remove('slide-show');
});

slideButtonThree.addEventListener('click', function (ent) {
  ent.preventDefault ();
  slideThree.classList.add('slide-show');
  slideOne.classList.remove('slide-show');
  slideTwo.classList.remove('slide-show');
});

window.addEventListener('keydown', function (ent) {
  if(ent.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      ent.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});
