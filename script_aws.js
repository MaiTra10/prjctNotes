async function sign_in_btn(e) {

    const form = e.parentElement.parentElement.elements;
    const email = form.email.value;
    const pwd = form.pwd.value;


}

async function sign_up_btn(e) {

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

                console.log("Account Already Exists!")
                //Add proper fail and success messages

            } else {

                console.log("Account Created!")
            
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

async function forgot_pass_btn(e) {

    const form = e.parentElement.parentElement.elements;
    const email = form.email.value;


}