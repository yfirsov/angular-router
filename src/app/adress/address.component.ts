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
import { ControlValueAccessorDirective } from '../basic-info/control-value-accessor.directive';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

@Component({
  selector: 'app-address',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, ReactiveFormsModule, ValidationErrorsComponent],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent extends ControlValueAccessorDirective<FormGroup> {
  addressLine = new FormControl('', [Validators.required]);
  zip = new FormControl('', [Validators.required, Validators.maxLength(5)]);
  addressForm: FormGroup = new FormGroup({
    addressLine: this.addressLine,
    zip: this.zip,
  });

  errorMessages: Record<string, string> = {
    maxlength: 'Zip should have not more than 5 numbers',
  };

  constructor() {
    super();
    this.form = this.addressForm;
  }

  validate(): ValidationErrors | null {
    return this.addressForm.valid
      ? null
      : {
          invalidForm: {
            valid: false,
            message: 'address fields are invalid',
          },
        };
  }
}
