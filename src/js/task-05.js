const input = document.querySelector(`#name-input`);
const userName = document.querySelector(`#name-output`);
const outname = userName.textContent;
input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
  return event.currentTarget.value !== ``
    ? (userName.textContent = event.currentTarget.value)
    : (userName.textContent = outname);
}

