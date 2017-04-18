/***************************

 Máquina Girondo beta 1.3.1

 Processing versión: 3+
 KeTai versión: 12+

 **************************/

import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.content.Context;//Comentar para Java de Escritorio*/
import ketai.sensors.*;

/*LOCALIZACION*/
KetaiLocation sitio;
JSONObject json, jsonx;
String lug;

Estrofa poema;
String[] prep, nums, adj;
String[] cuerpo, lugar, persona, prenda, resto;
String[] conj1, conj2, inf;
String[] exeFem, exeMas;
PImage back;
PFont times;
double lat, lon, alt;
int tema;  //0: calle, 1: noche, 2: plaza, 3:mar
boolean noche;
int ppos;
int alpha = 250;
///////////////////
float posxEl;
boolean s;
///////////////////

//App de Celulares
boolean android = true;
//App de Escritorio
//boolean android = false;

boolean carga;

public void setup() {
  fullScreen();    //App Celulares
  //size(320, 480, P2D);  //App de Escritorio
  orientation(PORTRAIT);
  background(233, 226, 198);

  ////CARGA DE DATOS////

  prep = loadStrings("preposiciones.txt");
  nums = loadStrings("nums.txt");
  exeFem = loadStrings("exeFem.txt");
  exeMas = loadStrings("exeMas.txt");

  cuerpo = loadStrings("vocabulario/sus/cuerpo.txt");
  lugar = loadStrings("vocabulario/sus/lugar.txt");
  persona = loadStrings("vocabulario/sus/persona.txt");
  prenda = loadStrings("vocabulario/sus/prenda.txt");
  resto = loadStrings("vocabulario/sus/resto.txt");
  adj = loadStrings("vocabulario/adj.txt");
  conj1 = loadStrings("vocabulario/verb/conj1.txt");
  conj2 = loadStrings("vocabulario/verb/conj2.txt");
  inf = loadStrings("vocabulario/verb/infinitivos.txt");

  back = loadImage("back.jpg");
  back.resize(width, height);
  times = createFont("timesbd.ttf", 78, true);
  lug = "";

  ////DIA o NOCHE/////
  if (hour() >= 19 || hour() >= 0 && hour() <= 5) {
    noche = true;
  } else {
    noche = false;
  }

  ////GRAFICA GRAL////
  textFont(times);
  posxEl = width;
  pushStyle();
  fill(10, 8, 0, 250);
  textAlign(CENTER, CENTER);
  textSize(map(height, 480, 1280, 22, 36));
  text("Cargando...", width/2, height/2);
  popStyle();
}

public void draw() {
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

  image(back, 0, 0);

  pushMatrix();
  pushStyle();
  translate(ppos, 0);
  fill(10, 8, 0, alpha);
  poema.escribir();
  popStyle();
  popMatrix();

  if (s == false) {
    startApp();
  }
}