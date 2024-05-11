music1 = "Music-1.mp3";
music2 = "Music-2.mp3";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    loadSound(music1);
    loadSound(music2);
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.position(450, 150);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on("pose", gotPoses);
}

function modelReady(){
    console.log("Model Loaded!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + ", Left Wrist Y = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + ", Right Wrist Y = " + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 400, 400);
}