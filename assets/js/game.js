// function called "fight"

var playerName= window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log('test');

var fight = function(enemyName) {
    window.alert("Your opponent is " + enemyName);
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
    while(enemyHealth>0 && playerHealth>0){
        if(promptFight==="skip" || promptFight==="SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            if(confirmSkip){
                playerMoney=playerMoney-10;
                window.alert(playerName + " has chosen to skip the fight!");
                console.log(playerMoney);
                break;
            }
            else{
                fight(enemyName);
            }
        }
        
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName +" now has " + enemyHealth + " health remaining.");
        if (enemyHealth<=0){
            window.alert(enemyName + " has died!")
            playerMoney=playerMoney+20;
            break;
        }
        else{
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
        
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked "+ playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth<=0){
            window.alert(playerName + " has died!")
            break;
        }
        else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        
        // else{
        //     window.alert("You need to choose a valid option. Try again!")
        //     fight(enemyName);
        // }
    }
}
    



for(var i=0; i<enemyNames.length; i++){
    if(playerHealth>0){
        window.alert("Welcome to Robot Gladiators Round " + (i+1) + "!");
        var pickedEnemyName =enemyNames[i];
        enemyHealth=50;
        fight(pickedEnemyName);
    }
    // debugger;
    else{
        window.alert("You have lost your robot in battle! Game over!");
        break;
    }
}



