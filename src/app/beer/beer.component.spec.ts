/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BeerComponent } from './beer.component';
import { BeerService } from "../beer.service";

describe('Component: Beer', () => {

beforeEachProviders(() => [BeerService]);

  it('should create a service with a list of 2 beers',
      inject([BeerService], (service: BeerService) => {

        let component = new BeerComponent(service);
        expect(component).toBeTruthy();
        expect(component.beerService).toBeTruthy();
        expect(component.beerService.beers.length).toBe(2);
  }));

  it('should add a beer and clean the beer name when addBeer with beer name defined',
      inject([BeerService], (service: BeerService) => {
        // Given
        let component = new BeerComponent(service);
        component.beerName = 'foo',

        // When
        component.addBeer();

        // Then
        expect(component.beerService.beers.length).toBe(3);
        expect(component.beerService.beers[2]).toBe('foo');
        expect(component.beerName).toBeFalsy();
  }));

  it('should do nothing when addBeer with beer name not defined',
      inject([BeerService], (service: BeerService) => {
        // Given
        let component = new BeerComponent(service);
        component.beerName = '',

        // When
        component.addBeer();

        // Then
        expect(component.beerService.beers.length).toBe(2);
  }));

});
