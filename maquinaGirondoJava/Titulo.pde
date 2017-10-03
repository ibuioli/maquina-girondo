public class Titulo {
  String t;
  String[] lista;

  Titulo(String poema_) {
    String poema = poema_;
    
    for (int i=0; i < slug.length; i++) {
      poema = poema.replaceAll(slug[i], " ");
    }

    poema = poema.replaceAll("\n", " ");
    poema = poema.replaceAll("\\!", " ");
    poema = poema.replaceAll("\\¡", " ");
    poema = poema.replaceAll("\\?", " ");
    poema = poema.replaceAll("\\¿", " ");
    poema = poema.replaceAll("\\,", " ");
    poema = poema.replaceAll("\\.", " ");
    poema = poema.replaceAll("\\;", " ");
    poema = poema.replaceAll("\"", " ");
    
    for (int i=0; i < conj1.length; i++) {
      poema = poema.replaceAll("\\b"+conj1[i]+"\\b", " ");
    }
    for (int i=0; i < conj2.length; i++) {
      poema = poema.replaceAll("\\b"+conj2[i]+"\\b", " ");
    }
    for (int i=0; i < inf.length; i++) {
      poema = poema.replaceAll("\\b"+inf[i]+"\\b", " ");
      poema = poema.replaceAll("\\b"+inf[i]+"se\\b", " ");
    }
    for (int i=0; i < prep.length; i++) {
      poema = poema.replaceAll("\\b"+prep[i]+"\\b", " ");
    }
    for (int i=0; i < nums.length; i++) {
      poema = poema.replaceAll("\\b"+nums[i]+"\\b", " ");
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
      } else if (r > 35 && r <= 40) {
        t = "Paisaje de "+lug;
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