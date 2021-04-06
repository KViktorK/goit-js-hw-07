const refs = {
    input: document.querySelector('#font-size-control'),
    iputText: document.querySelector('#text'),
}
refs.input.addEventListener('input', resize);

function resize(){
    const textSize = refs.input.value;
    refs.iputText.style.fontSize = textSize + 'px';
}