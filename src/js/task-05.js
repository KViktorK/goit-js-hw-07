const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.name.textContent = event.currentTarget.value;
    if (event.currentTarget.value.length < 1) {
        refs.name.textContent = 'незнакомец';
    };
};

