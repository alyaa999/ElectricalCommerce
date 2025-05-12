export interface Catgoery {
  id: number;
  name:string;
  image: string;
 
}

export interface Product {
  id: number,
  pictureUrl: string,
  name: string,
  price: number,
  category: string,
  description: string,
  brand: string,
  brandId: number,
  type: string,
  typeId: number
}