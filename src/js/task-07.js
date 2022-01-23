
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

const onInputChange = function (ev) {

    spanEl.style.fontSize = `${ev.currentTarget.value}px`;
};

inputEl.addEventListener('input', onInputChange);