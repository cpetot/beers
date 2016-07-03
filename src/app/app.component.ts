import { Component } from '@angular/core';
import { BeerComponent } from './beer/beer.component';
import { BeersListComponent } from './beers-list/beers-list.component';

@Component({
  moduleId: module.id,
  selector: 'viseo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BeerComponent, BeersListComponent]
})
export class AppComponent {
  title = 'Hello Viseo !';
}
