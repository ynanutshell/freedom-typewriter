const cont = ["Lean", "Learn", "Pick", "Choose", "Set Your Own Path"]

let part = 0
let part_index = 0
let interval_val
const element = document.querySelector(".cont")
const cursor = document.querySelector(".cursor")

const typeText = () => {
    let text = cont[part].substring(0, part_index + 1)
    element.innerHTML = text
    part_index++

    if(text === cont[part]) {
        cursor.style.display = 'none'

        clearInterval(interval_val)
        setTimeout( () => {
            interval_val = setInterval(deleteText, 50)
        }, 1000)
    }
}

const deleteText = () => {
    let text = cont[part].substring(0, part_index + 1)
    element.innerHTML = text
    part_index--

    if(text === '') {
        clearInterval(interval_val)

        if(part === (cont.length - 1))
            part = 0
        else
            part++

        part_index = 0

        setTimeout( () => {
            cursor.style.display = 'inline-block'
            interval_val = setInterval(typeText, 100)
        }, 200)
    }
}

interval_val = setInterval(typeText, 100)