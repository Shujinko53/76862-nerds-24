var linkWriteUs = document.querySelector('.write-us-link');
var modal = document.querySelector('.modal-write-us');
var modalClose = modal.querySelector('.cross');
var modalForm = modal.querySelector('.write-us-form');
var login = modal.querySelector('.write-name');
var email = modal.querySelector('.write-pass');
var commt = modal.querySelector('.write-comnt');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

linkWriteUs.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  login.focus();
    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
  }
});

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
});

modalForm.addEventListener('submit', function (evt) {
  if (!name.value || !email.value || !commt.value) {
    evt.preventDefault();
    modal.classList.toggle('modal-error');
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      evt.preventDefault();
      modal.classList.remove('modal-show');
      modal.classList.remove('modal-error');
    }
  }
});
