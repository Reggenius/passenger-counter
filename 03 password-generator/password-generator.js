const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordGenerationButton = document.getElementById("generate");
let includeSymbolNumber = document.getElementById("checkbox");

let copyInfo = document.getElementById("info");

let passwordButtonOne = document.querySelector(".button-container > .primary-button:nth-of-type(1)");
let passwordButtonTwo = document.querySelector(".button-container > .primary-button:nth-of-type(2)");

function generatePasswords(includeSymbolsAndNumbers) {
    let passwordOne = "";
    let passwordTwo = "";
    let threshold = includeSymbolsAndNumbers ? characters.length : 26;
    
    for (let i = 0; i < 15; i++) {
        let randomIndexOne = Math.floor(Math.random() * threshold);
        let randomIndexTwo = Math.floor(Math.random() * threshold);

        passwordOne += characters[randomIndexOne];
        passwordTwo += characters[randomIndexTwo];
    }

    return [passwordOne, passwordTwo];
}
passwordGenerationButton.addEventListener("click", () => {
    let passwords = includeSymbolNumber.checked ? generatePasswords(true) : generatePasswords();

    passwordButtonOne.textContent = passwords[0];
    passwordButtonTwo.textContent = passwords[1];
    if (navigator.clipboard)
        copyInfo.textContent = "Click to copy!";
});

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(alert("Password copied to clipboard!"))
            .catch(err => console.log(err.message));
    }
    else    return;
}

passwordButtonOne.addEventListener("click", function() {
    copyToClipboard(this.innerText);
});

passwordButtonTwo.addEventListener("click", function() {
    copyToClipboard(this.innerText);
});