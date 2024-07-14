let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function addHome(num) {
    homeScore+=num;
    homeScoreEl.textContent = homeScore;
}
function addGuest(num) {
    guestScore+=num;
    guestScoreEl.textContent = guestScore;
}