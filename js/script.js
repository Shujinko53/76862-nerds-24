var modal = document.querySelector('.modal-write-us');
var modalOpener = document.querySelector('.write-us-link');
var modalCloser = modal.querySelector('.cross');
var modalForm = modal.querySelector('.write-us-form');

var nameField = modal.querySelector('.write-name');
var emailField = modal.querySelector('.write-email');
var letterField = modal.querySelector('.write-comnt');
var submitButton = modal.querySelector('[type="submit"]');

// Действия при закрытии модального окна
var closeHandler = function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-show');
  modal.classList.remove('modal-error');
  modalForm.classList.remove('modal-invalid');
};

var isStorageSupport = true;
var storedName = '';

try {
  storedName = localStorage.getItem('name');
} catch (error) {
  isStorageSupport = false;
}
if (isStorageSupport) {
  var storedEmail = localStorage.getItem('email');
}

// Временное отключение валидации для анимации невалидной формы
modalForm.setAttribute('novalidate', true);

modalOpener.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-show');
  nameField.focus();

  // Заполнение данными из хранилища и фокус на первое пустое поле
  if (storedName) {
    nameField.value = storedName;
    emailField.focus();
  }
  if (storedEmail) {
    emailField.value = storedEmail;

    if (nameField.value) {
      letterField.focus();
    }
  }
});

modalCloser.addEventListener('click', closeHandler);

modalForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Добавление класса, при котором невалидные поля подсвечены
  // Это нужно, чтобы до первого сабмита форма не была с красными полями
  modalForm.classList.add('modal-invalid');

  // Включение валидации формы
  modalForm.removeAttribute('novalidate');

  if (!nameField.validity.valid || !emailField.validity.valid || !letterField.validity.valid) {
      // Анимация невалидной формы
      modal.classList.remove('modal-error');
      modal.width = modal.offsetWidth;
      modal.classList.add('modal-error');

      setTimeout(function() {
        // Повторный вызов сабмита при включенной валидации покажет подсказки
        submitButton.click();

        // Временное отключение валидации для анимации невалидной формы
        modalForm.setAttribute('novalidate', true);
      }, 0);
  } else {
    // Запись валидных данных в хранилище
    if (isStorageSupport) {
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('email', emailField.value);
    }

    // Отправка валидной формы
    modalForm.submit();
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains('modal-show')) {
      closeHandler(evt);
    }
  }
});
