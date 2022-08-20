import { Injectable } from '@angular/core';
import { SystemService } from './system.service';
import { GeoData } from './geodata';
declare var navigator: any;

@Injectable()
export class GeolocService {
  public noche = false;

  constructor(public s: SystemService) {
    const this_ = this;

    const d = new Date();
    const n = d.getHours();

    if (n >= 19 || n >= 0 && n <= 5) {
      this.noche = true;
    } else {
      this.noche = false;
    }

    document.addEventListener('deviceready', function() {
      navigator.geolocation.getCurrentPosition(function(position) {
        this_.getLug(position.coords.latitude, position.coords.longitude);
        this_.getLugPro(position.coords.latitude, position.coords.longitude);
      }, function(error) {
        console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
        GeoData.lug = '';
        GeoData.tema = this.s.random(0, 3.99);
      });
    }, false);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        this_.getLug(position.coords.latitude, position.coords.longitude);
        this_.getLugPro(position.coords.latitude, position.coords.longitude);
      }, function(err) {
        console.log('ERR: Geolocation fail');
        GeoData.lug = '';
        GeoData.tema = s.random(0, 3.99);
      });
    } else {
      console.log('ERR: Geolocation not supported');
      GeoData.lug = '';
      GeoData.tema = s.random(0, 3.99);
    }
  }

  // LIMPIADOR DE NOMBRES-SITIOS
  limpiarSitios(s) {
    s = s.replace(/\bsrl\b/gi, '');
    s = s.replace(/\bsa\b/gi, '');
    s = s.replace(/\bco\b/gi, '');
    s = s.replace(/\./g, '');
    s = s.replace(/\bn°/gi, '');
    // Remover Números
    s = s.replace(/[0-9\.]+/g, '');

    return s;
  }

  ///////////////////////////////////////////////////////////////////////////////
  public getLug(lat: number, lng: number): void {
    const this_ = this;

    this.s.loadJSON('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
    lat + '%2C' + lng + '&language=es&key=AIzaSyCXodxfGv7qhVkx4-KJcAbFisjm020GvQI', function(err, data) {
      if (err !== null) {
        GeoData.lug = '';
        GeoData.tema = this_.s.random(0, 3.99);
      } else {
        if (data.results.length !== 0) {
          for (let i = 0; i < data.results[0].address_components.length; i++) {
            if (data.results[0].address_components[i].types.length > 1) {
              GeoData.lug = data.results[0].address_components[i].short_name;
              break;
            }
          }
        } else {
          GeoData.lug = '';
          GeoData.tema = this_.s.random(0, 3.99);
        }
      }
    });
  }

  public getLugPro(lat: number, lng: number): void {
    const this_ = this;

    this.s.loadJSON('http://api.geonames.org/findNearbyJSON?lat=' + lat
     + '&lng=' + lng + '&lang=es&style=short&username=ibuioli', function(err, data) {
      if (data.geonames.length !== 0) {
        if (data.geonames[0].fcl === 'H' || data.geonames[0].fcl === 'T' || data.geonames[0].fcl === 'U') {
          if (this_.noche) {
            GeoData.tema = 1;
          } else {
            GeoData.tema = 3;
          }
        } else if (data.geonames[0].fcl === 'L' || data.geonames[0].fcl === 'V') {
          if (this_.noche) {
            GeoData.tema = 1;
          } else {
            GeoData.tema = 2;
          }
        } else {
          if (this_.noche) {
            GeoData.tema = 1;
          } else {
            GeoData.tema = 0;
          }
        }
      }
    });

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat
        + ',' + lng + '&language=es&rankby=distance&types=establishment&key=AIzaSyCXodxfGv7qhVkx4-KJcAbFisjm020GvQI';

      fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        if (data.status === 'OK') {
          for (let i = 0; i < data.results.length; i++) {
            GeoData.slug[i] = this_.limpiarSitios(data.results[i].name);
            GeoData.slug_pro[i] = data.results[i].types[0];
          }
        } else {
          GeoData.slug = [];
          GeoData.slug_pro = [];
        }
      })
      .catch(e => {
        console.log('ERR: ' + e);
        GeoData.lug = '';
        GeoData.tema = this_.s.random(0, 3.99);
      });
  }

}
