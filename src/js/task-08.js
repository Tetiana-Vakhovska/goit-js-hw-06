

const emailEl = document.querySelector(`#email`);
const passwordEl = document.querySelector(`#password`);

function onInputChange(event) {
    const { elements: { email, password }, } = event.currentTarget;
    return event.currentTarget !== ``,
        "Все поля должны быть заполнены!"
}

        const form = document.querySelector(`#login-form`);
        form.addEventListener(`submit`, onFormSubmit);
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
    