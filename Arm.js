//////////////////////////////////////////////////////////
//                      Arm Code                        //
//                     by Anna Kraemer                  //
//                   September 23, 2016                 //
//////////////////////////////////////////////////////////

"use strict"; //This causes it to be executed in "strict" mode which prevents some unsafe syntax

function Arm() {
	
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
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Arm", {size:70, leading:50});
  this.addActor(this.title);
  
  /////////////////////////////// BUTTONS /////////////////////////////////
  
  // Create custom buttons to add to scene using "Textbutton" constructor
  // function TextButton(x pos, y pos, width, height, bgColor, text, textattrs, action, shape, nudge) {
  
  
  //This button moves to home
  this.moveToHome = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									"pink", // color of button
									"Home", // text on button
									attrs, // text attributes
									this.moveToHomeAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.moveToHome); // Adds button "actor" to the scene
  
  //This button disables the stepper because I kept getting annoyed with the whiny noise
   this.disableStepper = new TextButton(
                                windowWidth*0.2 - 100,
									windowHeight*0.5 - 50,
									200, 
									100, 
									BLUE, 
									"Disable Stepper", 
									attrs, 
									this.disableStepperAction.bind(this), 
									'rect'); 
  this.addActor(this.disableStepper); 
  
  //This button raises the arm
  this.raiseArm = new TextButton(
                  windowWidth*0.5 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									"pink",
									"Raise Arm",
									attrs,
									this.raiseArmAction.bind(this),
									'rect'); 
  this.addActor(this.raiseArm);
  
  //This button lowers the arm
  this.lowerArm = new TextButton(
                  windowWidth*0.5 - 100,
									windowHeight*0.3 - 50,
									200,
									100,
									BLUE,
									"Lower Arm",
									attrs,
									this.lowerArmAction.bind(this),
									'rect'); 
  this.addActor(this.lowerArm);
  
  //This button turns on the electromagnet
  this.turnOnElectromagnet = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									BLUE,
									"Turn On Magnet",
									attrs,
									this.turnOnEAction.bind(this),
									'rect');
  this.addActor(this.turnOnElectromagnet);
  
  //This button turns off the electromagnet
  this.turnOffElectromagnet = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.3 - 50,
									200,
									100,
									"pink",
									"Turn Off Magnet",
									attrs,
									this.turnOffEAction.bind(this),
									'rect'); 
  this.addActor(this.turnOffElectromagnet);
  
  //This button moves to high tower
  this.moveToHighTower = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.7 - 50, // y position
									200, // width of button
									100, // height of button
									"pink", // color of button
									"High Tower", // text on button
									attrs, // text attributes
									this.moveToHighTowerAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.moveToHighTower); // Adds button "actor" to the scene
  
  //This button moves to low tower
  this.moveToLowerTower = new TextButton(
                                    windowWidth*0.5 - 100, // x position
									windowHeight*0.7 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Low Tower", // text on button
									attrs, // text attributes
									this.moveToLowerTowerAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.moveToLowerTower); // Adds button "actor" to the scene
  
   //This button moves to a dial scene
  this.changePosition = new TextButton(
                                    windowWidth*0.8 - 100, // x position
									windowHeight*0.7 - 50, // y position
									200, // width of button
									100, // height of button
									"pink", // color of button
									"Change Position", // text on button
									attrs, // text attributes
									this.changePositionAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.changePosition); // Adds button "actor" to the scene
  
  }
  
  _inherits(Arm, Scene); // NECESSARY, DO NOT FORGET - PUT AT END OF CONSTRUCTOR
  
  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////


// Home
Arm.prototype.moveToHomeAction = function() {
  console.log ("Home")
  ROBOTARM.master.events.moveToHome();
}

// Disable stepper
Arm.prototype.disableStepperAction = function() {
  console.log ("stepper disabled")
  ROBOTARM.master.events.disableStepper();
}

// Raises arm
Arm.prototype.raiseArmAction = function() {
  console.log ("arm raised")
  ROBOTARM.master.events.raiseArm();
}

// Lowers arm
Arm.prototype.lowerArmAction = function() {
  console.log ("arm lowered")
  ROBOTARM.master.events.lowerArm();
}

// Turns on Electromagnet
Arm.prototype.turnOnEAction = function() {
  console.log ("electromagnet on")
  ROBOTARM.master.events.turnOnElectromagnet(); 
}

// Turns off Electromagnet
Arm.prototype.turnOffEAction = function() {
  console.log ("electromagnet off")
  ROBOTARM.master.events.turnOffElectromagnet();
}

// Disables stepper
Arm.prototype.stepperAction = function() {
  console.log ("stepper off")
  ROBOTARM.master.events.disableStepper();
}

// Goes to high tower
Arm.prototype.moveToHighTowerAction = function() {
  console.log ("high tower")
  ROBOTARM.master.events.moveToHighTower();
}

// Goes to low tower
Arm.prototype.moveToLowerTowerAction = function() {
  console.log ("low tower")
  ROBOTARM.master.events.moveToLowerTower();
}

// Goes to dial scene
Arm.prototype.changePositionAction = function() {
  console.log ("went to dial scene")
  stage.transitionTo("DialScene")
}