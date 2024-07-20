const projURL = [
    "03 password-generator/password-generator.html", 
    "02 basketball-scoreboard/basketball-scoreboard.html", 
    "04 unit-converter/unit-converter.html", 
    "01 passenger-counter-app/passenger-counter-app.html", 
    "https://github.com/Reggenius/techup-pre_course/tree/main/04%20chrome-extension",
    "https://github.com/Reggenius/techup-pre_course/tree/main/06%20mobile%20app"
];
let converterImg = document.querySelector("#converter img");

function redirectToProj(arrIndex) {
    window.location.href = projURL[arrIndex];
}

function editImgUrl(el, url) {
    converterImg.setAttribute("src", url);
}

if (window.innerWidth <= 1100) {
    editImgUrl(converterImg, "images/converter1.png");
}

window.addEventListener("resize", () => {
    if (window.innerWidth <= 1100) {
        editImgUrl(converterImg, "images/converter1.png");
    }
    else {
        editImgUrl(converterImg, "images/converter.png");
    }
});