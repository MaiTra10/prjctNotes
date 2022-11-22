let dropdownBlock = document.getElementById("dropdownBlock");
let loginBlock = document.getElementById("loginBlock");
let bgBlur = document.getElementById("bgBlur");
let formLI = document.getElementById("formLI");
let formSU = document.getElementById("formSU");
let formFP = document.getElementById("formFP");
let logo_def = document.getElementById("logo_def");
let logo_1 = document.getElementById("logo_1");
let logo_2 = document.getElementById("logo_2");

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

function themeDef() {

    css_var.style.setProperty('--bg', '#1F1F1F');
    css_var.style.setProperty('--txtbox_bg', '#777777');
    css_var.style.setProperty('--txtbox_border', '#4E4E4E');
    css_var.style.setProperty('--main', '#FF7F11');
    css_var.style.setProperty('--main_two', '#C76715');
    css_var.style.setProperty('--main_three', '#8F4F18');
    css_var.style.setProperty('--accent', '#A362DC');
    css_var.style.setProperty('--accent_two', '#8252AD');
    css_var.style.setProperty('--accent_three', '#61417E');
    css_var.style.setProperty('--scrollbar_thumb', '#5C5C5C');
    css_var.style.setProperty('--scrollbar_thumb_active', '#696969');
    css_var.style.setProperty('--theme_dropdown_bg', '#000000');
    css_var.style.setProperty('--msc', '#ffffff');

    logo_def.classList.remove("dim-logo-def");
    logo_1.classList.remove("brighten-logo-1");
    logo_2.classList.remove("brighten-logo-2");

}

function themeOne() {

    css_var.style.setProperty('--bg', '#FAFAFA');
    css_var.style.setProperty('--txtbox_bg', '#E2F3EF');
    css_var.style.setProperty('--txtbox_border', '#80DCC3');
    css_var.style.setProperty('--main', '#FF7878');
    css_var.style.setProperty('--main_two', '#C0AA9E');
    css_var.style.setProperty('--main_three', '#B0B7A8');
    css_var.style.setProperty('--accent', '#80DCC3');
    css_var.style.setProperty('--accent_two', '#9FE4D1');
    css_var.style.setProperty('--accent_three', '#BDEBDF');
    css_var.style.setProperty('--scrollbar_thumb', '#9FE4D1');
    css_var.style.setProperty('--scrollbar_thumb_active', '#BDEBDF');
    css_var.style.setProperty('--theme_dropdown_bg', '#CCCCCC');
    css_var.style.setProperty('--msc', '#000000');

    logo_def.classList.add("dim-logo-def");
    logo_1.classList.add("brighten-logo-1");
    logo_2.classList.remove("brighten-logo-2");

}

function themeTwo() {

    css_var.style.setProperty('--bg', '#101834');
    css_var.style.setProperty('--txtbox_bg', '#7AF2F9');
    css_var.style.setProperty('--txtbox_border', '#45818E');
    css_var.style.setProperty('--main', '#7AF2F9');
    css_var.style.setProperty('--main_two', '#62C1CD');
    css_var.style.setProperty('--main_three', '#47899A');
    css_var.style.setProperty('--accent', '#45818E');
    css_var.style.setProperty('--accent_two', '#679DA9');
    css_var.style.setProperty('--accent_three', '#77ACB8');
    css_var.style.setProperty('--scrollbar_thumb', 'white');
    css_var.style.setProperty('--scrollbar_thumb_active', 'white');
    css_var.style.setProperty('--theme_dropdown_bg', 'white');
    css_var.style.setProperty('--msc', 'white');

    logo_def.classList.add("dim-logo-def");
    logo_1.classList.remove("brighten-logo-1");
    logo_2.classList.add("brighten-logo-2");

}