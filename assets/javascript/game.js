var wins = 0;
var losses = 0;
var score = 0;

var pink = 0;
var blue = 0;
var yellow = 0;
var green = 0;
var maxscore = 0;

//Random number generator
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//start of game
$(document).ready(function() {

  maxscore = getRandomInt(19, 120);
  console.log(maxscore);
  $("#matchscore").text(" " + maxscore);

//reset game function
  function resetgame() {
    score = 0;
    $("#score").text(" " + score);
    maxscore = getRandomInt(19, 120);
    console.log(maxscore);
    $("#matchscore").text(" " + maxscore);
    pink = 0;
    blue = 0;
    yellow = 0;
    green = 0;
  } 

//checkwin function
  function checkwin() {
    if (score === maxscore) {
      wins++;
      $("#wins").text(" " + wins);
      resetgame();
    } 
    else if (score > maxscore) {
      losses++;
      $("#losses").text(" " + losses);
      resetgame();
    }
  }

  //Click event for crystal1
  $("#crystal1").on("click", function() {
    if (pink === 0) {
      pink = getRandomInt(1, 12);
      console.log(pink);
    }
    score += pink;
    $("#score").text(" " + score);
    checkwin();
  });
  
  //Click event for crystal2
  $("#crystal2").on("click", function() {
    if (blue === 0) {
      blue = getRandomInt(1, 12);
      console.log(blue);
    }
    score += blue;
    $("#score").text(" " + score);
    checkwin();
  });

  //Click event for crystal3
  $("#crystal3").on("click", function() {
    if (yellow === 0) {
      yellow = getRandomInt(1, 12);
      console.log(yellow);
    }
    score += yellow;
    $("#score").text(" " + score);
    checkwin();
  });
  
  //Click event for crystal4
  $("#crystal4").on("click", function() {
    if (green === 0) {
      green = getRandomInt(1, 12);
      console.log(green);
    }
    score += green;
    $("#score").text(" " + score);
    checkwin();
  });

});