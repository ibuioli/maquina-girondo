String adjGenero(String sus2) {
  String adj2;
  String sub1 = sus2.substring(sus2.length()-1, sus2.length());
  String suadj = adj[(int)random(1, adj.length)];
  String sadj;
  boolean vocal;
  boolean fem = false;
  String uletra = suadj.substring(suadj.length()-1, suadj.length());

  if (uletra.equals("l") || uletra.equals("r") || uletra.equals("e")) {
    sadj = suadj;
    vocal = false;
  } else {
    sadj = suadj.substring(0, suadj.length()-1);
    vocal = true;
  }

  for (int i=0; i < exeFem.length; i++) {
    if ( sus2.equals(exeFem[i]) ) {
      fem = true;
    }
  }

  if (sub1.equals("s") == false) {
    if (vocal) {
      if (sub1.equals("a")) {
        adj2 = sadj+"a";
      } else if (sub1.equals("o")) {
        adj2 = sadj+"o";
      } else if (sub1.equals("z")) {
        String sub2 = sus2.substring(sus2.length()-2, sus2.length());
        if (sub2.equals("oz")) {
          adj2 = sadj+"a";
        } else {
          adj2 = sadj+"o";
        }
      } else {
        if (fem) {
          adj2 = sadj+"a";
        } else {
          adj2 = sadj+"o";
        }
      }
    } else {
      adj2 = sadj;
    }
  } else if (sub1.equals("s")) {
    if (vocal) {
      String sub2 = sus2.substring(sus2.length()-2, sus2.length());
      if (sub2.equals("as")) {
        adj2 = sadj+"as";
      } else if (sub2.equals("os")) {
        adj2 = sadj+"os";
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
    adj2 = sadj;
  }

  return adj2;
}