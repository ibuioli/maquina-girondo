String depurarPalabras(String p) {
  p = p.replace(" a ", " ");
  p = p.replace(" al ", " ");
  p = p.replace(" de ", " ");
  p = p.replace(" o ", " ");
  p = p.replace(" y ", " ");
  p = p.replace(" el ", " ");
  p = p.replace(" del ", " ");
  p = p.replace(" los ", " ");
  p = p.replace(" las ", " ");
  p = p.replace(" la ", " ");
  p = p.replace(" le ", " ");
  p = p.replace(" les ", " ");
  p = p.replace(" con ", " ");
  p = p.replace(" en ", " ");
  p = p.replace(" su ", " ");
  p = p.replace(" sus ", " ");
  p = p.replace(" están ", " ");
  p = p.replace("están ", " ");
  p = p.replace(" si ", " ");
  p = p.replace(" se ", " ");
  p = p.replace(" no ", " ");
  p = p.replace("  ", " ");
  p = p.replace("   ", " ");
  p = p.replace("    ", " ");
  p = p.replace("     ", " ");
  p = p.replace("      ", " ");
  p = p.replace("       ", " ");

  return p;
}