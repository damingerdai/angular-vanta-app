import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import BIRDS from 'vanta/dist/vanta.birds.min';

declare global {
  interface Window {
    BIRDS: any;
  }
}

window.BIRDS = BIRDS;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
