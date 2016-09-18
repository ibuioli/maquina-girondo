void mousePressed() {
  tema = floor(random(0, 3.99));
  poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
}

void onLocationEvent(double _lat, double _lon, double _alt)
{
  lon = _lon;
  lat = _lat;
  alt = _alt;
}