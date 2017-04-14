public String esPlural(int caso){
  String sus2;
  if(caso == 0){
    sus2 = cuerpo[(int)random(1, cuerpo.length)];
  }else if(caso == 1){
    sus2 = lugar[(int)random(1, lugar.length)];
  }else if(caso == 2){
    sus2 = persona[(int)random(1, persona.length)];
  }else if(caso == 3){
    sus2 = prenda[(int)random(1, prenda.length)];
  }else{
    sus2 = resto[(int)random(1, resto.length)];
  }
  String sub1 = sus2.substring(sus2.length()-1, sus2.length());
  
  if (sub1.equals("s")) {
    return sus2;
  }else{
    return esPlural(caso);
  }
  
}