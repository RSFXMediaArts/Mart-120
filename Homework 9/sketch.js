function setup()
    {
        createCanvas(400,400);
    }
    function draw()
    {
        background(220);
        console.log("draw?");
        // Text
        fill('black');
        textSize(28);
        text('Hiya! You startled me!', 60, 50);
        text('by ~ Richard Sibley', 85, 375);
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
        ellipse(120,200,20,30);
        ellipse(280,200,20,30);
        ellipse(200,200,150,190);
        line(280, 195, 280, 200);
        line(120, 195, 120, 200);
        // Eyes
        fill('white');
        ellipse(175,185,25,10);
        ellipse(225,185,25,10);
        fill('#6fa8dc');
        circle(175, 185, 10, 10);
        circle(225, 185, 10, 10);
        strokeWeight(3);
        point(175, 185);
        point(225, 185);
        // Beard and Mouth
        fill('#999999');
        quad(125,215,275,215,255,300,145,300);
        fill('#cc0000')
        ellipse(200,235,30,25);
        // Nose
        line(195, 185, 190, 205);
        line(190, 205, 200, 205);
        // Hair and Eyebrows
        fill('#999999');
        rect(163,165,25,10);
        rect(210,165,25,10);
        triangle(120, 155, 200, 75, 280, 155);
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