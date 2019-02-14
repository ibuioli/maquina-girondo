import { Component, OnInit} from '@angular/core';
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

  title = '';
  poem1 = '';
  poem2 = '';
  poem3 = '';
  poem4 = '';
  sig = '';
  //////////////////
  check = false;
  /////////////////
  pMov: number;
  value = 0;

  constructor(public s: SystemService, public e: EstrofaService, public t: TituloService, public g: GeolocService) {}

  public ngOnInit(): void {
    this.newPoem();
    this.check = true;
  }

  public nextPoemAni(): void {
    const this_ = this;

    document.getElementById('cont').classList.add('fadeOut');
    setTimeout(function() {
      this_.newPoem();
      document.getElementById('cont').classList.remove('fadeOut');
      document.getElementById('cont').classList.add('fadeIn');
      setTimeout(function() {
        document.getElementById('cont').classList.remove('fadeIn');
      }, 800);
    }, 1000);
  }

  public newPoem(): void {

    this.check = false;
    const prePoem1 = this.e.Estrofa(this.s.random(5, 7));
    const prePoem2 = this.e.Estrofa(this.s.random(4, 6));
    const prePoem3 = this.e.Estrofa(this.s.random(6, 8));
    const prePoem4 = this.e.Estrofa(this.s.random(4, 7));
    ///////////////////////////////////////////////////////////////
    this.title = this.t.Titulo(prePoem1);
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
    this.poem1 = prePoem1.replace(/\n/g, '<br />');
    this.poem2 = prePoem2.replace(/\n/g, '<br />');
    this.poem3 = prePoem3.replace(/\n/g, '<br />');
    this.poem4 = prePoem4.replace(/\n/g, '<br />');
    //
    this.check = true;

  }

}
