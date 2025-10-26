let x = 300;
let y = 200;
let size = 50;
let speedX = 5;

function setup(){
    createCanvas(600, 400);
}

function draw(){
    background('lightblue')

x += speedX;

if(x - size/2 <= 0 || x + size/2 >= width){
    speedX *= -1;
}

noStroke();
fill('limegreen');
circle (x,y,size);
}