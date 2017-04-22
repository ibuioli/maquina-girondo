public class Titulo {
  String t;
  String[] lista;

  Titulo(String poema_) {
    String poema = poema_;

    poema = poema.replaceAll("\n", " ");
    poema = depurarPalabras(poema);
    poema = poema.replaceAll("\\!", " ");
    poema = poema.replaceAll("\\¡", " ");
    poema = poema.replaceAll("\\?", " ");
    poema = poema.replaceAll("\\¿", " ");
    poema = poema.replaceAll("\\,", " ");
    poema = poema.replaceAll("\\.", " ");
    poema = poema.replaceAll("\\;", " ");
    for (int i=0; i < conj1.length; i++) {
      poema = poema.replace(" "+conj1[i]+" ", " ");
    }
    for (int i=0; i < conj2.length; i++) {
      poema = poema.replace(" "+conj2[i]+" ", " ");
    }
    for (int i=0; i < inf.length; i++) {
      poema = poema.replace(" "+inf+" ", " ");
      poema = poema.replace(" "+inf+"se ", " ");
    }
    for (int i=0; i < prep.length; i++) {
      poema = poema.replace(" "+prep[i]+" ", " ");
    }
    poema = depurarPalabras(poema);
    lista = split(poema, ' ');

    float r = random(0, 100);

    if (lug.equals("")) {
      t = lista[ int(random(0, lista.length-1)) ];
    } else {
      if (r <= 20) {
        t = lug;
      } else if (r > 20 && r <= 30) {
        t = "Croquis en "+lug;
      } else if (r > 30 && r <= 35) {
        t = "Fiesta en "+lug;
      } else {
        t = lista[ int(random(0, lista.length-1)) ];
      }
    }

    if (t.equals("") || t.equals(" ")) {
      t = lista[ int(random(0, lista.length-1)) ];
    }
  }

  String texto() {
    return t;
  }
}