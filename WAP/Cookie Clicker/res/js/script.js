const kauf = document.getElementById("kauf");
const pocet = document.getElementById("pocet");
const boost = document.getElementById("boost");
const pomoc = document.getElementById("pomoc");
const pomoc2 = document.getElementById("pomoc2");
const pomoc3 = document.getElementById("pomoc3");
const pomoc4 = document.getElementById("pomoc4");
const mel= document.getElementById("mel");
const sasa = document.getElementById("sasa");
const max = document.getElementById("max");
const cina = document.getElementById("cina");
let spina = 0;
let upgrade = 1;
let melanie = 0;
let alex = 0;
let ukr = 0;
let adik = 0;

function ulozit() {
    const stats = {spina,upgrade,melanie,alex,ukr,adik,};
    localStorage.setItem('staty', JSON.stringify(stats));
}

function nacist() {
    const saved = localStorage.getItem('staty');
    if (saved) {
        const stats = JSON.parse(saved);
        spina = stats.spina
        upgrade = stats.upgrade
        melanie = stats.melanie
        alex = stats.alex
        ukr = stats.ukr
        adik = stats.adik
        pocet.innerText = "Špína:" + Math.floor(spina);
        mel.innerText = "Melanie: " + melanie + "x";
        sasa.innerText = "Alex: " + alex + "x";
        max.innerText = "Max: " + ukr + "x";
        cina.innerText = "Adikův dračí nálet: " + adik + "x";

        if (adik > 0) {
            runLoop();
        }
    }
}
nacist();
kauf.onclick = () => {
    spina = spina + 1;
    spina = spina * upgrade;
    pocet.innerText = "Špína:" + Math.floor(spina);
    ulozit();
}
pomoc.onclick = () => {
    if (spina > 49) {
        spina = spina - 50;
        upgrade += 0.02;
        pocet.innerText = "Špína:" + Math.floor(spina);
        melanie++
        mel.innerText = "Melanie: " + melanie + "x"
        ulozit();
        alert("Gratuluji koupil sis Melanii na pomoc!");
    }
}
pomoc2.onclick = () => {
    if (spina > 99) {
        spina = spina - 100;
        upgrade += 0.1;
        pocet.innerText = "Špína:" + Math.floor(spina);
        alex++
        sasa.innerText = "Alex: " + alex + "x"
        ulozit();
        alert("Gratuluji koupil sis Alexe na pomoc!");
    }
}
pomoc3.onclick = () => {
    if (spina > 999) {
        spina = spina - 1000;
        upgrade += 1;
        pocet.innerText = "Špína:" + Math.floor(spina);
        ukr++
        max.innerText = "Max: " + ukr + "x"
        ulozit();
        alert("Gratuluji koupil sis Maxe na pomoc!");
    }
}
pomoc4.onclick = () => {
    if (spina > 999999999) {
        spina -= 999999999;
        pocet.innerText = "Špína:" + Math.floor(spina);
        adik++
        runLoop();
        cina.innerText = "Adikův dračí nálet: " + adik + "x"
        ulozit();
        alert("Gratuluji koupil sis Adika na pomoc!");
    }
}
async function runLoop() {
    while (adik > 0 ) {
        spina += adik*1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000   
        pocet.innerText = "Špína:" + Math.floor(spina);
        await new Promise(resolve => setTimeout(resolve, 1000));
        ulozit();
    }
}