import { Injectable } from '@angular/core';

import { ICompanyPrices, ITravelCompany, ITravelCompanyConditions } from 'src/app/utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CompanyPricesService {
  companyPrices: ICompanyPrices[] = [];

  calculate(company: ITravelCompany, kilometer: number, age: number, baggageWeight: number): ICompanyPrices {
    const economyPrice = this.calculateCompanyPrice(company.economy, kilometer, age, baggageWeight);
    const advancedPrice = this.calculateCompanyPrice(company.advanced, kilometer, age, baggageWeight);
    const luxuryPrice = this.calculateCompanyPrice(company.luxury, kilometer, age, baggageWeight);

    return {
      name: company.name,
      economyPrice,
      advancedPrice,
      luxuryPrice,
    };
  }

  calculateCompanyPrice(companyClass: ITravelCompanyConditions, kilometer: number, age: number, baggageWeight: number): number | null {
    const kilometerPrice = companyClass.pricePerOneKilometer * kilometer;
    let baggageWeightPrice = 0;
    let discountForChildrens = 0;
    let result = null;

    if (companyClass.baggagePriceWhenExceedingMaxWeight && baggageWeight >= companyClass.maxFreeBaggageWeight) {
      baggageWeightPrice = companyClass.baggagePriceWhenExceedingMaxWeight.price;
      if (companyClass.baggagePriceWhenExceedingMaxWeight.perKilogramm) {
        baggageWeightPrice *= baggageWeight;
      }
    }

    if (companyClass.discountForChildrens && age <= companyClass.discountForChildrens.age) {
      discountForChildrens = (kilometerPrice * companyClass.discountForChildrens.discount) / 100;
    }

    if (baggageWeight <= companyClass.maxBaggageWeight) {
      result = (kilometerPrice - discountForChildrens) + baggageWeightPrice;
    }

    return result;
  }
}
