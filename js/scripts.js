//Business Logic
turnArray = [];
function Player(name) {
  // debugger;
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  // this.activePlayer = false;
}

Player.prototype.rollDie = function(){
// debugger;
  var roll = Math.floor((Math.random() * 6) + 1);

  if (roll !== 1){
    turnArray.push(roll);
  } else{
    turnArray = 0;
    return roll = "You rolled a 1";
  }
  return roll;
};

Player.prototype.addTurnScore = function(){
 // debugger;
  for (var i = 0, sum = 0; i < turnArray.length; sum += turnArray[i++]); {
    this.turnScore += sum;
    console.log(this.turnScore);
    return sum;
  }
};

Player.prototype.hold = function() {
  this.totalScore += this.turnScore
  this.turnScore = 0;
}

// Player.prototype.newTurn = function() {
//   this.turnScore = 0;
// };
//
// Player.prototype.scoreCheck = function() {
//   if(this.score >= 100){
//     return "Win";
//   };
// };
//
// Player.prototype.newGame = function(){
//   this.turnScore = 0;
//   this.score = 0;
// }


//User Interface
$(document).ready(function() {
  $("#names").submit(function(event) {
    event.preventDefault();

    var player1Input = $('input#player1-name').val();
    var player2Input = $('input#player2-name').val();
    $(".player1-input").text(player1Input);
    $(".player2-input").text(player2Input);

    $("#names").hide();
    $("#game").show();

  });

  $("#play-one").click(function() {
        // debugger;
    var player1 = new Player(0, 0);
    var player2 = new Player(0, 0);

    var player1Dice = player1.rollDie();
    var player1TurnScore = player1.addTurnScore();
    $("#player1-roll").text(player1Dice);
    $("#player1-score").text(player1TurnScore);
    // $("#player-1-total-score").text(player1.score);
  });
  $("#hold-one").click(function() {
      
  });
});
