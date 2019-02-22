
var link = document.querySelector(".write-us-link");
var modal = document.querySelector(".modal-write-us");
var close = modal.querySelector(".cross");

link.addEventListener("click", function (ent) {
  ent.preventDefault();
  modal.classList.add("modal-show");
});

close.addEventListener("click", function (ent) {
  ent.preventDefault ();
  modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (ent) {
  if(ent.keyCode === 27) {
    if (modal.classList.contains("modal-show")) {
      ent.preventDefault();
      modal.classList.remove("modal-show");
    }
  }
});
