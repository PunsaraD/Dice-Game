let player = 0;
let score = [0, 0];
let playAgain = false;

function ChangePlayer() {
    if (player == 0)
    {
        
        player = 1;
    }
    else
    {
        player = 0;
    }
}

function roll()
{
    if(playAgain){
        playAgain= false;
        location.reload();
    }
    else{

        var Dice1 = Math.floor(Math.random() * 6) + 1;
        var Dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById("dice_1").setAttribute("src","./Dice_Images/dice_" + Dice1 + ".png");
        document.getElementById("dice_2").setAttribute("src","./Dice_Images/dice_" + Dice2 + ".png");

        document.getElementById("instruction").innerHTML="Player " +(player + 1) + " Turn";

        if(Dice1 === 1 && Dice2 == 1) {
            score[player] = 0;
            ChangePlayer();
        }
        else if(Dice1===Dice2 && Dice1 != 1) 
        {
            if((score[player] + Dice1 + Dice2) <= 100)
            {
                score[player] =score[player] + Dice1 + Dice2;
            }

            if(score[player] === 100){
                document.getElementById("instruction").innerHTML = "Player " +(player + 1) +  " wins";
                document.getElementById("instruction").style.color="red";
                document.getElementById("roll").innerHTML="Play Again";
                playAgain = true;
            }
            
        }
        else
        {
            if((score[player] + Dice1 + Dice2) <= 100)
            {
                score[player] =score[player] + Dice1 + Dice2;
            }
            if(score[player] === 100){
                document.getElementById("instruction").innerHTML="player " +(player + 1) +  " wins";
                document.getElementById("instruction").style.color="red";
                document.getElementById("roll").innerHTML="Play Again";
                playAgain = true;
            }
            ChangePlayer();
        }

        document.getElementById("score1").innerHTML=score[0];
        document.getElementById("score2").innerHTML=score[1];
        
    }

    }