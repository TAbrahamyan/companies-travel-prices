import { Component } from '@angular/core';

import { CompanyPricesService } from 'src/app/services/company-prices.service';

@Component({
  selector: 'app-company-prices',
  templateUrl: './company-prices.component.html',
  styleUrls: ['./company-prices.component.scss'],
})
export class CompanyPricesComponent {
  constructor (public companyPricesService: CompanyPricesService) { }
}
