export interface OrderIndex{
  id:number,
  date:string,
  cntItems:number,
  status:string,
  totalCost:number,
}
export interface RawOrder {
  id: number;
  orderDate: string;
  items: any[]; 
  status: string;
  total: number;
}

interface Item{
  productId: number,
  productName: string,
  pictureUrl: string,
  quantity: number,
  price: number
}
interface Address{
  firstName: string,
  lastName: string,
  street: string,
  city: string,
  country: string,

}
export interface OrderDetail{
  id: number;
  orderDate: string;
  status: string;
  shippingAddress:Address,
  deliveryMethod: string,
  deliveryMethodCost: number,
  items:Item[],
  subTotal: number,
  total: number,
  paymentIntentId: string
}