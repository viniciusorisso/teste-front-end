var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var emailId = document.getElementById('email');
var passId = document.getElementById('password');



function validated(){
    if(email.value.length < 10){
        emailId.classList.add('emailError');
        if(password.value.length < 6){
            passId.classList.add('passwordError');
            return false;
        }
        return false;
    }else if(password.value.length < 6){
        emailId.classList.remove('emailError');
        passId.classList.add('passwordError');
        return false;
    }else{
        
    }
}