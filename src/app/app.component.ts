import { Component, OnInit, ViewChild } from '@angular/core';

/**
 * Components
 */
import {
  IncandescentComponent
} from './components/incandescent.component';
import {
  HalogenComponent
} from './components/halogen.component';
import {
  CflComponent
} from './components/cfl.component';
import {
  LedComponent 
} from './components/led.component';

@Component({
  selector: 'iz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  lumenOptions: number[];
  lumenOption: number;
  kWh: number;
  hours: number;
  @ViewChild(IncandescentComponent)
  incandescentComponent: IncandescentComponent;
  @ViewChild(HalogenComponent)
  halogenComponent: HalogenComponent;
  @ViewChild(CflComponent)
  cflComponent: CflComponent;
  @ViewChild(LedComponent)
  ledComponent: LedComponent;

  constructor(){    
  }

  ngOnInit(){
    this.lumenOptions = [375, 500, 900, 1125, 1600];
    this.lumenOption = 900;
    this.kWh = 12;
    this.hours = 3;
    this.calculateEnergyCost();
  }

  calculateEnergyCost(){
    this.incandescentComponent.calculateEnergyCost(this.lumenOption, this.kWh, this.hours);
    this.halogenComponent.calculateEnergyCost(this.lumenOption, this.kWh, this.hours);
    this.cflComponent.calculateEnergyCost(this.lumenOption, this.kWh, this.hours);
    this.ledComponent.calculateEnergyCost(this.lumenOption, this.kWh, this.hours);
  }
}