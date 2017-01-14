import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-halogen',
  templateUrl: './halogen.component.html',
  styleUrls: ['./halogen.component.css']
})
export class HalogenComponent implements OnInit {

  halWattage:number;
  halCost:number;

  HAL_CONVERSION = .0450;
  TOTAL_DAYS = 365;

  constructor() { }

  ngOnInit() {
  }

calculateEnergyCost(lumens:number, kWh:number, hours:number){
    this.halWattage = +(lumens * this.HAL_CONVERSION).toFixed(1);

    if(hours > 24){
      hours = 24;
    }

    var total_hours : number = this.TOTAL_DAYS * hours;
    var cost = kWh / 100;

    this.halCost = +(((this.halWattage * total_hours) / 1000) * cost).toFixed(2);
  }
}
