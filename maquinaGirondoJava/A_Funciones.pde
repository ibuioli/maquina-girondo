//INTERACTIVAS//
public void mouseDragged() {
  ppos += mouseX - pmouseX;
  alpha = int( map(ppos, -width/2, 0, 0, 250) );
}

public void mouseReleased() {
  if (ppos <= -width/2) {
    s = true;
    poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
    ppos = 0;
    alpha = 250;
  } else if (ppos > -width/2) {
    ppos = 0;
    alpha = 250;
  }
}

//GRAFICAS//
public void startApp(){
  pushStyle();
  noStroke();
  fill(10, 8, 0, map(posxEl, width, map(height, 480, 1280, 100, 220), 120, 0) );
  ellipse(posxEl-map(height, 480, 1280, 50, 110), height-map(height, 480, 1280, 80, 160), map(height, 480, 1280, 50, 110), map(height, 480, 1280, 50, 110));
  popStyle();
  
  posxEl = lerp(posxEl, map(height, 480, 1280, 100, 220), map(height, 480, 1280, 0.05, 0.1));
  if(posxEl < map(height, 480, 1280, 100, 220)+2){
    posxEl = width;
  }
}

//GEOLOCALIZACION//
public void onLocationEvent(double _lat, double _lon, double _alt) {
  lon = _lon;
  lat = _lat;
  alt = _alt;
}

//VERSION ANDROID//
public boolean isNetworkAvailable() {
  ConnectivityManager connectivityManager = (ConnectivityManager)getActivity().getApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);

  NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
  return activeNetworkInfo != null;//Comentar para Java de Escritorio*/
  //return false;  //Comentar para Java en Android
}