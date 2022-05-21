// function called "fight"
var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max-min+1)) + min;
    return value;
}


var fight = function(enemyName) {
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
        if(promptFight==="skip" || promptFight==="SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to skip?");
            if(confirmSkip){
                playerInfo.money=Math.max(0,playerInfo.money-10);
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                return;
            }
            else{
                fight(enemyName);
            }
        } else if (promptFight != "FIGHT" && promptFight != "fight"){
            window.alert("Invalid input. You must enter either 'FIGHT' or 'SKIP' to choose.");
            fight(enemyName);
        }
    while(enemyName.health>0 && playerInfo.health>0){
        var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
        enemyName.health = Math.max(0,enemyName.health - damage);
        console.log(playerInfo.name + " attacked " + enemyName.name + ". " + enemyName.name +" now has " + enemyName.health + " health remaining.");
        if (enemyName.health<=0){
            window.alert(enemyName.name + " has died!")
            playerInfo.money=playerInfo.money+20;
            break;
        }
        else{
            window.alert(enemyName.name + " still has " + enemyName.health + " health left.");
        }
        
        var damage = randomNumber(enemyName.attack-3, enemyName.attack);
        playerInfo.health = Math.max(0,playerInfo.health - damage);
        console.log(enemyName.name + " attacked "+ playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        if (playerInfo.health<=0){
            window.alert(playerInfo.name + " has died!")
            break;
        }
        else{
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
    }
}
    
var endGame = function(){
    var winMessage ="Oh no, you lost! ";
    if(playerInfo.health>0){
        var winMessage ="Yay, you won! ";
    }
    var playAgain=window.confirm(winMessage + "Your health is " + playerInfo.health + " and your money is " + playerInfo.money + ". Do you want to play again?");
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
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
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

var getPlayerName = function(){
    var name = "";
    // I want to say, !=name here instead of:
    // also what exactly is null, that entering a blank string and the null case both have to be voided out
    // but you don't really need to worry about both because theyre sort of the same?
    // if I enter null into the field, it accepts it as the string "null"
    while(name==="" || name===null){
        name=window.prompt("What is your robot's name?");
    }
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack:10,
    money:10,
    resetStats: function(){
        this.health= 100;
        this.attack=10;
        this.money=10;
    },
    refillHealth: function(){
        if(this.money<7){
            window.alert("You only have " + this.money + " dollars. You need at least 7 dollars to refill.");
            shop();
        }
        else{
            this.health+=20;
            this.money-=7;
            window.alert("Refilling player's health by 20 for 7 dollars.");
        } 
    },
    upgradeAttack: function(){
        if(this.money<7){
            window.alert("You only have " + this.money + " dollars. You need at least 7 dollars to upgrade.");
            shop();
        }
        else{
            this.attack+=6;
            this.money-=7;
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
        }
    }
};
var enemyInfo=[
    {
        name:"Roborto",
        attack:randomNumber(10,14)
    },
    {
        name:"Amy Android",
        attack:randomNumber(10,14)
    },
    {
        name:"Robo Trumble",
        attack:randomNumber(10,14)
    }
]


// main game logic function, for loop that chooses a new enemy
var startGame = function(){
    // reset player stats
    playerInfo.resetStats();
    for(var i=0; i<enemyInfo.length; i++){
        if(playerInfo.health>0){
            if(i>0){
                var storeConfirm = window.confirm("Round " + i + " is over! Do you want to visit the store before the next round?");
                if(storeConfirm){
                    shop();
                }
            }
            window.alert("Welcome to Robot Gladiators Round " + (i+1) + "!");
            var pickedEnemyObj =enemyInfo[i];
            pickedEnemyObj.health=randomNumber(40,60);
            console.log(pickedEnemyObj);
            window.alert("Your opponent is " + pickedEnemyObj.name);
            fight(pickedEnemyObj);
        }
    }
    endGame();
}

// start game when page loads
startGame();



