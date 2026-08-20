const messageBtn = document.getElementById("formBtn");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const message = document.getElementById("messageform");

function buttonDisabled(){
  if(inputName.value.trim() === "" 
    || inputEmail.value.trim() === ""
    || message.value.trim() === ""){
    messageBtn.disabled ="true";
  }
}