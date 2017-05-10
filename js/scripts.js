//Business Logic

function Player(score, turnScore) {
  this.score = score;
  this.turnScore = turnScore;
}

Player.prototype.rollDie = function(){
  // var rollScore = 0;
  var diceArray = [];

  var rollScore = Math.floor((Math.random() * 6) + 1);
  if (rollScore !== 1){
    this.turnScore += rollScore;
  }else{
    rollScore = 0;
    this.turnScore = 0;
    return "You rolled a one!";
  }

  diceArray.push(rollScore);
  return diceArray;
};



// Player.prototype.hold = function() {
//   this.score += this.turnScore
//   this.turnScore = 0;
// }
//
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
    var player1Input = $('input#player1name').val();
    var player2Input = $('input#player2name').val();
    $(".player1Input").text(player1Input);
    $(".player2Input").text(player2Input);

    $("#names").hide();
    $("#game").show();

  });

    $("#play-one").click(function() {
      var player1 = new Player(0, 0);
      var player2 = new Player(0, 0);

      var player1Dice = player1.rollDie();
      $("#player1Roll").text(player1Dice);
      $("#player1Score").text(player1.turnScore);
      $("#player-1-total-score").text(player1.score);


  });
});
