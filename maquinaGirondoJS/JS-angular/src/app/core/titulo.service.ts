import { Injectable } from '@angular/core';
import { GeoData } from './geodata';
import { SystemService } from './system.service';
import { Vocabulary } from './globals';
import { Grammar } from './globals';

@Injectable()
export class TituloService {

  constructor(public s:SystemService) { }

  Titulo(s) {
    let poem:string = s;
    let t:string;

    poem = poem.toLowerCase();
    poem = poem.replace(/\n/g, " ");
    poem = poem.replace(/\!/g, " ");
    poem = poem.replace(/\¡/g, " ");
    poem = poem.replace(/\?/g, " ");
    poem = poem.replace(/\¿/g, " ");
    poem = poem.replace(/\,/g, " ");
    poem = poem.replace(/\./g, " ");
    poem = poem.replace(/\;/g, " ");
    poem = poem.replace(/"/g, " ");

    for (let i=0; i < GeoData.slug.length; i++) {
      poem = poem.replace(GeoData.slug[i].toLowerCase(), " ");
    }

    for (let i=0; i < Vocabulary.conj1.length; i++) {
      poem = poem.replace(" "+Vocabulary.conj1[i]+" ", " ");
    }
    for (let i=0; i < Vocabulary.conj2.length; i++) {
      poem = poem.replace(" "+Vocabulary.conj2[i]+" ", " ");
    }
    for (let i=0; i < Vocabulary.inf.length; i++) {
      poem = poem.replace(" "+Vocabulary.inf[i]+" ", " ");
      poem = poem.replace(" "+Vocabulary.inf[i]+"se ", " ");
    }
    for (let i=0; i < Grammar.prep.length; i++) {
      poem = poem.replace(" "+Grammar.prep[i]+" ", " ");
    }
    for (let i=0; i < Grammar.nums.length; i++) {
      poem = poem.replace(" "+Grammar.nums[i]+" ", " ");
    }

    poem = this.depurarPalabras(poem);
    let lista = poem.split(' ');

    let r = this.s.random(0, 100);

    if (GeoData.lug == "" || GeoData.lug == undefined) {
      t = lista[this.s.random(0, lista.length)];
    } else {
      if (r <= 20) {
        t = GeoData.lug;
      } else if (r > 20 && r <= 30) {
        t = "Croquis en "+GeoData.lug;
      } else if (r > 30 && r <= 35) {
        t = "Fiesta en "+GeoData.lug;
      } else if (r > 35 && r <= 40){
        t = "Paisaje de "+GeoData.lug;
      } else {
        t = lista[this.s.random(0, lista.length)];
      }
    }

    if(t == "" || t == " "){
      if(r <= 50){
        t = Vocabulary.resto[this.s.random(1, Vocabulary.resto.length)];
      } else {
        t = "Apunte Callejero";
      }
    }

    return t;
  }

  depurarPalabras(pIn:string){
    let p = pIn;

    p = p.replace(/\sa\s/gi, " ");
    p = p.replace(/\bal\b/gi, " ");
    p = p.replace(/\bde\b/gi, " ");
    p = p.replace(/\bo\b/gi, " ");
    p = p.replace(/\by\b/gi, " ");
    p = p.replace(/\sel\s/gi, " ");
    p = p.replace(/\bel\b/gi, " ");
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
    p = p.replace(/\bcuando\b/gi, " ");
    p = p.trim().replace(/ +/g, " ")

    return p;
  }

}
