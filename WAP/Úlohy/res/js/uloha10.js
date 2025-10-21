const cislo = document.getElementById("cislo")
const submit = document.getElementById("submit")
const div = document.getElementById("tencosemeni")

const zmena = () => {
    if (cislo.value % 2 == 0) {
        div.style.backgroundColor = "red"
    } else {
        div.style.backgroundColor = "green"
    }
}

submit.onclick = () => {
    zmena()
}