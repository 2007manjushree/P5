var tint_colour = "";

function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(100,270);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,640,480);
    tint(tint_colour);
}

function apply_tint(){
    tint_colour = document.getElementById("colour").value;
}

function take_snapshot(){
    save("filter.png");
}