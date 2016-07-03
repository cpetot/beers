import { Component } from '@angular/core';
import { BeerComponent } from './beer/beer.component';

@Component({
  moduleId: module.id,
  selector: 'viseo-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BeerComponent]
})
export class AppComponent {
  title = 'Hello Viseo !';
}
