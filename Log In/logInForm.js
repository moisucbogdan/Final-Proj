const email = document.querySelector('#email');
const errorEmail = document.getElementById('emailError');
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
form.addEventListener('input', (e) => {
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

const errorPassword = document.getElementById('passwordError');
const error = document.querySelector('#password');
const pswMust = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
form.addEventListener('input', (e) => {
    let messages = [];
    if (pswMust.test(error.value) === false) {
        messages.push("Please enter a Valid Password.")
        document.getElementById('passwordError').style.display = 'block';
    };
    if (messages.length > 0) {
        errorPassword.innerHTML = messages.join("")
    } else {
        document.getElementById("passwordError").style.display = "none";
    };
})

const button = document.getElementById('button');
button.addEventListener("click", (e) => {
    if (emailFormat.test(email.value) === false) {
        e.preventDefault()
    } else if (pswMust.test(error.value) === false) {
        e.preventDefault()
    }
});

function validateForm() {
    let validate = document.forms["myForm"]["email"]["password"].value;
    if (validate == "") {
        alert("Name must be filled out");
        return false;
    }
}