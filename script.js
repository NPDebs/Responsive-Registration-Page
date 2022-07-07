const form = document.getElementById("form")
const lastName = document.getElementById("firstName");
const firstName = document.getElementById("lastName");
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()
});

function checkInputs() {
    //get the values from the input
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === ''){
        setErrorFor(firstName, 'Name cannot be blank');
    }
    else {
        setSuccessFor(firstName);
    }
    if(lastNameValue === ''){
        setErrorFor(lastName, 'Name cannot be blank');
    }
    else {
        setSuccessFor(lastName);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    }
    else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    }
    else if(passwordValue.length < 6){
        setErrorFor(password, 'Password must be at least 6 characters')
    }
    else {
        setSuccessFor(password);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innerText = message;
    
    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true
    }
    else {
        return false
    }
    }