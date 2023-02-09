let div = document.querySelector("#timer")
var counter = 45
var interval = setInterval(tickFunction, 1000)

function tickFunction() {
    div.innerHTML = "<h2>" + counter + "</h2>"
    counter--
    if (div.innerHTML == "<h2>0</h2>") {
        location.href = 'msg.html';
        clearInterval(interval)
    }
}
