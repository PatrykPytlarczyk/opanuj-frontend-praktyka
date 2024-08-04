import { Component, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() label: string;
  @Input() control: FormControl;

}
