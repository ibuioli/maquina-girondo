import { Injectable } from '@angular/core';
import { SystemService } from './system.service';
import { VersoService } from './verso.service';

@Injectable()
export class EstrofaService {

  constructor(public s:SystemService, public v:VersoService) { }

  Estrofa(c:number) {
   let t:string = "";
   let e:number = 3.99;

   let enume:number = 0;

   let versos:any = [];
   let palabras:any = [c];
   let estru:any = [c];

   for (let i = 0; i < c; i++) {
    if (i === 0) {
     palabras[i] = this.s.random(1, 7.99);
     estru[i] = this.s.random(0, e);
    } else {
     if (palabras[i - 1] == 7 && estru[i - 1] == 1) { //SIETE PALABRAS
      palabras[i] = 7;
      estru[i] = 0;
     } else if (palabras[i - 1] == 6 && estru[i - 1] == 1) { //SEIS PALABRAS
      let r = this.s.random(0, 100);

      if (r > 50) {
       palabras[i] = 5;
       estru[i] = 0;
      } else {
       palabras[i] = 3;
       estru[i] = 1;
      }
     } else if (palabras[i - 1] == 6 && estru[i - 1] == 2) {
      let r = this.s.random(0, 100);

      if (r > 50) {
       palabras[i] = 5;
       estru[i] = 0;
      } else {
       palabras[i] = 3;
       estru[i] = 1;
      }
     } else if (palabras[i - 1] == 4 && estru[i - 1] == 2) { //CUATRO PALABRAS
      palabras[i] = 7;
      estru[i] = 0;
     } else if (palabras[i - 1] == 2 && estru[i - 1] == 0) { //DOS PALABRAS
      let r = this.s.random(0, 100);

      if (r > 50) {
       palabras[i] = 3;
       estru[i] = 1;
      } else {
       palabras[i] = 3;
       estru[i] = 2;
      }
     } else if (palabras[i - 1] == 2 && estru[i - 1] ==1) {
      palabras[i] = 6;
      estru[i] = 0;
     } else if (palabras[i - 1] == 2 && estru[i - 1] == 2) {
      palabras[i] = 3;
      estru[i] = 1;
     } else if (palabras[i - 1] == 1 && estru[i - 1] == 0) { //UNA PALABRA
      if (enume < 2) {
       palabras[i] = 1;
       estru[i] = 0;
      } else {
       palabras[i] = this.s.random(1, 7.99);
       estru[i] = this.s.random(0, e);
      }
      enume++;
     } else {
      palabras[i] = this.s.random(1, 7.99);
      estru[i] = this.s.random(0, e);
     }
    }
   }

   for (let i = 0; i < c; i++) { //Asignación de Versos
     versos[i] = this.v.Verso(palabras[i], estru[i]);
   }

   for (let i = 0; i < c; i++) { //Asignación de la Estrofa a la variable String
    if (i === 0) {
     t = "" + t + this.s.letraCapital(versos[i]) + "\n";
    } else if (i == c - 1) {
     if (versos[i].substring(versos[i].length - 1, versos[i].length) == "!" || versos[i].substring(versos[i].length - 1, versos[i].length) == "?") {
      t = "" + t + versos[i];
     } else {
      if (t.substring(t.length - 2, t.length - 1) == "!" || t.substring(t.length - 2, t.length - 1) == "?") {
       t = "" + t + this.s.letraCapital(versos[i]) + ".\n";
      } else {
       t = "" + t + versos[i] + ".\n";
      }
     }
    } else {

     if (t.substring(t.length - 2, t.length - 1) == "!" || t.substring(t.length - 2, t.length - 1) == "?") {
      t = "" + t + this.s.letraCapital(versos[i]) + "\n";
     } else {
      t = "" + t + versos[i] + "\n";
     }
    }
   }

   //AJUSTES FINALES - POSTERIORES A LA PUNTUACIÓN
   t = t.replace(/\,\./g, ".");
   t = t.replace(/\bnecesario\./g, "necesario...");
   t = t.replace(/\bobligatorio\./g, "obligatorio...");

   return t;
  }
}
