export default class Login {
    init() {
        try {
            let btnSignin = document.querySelector("#signin");
            this.eventosLogin();
        }catch(e) {
            return;
        }
    }
    eventosLogin() {
        const body = document.querySelector('body');
        body.className = "sign-in-js";
        let btnSignin = document.querySelector("#signin");
        let btnSignup = document.querySelector("#signup");

        btnSignin.addEventListener("click", function () {
           body.className = "sign-in-js"; 
        });

        btnSignup.addEventListener("click", function () {
            body.className = "sign-up-js";
        }); 
    }     
}