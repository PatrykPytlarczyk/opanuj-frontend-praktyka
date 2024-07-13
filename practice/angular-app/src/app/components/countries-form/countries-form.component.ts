import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActiveFilterTypeEnum } from '../../types/ActiveFilterType.enum';

@Component({
  selector: 'app-countries-form',
  standalone: true,
  imports: [],
  templateUrl: './countries-form.component.html',
  styleUrl: './countries-form.component.scss'
})
export class CountriesFormComponent implements OnInit {

  @Input() filterType: ActiveFilterTypeEnum = ActiveFilterTypeEnum.NAME;
  @Input() filterOptions: { value: ActiveFilterTypeEnum, label: string }[];

  @Output() filterChanged$: EventEmitter<ActiveFilterTypeEnum> = new EventEmitter<ActiveFilterTypeEnum>();

  constructor() {
  }

  ngOnInit() {
  }

  onFilterTypeChange($event:Event) {
    this.filterType = ($event.target as HTMLSelectElement).value as ActiveFilterTypeEnum;
    this.filterChanged$.emit(this.filterType);
  }

}
