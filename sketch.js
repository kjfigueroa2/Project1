/*******************************************************************************************************************
      Moody
    by Scott Kildall
 
  Color Palette Values:

  Black: #031927
  Turquoise: #3ED8D2
  Canary: #FFF689
  Sizzling Red: #F2545B
  Pale Purple: #E9D6EC

    Uses the p5.ComplexStateMachine library. Check the README.md + source code documentation
    The index.html needs to include the line:  <script src="p5.complexStateManager.js"></script>
*********************************************************************************************************************/

var complexStateMachine;           // the ComplexStateMachine class
var clickablesManager;             // our clickables manager
var clickables;                    // an array of clickable objects

var currentStateName = "";
var backgroundImage;

var bkColor = '#F7DBA7';
var textColor = '#1E2D2F';

var buttonFont;

//mood images
var satisfied;
var uncertain;
var worried;
var stressed;
var angry;

function preload() {
  clickablesManager = new ClickableManager('data/clickableLayout.csv');
  complexStateMachine = new ComplexStateMachine("data/interactionTable.csv", "data/clickableLayout.csv");

  buttonFont = loadFont("Eina01-Regular.ttf");

  //load moods
  satisfied = loadImage('assets/satisfied.png');
  uncertain = loadImage('assets/uncertain.png');
  worried = loadImage ('assets/worried.png');
  stressed = loadImage ('assets/stressed.png');
  angry = loadImage ('assets/angry.png');
}

// Setup code goes here
function setup() {
  createCanvas(1300, 750);
  imageMode(CENTER);

  // setup the clickables = this will allocate the array
  clickables = clickablesManager.setup();

  // setup the state machine with callbacks
  complexStateMachine.setup(clickablesManager, setImage, stateChanged);

  // call OUR function to setup additional information about the p5.clickables
  // that are not in the array 
  setupClickables(); 
 }


// Draw code goes here
function draw() {
  drawBackground();
  drawImage();
  drawOther();
  drawUI();
  drawMoods();
}

function setupClickables() {
  // All clickables to have same effects
  for( let i = 0; i < clickables.length; i++ ) {
    clickables[i].onHover = clickableButtonHover;
    clickables[i].onOutside = clickableButtonOnOutside;
    clickables[i].onPress = clickableButtonPressed;
    clickables[i].textFont = "Eina01-Regular";
    clickables[i].width = 100;
  }
}

// tint when mouse is over
clickableButtonHover = function () {
  this.color = "#F1AB86";
  this.noTint = false;
  this.tint = "#FF0000";
}

// color a light gray if off
clickableButtonOnOutside = function () {
  // backto our gray color
  this.color = "#C57B57";
}

clickableButtonPressed = function() {
  complexStateMachine.clickablePressed(this.name);
}

// this is a callback, which we use to set our display image
function setImage(imageFilename) {
  backgroundImage = loadImage(imageFilename);
} 

// this is a callback, which we can use for different effects
function stateChanged(newStateName) {
    currentStateName = newStateName;
    console.log(currentStateName);
} 


//==== KEYPRESSED ====/
function mousePressed() {
  // if( currentStateName === "Splash" ) {
  //   complexStateMachine.newState("Instructions");
  // }
}

//==== MODIFY THIS CODE FOR UI =====/

function drawBackground() {
  background(color(bkColor));
}

// draw centered
function drawImage() {
  if( backgroundImage !== undefined ) {
    image(backgroundImage, width/2, height/2);
  }  
}

//draw moods
function drawMoods(){
  if(currentStateName === "Scenario1"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario2"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario3"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario4"){
    image(uncertain,160,200,130,130);
    image(uncertain,410,200,130,130);
    image(stressed,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario5"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario6"){
    image(uncertain,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario7"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario8"){
    image(angry,160,200,130,130);
    image(angry,410,200,130,130);
    image(stressed,650,200,130,130);
    image(angry,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario9"){
    image(uncertain,160,200,130,130);
    image(uncertain,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario10"){
    image(uncertain,160,200,130,130);
    image(uncertain,410,200,130,130);
    image(stressed,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario11"){
    image(uncertain,160,200,130,130);
    image(angry,410,200,130,130);
    image(stressed,650,200,130,130);
    image(angry,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario12"){
    image(uncertain,160,200,130,130);
    image(stressed,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario13"){
    image(uncertain,160,200,130,130);
    image(stressed,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "Scenario14"){
    image(uncertain,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(stressed,1140,200,130,130);
  }

  else if(currentStateName === "Scenario15"){
    image(uncertain,160,200,130,130);
    image(worried,410,200,130,130);
    image(worried,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(worried,1140,200,130,130);
  }

  else if(currentStateName === "EndState1"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "EndState2"){
    image(angry,160,200,130,130);
    image(angry,410,200,130,130);
    image(worried,650,200,130,130);
    image(angry,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "EndState3"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(stressed,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "EndState4"){
    image(uncertain,160,200,130,130);
    image(uncertain,410,200,130,130);
    image(angry,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "EndState5"){
    image(satisfied,160,200,130,130);
    image(satisfied,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "EndState6"){
    image(stressed,160,200,130,130);
    image(worried,410,200,130,130);
    image(satisfied,650,200,130,130);
    image(satisfied,900,200,130,130);
    image(satisfied,1140,200,130,130);
  }

  else if(currentStateName === "EndState7"){
    image(uncertain,160,200,130,130);
    image(uncertain,410,200,130,130);
    image(uncertain,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(stressed,1140,200,130,130);
  }

  else if(currentStateName === "EndState8"){
    image(uncertain,160,200,130,130);
    image(uncertain,410,200,130,130);
    image(uncertain,650,200,130,130);
    image(uncertain,900,200,130,130);
    image(stressed,1140,200,130,130);
  }

}


function drawOther() {
  
  push();

   /*Draw mood — if not on Splash or Instructions screen  
   if( currentStateName !== "Welcome" && currentStateName !== "Introduction" && currentStateName !== "Players") {
    fill(color(textColor));
    textFont(buttonFont);
    textSize(24);
    text(currentStateName, width/2, 50);
    
  }*/

  pop();
} 

//-- right now, it is just the clickables
function drawUI() {
  clickablesManager.draw();
}
