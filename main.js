sus= "";
lol= "";

function preload() {
    sus= loadSound("Amogus.mp3");
    lol= loadSound("buntystay");
}

function setup() {
    canvas= createCanvas(600, 550);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 550);
    fill('#bad5ff');
    stroke('#3383ff');
}