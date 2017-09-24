/*Declaraciones*/
var tema; //0: calle, 1: noche, 2: plaza, 3:mar
var lug = "";
var slug = [];
var slug_pro = [];
var prep = ["","de","de","de","de","de","de","de","de","de","de","de","de","con","con","con","con","a","a","a","para","para","por","por","sobre","sobre","entre","entre","sin","sin","hasta","bajo","ante","desde","contra","durante","hacia"];
var nums = ["","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","sesenta","ochenta","cien","cuatrocientos","mil"];
var exeFem = ["flores","paredes","ubres","calles","mujeres","mujer","electricidad","reunión","calle","redes","noches","noche","pared","gente","gentes","ciudad","cariátides","parte","mano","manos","erección","prestidigitación","oraciones","llave","densidad","rechonchez","visión","luz","luces","virgen","carne","vírgenes","multitud","llaves","intensión","gobernación","serpiente","narices","desilusión","dramaticidad","constelaciones","crispaciones","divagaciones","piel","razón"];
var exeMas = ["tranvía","cura","pederastas","paragua","paraguas","callicidas","lema","día"];

var cuerpo = ["","ancas","bigotes","brazo","cabellera","cabezas","cadera","cara","caras","cintura","costillas","cuello","dedo","dientes","gargantas","jeta","mamas","mano","meñique","narices","palmas","pelo","piel","poros","pubis","pulmones","pupila","quijada","tetas","tripas","lenguas","nalgas","lomo","cutis","espaldas","labios","pechos","pezones","brazos","piernas","pupilas","trasero","ubres","pies","cabeza","cabelleras","manos","sombras","sonrisas","dedos","nalgas","lomo","cutis","espaldas","labios","pechos","pezones","brazos","piernas","pupilas","trasero","ubres","pies","cabeza","cabelleras","manos","sombras","sonrisas","dedos"];
var lugar = ["","confitería","colegio","esquina","terrazas","vereda","calles","calle","quioscos","ciudad","calles","casas","calle","ciudad","vereda","iglesia","edificio","iglesia","quioscos","palacio","casino","tabernas","palacio","azoteas","balcones","azoteas","balcones","cariátides","edificio","casas","esquina","terrazas","desierto","paisaje","paraíso","país","plaza","circo","escenario","jardines","patios","jardines","patios","plaza","puerto","laguna","muelles","playa","puentes","laguna","playa","puentes","bahía","muelles","montañas"];
var persona = ["","artistas","bailarín","bañistas","camarera","chicuelos","ciegos","croupiers","dandy","esgrimista","gondoleros","guardianes","guardián","hembras","heroínas","julietas","ladrón","machos","marinero","nativos","negras","negra","payaso","prostituta","prostitutas","portera","puesto","salvavidas","señor","señora","vieja","viejecitas","sultán","soldados","sirvientas","pederastas","latinas","chicos","cura","mujer","transeúntes","marineros","gente","chicas","hombres","vigilante","bizcos","chicos","cura","mujer","transeúntes","marineros","gente","chicas","hombres","vigilante","bizcos","angelitos","vírgenes","virgen"];
var prenda = ["","antifaces","bolsillo","casulla","capa","corbata","corsé","escote","gorras","gorritos","mallas","manga","mantos","pantalones","velos","medias","bragueta","camisas","falda","jamelgos","zapatos","bragueta","camisas","falda","jamelgos","zapatos"];
var resto = ["","aceituna","ademanes","adioses","adulterio","alambre","alas","alcanfor","alcobas","alegría","alero","aleteo","alfiletero","alfombra","alga","aliento","alma","almendras","alquitrán","alrededor","alrededores","altar","altura","amapolas","amor","angustia","anticuario","apache","arcadas","arco","arena","aserrín","atrio","aullido","aurora","automóvil","ave","axilas","azahares","azotea","baba","baberos","bacará","badajos","baldes","bandadas","bandeja","bandoneón","barcas","barriga","barrio","basura","batas","bate","batuta","bengala","betún","bidé","billar","bolas","boleto","bomba","boscajes","bosque","botellas","botones","brisa","caballo","calafatea","callicidas","calorías","cama","campana","campanario","candombe","canillas","cansancio","canto","capiteles","capotas","caravanas","cargo","carnaza","carne","carril","cartas","cascada","caucho","cañerías","cañonazos","celo","cencerro","centavos","cera","champagne","chocolate","chulos","cielo","cigarrillo","cohete","cola","collares","colores","columnas","comparsas","constelaciones","consuelo","coraje","coral","corazones","corazón","corte","cortes","cosas","crispaciones","cristales","cruces","crucifijo","cría","crías","cubilete","cuerpo","dados","debajo","densidad","deseo","desilusión","desnudez","dinero","discursos","divagaciones","domingo","dramaticidad","duda","dulzor","décimos","día","eco","edificios","efebos","encaje","enjambre","envión","epidermis","epilepsia","equilibrio","erección","escalas","escamoteo","escobas","escupidera","esfera","espanto","espasmo","espejo","espera","esperezos","espinazo","espuma","esquinas","estandartes","estómagos","europeos","extracto","exvotos","fachadas","falos","familia","faro","flora","fondo","fotógrafos","foxtrot","fracaso","fragatas","frescor","friso","frituras","frutas","fuente","fuerzas","fósil","garfios","gato","gatos","gaviotas","gentes","gestos","globitos","gobernación","goma","gotas","grandor","gritos","grupo","guitarras","gusano","gusto","gárgaras","góndolas","heridas","hierro","higo","hombros","hora","horizontes","hueco","ictericia","idilios","iluminación","impuesto","instante","intención","iridiscencias","jauría","jazmín","lacrimatorio","lago","lastre","lechos","llagas","llave","llaves","lluvia","luces","luciérnagas","luminos","lágrimas","mandolinas","manzanas","marcos","mariposa","mañana","medio","mentiras","mingitorios","ministro","minutos","miradas","misterio","molino","monos","motivo","moños","muebles","multitud","murciélago","muñeco","mástiles","música","naufragio","nave","neblina","negligencia","niebla","notas","novelas","noviazgos","níquel","ojera","ola","olas","oleaje","oraciones","oro","paloma","palomas","papagayo","papeles","paraguas","parte","partido","paseos","pasos","patadas","pavos","peces","pedacitos","pelota","penumbra","peras","perlas","perra","perro","perros","pesca","piedra","pipa","piso","pistón","placa","plantas","plegaria","pliegues","plumero","polvo","pomo","porcelana","postal","postes","prestidigitación","puerta","punta","puntillas","pétalos","quinto","quiosco","rama","ramaje","razón","rechonchez","reja","reloj","remolque","remos","rincones","rincón","ritmo","ritmos","ritual","rocas","rompiente","rosa","rosas","rueda","salobres","sandía","santos","seguridad","semáforo","sensualismo","serpiente","sifones","siglos","sombrilla","sombrillas","sonrisa","sudor","suelo","supervivencia","suspiro","tabaco","tapete","tapices","tarascón","tarjeta","taza","techos","temperatura","ternura","terraza","tiras","toldos","topacio","toros","trayectorias","tristeza","trompadas","trote","té","uniforme","vals","ventanas","ventositas","verduras","vergüenza","victorias","vida","vidrios","virutas","visaje","visión","vuelo","zafiros","ópalo","agua","aire","canal","cordón","crepúsculo","cuerpos","estrellas","faroles","frente","golpe","luna","mal","mesas","miedo","par","paredes","sexo","sombra","tela","umbrales","velas","voz","asfalto","atardecer","automóviles","azúcar","banda","bandada","basta","bien","bombitas","café","calor","caminos","cohetes","color","electricidad","escaparates","escudo","estremecimientos","farol","grillo","hojas","lema","luz","mirada","noches","orangután","oído","palabras","palmeras","pan","pared","puertas","redes","reunión","rubí","ruedas","ruido","sacristía","salones","seda","susurro","telón","tiempo","tranvía","ventana","vuelta","vueltas","olor","mar","árboles","sol","noche","flores","papel","pedazo","silencio"];
var adj = ["","abierto","aceitado","acuático","afónico","ahorcada","algoso","amputada","ancestral","anestesiado","apagado","artesonado","azul","baboso","cloroformado","clueca","colgada","colorado","desgreñada","desnuda","destrozado","desteñida","desfachatada","corcovo","elevada","dulce","empavesado","empolvada","encandilado","enfermo","enflaquecido","enorme","enrojecida","ensangrentado","entreabierto","enyodada","espesa","estrangulado","estilizado","excesivo","falsa","fatal","florecido","flotante","fosforescentes","fracasado","ganado","hinchada","humedecido","humillado","hundida","idéntica","irascible","larga","llamativo","lleno","lustrado","madura","mayor","mercurizado","lunar","muerto","musgosa","nerviosa","nuevo","normal","nupcial","obligatorio","oscura","pantanoso","parecida","pequeño","pesado","pintado","pintarrajeada","plateado","plegada","precipitada","prendida","prendido","pulverizada","real","robada","rígido","romanza","sacra","sentada","sentado","semidesnudo","seco","solo","sucio","suntuosa","telefónico","tirado","tomada","tormentoso","trasnochada","traído","triste","urbana","vacío","verdoso","vestida","vestida","vestido","última","negro","pórfido","viejo","blanco","eléctrico","único","incrustado","tendido","cerrado","simple","negro","pórfido","viejo","blanco","eléctrico","único","incrustado","tendido","cerrado","simple","público","barbilampiño","cansado","convexa","corrosiva","culinaria","decapitada","humilde","mellizo","mofletudo","podrido","rojo","violeta","violácea","siniestro","azucarada","auténtico"];
var conj1 = ["","abren","acampan","acuestan","adelgazan","agarran","alargan","alimentan","apagan","apaguen","aprietan","aprovechan","arrastran","asfixiaran","barren","bañan","cantan","ciñen","comienzan","complican","dan","dejan","derraman","derritan","describan","despiertan","brindan","emocionan","empurpuren","enciendan","enjugan","enloquecen","enrojecen","ensucian","entretienen","espiritualizan","estiran","exhiben","exigen","existan","explican","explotan","eyaculen","fabrican","filtran","fingen","fornican","fuman","gastan","hunden","inyectan","juegan","liban","licuan","lustran","navegan","ofician","ordeñan","paran","pasaran","pasean","pegan","peinan","ponen","pudran","pueblan","quisieran","remiendan","repasan","riegan","saltan","salen","sudan","tejen","terminan","tiran","tragan","trasuntan","vacilan","vean","venden","viven","zambullen","hacen","van","cuelgan","dan","entran","estallan","quiebran","sacan","pintan","reintegran","tienen","usan","pasan","hacen","van","cuelgan","dan","entran","estallan","quiebran","sacan","pintan","reintegran","tienen","usan","pasan","bogan"];
var conj2 = ["","ablanda","acaba","agranda","amarra","ama","amasa","arpegia","aprovecha","aspira","atraviesa","buscando","canta","chasquea","constela","contradice","crucifica","da","derrama","derrumba","desmaya","destiñe","detiene","duerme","empantana","engorda","entreabre","fabrica","finge","fondea","gruñe","imanta","imita","impregna","incendia","juega","licua","lustra","mastica","mete","mira","ordeñe","pasea","perfuma","piensa","pone","respira","revive","roe","sabe","sangra","sigue","separa","sorbe","sufre","toma","trae","vende","apergamina","entra","tiene","hace","pasa","acuesta","basta","apergamina","entra","tiene","hace","pasa","acuesta","basta","celebra","conviene","comprende","hincha","ladra","raña","refrigera","simula","sofoca","arroja"];
var inf = ["","abrazar","abrir","acariciar","afeitar","apoyar","aprender","almibarar","caer","dejar","desembarazar","dormir","estallar","estrangular","fornicar","gritar","hacer","humear","impostar","llorar","madurar","mirar","pedir","perder","querer","rebotar","recordar","roer","saborear","sacar","sentir","tapar","tragar","transmitir","usar","ver","cantar","dar","llegar","pasar","frotar","cantar","dar","llegar","pasar","frotar","caminar","persignar"];

/*Clase generadora de Estrofa*/
function Estrofa(c_) {
 this.t;
 this.c = c_;
 this.e = 3.99;

 this.palabras;
 this.estru;

 this.enume;

 this.t = ""; //Evita el valor null inicial
 this.enume = 0; //Resetea la variable de enumeración

 this.versos = [];
 this.palabras = [this.c];
 this.estru = [this.c];

 for (var i = 0; i < this.c; i++) {
  if (i === 0) {
   this.palabras[i] = byte(floor(random(1, 7.99)));
   this.estru[i] = byte(floor(random(0, this.e)));
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
     this.palabras[i] = 1;
     this.estru[i] = 0;
    } else {
     this.palabras[i] = byte(floor(random(1, 7.99)));
     this.estru[i] = byte(floor(random(0, this.e)));
    }
    this.enume++;
   } else {
    this.palabras[i] = byte(floor(random(1, 7.99)));
    this.estru[i] = byte(floor(random(0, this.e)));
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

  //AJUSTES FINALES - POSTERIORES A LA PUNTUACIÓN
  this.t = this.t.replace(/\,\./g, ".");
  this.t = this.t.replace(/\bnecesario\./g, "necesario...");
  this.t = this.t.replace(/\bobligatorio\./g, "obligatorio...");
 }

 this.escribir = function() {
  push();
  text(this.t, 10, 10, width, height);
  pop();
 }

 this.texto = function() {
  return this.t;
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
 } else if (this.c == 7 && this.r == 3) {
  this.palabras[0] = "de";
  this.palabras[1] = cuerpo[int(random(1, cuerpo.length))];
  this.palabras[2] = "de";
  this.palabras[3] = resto[int(random(1, resto.length))]+",";
  this.palabras[4] = "y";
  this.palabras[5] = conArt(resto[int(random(1, resto.length))]);
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
 } else if (this.c == 6 && this.r == 3) {
  this.palabras[0] = "cuando";
  this.palabras[1] = conArt(esSingular(4));
  this.palabras[2] = conVerb(this.palabras[1]);
  this.palabras[3] = conArt(temaLugar())+",";
  this.palabras[4] = "es";
  if(random(0, 100) < 50){
    this.palabras[5] = "necesario";
  }else{
    this.palabras[5] = "obligatorio";
  }
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
 } else if (this.c == 5 && this.r == 3) {
  this.palabras[0] = "en";
  this.palabras[1] = conArt(resto[int(random(1, resto.length))]);
  this.palabras[2] = "que";
  this.palabras[3] = conj1[int(random(1, conj1.length))];
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
 } else if (this.c == 4 && this.r == 3) {
  this.palabras[0] = conArt(esPlural(2));
  this.palabras[1] = conj1[int(random(1, conj1.length))];
  this.palabras[2] = "con";
  this.palabras[3] = conArt(temaLugar());
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
 } else if (this.c == 3 && this.r == 3) {
  this.palabras[0] = conArt(temaLugar());
  this.palabras[1] = adjGenero(this.palabras[0])+",";
  this.palabras[2] = adjGenero(this.palabras[0])+",";
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
 } else if (this.c == 2 && this.r == 3) {
  this.palabras[0] = "no";
  this.palabras[1] = conj1[int(random(1, conj1.length))];
 }

 if (this.c == 1 && this.r === 0) {
  this.palabras[0] = resto[int(random(1, resto.length))]+",";
 } else if (this.c == 1 && this.r == 1) {
  this.palabras[0] = inf[int(random(1, inf.length))] + "se";
 } else if (this.c == 1 && this.r == 2) {
  if (int(random(0, 100)) < 40) {
   this.comilla = true;
  } else {
   this.comilla = false;
  }
  this.palabras[0] = prenda[int(random(1, prenda.length))];
 } else if (this.c == 1 && this.r == 3) {
    if(slug.length > 0){
      this.comilla = true;
      this.palabras[0] = slug[int(random(0, slug.length))];
    }else{
      this.palabras[0] = prenda[int(random(1, prenda.length))];
    }
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
 this.verso = this.verso.replace(/\bundefined\b/g, "");
 this.verso = this.verso.trim();

 if (this.nada === false) { //Verso Normal
  if (this.comilla === false) { //Comillas al verso
   if (random(0, 100) <= 15) { //Exclamar o No
    this.exc = true;
   }

   if (this.exc === false && random(0, 100) <= 2) { //Preguntar o No
    this.pre = true;
   }
  }else{
  	this.verso = "\""+letraCapital(this.verso)+"\"";
  }
 }

 if (this.exc) {
  this.verso = "¡" + letraCapital(this.verso) + "!";
 } else if (this.pre) {
  this.verso = "¿" + letraCapital(this.verso) + "?";
 }

 //Correcciones de Texto
 if (this.verso !== "") {
  //Corrección de errores excepcionales
  this.verso = this.verso.replace(/\bvioleto\b/g, "violeta");
  this.verso = this.verso.replace(/\bvioletos\b/g, "violetas");
  this.verso = this.verso.replace(/\bla agua\b/g, "el agua");
  this.verso = this.verso.replace(/\bla alga\b/g, "el alga");
  this.verso = this.verso.replace(/\,\!/, "!");
  this.verso = this.verso.replace(/\,\?/, "?");
  //Configuraciones generales
  this.verso = this.verso.replace(/\ba el\b/g, "al");
  this.verso = this.verso.replace(/\bde el\b/g, "del");
 }

 this.escribir = function() {
  push();
  text(this.verso, 10, height / 2);
  pop();
 }

 this.texto = function() {
  return this.verso;
 }
}

function Titulo(s_) {
  this.poema = s_;
  this.t;

  for (i=0; i < slug.length; i++) {
    this.poema = this.poema.replace(slug[i], " ");
  }

  this.poema = this.poema.toLowerCase();
  this.poema = this.poema.replace(/\n/g, " ");
  this.poema = this.poema.replace(/\!/g, " ");
  this.poema = this.poema.replace(/\¡/g, " ");
  this.poema = this.poema.replace(/\?/g, " ");
  this.poema = this.poema.replace(/\¿/g, " ");
  this.poema = this.poema.replace(/\,/g, " ");
  this.poema = this.poema.replace(/\./g, " ");
  this.poema = this.poema.replace(/\;/g, " ");
  this.poema = this.poema.replace(/"/g, " ");

  for (i=0; i < conj1.length; i++) {
    this.poema = this.poema.replace(" "+conj1[i]+" ", " ");
  }
  for (i=0; i < conj2.length; i++) {
    this.poema = this.poema.replace(" "+conj2[i]+" ", " ");
  }
  for (i=0; i < inf.length; i++) {
    this.poema = this.poema.replace(" "+inf[i]+" ", " ");
    this.poema = this.poema.replace(" "+inf[i]+"se ", " ");
  }
  for (i=0; i < prep.length; i++) {
    this.poema = this.poema.replace(" "+prep[i]+" ", " ");
  }
  for (i=0; i < nums.length; i++) {
    this.poema = this.poema.replace(" "+nums[i]+" ", " ");
  }

  this.poema = depurarPalabras(this.poema);
  this.lista = split(this.poema, ' ');

  this.r = random(0, 100);

  if (lug == "" || lug == undefined) {
    this.t = this.lista[int(random(0, this.lista.length))];
  } else {
    if (this.r <= 20) {
      this.t = lug;
    } else if (this.r > 20 && this.r <= 30) {
      this.t = "Croquis en "+lug;
    } else if (this.r > 30 && this.r <= 35) {
      this.t = "Fiesta en "+lug;
    } else if (this.r > 35 && this.r <= 40){
      this.t = "Paisaje de "+lug;
    } else {
      this.t = this.lista[int(random(0, this.lista.length))];
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

 if(tema === undefined){
  tema = floor(random(0, 3.99));
 }

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

function depurarPalabras(p_){
  var p = p_;

  p = p.replace(/\sa\s/gi, " ");
  p = p.replace(/\bal\b/gi, " ");
  p = p.replace(/\bde\b/gi, " ");
  p = p.replace(/\bo\b/gi, " ");
  p = p.replace(/\by\b/gi, " ");
  p = p.replace(/\sel\s/gi, " ");
  p = p.replace(/\bdel\b/gi, " ");
  p = p.replace(/\blos\b/gi, " ");
  p = p.replace(/\blas\b/gi, " ");
  p = p.replace(/\bla\b/gi, " ");
  p = p.replace(/\ble\b/gi, " ");
  p = p.replace(/\bles\b/gi, " ");
  p = p.replace(/\bcon\b/gi, " ");
  p = p.replace(/\ben\b/gi, " ");
  p = p.replace(/\bsu\b/gi, " ");
  p = p.replace(/\bsus\b/gi, " ");
  p = p.replace(/\bestán\b/gi, " ");
  p = p.replace(/\bes\b/gi, " ");
  p = p.replace(/\bsi\b/gi, " ");
  p = p.replace(/\bse\b/gi, " ");
  p = p.replace(/\bno\b/gi, " ");
  p = p.replace(/\bque\b/gi, " ");
  p = p.trim().replace(/ +/g, " ")

  return p;
}

//LIMPIADOR DE NOMBRES-SITIOS
function limpiarSitios(s_){
  var s = s_;

  s = s.replace(/\bsrl\b/gi, "");
  s = s.replace(/\bsa\b/gi, "");
  s = s.replace(/\bco\b/gi, "");
  s = s.replace(/\./g, "");
  s = s.replace(/\bn°/gi, "");
  //Remover Números
  s = s.replace(/[0-9\.]+/g, "");

  return s;
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
