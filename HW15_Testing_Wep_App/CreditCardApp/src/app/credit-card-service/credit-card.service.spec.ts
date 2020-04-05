import { TestBed } from '@angular/core/testing';

import { CreditCardService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: CreditCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditCardService);
  });

  it('should create CreditCardService', async () => {
    expect(service).toBeTruthy();
  });


  it( 'should return message "Unknown card type" in case of unknown credit card type', () => {
    expect(service.testCreditCard('3400 0000 0000', 'Other')).toEqual({
      isValid: false,
      message: "Unknown card type"
    });
  })

  it( 'should return message "Credit card number is in invalid format" in case the letter is included', () => {
    expect(service.testCreditCard('5500 0000 0000 0004a', 'Mastercard')).toEqual({
      isValid: false,
      message: "Credit card number is in invalid format"
    })
  })

  it( 'should return message "Credit card number is invalid" in case the prefix is incorrect', () => {
    expect(service.testCreditCard('4111 1111 1111 1111', 'Mastercard')).toEqual({
      isValid: false,
      message: "Credit card number is invalid"
    })
  })

  it( 'should return message "Credit card number is invalid" in case ten digits module is invalid', () => {
    expect(service.testCreditCard('4111 1111 1211 1111', 'Visa')).toEqual({
      isValid: false,
      message: "Credit card number is invalid"
    })
  })

  it( 'should return message "Warning! This credit card number is associated with a scam attempt" in case the card was stolen', () => {
    expect(service.testCreditCard('5490997771092064', 'Mastercard')).toEqual({
      isValid: false,
      message: "Warning! This credit card number is associated with a scam attempt"
    })
  })

  it( 'should return message "Credit card number has an inappropriate number of digits" in case quantity of digits is less than required by the certain type', () => {
    expect(service.testCreditCard('6011 0000 00 0004', 'Discover')).toEqual({
      isValid: false,
      message: "Credit card number has an inappropriate number of digits"
    })
  })

  it( 'should return message "Credit card has a valid format', () => {
    expect(service.testCreditCard('5500 0000 0000 0004', 'Mastercard')).toEqual({
      isValid: true,
      message: "Credit card has a valid format"
    })
  })
})
