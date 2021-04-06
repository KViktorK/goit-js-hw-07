const refs = {
    input : document.querySelector('#name-input'),
    name : document.querySelector('#name-output'),
}
console.log(refs.name.textContent)
refs.input.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value)
    refs.name.textContent = event.currentTarget.value
}

