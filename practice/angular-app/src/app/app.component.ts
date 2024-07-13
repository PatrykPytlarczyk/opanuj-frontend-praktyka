import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  CountriesSearchContainerComponent
} from './components/countries-search-container/countries-search-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountriesSearchContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';
}
