const vyska = document.getElementById("vyska");
const vaha = document.getElementById("vaha");
const submit = document.getElementById("submit");
const vysledek = document.getElementById("vysledek");
let bmi = 0;

const vypocet = () => {
    bmi = vaha.value / (vyska.value * vyska.value)
    vysledek.innerHTML = "Tvoje bmi je " + bmi
}

submit.onclick = () => {
    vypocet()
}