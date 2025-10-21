const colorin = document.getElementById("colorin")
const text = document.getElementById("text")
const submit = document.getElementById("submit")

const zmenit = () => {
    text.style.color = colorin.value
}

submit.onclick = () => {
    zmenit()
}