import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements ControlValueAccessor {
  addressForm: FormGroup = new FormGroup({
    addressLine: new FormControl('', [Validators.required]),
    areaCode: new FormControl('', [
      Validators.required,
      Validators.maxLength(5),
    ]),
  });
  onTouched: (() => void) | undefined;

  registerOnChange(fn: never): void {
    console.log('on change');
    this.addressForm.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: never): void {
    console.log('on blur');
    this.onTouched = fn;
  }

  writeValue(obj: never): void {
    obj && this.addressForm.setValue(obj, { emitEvent: false });
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressForm.disable() : this.addressForm.enable();
  }
}
