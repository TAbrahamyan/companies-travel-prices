import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CompanyPricesService } from 'src/app/services/company-prices.service';
import { aeroflotAviacompany, railwayCompany } from 'src/app/constants';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form = new FormGroup({
    kilometers: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    baggage: new FormControl('', [Validators.required]),
  });

  constructor (private companyPricesService: CompanyPricesService) { }

  calculate() {
    const aeroflotAviacompanyPrice = this.companyPricesService.calculate(aeroflotAviacompany, this.form.value.kilometers, this.form.value.age, this.form.value.baggage);
    const railwayCompanyPrice = this.companyPricesService.calculate(railwayCompany, this.form.value.kilometers, this.form.value.age, this.form.value.baggage);
    this.companyPricesService.companyPrices.length = 0;
    this.companyPricesService.companyPrices.push(aeroflotAviacompanyPrice, railwayCompanyPrice);
  }
}
