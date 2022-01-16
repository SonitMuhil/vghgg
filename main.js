function preload(){
}

function setup() {
    createCanvas(150, 150);
    background(150);
    video = createCapture(VIDEO);
    video.hide();
    
    
  

    tint_color = "";
}


function draw() {
    image(video, 0, 0, 670, 500);
    tint(tint_color);
    circle(30, 30, 20);
}

function take_snapshot(){
    save('sister_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}