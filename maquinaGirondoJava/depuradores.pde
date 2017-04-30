public String depurarPalabras(String p) {
  p = p.replaceAll("\\ba\\b", " ");
  p = p.replaceAll("\\bal\\b", " ");
  p = p.replaceAll("\\bde\\b", " ");
  p = p.replaceAll("\\bo\\b", " ");
  p = p.replaceAll("\\by\\b", " ");
  p = p.replaceAll("\\bel\\b", " ");
  p = p.replaceAll("\\bdel\\b", " ");
  p = p.replaceAll("\\blos\\b", " ");
  p = p.replaceAll("\\blas\\b", " ");
  p = p.replaceAll("\\bla\\b", " ");
  p = p.replaceAll("\\ble\\b", " ");
  p = p.replaceAll("\\bles\\b", " ");
  p = p.replaceAll("\\bcon\\b", " ");
  p = p.replaceAll("\\ben\\b", " ");
  p = p.replaceAll("\\bsu\\b", " ");
  p = p.replaceAll("\\bsus\\b", " ");
  p = p.replaceAll("\\bestán\\b", " ");
  p = p.replaceAll("\\bes\\b", " ");
  p = p.replaceAll("\\bsi\\b", " ");
  p = p.replaceAll("\\bse\\b", " ");
  p = p.replaceAll("\\bno\\b", " ");
  p = p.replaceAll("\\bque\\b", " ");
  p = p.trim().replaceAll(" +", " ");
  
  return p;
}

public String depCiudad(String lug){
  String l = lug;
  l = l.replace("Palermo Hollywood", "Palermo");
  l = l.replace("General", "Gral.");
  l = l.replace("Presidente", "Pte.");

  return l;
}