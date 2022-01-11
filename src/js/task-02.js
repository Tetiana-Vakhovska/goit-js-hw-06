const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elementUl = document.querySelector("#ingredients");
const ingridientCard = ingredients.map((ingredient) => {
  const ingridientLi = document.createElement('li');
  ingridientLi.textContent = ingredient;
  elementUl.classList.add("item");
  console.log(ingridientLi);
});