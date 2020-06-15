const form = document.getElementById('form')
const errorUsername = document.getElementById('userNameError');
const username = document.querySelector("#username");
form.addEventListener('input', () => {
    let messages = [];
    if (username.value.length < 4) {
        messages.push("Please enter a username")
        document.getElementById("userNameError").style.display = "block";
    };
    if (messages.length > 0) {
     
        errorUsername.innerHTML = messages.join("")
    } else {
        document.getElementById("userNameError").style.display = "none";
    };
});

const email = document.querySelector('#email');
const errorEmail = document.getElementById('emailError');
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('input', () => {
    let messages = [];
    if (emailFormat.test(email.value) === false) {
        messages.push("Please enter a Valid Email Address")
        document.getElementById("emailError").style.display = "block";
    };
    if (messages.length > 0) {
        errorEmail.innerHTML = messages.join("")
    } else {
        document.getElementById("emailError").style.display = "none";
    };
});


const errorFirstName = document.getElementById('firtNameError');
const firstName = document.querySelector("#firstname");
const lettersFirst = /^[A-Za-z]+((\s)?((\'|\-|\.)?([A-Za-z])+))*$/
form.addEventListener('input', () => {
    let messages = [];
    if (lettersFirst.test(firstName.value) === false) {
        messages.push("Please enter a First Name")
        document.getElementById("firtNameError").style.display = "block";
    };
    if (messages.length > 0) {
        errorFirstName.innerHTML = messages.join("")
    } else {
        document.getElementById("firtNameError").style.display = "none";
    };
});

const errorLastName = document.getElementById('lastNameError');
const lastName = document.querySelector("#lastname");
const letters = /^[A-Z][-'a-zA-Z]+$/;
form.addEventListener('input', () => {
    let messages = [];
    if (letters.test(lastName.value) === false) {
        messages.push("Please enter a Last Name")
        document.getElementById("lastNameError").style.display = "block";
    };
    if (messages.length > 0) {
        errorLastName.innerHTML = messages.join("")
    } else {
        document.getElementById("lastNameError").style.display = "none";
    };
});

const errorPassword1 = document.getElementById('passwordError1');
const error1 = document.querySelector('#psw1');
const pswMust = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
form.addEventListener('input', () => {
    let messages = [];
    if(pswMust.test(error1.value) === false){
        messages.push("Please enter a Valid Password.")
        document.getElementById('passwordError1').style.display = 'block';
    };
    if (messages.length > 0) {
        errorPassword1.innerHTML = messages.join("")
    } else {
        document.getElementById("passwordError1").style.display = "none";
    };
})

const errorPassword2 = document.getElementById('passwordError2');
const error2 = document.querySelector('#psw2');

form.addEventListener('input', () => {
    let messages = [];
    if(error2.value !== error1.value){
        messages.push("Please enter a Valid Password.")
        document.getElementById('passwordError2').style.display = 'block';
    };
    if (messages.length > 0) {
        errorPassword2.innerHTML = messages.join("")
    } else {
        document.getElementById("passwordError2").style.display = "none";
    };
})

const errorPhone = document.getElementById('phoneError');
const phone = document.querySelector("#phone");
form.addEventListener('input', () => {
    let messages = [];
    if (phone.value.length < 10) {
        messages.push("Please enter a Phone Number")
        document.getElementById("phoneError").style.display = "block";
    };
    if (messages.length > 0) {
        errorPhone.innerHTML = messages.join("")
    } else {
        document.getElementById("phoneError").style.display = "none";
    };
});

const button = document.getElementById('button');
button.addEventListener("click", (e) => {
    if(username.value.length < 4){
        e.preventDefault()
    }else if(emailFormat.test(email.value) === false){
        e.preventDefault()
    }else if(lettersFirst.test(firstName.value) === false){
        e.preventDefault()
    }else if(letters.test(lastName.value) === false){
        e.preventDefault()
    }else if(phone.value.length < 10){
        e.preventDefault()
    }else if(pswMust.test(error1.value) === false){
        e.preventDefault()
    }else if(error2.value !== error1.value){
        e.preventDefault()
    }
});
