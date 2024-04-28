const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handlesubmit);
function handlesubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        alert(`All form fields must be filled in`);
    }
    const info = {
        Email: email,
        Password: password
    }
    console.log(info);
    form.reset();
}

