const borderColor = (event) => {
    return event.target.value.length == inputValidation ?
        input.setAttribute('class', 'valid') :
        input.setAttribute('class', 'invalid');
}
input.addEventListener('blur', borderColor);