let homeScore=0
let guestScore=0
let homeScoreEl = document.getElementById("home-Score")
let guestScoreEl = document.getElementById("guest-Score")

function homeBtn1Pressed() {
    homeScore+=1
    homeScoreEl.textContent=homeScore
}
function homeBtn2Pressed() {
    homeScore+=2
    homeScoreEl.textContent=homeScore
}
function homeBtn3Pressed() {
    homeScore+=3
    homeScoreEl.textContent=homeScore
}
function homeBtn4Pressed() {
    homeScore-=1
    homeScoreEl.textContent=homeScore
}
function guestBtn1Pressed() {
    guestScore+=1
    guestScoreEl.textContent=guestScore
}
function guestBtn2Pressed() {
    guestScore+=2
    guestScoreEl.textContent=guestScore
}
function guestBtn3Pressed() {
    guestScore+=3
    guestScoreEl.textContent=guestScore
}
function guestBtn4Pressed() {
    guestScore-=1
    guestScoreEl.textContent=guestScore
}
