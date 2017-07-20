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

public String limpiarSitios(String s){
  s = s.replaceAll("(?i)\\bsrl\\b", "");
  s = s.replaceAll("(?i)\\bsa\\b", "");
  s = s.replaceAll("(?i)\\bco\\b", "");
  s = s.replaceAll("\\.", "");
  s = s.replaceAll("(?i)\\bn°\\b", "");
  //Remover Números
  s = s.replaceAll("[0-9]", "");

  return s;
}