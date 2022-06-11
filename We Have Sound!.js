





function betterCountdown() {
    var currTime = 10;
    //For loop implemented to achieve countdown with fewer lines of code
    for (var i = 1; i <= 11; i++) {
        //i set to 11 rather than ten so that "BLASTOFF!!!" is printed after 1 instead of at 1
        if (i == 11) {
            setTimeout(function () {
                //Code for timer display readout
                document.getElementById("countdownTimer").innerHTML = "BLASTOFF!!!";
            }, 1000 * i);
        }
        
          //Warning activated by conditional time event
          else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "WARNING! <br> Less than half way to launch: <br> T - = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } 
        //Change in format of timer to display current time
        else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "T MINUS " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}


function playStation(){
   console.log("play space station sounds");
   mySound = new sound("us-lab-background.mp3");
   mySound.play();
}

function playBowie(){
    mysound = new sound()
 }
 function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("contols","none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
       this.sound.play();
    }
    this.stop = function(){
       this.sound.pause();
    }
}
function playCraps() {
    //create die1 variable
    var die1;
    //create die2 variable
    var die2;
    //create sum of die1 and die2 variable
    var sum;
    //make die1 roll between 0-6 and round up for whole numbers
    die1 = Math.ceil(Math.random() * 6);
    //make die2 roll between 0-6 and round up for whole numbers
    die2 = Math.ceil(Math.random() * 6);
    //create sum formula
    sum = die1 + die2;
    //show rolled die1 value
    document.getElementById("die1Res").innerHTML = die1;
    //show rolled die2 value
    document.getElementById("die2Res").innerHTML = die2;
    //show rolled sum of die1 and 2 value
    document.getElementById("sumRes").innerHTML = sum;
    //lose if sum is 7 or 11
    if (sum == 7 || sum == 11) {
        //show that user has lost
        document.getElementById("crapsResults").innerHTML = "Oh, no, You Lose!!!";
    }
    //win if die 1 and 2 are the same and they are even (%2=0 means it divides by 2 and has no remainder=even)
    else if (die1 == die2 && die1 % 2 == 0) {
        //show that user rolled even doubles and won
        document.getElementById("crapsResults").innerHTML = "Yay! DOUBLES, YOU WIN!!!";
    }
    //else means if none of the previous if statements are true
    else {
        //Allow user to play again
        document.getElementById("crapsResults").innerHTML = "Please try again.";

    }
}