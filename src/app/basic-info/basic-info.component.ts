import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

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
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent implements ControlValueAccessor {
  basicInfoForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onTouched: (() => void) | undefined;

  registerOnChange(fn: never): void {
    console.log('on change');
    this.basicInfoForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: never): void {
    console.log('on blur');
    this.onTouched = fn;
  }

  writeValue(obj: never): void {
    obj && this.basicInfoForm.setValue(obj);
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }

  validate(c: AbstractControl): ValidationErrors | null {
    console.log('Basic Info validation', c);
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
