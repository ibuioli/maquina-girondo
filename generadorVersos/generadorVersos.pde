Verso uno;
String[] temas = {"plaza", "calle", "noche", "mar"};
String[] prep, nums, adj;
String[] cuerpo, lugar, persona, prenda, resto;
String[] conj1, conj2, inf;
String[] exeFem;

void setup() {
  size(800, 100);

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

  uno = new Verso( byte( floor(random(1, 7.99)) ), byte( floor(random(0, 2.99)) ) ); //Generador Aleatorio, todavía experimental
  //uno = new Verso( byte( 7 ), byte( 2 ) );
}

void draw() {
  background(240);
  textSize(10);
  textAlign(RIGHT);
  text("La Máquina Girondo alpha 1.2.5", width-5, height-6);

  fill(0);
  textAlign(CENTER);
  textSize(22);
  
  uno.escribir(width/2, 50);
}

void mousePressed() {
  setup();
}