import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Observable } from 'rxjs';
import { BeerService, Beer } from '../../app/services/beer.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  beers$: Observable<Beer[]>;

  constructor(public navCtrl: NavController, beerService: BeerService) {
    // Beers array from service
    this.beers$ = beerService.beers$;
  }

  }
