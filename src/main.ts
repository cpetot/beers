import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { BeerService } from './app/beer.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [BeerService]);
