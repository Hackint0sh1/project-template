title('My Project');

// put variables here, just like kahn academy

var Xpos = 350
var Ypos = 500
var BallX = 391
var BallY = 485
var speed = 10
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

    //ball
   fill(4, 90, 222);
   ellipse(BallY, BallY, 20, 20);

   BallY = BallY - speed; 

   if (BallY < 0) {
       speed = -10;
    }

};









    // some drawing commands; feel free to change these
    

    // draw some text
 

    // call a function (defined up above)
    

