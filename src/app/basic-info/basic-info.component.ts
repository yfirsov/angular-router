import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => BasicInfoComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent extends ControlValueAccessorDirective<FormGroup> {
  firstName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  basicInfoForm: FormGroup = new FormGroup({
    firstName: this.firstName,
    email: this.email,
  });

  constructor() {
    super();
    this.form = this.basicInfoForm;
  }

  validate(): ValidationErrors | null {
    return this.basicInfoForm.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: 'basicInfoForm fields are invalid',
          },
        };
  }
}
