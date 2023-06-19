let dropdownBlock = document.getElementById("dropdownBlock");
let loginBlock = document.getElementById("loginBlock");
let bgDarken = document.getElementById("bgDarken");
let formLI = document.getElementById("formLI");
let formSU = document.getElementById("formSU");
let formFP = document.getElementById("formFP");
let logo = document.getElementById("logo");

window.onload = async function() {
    //!localStorage.getItem("isLoggedIn") for when 'isLoggedIn' has not been created yet
    //localStorage.getItem("isLoggedIn") === "false" for when 'isLoggedIn' has been created but user has logged out
    if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

        if(localStorage.getItem("saved") != null) {

            const content_to_update = document.getElementById("content");
            content_to_update.innerHTML = localStorage.getItem("saved");
            console.log("Successfully loaded notes!");
            displaySuccessMsg("Notes have been loaded from local storage!");
    
        }

    } else {

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
    }
}

function openDropdownBlock() {

    dropdownBlock.classList.add("open-dropdown-block");

}

function closeDropdownBlock() {

    dropdownBlock.classList.remove("open-dropdown-block");

}

function openLoginBlock() {

    if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

        loginBlock.classList.add("open-login-block");
        bgDarken.classList.add("open-bg-darken");
        dropdownBlock.classList.remove("open-dropdown-block");

    } else {

        const content = document.getElementById("content");

        const data = {
            email: localStorage.getItem("loggedInAs"),
            notes: content.innerHTML,
            theme: localStorage.getItem("theme")
        };

        fetch("https://rtmun6jkifgcodydw5slaxepju0scagb.lambda-url.us-west-2.on.aws/", {
    
            method : "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body : JSON.stringify(data)
    
        });

        content.innerHTML = localStorage.getItem("saved");
        console.log("Successfully loaded notes!");
        displaySuccessMsg("Notes have been loaded from local storage!");

        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("loggedInAs", null);

        location.reload();

    }
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
    
    formLI.reset();
    formSU.reset();
    formFP.reset();

    invalidate();

}

function openSignUpBlock() {

    formLI.classList.add("slide-right");
    formSU.classList.add("slide-right");

    loginBlock.classList.add("s-u-resize");

    formLI.reset();

    invalidate();

}

function closeSignUpBlock() {

    formLI.classList.remove("slide-right");
    formSU.classList.remove("slide-right");

    loginBlock.classList.remove("s-u-resize");

    formSU.reset();

    invalidate();

}

function openFrgPwdBlock() {

    formLI.classList.add("slide-left");
    formFP.classList.add("slide-left");

    loginBlock.classList.add("f-p-resize");

    formLI.reset();

    invalidate();

}

function closeFrgPwdBlock() {

    formLI.classList.remove("slide-left");
    formFP.classList.remove("slide-left");

    loginBlock.classList.remove("f-p-resize");

    formFP.reset();

    invalidate();

}

let passReq = document.getElementById("passReq");

function showReq() {

    passReq.classList.add("pass-req-show");

}

function hideReq() {

    passReq.classList.remove("pass-req-show");

}

var css_var = document.querySelector(':root');
let themesImg = document.getElementById("themes_img");
let logInImg = document.getElementById("log_in_img");

if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

    if(localStorage.getItem('theme') == 'themeDef' || localStorage.getItem('theme') == null) {

        themeDef();
    
    } else if (localStorage.getItem('theme') == 'themeOne') {
    
        themeOne();
        
    } else {
    
        themeTwo();
    
    }
} else {

    fetch(`https://sdzg2qevbaq7y5dhm42ovbhdii0crwnk.lambda-url.us-west-2.on.aws/?ctx=theme&email=${localStorage.getItem("loggedInAs")}`, {
    
        method : "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    }).then(
        response => response.json()
    ).then(
        function(html) {

            theme = html["theme"]

            if(theme == 'themeDef' || theme == null) {

                themeDef();
            
            } else if (theme == 'themeOne') {
            
                themeOne();
                
            } else {
            
                themeTwo();
            
            }

        }
    );

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

    if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

        logInImg.addEventListener("mouseover", function () {

            logInImg.style.backgroundImage = "url('images/LogInPurple.png')";
    
        }, false);
    
        logInImg.addEventListener("mouseout", function () {
    
            logInImg.style.backgroundImage = "url('images/LogInOrange.png')";
    
        }, false);

    } else {

        logInImg.style.backgroundImage = "url('images/LogOutOrange.png')";

        logInImg.addEventListener("mouseover", function () {

            logInImg.style.backgroundImage = "url('images/LogOutPurple.png')";
    
        }, false);
    
        logInImg.addEventListener("mouseout", function () {
    
            logInImg.style.backgroundImage = "url('images/LogOutOrange.png')";
    
        }, false);

    }

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

    if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

        logInImg.addEventListener("mouseover", function () {

            logInImg.style.backgroundImage = "url('images/LogInTeal.png')";
    
        }, false);
    
        logInImg.addEventListener("mouseout", function () {
    
            logInImg.style.backgroundImage = "url('images/LogInWatermelonPink.png')";
    
        }, false);

    } else {

        logInImg.style.backgroundImage = "url('images/LogOutWatermelonPink.png')";

        logInImg.addEventListener("mouseover", function () {

            logInImg.style.backgroundImage = "url('images/LogOutTeal.png')";
    
        }, false);
    
        logInImg.addEventListener("mouseout", function () {
    
            logInImg.style.backgroundImage = "url('images/LogOutWatermelonPink.png')";
    
        }, false);

    }

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

    if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

        logInImg.addEventListener("mouseover", function () {

            logInImg.style.backgroundImage = "url('images/LogInDarkCyan.png')";
    
        }, false);
    
        logInImg.addEventListener("mouseout", function () {
    
            logInImg.style.backgroundImage = "url('images/LogInElectricBlue.png')";
    
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

const elements = document.querySelectorAll('.format');

elements.forEach(element => {

    element.addEventListener('click', () => {

        let command = element.dataset['element'];

        document.execCommand(command, false, null);

    });

});

window.onbeforeunload = async function() {

    const finalContent = document.getElementById("content");

    if(!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") === "false") {

        localStorage.setItem("saved", finalContent.innerHTML);

    } else {

        const data = {
            email: localStorage.getItem("loggedInAs"),
            notes: finalContent.innerHTML,
            theme: localStorage.getItem("theme")
        };

        fetch("https://rtmun6jkifgcodydw5slaxepju0scagb.lambda-url.us-west-2.on.aws/", {
    
            method : "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body : JSON.stringify(data)
    
        })
    }
}