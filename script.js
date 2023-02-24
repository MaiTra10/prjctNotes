let dropdownBlock = document.getElementById("dropdownBlock");
let loginBlock = document.getElementById("loginBlock");
let bgDarken = document.getElementById("bgDarken");
let formLI = document.getElementById("formLI");
let formSU = document.getElementById("formSU");
let formFP = document.getElementById("formFP");
let logo = document.getElementById("logo");

window.onload = function() {

    if(localStorage.getItem("saved") != null) {

        console.log("Successfully Updated Notes!");
        const content_to_update = document.getElementById("content");
        content_to_update.innerHTML = localStorage.getItem("saved");

    }

}

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
let themesImg = document.getElementById("themesImg");
let logInImg = document.getElementById("logInImg");

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
    css_var.style.setProperty('--workspace_bg', '#2c2c2c');
    css_var.style.setProperty('--text_colour', '#000000');
    css_var.style.setProperty('--text_placeholder_colour', 'rgba(0, 0, 0, 0.5)');
    css_var.style.setProperty('--scrollbar_track', '#393939');
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

    css_var.style.setProperty('--bg', '#FFFFFF');
    css_var.style.setProperty('--txtbox_bg', '#ffcfcf');
    css_var.style.setProperty('--txtbox_border', '#c29e9e');
    css_var.style.setProperty('--main', '#FF7878');
    css_var.style.setProperty('--main_two', '#FF9999');
    css_var.style.setProperty('--main_three', '#FFADAD');
    css_var.style.setProperty('--accent', '#FF7878');
    css_var.style.setProperty('--accent_two', '#FF9999');
    css_var.style.setProperty('--accent_three', '#FFADAD');
    css_var.style.setProperty('--workspace_bg', '#C2C2C2');
    css_var.style.setProperty('--text_colour', '#FFFFFF');
    css_var.style.setProperty('--text_placeholder_colour', 'rgba(255, 255, 255, 0.5)');
    css_var.style.setProperty('--scrollbar_track', '#D6D6D6');
    css_var.style.setProperty('--scrollbar_thumb', '#818181');
    css_var.style.setProperty('--scrollbar_thumb_active', '#4D4D4D');
    css_var.style.setProperty('--theme_dropdown_bg', '#818181');
    css_var.style.setProperty('--msc', '#A2A2A2');

    logo.style.backgroundImage = "url('images/prjctNotesTheme1.png')";
    themesImg.style.backgroundImage = "url('images/ThemesWatermelonPink.png')";
    logInImg.style.backgroundImage = "url('images/LogInWatermelonPink.png')";

    themesImg.addEventListener("mouseover", function () {

        themesImg.style.backgroundImage = "url('images/ThemesTeal.png')";

    }, false);

    themesImg.addEventListener("mouseout", function () {

        themesImg.style.backgroundImage = "url('images/ThemesWatermelonPink.png')";

    }, false);

    logInImg.addEventListener("mouseover", function () {

        logInImg.style.backgroundImage = "url('images/LogInTeal.png')";

    }, false);

    logInImg.addEventListener("mouseout", function () {

        logInImg.style.backgroundImage = "url('images/LogInWatermelonPink.png')";

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
    css_var.style.setProperty('--workspace_bg', '#1F2741');
    css_var.style.setProperty('--text_colour', '#000000');
    css_var.style.setProperty('--text_placeholder_colour', 'rgba(0, 0, 0, 0.5)');
    css_var.style.setProperty('--scrollbar_track', '#2D354D');
    css_var.style.setProperty('--scrollbar_thumb', 'white');
    css_var.style.setProperty('--scrollbar_thumb_active', 'rgba(255, 255, 255, 0.5)');
    css_var.style.setProperty('--theme_dropdown_bg', 'white');
    css_var.style.setProperty('--msc', '#6E7387');

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

    const content = document.getElementById("content");

    let html = `<div class="note">
                    <div class="note_title" contenteditable="True" placeholder="Title" spellcheck="False"></div>
                    <div class="note_close"><i class="fa-sharp fa-solid fa-xmark" onclick="removeNote(this)"></i></div>
                    <div class="note_content" contenteditable="True" placeholder="Take notes here..." spellcheck="False"></div>
                </div>`;

    content.insertAdjacentHTML('afterbegin', html);

}

function addNote() {

    addHtml();

}

function removeNote(e) {

    e.parentElement.parentElement.remove();
    
}
//Setup Click Events
document.getElementById("themesImg").addEventListener("click", openDropdownBlock);
document.getElementById("closeDropdownBlock").addEventListener("click", closeDropdownBlock);
document.getElementById("themeDef").addEventListener("click", themeDef);
document.getElementById("themeOne").addEventListener("click", themeOne);
document.getElementById("themeTwo").addEventListener("click", themeTwo);
document.getElementById("logInImg").addEventListener("click", openLoginBlock);
document.getElementById("closeBtn").addEventListener("click", closeLoginBlock);
document.getElementById("forgPwdA").addEventListener("click", openFrgPwdBlock);
document.getElementById("signUpA").addEventListener("click", openSignUpBlock);
document.getElementById("backToLogInSU").addEventListener("click", closeSignUpBlock);
document.getElementById("backToLogInFP").addEventListener("click", closeFrgPwdBlock);
document.getElementById("addNote").addEventListener("click", addNote);

const elements = document.querySelectorAll('.format');

elements.forEach(element => {

    element.addEventListener('click', () => {

        let command = element.dataset['element'];

        document.execCommand(command, false, null);

    });

});

window.onbeforeunload = function() {

    const finalContent = document.getElementById("content");

    localStorage.setItem("saved", finalContent.innerHTML);

}