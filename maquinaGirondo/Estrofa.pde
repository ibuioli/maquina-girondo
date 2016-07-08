/*Clase generadora de Estrofa*/
class Estrofa {
  ArrayList<Verso> versos;
  String t, firma, loc;
  byte c;

  Estrofa(byte c_) {
    c = c_;  //Cantidad de Palabras

    t = "";  //Evita el valor null inicial

    versos = new ArrayList<Verso>();

    for (int i=0; i < c; i++) {  //Asignación de Versos
      versos.add(new Verso( byte( floor(random(1, 7.99)) ), byte( floor(random(0, 2.99) ) ) ) );
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