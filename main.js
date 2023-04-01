function setup(){
    video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,500);
canvas.position(650,100);
poseNet = ml5.poseNet('pose', model_loaded);
poseNet.on('pose', got_poses);
}

function model_loaded(){
    console.log('posenet is intializing');
}

function draw(){

    background('#ff00bf');
}
function got_poses(results){
if(results.length > 0){
    console.log(results);
}
}