const input = document.querySelector('.js-intut');
const nameLabel = document.querySelector('.js-h1>span');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameLabel.textContent = event.currentTarget.value;
};
