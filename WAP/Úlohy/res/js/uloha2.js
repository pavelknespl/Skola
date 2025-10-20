const img = document.getElementById("img");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

const zmena = () => {
    img.src = input.value; 
}

submit.onclick = () => {
    zmena()
}