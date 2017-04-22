public String letraCapital(String txt) {
  String txtM = txt.substring(0, 1).toUpperCase() + txt.substring(1, txt.length());

  return txtM;
}