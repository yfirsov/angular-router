import { Directive } from '@angular/core';
import { ControlValueAccessor, FormGroup } from '@angular/forms';

@Directive({
  selector: '[appControlValueAccessor]',
  standalone: true,
})
export class ControlValueAccessorDirective<T> implements ControlValueAccessor {
  form!: FormGroup;

  private onTouched!: () => T;

  registerOnChange(fn: never): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: never): void {
    this.onTouched = fn;
  }

  writeValue(value: T): void {
    value && this.form.setValue(value);
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.form.disable() : this.form.enable();
  }
}
