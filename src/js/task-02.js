const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const listEl = document.querySelector('#ingredients');

const createIngredientsList = ingredients.map(ingredient => {
  const item = document.createElement('li');
  item.insertAdjacentHTML(
    'afterbegin',
    `${ingredient}`,
  )
  return item
});

listEl.append(...createIngredientsList)

