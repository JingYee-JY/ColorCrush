let final = document.querySelector(".final")
let icon = document.querySelector(".icon")
let text = document.querySelector(".text")
let restart = document.querySelector(".restart")
let progress = document.querySelector(".progress")
const body = document.querySelector("body")

var time
var startGame

function updateScore(){
    if(startGame == true){
        if(score <= 0){
            startGame = false
            final.classList.remove("hide")
            icon.innerHTML = `
            <img class="tick" src="./graphics/tick.png">
            <p>Awesome!</p>`
            text.style.backgroundColor = "#2BC7B4"
                text.innerHTML = `
                <p>YOU SAVE</p>
                <p><strong>${score}</strong> kw</p>
                <p>ENERGY</p>`
                time = 60
                timerCount.innerHTML = `${time}s`;
                return
        }
    }
}
setInterval(updateScore, 1)