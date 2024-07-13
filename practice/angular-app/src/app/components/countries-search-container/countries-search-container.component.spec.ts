import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSearchContainerComponent } from './countries-search-container.component';

describe('CountriesSearchContainerComponent', () => {
  let component: CountriesSearchContainerComponent;
  let fixture: ComponentFixture<CountriesSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesSearchContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
