const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email: formEmailEL, password: formPasswordEl } = formEl.elements;

    if (formEmailEL.value.trim() === "" || formPasswordEl.value.trim() === "") {
        alert("All form fields must be filled in");
    } else {
        const formData = {
            [formEmailEL.name]: formEmailEL.value,
            [formPasswordEl.name]: formPasswordEl.value,
        };
        console.log(formData);

        formEl.reset();
    }
});
