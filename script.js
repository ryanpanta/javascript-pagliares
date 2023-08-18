const guessForm = document.querySelector("#guess")
const bttn = document.querySelector(".submit")
const previous = document.querySelector(".previous-guesses")
const winOrWrong = document.querySelector(".win-or-wrong")
const lastGuess = document.querySelector(".last-guess")
const newGame = document.querySelector(".new-game")
let count = 10 

let randomNumber = Math.floor(Math.random() * 100) + 1;

bttn.addEventListener("click", game)


function game() {
    guessForm.disabled = false
    bttn.disabled = false
    if (count === 10)
        previous.innerHTML = "Previous guesses: "
    let guess = Number(guessForm.value)
    //if (guessForm.value.length !== 0) {
        if (count > 1 ) {
            if (guess === randomNumber) {
                winOrWrong.innerHTML = "Congratulations! You got it right!"
                previous.innerHTML += `${guess} `
                winOrWrong.style.background = "green"
                let newGameBttnWin = document.createElement("button")
                newGameBttnWin.textContent = "Start new game"
                newGameBttnWin.classList.add("new-game-button")
                newGameBttnWin.addEventListener("click", function(){
                    count = 10
                    game()
                    newGame.removeChild(newGameBttnWin)
                    previous.innerHTML = ""
                    winOrWrong.innerHTML = ""
                    lastGuess.innerHTML = ""
                    winOrWrong.style.background = "none"
                })
                newGame.appendChild(newGameBttnWin)
                randomNumber = Math.floor(Math.random() * 100) + 1;
                guessForm.disabled = true
                bttn.disabled = true
                
            }
            else if(guess > randomNumber){
                previous.innerHTML += `${guess} `
                winOrWrong.innerHTML = "Wrong!"
                lastGuess.innerHTML = "Last guess was too high!"
                winOrWrong.style.background = "red"
                count--
            } else {
                previous.innerHTML += `${guess} `
                winOrWrong.innerHTML = "Wrong!"
                lastGuess.innerHTML = "Last guess was too low!"
                winOrWrong.style.background = "red"
                count--
            }
            
        }
        else {
            previous.innerHTML += `${guess} `
            winOrWrong.innerHTML = "!!!GAME OVER!!!"
            winOrWrong.style.background = "red"
            let newGameBttn = document.createElement("button")
            newGameBttn.textContent = "Start new game"
            newGameBttn.classList.add("new-game-button")
            newGameBttn.addEventListener("click", function(){
                count = 10
                game()
                newGame.removeChild(newGameBttn)
                previous.innerHTML = ""
                winOrWrong.innerHTML = ""
                lastGuess.innerHTML = ""
                winOrWrong.style.background = "none"
            })
            newGame.appendChild(newGameBttn)
            randomNumber = Math.floor(Math.random() * 100) + 1;
            guessForm.disabled = true
            bttn.disabled = true

        
        }
    guessForm.value = ""
    guessForm.focus()

    //}
    //else {
        //alert("ERROR: Invalid input")
    //}
    
}




