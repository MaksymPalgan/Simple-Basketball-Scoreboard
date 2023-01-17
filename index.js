
let scoreHome = document.getElementById("scorehome")
let scoreGuest = document.getElementById("scoreguest")
let countHome = 0
let countGuest = 0

function homeclick1() {
    countHome += 1
    scoreHome.textContent = countHome
}

function homeclick2() {
    countHome += 2
    scoreHome.textContent = countHome
}

function homeclick3() {
    countHome += 3
    scoreHome.textContent = countHome
}

function guestclick1() {
    countGuest += 1
    scoreGuest.textContent = countGuest
}

function guestclick2() {
    countGuest += 2
    scoreGuest.textContent = countGuest
}

function guestclick3() {
    countGuest += 3
    scoreGuest.textContent = countGuest
}