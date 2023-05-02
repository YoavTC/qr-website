let startingTime = new Date().getTime()
let shouldRun = true
const speed = 64


function clickedButton() {

    
    let button = document.querySelector("#tap")
    let div = document.querySelector("#timeDiv")

    button.innerHTML = ((new Date().getTime() - startingTime) / speed).toFixed(2)
    let tempNum = ((new Date().getTime() - startingTime) / speed).toFixed(2)
    if (div.innerHTML == "!יפה מאוד") {
        button.innerHTML = "00.00"
        shouldRun = true
        button.style.color = "white"
        startingTime = new Date().getTime()
        div.style.color = "white"
    }
    if (tempNum > 100 && tempNum < 101) {
        button.style.color = "green"
        shouldRun = false
        div.innerHTML = "!יפה מאוד"
    }
    else {
        shouldRun = true
        button.style.color = "red"
        startingTime = new Date().getTime()
        div.style.color = "white"
    } 
    
}

setInterval(tickFunction, 1)

function tickFunction() {

    if (shouldRun == true) {
        let div = document.querySelector("#timeDiv")
        div.innerHTML = ((new Date().getTime() - startingTime) / speed).toFixed(0)
    
        if (((new Date().getTime() - startingTime) / speed).toFixed(2) > 110) {
            restartGame()
        }
    }
    
}

function restartGame() {
    let shouldRun = true
    let div = document.querySelector("#timeDiv")
    startingTime = new Date().getTime()
    div.style.color = "white"
}
