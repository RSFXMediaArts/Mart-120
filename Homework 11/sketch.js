//character x , y
var characterX = 35;
var characterY = 35;

//controls key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//shape designations
var shapeX = 50;
var shapeY = 70;
var shapeXSpeed;
var shapeYSpeed;

//mouse click shape
var mouseShapeX;
var mouseShapeY;

//obstacle designations
var obstacleX = 200;
var obstacleY = 200;
var obstacleXmovement = 10;
var obstacleYmovement = 4;

var obstacle2X = 250;
var obstacle2Y = 250;
var obstacle2Xmovement = 10;
var obstacle2Ymovement = 6;

function setup()
{
    createCanvas(800,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
}
function draw()
{
    background(145,19,236);
    stroke(0);
    fill(0);

// Playing field borders

//top
rect(0,0,width,10);
// left
rect(0,0,10,height);
// bottom left
rect(0, height-10,width -400, 10);
// bottom right
rect(450, height-10, width -400, 10);
// right
rect(width-10,0,10,height);

// exit message
textSize(16);
text("EXIT", width-450,height -15)
text("EXIT", width-335,height -15)

//character
fill(236,141,19);
circle(characterX,characterY,40);

// handle the keys
if(keyIsDown(w))
{
    characterY -= 7;   
}
if(keyIsDown(s))
{
    characterY += 7;   
}
if(keyIsDown(a))
{
    characterX -= 7;   
}
if(keyIsDown(d))
{
    characterX += 7;   
}
//obstacles
fill(19,218,236)
ellipse(obstacleX,obstacleY,30,25);
if(obstacleY >= 575 || obstacleY <= 25)
    {
        obstacleYmovement*=-1;
    }
        obstacleY += obstacleYmovement;
        if(obstacleY >= 575 ||obstacleY <= 25)
    {
        obstacleYmovement*=-1;
    }
        obstacleY +=obstacleYmovement;

        fill('#cc0000')
        ellipse(obstacle2X,obstacle2Y,30,25);
        if(obstacle2X >= 775|| obstacle2X <= 0)
    {
        obstacle2Xmovement*=-1;
    }
    obstacle2X += obstacle2Xmovement;
            if(obstacle2X >= 775|| obstacle2X <= 0)
    {
        obstacle2Xmovement*=-1;
    }
    obstacle2X += obstacle2Xmovement;


// potential enemy
fill(13,145,14);
circle(shapeX, shapeY, 30);

 // get a random speed when the it first starts
 shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

// move the shape
shapeX += shapeXSpeed;
shapeY += shapeYSpeed;
// check to see if the shape has gone out of bounds
if(shapeX > width)
{
    shapeX = 0;
}
if(shapeX < 0)
{
    shapeX = width;
}
if(shapeY > height)
{
    shapeY = 0;
}
if(shapeY < 0)
{
    shapeY = height;
}

// check to see if the character has left the exit
if(characterX >= 400 && characterY >= 550)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("You Escaped!", width/2-50, height/2-50);
}

// mouse click shape designation
fill(120,130,140);
square(mouseShapeX, mouseShapeY, 25);
}

function mouseClicked()
{
mouseShapeX = mouseX;
mouseShapeY = mouseY;
    
    
}