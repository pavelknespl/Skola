/* const sum = (x, y) => {
    return(x + y);
}

const sub = (x, y) => {
    return(x - y);
}
const div = (x, y) => {
    return(x / 4);
}
const mul = (x, y) => {
    return(x * y);
}

console.log(sum(6, 7));
console.log(sub(5, 7));
result = div(8, 4)
console.log(result)
console.log(mul(5, 8)); 

const text = document.getElementById("text");
const fn1 = document.getElementById("fn1");
const fn2 = document.getElementById("fn2");
const fn3 = document.getElementById("fn3");
const fn4 = document.getElementById("fn4");
const fn5 = document.getElementById("fn5");
const fn6 = document.getElementById("fn6");
const input = document.getElementById("userInput");
const hyd = () => {
    text.style.display = "none"
}

const sow = () => {
    text.style.display = "block"
}

fn1.onclick = () => {
    hyd()
}

fn2.onclick = () => {
    sow()
}
fn3.onclick = () => {
    changeColor();
}
const add = () => {
    text.innerHTML += ynput();
}
const ynput = () => {
    return(input.value);
}

const changeColor = () => {
    text.style.color = ynput();
}
fn4.onclick = () => {
    add()
}*/

const obrazek = document.getElementById("image");
const div = document.getElementById("dyv");
const input = document.getElementById("userinput");
const odeslat = document.getElementById("odeslat");
const posun = document.getElementById("posun");

const zmena = () => {
    obrazek.src = input.value;
}

const posunout = () => {
    div.style.marginLeft += input.value + "px";
}

odeslat.onclick = () => {
    zmena()
}

posun.onclick = () => {
    posunout()
}