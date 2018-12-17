document.addEventListener("DOMContentLoaded", function (event) {
    
    let forms = document.getElementsByClassName('validation');
        
    let registration = document.getElementById("registration");
    registration.addEventListener("click", createRegistrPage);
    
    let forgetPasswordReference = document.getElementById("recoveryPass");
    forgetPasswordReference.addEventListener("click" , function(event){
        event.preventDefault();
        document.location.href="resetPass.html";
    },false);
});