let dropdownBlock = document.getElementById("dropdownBlock");
let loginBlock = document.getElementById("loginBlock");
let bgBlur = document.getElementById("bgBlur");
let formLI = document.getElementById("formLI");
let formSU = document.getElementById("formSU");
let formFP = document.getElementById("formFP");

function openDropdownBlock() {

    dropdownBlock.classList.add("open-dropdown-block");

}

function closeDropdownBlock() {

    dropdownBlock.classList.remove("open-dropdown-block");

}

function openLoginBlock() {

    loginBlock.classList.add("open-login-block");
    bgBlur.classList.add("open-bg-blur");
    dropdownBlock.classList.remove("open-dropdown-block");

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

var css_var = document.querySelector(':root');

function currentTheme() {

    css_var.style.setProperty('--bg', '#1F1F1F');
    css_var.style.setProperty('--main', '#FF7F11');
    css_var.style.setProperty('--txtbox_bg', '#777777');

}

function setVar() {

    css_var.style.setProperty('--bg', 'white');
    css_var.style.setProperty('--main', 'green');
    css_var.style.setProperty('--txtbox_bg', 'black');

}