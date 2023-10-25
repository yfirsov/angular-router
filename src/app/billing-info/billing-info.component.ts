import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../adress/address.component';
import { BasicInfoComponent } from '../basic-info/basic-info.component';

@Component({
  selector: 'app-billing-info',
  standalone: true,
  imports: [
    CommonModule,
    BasicInfoComponent,
    ReactiveFormsModule,
    AddressComponent,
  ],
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css'],
})
export class BillingInfoComponent {
  nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl(''),
    address: new FormControl(''),
  });

  public onSubmit() {
    console.log(this.nestedForm.valid);
    console.log('Billing Info', this.nestedForm.value);
  }
}
