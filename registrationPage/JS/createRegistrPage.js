createHeader(); 

createSubscriptionArea();
createSubscriptionText();
createSubscriptionTwitter();
createSubscriptionYoutube();
createSubscriptionFacebook();

createNavBar();
createLogo();

createBackgroundForm();
createForm();
createSignUpText();

createEmailField();
createPassField();

createRegistrationBtn();
createTermsOfUse();
createTextTermsOfUse();
createLinkToLoginPage();


    function createHeader() {
        let header = document.createElement("div"); 
            header.classList.add("header");
            document.querySelector(".content").append(header);
    }
                
    function createSubscriptionArea() {
        let subscription = document.createElement("div"); 
            subscription.classList.add("subscribe");
            document.querySelector(".header").append(subscription);
    }
                
    function createSubscriptionText() {
        let subscriptionText = document.createElement("text"); 
            subscriptionText.classList.add("subscribeText");
            document.querySelector(".subscribe").append(subscriptionText);
        let text = document.createTextNode("Подпишись!"); 
            subscriptionText.append(text); 
    }
                
    function createSubscriptionTwitter() {
        let subscriptionTwitter = document.createElement("div"); 
            subscriptionTwitter.classList.add("twitter");
            document.querySelector(".subscribe").append(subscriptionTwitter);                
    }
                
    function createSubscriptionYoutube() {
        let subscriptionYoutube = document.createElement("div"); 
            subscriptionYoutube.classList.add("youtube");
            document.querySelector(".subscribe").append(subscriptionYoutube);                
    }
                
    function createSubscriptionFacebook() {
        let subscriptionFacebook=document.createElement("div"); 
            subscriptionFacebook.classList.add("facebook");
            document.querySelector(".subscribe").append(subscriptionFacebook);                
    }
                
    function createNavBar() {
        let navBar = document.createElement("div"); 
            navBar.classList.add("navBar");
            document.querySelector(".content").append(navBar);
    }
                
    function createLogo() {
        let logo = document.createElement("div"); 
            logo.classList.add("logo");
            document.querySelector(".navBar").append(logo);
    }
                
    function createBackgroundForm() {
        let backgroundForm = document.createElement("div"); 
            backgroundForm.classList.add("backgroundForm");
            document.querySelector(".content").append(backgroundForm);
    }
                
    function createForm() {
        let form = document.createElement("div"); 
            form.classList.add("form");
            document.querySelector(".backgroundForm").append(form);
    }
                
    function createSignUpText() {
        let signUpText = document.createElement("text"); 
            signUpText.classList.add("signUpText");
            document.querySelector(".form").append(signUpText);
        let textSignUp = document.createTextNode("Регистрация"); 
            signUpText.append(textSignUp); 
    }
                
    function createEmailField() {
        let emailField = document.createElement("input"); 
            emailField.classList.add("emailField");
            emailField.setAttribute("Placeholder", "e-mail");
            document.querySelector(".form").append(emailField);
                                   
        let underlineEmail = document.createElement("div"); 
            underlineEmail.classList.add("underlineEmail");
            document.querySelector(".form").append(underlineEmail);
    }

    function createPassField() {
        let passField = document.createElement("input");
            passField.classList.add("passField");
            passField.setAttribute("Placeholder", "password");
            document.querySelector(".form").append(passField);
        let underlinePass = document.createElement("div"); 
            underlinePass.classList.add("underlinePass");
            document.querySelector(".form").append(underlinePass);
    }
                
    function createRegistrationBtn() {
        let registrationBtn = document.createElement("button"); 
            registrationBtn.classList.add("registrationBtn");
        let textRegistrationBtn = document.createTextNode("Зарегистрироваться"); 
            registrationBtn.append(textRegistrationBtn); 
            document.querySelector(".form").append(registrationBtn);
    }
                
    function createTermsOfUse() {
        let termsOfUse = document.createElement("div"); 
            termsOfUse.classList.add("termsOfUse");
            document.querySelector(".form").append(termsOfUse);
    }
                
    function createTextTermsOfUse(){
        let textTermsOfUse1 = document.createElement("text");
            textTermsOfUse1.setAttribute("Align", "left");
            document.querySelector(".termsOfUse").append(textTermsOfUse1);
            textTermsOfUse1.innerHTML = "Регистрируясь, вы подтверждаете, что <br> принимаете ";           
                                     
        let textTermsOfUse2 = document.createElement("a");
            textTermsOfUse2.classList.add("textTermsOfUse2");
            textTermsOfUse2.href = "#";
            document.querySelector(".termsOfUse").append(textTermsOfUse2);
            textTermsOfUse2.innerHTML = "Условия пользования";
                    
        let textTermsOfUse3 = document.createElement("text");
            textTermsOfUse3.setAttribute("Align", "left");
            document.querySelector(".termsOfUse").append(textTermsOfUse3);
            textTermsOfUse3.innerHTML = " и<br>";
                    
        let textTermsOfUse4 = document.createElement("a");
            textTermsOfUse4.classList.add("linkTermsOfUse");
            textTermsOfUse4.href = "#";
            document.querySelector(".termsOfUse").append(textTermsOfUse4);
            textTermsOfUse4.innerHTML = "Политику конфиденциальности";             
    }
                
    function createLinkToLoginPage() {
        let toLoginPage = document.createElement("div"); 
            toLoginPage.classList.add("toLoginPage");
            document.querySelector(".form").append(toLoginPage);

            let textToLoginPage = document.createElement("text");
                document.querySelector(".toLoginPage").append(textToLoginPage);
                textToLoginPage.innerHTML = "Уже имеете аккаунт? "; 
                    
            let linkToLoginPage = document.createElement("a");
                linkToLoginPage.classList.add("linkToLoginPage");
                linkToLoginPage.href = "#";
                    document.querySelector(".toLoginPage").append(linkToLoginPage);
                    linkToLoginPage.innerHTML = "Выполните вход";  
    }