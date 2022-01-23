function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector("#controls input");
const createBtnEl = document.querySelector("#controls button [data-create]");
const destrayBtnEl = document.querySelector("#controls button[data-destray]");
const divBoxs = document.querySelector("#boxes");

createBtnEl.addEventListener("click", (event) => {
  event.preventDefault();

  let basicWidth = 30;
  let bacicHeight = 30;

  for (let i = 0; i < inputEl.value; i += 1) {
    const newEl = document.createElement("div");
    newEl.style.backgroundColor = `${getRandomHexColor()}`;
    newEl.style.width = `${basicWidth += 10}px`;
    newEl.style.height = `${bacicHeight += 10}px`;
    divBoxs.append(newEl);
  }
  inputEl.value = "";
});
destrayBtnEl.addEventListener(`click`, (ev)=>{
divBoxs.innerHTML =``;});