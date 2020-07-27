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
        fetch("https://reqres.in/api/login", {
            "method": "POST",
            "headers": {
                "cookie": "__cfduid=da5a722a4508c0d0c8f89a54c7461782d1595890178",
                "content-type": "application/json"
            },
            "body": {
                "email": email,
                "password": password
            }
            })
            .then(response => {
            console.log(response);
            })
            .catch(err => {
            console.error(err);
        });
    }
}