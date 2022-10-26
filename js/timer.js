let final = document.querySelector(".final")
let icon = document.querySelector(".icon")
let text = document.querySelector(".text")
let restart = document.querySelector(".restart")
let progress = document.querySelector(".progress")
const body = document.querySelector("body")
const homeButton = document.querySelector(".home")
const clickSound = document.getElementById("click")
const clap = document.getElementById("clap")

var time
var startGame

function updateScore(){
    if(startGame == true){
        clap.currentTime = 0
        clap.play()
        console.log(score, totalScore)
        if(score >= totalScore){
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

restart.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        location.assign('index.html');
    }, 200);
})

homeButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        location.assign('https://gimme.sg/activations/dementia/');
    }, 200);
})

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
event.preventDefault();
}, { passive: false });