import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { YaMapComponent } from './components/yamap.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, YaMapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
