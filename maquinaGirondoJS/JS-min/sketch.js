var poema, linea;
var tema; //0: calle, 1: noche, 2: plaza, 3:mar

function preload() {
 tema = floor(random(0, 3.99));
}

function setup() {
 createCanvas(320, 480);

 poema = new Estrofa(byte(floor(random(3, 7.99))));
}

function draw() {

 background(255);

 push();
 textAlign(LEFT, CENTER);
 textSize(22);
 textLeading(22);
 text(poema.texto(), 10, -height/8, width - 10, height);
 pop();
 print(poema.fonetica()); //Fonetica para TTS

 noLoop();
}

//INTERACCION
function mousePressed() {
 tema = floor(random(0, 3.99));
 poema = new Estrofa(byte(floor(random(3, 7.99)))); //Nuevo Poema
 draw();
}