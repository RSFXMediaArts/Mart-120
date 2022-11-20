//Character X, Y
var characterX = 35;
var characterY = 35;

//Controls key codes
var w = 87;
var a = 65;
var s = 83;
var d = 68;

//obstacle designations
var obstacleX = 200;
var obstacleY = 200;
var obstacleXmovement = 10;
var obstacleYmovement = 4;

var obstacle2X = 250;
var obstacle2Y = 250;
var obstacle2Xmovement = 10;
var obstacle2Ymovement = 6;

//mouse click shape
var mouseShapeX;
var mouseShapeY;

function setup()
{
    createCanvas(800,600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
}
function draw()
{
    background(119,136,153);
    stroke(0);
    fill(0);
    createPlayer();
    controlPlayer();
    drawBoundries();
    createObstacles();
    moveObstacles();
    drawExitText();
    mouseClicked();
    checkExit();
} 

// Create the Player
function createPlayer()
{
fill(255,0,0);
circle(characterX,characterY,35);
}

// Move the Player
function controlPlayer()
{
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

}

function drawBoundries()
{
fill(0);
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
}

function createObstacles()
{
//create obstacles
fill(19,218,236)
ellipse(obstacleX,obstacleY,30,25);

fill('#cc0000')
ellipse(obstacle2X,obstacle2Y,30,25);
}

function moveObstacles()
{
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
if(obstacle2X >= 775|| obstacle2X <= 0)
        {
            obstacle2Xmovement*=r-1;
        }
        obstacle2X += obstacle2Xmovement;
if(obstacle2X >= 775|| obstacle2X <= 0)
        {
            obstacle2Xmovement*=-1;
        }
        obstacle2X += obstacle2Xmovement;
    }

// Exit Text
function drawExitText()
    {
textSize(16);
fill(0);
text("EXIT", width-450,height -15)
text("EXIT", width-335,height -15)
    }

// Check Exit
function checkExit()
{
if(characterX >= 400 && characterY >= 550)
{
    fill(0);
    stroke(5);
    textSize(26);
    text("You Escaped!", width/2-50, height/2-50);
}
}

//Mouse click (This won't work for some reason, I can't figure it out. Tried 
//setting it up just like last week. Something in how the function is called
//is messing with it maybe. IDK and I have a headache now, it's been two hours.)
//function mouseClicked()
//{ 
//mouseShapeX = mouseX;
// mouseShapeY = mouseY;
//}

//Mouse Pressed Will draw shape but won't stay
function mouseClicked()
{
   if(mouseIsPressed === true) {
       fill(120,130,140);
        square(mouseX, mouseY, 25);
   }
}