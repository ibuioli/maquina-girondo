Estrofa poema;
String[] prep, nums, adj;
String[] cuerpo, lugar, persona, prenda, resto;
String[] conj1, conj2, inf;
String[] exeFem;
PImage back;
PFont times;
int tema;  //0: calle, 1: noche, 2: plaza, 3:mar

void setup() {
  //fullScreen(P2D);    //App Celulares
  //orientation(PORTRAIT);
  size(400, 600, P2D);  //App de escritorio
  
  ////CARGA DE DATOS////

  prep = loadStrings("data/preposiciones.txt");
  nums = loadStrings("data/nums.txt");
  exeFem = loadStrings("data/exeFem.txt");

  cuerpo = loadStrings("data/vocabulario/sus/cuerpo.txt");
  lugar = loadStrings("data/vocabulario/sus/lugar.txt");
  persona = loadStrings("data/vocabulario/sus/persona.txt");
  prenda = loadStrings("data/vocabulario/sus/prenda.txt");
  resto = loadStrings("data/vocabulario/sus/resto.txt");
  adj = loadStrings("data/vocabulario/adj.txt");
  conj1 = loadStrings("data/vocabulario/verb/conj1.txt");
  conj2 = loadStrings("data/vocabulario/verb/conj2.txt");
  inf = loadStrings("data/vocabulario/verb/infinitivos.txt");

  back = loadImage("data/back.jpg");
  times = loadFont("data/times.vlw");
  
  tema = floor(random(0, 3.99));   //Definir Tema
  poema = new Estrofa( byte(6) );  //Cantidad de Versos
  
  ////GRAFICA GRAL////
  fill(0, 250);
  textFont(times);
}

void draw() {
  background(198, 186, 146);
  image(back, 0, 0, width, height);
  
  textSize(10);
  textAlign(RIGHT);
  text("La Máquina Girondo alpha 1.3.6", width-6, height-6);

  textAlign(LEFT, CENTER);
  textSize(24);

  poema.escribir();
}

void mousePressed() {
  tema = floor(random(0, 3.99));   //Nueva Tema
  poema = new Estrofa( byte(6) );  //Nuevo Poema
}