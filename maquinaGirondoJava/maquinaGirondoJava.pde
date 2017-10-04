//DISCONTINUADO - Usar versión JS-Android//
/***************************
 
 Máquina Girondo
 versión Java
 
 Processing ver: 3+
 lib KeTai ver: 12+
 
 **************************/

import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.content.Context;//Comentar para Java de Escritorio*/
import ketai.sensors.*;

/*LOCALIZACION*/
KetaiLocation sitio;
JSONObject json, jsonx, jsonsitio;
String lug;
String[] slug;

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

  ////CARGA GRAL/////
  thread("requestData");
  
}

public void draw() {
  background(233, 226, 198);
  image(back, 0, 0);

  if (!carga) {
    loader();
  } else {
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
}
