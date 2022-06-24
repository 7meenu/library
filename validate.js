let email = document.getElementById("email");
let error = document.getElementById("error");

let password = document.getElementById("password");
let error1 = document.getElementById("error1");
let phone=document.getElementById("phone");
let error2=document.getElementById("error2");

function validate() {
    //let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=\\S+$).{8,}/;
    let regex = /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let regexphone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var isValidPhone=false;
    var isValidEmail = false;
    var isValidPassword = false;
    if (regexp.test(email.value)) {
        error.innerHTML = "valid Email";
        error.style.color = "blue";
        isValidEmail = true;
        //return true;
    }
    else {
        error.innerHTML = "invalid Email";
        error.style.color = "red";
        isValidEmail = false;
        //return false;
    }
    if (regex.test(password.value)) {
        error1.innerHTML = "valid Password";
        error1.style.color = "blue";
        isValidPassword = true;
        //return true;

    }
    else {

        error1.innerText = "The password must have a character both uppercase and lowercase,number and special symbols";
        error1.style.color = "red";
        isValidPassword = false;
        //return false;
    }
    if (regexphone.test(phone.value)) {
        error2.innerHTML = "valid phone number";
        error2.style.color = "blue";
        isValidPhone = true;
        //return true;
    }
    else {
        error2.innerHTML = "invalid phone number";
        error2.style.color = "red";
        isValidPhone = false;
        //return false;
    }
    if (isValidEmail && isValidPassword && isValidPhone)
        return true;
    else
        return false;

}