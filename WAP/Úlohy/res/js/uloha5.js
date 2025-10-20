const cisloy = document.getElementById("y");
const submit = document.getElementById("submit");
const vysledek = document.getElementById("vysledek");
let x = 0;

const vypocet = () => {
    x = 10 - cisloy.value;
    vysledek.innerHTML = "X se rovná: " + x;
}

submit.onclick = () => {
    vypocet()
}