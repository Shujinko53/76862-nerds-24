var modal=document.querySelector(".modal-write-us"),
modalOpener=document.querySelector(".write-us-link"),modalCloser=modal.querySelector(".cross"),modalForm=modal.querySelector(".write-us-form")
,nameField=modal.querySelector(".write-name"),emailField=modal.querySelector(".write-email"),letterField=modal.querySelector(".write-comnt"),
submitButton=modal.querySelector('[type="submit"]'),closeHandler=function(e){e.preventDefault(),modal.classList.remove("modal-show"),
modal.classList.remove("modal-error"),modalForm.classList.remove("modal-invalid")},isStorageSupport=!0,storedName="";
try{storedName=localStorage.getItem("name")}catch(e){isStorageSupport=!1}if(isStorageSupport)var storedEmail=localStorage.getItem("email");
modalForm.setAttribute("novalidate",!0),modalOpener.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("modal-show"),
nameField.focus(),storedName&&(nameField.value=storedName,emailField.focus()),storedEmail&&(emailField.value=storedEmail,nameField.value&&letterField.focus())}),
modalCloser.addEventListener("click",closeHandler),modalForm.addEventListener("submit",function(e){e.preventDefault(),modalForm.classList.add("modal-invalid"),modalForm.removeAttribute("novalidate")
,nameField.validity.valid&&emailField.validity.valid&&letterField.validity.valid?(isStorageSupport&&(localStorage.setItem("name",nameField.value),localStorage.setItem("email",emailField.value)),
modalForm.submit()):(modal.classList.remove("modal-error"),modal.width=modal.offsetWidth,modal.classList.add("modal-error"),setTimeout(function(){submitButton.click(),modalForm.setAttribute("novalidate",!0)},0))}),
window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("modal-show")&&closeHandler(e)});
