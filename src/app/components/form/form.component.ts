import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CompanyPricesService } from 'src/app/services/company-prices.service';
import { aeroflotAviacompany, railwayCompany } from 'src/app/utils/constants';
import { ICompanyPrices } from 'src/app/utils/interfaces';

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
    const { kilometers, age, baggage } = this.form.value;

    const aeroflotAviacompanyPrice: ICompanyPrices = this.companyPricesService.calculate(aeroflotAviacompany, kilometers, age, baggage);
    const railwayCompanyPrice: ICompanyPrices = this.companyPricesService.calculate(railwayCompany, kilometers, age, baggage);

    this.companyPricesService.companyPrices.length = 0;
    this.companyPricesService.companyPrices.push(aeroflotAviacompanyPrice, railwayCompanyPrice);
  }
}
