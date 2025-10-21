const div = document.getElementById("div")
const barva = document.getElementById("barva")
const velikost = document.getElementById("velikost")
const submit = document.getElementById("submit")

const zmena = () => {
    div.style.backgroundColor = barva.value 
    div.style.width = velikost.value + "px"
    div.style.height = velikost.value + "px"
}

submit.onclick = () => {
    zmena()
}