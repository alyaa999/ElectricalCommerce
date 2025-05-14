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
  typeId: number,
  isFavourited: boolean
}

export interface DashboardProductApiResponse {
  pageSize: 0,
  pageIndex: 0,
  count: 0,
  data: Product[],
}