img = ""
status = ""

function preload(){
    img = loadImage('Dolphin.png');
}

function setup() {
    canvas = createCanvas(440, 220);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 440, 220);
    fill("#FF0000");
    text("Dolphin", 45, 75);
    noFill();
    stroke("red");
    rect(30, 60, 450, 350 );
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}