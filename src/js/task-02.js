const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];
const listEl = document.querySelector('#ingredients')
    
for (let ingredient of ingredients) {
        const item = document.createElement('li')
        item.textContent = `${ingredient}`
        listEl.append(item)
    }

