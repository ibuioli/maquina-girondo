import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolsService } from './core/tools.service';
import { SystemService } from './core/system.service';
import { GeolocService } from './core/geoloc.service';

import { VersoService } from './core/verso.service';
import { EstrofaService } from './core/estrofa.service';
import { TituloService } from './core/titulo.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ToolsService,
    SystemService,
    GeolocService,
    VersoService,
    EstrofaService,
    TituloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
