var poema;
var prep, nums, adj;
var cuerpo, lugar, persona, prenda, resto;
var conj1, conj2, inf;
var exeFem, exeMas;
var tema; //0: calle, 1: noche, 2: plaza, 3:mar

function preload() {
 prep = loadStrings("data/preposiciones.txt");
 nums = loadStrings("data/nums.txt");
 exeFem = loadStrings("data/exeFem.txt");
 exeMas = loadStrings("data/exeMas.txt");

 cuerpo = loadStrings("data/vocabulario/sus/cuerpo.txt");
 lugar = loadStrings("data/vocabulario/sus/lugar.txt");
 persona = loadStrings("data/vocabulario/sus/persona.txt");
 prenda = loadStrings("data/vocabulario/sus/prenda.txt");
 resto = loadStrings("data/vocabulario/sus/resto.txt");
 adj = loadStrings("data/vocabulario/adj.txt");
 conj1 = loadStrings("data/vocabulario/verb/conj1.txt");
 conj2 = loadStrings("data/vocabulario/verb/conj2.txt");
 inf = loadStrings("data/vocabulario/verb/infinitivos.txt");

 tema = floor(random(0, 3.99));
}

function setup() {
 createCanvas(320, 480);

 poema = new Estrofa(byte(floor(random(3, 7.99))));
}

function draw() {

 background(255);

 poema.escribir();
 print(poema.fonetica());

 noLoop();
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
  this.t = "" + this.t + this.versos[i].texto() + "\n";
  this.fon = "" + this.fon + this.versos[i].fonetica() + ". ";
 }
 
 this.fon = this.fon.replace("undefined", "");

 this.escribir = function() {
  pop();
  textAlign(LEFT, CENTER);
  textSize(20);
  textLeading(20);
  text(this.t, 10, 0, width - 10, height);
  push();
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
  this.palabras[2] = lugar[int(random(1, lugar.length))];
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
  this.verso = "¡" + this.verso + "!";
 } else if (this.pre) {
  this.verso = "¿" + this.verso + "?";
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
  if (sus2 === exeFem[i] sus2 === letraCapital(exeFem[i]) ) {
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

//INTERACCION
function mousePressed() {
 tema = floor(random(0, 3.99));
 //linea = new Verso(byte(floor(random(1, 7.99))), byte(floor(random(0, 2.99))));
 poema = new Estrofa(byte(floor(random(3, 7.99)))); //Nuevo Poema
 draw();
}