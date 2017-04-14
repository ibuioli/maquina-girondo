public void mousePressed() {
  tema = floor(random(0, 3.99));
  poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
}

public void onLocationEvent(double _lat, double _lon, double _alt) {
  lon = _lon;
  lat = _lat;
  alt = _alt;
}

public boolean isNetworkAvailable() {
    ConnectivityManager connectivityManager = (ConnectivityManager)getActivity().getApplicationContext().getSystemService(Context.CONNECTIVITY_SERVICE);

    NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
    return activeNetworkInfo != null;
}