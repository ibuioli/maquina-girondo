public String temaLugar() {
  String nlugar = "";

  if (tema == 0) {  //calle
    nlugar = lugar[(int)random(1, 20)];
  } else if (tema == 1) {  //noche
    nlugar = lugar[(int)random(20, 33)];
  } else if (tema == 2) {  //plaza
    nlugar = lugar[(int)random(33, 46)];
  } else if (tema == 3) {  //mar
    nlugar = lugar[(int)random(46, lugar.length)];
  }

  return nlugar;
}