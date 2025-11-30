/*const array = ["zelena", "zluta", "hneda", "cerna"]
let color = "yellow"

console.log(array[0])
array[0] = "ne"
console.log(array[0])
const cysla = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]
cysla[3] = 8
console.log(cysla[5])
const brambora = {
    color: "yellow",
    size: 6,
    age: 7
}

const SecondBrambora = {
    color: "yellow",
    size: 6,
    age: 7
}

console.log(brambora.color)
console.log(brambora.size)
console.log(SecondBrambora.age)
console.log(cysla[cysla.length - 2])

const brambory = [brambora, SecondBrambora]
console.log(brambory[0].size)*/
const baleni = document.getElementById("baleni")
window.onload = async () => {
    const file = await fetch("/res/data/brambory.json")
    const data = await file.json()
    console.log(file)
    console.log(data[0].color)
    data.forEach((value, index) => {
        console.log("Brambora číslo: " + index)
        console.log(value.age)
        baleni.innerHTML += `<p>${Object.entries(value)}</p>`
    })
}