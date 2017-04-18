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
public void requestData() {
  if (carga == false) {
    if (android) {
      if (sitio == null) {
        sitio = new KetaiLocation(this);
      }
      if (sitio.getProvider().equals("none")) {
        lug = "";
        tema = floor(random(0, 3.99));
      } else {
        if (isNetworkAvailable()) {
          json = loadJSONObject("http://api.geonames.org/findNearbyPlaceNameJSON?lat="+lat+"&lng="+lon+"&lang=es&style=short&username=ibuioli");
          jsonx = loadJSONObject("http://api.geonames.org/findNearbyJSON?lat="+lat+"&lng="+lon+"&lang=es&style=short&username=ibuioli");
        } else {
          lug = "";
        }
        if (sitio.getProvider().equals("gps")) {
          if (isNetworkAvailable()) {
            if (json.getJSONArray("geonames").size() != 0) {
              lug = json.getJSONArray("geonames").getJSONObject(0).getString("name");
            } else {
              lug = "";
            }
          } else {
            lug = "";
          }
        } else {
          if (isNetworkAvailable()) {
            if (json.getJSONArray("geonames").size() != 0) {
              lug = json.getJSONArray("geonames").getJSONObject(0).getString("name");
            } else {
              lug = "";
            }
          } else {
            lug = "";
          }
        }
        /*SELECCION TEMA*/
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
      }
    } else {
      lug = "";
      tema = floor(random(0, 3.99));   //Definir Tema
    }
    lug = depCiudad(lug);
    poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Cantidad de Versos
    carga = true;
  }
}