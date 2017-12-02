import { Component, OnInit, DoCheck, ElementRef, Renderer } from '@angular/core';
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
  sig:string = '';
  //////////////////
  check:boolean = false;
  /////////////////
  pMov:number;
  value:number = 0;

  constructor(public s: SystemService, public e: EstrofaService, public t: TituloService, public g:GeolocService,
  public el: ElementRef, public renderer: Renderer){
    let this_ = this;

    renderer.listenGlobal('document', 'touchmove', (e) => {
      if(this_.pMov === undefined){
        this_.pMov = e.touches[0].clientX;
      }
      this_.value += e.touches[0].clientX - this_.pMov;

      document.getElementById('cont').style.opacity =
      this_.s.constrain(this_.s.map_range(this_.value, 0, -200, 0.97, 0.2), 0.2, 0.97).toString();

      document.getElementById('cont').style.left = this_.value.toString()+"px";

      this_.pMov = e.touches[0].clientX;
    });

    renderer.listenGlobal('document', 'touchend', (e) => {
      document.getElementById('cont').style.opacity = "0.97";
      document.getElementById('cont').style.left = "0px";
    });
  }

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
    let prePoem1 = this.e.Estrofa(this.s.random(7, 11));
    let prePoem2 = this.e.Estrofa(this.s.random(10, 16));
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
    //
    this.check = true;

  }

}
