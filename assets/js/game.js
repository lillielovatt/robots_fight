// function called "fight"

var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (min-max+1)) +min;
    return value;
}

var fight = function(enemyName) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        if(promptFight==="skip" || promptFight==="SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            if(confirmSkip){
                playerMoney=Math.max(0,playerMoney-10);
                window.alert(playerName + " has chosen to skip the fight!");
                return;
            }
            else{
                fight(enemyName);
            }
        } else if (promptFight != "FIGHT" && promptFight != "fight"){
            window.alert("Invalid input. You must enter either 'FIGHT' or 'SKIP' to choose.");
            fight(enemyName);
        }
    while(enemyHealth>0 && playerHealth>0){
        var damage = randomNumber(playerAttack-3, playerAttack);
        enemyHealth = Math.max(0,enemyHealth - damage);
        console.log(playerName + " attacked " + enemyName + ". " + enemyName +" now has " + enemyHealth + " health remaining.");
        if (enemyHealth<=0){
            window.alert(enemyName + " has died!")
            playerMoney=playerMoney+20;
            break;
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        var damage = randomNumber(enemyAttack-3, enemyAttack);
        playerHealth = Math.max(0,playerHealth - damage);
        console.log(enemyName + " attacked "+ playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth<=0){
            window.alert(playerName + " has died!")
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}
    
var endGame = function(){
    var winMessage ="Oh no, you lost! ";
    if(playerHealth>0){
        var winMessage ="Yay, you won! ";
    }
    var playAgain=window.confirm(winMessage + "Your health is " + playerHealth + " and your money is " + playerMoney + ". Do you want to play again?");
    if(playAgain){
        startGame();
    }
    else{
        window.alert("Thanks for playing! Come back soon.");
    }
}

var shop = function(){
    var shopOption = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch(shopOption){
        case "REFILL":
        case "refill":
           if(playerMoney<7){
                window.alert("You only have " + playerMoney + " dollars. You need at least 7 dollars to refill.");
                shop();
                break;
            } else{
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth+=20;
                playerMoney-=7;
                break;
            }
        case "UPGRADE":
        case "upgrade":
            if(playerMoney<7){
                window.alert("You only have " + playerMoney + " dollars. You need at least 7 dollars to upgrade.");
                shop();
                break;
            } else{
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
                playerAttack+=6;
                playerMoney-=7;
                break;
            }
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You didn't pick a valid option. Try again.");
            shop();
            break;
    }
}

// main game logic function, for loop that chooses a new enemy
var startGame = function(){
    // reset player stats
    playerHealth=100;
    playerAttack=10;
    playerMoney=10;
    for(var i=0; i<enemyNames.length; i++){
        if(playerHealth>0){
            if(i>0){
                var storeConfirm = window.confirm("Round " + i + " is over! Do you want to visit the store before the next round?");
                if(storeConfirm){
                    shop();
                }
            }
            window.alert("Welcome to Robot Gladiators Round " + (i+1) + "!");
            var pickedEnemyName =enemyNames[i];
            enemyHealth=randomNumber(40,60);
            window.alert("Your opponent is " + pickedEnemyName);
            fight(pickedEnemyName);
        }
    }
    endGame();
}

// start game when page loads
startGame();
