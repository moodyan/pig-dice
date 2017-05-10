//Business Logic

// function Player(name) {
//   this.name = name;
//   this.turnScore = 0;
//   this.totalScore = 0;
//   this.isTurn = false;
//   this.dice = new Dice;
// }
//
// Player.prototype.newGame = function () {
//   this.roll = 0;
//   this.tempscore = 0;
//   this.totalscore = 0;
// }


function randomNumber() {
  return Math.floor((Math.random() * 6) + 1);
};

var sumElements = function(someArray) {
    if (someArray == null) return false;
    var sum = 0;
    for (var i = 0, len = someArray.length; i < len; i++) {
        sum += someArray[i];
    }
    return sum;
}

// function player1TotalScore() {
//   var = '#player1roll' +
// }

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

  $("#play-one").click(function() {
    var numberRolled = randomNumber();
    $("#player1roll").text(numberRolled);

    var turnScoreArray = [];
    turnScoreArray.push(numberRolled);
    sumElements(turnScoreArray);

    $("#player1score").text(turnScoreArray);

  });

});
