import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'viseo-beers-list',
  templateUrl: 'beers-list.component.html',
  styleUrls: ['beers-list.component.css']
})
export class BeersListComponent {
  beers: Array<String> = ['Rochefort 10', 'Bush Ambrée'];
}
