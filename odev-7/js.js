var firstName = document.getElementById("first");
var lastName = document.getElementById("last");
var userName = document.getElementById("userName");
var email = document.querySelectorAll("input[type=email]")[0];
var name = "";
var last ="";
var password = document.querySelectorAll("input[type=password]")[0];
var confirmPassword = document.querySelectorAll("input[type=password]")[1];



// stop refresh page after submit
// var form = document.getElementById("myForm");
// function handleForm(event) { event.preventDefault(); } 
// form.addEventListener('submit', handleForm);

// write @ + firstname + lastname in username input
firstName.addEventListener("input", function(){
    name = firstName.value;
    userName.value = "@" + name + last;
})

lastName.addEventListener("input", function(){
    last = lastName.value;  
    userName.value = "@" + name + last;
})


// required password, first name, last name, email
document.getElementById("myForm").onsubmit = function () {

    var submit = true;

    if (firstName.value == null || firstName.value == "") {
        nameError = "Please enter your name";
        document.getElementById("error_first").innerHTML = nameError;
        submit = false;
    }
    if (lastName.value == null || lastName.value == "") {
        nameError = "Please enter your last name";
        document.getElementById("error_last").innerHTML = nameError;
        submit = false;
    }
    if (email.value == null || email.value == "") {
        nameError = "Please enter your E-mail";
        document.getElementById("error_email").innerHTML = nameError;
        submit = false;
    }
    if (password.value == null || password.value == "") {
        nameError = "Please enter your password";
        document.getElementById("error_password").innerHTML = nameError;
        submit = false;
    } else if (password.value.length<8) {
        nameError = "Your Password should be more 8 charchter";
        document.getElementById("error_password").innerHTML = nameError;
        submit = false;
    }

    if (confirmPassword.value == null || confirmPassword.value == "") {
        nameError = "Please enter your confirm password";
        document.getElementById("error_confirm").innerHTML = nameError;
        submit = false;
    } else if (confirmPassword !== password) {
        nameError = "Palse check your confirm password for ";
        document.getElementById("error_confirm").innerHTML = nameError;
        submit = false;
    }


    return submit


}

function removeWarning() {
    document.getElementById("error_" + this.id).innerHTML = "";
}

firstName.onkeyup = removeWarning;
lastName.onkeyup = removeWarning;
email.onkeyup = removeWarning;
password.onkeyup = removeWarning;
confirmPassword.onkeyup = removeWarning;