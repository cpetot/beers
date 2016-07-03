import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'viseo-beer',
  templateUrl: 'beer.component.html',
  styleUrls: ['beer.component.css']
})
export class BeerComponent {
  beerName: String;

  onClick() {
    console.log(this.beerName);
  }
}
