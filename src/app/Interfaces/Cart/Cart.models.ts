export interface BasketItem {
  id: number;
  productName: string;
  pictureUrl: string;
  brand: string;
  type: string;
  price: number;
  quantity: number;
}

export interface CustomerBasket {
  id: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
  deliveryMethodId?: number;
}

export interface shipping{
  to : string ;
  from :string ;
  price : number;
  currency:string;
}
