import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'iz-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {

  ledWattage:number;
  ledCost:number;

  LED_CONVERSION = .0125;
  TOTAL_DAYS = 365;

  constructor() { }

  ngOnInit() {
  }

  calculateEnergyCost(lumens:number, kWh:number, hours:number){
    this.ledWattage = +(lumens * this.LED_CONVERSION).toFixed(1);

    if(hours > 24){
      hours = 24;
    }

    var total_hours : number = this.TOTAL_DAYS * hours;
    var cost = kWh / 100;

    this.ledCost = +(((this.ledWattage * total_hours) / 1000) * cost).toFixed(2);
  }
}
