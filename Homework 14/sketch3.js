// Character X, Y
var characterX = 35;
var characterY = 35;

// Key pressed codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Obstacle Shapes
var shapeX = 50;
var shapeY = 75;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

// create mouse click shape
var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(800, 600);
    for (var i = 0; i < 7; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 6);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 6);
        shapeXs[i] = getRandomNumber(800);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(30);
    }

}

function draw() {
    background(120, 136, 153);
    stroke(0);
    fill(0);
    drawBoundries();
    drawExitText();
    drawPlayer();
    characterMovement();
    fill(19, 218, 236);
    // tried several things to get my ellipse shape obstacles to work but couldn't
    // figure out how to work it so I just let it do circles.  I like the
    // "raining shapes" look so I kept it instead of the back and forth I 
    // had before.
    for (var i = 0; i < shapeXs.length; i++) {
        ellipse(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    // Move Obstacles
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];

    // Check for the edge of the screen
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }

    // check exit for escape
    if (characterX > 400 && characterY >= 590) {
        fill(0);
        stroke(5);
        textSize(26);
        text("You Escaped!", width / 2 - 50, height / 2 - 50);
    }

    // mouse click shape
    fill(120, 130, 140);
    square(mouseShapeX, mouseShapeY, 25);
}
    // exit text
function drawExitText()
    {
textSize(16);
fill(0);
text("EXIT", width-450,height -15)
text("EXIT", width-335,height -15)
    }

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 7;
    }
    if (keyIsDown(s)) {
        characterY += 7;
    }
    if (keyIsDown(a)) {
        characterX -= 7;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 7;
    }
}

function createPlayer(x, y) {
    characterX = x;
    characterY = y;
}

function drawPlayer() {
    fill(255, 0, 0);
    circle(characterX, characterY, 35);
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
// This is staying now? Okay. I still don't see how it wouldn't work on the last assignment. I did this very thing and it wouldn't stay. *shrugs*
// Works now so, hooray!
function mouseClicked() {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}