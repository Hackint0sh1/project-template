title('LENNY');
// put variables here, just like kahn academy
var x = 391
var y = 485
var speed = 5
var ySpeed = 5
var boundL = 0
var boundR = 800
var boundT = 0
var boundB = 600
var xSize = 80
var ySize = 15
///////////////////
var Xpos = 350
var Ypos = 500
var BallX = 391
var BallY = 485
var Top = 0
var Left = 0
var Right =  800
var Bottom = 600

// put functions here, just like kahn academy

    
  


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
    
    if (y > boundB) {
        ySpeed = -2.5 - Math.random() * 2.5;
    }
    
    if (y < boundT) {
        ySpeed = 2.5 + Math.random() * 2.5;
    }
};
/*   //ball
   fill(4, 90, 222);
   ellipse(BallY, BallY, 20, 20);

   BallY = BallY - speed; 

   if (BallY < 0) {
       speed = -5;
    }

    if (BallY > Top) {
	BallX = +5;
     }
    if (BallY > Ypos) {
	speed = +5;
     }
    if (BallX > Xpos) {
	speed = -5;
     }
    

};
*/














    // some drawing commands; feel free to change these
    

    // draw some text
 

    // call a function (defined up above)
    

