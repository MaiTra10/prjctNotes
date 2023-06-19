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

                if(html["Status Code"] == 401) {

                    console.log("E-mail or Password is Incorrect!");
                    displayFailMsg("E-mail or Password is Incorrect!");

                } else if(html["Status Code"] == 200) {

                    localStorage.setItem("isLoggedIn", true);
                    localStorage.setItem("loggedInAs", email);
                    loggedInAs.getElementsByTagName("p")[0].innerHTML = `Logged in as ${email}`;

                    console.log(`Successfully Logged In as ${email}!`);
                    displaySuccessMsg(`Successfully Logged In as ${email}!`);

                    const theme = localStorage.getItem("theme");

                    if(theme === "themeDef") {

                        logInImg.style.backgroundImage = "url('images/LogOutOrange.png')";

                        logInImg.addEventListener("mouseover", function () {

                            logInImg.style.backgroundImage = "url('images/LogOutPurple.png')";
                    
                        }, false);
                    
                        logInImg.addEventListener("mouseout", function () {
                    
                            logInImg.style.backgroundImage = "url('images/LogOutOrange.png')";
                    
                        }, false);

                    } else if(theme === "themeOne") {

                        logInImg.style.backgroundImage = "url('images/LogOutWatermelonPink.png')";

                        logInImg.addEventListener("mouseover", function () {

                            logInImg.style.backgroundImage = "url('images/LogOutTeal.png')";
                    
                        }, false);
                    
                        logInImg.addEventListener("mouseout", function () {
                    
                            logInImg.style.backgroundImage = "url('images/LogOutWatermelonPink.png')";
                    
                        }, false);

                    } else {

                        logInImg.style.backgroundImage = "url('images/LogOutElectricBlue.png')";

                        logInImg.addEventListener("mouseover", function () {

                            logInImg.style.backgroundImage = "url('images/LogOutDarkCyan.png')";
                    
                        }, false);
                    
                        logInImg.addEventListener("mouseout", function () {
                    
                            logInImg.style.backgroundImage = "url('images/LogOutElectricBlue.png')";
                    
                        }, false);

                    }

                    const content = document.getElementById("content");
                    localStorage.setItem("saved", content.innerHTML);

                    fetch(`https://sdzg2qevbaq7y5dhm42ovbhdii0crwnk.lambda-url.us-west-2.on.aws/?ctx=theme&email=${localStorage.getItem("loggedInAs")}`, {
    
                        method : "GET",
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    }).then(
                        response => response.json()
                    ).then(
                        function(html) {

                            const theme = html["theme"]

                            if(theme == 'themeDef' || theme == null) {

                                themeDef();
                            
                            } else if (theme == 'themeOne') {
                            
                                themeOne();
                                
                            } else {
                            
                                themeTwo();
                            
                            }

                        }
                    );

                    fetch(`https://sdzg2qevbaq7y5dhm42ovbhdii0crwnk.lambda-url.us-west-2.on.aws/?ctx=note&email=${localStorage.getItem("loggedInAs")}`, {
    
                        method : "GET",
                        headers: {
                            "Content-type": "application/json; charset=UTF-8",
                        }
                    }).then(
                        response => response.json()
                    ).then(
                        function(html) {
            
                            document.getElementById("content").innerHTML = html["saved"]
                            console.log("Successfully loaded notes!");
                            displaySuccessMsg("Notes have been loaded from the cloud!");
            
                        }
                    );
                
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
    
                if(html["Status Code"] == 409) {
    
                    console.log("Account Already Exists!");
                    displayFailMsg("Account Already Exists!");
    
                } else if(html["Status Code"] == 200) {
    
                    console.log("Account Created!");
                    displaySuccessMsg("Account Created!");
                
                    closeSignUpBlock();
    
                } else {

                    console.log("Something Went Wrong! Try Again Later.");
                    displayFailMsg("Something Went Wrong! Try Again Later.");

                }
            }
        );
    }
}

async function forgot_pass_btn(e) {

    if(emailValid == false) {

        console.log("E-mail Format is Invalid!");
        displayFailMsg("E-mail Format is Invalid!");

    } else {

        const form = e.parentElement.elements;
        const email = form.email.value;
        const data = {
            email: email
        };

        fetch("https://i26cwybd5pv544hw3swn2g74za0hcsag.lambda-url.us-west-2.on.aws/", {
    
            method : "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body : JSON.stringify(data)
    
        }).then(
            response => response.json()
        ).then(
            function(html) {
    
                if(html["Status Code"] == 404) {
    
                    console.log("Account With That E-mail Does Not Exist!");
                    displayFailMsg("Account With That E-mail Does Not Exist!");
    
                } else if(html["Status Code"] == 200) {
    
                    console.log(`An E-mail Has Been Sent to ${email} about your password!`);
                    displaySuccessMsg(`An E-mail Has Been Sent to ${email} about your password! <b>Make sure to check your spam folder</b>.`);
                
                    closeFrgPwdBlock();
    
                } else {

                    console.log("Something Went Wrong! Try Again Later.");
                    displayFailMsg("Something Went Wrong! Try Again Later.");

                }
            }
        );
    }
}

/** Sample Python code in case I need it
 *     body_html = """<html>
    <head></head>
    <body>
    <h1>Hey Hi...</h1>
    <p>This email was sent with
        <a href='https://aws.amazon.com/ses/'>Amazon SES CQPOCS</a> using the
        <a href='https://aws.amazon.com/sdk-for-python/'>
        AWS SDK for Python (Boto)</a>.</p>
    </body>
    </html>"""
    
    body_text = ("Body Text Test")
    
    subject = "Test"
    
    sender = "prjctnotes@gmail.com"
    
    try:
        
        resp = ses.send_email(
            Destination={
                "ToAddresses": [
                    sender,
                    ],
            },
            Message={
                "Body": {
                    "Html": {
                        "Charset": "UTF-8",
                        "Data": body_html,
                    },
                    "Text": {
                        "Charset": "UTF-8",
                        "Data": body_text,
                    }
                },
                "Subject": {
                    "Charset": "UTF-8",
                    "Data": subject,
                }
            },
            Source=sender
        )
    except ClientError as e:
        print(e)
    else:
        return {"Status Code": 200}
 * 
 */