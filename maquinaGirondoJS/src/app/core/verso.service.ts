import { Injectable } from '@angular/core';
import { ToolsService } from './tools.service';
import { SystemService } from './system.service';
import { GeoData } from './geodata';
import { Grammar } from './globals';
import { Exe } from './globals';
import { Vocabulary } from './globals';

@Injectable()
export class VersoService {

  constructor(public t: ToolsService, public s: SystemService) {}

  Verso(c: number/*Cantidad de palabras*/, r: number/*Entre 0 y 3*/) {
    let verso: any;
    const palabras: any = [c];

    let exc = false;
    let pre = false;
    let comilla = false;
    let nada = false;

    /////////////////////////////////////////////////////////////
    /////////////////////// ESTRUCTURAS//////////////////////////

    if (c === 7 && r === 0) {  // 7 PALABRAS
      palabras[0] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[1] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)];
      palabras[2] = this.t.adjGenero(palabras[1]);
      if (this.s.random(0, 100) <= 50) {
       palabras[3] = 'o';
      } else {
       palabras[3] = 'y';
      }
      palabras[4] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[5] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)];
      palabras[6] = this.t.adjGenero(palabras[5]);
     } else if (c === 7 && r === 1) {
      palabras[0] = this.t.esPlural(4);
      palabras[1] = this.t.adjGenero(palabras[0]) + ',';
      palabras[2] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[3] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[4] = this.t.conArt(this.t.esPlural(3));
      palabras[5] = 'de';
      palabras[6] = this.t.conArt(this.t.esPlural(2));
     } else if (c === 7 && r === 2) {
      palabras[0] = this.t.esPlural(2);
      palabras[1] = this.t.adjGenero(palabras[0]);
      palabras[2] = 'se';
      palabras[3] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[4] = 'en';
      palabras[5] = this.t.conArt(this.t.temaLugar());
      palabras[6] = this.t.adjGenero(palabras[5]);
     } else if (c === 7 && r === 3) {
      palabras[0] = 'de';
      palabras[1] = Vocabulary.cuerpo[this.s.random(0, Vocabulary.cuerpo.length)];
      palabras[2] = 'de';
      palabras[3] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)] + ',';
      palabras[4] = 'y';
      palabras[5] = this.t.conArt(Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)]);
      palabras[6] = this.t.adjGenero(palabras[5]);
     }

     if (c === 6 && r === 0) { // 6 PALABRAS
      palabras[0] = 'de';
      palabras[1] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)];
      palabras[2] = this.t.adjGenero(palabras[1]);
      palabras[3] = 'y';
      palabras[4] = Vocabulary.prenda[this.s.random(0, Vocabulary.prenda.length)];
      palabras[5] = this.t.adjGenero(palabras[4]);
     } else if (c === 6 && r === 1) {
      palabras[0] = Vocabulary.persona[this.s.random(0, Vocabulary.persona.length)];
      palabras[1] = this.t.conVerb(palabras[0]);
      palabras[2] = Vocabulary.prenda[this.s.random(0, Vocabulary.prenda.length)];
      palabras[3] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[4] = this.t.conArt(Vocabulary.cuerpo[this.s.random(0, Vocabulary.cuerpo.length)]);
      palabras[5] = this.t.adjGenero(palabras[4]);
     } else if (c === 6 && r === 2) {
      palabras[0] = this.t.esPlural(4);
      palabras[1] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[2] = Grammar.nums[this.s.random(0, Grammar.nums.length)];
      if (palabras[2] === 'mil') {
       palabras[3] = 'millones de';
      } else {
       palabras[3] = 'mil';
      }
      palabras[4] = this.t.esPlural(0);
      palabras[5] = this.t.adjGenero(palabras[4]);
     } else if (c === 6 && r === 3) {
      palabras[0] = 'cuando';
      palabras[1] = this.t.conArt(this.t.esSingular(4));
      palabras[2] = this.t.conVerb(palabras[1]);
      palabras[3] = this.t.conArt(this.t.temaLugar()) + ',';
      palabras[4] = 'es';
      if (this.s.random(0, 100) < 50) {
        palabras[5] = 'necesario';
      } else {
        palabras[5] = 'obligatorio';
      }
     }

     if (c === 5 && r === 0) { // 5 PALABRAS
      palabras[0] = 'les';
      palabras[1] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[2] = this.t.esPlural(4);
      palabras[3] = 'a';
      palabras[4] = this.t.conArt(Vocabulary.persona[this.s.random(0, Vocabulary.persona.length)]);
     } else if (c === 5 && r === 1) {
      palabras[0] = this.t.conArt(Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)]);
      palabras[1] = 'se';
      palabras[2] = this.t.conVerb(palabras[0]);
      palabras[3] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[4] = this.t.conArt(Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)]);
     } else if (c === 5 && r === 2) {
      palabras[0] = Grammar.nums[this.s.random(0, Grammar.nums.length)];
      palabras[1] = this.t.esPlural(2);
      palabras[2] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[3] = 'por';
      palabras[4] = this.t.conArt(this.t.temaLugar());
     } else if (c === 5 && r === 3) {
      palabras[0] = 'en';
      palabras[1] = this.t.conArt(Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)]);
      palabras[2] = 'que';
      palabras[3] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[4] = this.t.conArt(this.t.temaLugar());
     }

     if (c === 4 && r === 0) { // 4 PALABRAS
      palabras[0] = this.t.esPlural(2);
      palabras[1] = this.t.adjGenero(palabras[0]);
      palabras[2] = 'de';
      palabras[3] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)];
     } else if (c === 4 && r === 1) {
      palabras[0] = 'se';
      palabras[1] = this.t.conVerb(palabras[0]) + 'n';
      palabras[2] = Grammar.prep[this.s.random(0, Grammar.prep.length)];
      palabras[3] = this.t.conArt(Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)]);
     } else if (c === 4 && r === 2) {
      nada = true;
      palabras[0] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)];
      palabras[1] = this.t.adjGenero(palabras[0]) + '.';
      palabras[2] = this.s.letraCapital(Vocabulary.lugar[this.s.random(0, Vocabulary.lugar.length)]);
      palabras[3] = this.t.adjGenero(palabras[2]);
     } else if (c === 4 && r === 3) {
      palabras[0] = this.t.conArt(this.t.esPlural(2));
      palabras[1] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[2] = 'con';
      palabras[3] = this.t.conArt(this.t.temaLugar());
     }

     if (c === 3 && r === 0) { // 3 PALABRAS
      palabras[0] = Vocabulary.inf[this.s.random(0, Vocabulary.inf.length)] + 'se';
      if (this.s.random(0, 100) <= 50) {
       palabras[1] = 'a';
      } else {
       palabras[1] = 'en';
      }
      if (palabras[1] === 'en') {
       palabras[2] = this.t.conArt(this.t.temaLugar());
      } else {
       palabras[2] = this.t.conArt(this.t.esPlural(2));
      }
     } else if (c === 3 && r === 1) {
      palabras[0] = 'están en';
      palabras[1] = this.t.conArt(this.t.temaLugar());
      palabras[2] = this.t.adjGenero(palabras[1]);
     } else if (c === 3 && r === 2) {
      palabras[0] = 'no';
      palabras[1] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
      palabras[2] = this.t.conArt(this.t.esPlural(0));
     } else if (c === 3 && r === 3) {
      palabras[0] = this.t.conArt(this.t.temaLugar());
      palabras[1] = this.t.adjGenero(palabras[0]) + ',';
      palabras[2] = this.t.adjGenero(palabras[0]) + ',';
     }

     if (c === 2 && r === 0) {// 2 PALABRAS
      palabras[0] = 'sus';
      palabras[1] = this.t.esPlural(4);
     } else if (c === 2 && r === 1) {
      palabras[0] = 'su';
      palabras[1] = this.t.esSingular(4);
     } else if (c === 2 && r === 2) {
      palabras[0] = Grammar.nums[this.s.random(0, Grammar.nums.length)];
      palabras[1] = this.t.esPlural(this.s.random(0, 4));
     } else if (c === 2 && r === 3) {
      palabras[0] = 'no';
      palabras[1] = Vocabulary.conj1[this.s.random(0, Vocabulary.conj1.length)];
     }

     if (c === 1 && r === 0) {
      palabras[0] = Vocabulary.resto[this.s.random(0, Vocabulary.resto.length)] + ',';
     } else if (c === 1 && r === 1) {
      palabras[0] = Vocabulary.inf[this.s.random(0, Vocabulary.inf.length)] + 'se';
     } else if (c === 1 && r === 2) {
      if (this.s.random(0, 100) < 40) {
       comilla = true;
      } else {
       comilla = false;
      }
      palabras[0] = Vocabulary.prenda[this.s.random(0, Vocabulary.prenda.length)];
     } else if (c === 1 && r === 3) {
        if (GeoData.slug.length > 0) {
          comilla = true;
          palabras[0] = GeoData.slug[this.s.random(0, GeoData.slug.length)];
        } else {
          palabras[0] = Vocabulary.prenda[this.s.random(0, Vocabulary.prenda.length)];
        }
     }

     /////////////////////////////////////////////////////////////
     /////////////////////////////////////////////////////////////

     for (let i = 0; i < palabras.length; i++) {
      if (verso === null) {
       verso = palabras[i];
      } else {
       verso = verso + ' ' + palabras[i];
      }
     }
     verso = verso.replace(/\bundefined\b/g, ''); // Evita escribir "undefined"
     verso = verso.trim();

     if (nada === false) { // Verso Normal
      if (comilla === false) { // Comillas al verso
       if (this.s.random(0, 100) <= 15) { // Exclamar o No
        exc = true;
       }

       if (exc === false && this.s.random(0, 100) <= 2) { // Preguntar o No
        pre = true;
       }
      } else {
        verso = '"' + this.s.letraCapital(verso) + '"';
      }
     }

     if (exc) {
      verso = '¡' + this.s.letraCapital(verso) + '!';
     } else if (pre) {
      verso = '¿' + this.s.letraCapital(verso) + '?';
     }

     // Correcciones de Texto
     if (verso !== '') {
      // Corrección de errores excepcionales
      verso = verso.replace(/\bvioleto\b/g, 'violeta');
      verso = verso.replace(/\bvioletos\b/g, 'violetas');
      verso = verso.replace(/\bla agua\b/g, 'el agua');
      verso = verso.replace(/\bla alga\b/g, 'el alga');
      verso = verso.replace(/\,\!/, '!');
      verso = verso.replace(/\,\?/, '?');
      // Configuraciones generales
      verso = verso.replace(/\ba el\b/g, 'al');
      verso = verso.replace(/\bde el\b/g, 'del');
     }

     return verso;
  }

}
