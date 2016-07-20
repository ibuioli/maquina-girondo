class Titulo {
  String t;
  String[] lista;

  Titulo(String poema_) {
    String poema = poema_;

    poema = poema.replace(" a ", " ");
    poema = poema.replace(" al ", " ");
    poema = poema.replace(" de ", " ");
    poema = poema.replace(" o ", " ");
    poema = poema.replace(" y ", " ");
    poema = poema.replace(" del ", " ");
    poema = poema.replace(" los ", " ");
    poema = poema.replace(" las ", " ");
    poema = poema.replace(" la ", " ");
    poema = poema.replace(" le ", " ");
    poema = poema.replace(" les ", " ");
    poema = poema.replace(" con ", " ");
    poema = poema.replace(" en ", " ");
    poema = poema.replace(" están ", " ");
    poema = poema.replace("están ", " ");
    poema = poema.replace("!", " ");
    poema = poema.replace("¡", " ");
    poema = poema.replace("?", " ");
    poema = poema.replace("¿", " ");
    poema = poema.replace(",", " ");
    poema = poema.replace(".", " ");
    poema = poema.replace(";", " ");
    poema = poema.replace("\n", " ");
    for (int i=0; i < conj1.length; i++) {
      poema = poema.replace(" "+conj1[i]+" ", " ");
    }
    for (int i=0; i < conj2.length; i++) {
      poema = poema.replace(" "+conj2[i]+" ", " ");
    }
    for (int i=0; i < prep.length; i++) {
      poema = poema.replace(" "+prep[i]+" ", " ");
    }
    poema = poema.replace("  ", " ");
    poema = poema.replace("   ", " ");
    lista = split(poema, ' ');
    
    float r = random(0, 100);

    if (r <= 20) {
      t = lug;
    } else if (r > 20 && r <= 25) {
      t = "Croquis en "+lug;
    } else if (r > 25 && r <= 30) {
      t = "Fiesta en "+lug;
    }else{
      t = lista[ int(random(0, lista.length-1)) ];
    }
  }

  String texto() {
    return t;
  }
}