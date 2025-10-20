const souradniceX = document.getElementById("x")
const souradniceY = document.getElementById("y")
const ctverec = document.getElementById("ctverec")
const submit = document.getElementById("submit")

const posunout = () => {
    ctverec.style.marginLeft = souradniceX.value + "px";
    ctverec.style.marginTop = souradniceY.value + "px";

}

submit.onclick = () => {
    posunout()
}