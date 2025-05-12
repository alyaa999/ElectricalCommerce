export interface ProductImage {
  imageUrl: string;
  isPrimary: boolean;
}
export interface Cart {
  id: number;
  totalPrice: number,
  totalItemsNumber: number,
  customerId: number,
  createdDate: null,
  cartProducts: CartProduct[]
}

export interface CartProduct {
  cartId: number;
  productCode: number;
  name: string;
  code: string;
  quantity: number;
  unitPrice: number;
  itemTotal: number;
  PrimaryImage: string;
  images?: ProductImage[];
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