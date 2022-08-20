import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as meSpeak from 'mespeak';
import { EstrofaService } from '../core/estrofa.service';
import { SystemService } from '../core/system.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {
  @ViewChild('debug', { static: true }) debug: ElementRef;

  constructor(public s: SystemService, public e: EstrofaService) {
    meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'));
    meSpeak.loadVoice(require('mespeak/voices/es.json'));
  }

  public ngOnInit(): void {
    this.debugButton();
  }

  public newPoem(): string {
    const poem = this.e.Estrofa(this.s.random(5, 7));
    return poem;
  }

  public debugButton(): void {
    const poem = this.newPoem();
    this.debug.nativeElement.innerHTML = poem.replace(/\n/g, '<br>');
    meSpeak.speak(poem.replace(/\n/g, '...'), {variant: 'm7', pitch: 40, speed: 145, wordgap: 1});
  }
}
