//////////////////////////////////////////////////////////
//                      Dial Scene                      //
//                     by Anna Kraemer                  //
//                   September 23, 2016                 //
//////////////////////////////////////////////////////////

"use strict"; //This causes it to be executed in "strict" mode which prevents some unsafe syntax

function DialScene() {
	
  /////////////////////////////// BASIC SETUP ///////////////////////////////
	
  Scene.call(this); //Necessary for all custom scenes calls the default Scene constructor
  
  attrs = {size:25, leading:25}; //Redefining the size of text for smaller text fields
  
  //Setting maximum variables
  this.maxDistance = 200;
  
  //Creating the colorful "Mondrian" border and adding it to the scene
  this.bgBorder = new BackgroundBorder();
  this.addActor(this.bgBorder);
  
  //Creating and adding the HomeButton and giving it the homeAction defined in sketch.js
  this.homeButton = new HomeButton(homeAction);
  this.addActor(this.homeButton);
  
  //Creating and adding the title text
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Dial Scene", {size:70, leading:50});
  this.addActor(this.title);
  
  /////////////////////////////// BUTTONS /////////////////////////////////
  
  // Create custom buttons to add to scene using "Textbutton" constructor
  // function TextButton(x pos, y pos, width, height, bgColor, text, textattrs, action, shape, nudge) {
  
  //function Speedometer(x, y, width, height, onChange, deadZoneSize, scaler, minAngle, maxAngle)
  var wheelSize = 500;
  this.speed = new Speedometer(windowWidth*0.5 - wheelSize/2,
					windowHeight/2 - wheelSize/2, 
					wheelSize, 
					wheelSize, 
					this.speedAction.bind(this),
					0, 1, 135, 45);
  //this.speedLabel = new Label(windowWidth*0.25, windowHeight/2 + 150, "Desired Speed:\n0 RPS", attrs);
  this.addActor(this.speed);
  //this.addActor(this.speedLabel);
  
  }
  
  _inherits(DialScene, Scene); // NECESSARY, DO NOT FORGET - PUT AT END OF CONSTRUCTOR
  
  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////

DialScene.prototype.speedAction = function(dialValue) {
  var positionValue = dialValue;
  console.log ("value = " + positionValue);
  manager.change(ROBOTARM.master.value.stepperPosition ,positionValue);
}
