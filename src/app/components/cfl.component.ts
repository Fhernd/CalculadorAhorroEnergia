import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iz-cfl',
  templateUrl: './cfl.component.html',
  styleUrls: ['./cfl.component.css']
})
export class CflComponent implements OnInit {

  cflWattage:number;
  cflCost:number;

  CFL_CONVERSION = .0146;
  TOTAL_DAYS = 365;

  constructor() { }

  ngOnInit() {
  }

calculateEnergyCost(lumens:number, kWh:number, hours:number){
    this.cflWattage = +(lumens * this.CFL_CONVERSION).toFixed(1);

    if(hours > 24){
      hours = 24;
    }

    var total_hours : number = this.TOTAL_DAYS * hours;
    var cost = kWh / 100;

    this.cflCost = +(((this.cflWattage * total_hours) / 1000) * cost).toFixed(2);
  }
}
