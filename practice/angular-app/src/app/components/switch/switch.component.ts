import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent,  Observable, } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from '../form-input/form-input.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent extends FormInputComponent implements OnInit {
  @ViewChild('switchContainer', { static: true }) switchLabel: ElementRef;
  @ViewChild('switchInput', { static: true }) switchInput: ElementRef;

  keydownEvent$:Observable<KeyboardEvent>;

  constructor() {
    super()
  }

  ngOnInit() {
    this.initSubscriptions();
  }

  onChange($event: Event) {
    // Handle change event, for example emit to output
  }

  setSwitchState() {
    const checked = this.switchInput.nativeElement.checked;

    this.switchInput.nativeElement.checked = !checked;
    this.control.setValue(this.switchInput.nativeElement.checked);

    this.onChange(event);
  }

  private initSubscriptions() {
    this.keydownEvent$ = fromEvent(this.switchLabel.nativeElement, 'keydown');

    this.keydownEvent$.subscribe((event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        // event.preventDefault();
       this.setSwitchState();
      }
    });

  }
}
