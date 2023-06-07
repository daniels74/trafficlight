import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrafficlightComponent } from './Components/trafficlight/trafficlight.component';

@NgModule({
  declarations: [
    AppComponent,
    TrafficlightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
