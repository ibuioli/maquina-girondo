/*Clase generadora de Estrofa*/
class Estrofa {
  ArrayList<Verso> versos;
  String t, firma, loc;
  byte c;

  byte[] palabras;
  byte[] estru;

  int enume;

  Estrofa(byte c_) {
    c = c_;  //Cantidad de Palabras

    t = "";  //Evita el valor null inicial
    enume = 0; //Resetea la variable de enumeración

    versos = new ArrayList<Verso>();
    palabras = new byte[c];
    estru = new byte[c];

    for (int i=0; i < c; i++) {
      if (i == 0) {
        /*PRIMER VERSO ALEATORIO*/
        palabras[i] = byte( floor(random(1, 7.99)) );
        estru[i] = byte( floor(random(0, 2.99)) );
      } else {
        /*ESTRUCTURAS BASADAS EN VERSO ANTERIOR*/
        if (palabras[i-1] == byte(7) && estru[i-1] == byte(1)) {
          palabras[i] = 7;
          estru[i] = 0;
        } else if (palabras[i-1] == byte(6) && estru[i-1] == byte(1)) {
          float r = random(0, 100);

          if (r > 50) {
            palabras[i] = 5;
            estru[i] = 0;
          } else {
            palabras[i] = 3;
            estru[i] = 1;
          }
        } else if (palabras[i-1] == byte(6) && estru[i-1] == byte(2)) {
          float r = random(0, 100);

          if (r > 50) {
            palabras[i] = 5;
            estru[i] = 0;
          } else {
            palabras[i] = 3;
            estru[i] = 1;
          }
        } else if (palabras[i-1] == byte(4) && estru[i-1] == byte(2)) {
          palabras[i] = 7;
          estru[i] = 0;
        } else if (palabras[i-1] == byte(1) && estru[i-1] == byte(0)) {
          if (enume < 2) {
            palabras[i] = byte(1);
            estru[i] = byte(0);
          } else {
            palabras[i] = byte( floor(random(1, 7.99)) );
            estru[i] = byte( floor(random(0, 2.99)) );
          }
          enume++;
        } else {
          palabras[i] = byte( floor(random(1, 7.99)) );
          estru[i] = byte( floor(random(0, 2.99)) );
        }
      }
    }

    for (int i=0; i < c; i++) {  //Asignación de Versos
      versos.add(new Verso( palabras[i], estru[i] ));
    }

    for (int i=0; i < c; i++) {  //Asignación de la Estrofa a la variable String
      if (i == 0) {
        t = ""+t + letraCapital( versos.get(i).texto() )+"\n";
      } else if (i == c-1) {
        if (versos.get(i).texto().substring(versos.get(i).texto().length()-1, versos.get(i).texto().length()).equals("!") ||
          versos.get(i).texto().substring(versos.get(i).texto().length()-1, versos.get(i).texto().length()).equals("?")) {
          t = ""+t + versos.get(i).texto();
        } else {
          if (t.substring(t.length()-2, t.length()-1).equals("!") || t.substring(t.length()-2, t.length()-1).equals("?")) {
            t = ""+t + letraCapital( versos.get(i).texto() )+".";
          } else {
            t = ""+t + versos.get(i).texto()+".";
          }
        }
      } else {

        if (t.substring(t.length()-2, t.length()-1).equals("!") || t.substring(t.length()-2, t.length()-1).equals("?")) {
          t = ""+t + letraCapital( versos.get(i).texto() )+"\n";
        } else {
          t = ""+t + versos.get(i).texto()+"\n";
        }
      }
    }

    //DATOS//

    loc = "Buenos Aires";

    //GENERACIÓN DE FIRMA//

    firma = loc+",  "+mes()+"  "+year()+".";
  }

  void escribir() {
    text(t, 10, 0, width-10, height);
    textSize(15);
    textAlign(RIGHT);
    text(firma.toUpperCase(), width-10, height-100);
    println(t);
  }

  String texto() {
    return t;
  }
}