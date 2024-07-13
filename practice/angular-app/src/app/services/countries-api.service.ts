import { computed, effect, EffectRef, Injectable, Signal, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';
import { ActiveFilterTypeEnum } from '../types/ActiveFilterType.enum';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CountriesApiService {

  countries = signal([])

  filter = signal(ActiveFilterTypeEnum.NAME);
  private effect: EffectRef;

  constructor() {
    this.effect = effect(async () => {
      const res = await axios.get(`https://restcountries.com/v3.1/${this.filter()}/pol`);
      this.countries.set(res.data)
    });
    setTimeout(() => {
      this.effect.destroy();
    })
  }

  setFilter(selectedFilter: ActiveFilterTypeEnum) {
    this.filter.set(selectedFilter);
  }
}
