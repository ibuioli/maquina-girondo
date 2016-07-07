Estrofa poema;
String[] prep, nums, adj;
String[] cuerpo, lugar, persona, prenda, resto;
String[] conj1, conj2, inf;
String[] exeFem;

void setup() {
  size(400, 600);

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
  
  poema = new Estrofa( byte(5) );
  
}

void draw() {
  background(240);
  fill(0);
  textSize(10);
  textAlign(RIGHT);
  text("La Máquina Girondo alpha 1.3", width-5, height-6);

  textAlign(LEFT, CENTER);
  textSize(22);
  
  poema.escribir();
}

void mousePressed() {
  setup();
}