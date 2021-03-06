//INTERACTIVAS//
public void mouseDragged() {
  ppos += mouseX - pmouseX;
  alpha = int( map(ppos, -width/2, 0, 0, 250) );
}

public void mouseReleased() {
  if (ppos <= -width/3) {
    s = true;
    poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Nuevo Poema
    ppos = 0;
    alpha = 250;
  } else if (ppos > -width/3) {
    ppos = 0;
    alpha = 250;
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
public void requestData() {
  if (carga == false) {
    if (android) {
      if (sitio == null) {
        sitio = new KetaiLocation(this);
      }
      if (sitio.getProvider().equals("none")) {
        lug = "";
        slug = new String[0];
        tema = floor(random(0, 3.99));
      } else {
        if (isNetworkAvailable()) {
          json = loadJSONObject("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+"%2C"+lon+"&language=es");
          jsonx = loadJSONObject("http://api.geonames.org/findNearbyJSON?lat="+lat+"&lng="+lon+"&lang=es&style=short&username=ibuioli");
          jsonsitio = loadJSONObject("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+lat+","+lon+"&language=es&rankby=distance&types=establishment&key=AIzaSyCXodxfGv7qhVkx4-KJcAbFisjm020GvQI");
        } else {
          lug = "";
          slug = new String[0];
        }
        if (sitio.getProvider().equals("gps")) {
          if (isNetworkAvailable()) {
            if(json.getJSONArray("results").size() != 0){
              for (int i = 0; i < json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").size(); i++) {
                if(json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").getJSONObject(i).getJSONArray("types").size() > 1){
                  lug = json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").getJSONObject(i).getString("short_name");
                  
                  break;
                }
              }
              if(jsonsitio.getString("status").equals("OK") == true){
                slug = new String[jsonsitio.getJSONArray("results").size()];
                for(int i = 0; i < jsonsitio.getJSONArray("results").size(); i++){
                  slug[i] = limpiarSitios(jsonsitio.getJSONArray("results").getJSONObject(i).getString("name"));
                }
              }else{
                slug = new String[0];
              }
            }else{
              lug = "";
              slug = new String[0];
            }
          } else {
            lug = "";
            slug = new String[0];
          }
        } else {
          if (isNetworkAvailable()) {
            if(json.getJSONArray("results").size() != 0){
              for (int i = 0; i < json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").size(); i++) {
                if(json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").getJSONObject(i).getJSONArray("types").size() > 1){
                  lug = json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").getJSONObject(i).getString("short_name");

                  break;
                }
              }
              if(jsonsitio.getString("status").equals("OK") == true){
                slug = new String[jsonsitio.getJSONArray("results").size()];
                for(int i = 0; i < jsonsitio.getJSONArray("results").size(); i++){
                  slug[i] = limpiarSitios(jsonsitio.getJSONArray("results").getJSONObject(i).getString("name"));
                }
              }else{
                slug = new String[0];
              }
            }else{
              lug = "";
              slug = new String[0];
            }
          } else {
            lug = "";
            slug = new String[0];
          }
        }
        /*SELECCION TEMA*/
        if (isNetworkAvailable()) {
          if (jsonx.getJSONArray("geonames").size() != 0) {
            if (jsonx.getJSONArray("geonames").getJSONObject(0).getString("fcl").equals("H") ||
              jsonx.getJSONArray("geonames").getJSONObject(0).getString("fcl").equals("T") ||
              jsonx.getJSONArray("geonames").getJSONObject(0).getString("fcl").equals("U")) {
              if (noche) {
                tema = 1;
              } else {
                tema = 3;
              }
            } else if (jsonx.getJSONArray("geonames").getJSONObject(0).getString("fcl").equals("L") ||
              jsonx.getJSONArray("geonames").getJSONObject(0).getString("fcl").equals("V")) {
              if (noche) {
                tema = 1;
              } else {
                tema = 2;
              }
            } else {
              if (noche) {
                tema = 1;
              } else {
                tema = 0;
              }
            }
          } else {
            tema = floor(random(0, 3.99));
          }
        }else{
          tema = floor(random(0, 3.99));
        }
      }
    } else {
      lug = "";
      slug = new String[0];
      tema = floor(random(0, 3.99));   //Definir Tema
    }
    poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Cantidad de Versos
    carga = true;
  }
}