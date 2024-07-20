const projURL = ["03 password-generator/password-generator.html", "02 basketball-scoreboard/basketball-scoreboard.html", "04 unit-converter/unit-converter.html", "01 passenger-counter-app/passenger-counter-app.html"];
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