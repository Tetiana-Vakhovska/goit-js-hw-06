const emEl = mail.length;
const passEl = password.length;
if (emEl === 0) {console.log("Все поля должны быть заполнены!"); }
else if (passEl === 0) {console.log("Все поля должны быть заполнены!"); }
    else {
        const form = document.querySelector(".js-register-form");
        form.addEventListener("submit", onFormSubmit);
        function onFormSubmit(event) {
            event.preventPefaut();
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
  
 
