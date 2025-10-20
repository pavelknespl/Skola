const passwordin = document.getElementById("passwordinput");
const emailin = document.getElementById("emailinput");
const emailout = document.getElementById("emailout")
const passwordout = document.getElementById("passwordout")
const submit = document.getElementById("submit")
const formular = document.getElementById("formular")

const odeslat = () => {
    emailout.innerHTML = emailin.value;
    passwordout.innerHTML = passwordin.value;
    formular.style.display = "none"
}

submit.onclick = () => {    
    odeslat()
}