import { Component, OnInit, DoCheck, ElementRef, Renderer2 } from '@angular/core';
import { EstrofaService } from '../core/estrofa.service';
import { TituloService } from '../core/titulo.service';
import { SystemService } from '../core/system.service';
import { GeolocService } from '../core/geoloc.service';
import { GeoData } from '../core/geodata';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit, DoCheck {
  title = '';
  poem = '';
  sig = '';
  //////////////////
  check = false;
  /////////////////
  pMov: number;
  value = 0;

  constructor(public s: SystemService, public e: EstrofaService, public t: TituloService, public g: GeolocService,
  public el: ElementRef, public renderer: Renderer2) {
    const this_ = this;

    renderer.listen('document', 'touchmove', (e: any) => {
    if (this_.pMov === undefined) {
        this_.pMov = e.touches[0].clientX;
    }
    this_.value += e.touches[0].clientX - this_.pMov;
    document.getElementById('cont').style.opacity =
        this_.s.constrain(this_.s.map_range(this_.value, 0, -200, 0.97, 0.2), 0.2, 0.97).toString();
    document.getElementById('cont').style.left = this_.value.toString() + 'px';
    this_.pMov = e.touches[0].clientX;
});

    renderer.listen('document', 'touchend', (e: any) => {
    document.getElementById('cont').style.opacity = '0.97';
    document.getElementById('cont').style.left = '0px';
});
  }

  ngOnInit() {}

  public ngDoCheck(): void {
    const this_ = this;

    setTimeout(function() {
      if (GeoData.lug === undefined) {
        GeoData.lug = '';
        GeoData.tema = this_.s.random(0, 3.99);
      }
    }, 8000);

    if (GeoData.lug !== undefined && GeoData.tema >= 0 && this.check === false) {
      this.newPoem(0);
      this.check = true;
    }
  }

  public newPoem(e: any): void {
    let posX: any;

    if (Number.isInteger(e)) {
      posX = e;
    } else {
      posX = e.changedTouches[0].clientX;
    }

    if (posX < (screen.width / 2) ) {
      this.check = false;
      const prePoem = this.e.Estrofa(this.s.random(5, 9));
      ///////////////////////////////////////////////////////////////
      this.title = this.t.Titulo(prePoem);
      ///////////////////////////////////////////////////////////////
      if (GeoData.lug !== '') {
        if (GeoData.lug === undefined) {
          this.sig = this.s.dateEs() + '.';
        } else {
          this.sig = GeoData.lug + ', ' + this.s.dateEs() + '.';
        }
      } else {
        this.sig = this.s.dateEs() + '.';
      }
      ///////////////////////////////////////////////////////////////
      // HTML FORMAT
      this.poem = prePoem.replace(/\n/g, '<br />');
      //
      this.check = true;
    }

  }

}
