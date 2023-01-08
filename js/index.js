window.onload = startTimer()
let startingTime = new Date().getTime()
let shouldRun = true
const speed = 64



function startTimer() {
    
}

function clickedButton() {

    
    let div = document.querySelector("#tap")
    let div2 = document.querySelector("#timeDiv2")

    div.innerHTML = ((new Date().getTime() - startingTime) / speed).toFixed(2)
    let tempNum = ((new Date().getTime() - startingTime) / speed).toFixed(2)
    if (div2.innerHTML == "!יפה מאוד") {
        div.innerHTML = "00.00"
        shouldRun = true
        div.style.color = "white"
        startingTime = new Date().getTime()
        div2.style.color = "white"
    }
    if (tempNum > 100 && tempNum < 101) {
        div.style.color = "green"
        shouldRun = false
        div2.innerHTML = "!יפה מאוד"
    }
    else {
        shouldRun = true
        div.style.color = "red"
        startingTime = new Date().getTime()
        div2.style.color = "white"
    } 
    
}

setInterval(tickFunction, 1)

function tickFunction() {

    if (shouldRun == true) {
        let div2 = document.querySelector("#timeDiv2")
        div2.innerHTML = ((new Date().getTime() - startingTime) / speed).toFixed(2)
    
        if (((new Date().getTime() - startingTime) / speed).toFixed(2) > 125) {
            restartGame()
        }
    }
    
}

function restartGame() {
    let shouldRun = true
    let div2 = document.querySelector("#timeDiv2")
    startingTime = new Date().getTime()
    div2.style.color = "white"
}