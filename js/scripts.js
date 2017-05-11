//Business Logic
var turnArray = [];
var totalArray = [];

var player1 = new Player(0, 0);
var player2 = new Player(0, 0);

function Player(name) {
  this.name = name;
  this.totalScore = 0;
  this.turnScore = 0;
  // this.activePlayer = false;
}

Player.prototype.rollDie = function(){
  var roll = Math.floor((Math.random() * 6) + 1);

  if (roll !== 1){
    turnArray.push(roll);
  } else{
    turnArray = 0;
    return roll = "You rolled a 1";
  }
  return roll;
}

Player.prototype.addTurnScore = function(){
  for (var i = 0, sum = 0; i < turnArray.length; sum += turnArray[i++]); {
    this.turnScore = sum;
    return sum;
  }
}


Player.prototype.hold = function() {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  turnArray = [];
  return this.totalScore;
}

// Player.prototype.newTurn = function() {
//   this.turnScore = 0;
// };
//
// Player.prototype.win = function() {
//   if(this.totalScore >= 100){
//     return "YOU WIN!";
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
    var player1Dice = player1.rollDie();
    var player1TurnScore = player1.addTurnScore();

    $("#player1-roll").text(player1Dice);
    $("#player1-score").text(player1TurnScore);
  });

  $("#hold-one").click(function() {
    var player1Score = player1.hold();
    $("#player1-total-score").text(player1Score);

    $("#play-one").fadeOut("slow");
    $("#hold-one").fadeOut("slow");
    $("#play-two").fadeIn("slow");
    $("#hold-two").fadeIn("slow");
  });

  $("#play-two").click(function() {
    var player2Dice = player2.rollDie();
    var player2TurnScore = player2.addTurnScore();

    $("#player2-roll").text(player2Dice);
    $("#player2-score").text(player2TurnScore);
  });

  $("#hold-two").click(function() {
    var player2Score = player2.hold();
    $("#player2-total-score").text(player2Score);

    $("#play-two").fadeOut("slow");
    $("#hold-two").fadeOut("slow");
    $("#play-one").fadeIn("slow");
    $("#hold-one").fadeIn("slow");

  });

});
