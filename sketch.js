var canvas, backgroundImage;
var database;
var form, player;
var playerCount = 0;
var game
var gameState = 0
var questions;
var question, contestant, quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("pink");

}
