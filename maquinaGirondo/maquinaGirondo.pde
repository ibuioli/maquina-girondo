Estrofa poema;
String[] prep, nums, adj;
String[] cuerpo, lugar, persona, prenda, resto;
String[] conj1, conj2, inf;
String[] exeFem, exeMas;
PImage back;
PFont times;
int tema;  //0: calle, 1: noche, 2: plaza, 3:mar

void setup() {
  //fullScreen(P2D);    //App Celulares
  //orientation(PORTRAIT);
  size(320, 480, P2D);  //App de escritorio
  
  ////CARGA DE DATOS////

  prep = loadStrings("preposiciones.txt");
  nums = loadStrings("nums.txt");
  exeFem = loadStrings("exeFem.txt");
  exeMas = loadStrings("exeMas.txt");

  cuerpo = loadStrings("vocabulario/sus/cuerpo.txt");
  lugar = loadStrings("vocabulario/sus/lugar.txt");
  persona = loadStrings("vocabulario/sus/persona.txt");
  prenda = loadStrings("vocabulario/sus/prenda.txt");
  resto = loadStrings("vocabulario/sus/resto.txt");
  adj = loadStrings("vocabulario/adj.txt");
  conj1 = loadStrings("vocabulario/verb/conj1.txt");
  conj2 = loadStrings("vocabulario/verb/conj2.txt");
  inf = loadStrings("vocabulario/verb/infinitivos.txt");

  back = loadImage("back.jpg");
  times = createFont("timesbd.ttf", 48, true);
  
  tema = floor(random(0, 3.99));   //Definir Tema
  poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Cantidad de Versos
  
  ////GRAFICA GRAL////
  fill(0, 250);
  textFont(times);
}

void draw() {
  background(198, 186, 146);
  image(back, 0, 0, width, height);
  
  textSize(10);
  textAlign(RIGHT);
  text("La Máquina Girondo beta 1.0.1", width-6, height-6);

  poema.escribir();
}

void mousePressed() {
  tema = floor(random(0, 3.99));   //Nueva Tema
  poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
}