let loginBlock = document.getElementById("loginBlock");
let bgBlur = document.getElementById("bgBlur");
let formLI = document.getElementById("formLI");
let formSU = document.getElementById("formSU");
let formFP = document.getElementById("formFP");

function openLoginBlock() {

    loginBlock.classList.add("open-login-block");
    bgBlur.classList.add("open-bg-blur");

}

function closeLoginBlock() {

    loginBlock.classList.remove("open-login-block");
    bgBlur.classList.remove("open-bg-blur");

    formLI.classList.remove("slide-l-i-right");
    formSU.classList.remove("slide-s-u-right");

    formLI.classList.remove("slide-l-i-left");
    formFP.classList.remove("slide-f-p-left");

}

function openSignUpBlock() {

    formLI.classList.add("slide-l-i-right");
    formSU.classList.add("slide-s-u-right");

}

function closeSignUpBlock() {

    formLI.classList.remove("slide-l-i-right");
    formSU.classList.remove("slide-s-u-right");

}

function openFrgPwdBlock() {

    formLI.classList.add("slide-l-i-left");
    formFP.classList.add("slide-f-p-left");

}

function closeFrgPwdBlock() {

    formLI.classList.remove("slide-l-i-left");
    formFP.classList.remove("slide-f-p-left");

}