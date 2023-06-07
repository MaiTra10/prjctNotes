let successMsg = document.getElementById("success");
let failMsg = document.getElementById("fail");

function displayFailMsg(msg) {

    failMsg.getElementsByTagName("p")[0].innerHTML = msg;
    failMsg.classList.add("message-transition");

    setTimeout(function() {

        failMsg.classList.remove("message-transition");

    }, 4000);

}

function displaySuccessMsg(msg) {

    successMsg.getElementsByTagName("p")[0].innerHTML = msg;
    successMsg.classList.add("message-transition");

    setTimeout(function() {

        successMsg.classList.remove("message-transition");

    }, 4000);

}

async function sign_in_btn(e) {

    const form = e.parentElement.parentElement.elements;
    const email = form.email.value;
    const pwd = form.pwd.value;


}

async function sign_up_btn(e) {

    if(emailValid == false || passValid == false) {

        console.log("E-mail or Password Format is Invalid!");

        displayFailMsg("E-mail or Password Format is Invalid!");

    } else {

        const form = e.parentElement.elements;
        const email = form.email.value;
        const pwd = form.pwd.value;
        const data = {
            email: email,
            password: pwd
        }
        fetch("https://l5pcnftq5xix72zfg6ssutgsom0akjyy.lambda-url.us-west-2.on.aws/", {
    
            method : "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body : JSON.stringify(data)
    
        }).then(
            response => response.json()
        ).then(
            function(html) {
    
                if(html["Status Code"] == 409){
    
                    console.log("Account Already Exists!");
                    displayFailMsg("Account Already Exists!");
    
                } else {
    
                    console.log("Account Created!");
                    displaySuccessMsg("Account Created!");
                
                    formLI.classList.remove("slide-right");
                    formSU.classList.remove("slide-right");
                
                    formLI.classList.remove("slide-left");
                    formFP.classList.remove("slide-left");
                
                    loginBlock.classList.remove("s-u-resize");
                    loginBlock.classList.remove("f-p-resize");
    
                    formSU.reset();
    
                }
    
            }
        );

    }

}

async function forgot_pass_btn(e) {

    const form = e.parentElement.parentElement.elements;
    const email = form.email.value;


}