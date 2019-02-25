
var linkWriteUs = document.querySelector('.write-us-link');
var modal = document.querySelector('.modal-write-us');
var modalClose = modal.querySelector('.cross');
var form = modal.querySelector("form");
var name = modal.querySelector('.write-name');
var email = modal.querySelector('.write-pass');
var commt = modal.querySelector('textarea');
var storage = localStorage.getItem('login');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem ('login');
} catch (err) {
  isStorageSupport = false;
}

linkWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  name.focus();
    if (storage) {
      login.value = storage;
      email.focus ();
    } else {
      login.focus ();
  }
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault ();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!name.value || !email.value || !commt.value) {
    evt.preventDefault ();
    console.log('Нужно ввести логин и пароль')
    modal.classList.toggle('modal-error');
    } else {
    if (isStorageSupport) {
      localStorage.setItem('login', name.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if(evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});
