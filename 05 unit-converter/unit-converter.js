/**
 * 
 * 1 meter = 3.281 feet
 * 1 liter = 0.264 gallon
 * 1 kilogram = 2.204 pound
 */

let convertBtn = document.getElementById("convert");
let inputEl = document.getElementById("input");
let lengthEl = document.querySelector(".length .convert");
let volumeEl = document.querySelector(".volume .convert");
let massEl = document.querySelector(".mass .convert");

convertBtn.addEventListener("click", () => {
    let userInput = inputEl.value;
    let conversionResults = {
        length: {},
        volume: {},
        mass: {}
    }
    if (userInput) {
        try {
            const valueInNum = Number(userInput);
            conversionResults.length.meters = (valueInNum / 3.281).toFixed(3);
            conversionResults.length.feet = (3.281 * valueInNum).toFixed(3);
    
            conversionResults.volume.liters = (valueInNum / 0.264).toFixed(3);
            conversionResults.volume.gallons = (0.264 * valueInNum).toFixed(3);
    
            conversionResults.mass.kilos = (valueInNum / 2.204).toFixed(3);
            conversionResults.mass.pounds = (2.204 * valueInNum).toFixed(3);

            // Display length
            lengthEl.textContent = 
                `${valueInNum} meters = ${conversionResults.length.feet} feet | ${valueInNum} feet = ${conversionResults.length.meters} meters`;
            volumeEl.textContent = 
                `${valueInNum} liters = ${conversionResults.volume.gallons} gallon | ${valueInNum} gallons = ${conversionResults.volume.liters}`;
            massEl.textContent = 
                `${valueInNum} kilos = ${conversionResults.mass.pounds} pounds | ${valueInNum} pounds = ${conversionResults.mass.kilos} kilos`;
        }
        catch(err) {
            alert("Please input a valid number");
        }
    }
    else {
        alert("Please input a number");
    }
})