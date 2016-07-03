import { Component } from '@angular/core';
import { BeerService } from "../beer.service";

@Component({
  moduleId: module.id,
  selector: 'viseo-beer',
  templateUrl: 'beer.component.html',
  styleUrls: ['beer.component.css']
})
export class BeerComponent {
  beerName: String;

  constructor(public beerService : BeerService) {
  }

  addBeer() {
    if(this.beerName) {
      this.beerService.beers.push(this.beerName);
      this.beerName = '';
    }
  }
}
