document.addEventListener("DOMContentLoaded", function (event) {
    
    let forms = document.querySelector('.validation');
    forms.addEventListener('submit', function(event) {
        event.preventDefault ();
        fetch ("logination.php", {
            method: "POST",
            body: new FormData (forms),
        })
        .then(response => {return response.text()})
        .then(data => console.dir(data))
    })
        
   // let registration = document.querySelector(".registration");
    // registration.addEventListener("click", createRegistrPage);
    
   /* let forgetPasswordReference = document.getElementById("recoveryPass");
    forgetPasswordReference.addEventListener("click" , function(event){
        event.preventDefault();
        document.location.href="resetPass.html";
    },false);*/
});