let array = ["Pikachu","Raichu","Bulbasaur","Mewtwo","Charizard"];

function setup(){
    createCanvas(200, 300);
    background(0);
    }
    
function draw(){
    background(0);

    fill('pink');
    textSize(20);
    textAlign(CENTER, CENTER)
    for(let i = 0; i < array.length; i++){
        text(array[i], width/2, 100 + i * 30);
    }
}