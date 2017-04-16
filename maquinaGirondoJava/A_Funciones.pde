public void mouseDragged() {
  ppos += mouseX - pmouseX;
  alpha = int( map(ppos, -width/2, 0, 0, 250) );
}

public void mouseReleased() {
  if (ppos <= -width/2) {
    tema = floor(random(0, 3.99));
    poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
    ppos = 0;
    alpha = 250;
  } else if (ppos > -width/2) {
    ppos = 0;
    alpha = 250;
  }
}

public void onLocationEvent(double _lat, double _lon, double _alt) {
  lon = _lon;
  lat = _lat;
  alt = _alt;
}

public boolean isNetworkAvailable() {
  ConnectivityManager connectivityManager = (ConnectivityManager)getActivity().getApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);

  NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
  return activeNetworkInfo != null;//Comentar para Java de Escritorio*/
  //return true;  //Comentar para Java en Android
}