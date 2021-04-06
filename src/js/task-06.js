const refs = {
    input: document.querySelector('#validation-input'),

}
refs.input.addEventListener('blur', onInputBlur)


function onInputBlur(event) {
    const inputTextLength = event.currentTarget.value.length;
    const dataLength = Number(event.currentTarget.getAttribute('data-length'))
    
    if (inputTextLength === dataLength) {
        refs.input.classList.add('valid')
        refs.input.classList.replace('invalid','valid')
    } 
    else {
        refs.input.classList.add('invalid')
        refs.input.classList.replace('valid','invalid')
    }
}