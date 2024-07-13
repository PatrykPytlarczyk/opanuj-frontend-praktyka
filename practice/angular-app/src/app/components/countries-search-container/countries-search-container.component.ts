import { Component, computed, OnInit, signal } from '@angular/core';
import { CountriesFormComponent } from '../countries-form/countries-form.component';
import { ActiveFilterTypeEnum } from '../../types/ActiveFilterType.enum';
import { CountriesApiService } from '../../services/countries-api.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-countries-search-container',
  standalone: true,
  imports: [
    CountriesFormComponent,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './countries-search-container.component.html',
  styleUrl: './countries-search-container.component.scss'
})
export class CountriesSearchContainerComponent implements OnInit {

  filterOptions: { value: ActiveFilterTypeEnum; label: string }[];

  characters = computed(() => {
    console.log(this.countriesApiService.countries(),'00000000000')
    return this.countriesApiService.countries();
  })
  constructor(public countriesApiService:CountriesApiService) {
  }

  ngOnInit() {
    this.setFilterOptions();
  }

  setActiveFilter(selectedFilter: ActiveFilterTypeEnum) {
    console.log(selectedFilter);
    this.countriesApiService.setFilter(selectedFilter);
  }

  private setFilterOptions() {
    this.filterOptions = Object.entries(ActiveFilterTypeEnum).map(([key, value]) => ({
      label: capitalizeString(key),
      value
    }));
  }

  counter = signal(0);

  derivedCounter = computed(() => {
    console.log('2222')
    return this.counter() * 10;

  })

  increment() {

    console.log(`Updating counter...`)

    this.counter.set(this.counter() + 1);
    console.log(this.derivedCounter())
  }
}

const capitalizeString = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};
