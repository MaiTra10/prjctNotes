let emailValid = false;
let passValid = false;

function invalidate() {

    emailValid = false;
    passValid = false;

}

function checkEmailValid(input) {

    let text = input.value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailRegex.test(text)) {

        input.classList.add("input-border-red");
        input.classList.remove("input-border-green");
        emailValid = false;


    } else {

        input.classList.add("input-border-green");
        input.classList.remove("input-border-red");
        emailValid = true;

    }

}

function checkPassValid(input) {

    let text = input.value;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;

    if(!passRegex.test(text) || text.length < 8) {

        input.classList.add("input-border-red");
        input.classList.remove("input-border-green");
        passValid = false;

    } else {

        input.classList.add("input-border-green");
        input.classList.remove("input-border-red");
        passValid = true;

    }

}

function revertBorder(input) {

    input.classList.remove("input-border-green");
    input.classList.remove("input-border-red");


}

let successMsg = document.getElementById("success");
let failMsg = document.getElementById("fail");

function closeFailMsg() {

    failMsg.classList.remove("message-transition");

}

function closeSuccessMsg() {

    successMsg.classList.remove("message-transition");

}

function resetMsg() {

    closeFailMsg();
    closeSuccessMsg();

}

function displayFailMsg(msg) {

    resetMsg();
    failMsg.getElementsByTagName("p")[0].innerHTML = msg;
    failMsg.classList.add("message-transition");

    setTimeout(function() {

        closeFailMsg();

    }, 4000);

}

function displaySuccessMsg(msg) {

    resetMsg();
    successMsg.getElementsByTagName("p")[0].innerHTML = msg;
    successMsg.classList.add("message-transition");

    setTimeout(function() {

        closeSuccessMsg();

    }, 4000);

}

async function sign_in_btn(e) {

    if(emailValid == false) {

        console.log("Not A Valid E-mail!");
        displayFailMsg("Not A Valid E-mail!");

    } else {

        const form = e.parentElement.elements;
        const email = form.email.value;
        const pwd = form.pwd.value;
        const data = {
            email: email,
            password: pwd
        };

        fetch("https://byas567cpkhcuoutzhi5y7pvnm0hcsaj.lambda-url.us-west-2.on.aws/", {
            
            method : "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body : JSON.stringify(data)

        }).then(
            response => response.json()
        ).then(
            function(html) {

                if(html["Status Code"] == 401){

                    console.log("E-mail or Password is Incorrect!");
                    displayFailMsg("E-mail or Password is Incorrect!");

                } else if(html["Status Code"] == 200) {

                    console.log(`Successfully Logged In as ${email}!`);
                    displaySuccessMsg(`Successfully Logged In as ${email}!`);
                
                    closeLoginBlock();

                } else {

                    console.log("Something Went Wrong! Try Again.");
                    displayFailMsg("Something Went Wrong! Try Again.");

                }
            }
        );
    }
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
        };

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
                
                    closeSignUpBlock();
    
                }
            }
        );
    }
}

async function forgot_pass_btn(e) {

    const form = e.parentElement.parentElement.elements;
    const email = form.email.value;


}