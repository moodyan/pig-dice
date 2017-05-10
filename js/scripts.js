//Business Logic

// function newGame(names, player1, player2, turnScore, totalScore) {
//   this.names = names;
//   this.players = [player1, player2];
//   this.turnScore = 0;
//   this.totalScore = 0;
// }
// newGame.prototype.addScore = function(newRoll) {
//   return this.score += newRoll
// }
//
// function PigDice() {
// }
//
// PigDice.prototype.roll = function() {
//   return Math.floor((Math.random() * 6) + 1);
// };


//User Interface
$(document).ready(function() {
  // debugger;
  $("#names").submit(function(event) {
    event.preventDefault();
    var player1 = $('input#player1name').val();
    var player2 = $('input#player2name').val();
    $(".player1input").text(player1);
    $(".player2input").text(player2);

    $("#names").hide();
    $("#game").show();
  });
  // $("#play-one").submit(function(event) {
  //   event.preventDefault();
  //   var player;
  //   $("result-one h3").text(player.score);
  // });
});
