XCoordinate = "";
YCoordinate = "";

function preload()
{
    img = loadImage("https://i.postimg.cc/Jh7r5hCG/red-nose.png");
}

function setup()
{
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    Posnet = ml5.poseNet(video,ModelL);
    Posnet.on('pose',position);
}

function ModelL()
{
    console.log("PoseNet is initiallized");
}

function position(pose)
{
    if (pose.length > 0)
    {
        console.log(pose);
        console.log("nose x = "+pose[0].pose.nose.x);
        console.log("Nose Y= "+pose[0].pose.nose.y);
        XCoordinate = pose[0].pose.nose.x-20;
        YCoordinate = pose[0].pose.nose.y-20;

    }
}

function draw()
{
    console.log("Ml5 Version = ",ml5.version);
    image(video,0,0,400,400);
    image(img,XCoordinate,YCoordinate,45,45);
    
}

function snapshot()
{
    save("my-clown-nose.png");
}

