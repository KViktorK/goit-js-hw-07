const btnDecrement = document.querySelector('#counter').firstElementChild;
const btnIncrement = document.querySelector('#counter').lastElementChild;
let value = document.querySelector('#value')
let counterValue = 0;

const decrement = () => {
    counterValue -= 1
    value.innerHTML = counterValue
};
const increment = () => {
    counterValue += 1
    value.innerHTML = counterValue
}
btnDecrement.addEventListener('click', decrement)
btnIncrement.addEventListener('click', increment)

