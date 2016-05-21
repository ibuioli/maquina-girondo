/*Clase generadora de Versos*/
class Verso {
  String[] palabras;
  String verso;
  byte c, e;
  boolean exc, pre;

  Verso(byte c_, byte e_) {  //Cant. de Palabras, Estructura
    c = c_;
    e = e_;

    palabras = new String[c];

    /////////////////////////////////////////////////////////////
    ///////////////////////ESTRUCTURAS///////////////////////////

    if (c == 7 && e == 0) {
      palabras[0] = prep[(int)random(1, prep.length)];
      palabras[1] = resto[(int)random(1, resto.length)];
      palabras[2] = adjGenero(palabras[1]);
      if (random(0, 100) <= 50) {
        palabras[3] = "o";
      } else {
        palabras[3] = "y";
      }
      palabras[4] = prep[(int)random(1, prep.length)];
      palabras[5] = resto[(int)random(1, resto.length)];
      palabras[6] = adjGenero(palabras[5]);
    }else if(c == 7 && e == 1){
      palabras[0] = esPlural(4);
      palabras[1] = adjGenero(palabras[0]);
      palabras[2] = conj1[(int)random(1, conj1.length)];
      palabras[3] = prep[(int)random(1, prep.length)];
      palabras[4] = conArt(esPlural(3));
      palabras[5] = "de";
      palabras[6] = conArt(esPlural(2));
    }

    if (c == 6 && e == 0) {
      palabras[0] = "de";
      palabras[1] = resto[(int)random(1, resto.length)];
      palabras[2] = adjGenero(palabras[1]);
      palabras[3] = "y";
      palabras[4] = prenda[(int)random(1, prenda.length)];
      palabras[5] = adjGenero(palabras[4]);
    } else if (c == 6 && e == 1) {
      palabras[0] = persona[(int)random(1, persona.length)];
      palabras[1] = conVerb(palabras[0]);
      palabras[2] = prenda[(int)random(1, prenda.length)];
      palabras[3] = prep[(int)random(1, prep.length)];
      palabras[4] = conArt(cuerpo[(int)random(1, cuerpo.length)]);
      palabras[5] = adjGenero(palabras[4]);
    }

    if (c == 5 && e == 0) {
      palabras[0] = "les";
      palabras[1] = conj1[(int)random(1, conj1.length)];
      palabras[2] = esPlural(4);
      palabras[3] = "a";
      palabras[4] = conArt(persona[(int)random(1, persona.length)]);
    } else if (c == 5 && e == 1) {
      palabras[0] = conArt(resto[(int)random(1, resto.length)]);
      palabras[1] = "se";
      palabras[2] = conVerb(palabras[0]);
      palabras[3] = prep[(int)random(1, prep.length)];
      palabras[4] = conArt(resto[(int)random(1, resto.length)]);
    }

    if (c == 4 && e == 0) {
      palabras[0] = esPlural(2);
      palabras[1] = adjGenero(palabras[0]);
      palabras[2] = "de";
      palabras[3] = resto[(int)random(1, resto.length)];
    } else if (c == 4 && e == 1) {
      palabras[0] = "se";
      palabras[1] = conVerb(palabras[0])+"n";
      palabras[2] = prep[(int)random(1, prep.length)];
      palabras[3] = conArt(resto[(int)random(1, resto.length)]);
    }

    if (c == 3 && e == 0) {
      palabras[0] = inf[(int)random(1, inf.length)]+"se";
      if (random(0, 100) <= 50) {
        palabras[1] = "a";
      } else {
        palabras[1] = "en";
      }
      if (palabras[1].equals("en")) {
        palabras[2] = conArt(lugar[(int)random(1, lugar.length)]);
      } else {
        palabras[2] = conArt(esPlural(2));
      }
    } else if (c == 3 && e == 1) {
      palabras[0] = "están en";
      palabras[1] = conArt(lugar[(int)random(1, lugar.length)]);
      palabras[2] = adjGenero(palabras[1]);
    }

    if (c == 2 && e == 0) {
      palabras[0] = "sus";
      palabras[1] = esPlural(4);
    } else if (c == 2 && e == 1) {
      palabras[0] = "su";
      palabras[1] = esSingular(4);
    }

    if (c == 1 && e == 0) {
      palabras[0] = resto[(int)random(1, resto.length)];
    } else if (c == 1 && e == 1) {
      palabras[0] = inf[(int)random(1, inf.length)];
    }

    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////

    for (int i=0; i < palabras.length; i++) {
      if (verso == null) {
        verso = palabras[i];
      } else {
        verso = verso + " " + palabras[i];
      }
    }

    if (random(0, 100) <= 15) { //Exclamar o No
      exc = true;
    }

    if (exc == false && random(0, 100) <= 3) {
      pre = true;
    }

    //Correcciones de Texto
    if (verso.equals("") == false) {
      verso = verso.replace(" a el ", " al ");
      verso = verso.replace(" de el ", " del ");
    }
  }

  void escribir(int x, int y) {
    pushMatrix();
    translate(x, y);
    if (exc) {
      text("¡"+verso+"!", 0, 0);
    } else if (pre) {
      text("¿"+verso+"?", 0, 0);
    } else {
      text(verso, 0, 0);
    }
    println(verso);
    popMatrix();
  }
}