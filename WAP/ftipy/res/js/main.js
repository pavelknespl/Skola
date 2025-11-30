const wrapper = document.getElementById("vtipovac")

window.onload = async () => {
    const file = await fetch("/res/data/vtipy.json")
    const data = await file.json()

    data.forEach((value, index) => {
        wrapper.innerHTML += `<p>${Object.entries(value)}</p>`
    })
}