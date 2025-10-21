const prvni = document.getElementById("prvni")
const druhy = document.getElementById("druhy")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const nasobeni = document.getElementById("nasobit")
const deleni = document.getElementById("delit")
const vysledek = document.getElementById("vysledek")
let rovnase = 0

const scitaniop = () => {
    rovnase = parseFloat(prvni.value) + parseFloat(druhy.value)
}

const odcitaniop = () => {
    rovnase = parseFloat(prvni.value) - parseFloat(druhy.value)
}

const nasobeniop = () => {
    rovnase = parseFloat(prvni.value) * parseFloat(druhy.value)
}

const deleniop = () => {
    rovnase = parseFloat(prvni.value) / parseFloat(druhy.value) 
}

plus.onclick = () => {
    scitaniop()
    vysledek.innerHTML = "Výsledek je " + rovnase
}

minus.onclick = () => {
    odcitaniop()
    vysledek.innerHTML = "Výsledek je " + rovnase
}

nasobeni.onclick = () => {
    nasobeniop()
    vysledek.innerHTML = "Výsledek je " + rovnase
}

deleni.onclick = () => {
    deleniop()
    vysledek.innerHTML = "Výsledek je " + rovnase
}