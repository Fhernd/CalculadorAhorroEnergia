import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'iz-incandescent',
  templateUrl: './incandescent.component.html',
  styleUrls: ['./incandescent.component.css']
})
export class IncandescentComponent implements OnInit {

  incWattage:number;
  incCost:number;

  INC_CONVERSION = .0625;
  TOTAL_DAYS = 365;

  constructor() { }

  ngOnInit() {
  }

  calculateEnergyCost(lumens:number, kWh:number, hours:number){
    this.incWattage = +(lumens * this.INC_CONVERSION).toFixed(1);

    if(hours > 24){
      hours = 24;
    }

    var total_hours : number = this.TOTAL_DAYS * hours;
    var cost = kWh / 100;

    this.incCost = +(((this.incWattage * total_hours) / 1000) * cost).toFixed(2);
  }

}
