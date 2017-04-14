public String adjGenero(String sus2) {
  sus2 = sus2.replace("la ", "");
  sus2 = sus2.replace("las ", "");
  String adj2;
  String sub1 = sus2.substring(sus2.length()-1, sus2.length());
  String suadj = adj[(int)random(1, adj.length)];
  String sadj;
  boolean vocal;
  boolean fem = false;
  boolean mas = false;
  String uletra = suadj.substring(suadj.length()-1, suadj.length());

  if (uletra.equals("l") || uletra.equals("r") || uletra.equals("e")) {
    sadj = suadj;
    vocal = false;
  } else {
    sadj = suadj.substring(0, suadj.length()-1);
    vocal = true;
  }

  for (int i=0; i < exeFem.length; i++) {
    if ( sus2.equals(exeFem[i]) || sus2.equals(letraCapital(exeFem[i])) ) {
      fem = true;
      mas = false;
    }
  }
  for (int i=0; i < exeMas.length; i++) {
    if ( sus2.equals(exeMas[i]) || sus2.equals(letraCapital(exeMas[i])) ) {
      mas = true;
      fem = false;
    }
  }

  if (sub1.equals("s") == false) {
    if (vocal) {
      if (sub1.equals("a")) {
        if (mas == false) {
          adj2 = sadj+"a";
        } else {
          adj2 = sadj+"o";
        }
      } else if (sub1.equals("o")) {
        if (fem) {
          adj2 = sadj+"a";
        } else {
          adj2 = sadj+"o";
        }
      } else if (sub1.equals("e")) {
        if (fem) {
          adj2 = sadj+"a";
        } else {
          adj2 = sadj+"o";
        }
      } else if (sub1.equals("z")) {
        String sub2 = sus2.substring(sus2.length()-2, sus2.length());
        if (sub2.equals("oz")) {
          adj2 = sadj+"a";
        } else {
          if (fem) {
            adj2 = sadj+"a";
          } else {
            adj2 = sadj+"o";
          }
        }
      } else {
        if (fem) {
          adj2 = sadj+"a";
        } else {
          adj2 = sadj+"o";
        }
      }
    } else {
      if (fem) {
        adj2 = sadj+"a";
      } else if (mas) {
        adj2 = sadj+"o";
      } else {
        adj2 = sadj;
      }
    }
  } else if (sub1.equals("s")) {
    if (vocal) {
      String sub2 = sus2.substring(sus2.length()-2, sus2.length());
      if (sub2.equals("as")) {
        if (mas) {
          adj2 = sadj+"os";
        } else {
          adj2 = sadj+"as";
        }
      } else if (sub2.equals("os")) {
        if (fem) {
          adj2 = sadj+"as";
        } else {
          adj2 = sadj+"os";
        }
      } else if (sub2.equals("es")) {
        if (fem) {
          adj2 = sadj+"as";
        } else {
          adj2 = sadj+"os";
        }
      } else {
        adj2 = sadj+"o";
      }
    } else {
      String suba2 = sadj.substring(suadj.length()-1, suadj.length());
      if (suba2.equals("e")) {
        adj2 = sadj+"s";
      } else {
        adj2 = sadj+"es";
      }
    }
  } else {
    if (fem) {
      adj2 = sadj+"a";
    } else {
      adj2 = sadj+"o";
    }
  }

  return adj2;
}