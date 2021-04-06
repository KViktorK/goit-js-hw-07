const refs = {
    input: document.querySelector('#font-size-control'),
    iputText: document.querySelector('#text')
}
refs.input.addEventListener('input', oninputs)

const oninputs = function () {
    console.log(this.value)
}