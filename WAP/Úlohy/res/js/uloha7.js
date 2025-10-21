const text = document.getElementById("text")
const namein = document.getElementById("namein")
const submit = document.getElementById("submit")

const zmenit = () => {
    text.innerHTML += namein.value + " "
}

submit.onclick = () => {
    zmenit()
}