'use strict'; //This causes it to be executed in "strict" mode which prevents some unsafe syntax

// Set up a new stage
var floor = Math.floor;
var stage = new Stage();

var MASTER = true;

// manager variables
var manager;

// We need to declare each scene
var MenuScene, Machine, Arm, DialScene;
var ConsoleOpeningScene;
var ConsoleInstructionScene;
var attrs;

var logo; // Image to be used as slider knob

// This function would preload any images used by p5
// You can see an example of this in the Console 4 or 10 code
function preload() {
	logo = loadImage("/libs/images/sphere.png");
}

// This is one of the first functions that gets called when you load the interface
// It is the function that should initialize any variables you want to access from any scene
// and it should construct the scenes in the next heirarchy level down (Such as menu scenes and custom control scenes)
function setup() {
  // MASTER = true; // for two player mode, not necessary
  resizeCanvas(windowWidth, windowHeight);
  initMenuVariables();
  attrs = {fill:255, size:100, align:CENTER, style:BOLD, leading:50, strokeWeight:10, strokeColor:0}; //This is our text attributes variable
  
  //Here we create the menu scene. It a simple ButtonScene with one button with the following names and button action
  var menuButtonNames = ["START ARM", "START PPM"];
  var menuButtonActions = [this.startArm.bind(this), this.startppm.bind(this)];
  // Buttonscene is part of a custom library
  // function ButtonsScene(title, subtitle, buttonNames, buttonActions, homeButtonAction, nextButtonAction, buttonType, textAttrs){}
  this.MenuScene = new ButtonsScene("Machines", "by Anna Kraemer", menuButtonNames, menuButtonActions, null, null, null, {size:50, leading:50});
  stage.addScene("MenuScene", this.MenuScene);
  
  ConsoleOpeningScene = new ConsoleOpeningScene(openingAction);
  stage.addScene("ConsoleOpeningScene", ConsoleOpeningScene);
  
  ConsoleInstructionScene = new ConsoleInstructionScene(instructionAction);
  stage.addScene("ConsoleInstructionScene", ConsoleInstructionScene);
  
  //Here we add an additional scene named "Machine"
  Machine = new Machine();
  stage.addScene("Machine", Machine);
  
  //Here we add an additional scene named "Arm"
  Arm = new Arm();
  stage.addScene("Arm", Arm);

  DialScene = new DialScene();
  stage.addScene("DialScene", DialScene);
  
  //Finally we transition to our menu scene once everything has been created
  stage.transitionTo('ConsoleOpeningScene');  
}

//Required draw function. Dont change
function draw() {
  stage.draw();
}

function openingAction(){
	stage.transitionTo('ConsoleInstructionScene');
}

function instructionAction(){
	stage.transitionTo('MenuScene');
}


////////////////////////////////////////////////// BUTTONS ////////////////////////////////////

// This starting scene has one buttons: A start button
function startArm() {
	stage.transitionTo('Arm'); 
	manager.changeState(STATE_ROBOTARM); // change state to ROBOTARM
}

function startppm(){
	stage.transitionTo('Machine');
	manager.changeState(STATE_PERPETUAL); // change state to PERPETUAL
}

// Defines the home button for all other scenes
function homeAction() {
  try { 
    stage.getScene(stage.activeSceneName).resetScene(); 
  } catch(e) {
    console.log("no reset function");
  }
  stage.transitionTo('MenuScene');
}

//All these are needed to handle touch/mouse events properly
window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);
