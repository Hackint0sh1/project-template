title("Keep refrooshing you scrub");
// put variables here, just like kahn academy
//  var img = processing.loadImage("Fab.jpg");
var music;
var counter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


var x = 100;
var y = 430;
var xdirection = 0.1;
var dir1 = -0.1;
var dir2 = 0.5;
var dir3 = -0.5;


var music;

// ~~~~~~~~~~~~~~
var randomx = 300
// ~~~~~~~~~~~~~~~
var random1 = 300
var random2 = 300
var random3 = 300
var random4 = 450 
var random5 = 450
var random6 = 450
var random7 = 150
var random8 = 150
var random9 = 150
var random10 = 300
var random11 = 300
var random12 = 300
var random13 = 450 
var random14 = 450
var random15 = 450
var random16 = 150
var random17 = 150
var random18 = 150
var random19 = 300
var random20 = 300
var random21 = 300


//~~~~~~~~~~~~~~
var cherryY = 20;
// ~~~~~~~~~~~~
var cherry1 = 20;
var cherry2 = 20;
var cherry3 = 20;
var cherry4 = 20;
var cherry5 = 20;
var cherry6 = 20;
var cherry7 = 20;
var cherry8 = 20;
var cherry9 = 20;
var cherry10 = 20;
var cherry11 = 20;
var cherry12 = 20;
var cherry13 = 20;
var cherry14 = 20;
var cherry15 = 20;
var cherry16 = 20;
var cherry17 = 20;
var cherry18 = 20;
var cherry19 = 20;
var cherry20 = 20;
var cherry21 = 20;



// this code is executed once when the program is started
var  setup = function() {
    music = new Audio("skeletoons.mp3");
	music.controls = true;
	music.loop = true;
	music.autoplay = true;
	document.body.appendChild(music);
    b = loadImage("spooky.jpg");
    pig = loadImage("football.gif");
    cherry = loadImage("football.gif");
    corn = loadImage("corn.png");
    knife = loadImage("knife.gif");
    pumpkin = loadImage("pumpkin.gif");

    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);

    var setup = function() {

    };
    var keyIsPressed = false;

    var  keyPressed = function() {
	keyIsPressed = true;
    }

    var keyReleased = function() {
	keyIsPressed = false;
    }
}
 
	



var draw = function() {
    
    if (Math.random() < 0.01) {
	xdirection = xdirection*-1;
    }
    randomx += xdirection;
    random1 += dir1;
    random2 += dir2;
    random3 += dir3;
    random4 += dir1;
    random5 += dir2;
    random6 += dir3;
    random7 += dir1;
    random8 += dir2;
    random9 += dir3;
    random10 += dir2;
    random11 += dir3;
    random12 += dir1;
    random13 += dir2;
    random14 += dir3;
    random15 += dir2;
    random16 += dir3;
    random19 += dir1;
    random20 += dir2;
    random21 += dir3;


    cherryY += 1;
    cherry1 += 1;
    cherry2 += 1;
    cherry3 += 1;
    cherry4 += 1;
    cherry5 += 1;
    cherry6 += 1;
    cherry7 += 1;
    cherry8 += 1;
    cherry9 += 1;
    cherry10 += 1
    cherry11 += 1;
    cherry12 += 1;
    cherry13 += 1
    cherry14 += 1;
    cherry15 += 1;
    cherry16 += 1
    cherry17 += 1;
    cherry18 += 1;
    cherry19 += 1
    cherry20 += 1;
    cherry1 += 1;


    image(b, 0, 0);

    textSize(43);
    text(counter[9], 44, 53);
    textSize(18);
    text("POINTS", 23, 20);

    image(cherry, randomx, cherryY);
    image(knife, random1, cherry1);
    image(pumpkin, random2, cherry2);
    image(corn, random3, cherry3);
  
    image(knife, random4, cherry4);
    image(pumpkin, random5, cherry5);
    image(corn, random6, cherry6);

    image(knife, random7, cherry7);
    image(pumpkin, random8, cherry8);
    image(corn, random9, cherry9);
    
    image(knife, random8, cherry8);
    image(pumpkin, random9, cherry9);
    image(corn, random10, cherry10);

    image(knife, random11, cherry11);
    image(pumpkin, random12, cherry12);
    image(corn, random13, cherry13);
    
    image(knife, random14, cherry14);
    image(pumpkin, random15, cherry15);
    image(corn, random16, cherry16);

    image(knife, random17, cherry17);
    image(pumpkin, random18, cherry18);
    image(corn, random19, cherry19);

    image(cherry, random20, cherry20);
    image(cherry, random21, cherry21);

 // Cluster of objects in the background raining down
if(cherryY > 600) {
	cherryY = cherryY - 600;
    }
if(cherry1 > 600) {
	cherry1 = cherry1 - 600;
    }
if(cherry2 > 600) {
	cherry2 = cherry2 - 600;
    }
if(cherry3 > 600) {
	cherry2 = cherry2 - 600;
    }
}

    if(x > 0 && keyIsPressed && keyCode === LEFT ) {
	x = x - 33;
    }

    if(x < 700 && keyIsPressed && keyCode === RIGHT ) {
	x = x + 33;
    }

    //	    y = processing.mouseY;

    //	}

    image(pig, x, y);
   

/*if (keyIsPressed && keyCode === RIGHT) {
            
            Xpos = Xpos + 9;  
    }
    if (keyIsPressed && keyCode === LEFT) {
            Xpos = Xpos - 9;
    }
*/
