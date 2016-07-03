/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { BeersListComponent } from './beers-list.component';

describe('Component: BeersList', () => {
  it('should create an instance', () => {
    let component = new BeersListComponent();
    expect(component).toBeTruthy();
  });
});
