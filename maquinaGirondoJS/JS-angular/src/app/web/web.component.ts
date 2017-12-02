import { Component, OnInit, DoCheck} from '@angular/core';
import { EstrofaService } from '../core/estrofa.service';
import { TituloService } from '../core/titulo.service';
import { SystemService } from '../core/system.service';
import { GeolocService } from '../core/geoloc.service';
import { GeoData } from '../core/geodata';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  title:string = '';
  poem1:string = '';
  poem2:string = '';
  poem3:string = '';
  poem4:string = '';
  sig:string = '';
  //////////////////
  check:boolean = false;
  /////////////////
  pMov:number;
  value:number = 0;

  constructor(public s: SystemService, public e: EstrofaService, public t: TituloService, public g:GeolocService){}

  ngOnInit(){}

  ngDoCheck(){
    let this_ = this;

    setTimeout(function(){
      if(GeoData.lug === undefined){
        GeoData.lug = "";
        GeoData.tema = this_.s.random(0, 3.99);
      }
    }, 8000);

    if(GeoData.lug !== undefined && GeoData.tema >= 0 && this.check === false){
      this.newPoem();
      this.check = true;
    }
  }

  nextPoemAni(){
    let this_ = this;

    document.getElementById("cont").classList.add("fadeOut");
    setTimeout(function(){
      this_.newPoem();
      document.getElementById("cont").classList.remove("fadeOut");
      document.getElementById("cont").classList.add("fadeIn");
      setTimeout(function(){
        document.getElementById("cont").classList.remove("fadeIn");
      }, 800);
    }, 1000);
  }

  newPoem(){

    this.check = false;
    let prePoem1 = this.e.Estrofa(this.s.random(5, 7));
    let prePoem2 = this.e.Estrofa(this.s.random(4, 6));
    let prePoem3 = this.e.Estrofa(this.s.random(6, 8));
    let prePoem4 = this.e.Estrofa(this.s.random(4, 7));
    ///////////////////////////////////////////////////////////////
    this.title = this.t.Titulo(prePoem1);
    ///////////////////////////////////////////////////////////////
    if(GeoData.lug !== ''){
      if(GeoData.lug == undefined){
        this.sig = this.s.dateEs()+".";
      }else{
        this.sig = GeoData.lug+", "+this.s.dateEs()+".";
      }
    }else{
      this.sig = this.s.dateEs()+".";
    }
    ///////////////////////////////////////////////////////////////
    //HTML FORMAT
    this.poem1 = prePoem1.replace(/\n/g, "<br />");
    this.poem2 = prePoem2.replace(/\n/g, "<br />");
    this.poem3 = prePoem3.replace(/\n/g, "<br />");
    this.poem4 = prePoem4.replace(/\n/g, "<br />");
    //
    this.check = true;

  }

}
