void mousePressed() {
  if (android) {
    if (sitio.getProvider() == "none") {
      lug = "";
      tema = floor(random(0, 3.99));   //Nueva Tema Aleatorio
    } else {
      json = loadJSONObject("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+"%2C"+lon+"&language=es");
      lug = json.getJSONArray("results").getJSONObject(1).getJSONArray("address_components").getJSONObject(0).getString("short_name");
      tema = floor(random(0, 3.99));
    }
  }else{
    tema = floor(random(0, 3.99));
  }
  poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
}

void onLocationEvent(double _lat, double _lon, double _alt)
{
  lon = _lon;
  lat = _lat;
  alt = _alt;
}