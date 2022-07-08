import { HostListener } from '@angular/core';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';

const VANTAS = [
  'birds',
  'fog',
  'waves',
  'clouds',
  'clouds2',
  'globe',
  'net',
  'cells',
  'trunk',
  'topology',
  'dots',
  'rings',
  'halo',
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  private vantaEffect: any;

  private lastN: number;

  constructor(private el: ElementRef) {
    this.lastN = -1;
  }

  @HostListener('click')
  protected async buildVantaEffect() {
    try {
      const n = this.getRandomN();
      const vanta = (await import(`vanta/dist/vanta.${VANTAS[n]}.min`)).default;
      this.vantaEffect = vanta({
        el: this.el.nativeElement,
        THREE: THREE, // use a custom THREE when initializing
      });
    } catch (err) {
      console.error(err);
      this.buildVantaEffect();
    }

  }

  protected destroyVantaEffect() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }

  ngOnInit(): void {
    this.buildVantaEffect()
  }

  ngOnDestroy(): void {
    this.destroyVantaEffect();
  }

  private getRandomN() {
    let n = Math.round(Math.random() *  12);
    while(this.lastN == n) {
      n = Math.round(Math.random() *  12);
    }
    this.lastN = n;
    return n;
  }
}
