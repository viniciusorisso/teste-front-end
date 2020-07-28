var emailId = document.getElementById('email');
var passId = document.getElementById('password');

var btn = document.getElementById('btnStatus');

function validatedEmail(thisValue, id){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(thisValue)){
        var thisId = document.getElementById(id);
        thisId.classList.add(id+'Error');
        btn.disabled = true;
    }
    btn.disabled = false;
}

function validatedPassword(thisValue, id){
    if(thisValue === null){
        thisId.classList.add(id+'Error');
        btn.disabled = true;
    }
    btn.disabled = false;
}

function postLogin (){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log({"email": email, "password" : password});
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: {
            "email": email,
            "password": password
        }
    })
    .then(response => console.log(response.json()))
    .catch(err =>console.error('err ', err));
}