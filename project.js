title('LENNY');
// put variables here, just like kahn academy
var x = 391;
var y = 485;
var speed = 5;
var ySpeed = 5;
var boundL = 0;
var boundR = 800;
var boundT = 0;
var boundB = 600;
var xSize = 80;
var ySize = 15;
///////////////////
var Xpos = 350;
var Ypos = 500;
var BallX = 391;
var BallY = 485;
var Top = 0;
var Left = 0;
var Right =  800;
var Bottom = 600;
var dClicker = 0;
var brickSize = 54;
// put functions here, just like kahn academy

    
var i = [


// this code is executed once when the program is started

var setup = function(){
    
    size(800, 600);

};

// override draw function, by default it will be called 60 times per second

var draw = function() {
    background(255, 0, 0);

    //paddle
    fill(0, 0, 0);
    rect(Xpos, Ypos, 80, 15);
    if (keyIsPressed && keyCode === RIGHT) {
            
            Xpos = Xpos + 9;  
    }

    if (keyIsPressed && keyCode === LEFT) {
            Xpos = Xpos - 9;
    }
 //  BALL
    ellipse(x, y, 50, 50);
    
    x = x + speed;
    y = y + ySpeed;
   
  

    
    if (x > boundR){
        speed = -2.5 - Math.random() * 2.5;
    }
    
    if( x < boundL){
        speed = 2.5 + Math.random() * 2.5;
    }
    
    if (y + 13 >= Ypos && x >= Xpos && x <= (Xpos+50)) {
	ySpeed = -2 - Math.random() * 2.5;
	dClicker = 1;
    }else if(y > Ypos+50){
        ySpeed = 0;
        speed = 0;
        
        Xpos = 0;
        background(0, 21, 255);
	if (dClicker === 1) {
	    dClicker = 0;
	    alert("YOU DIED");
};
        
    }
    if (y < boundT) {
        ySpeed = 2.5 + Math.random() * 2.5;
    }
};

   
    

