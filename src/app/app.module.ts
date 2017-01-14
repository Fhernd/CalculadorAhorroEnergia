import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IncandescentComponent } from './components/incandescent.component';
import { HalogenComponent } from './components/halogen.component';
import { CflComponent } from './components/cfl.component';
import { LedComponent } from './components/led.component';

@NgModule({
  declarations: [
    AppComponent,
    IncandescentComponent,
    HalogenComponent,
    CflComponent,
    LedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
