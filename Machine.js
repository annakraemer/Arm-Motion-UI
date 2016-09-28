//////////////////////////////////////////////////////////
//                     Machine Code                     //
//                     by Anna Kraemer                  //
//                   September 20, 2016                 //
//////////////////////////////////////////////////////////

"use strict"; //This causes it to be executed in "strict" mode which prevents some unsafe syntax

function Machine() {
	
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
  this.title = new Label(windowWidth/2, windowHeight*0.16, "Motion Machine", {size:70, leading:50});
  this.addActor(this.title);
  
  /////////////////////////////// BUTTONS /////////////////////////////////
  
  // Create custom buttons to add to scene using "Textbutton" constructor
  // function TextButton(x pos, y pos, width, height, bgColor, text, textattrs, action, shape, nudge) {
  
  //This button turns on the stairs
  this.turnOnStairs = new TextButton(
                                    windowWidth*0.2 - 100, // x position
									windowHeight*0.3 - 50, // y position
									200, // width of button
									100, // height of button
									BLUE, // color of button
									"Stairs On", // text on button
									attrs, // text attributes
									this.stairsOnAction.bind(this), // action to call
									'rect'); // shape
  this.addActor(this.turnOnStairs); // Adds button "actor" to the scene

  //This button turns off the stairs
  this.turnOffStairs = new TextButton(
                  windowWidth*0.2 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									"purple",
									"Stairs Off",
									attrs,
									this.stairsOffAction.bind(this),
									'rect'); 
  this.addActor(this.turnOffStairs);
  
  //This button opens the gate 
  this.gateOpen = new TextButton(
                  windowWidth*0.5 - 100,
									windowHeight*0.3 - 50,
									200,
									100,
									BLUE,
									"Gate Up",
									attrs,
									this.gateUpAction.bind(this),
									'rect'); 
  this.addActor(this.gateOpen);

  //This button closes the gate  
  this.gateClose = new TextButton(
                  windowWidth*0.5 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									"purple",
									"Gate Down",
									attrs,
									this.gateDownAction.bind(this),
									'rect');
  this.addActor(this.gateClose);
  
  //This button moves the slider up to the top
  this.slider = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.3 - 50,
									200,
									100,
									BLUE,
									"Slider Up",
									attrs,
									this.sliderUpAction.bind(this),
									'rect'); 
  this.addActor(this.slider);
  
  //This button moves to home
  this.home = new TextButton(
                  windowWidth*0.8 - 100,
									windowHeight*0.5 - 50,
									200,
									100,
									"pink",
									"Home",
									attrs,
									this.homeAction.bind(this),
									'rect'); 
  this.addActor(this.home);
  
   //////////////////////// SLIDER FIXED IMPLEMENTATION ////////////////////////
  
  // Creates custom slider buttons
  // function Slider(x pos, y pos, width, min value of slider, max value of slider, default value where the button starts, action) {
  var fixedSliderSize = windowWidth*0.8; 
  this.fixedPositionSlider =  new Slider(
                           windowWidth*0.15, // x position
                           windowHeight*0.73, // y position
                           fixedSliderSize, // size of slider
                           0, // min value of slider
                           220, // max value of slider
                           0, // default value of slider
                            this.fixedChangePosition.bind(this)); // action to call on slider change
  this.fixedPositionSlider.sliderImage(logo); // "sliderImage" sets the image of the knob of the slider object
  this.addActor(this.fixedPositionSlider); // adds slider to scene
 /* 
  // Label adds text to a scene
  // function Label(x pos, y pos, text, textattrs, width, height) 
  this.fixedSlideLabel = new Label(
                       windowWidth*0.4, // x position
                       windowHeight*0.63, // y position
                       "Position\n\n\n0mm                                         200mm", // text
                       {size: windowWidth*0.03, leading: windowHeight*0.09}); // text attributes
  this.addActor(this.fixedSlideLabel); // adds text to scene
 */
 
  
  }
  
  _inherits(Machine, Scene); // NECESSARY, DO NOT FORGET - PUT AT END OF CONSTRUCTOR
  
  ///////////////////////////////// BUTTON SUB FUNCTIONS //////////////////////////////////


// Turns on stairs
Machine.prototype.stairsOnAction = function() {
  console.log ("stairs on");
  PERPETUAL.master.events.turnOnStairs();
}

// Turns off stairs
Machine.prototype.stairsOffAction = function() {
  console.log ("stairs off");
  PERPETUAL.master.events.turnOffStairs();
}

// Raises gate
Machine.prototype.gateUpAction = function() {
  console.log ("gate up");
  PERPETUAL.master.events.gateOpen();
}

// Lowers gate
Machine.prototype.gateDownAction = function() {
  console.log ("gate lowered");
  PERPETUAL.master.events.gateClose(); 
}

// Moves Slider all the way up
Machine.prototype.sliderUpAction = function() {
 // stage.pause("Performing Move");
  PERPETUAL.master.events.slider();
  console.log ("slider done");
}

// Homes pusher / Moves pusher all the way down
Machine.prototype.homeAction = function() {
  PERPETUAL.master.events.home();
  console.log ("home pushed");
}

// Changes the value "railPosition" on the arduino side in reaction to the slider changing
Machine.prototype.fixedChangePosition = function(slidePosition) {
  console.log("Curret value of Fslider is " + slidePosition);
  //manager.change(PERPETUAL.master.values.railPosition, slidePosition);
  //console.log("Curret value of the variable is " + PERPETUAL.master.values.railPosition);
}
