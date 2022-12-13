// Set Color Values Per Element
// Stalk
var stalkColorR = 240;
var stalkColorG = 223;
var stalkColorB = 205;
//Grass
var grassColorR = 106;
var grassColorG = 168;
var grassColorB = 79;
//Sun
var SunX = 100;
var SunY = 100;
var SunXmovement = 10;

function setup()
{
    createCanvas(700,700);
}

function draw()
{
    background (137, 207, 240);
    drawShroom();
    drawGrass();
    fill(255,255,0)
    circle(SunX,SunY,100);
        if(SunX >= 700|| SunX <= 0)
    {
            SunXmovement*=-1;
    }
    SunX += SunXmovement;
    drawText();
}

function drawShroom()
{
    //Shroom Stalk
    fill(stalkColorR, stalkColorG, stalkColorB)
    noStroke();
    arc(340,660,180,200, PI, TWO_PI); 
    ellipse(340,500,150,300)
    //Shroom Cap
    fill('red')
    arc(340, 400, 280, 280, PI, TWO_PI);
    fill(144,133,123)
    arc(340,400,280,50, 0,PI)
    stroke(96,89,82)
    strokeWeight(2);
    line(275,400,)
    //Shroom Cap Details
    stroke(96,89,82)
    strokeWeight(2);
    line(250,401,265,420);
    line(225,401,240,415);
    line(260,401,275,420);
    line(435,401,420,420);
    line(445,401,430,415);
    line(350,401,350,423);
    line(335,401,340,421);
    //Shroom Spots
    noStroke();
    fill('white') 
    circle(380,350,30)
    circle(360,300,30)
    circle(300,370,30)
    circle(240,350,30)
    circle(440,380,30)
}
function drawGrass()
{
    fill(grassColorR,grassColorG,grassColorB);
    rect(20,660,660,50);
    triangle(400,695,425,600,450,695); 
    triangle(385,695,500,600,485,695);
    triangle(425,695,450,580,475,695);
    triangle(250,695,260,620,300,695);
    triangle(220,695,230,560,290,695);
    triangle(325,695,340,560,300,695);
    triangle(340,695,350,510,360,695);
    triangle(200,695,215,600,225,695);
}

function drawText()
{
textSize(28);
fill(0);
text("Thank's for a great class!", width-500,height -15)
    }