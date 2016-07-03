/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { BeerService } from './beer.service';

describe('Beer Service', () => {
  beforeEachProviders(() => [BeerService]);

  it('should ...',
      inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));

  it('should create a service with a list of 2 beers',
      inject([BeerService], (service: BeerService) => {

      expect(service).toBeTruthy();
      expect(service.beers).toBeDefined();
      expect(service.beers.length).toBe(2);
  }));

});
