let dropdownBlock = document.getElementById("dropdownBlock");
let loginBlock = document.getElementById("loginBlock");
let bgDarken = document.getElementById("bgDarken");
let formLI = document.getElementById("formLI");
let formSU = document.getElementById("formSU");
let formFP = document.getElementById("formFP");
let logo = document.getElementById("logo");

function openDropdownBlock() {

    dropdownBlock.classList.add("open-dropdown-block");

}

function closeDropdownBlock() {

    dropdownBlock.classList.remove("open-dropdown-block");

}

function openLoginBlock() {

    loginBlock.classList.add("open-login-block");
    bgDarken.classList.add("open-bg-darken");
    dropdownBlock.classList.remove("open-dropdown-block");

}

function closeLoginBlock() {

    loginBlock.classList.remove("open-login-block");
    bgDarken.classList.remove("open-bg-darken");

    formLI.classList.remove("slide-right");
    formSU.classList.remove("slide-right");

    formLI.classList.remove("slide-left");
    formFP.classList.remove("slide-left");

    loginBlock.classList.remove("s-u-resize");
    loginBlock.classList.remove("f-p-resize");
    

}

function openSignUpBlock() {

    formLI.classList.add("slide-right");
    formSU.classList.add("slide-right");

    loginBlock.classList.add("s-u-resize");

}

function closeSignUpBlock() {

    formLI.classList.remove("slide-right");
    formSU.classList.remove("slide-right");

    loginBlock.classList.remove("s-u-resize");

}

function openFrgPwdBlock() {

    formLI.classList.add("slide-left");
    formFP.classList.add("slide-left");

    loginBlock.classList.add("f-p-resize");

}

function closeFrgPwdBlock() {

    formLI.classList.remove("slide-left");
    formFP.classList.remove("slide-left");

    loginBlock.classList.remove("f-p-resize");

}

var css_var = document.querySelector(':root');
let themesImg = document.getElementById("themes_img");
let logInImg = document.getElementById("log_in_img");

if(localStorage.getItem('theme') == 'themeDef' || localStorage.getItem('theme') == null) {

    themeDef();

} else if (localStorage.getItem('theme') == 'themeOne') {

    themeOne();
    
} else {

    themeTwo();

}

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
    css_var.style.setProperty('--scrollbar_thumb', '#525252');
    css_var.style.setProperty('--scrollbar_thumb_active', '#696969');
    css_var.style.setProperty('--theme_dropdown_bg', '#000000');
    css_var.style.setProperty('--msc', '#ffffff');

    logo.style.backgroundImage = "url('images/prjctNotes.png')";
    themesImg.style.backgroundImage = "url('images/ThemesOrange.png')";
    logInImg.style.backgroundImage = "url('images/LogInOrange.png')";

    themesImg.addEventListener("mouseover", function () {

        themesImg.style.backgroundImage = "url('images/ThemesPurple.png')";

    }, false);

    themesImg.addEventListener("mouseout", function () {

        themesImg.style.backgroundImage = "url('images/ThemesOrange.png')";

    }, false);

    logInImg.addEventListener("mouseover", function () {

        logInImg.style.backgroundImage = "url('images/LogInPurple.png')";

    }, false);

    logInImg.addEventListener("mouseout", function () {

        logInImg.style.backgroundImage = "url('images/LogInOrange.png')";

    }, false);

    localStorage.setItem('theme', 'themeDef');

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

    logo.style.backgroundImage = "url('images/prjctNotesTheme1.png')";
    themesImg.style.backgroundImage = "url('images/ThemesTeal.png')";
    logInImg.style.backgroundImage = "url('images/LogInTeal.png')";

    themesImg.addEventListener("mouseover", function () {

        themesImg.style.backgroundImage = "url('images/ThemesWatermelonPink.png')";

    }, false);

    themesImg.addEventListener("mouseout", function () {

        themesImg.style.backgroundImage = "url('images/ThemesTeal.png')";

    }, false);

    logInImg.addEventListener("mouseover", function () {

        logInImg.style.backgroundImage = "url('images/LogInWatermelonPink.png')";

    }, false);

    logInImg.addEventListener("mouseout", function () {

        logInImg.style.backgroundImage = "url('images/LogInTeal.png')";

    }, false);

    localStorage.setItem('theme', 'themeOne');

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
    css_var.style.setProperty('--msc', '#101834');

    logo.style.backgroundImage = "url('images/prjctNotesTheme2.png')";
    themesImg.style.backgroundImage = "url('images/ThemesElectricBlue.png')";
    logInImg.style.backgroundImage = "url('images/LogInElectricBlue.png')";

    themesImg.addEventListener("mouseover", function () {

        themesImg.style.backgroundImage = "url('images/ThemesDarkCyan.png')";

    }, false);

    themesImg.addEventListener("mouseout", function () {

        themesImg.style.backgroundImage = "url('images/ThemesElectricBlue.png')";

    }, false);

    logInImg.addEventListener("mouseover", function () {

        logInImg.style.backgroundImage = "url('images/LogInDarkCyan.png')";

    }, false);

    logInImg.addEventListener("mouseout", function () {

        logInImg.style.backgroundImage = "url('images/LogInElectricBlue.png')";

    }, false);

    localStorage.setItem('theme', 'themeTwo');

}

function addHtml() {

    const note = document.getElementById("note");

    let html = `<div class="note">
                    <div class="note_title" contenteditable="True" placeholder="Title" spellcheck="False"></div>
                    <div class="note_close"><i class="fa-sharp fa-solid fa-xmark"></i></div>
                    <div class="note_content" contenteditable="True" placeholder="Take notes here..." spellcheck="False"></div>
                </div>`;

    note.insertAdjacentHTML('afterend', html);

}

function addNote() {

    addHtml();

}