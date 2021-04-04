var button;

var gameState = "level1";

function preload()
{
	temple = loadImage("temple.jpg");
	maze = loadImage("maze.png");
	character = loadImage("character.png");
	grass = loadImage("grass.jpg");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	button = new Form();

//Character

	ch = createSprite(190, 80, 20 ,20)
	//ch.addImage(character);

//Maze pieces from Level 1
	m1 = createSprite(105,displayHeight/2,40,displayHeight-200);
	m2 = createSprite(displayWidth/2-79,displayHeight-103,displayWidth-325,40);
	m3 = createSprite(displayWidth/2+92,displayHeight/2-297,displayWidth-330,30);
	m4 = createSprite(displayWidth/2+890,displayHeight/2,40,displayHeight-200);
	m5 = createSprite(displayWidth/2-790,displayHeight/2+70,displayWidth-1770,30);
	m6 = createSprite(displayWidth/2-617,displayHeight/2-170,displayWidth-1770,30);
	m7 = createSprite(displayWidth/2-695,displayHeight/2-110,40,displayHeight/2-268);
	m8 = createSprite(displayWidth/2-345,displayHeight/2-168,40,displayHeight/2-150);
	m9 = createSprite(displayWidth/2-417,displayHeight/2-53,displayWidth/2-460,30);
	m10 = createSprite(displayWidth/2-532,displayHeight/2+15,40,displayHeight/2-300);
	m11 = createSprite(displayWidth/2-176,displayHeight/2+15,40,displayHeight/2-290);
	m12 = createSprite(displayWidth/2-281,displayHeight/2+61,displayWidth/8-70,30);
	m13 = createSprite(displayWidth/2-349,displayHeight/2+120,40,displayHeight/2-275);
	m14 = createSprite(displayWidth/2-510,displayHeight/2+175,displayWidth/4-130,30);
	m15 = createSprite(displayWidth/2-175,displayHeight/2+240,40,displayHeight/2-275);
	m16 = createSprite(displayWidth/2+181,displayHeight/4-35,40,displayHeight/2-275);
	m17 = createSprite(displayWidth/2-74,displayHeight/4+34,displayWidth/8-40,30);
	m18 = createSprite(displayWidth/2+8,displayHeight/2-106,40,displayHeight/2-275);
	m19 = createSprite(displayWidth/2+95,displayHeight/4+154,displayWidth/8-32,30);
	m20 = createSprite(displayWidth/2+182,displayHeight/2+15,40,displayHeight/2-273);
	m21 = createSprite(displayWidth/2+358,displayHeight/4+277,displayWidth/4-100,30);
	m22 = createSprite(displayWidth/2+534,displayHeight/2-60,40,displayHeight/2-160);
	m23 = createSprite(displayWidth/2+536,displayHeight/4+34,displayWidth/4-100,30);
	m24 = createSprite(displayWidth/2+360,displayHeight/2-110,40,displayHeight/4-70);
	m25 = createSprite(displayWidth/2+360,displayHeight/2+125,40,displayHeight/4-80);
	m26 = createSprite(displayWidth/2+7,displayHeight/2+130,40,displayHeight/4-90);
	m27 = createSprite(displayWidth/2+184,displayHeight/2+175,displayWidth/4-100,30);
	m28 = createSprite(displayWidth/2+700,displayHeight/2+190,displayWidth/4-150,30);
	m29 = createSprite(displayWidth/2+184,displayHeight/2+240,40,displayHeight/4-90);
	m30 = createSprite(displayWidth/2+713,displayHeight/2+2,40,displayHeight/4-70);
	m31 = createSprite(displayWidth/2+800,displayHeight/2-54,displayWidth/4-280,30);













  
}


function draw() {
	if(gameState === "intro"){
  background(temple);

  textSize(60);
  fill("white");
  textFont("Burbank Big Condensed Bold")
  text("The Gold-Making Trophy", displayWidth/2 -350, displayHeight/2-140);
  
	button.display();
	}

	if(gameState === "level1"){
		clear();
		background(grass);
		textSize(40);
  		fill("white");
  		textFont("Burbank Big Condensed Bold")
  		text("LEVEL 1", 50, 40);
		drawSprites();
	}

  //drawSprites();
  fill("red");
 text(mouseX + "," + mouseY, mouseX, mouseY)
}



