export interface BasketItem {
  id: number;
  productName: string;
  pictureUrl: string;
  brand: string;
  type: string;
  price: number;
  description : string;
  quantity: number;
}

export interface CustomerBasket {
  id: string;
  items: BasketItem[];
  paymentIntentId?: string;
  clientSecret?: string;
  deliveryMethodId?: number;
}

export interface shipping {
  to: string;
  from: string;
  price: number;
  currency: string;
}


/* new Interfaces */

export interface CartData {
  id: string,
  paymentIntentId: string,
  clientSecret: string,
  deliveryMethodId: string,
  items: CartItems[],
}

export interface CartItems {
  id: number,
  productName: string,
  pictureUrl: string,
  description : string,
  brand: string,
  type: string,
  price: number,
  quantity: number
}


export interface WishingList {
  id: string,
  items: WishingListItems[],
}

export interface WishingListItems {
  id: number,
  productName: string,
  pictureUrl: string,
  description : string,
  brand: string,
  type: string,
  price: number
}
