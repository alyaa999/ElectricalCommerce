
export interface AddressDto {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  country: string;
}

export interface OrderDto {
  basketId: string;

  deliveryMethodId: number;

  shippingAddress: AddressDto;
}

export interface  DeliveryMethods {
  id : number ;
  cost :number ;
  deliveryTime : string ;
  description: string;
  shortName : string ;
}