import { Injectable } from '@angular/core';
import { SystemService } from './system.service';
import { GeoData } from './geodata';
import { Grammar } from './globals';
import { Exe } from './globals';
import { Vocabulary } from './globals';

@Injectable()
export class ToolsService {

  constructor(public s:SystemService) { }

  //PONER ARTICULO
  conArt(sus2:string) {
   let fsus;
   let sub1 = sus2.substring(sus2.length - 1, sus2.length);
   let fem = false;
   let mas = false;

   for (let i = 0; i < Exe.exeFem.length; i++) {
    if (sus2 === Exe.exeFem[i]) {
     fem = true;
     mas = false;
    }
   }
   for (let i = 0; i < Exe.exeMas.length; i++) {
    if (sus2 === Exe.exeMas[i]) {
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
     let sub2 = sus2.substring(sus2.length - 2, sus2.length);
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
    let sub2 = sus2.substring(sus2.length - 2, sus2.length);
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
  conVerb(sus2:string) {
   let sub1 = sus2.substring(sus2.length - 1, sus2.length);
   let verb;

   if (sub1 === "s") {
    verb = Vocabulary.conj1[this.s.random(1, Vocabulary.conj1.length)];
   } else {
    verb = Vocabulary.conj2[this.s.random(1, Vocabulary.conj2.length)];
   }

   return verb;
  }

  //PLURAL
  esPlural(caso) {
   let sus2;

   if (caso === 0) {
    sus2 = Vocabulary.cuerpo[this.s.random(1, Vocabulary.cuerpo.length)];
   } else if (caso == 1) {
    sus2 = Vocabulary.lugar[this.s.random(1, Vocabulary.lugar.length)];
   } else if (caso == 2) {
    sus2 = Vocabulary.persona[this.s.random(1, Vocabulary.persona.length)];
   } else if (caso == 3) {
    sus2 = Vocabulary.prenda[this.s.random(1, Vocabulary.prenda.length)];
   } else {
    sus2 = Vocabulary.resto[this.s.random(1, Vocabulary.resto.length)];
   }
   let sub1 = sus2.substring(sus2.length - 1, sus2.length);

   if (sub1 === "s") {
    return sus2;
   } else {
    return this.esPlural(caso);
   }
  }

  //SINGULAR
  esSingular(caso) {
   let sus2;

   if (caso === 0) {
    sus2 = Vocabulary.cuerpo[this.s.random(1, Vocabulary.cuerpo.length)];
   } else if (caso == 1) {
    sus2 = Vocabulary.lugar[this.s.random(1, Vocabulary.lugar.length)];
   } else if (caso == 2) {
    sus2 = Vocabulary.persona[this.s.random(1, Vocabulary.persona.length)];
   } else if (caso == 3) {
    sus2 = Vocabulary.prenda[this.s.random(1, Vocabulary.prenda.length)];
   } else {
    sus2 = Vocabulary.resto[this.s.random(1, Vocabulary.resto.length)];
   }
   let sub1 = sus2.substring(sus2.length - 1, sus2.length);

   if (sub1 !== "s") {
    return sus2;
   } else {
    return this.esSingular(caso);
   }
  }

  //ADJECTIVO
  adjGenero(sus2) {
   sus2 = sus2.replace("la ", "");
   sus2 = sus2.replace("las ", "");
   let adj2;
   let sub1 = sus2.substring(sus2.length - 1, sus2.length);
   let suadj = Vocabulary.adj[this.s.random(1, Vocabulary.adj.length)];
   let sadj;
   let vocal;
   let fem = false;
   let mas = false;
   let uletra = suadj.substring(suadj.length - 1, suadj.length);

   if (uletra === "l" || uletra === "r" || uletra === "e") {
    sadj = suadj;
    vocal = false;
   } else {
    sadj = suadj.substring(0, suadj.length - 1);
    vocal = true;
   }

   for (let i = 0; i < Exe.exeFem.length; i++) {
    if (sus2 === Exe.exeFem[i] || sus2 === this.s.letraCapital(Exe.exeFem[i]) ) {
     fem = true;
     mas = false;
    }
   }
   for (let i = 0; i < Exe.exeMas.length; i++) {
    if (sus2 === Exe.exeMas[i] || sus2 === this.s.letraCapital(Exe.exeMas[i]) ) {
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
      let sub2 = sus2.substring(sus2.length - 2, sus2.length);
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
     let sub2 = sus2.substring(sus2.length - 2, sus2.length);
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
     let suba2 = sadj.substring(suadj.length - 1, suadj.length);
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

  //TEMA
  temaLugar() {
   let nlugar = "";

   if(GeoData.tema === undefined){
    //tema = floor(random(0, 3.99));
   }

   if (GeoData.tema === 0) { //calle
    nlugar = Vocabulary.lugar[this.s.random(1, 20)];
  } else if (GeoData.tema == 1) { //noche
    nlugar = Vocabulary.lugar[this.s.random(20, 33)];
  } else if (GeoData.tema == 2) { //plaza
    nlugar = Vocabulary.lugar[this.s.random(33, 46)];
  } else if (GeoData.tema == 3) { //mar
    nlugar = Vocabulary.lugar[this.s.random(46, Vocabulary.lugar.length)];
   }

   return nlugar;
  }

}
