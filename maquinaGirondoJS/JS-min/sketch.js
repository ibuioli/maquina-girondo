var poema, linea;
var tema; //0: calle, 1: noche, 2: plaza, 3:mar

function preload() {
 tema = floor(random(0, 3.99));
}

function setup() {
 createCanvas(320, 480);

 linea = new Verso(byte(floor(random(1, 7.99))), byte(floor(random(0, 2.99))));
}

function draw() {

 background(255);

 linea.escribir();        //Texto con Formato
 print(linea.fonetica()); //Fonetica para TTS

 noLoop();
}

//INTERACCION
function mousePressed() {
 tema = floor(random(0, 3.99));
 linea = new Verso(byte(floor(random(1, 7.99))), byte(floor(random(0, 2.99))));
 //poema = new Estrofa(byte(floor(random(3, 7.99)))); //Nuevo Poema
 draw();
}