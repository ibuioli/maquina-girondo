/***************************
 
 Máquina Girondo beta 1.2.5
 
 Processing versión: 3+
 KeTai versión: 12+
 
 **************************/

import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.content.Context;//Comentar para Java de Escritorio*/
import ketai.sensors.*;

/*LOCALIZACION*/
KetaiLocation sitio;
JSONObject json;
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
int ppos;
int alpha = 250;

//App de Celulares
boolean android = true;
//App de Escritorio
//boolean android = false;

boolean carga;

public void setup() {
  fullScreen();    //App Celulares    
  orientation(PORTRAIT);
  //size(320, 480, P2D);  //App de Escritorio
  background(198, 186, 146);

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

  ////GRAFICA GRAL////
  textFont(times);
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
          json = loadJSONObject("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+"%2C"+lon+"&language=es");
        } else {
          lug = "";
        }
        if (sitio.getProvider().equals("gps")) {
          if (isNetworkAvailable()) {
            lug = json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").getJSONObject(2).getString("short_name");
          } else {
            lug = "";
          }
        } else {
          if (isNetworkAvailable()) {
            lug = json.getJSONArray("results").getJSONObject(1).getJSONArray("address_components").getJSONObject(0).getString("short_name");

            String n[] = match(lug, "[0-9]");

            if (n != null) {
              lug = json.getJSONArray("results").getJSONObject(0).getJSONArray("address_components").getJSONObject(2).getString("short_name");
            }
          } else {
            lug = "";
          }
        }
        tema = floor(random(0, 3.99));
      }
    } else {
      lug = "";
      tema = floor(random(0, 3.99));   //Definir Tema
    }
    poema = new Estrofa( byte( floor(random(3, 7.99)) ) );  //Cantidad de Versos
    carga = true;
  }

  background(198, 186, 146);
  image(back, 0, 0);
  
  pushMatrix();
  pushStyle();
  translate(ppos, 0);
  fill(10, 8, 0, alpha);
  poema.escribir();
  popStyle();
  popMatrix();
}