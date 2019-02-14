import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {

  constructor() { }

  //////////////////////////////////////////////////////////////
  // SYSTEM FUNs
  //////////////////////////////////////////////////////////////

  public letraCapital(txt: string): string {
    const txtM = txt.substring(0, 1).toUpperCase() + txt.substring(1, txt.length);

    return txtM;
  }

  // MES
  public dateEs(): string {
    let m: any;
    const d = new Date();
    const mes = d.getMonth();
    const a = d.getFullYear();

    switch (mes) {
      case 0:
        m = 'Enero';
        break;
      case 1:
        m = 'Febrero';
        break;
      case 2:
        m = 'Marzo';
        break;
      case 3:
        m = 'Abril';
        break;
      case 4:
        m = 'Mayo';
        break;
      case 5:
        m = 'Junio';
        break;
      case 6:
        m = 'Julio';
        break;
      case 7:
        m = 'Agosto';
        break;
      case 8:
        m = 'Septiembre';
        break;
      case 9:
        m = 'Octubre';
        break;
      case 10:
        m = 'Noviembre';
        break;
      case 11:
        m = 'Diciembre';
        break;
      default:
        m = '';
    }

    return m + ' ' + a;
  }

  public random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public map_range(value: number, low1: number, high1: number, low2: number, high2: number): number {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  }

  public constrain(value: number, low: number, high: number): number {
    return Math.min(Math.max(value, low), high);
  }

  public loadJSON(url: string, callback: any): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      const status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  }

}
