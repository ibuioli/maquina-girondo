public String conVerb(String sus2){
  String sub1 = sus2.substring(sus2.length()-1, sus2.length());
  String verb;
  
  if(sub1.equals("s")){
    verb = conj1[(int)random(1, conj1.length)];
  }else{
    verb = conj2[(int)random(1, conj2.length)];
  }
  
  return verb;
}