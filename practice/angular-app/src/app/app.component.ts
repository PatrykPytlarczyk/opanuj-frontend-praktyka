import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchComponent } from './components/switch/switch.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormInputComponent } from './components/form-input/form-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchComponent, ReactiveFormsModule, NgIf, FormInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  form: FormGroup;
  consentControl: FormControl;
  firstNameControl: FormControl;
  lastNameControl: FormControl;
  emailControl: FormControl;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setControls();
    this.setForm();
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }

  private setForm() {
    this.form = this.fb.group({
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      email: this.emailControl,
      consent: this.consentControl
    });
  }

  private setControls() {
    this.consentControl = new FormControl(false, Validators.requiredTrue);
    this.firstNameControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')]);
    this.lastNameControl = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]+$')]);
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
  }
}
