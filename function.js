
let gamePlayed = false;

document.addEventListener("DOMContentLoaded", function() {
    var name1 = prompt("Enter first player name:");
    if (name1 != "") {
            document.getElementsByClassName("player")[0].innerHTML = name1 + " :";
        }
    let [computer_score, user_score] = [0, 0];

    let choice_object = {
        'rock': {
            'rock': 'draw',
            'scissors': 'win',
            'paper': 'lose'
        },
        'scissors': {
            'rock': 'lose',
            'scissors': 'draw',
            'paper': 'win'
        },
        'paper': {
            'rock': 'win',
            'scissors': 'lose',
            'paper': 'draw'
        }
    }

    document.getElementById("rockButton").addEventListener("click", function() {
        playGame('rock');
    });

    document.getElementById("paperButton").addEventListener("click", function() {
        playGame('paper');
    });

    document.getElementById("scissorsButton").addEventListener("click", function() {
        playGame('scissors');
    });
    document.getElementById("restartButton").addEventListener("click", function(){
        restartGame();
    });



    function playGame(userChoice) {
        const choices = ['rock', 'scissors', 'paper'];
        var num = Math.floor(Math.random() * 3);

        let computer_choice = choices[num];
        let user_choice = userChoice.toLowerCase();
        let result = document.getElementById("result");

        document.getElementById("userChoice").innerHTML = `You choose: <span>${userChoice.toUpperCase()}</span>`;
        document.getElementById("compChoice").innerHTML = `Computer choose: <span>${computer_choice.toUpperCase()}</span>`;

        switch (choice_object[user_choice][computer_choice]) {
            case 'win':
                result.style.cssText = "background-color: #cefdce; color: #689f38";
                result.innerHTML = "YOU WIN";
                user_score++;
                break;

            case 'lose':
                result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
                result.innerHTML = "YOU LOSE";
                computer_score++;
                break;

            default:
                result.style.cssText = "background-color: #e5e5e5; color: #808080";
                result.innerHTML = "DRAW";
                break;

        }

       

        // switch (user_choice) {
                    //     case 'rock':

                    //         if(computer_choice === 'scissors')
                    //         {
                    //             result.style.cssText = "background-color: #cefdce; color: #689f38";
                    //             result.innerHTML = 'You Win. 😊';
                    //             user_score++;
                    //         }

                    //         else if(computer_choice === 'paper')
                    //         {
                    //             result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
                    //             result.innerHTML = 'You Lose. 😔';
                    //             computer_score++;
                    //         }
                    //         else {
                    //             result.style.cssText = "background-color: #e5e5e5; color: #808080";
                    //             result.innerHTML = "it's a tie.🟰 !!";
                    //         }

                    //         break;

                    //     case 'paper':


                    //         if(computer_choice === 'rock')
                    //         {
                    //             result.style.cssText = "background-color: #cefdce; color: #689f38";
                    //             result.innerHTML = 'You Win. 😊';
                    //             user_score++;
                    //         }

                    //         else if(computer_choice === 'scissors')
                    //         {
                    //             result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
                    //             result.innerHTML = 'You Lose. 😔';
                    //             computer_score++;
                    //         }

                    //         else {

                    //             result.style.cssText = "background-color: #e5e5e5; color: #808080";
                    //             result.innerHTML = "it's a tie.🟰 !!";
                    //         }

                    //         break;

                    //     case 'scissors':


                    //         if(computer_choice === 'paper')
                    //         {
                    //             result.style.cssText = "background-color: #cefdce; color: #689f38";
                    //             result.innerHTML = 'You Win. 😊';
                    //             user_score++;
                    //         }

                    //         else if(computer_choice === 'rock')
                    //         {
                    //             result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
                    //             result.innerHTML = 'You Lose. 😔';
                    //             computer_score++;
                    //         }

                    //         else {
                    //             result.style.cssText = "background-color: #e5e5e5; color: #808080";
                    //             result.innerHTML = "It's a tie.🟰 !!";
                    //         }

                    //         break;

                    //     default:

                    //         result.style.cssText = "background-color: #e5e5e5; color: #808080";
                    //         result.innerText = `it's a tie. !!`;
                    //         break;
                    // }

        document.getElementById("computerScore").innerHTML = computer_score;
        document.getElementById("userScore").innerHTML = user_score;

        if(!gamePlayed){
            document.querySelector(".again").classList.add("reStart");
            gamePlayed = true;
        }
        
    }

    function restartGame() {
        // Reset game state...
        document.getElementById("userChoice").textContent = "";
        document.getElementById("compChoice").textContent = "";
        document.getElementById("result").textContent = "";
        document.getElementById("computerScore").textContent = "0";
        document.getElementById("userScore").textContent = "0";
        computer_score=0;
        user_score=0;
    
        // Hide restart button
        document.querySelector(".again").classList.remove("reStart");
    
        gamePlayed = false;
    }

    
});