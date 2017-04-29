var tema; //0: calle, 1: noche, 2: plaza, 3:mar
var back, linea, times; //Recursos Gráficos
var locationData, json, lat, lon; //Datos Geográficos
var lug;
var alTi = 0;
var alFir = 0;
var al1 = 0;
var al2 = 0;
var ani = false;
var otraPagina = false;

function preload() {

 back = loadImage("data/back.jpg");
 times = loadFont("data/timesbd.otf");

 tema = floor(random(0, 3.99));

 /*if(geoCheck() === true){
  locationData =  getCurrentPosition();
 }else{
  lug = "";
 }*/
}

function setup() {
 createCanvas(windowWidth, windowHeight);

 est_1 = new Estrofa(byte(floor(random(3, 7.99))));
 est_2 = new Estrofa(byte(floor(random(3, 6.99))));
 est_3 = new Estrofa(byte(floor(random(2, 5.99))));
 est_4 = new Estrofa(byte(floor(random(5, 7.99))));
 est_5 = new Estrofa(byte(floor(random(4, 7.99))));

 ti = new Titulo(est_1.texto() + " " + est_2.texto() + " " + est_3.texto() + " " + est_4.texto() + " " + est_5.texto());

 ////GRAFICA GRAL////
 noStroke();
 textFont(times);
 frameRate(60);

 /*lat = locationData.latitude;
 lon = locationData.longitude;
 var url = "http://api.geonames.org/findNearbyPlaceNameJSON?lat="+lat+"&lng="+lon+"&lang=es&style=short&username=ibuioli";
 json = loadJSON(url, tenerDatos);*/
}

/*function tenerDatos(data){
  lug = data.results[1].address_components[0].short_name;

  draw();
}*/

function draw() {
 //Grafica
 background(233, 226, 198);
 imageMode(CORNER);
 image(back, 0, 0, width/2, height);

 if(width < height){
  image(back, 0, 0, width, height);
 }else{
  image(back, 0, 0, width/2, height);
  image(back, width/2, 0, width/2, height);
  imageMode(CENTER);
 }

 var can1 = est_1.c + est_2.c + est_3.c;
 var can2 = est_4.c + est_5.c;

 if (lug == "" || lug == undefined) {
  var firma = mes()+"  "+year()+".";
 } else {
  var firma = lug+",  "+mes()+"  "+year()+".";
 }

 if(ani === true){
  alTi = alTi - 15;
  al1 = al1 - 15;
  al2 = al2 - 15;
  alFir = alFir - 15;

  if(alFir === -20){
    est_1 = new Estrofa(byte(floor(random(3, 7.99))));
    est_2 = new Estrofa(byte(floor(random(3, 6.99))));
    est_3 = new Estrofa(byte(floor(random(2, 5.99))));
    est_4 = new Estrofa(byte(floor(random(5, 7.99))));
    est_5 = new Estrofa(byte(floor(random(4, 7.99))));

    ti = new Titulo(est_1.texto() + " " + est_2.texto() + " " + est_3.texto() + " " + est_4.texto() + " " + est_5.texto());

    ani = false;
  }

 } else {
  if(alTi < 250){
    alTi = alTi + 10;
  }
  if(alTi > 100){
    if(al1 < 250){
      al1 = al1 + 10;
    } 
  }
  if(al1 > 100){
    if(al2 < 250){
      al2 = al2 + 10;
    } 
  }
  if(al2 > 100){
    if(alFir < 250){
      alFir = alFir + 10;
    }
  }
 }

 fill(10, 8, 0, alTi);
 //TITULO
 textAlign(CENTER, TOP);
 textSize(map(width, 800, 1980, 24, 36));
 textLeading(map(width, 800, 1980, 24, 36));
 if(width < height){
   textSize(map(width, 800, 1980, 32, 48));
   textLeading(map(width, 800, 1980, 32, 48));
   text(ti.texto().toUpperCase(), 0, map(can1, 10, 18, 90, 30), width, 60);
   text(ti.texto().toUpperCase(), 1, map(can1, 10, 18, 90, 30), width, 60);
   text(ti.texto().toUpperCase(), -1, map(can1, 10, 18, 90, 30), width, 60);
 }else{
  text(ti.texto().toUpperCase(), 0, map(can1, 10, 18, 90, 30), width/2, 60);
  text(ti.texto().toUpperCase(), 1, map(can1, 10, 18, 90, 30), width/2, 60);
  text(ti.texto().toUpperCase(), -1, map(can1, 10, 18, 90, 30), width/2, 60);
 }

 //CUERPO DE TEXTO
 textAlign(LEFT, TOP);
 textSize(map(width, 800, 1980, 16, 30));
 textLeading(map(width, 800, 1980, 16, 30));

 fill(10, 8, 0, al1);
 if(width < height){
  textSize(map(width, 800, 1980, 24, 38));
  textLeading(map(width, 800, 1980, 24, 38));
  text(est_1.texto() + "\n\n" + est_2.texto() + "\n\n" + est_3.texto(), map(width, 800, 1980, 35, 86), map(can1, 10, 18, 150, 70)
  + map(height, 600, 768, 20, 70), width - map(width, 800, 1980, 50, 90), height);
 }else{
  text(est_1.texto() + "\n\n" + est_2.texto() + "\n\n" + est_3.texto(), map(width, 800, 1980, 35, 86), map(can1, 10, 18, 200, 90)
  + map(height, 600, 768, 20, 70), width/2 - map(width, 800, 1980, 50, 90), height);
  fill(10, 8, 0, al2);
  text(est_4.texto() + "\n\n" + est_5.texto(), width-width/2+map(width, 800, 1980, 35, 86), 40, width/2 - map(width, 800, 1980, 40, 90), height);
 }

 //FIRMA
 textAlign(RIGHT, BOTTOM);
 textSize(map(width, 800, 1980, 12, 20));
 fill(10, 8, 0, alFir);
 if(width < height){
  textSize(map(width, 800, 1980, 16, 22));
  text(firma.toUpperCase(), width-40, height - 40);
 }else{
  text(firma.toUpperCase(), width-40, height - map(can2, 9, 14, 280, 150) - map(height, 600, 1080, 1, 70) );
 }

 //RESTO
 if(alFir >= 250){
   if(mouseX >= width-50 && mouseX <= (width-50)+50 && 
    mouseY >= height-50 && mouseY <= (height-50)+50){
    otraPagina = true;
   }else{
    otraPagina = false;
   }
 }else{
  otraPagina = false;
 }

 if(otraPagina){
   cursor(HAND);
   fill(10, 255);
 }else{
   cursor(ARROW);
   fill(10, (cos(frameCount/6) * 100) + 140 );
 }
 triangle(width, height, width-50, height, width, height-50);
}

//INTERACCION
function mousePressed() {
 if(otraPagina){
  ani = true;
  tema = floor(random(0, 3.99));
 }
}
function keyPressed() {
  if(keyCode == 113) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}