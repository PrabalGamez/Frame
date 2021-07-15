function preload(){
    
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,160,105,320,210);
    stroke("#000000");
    fill("#ffe000");
    circle(40,40,50);
    circle(600,40,50);
    circle(600,380,50);
    circle(40,380,50);

    stroke("#000000");
    fill("#ff0000");
    rect(35.5,65,10,290);
    rect(595.5,65,10,290);
    rect(65.5,35,510,10);
    rect(65.5,375,510,10);
}

function take_snapshot(){
    save("Photo :).jpeg");
}