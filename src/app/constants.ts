export const aeroflotAviacompany: any = {
  name: 'Аэрофлот',
  economy: {
    pricePerOneKilometer: 4,
    baggagePriceWhenExceedingMaxWeight: {
      price: 4000,
      perKilogramm: false,
    },
    maxFreeBaggageWeight: 5,
    maxBaggageWeight: 20,
    discountForChildrens: null,
  },
  advanced: {
    pricePerOneKilometer: 8,
    baggagePriceWhenExceedingMaxWeight: {
      price: 5000,
      perKilogramm: false,
    },
    maxFreeBaggageWeight: 20,
    maxBaggageWeight: 50,
    discountForChildrens: {
      age: 7,
      discount: 30,
      excludingBaggage: true,
    },
  },
  luxury: {
    pricePerOneKilometer: 15,
    baggagePriceWhenExceedingMaxWeight: null,
    maxBaggageWeight: 50,
    discountForChildrens: {
      age: 16,
      discount: 30,
      excludingBaggage: true,
    },
  },
};

export const railwayCompany: any = {
  name: 'РЖД',
  economy: {
    pricePerOneKilometer: 0.5,
    baggagePriceWhenExceedingMaxWeight: {
      price: 50,
      perKilogramm: true,
    },
    maxFreeBaggageWeight: 15,
    maxBaggageWeight: 50,
    discountForChildrens: {
      age: 5,
      discount: 50,
      excludingBaggage: true,
    },
  },
  advanced: {
    pricePerOneKilometer: 2,
    baggagePriceWhenExceedingMaxWeight: {
      price: 50,
      perKilogramm: true,
    },
    maxFreeBaggageWeight: 20,
    maxBaggageWeight: 60,
    discountForChildrens: {
      age: 8,
      discount: 30,
      excludingBaggage: true,
    },
  },
  luxury: {
    pricePerOneKilometer: 4,
    baggagePriceWhenExceedingMaxWeight: null,
    maxBaggageWeight: 60,
    discountForChildrens: {
      age: 16,
      discount: 20,
      excludingBaggage: true,
    },
  },
};
