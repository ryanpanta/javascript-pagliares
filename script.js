const guessForm = document.querySelector("#guess")
const bttn = document.querySelector(".submit")
const previous = document.querySelector(".previous-guesses")
const MIN = 1
const MAX = 100
let count = 10 


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}

bttn.addEventListener("click", function(){
    let guess = Number(guessForm.value)
    let randomNumber = getRandomArbitrary(MIN, MAX)
    let guessText = document.createElement("p")
    guessText.innerHTML = "Previous guesses:"
    let winOrLose = document.createElement("p")
    if (guessForm.value.length !== 0) {
        if (count > 0 ) {
            if (guess === randomNumber) {
                winOrLose.innerHTML += "You Winnnn very fastttt!!"
                
            }
            else {
                winOrLose.innerHTML += "Wrong!"
                count--
            }
            
        }
        else {
            winOrLose.innerHTML += "!!!GAME OVER!!!"
            
        }
    guessForm.value = ""
    document.body.appendChild(guessText)
    document.body.appendChild(winOrLose)
    }
    else {
        alert("ERROR: Invalid input")
    }
})


