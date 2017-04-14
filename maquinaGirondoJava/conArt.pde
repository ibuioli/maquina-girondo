public String conArt(String sus2) {
  String fsus;
  String sub1 = sus2.substring(sus2.length()-1, sus2.length());
  boolean fem = false;
  boolean mas = false;

  for (int i=0; i < exeFem.length; i++) {
    if ( sus2.equals(exeFem[i]) ) {
      fem = true;
      mas = false;
    }
  }
  for (int i=0; i < exeMas.length; i++) {
    if ( sus2.equals(exeMas[i]) ) {
      mas = true;
      fem = false;
    }
  }

  if (sub1.equals("s") == false) {
    if (sub1.equals("a")) {
      if (mas == false) {
        fsus = "la "+sus2;
      } else {
        fsus = "el "+sus2;
      }
    } else if (sub1.equals("o")) {
      if (fem) {
        fsus = "la "+sus2;
      } else {
        fsus = "el "+sus2;
      }
    } else if (sub1.equals("z")) {
      String sub2 = sus2.substring(sus2.length()-2, sus2.length());
      if (sub2.equals("oz")) {
        fsus = "la "+sus2;
      } else {
        fsus = "el "+sus2;
      }
    } else {
      if (fem) {
        fsus = "la "+sus2;
      } else {
        fsus = "el "+sus2;
      }
    }
  } else if (sub1.equals("s")) {
    String sub2 = sus2.substring(sus2.length()-2, sus2.length());
    if (sub2.equals("as")) {
      if (mas == false) {
        fsus = "las "+sus2;
      } else {
        fsus = "los "+sus2;
      }
    } else if (sub2.equals("os")) {
      if (fem) {
        fsus = "las "+sus2;
      } else {
        fsus = "los "+sus2;
      }
    } else if (sub2.equals("es")) {
      if (fem) {
        fsus = "las "+sus2;
      } else {
        fsus = "los "+sus2;
      }
    } else {
      fsus = "el "+sus2;
    }
  } else {
    fsus = "el "+sus2;
  }

  return fsus;
}