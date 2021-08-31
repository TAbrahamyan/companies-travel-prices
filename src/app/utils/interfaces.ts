export interface ICompanyPrices {
  name: string;
  economyPrice: number | null;
  advancedPrice: number | null;
  luxuryPrice: number | null;
}

export interface ITravelCompany {
  name: string;
  economy: ITravelCompanyConditions;
  advanced: ITravelCompanyConditions;
  luxury: ITravelCompanyConditions;
}

export interface ITravelCompanyConditions {
  pricePerOneKilometer: number;
  baggagePriceWhenExceedingMaxWeight: IBaggagePriceWhenExceedingMaxWeight | null;
  maxFreeBaggageWeight: number;
  maxBaggageWeight: number;
  discountForChildrens: IDiscountForChildrens | null;
}

interface IBaggagePriceWhenExceedingMaxWeight {
  price: number;
  perKilogramm: boolean;
}

interface IDiscountForChildrens {
  age: number;
  discount: number;
  excludingBaggage: boolean;
}
