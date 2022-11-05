var browX = 165;
var browY = 165;
var browDirection = 1;

var rightbrowX = 215;
var rightbrowY = 165;
var rightbrowDirection = 1;

var leftearY = 200;
var rightearY = 200;

var mouthX = 200;
var mouthY = 235;
var mouthXmovement = 10;
var mouthYmovement = 8;

var size = 16;
var count = 0;
var sizeDirection = 1




function setup()
    {
        createCanvas(400,400);
        browXmovement = floor(random() * 10) + 1;
        rightbrowXmovement = floor(random() * 10) + 1;
        leftearYmovement = floor(random() * 10) + 1;
        rightearYmovement = floor(random() * 10) + 1;
    }
    function draw()
    {
        background(220);
        console.log("draw?");
        // Text
        fill('black');
        textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 1;
    }
        text('Hiya! You startled me!', 100, 50);
        textSize(20);
        text('by ~ Richard Sibley', 115, 375);
        // Hair Background
        strokeWeight(3);
        fill('#999999');
        rect(119, 156, 50, 150);
        rect(230, 156, 50, 150);
        // Neck
        fill('#F4CCCC');
        rect(150,290, 100, 25);
        // Head and Ears
        fill('#F4CCCC');
        ellipse(120,leftearY,20,30);
        ellipse(280,rightearY,20,30);
        ellipse(200,200,150,190);
        line(280, 195, 280, 200);
        line(120, 195, 120, 200);
        if(leftearY >= 375 || leftearY <= 0)
    {
        leftearYmovement*=-1;
    }
        leftearY += leftearYmovement;
        if(rightearY >= 375 || rightearY <= 0)
    {
        rightearYmovement*=-1;
    }
        rightearY += rightearYmovement;
        // Eyes
        fill('white');
        ellipse(175,185,25,10);
        ellipse(225,185,25,10);
        fill('#6fa8dc');
        circle(175, 185, 10, 10);
        circle(225, 185, 10, 10);
        if(browX >= 375 || browX <= 0)
    {
        browXmovement*=-1;
    }
        browX += browXmovement;
        strokeWeight(3);
        point(175, 185);
        point(225, 185);
        // Beard and Mouth
        fill('#999999');
        quad(125,215,275,215,255,300,145,300);
        fill('#cc0000')
        ellipse(mouthX,mouthY,30,25);
        if(mouthX >= 375|| mouthX <= 0)
    {
            mouthXmovement*=-1;
    }
            mouthX += mouthXmovement;
            if(mouthY >= 375|| mouthY <= 0)
    {
            mouthYmovement*=-1;
    }
            mouthY += mouthYmovement;
        // Nose
        line(195, 185, 190, 205);
        line(190, 205, 200, 205);
        // Hair and Eyebrows
        fill('#999999');
        rect(browX,browY,25,10);
        rect(rightbrowX,rightbrowY,25,10);
        triangle(120, 155, 200, 75, 280, 155);  
        if(browX >= 375 || browX <= 0)
    {
        browXmovement*=-1;
    }
        browX += browXmovement;
        if(rightbrowX >= 375 || rightbrowX <= 0)
    {
        rightbrowXmovement*=-1;
    }
        rightbrowX += rightbrowXmovement;
        // Hair/Beard Texture
        strokeWeight(1);
        line(165,275,165,300);
        line(155,290,155,300);
        line(210,280,210,300);
        line(213,275,213,300);
        line(240,280,240,300);
        line(200,125,200,155);
        line(205,135,205,155);
        line(175,115,175,155);
        line(172,130,172,155);
        line(178,145,178,155);
        line(125,275,125,306);
        line(130,285,130,306);
        line(275,255,275,306);
        line(270,275,270,306);
        strokeWeight(3);
        point(220,200);
    }