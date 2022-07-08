import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  private vantaEffect: any;

  title = 'angular-vanta-app';

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.vantaEffect = BIRDS({
      el: this.el.nativeElement,
      // el: '#app',
      THREE: THREE, // use a custom THREE when initializing
    });
  }


  ngOnDestroy(): void {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
}
