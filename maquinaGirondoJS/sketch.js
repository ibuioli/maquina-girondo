var prep, nums, adj;  //Preposiciones, Numeros, Adjetivos
var cuerpo, lugar, persona, prenda, resto;  //Sustantivos
var conj1, conj2, inf;  //Verbos
var exeFem, exeMas; //Ex
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

 prep = ["","de","de","de","de","de","de","de","de","de","de","de","de","con","con","con","con","a","a","a","para","para","por","por","sobre","sobre","entre","entre","sin","sin","hasta","bajo","ante","desde","contra","durante","hacia"];
 nums = ["","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","sesenta","ochenta","cien","cuatrocientos","mil"];
 exeFem = ["flores","paredes","ubres","calles","mujeres","mujer","electricidad","reunión","calle","redes","noches","noche","pared","gente","gentes","ciudad","cariátides","parte","mano","manos","erección","prestidigitación","oraciones","llave","densidad","rechonchez","visión","luz","luces","virgen","carne","vírgenes","multitud","llaves","intensión","gobernación","serpiente","narices","desilusión","dramaticidad","constelaciones","crispaciones","divagaciones"];
 exeMas = ["tranvía","cura","pederastas","paragua","paraguas","callicidas","lema"];

 cuerpo = ["","ancas","bigotes","brazo","cabellera","cabezas","cadera","cara","caras","cintura","costillas","cuello","dedo","dientes","gargantas","jeta","mamas","mano","meñique","narices","palmas","pelo","piel","poros","pubis","pulmones","pupila","quijada","tetas","tripas","lenguas","nalgas","lomo","cutis","espaldas","labios","pechos","pezones","brazos","piernas","pupilas","trasero","ubres","pies","cabeza","cabelleras","manos","sombras","sonrisas","dedos","nalgas","lomo","cutis","espaldas","labios","pechos","pezones","brazos","piernas","pupilas","trasero","ubres","pies","cabeza","cabelleras","manos","sombras","sonrisas","dedos"];
 lugar = ["","confitería","colegio","esquina","terrazas","vereda","calles","calle","quioscos","ciudad","calles","casas","calle","ciudad","vereda","iglesia","edificio","iglesia","quioscos","palacio","casino","tabernas","palacio","azoteas","balcones","azoteas","balcones","cariátides","edificio","casas","esquina","terrazas","desierto","paisaje","paraíso","país","plaza","circo","escenario","jardines","patios","jardines","patios","plaza","puerto","laguna","muelles","playa","puentes","laguna","playa","puentes","bahía","muelles","montañas"];
 persona = ["","artistas","bailarín","bañistas","camarera","chicuelos","ciegos","croupiers","dandy","esgrimista","gondoleros","guardianes","guardián","hembras","heroínas","julietas","ladrón","machos","marinero","nativos","negras","negra","payaso","prostituta","prostitutas","portera","puesto","salvavidas","señor","señora","vieja","viejecitas","sultán","soldados","sirvientas","pederastas","latinas","chicos","cura","mujer","transeúntes","marineros","gente","chicas","hombres","vigilante","bizcos","chicos","cura","mujer","transeúntes","marineros","gente","chicas","hombres","vigilante","bizcos","angelitos","vírgenes","virgen"];
 prenda = ["","antifaces","bolsillo","casulla","capa","corbata","corsé","escote","gorras","gorritos","mallas","manga","mantos","pantalones","velos","medias","bragueta","camisas","falda","jamelgos","zapatos","bragueta","camisas","falda","jamelgos","zapatos"];
 resto = ["","aceituna","ademanes","adioses","adulterio","alambre","alas","alcanfor","alcobas","alegría","alero","aleteo","alfiletero","alfombra","alga","aliento","alma","almendras","alquitrán","alrededor","alrededores","altar","altura","amapolas","amor","angustia","anticuario","apache","arcadas","arco","arena","aserrín","atrio","aullido","aurora","automóvil","ave","axilas","azahares","azotea","baba","baberos","bacará","badajos","baldes","bandadas","bandeja","bandoneón","barcas","barriga","barrio","basura","batas","bate","batuta","bengala","betún","bidé","billar","bolas","boleto","bomba","boscajes","bosque","botellas","botones","brisa","caballo","calafatea","callicidas","calorías","cama","campana","campanario","candombe","canillas","cansancio","canto","capiteles","capotas","caravanas","cargo","carnaza","carne","carril","cartas","cascada","caucho","cañerías","cañonazos","celo","cencerro","centavos","cera","champagne","chocolate","chulos","cielo","cigarrillo","cohete","cola","collares","colores","columnas","comparsas","constelaciones","consuelo","coraje","coral","corazones","corazón","corte","cortes","cosas","crispaciones","cristales","cruces","crucifijo","cría","crías","cubilete","cuerpo","dados","debajo","densidad","deseo","desilusión","desnudez","dinero","discursos","divagaciones","domingo","dramaticidad","duda","dulzor","décimos","día","eco","edificios","efebos","encaje","enjambre","envión","epidermis","epilepsia","equilibrio","erección","escalas","escamoteo","escobas","escupidera","esfera","espanto","espasmo","espejo","espera","esperezos","espinazo","espuma","esquinas","estandartes","estómagos","europeos","extracto","exvotos","fachadas","falos","familia","faro","flora","fondo","fotógrafos","foxtrot","fracaso","fragatas","frescor","friso","frituras","frutas","fuente","fuerzas","fósil","garfios","gato","gatos","gaviotas","gentes","gestos","globitos","gobernación","goma","gotas","grandor","gritos","grupo","guitarras","gusano","gusto","gárgaras","góndolas","heridas","hierro","higo","hombros","hora","horizontes","hueco","ictericia","idilios","iluminación","impuesto","instante","intención","iridiscencias","jauría","jazmín","lacrimatorio","lago","lastre","lechos","llagas","llave","llaves","lluvia","luces","luciérnagas","luminos","lágrimas","mandolinas","manzanas","marcos","mariposa","mañana","medio","mentiras","mingitorios","ministro","minutos","miradas","misterio","molino","monos","motivo","moños","muebles","multitud","murciélago","muñeco","mástiles","música","naufragio","nave","neblina","negligencia","niebla","notas","novelas","noviazgos","níquel","ojera","ola","olas","oleaje","oraciones","oro","paloma","palomas","papagayo","papeles","paraguas","parte","partido","paseos","pasos","patadas","pavos","peces","pedacitos","pelota","penumbra","peras","perlas","perra","perro","perros","pesca","piedra","pipa","piso","pistón","placa","plantas","plegaria","pliegues","plumero","polvo","pomo","porcelana","postal","postes","prestidigitación","puerta","punta","puntillas","pétalos","quinto","quiosco","rama","ramaje","razón","rechonchez","reja","reloj","remolque","remos","rincones","rincón","ritmo","ritmos","ritual","rocas","rompiente","rosa","rosas","rueda","salobres","sandía","santos","seguridad","semáforo","sensualismo","serpiente","sifones","siglos","sombrilla","sombrillas","sonrisa","sudor","suelo","supervivencia","suspiro","tabaco","tapete","tapices","tarascón","tarjeta","taza","techos","temperatura","ternura","terraza","tiras","toldos","topacio","toros","trayectorias","tristeza","trompadas","trote","té","uniforme","vals","ventanas","ventositas","verduras","vergüenza","victorias","vida","vidrios","virutas","visaje","visión","vuelo","zafiros","ópalo","agua","aire","canal","cordón","crepúsculo","cuerpos","estrellas","faroles","frente","golpe","luna","mal","mesas","miedo","par","paredes","sexo","sombra","tela","umbrales","velas","voz","asfalto","atardecer","automóviles","azúcar","banda","bandada","basta","bien","bombitas","café","calor","caminos","cohetes","color","electricidad","escaparates","escudo","estremecimientos","farol","grillo","hojas","lema","luz","mirada","noches","orangután","oído","palabras","palmeras","pan","pared","puertas","redes","reunión","rubí","ruedas","ruido","sacristía","salones","seda","susurro","telón","tiempo","tranvía","ventana","vuelta","vueltas","olor","mar","árboles","sol","noche","flores","papel","pedazo","silencio"];
 adj = ["","abierto","aceitado","acuático","afónico","ahorcada","algoso","amputada","ancestral","anestesiado","apagado","artesonado","azul","baboso","cloroformado","clueca","colgada","colorado","desgreñada","desnuda","destrozado","desteñida","desfachatada","corcovo","elevada","dulce","empavesado","empolvada","encandilado","enfermo","enflaquecido","enorme","enrojecida","ensangrentado","entreabierto","enyodada","espesa","estrangulado","estilizado","excesivo","falsa","fatal","florecido","flotante","fosforescentes","fracasado","ganado","hinchada","humedecido","humillado","hundida","idéntica","irascible","larga","llamativo","lleno","lustrado","madura","mayor","mercurizado","lunar","muerto","musgosa","nerviosa","nuevo","normal","nupcial","obligatorio","oscura","pantanoso","parecida","pequeño","pesado","pintado","pintarrajeada","plateado","plegada","precipitada","prendida","prendido","pulverizada","real","robada","rígido","romanza","sacra","sentada","sentado","semidesnudo","seco","solo","sucio","suntuosa","telefónico","tirado","tomada","tormentoso","trasnochada","traído","triste","urbana","vacío","verdoso","vestida","vestida","vestido","última","negro","pórfido","viejo","blanco","eléctrico","único","incrustado","tendido","cerrado","simple","negro","pórfido","viejo","blanco","eléctrico","único","incrustado","tendido","cerrado","simple","público","barbilampiño","cansado","convexa","corrosiva","culinaria","decapitada","humilde","mellizo","mofletudo","podrido","rojo","violeta","violácea","siniestro","azucarada","auténtico"];
 conj1 = ["","abren","acampan","acuestan","adelgazan","agarran","alargan","alimentan","apagan","apaguen","aprietan","aprovechan","arrastran","asfixiaran","barren","bañan","cantan","ciñen","comienzan","complican","dan","dejan","derraman","derritan","describan","despiertan","brindan","emocionan","empurpuren","enciendan","enjugan","enloquecen","enrojecen","ensucian","entretienen","espiritualizan","estiran","exhiben","exigen","existan","explican","explotan","eyaculen","fabrican","filtran","fingen","fornican","fuman","gastan","hunden","inyectan","juegan","liban","licuan","lustran","navegan","ofician","ordeñan","paran","pasaran","pasean","pegan","peinan","ponen","pudran","pueblan","quisieran","remiendan","repasan","riegan","saltan","salen","sudan","tejen","terminan","tiran","tragan","trasuntan","vacilan","vean","venden","viven","zambullen","hacen","van","cuelgan","dan","entran","estallan","quiebran","sacan","pintan","reintegran","tienen","usan","pasan","hacen","van","cuelgan","dan","entran","estallan","quiebran","sacan","pintan","reintegran","tienen","usan","pasan","bogan"];
 conj2 = ["","ablanda","acaba","agranda","amarra","ama","amasa","arpegia","aprovecha","aspira","atraviesa","buscando","canta","chasquea","constela","contradice","crucifica","da","derrama","derrumba","desmaya","destiñe","detiene","duerme","empantana","engorda","entreabre","fabrica","finge","fondea","gruñe","imanta","imita","impregna","incendia","juega","licua","lustra","mastica","mete","mira","ordeñe","pasea","perfuma","piensa","pone","respira","revive","roe","sabe","sangra","sigue","separa","sorbe","sufre","toma","trae","vende","apergamina","entra","tiene","hace","pasa","acuesta","basta","apergamina","entra","tiene","hace","pasa","acuesta","basta","celebra","conviene","comprende","hincha","ladra","raña","refrigera","simula","sofoca","arroja"];
 inf = ["","abrazar","abrir","acariciar","afeitar","apoyar","aprender","almibarar","caer","dejar","desembarazar","dormir","estallar","estrangular","fornicar","gritar","hacer","humear","impostar","llorar","madurar","mirar","pedir","perder","querer","rebotar","recordar","roer","saborear","sacar","sentir","tapar","tragar","transmitir","usar","ver","cantar","dar","llegar","pasar","frotar","cantar","dar","llegar","pasar","frotar","caminar","persignar"];

 back = loadImage("data/back.jpg");
 linea = loadImage("data/linea.jpg");
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

 ti = new Titulo();

 ////GRAFICA GRAL////
 noStroke();
 textFont(times);
 frameRate(60);

 /*lat = locationData.latitude;
 lon = locationData.longitude;
 var url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+"%2C"+lon+"&language=es";
 json = loadJSON(url, tenerDatos);*/
}

/*function tenerDatos(data){
  lug = data.results[1].address_components[0].short_name;

  draw();
}*/

function draw() {
 //Grafica
 background(30);
 imageMode(CORNER);
 image(back, 0, 0, width/2, height);

 if(width < height){
  image(back, 0, 0, width, height);
 }else{
  image(back, 0, 0, width/2, height);
  image(back, width/2, 0, width/2, height);
  imageMode(CENTER);
  image(linea, width/2, height/2, width/10, height);
 }

 var can1 = est_1.c + est_2.c + est_3.c;
 var can2 = est_4.c + est_5.c;

 if (lug == "" || lug == undefined) {
  var firma = mes()+"  "+year()+".";
 } else {
  var firma = lug+",  "+mes()+"  "+year()+".";
 }

 if(ani === true){
  alTi = alTi - 10;
  al1 = al1 - 10;
  al2 = al2 - 10;
  alFir = alFir - 10;

  if(alFir === -20){
    est_1 = new Estrofa(byte(floor(random(3, 7.99))));
    est_2 = new Estrofa(byte(floor(random(3, 6.99))));
    est_3 = new Estrofa(byte(floor(random(2, 5.99))));
    est_4 = new Estrofa(byte(floor(random(5, 7.99))));
    est_5 = new Estrofa(byte(floor(random(4, 7.99))));

    ti = new Titulo();

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

/*Clase generadora de Estrofa*/
function Estrofa(c_) {
 this.t;
 this.c = c_;

 this.palabras;
 this.estru;
 this.fon; //Fonetica

 this.enume;

 this.t = ""; //Evita el valor null inicial
 this.enume = 0; //Resetea la variable de enumeración

 this.versos = [];
 this.palabras = [this.c];
 this.estru = [this.c];

 for (var i = 0; i < this.c; i++) {
  if (i === 0) {
   this.palabras[i] = byte(floor(random(1, 7.99)));
   this.estru[i] = byte(floor(random(0, 2.99)));
  } else {
   if (this.palabras[i - 1] == byte(7) && this.estru[i - 1] == byte(1)) { //SIETE PALABRAS
    this.palabras[i] = 7;
    this.estru[i] = 0;
   } else if (this.palabras[i - 1] == byte(6) && this.estru[i - 1] == byte(1)) { //SEIS PALABRAS
    this.r = random(0, 100);

    if (this.r > 50) {
     this.palabras[i] = 5;
     this.estru[i] = 0;
    } else {
     this.palabras[i] = 3;
     this.estru[i] = 1;
    }
   } else if (this.palabras[i - 1] == byte(6) && this.estru[i - 1] == byte(2)) {
    this.r = random(0, 100);

    if (this.r > 50) {
     this.palabras[i] = 5;
     this.estru[i] = 0;
    } else {
     this.palabras[i] = 3;
     this.estru[i] = 1;
    }
   } else if (this.palabras[i - 1] == byte(4) && this.estru[i - 1] == byte(2)) { //CUATRO PALABRAS
    this.palabras[i] = 7;
    this.estru[i] = 0;
   } else if (this.palabras[i - 1] == byte(2) && this.estru[i - 1] == byte(0)) { //DOS PALABRAS
    this.r = random(0, 100);

    if (this.r > 50) {
     this.palabras[i] = 3;
     this.estru[i] = 1;
    } else {
     this.palabras[i] = 3;
     this.estru[i] = 2;
    }
   } else if (this.palabras[i - 1] == byte(2) && this.estru[i - 1] == byte(1)) {
    this.palabras[i] = 6;
    this.estru[i] = 0;
   } else if (this.palabras[i - 1] == byte(2) && this.estru[i - 1] == byte(2)) {
    this.palabras[i] = 3;
    this.estru[i] = 1;
   } else if (this.palabras[i - 1] == byte(1) && this.estru[i - 1] == byte(0)) { //UNA PALABRA
    if (this.enume < 2) {
     this.palabras[i] = byte(1);
     this.estru[i] = byte(0);
    } else {
     this.palabras[i] = byte(floor(random(1, 7.99)));
     this.estru[i] = byte(floor(random(0, 2.99)));
    }
    this.enume++;
   } else {
    this.palabras[i] = byte(floor(random(1, 7.99)));
    this.estru[i] = byte(floor(random(0, 2.99)));
   }
  }
 }

 for (i = 0; i < this.c; i++) { //Asignación de Versos
  this.versos[i] = new Verso(this.palabras[i], this.estru[i]);
 }

 for (i = 0; i < this.c; i++) { //Asignación de la Estrofa a la variable String
  if (i === 0) {
   this.t = "" + this.t + letraCapital(this.versos[i].texto()) + "\n";
  } else if (i == this.c - 1) {
   if (this.versos[i].texto().substring(this.versos[i].texto().length - 1, this.versos[i].texto().length) == "!" || this.versos[i].texto().substring(this.versos[i].texto().length - 1, this.versos[i].texto().length) == "?") {
    this.t = "" + this.t + this.versos[i].texto();
   } else {
    if (this.t.substring(this.t.length - 2, this.t.length - 1) == "!" || this.t.substring(this.t.length - 2, this.t.length - 1) == "?") {
     this.t = "" + this.t + letraCapital(this.versos[i].texto()) + ".\n";
    } else {
     this.t = "" + this.t + this.versos[i].texto() + ".\n";
    }
   }
  } else {

   if (this.t.substring(this.t.length - 2, this.t.length - 1) == "!" || this.t.substring(this.t.length - 2, this.t.length - 1) == "?") {
    this.t = "" + this.t + letraCapital(this.versos[i].texto()) + "\n";
   } else {
    this.t = "" + this.t + this.versos[i].texto() + "\n";
   }
  }
 }

 this.escribir = function() {
  textAlign(LEFT, CENTER);
  textSize(22);
  textLeading(22);
  text(this.t, 10, -height/8, width/2 - 10, height);
 }

 this.texto = function() {
  return this.t;
 }

 this.fonetica = function() {
  return this.fon;
 }
}

/*Clase generadora de Versos*/
function Verso(c_, r_) {
 this.c = c_;
 this.r = r_;

 this.palabras = [this.c];
 this.verso;
 this.exc = false;
 this.pre = false;
 this.comilla = false;
 this.nada = false;
 this.fon;

 /////////////////////////////////////////////////////////////
 ///////////////////////ESTRUCTURAS///////////////////////////

 if (this.c == 7 && this.r === 0) {
  this.palabras[0] = prep[int(random(1, prep.length))];
  this.palabras[1] = resto[int(random(1, resto.length))];
  this.palabras[2] = adjGenero(this.palabras[1]);
  if (random(0, 100) <= 50) {
   this.palabras[3] = "o";
  } else {
   this.palabras[3] = "y";
  }
  this.palabras[4] = prep[int(random(1, prep.length))];
  this.palabras[5] = resto[int(random(1, resto.length))];
  this.palabras[6] = adjGenero(this.palabras[5]);
 } else if (this.c == 7 && this.r == 1) {
  this.palabras[0] = esPlural(4);
  this.palabras[1] = adjGenero(this.palabras[0]) + ",";
  this.palabras[2] = conj1[int(random(1, conj1.length))];
  this.palabras[3] = prep[int(random(1, prep.length))];
  this.palabras[4] = conArt(esPlural(3));
  this.palabras[5] = "de";
  this.palabras[6] = conArt(esPlural(2));
 } else if (this.c == 7 && this.r == 2) {
  this.palabras[0] = esPlural(2);
  this.palabras[1] = adjGenero(this.palabras[0]);
  this.palabras[2] = "se";
  this.palabras[3] = conj1[int(random(1, conj1.length))];
  this.palabras[4] = "en";
  this.palabras[5] = conArt(temaLugar());
  this.palabras[6] = adjGenero(this.palabras[5]);
 }

 if (this.c == 6 && this.r === 0) {
  this.palabras[0] = "de";
  this.palabras[1] = resto[int(random(1, resto.length))];
  this.palabras[2] = adjGenero(this.palabras[1]);
  this.palabras[3] = "y";
  this.palabras[4] = prenda[int(random(1, prenda.length))];
  this.palabras[5] = adjGenero(this.palabras[4]);
 } else if (this.c == 6 && this.r == 1) {
  this.palabras[0] = persona[int(random(1, persona.length))];
  this.palabras[1] = conVerb(this.palabras[0]);
  this.palabras[2] = prenda[int(random(1, prenda.length))];
  this.palabras[3] = prep[int(random(1, prep.length))];
  this.palabras[4] = conArt(cuerpo[int(random(1, cuerpo.length))]);
  this.palabras[5] = adjGenero(this.palabras[4]);
 } else if (this.c == 6 && this.r == 2) {
  this.palabras[0] = esPlural(4);
  this.palabras[1] = prep[int(random(1, prep.length))];
  this.palabras[2] = nums[int(random(1, nums.length))];
  if (this.palabras[2] === "mil") {
   this.palabras[3] = "millones de";
  } else {
   this.palabras[3] = "mil";
  }
  this.palabras[4] = esPlural(0);
  this.palabras[5] = adjGenero(this.palabras[4]);
 }

 if (this.c == 5 && this.r === 0) {
  this.palabras[0] = "les";
  this.palabras[1] = conj1[int(random(1, conj1.length))];
  this.palabras[2] = esPlural(4);
  this.palabras[3] = "a";
  this.palabras[4] = conArt(persona[int(random(1, persona.length))]);
 } else if (this.c == 5 && this.r == 1) {
  this.palabras[0] = conArt(resto[int(random(1, resto.length))]);
  this.palabras[1] = "se";
  this.palabras[2] = conVerb(this.palabras[0]);
  this.palabras[3] = prep[int(random(1, prep.length))];
  this.palabras[4] = conArt(resto[int(random(1, resto.length))]);
 } else if (this.c == 5 && this.r == 2) {
  this.palabras[0] = nums[int(random(1, nums.length))];
  this.palabras[1] = esPlural(2);
  this.palabras[2] = conj1[int(random(1, conj1.length))];
  this.palabras[3] = "por";
  this.palabras[4] = conArt(temaLugar());
 }

 if (this.c == 4 && this.r === 0) {
  this.palabras[0] = esPlural(2);
  this.palabras[1] = adjGenero(this.palabras[0]);
  this.palabras[2] = "de";
  this.palabras[3] = resto[int(random(1, resto.length))];
 } else if (this.c == 4 && this.r == 1) {
  this.palabras[0] = "se";
  this.palabras[1] = conVerb(this.palabras[0]) + "n";
  this.palabras[2] = prep[int(random(1, prep.length))];
  this.palabras[3] = conArt(resto[int(random(1, resto.length))]);
 } else if (this.c == 4 && this.r == 2) {
  this.nada = true;
  this.palabras[0] = resto[int(random(1, resto.length))];
  this.palabras[1] = adjGenero(this.palabras[0]) + ".";
  this.palabras[2] = letraCapital(lugar[int(random(1, lugar.length))]);
  this.palabras[3] = adjGenero(this.palabras[2]);
 }

 if (this.c == 3 && this.r === 0) {
  this.palabras[0] = inf[int(random(1, inf.length))] + "se";
  if (random(0, 100) <= 50) {
   this.palabras[1] = "a";
  } else {
   this.palabras[1] = "en";
  }
  if (this.palabras[1] === "en") {
   this.palabras[2] = conArt(temaLugar());
  } else {
   this.palabras[2] = conArt(esPlural(2));
  }
 } else if (this.c == 3 && this.r == 1) {
  this.palabras[0] = "están en";
  this.palabras[1] = conArt(temaLugar());
  this.palabras[2] = adjGenero(this.palabras[1]);
 } else if (this.c == 3 && this.r == 2) {
  this.palabras[0] = "no";
  this.palabras[1] = conj1[int(random(1, conj1.length))];
  this.palabras[2] = conArt(esPlural(0));
 }

 if (this.c == 2 && this.r === 0) {
  this.palabras[0] = "sus";
  this.palabras[1] = esPlural(4);
 } else if (this.c == 2 && this.r == 1) {
  this.palabras[0] = "su";
  this.palabras[1] = esSingular(4);
 } else if (this.c == 2 && this.r == 2) {
  this.palabras[0] = nums[int(random(1, nums.length))];
  this.palabras[1] = esPlural(int(random(0, 4)));
 }

 if (this.c == 1 && this.r === 0) {
  this.palabras[0] = resto[int(random(1, resto.length))];
 } else if (this.c == 1 && this.r == 1) {
  this.palabras[0] = inf[int(random(1, inf.length))] + "se";
 } else if (this.c == 1 && this.r == 2) {
  if (int(random(0, 100)) < 70) {
   this.comilla = true;
  } else {
   this.comilla = false;
  }
  this.palabras[0] = prenda[int(random(1, prenda.length))];
 }

 /////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////

 for (i = 0; i < this.palabras.length; i++) {
  if (this.verso === null) {
   this.verso = this.palabras[i];
  } else {
   this.verso = this.verso + " " + this.palabras[i];
  }
 }

 if (this.nada === false) { //Verso Normal
  if (this.comilla === false) { //Comillas al verso
   if (random(0, 100) <= 15) { //Exclamar o No
    this.exc = true;
   }

   if (this.exc === false && random(0, 100) <= 2) { //Preguntar o No
    this.pre = true;
   }
  }
 }

 //Correcciones de Texto
 if (this.verso !== "") {
  this.verso = this.verso.replace("undefined ", "");
  this.verso = this.verso.replace(" a el ", " al ");
  this.verso = this.verso.replace(" de el ", " del ");
  //Corrección de errores excepcionales
  this.verso = this.verso.replace("violeto", "violeta");
  this.verso = this.verso.replace("violetos", "violetas");
  this.verso = this.verso.replace("la agua", "el agua");
 }
 if (this.exc) {
  this.verso = "¡" + letraCapital(this.verso) + "!";
 } else if (this.pre) {
  this.verso = "¿" + letraCapital(this.verso) + "?";
 }

 this.fon = this.verso;
 this.fon = this.fon.replace(" la ", " la, ");
 this.fon = this.fon.replace(" el ", " el, ");
 this.fon = this.fon.replace(" los ", " los, ");
 this.fon = this.fon.replace(" las ", " las, ");
 this.fon = this.fon.replace(" de ", " de, ");
 this.fon = this.fon.replace(" o ", " o, ");
 this.fon = this.fon.replace(" y ", " y, ");
 this.fon = this.fon.replace(" se ", " se, ");
 this.fon = this.fon.replace(" en ", " en, ");
 this.fon = this.fon.replace(" le ", " le, ");
 this.fon = this.fon.replace(" les ", " les, ");
 this.fon = this.fon.replace(" a ", " a, ");
 this.fon = this.fon.replace(" sin ", " sin, ");

 this.escribir = function() {
  push();
  text(this.verso, 10, height / 2);
  pop();
 }

 this.texto = function() {
  return this.verso;
 }

 this.fonetica = function() {
  return this.fon;
 }
}

function Titulo() {
  this.t;

  this.r = random(0, 100);

  if (lug == "" || lug == undefined) {
    if(this.r <= 5){
     this.t = "Apunte Callejero";
    }else if(this.r > 5 && this.r <= 35){
      if(tema === 0){
        if(this.r > 5 && this.r <= 25){
          this.t = "Croquis en la Calle";
        }else{
          this.t = "Fiesta en la Calle";
        }
      }else if(tema === 1){
        if(this.r > 5 && this.r <= 25){
          this.t = "Croquis en la Noche";
        }else{
          this.t = "Fiesta en la Noche";
        }
      }else if(tema === 2){
        if(this.r > 5 && this.r <= 25){
          this.t = "Croquis en la Plaza";
        }else{
          this.t = "Fiesta en la Plaza";
        }
      }else if(tema === 3){
        if(this.r > 5 && this.r <= 25){
          this.t = "Croquis en el Mar";
        }else{
          this.t = "Fiesta en el Mar";
        }
      }
    }else{
      this.t = resto[int(random(1, resto.length))];
    }
  } else {
    if (this.r <= 20) {
      this.t = lug;
    } else if (this.r > 20 && this.r <= 40) {
      this.t = "Croquis en "+lug;
    } else if (this.r > 40 && this.r <= 50) {
      this.t = "Fiesta en "+lug;
    } else if (this.r > 50 && this.r <= 55){ 
      this.t = "Apunte Callejero";
    } else {
      this.t = resto[int(random(1, resto.length))];
    }
  }

  if(this.t == "" || this.t == " "){
    if(r <= 50){
      this.t = resto[int(random(1, resto.length))];
    } else { 
      this.t = "Apunte Callejero";
    }
  }

  this.texto = function() {
    return this.t;
  }
}

//TEMA
function temaLugar() {
 var nlugar = "";

 if (tema === 0) { //calle
  nlugar = lugar[int(random(1, 20))];
 } else if (tema == 1) { //noche
  nlugar = lugar[int(random(20, 33))];
 } else if (tema == 2) { //plaza
  nlugar = lugar[int(random(33, 46))];
 } else if (tema == 3) { //mar
  nlugar = lugar[int(random(46, lugar.length))];
 }

 return nlugar;
}

//PONER ARTICULO
function conArt(sus2) {
 var fsus;
 var sub1 = sus2.substring(sus2.length - 1, sus2.length);
 var fem = false;
 var mas = false;

 for (i = 0; i < exeFem.length; i++) {
  if (sus2 === exeFem[i]) {
   fem = true;
   mas = false;
  }
 }
 for (i = 0; i < exeMas.length; i++) {
  if (sus2 === exeMas[i]) {
   mas = true;
   fem = false;
  }
 }

 if (sub1 !== "s") {
  if (sub1 === "a") {
   if (mas === false) {
    fsus = "la " + sus2;
   } else {
    fsus = "el " + sus2;
   }
  } else if (sub1 === "o") {
   if (fem) {
    fsus = "la " + sus2;
   } else {
    fsus = "el " + sus2;
   }
  } else if (sub1 === "z") {
   var sub2 = sus2.substring(sus2.length - 2, sus2.length);
   if (sub2 === "oz") {
    fsus = "la " + sus2;
   } else {
    fsus = "el " + sus2;
   }
  } else {
   if (fem) {
    fsus = "la " + sus2;
   } else {
    fsus = "el " + sus2;
   }
  }
 } else if (sub1 === "s") {
  sub2 = sus2.substring(sus2.length - 2, sus2.length);
  if (sub2 === "as") {
   if (mas === false) {
    fsus = "las " + sus2;
   } else {
    fsus = "los " + sus2;
   }
  } else if (sub2 === "os") {
   if (fem) {
    fsus = "las " + sus2;
   } else {
    fsus = "los " + sus2;
   }
  } else if (sub2 === "es") {
   if (fem) {
    fsus = "las " + sus2;
   } else {
    fsus = "los " + sus2;
   }
  } else {
   fsus = "el " + sus2;
  }
 } else {
  fsus = "el " + sus2;
 }

 return fsus;
}

//CONJUGAR VERBO
function conVerb(sus2) {
 var sub1 = sus2.substring(sus2.length - 1, sus2.length);
 var verb;

 if (sub1 === "s") {
  verb = conj1[int(random(1, conj1.length))];
 } else {
  verb = conj2[int(random(1, conj2.length))];
 }

 return verb;
}

//PLURAL
function esPlural(caso) {
 var sus2;
 if (caso === 0) {
  sus2 = cuerpo[int(random(1, cuerpo.length))];
 } else if (caso == 1) {
  sus2 = lugar[int(random(1, lugar.length))];
 } else if (caso == 2) {
  sus2 = persona[int(random(1, persona.length))];
 } else if (caso == 3) {
  sus2 = prenda[int(random(1, prenda.length))];
 } else {
  sus2 = resto[int(random(1, resto.length))];
 }
 var sub1 = sus2.substring(sus2.length - 1, sus2.length);

 if (sub1 === "s") {
  return sus2;
 } else {
  return esPlural(caso);
 }
}

//SINGULAR
function esSingular(caso) {
 var sus2;
 if (caso === 0) {
  sus2 = cuerpo[int(random(1, cuerpo.length))];
 } else if (caso == 1) {
  sus2 = lugar[int(random(1, lugar.length))];
 } else if (caso == 2) {
  sus2 = persona[int(random(1, persona.length))];
 } else if (caso == 3) {
  sus2 = prenda[int(random(1, prenda.length))];
 } else {
  sus2 = resto[int(random(1, resto.length))];
 }
 var sub1 = sus2.substring(sus2.length - 1, sus2.length);

 if (sub1 !== "s") {
  return sus2;
 } else {
  return esSingular(caso);
 }
}

//ADJECTIVO
function adjGenero(sus2) {
 sus2 = sus2.replace("la ", "");
 sus2 = sus2.replace("las ", "");
 var adj2;
 var sub1 = sus2.substring(sus2.length - 1, sus2.length);
 var suadj = adj[int(random(1, adj.length))];
 var sadj;
 var vocal;
 var fem = false;
 var mas = false;
 var uletra = suadj.substring(suadj.length - 1, suadj.length);

 if (uletra === "l" || uletra === "r" || uletra === "e") {
  sadj = suadj;
  vocal = false;
 } else {
  sadj = suadj.substring(0, suadj.length - 1);
  vocal = true;
 }

 for (i = 0; i < exeFem.length; i++) {
  if (sus2 === exeFem[i] || sus2 === letraCapital(exeFem[i]) ) {
   fem = true;
   mas = false;
  }
 }
 for (i = 0; i < exeMas.length; i++) {
  if (sus2 === exeMas[i] || sus2 === letraCapital(exeMas[i]) ) {
   mas = true;
   fem = false;
  }
 }

 if (sub1 !== "s") {
  if (vocal) {
   if (sub1 === "a") {
    if (mas === false) {
     adj2 = sadj + "a";
    } else {
     adj2 = sadj + "o";
    }
   } else if (sub1 === "o") {
    if (fem) {
     adj2 = sadj + "a";
    } else {
     adj2 = sadj + "o";
    }
   } else if (sub1 === "e") {
    if (fem) {
     adj2 = sadj + "a";
    } else {
     adj2 = sadj + "o";
    }
   } else if (sub1 === "z") {
    var sub2 = sus2.substring(sus2.length - 2, sus2.length);
    if (sub2 === "oz") {
     adj2 = sadj + "a";
    } else {
     if (fem) {
      adj2 = sadj + "a";
     } else {
      adj2 = sadj + "o";
     }
    }
   } else {
    if (fem) {
     adj2 = sadj + "a";
    } else {
     adj2 = sadj + "o";
    }
   }
  } else {
   if (fem) {
    adj2 = sadj + "a";
   } else if (mas) {
    adj2 = sadj + "o";
   } else {
    adj2 = sadj;
   }
  }
 } else if (sub1 === "s") {
  if (vocal) {
   var sub2 = sus2.substring(sus2.length - 2, sus2.length);
   if (sub2 === "as") {
    if (mas) {
     adj2 = sadj + "os";
    } else {
     adj2 = sadj + "as";
    }
   } else if (sub2 === "os") {
    if (fem) {
     adj2 = sadj + "as";
    } else {
     adj2 = sadj + "os";
    }
   } else if (sub2 === "es") {
    if (fem) {
     adj2 = sadj + "as";
    } else {
     adj2 = sadj + "os";
    }
   } else {
    adj2 = sadj + "o";
   }
  } else {
   var suba2 = sadj.substring(suadj.length - 1, suadj.length);
   if (suba2 === "e") {
    adj2 = sadj + "s";
   } else {
    adj2 = sadj + "es";
   }
  }
 } else {
  if (fem) {
   adj2 = sadj + "a";
  } else {
   adj2 = sadj + "o";
  }
 }

 return adj2;
}

function letraCapital(txt){
  var txtM = txt.substring(0, 1).toUpperCase() + txt.substring(1, txt.length);
  
  return txtM;
}

//MES
function mes() {
  var m;
  var mes = month();

  switch(mes) {
  case 1:
    m = "Enero";
    break;
  case 2:
    m = "Febrero";
    break;
  case 3:
    m = "Marzo";
    break;
  case 4:
    m = "Abril";
    break;
  case 5:
    m = "Mayo";
    break;
  case 6:
    m = "Junio";
    break;
  case 7:
    m = "Julio";
    break;
  case 8:
    m = "Agosto";
    break;
  case 9:
    m = "Septiembre";
    break;
  case 10:
    m = "Octubre";
    break;
  case 11:
    m = "Noviembre";
    break;
  case 12:
    m = "Diciembre";
    break;
  default:
    m = "";
  }

  return m;
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