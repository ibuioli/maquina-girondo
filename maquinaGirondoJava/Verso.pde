/*Clase generadora de Versos*/
public class Verso {
  String[] palabras;
  String verso;
  byte c, e;
  boolean exc, pre, comilla, nada;

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
    } else if (c == 7 && e == 1) {
      palabras[0] = esPlural(4);
      palabras[1] = adjGenero(palabras[0])+",";
      palabras[2] = conj1[(int)random(1, conj1.length)];
      palabras[3] = prep[(int)random(1, prep.length)];
      palabras[4] = conArt(esPlural(3));
      palabras[5] = "de";
      palabras[6] = conArt(esPlural(2));
    } else if (c == 7 && e == 2) {
      palabras[0] = esPlural(2);
      palabras[1] = adjGenero(palabras[0]);
      palabras[2] = "se";
      palabras[3] = conj1[(int)random(1, conj1.length)];
      palabras[4] = "en";
      palabras[5] = conArt(temaLugar());
      palabras[6] = adjGenero(palabras[5]);
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
    } else if (c == 6 && e == 2) {
      palabras[0] = esPlural(4);
      palabras[1] = prep[(int)random(1, prep.length)];
      palabras[2] = nums[(int)random(1, nums.length)];
      if (palabras[2].equals("mil")) {
        palabras[3] = "millones de";
      } else {
        palabras[3] = "mil";
      }
      palabras[4] = esPlural(0);
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
    } else if (c == 5 && e == 2) {
      palabras[0] = nums[(int)random(1, nums.length)];
      palabras[1] = esPlural(2);
      palabras[2] = conj1[(int)random(1, conj1.length)];
      palabras[3] = "por";
      palabras[4] = conArt(temaLugar());
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
    } else if (c == 4 && e == 2) {
      nada = true;
      palabras[0] = resto[(int)random(1, resto.length)];
      palabras[1] = adjGenero(palabras[0])+".";
      palabras[2] = lugar[(int)random(1, lugar.length)];
      palabras[3] = adjGenero(palabras[2]);
    }

    if (c == 3 && e == 0) {
      palabras[0] = inf[(int)random(1, inf.length)]+"se";
      if (random(0, 100) <= 50) {
        palabras[1] = "a";
      } else {
        palabras[1] = "en";
      }
      if (palabras[1].equals("en")) {
        palabras[2] = conArt(temaLugar());
      } else {
        palabras[2] = conArt(esPlural(2));
      }
    } else if (c == 3 && e == 1) {
      palabras[0] = "están en";
      palabras[1] = conArt(temaLugar());
      palabras[2] = adjGenero(palabras[1]);
    } else if (c == 3 && e == 2) {
      palabras[0] = "no";
      palabras[1] = conj1[(int)random(1, conj1.length)];
      palabras[2] = conArt(esPlural(0));
    }

    if (c == 2 && e == 0) {
      palabras[0] = "sus";
      palabras[1] = esPlural(4);
    } else if (c == 2 && e == 1) {
      palabras[0] = "su";
      palabras[1] = esSingular(4);
    } else if (c == 2 && e == 2) {
      palabras[0] = nums[(int)random(1, nums.length)];
      palabras[1] = esPlural((int)random(0, 4));
    }

    if (c == 1 && e == 0) {
      palabras[0] = resto[(int)random(1, resto.length)];
    } else if (c == 1 && e == 1) {
      palabras[0] = inf[(int)random(1, inf.length)]+"se";
    } else if (c == 1 && e == 2) {
      if ((int)random(0, 100) < 70) {
        comilla = true;
      } else {
        comilla = false;
      }
      palabras[0] = prenda[(int)random(1, prenda.length)];
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

    if (nada == false) {  //Verso Normal
      if (comilla == false) {  //Comillas al verso
        if (random(0, 100) <= 15) { //Exclamar o No
          exc = true;
        }

        if (exc == false && random(0, 100) <= 2) { //Preguntar o No
          pre = true;
        }
      }
    }

    //Correcciones de Texto
    if (verso.equals("") == false) {
      verso = verso.replace(" a el ", " al ");
      verso = verso.replace(" de el ", " del ");
      //Corrección de errores excepcionales
      verso = verso.replace("violeto", "violeta");
      verso = verso.replace("violetos", "violetas");
      verso = verso.replace("la agua", "el agua");
    }
    if (exc) {
      verso = "¡"+letraCapital(verso)+"!";
    } else if (pre) {
      verso = "¿"+letraCapital(verso)+"?";
    }
  }

  void escribir() {
    pushMatrix();
    text(verso, 0, 0);
    println(verso);
    popMatrix();
  }
  
  String texto(){
    return verso;
  }
}