const input = document.querySelector('.js-intut');
input.addEventListener('input', onInputChange);
function onInputChange(event) {
    console.log(event.currentTarget.value);
    const changeInput = event.currentTarget.value;
}
if (changeInput="") {console.log("Все поля должны быть заполнены!"); }
    else {
        const form = document.querySelector('.js-register-form');
        form.addEventListener('submit', onFormSubmit);
        function onFormSubmit(event) {
            event.preventDefault();
            const formEl = event.current.Target.elements;
            const mail = formEl.email.value;
            const password = formEl.password.value;
            const subscription = formEl.subscription.value;
            const formData = { mail, password, subscription, };
            console.log(mail);
            console.log(password);
            console.log(formData);
        }
    }
  
 
