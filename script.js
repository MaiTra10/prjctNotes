let loginBlock = document.getElementById("loginBlock");
let bgBlur = document.getElementById("bgBlur");

function openLoginBlock() {

    loginBlock.classList.add("open-login-block");
    bgBlur.classList.add("open-bg-blur");

}

function closeLoginBlock() {

    loginBlock.classList.remove("open-login-block");
    bgBlur.classList.remove("open-bg-blur");

}