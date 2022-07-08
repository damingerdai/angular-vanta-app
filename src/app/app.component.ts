import { HostListener } from '@angular/core';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import BIRDS from 'vanta/dist/vanta.birds.min';
import FOG from 'vanta/dist/vanta.fog.min';
import WAVES from 'vanta/dist/vanta.waves.min';
import CLOUDS from 'vanta/dist/vanta.clouds.min';
import CLOUDS2 from 'vanta/dist/vanta.clouds2.min';
import GLOBE from 'vanta/dist/vanta.globe.min';
import NET from 'vanta/dist/vanta.net.min';
import CELLS from 'vanta/dist/vanta.cells.min';
import TRUNK from 'vanta/dist/vanta.trunk.min';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import DOTS from 'vanta/dist/vanta.dots.min';
import RINGS from 'vanta/dist/vanta.rings.min';
import HALO from 'vanta/dist/vanta.halo.min';

const VANTAS = [
  BIRDS,
  FOG,
  WAVES,
  CLOUDS,
  CLOUDS2,
  GLOBE,
  NET,
  CELLS,
  TRUNK,
  TOPOLOGY,
  DOTS,
  RINGS,
  HALO
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
  protected buildVantaEffect() {
    try {
      const n = this.getRandomN();
      const vanta = VANTAS[n];
      this.vantaEffect = vanta({
        el: this.el.nativeElement,
        THREE: THREE, // use a custom THREE when initializing
      });
      this.vantaEffect.resizes()
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
